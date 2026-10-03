from __future__ import annotations

import argparse
import csv
import json
import math
from dataclasses import asdict, dataclass
from pathlib import Path
from statistics import mean, median, pstdev
from typing import Any, Iterable


EPS = 1e-12
EARTH_RADIUS_KM = 6371.0088


@dataclass(frozen=True)
class StarObservation:
    name: str
    hour_angle_hours: float
    declination_deg: float
    x: float
    y: float


@dataclass(frozen=True)
class Candidate:
    pair: str
    branch: str
    latitude: float
    longitude: float


def hms_to_hours(hours: float, minutes: float, seconds: float) -> float:
    if minutes < 0 or seconds < 0 or minutes >= 60 or seconds >= 60:
        raise ValueError("hour-angle minutes/seconds must be in [0, 60)")
    return hours + minutes / 60.0 + seconds / 3600.0


def dms_to_degrees(degrees: float, minutes: float, seconds: float) -> float:
    if minutes < 0 or seconds < 0 or minutes >= 60 or seconds >= 60:
        raise ValueError("declination minutes/seconds must be in [0, 60)")
    sign = -1.0 if degrees < 0 else 1.0
    return sign * (abs(degrees) + minutes / 60.0 + seconds / 3600.0)


def normalize_longitude(degrees: float) -> float:
    value = (degrees + 180.0) % 360.0 - 180.0
    return 180.0 if value == -180.0 else value


def ground_point(star: StarObservation) -> tuple[float, float]:
    latitude = star.declination_deg
    longitude = normalize_longitude(360.0 - star.hour_angle_hours * 15.0)
    return latitude, longitude


def normal_vector(latitude_deg: float, longitude_deg: float) -> tuple[float, float, float]:
    lat = math.radians(latitude_deg)
    lon = math.radians(longitude_deg)
    return (
        math.cos(lon) * math.cos(lat),
        math.sin(lon) * math.cos(lat),
        math.sin(lat),
    )


def dot(a: Iterable[float], b: Iterable[float]) -> float:
    return sum(x * y for x, y in zip(a, b))


def focal_length_for_pair(
    first: StarObservation,
    second: StarObservation,
    first_vector: tuple[float, float, float],
    second_vector: tuple[float, float, float],
) -> tuple[float | None, str | None]:
    cosine = max(-1.0, min(1.0, dot(first_vector, second_vector)))
    x1, y1 = first.x, first.y
    x2, y2 = second.x, second.y

    d = cosine * cosine - 1.0
    e = (
        (x1 * x1 + y1 * y1 + x2 * x2 + y2 * y2) * cosine * cosine
        - 2.0 * (x1 * x2 + y1 * y2)
    )
    f = (
        (x1 * x1 + y1 * y1)
        * (x2 * x2 + y2 * y2)
        * cosine
        * cosine
        - (x1 * x2 + y1 * y2) ** 2
    )
    discriminant = e * e - 4.0 * d * f

    if abs(d) <= EPS:
        return None, "degenerate focal-length equation"
    if discriminant < 0:
        return None, f"negative focal discriminant ({discriminant:.6g})"

    radicand = (-math.sqrt(discriminant) - e) / (2.0 * d)
    if radicand < 0:
        return None, f"negative focal radicand ({radicand:.6g})"

    return math.sqrt(radicand), None


def elevation_sines(
    stars: list[StarObservation],
    zenith_x: float,
    zenith_y: float,
    focal_length: float,
) -> list[float]:
    zenith_norm = math.sqrt(
        zenith_x * zenith_x + zenith_y * zenith_y + focal_length * focal_length
    )
    values: list[float] = []

    for star in stars:
        star_norm = math.sqrt(
            star.x * star.x + star.y * star.y + focal_length * focal_length
        )
        ratio = (
            zenith_x * star.x
            + zenith_y * star.y
            + focal_length * focal_length
        ) / (zenith_norm * star_norm)
        values.append(max(-1.0, min(1.0, ratio)))

    return values


def solve_pair_candidates(
    first: StarObservation,
    second: StarObservation,
    first_vector: tuple[float, float, float],
    second_vector: tuple[float, float, float],
    sin_first: float,
    sin_second: float,
) -> tuple[list[Candidate], str | None]:
    a = first_vector
    b = second_vector

    cross_x = b[1] * a[2] - b[2] * a[1]
    cross_y = b[2] * a[0] - b[0] * a[2]
    cross_z = b[0] * a[1] - b[1] * a[0]
    aa = cross_x * cross_x + cross_y * cross_y + cross_z * cross_z

    term_a = b[0] * a[2] - a[0] * b[2]
    term_b = a[2] * sin_second - b[2] * sin_first
    term_c = a[0] * b[1] - a[1] * b[0]
    term_d = b[1] * sin_first - a[1] * sin_second
    bb = 2.0 * (term_a * term_b + term_c * term_d)

    q_a = a[2] * sin_second - b[2] * sin_first
    q_b = b[1] * sin_first - a[1] * sin_second
    q_c = a[1] * b[2] - b[1] * a[2]
    cc = q_a * q_a + q_b * q_b - q_c * q_c

    discriminant = bb * bb - 4.0 * aa * cc
    pair_name = f"{first.name} / {second.name}"

    if aa <= EPS:
        return [], "degenerate location equation"
    if discriminant < 0:
        return [], f"negative location discriminant ({discriminant:.6g})"

    term_f = a[1] * b[2] - b[1] * a[2]
    term_i = b[1] * a[2] - a[1] * b[2]
    if abs(term_f) <= EPS or abs(term_i) <= EPS:
        return [], "unstable denominator in location equation"

    sqrt_d = math.sqrt(discriminant)
    roots = [
        ("+", (-bb + sqrt_d) / (2.0 * aa)),
        ("-", (-bb - sqrt_d) / (2.0 * aa)),
    ]

    candidates: list[Candidate] = []
    for branch, x in roots:
        y = (term_a * x + term_b) / term_f

        term_g = a[0] * b[1] - b[0] * a[1]
        term_h = b[1] * sin_first - a[1] * sin_second
        z = (term_g * x + term_h) / term_i

        norm = math.sqrt(x * x + y * y + z * z)
        if norm <= EPS:
            continue

        latitude = math.degrees(math.asin(max(-1.0, min(1.0, z / norm))))
        longitude = normalize_longitude(math.degrees(math.atan2(-y, -x)))
        candidates.append(
            Candidate(
                pair=pair_name,
                branch=branch,
                latitude=latitude,
                longitude=longitude,
            )
        )

    return candidates, None


def haversine_km(a: Candidate, b: Candidate) -> float:
    lat1, lon1 = math.radians(a.latitude), math.radians(a.longitude)
    lat2, lon2 = math.radians(b.latitude), math.radians(b.longitude)
    dlat = lat2 - lat1
    dlon = lon2 - lon1
    h = (
        math.sin(dlat / 2.0) ** 2
        + math.cos(lat1) * math.cos(lat2) * math.sin(dlon / 2.0) ** 2
    )
    return 2.0 * EARTH_RADIUS_KM * math.asin(min(1.0, math.sqrt(h)))


def spherical_center(points: list[Candidate]) -> tuple[float, float]:
    x = y = z = 0.0
    for point in points:
        lat = math.radians(point.latitude)
        lon = math.radians(point.longitude)
        x += math.cos(lat) * math.cos(lon)
        y += math.cos(lat) * math.sin(lon)
        z += math.sin(lat)

    n = float(len(points))
    x, y, z = x / n, y / n, z / n
    lon = math.atan2(y, x)
    hyp = math.sqrt(x * x + y * y)
    lat = math.atan2(z, hyp)
    return math.degrees(lat), normalize_longitude(math.degrees(lon))


def cluster_candidates(
    candidates: list[Candidate],
    radius_km: float,
    minimum_size: int = 2,
) -> dict[str, Any] | None:
    if not candidates:
        return None

    visited: set[int] = set()
    components: list[list[int]] = []

    for start in range(len(candidates)):
        if start in visited:
            continue
        queue = [start]
        visited.add(start)
        component: list[int] = []

        while queue:
            current = queue.pop()
            component.append(current)
            for other in range(len(candidates)):
                if other in visited:
                    continue
                if haversine_km(candidates[current], candidates[other]) <= radius_km:
                    visited.add(other)
                    queue.append(other)

        components.append(component)

    ranked: list[tuple[int, float, list[Candidate], tuple[float, float]]] = []
    for component in components:
        points = [candidates[index] for index in component]
        center = spherical_center(points)
        center_candidate = Candidate("cluster-center", "", center[0], center[1])
        distances = [haversine_km(point, center_candidate) for point in points]
        ranked.append((len(points), median(distances), points, center))

    ranked.sort(key=lambda item: (-item[0], item[1]))
    size, _, points, center = ranked[0]
    if size < minimum_size:
        return None

    center_candidate = Candidate("cluster-center", "", center[0], center[1])
    distances = [haversine_km(point, center_candidate) for point in points]

    return {
        "size": size,
        "latitude": center[0],
        "longitude": center[1],
        "median_distance_km": median(distances),
        "max_distance_km": max(distances),
        "members": [asdict(point) for point in points],
    }


def parse_star(raw: dict[str, Any]) -> StarObservation:
    ha = raw["hour_angle"]
    dec = raw["declination"]
    image = raw["image"]

    return StarObservation(
        name=str(raw["name"]),
        hour_angle_hours=hms_to_hours(
            float(ha["hours"]), float(ha["minutes"]), float(ha["seconds"])
        ),
        declination_deg=dms_to_degrees(
            float(dec["degrees"]), float(dec["minutes"]), float(dec["seconds"])
        ),
        x=float(image["x"]),
        y=float(image["y"]),
    )


def analyze(config: dict[str, Any]) -> dict[str, Any]:
    stars = [parse_star(item) for item in config["stars"]]
    if len(stars) < 3:
        raise ValueError("at least three stars are required")

    zenith = config["zenith"]
    zenith_x = float(zenith["x"])
    zenith_y = float(zenith["y"])
    cluster_radius_km = float(config.get("cluster_radius_km", 150.0))

    vectors = [normal_vector(*ground_point(star)) for star in stars]

    focal_values: list[float] = []
    focal_diagnostics: list[dict[str, Any]] = []
    for i in range(len(stars)):
        for j in range(i + 1, len(stars)):
            value, reason = focal_length_for_pair(
                stars[i], stars[j], vectors[i], vectors[j]
            )
            record: dict[str, Any] = {
                "pair": f"{stars[i].name} / {stars[j].name}",
                "valid": value is not None,
            }
            if value is not None:
                focal_values.append(value)
                record["focal_length_px"] = value
            else:
                record["reason"] = reason
            focal_diagnostics.append(record)

    if not focal_values:
        raise ValueError("no valid star pair produced a focal-length estimate")

    focal_length = mean(focal_values)
    focal_std = pstdev(focal_values) if len(focal_values) > 1 else 0.0
    focal_cv = focal_std / focal_length if focal_length else float("inf")

    sine_values = elevation_sines(stars, zenith_x, zenith_y, focal_length)

    candidates: list[Candidate] = []
    location_diagnostics: list[dict[str, Any]] = []
    for i in range(len(stars)):
        for j in range(i + 1, len(stars)):
            pair_candidates, reason = solve_pair_candidates(
                stars[i],
                stars[j],
                vectors[i],
                vectors[j],
                sine_values[i],
                sine_values[j],
            )
            candidates.extend(pair_candidates)
            location_diagnostics.append(
                {
                    "pair": f"{stars[i].name} / {stars[j].name}",
                    "candidate_count": len(pair_candidates),
                    "valid": bool(pair_candidates),
                    **({"reason": reason} if reason else {}),
                }
            )

    selected_cluster = cluster_candidates(candidates, cluster_radius_km)

    warnings: list[str] = []
    if focal_cv > 0.05:
        warnings.append(
            "Focal-length estimates vary by more than 5%; re-check star/image coordinates."
        )
    invalid_focal_pairs = sum(1 for item in focal_diagnostics if not item["valid"])
    if invalid_focal_pairs:
        warnings.append(
            f"{invalid_focal_pairs} focal-length pair(s) were invalid and excluded."
        )
    if selected_cluster is None:
        warnings.append(
            "No multi-point location cluster was found; do not treat a single candidate as a final position."
        )

    return {
        "tool": "TAO Photo Stargazing Positioning",
        "version": "0.1.0",
        "method": "legacy star-pair equations, refactored with diagnostics and candidate clustering",
        "input": {
            "star_count": len(stars),
            "zenith": {"x": zenith_x, "y": zenith_y},
            "cluster_radius_km": cluster_radius_km,
        },
        "ground_points": [
            {
                "name": star.name,
                "latitude": ground_point(star)[0],
                "longitude": ground_point(star)[1],
            }
            for star in stars
        ],
        "focal": {
            "mean_px": focal_length,
            "median_px": median(focal_values),
            "std_px": focal_std,
            "coefficient_of_variation": focal_cv,
            "valid_pair_count": len(focal_values),
            "pairs": focal_diagnostics,
        },
        "candidates": [asdict(candidate) for candidate in candidates],
        "selected_cluster": selected_cluster,
        "diagnostics": {
            "location_pairs": location_diagnostics,
            "warnings": warnings,
        },
        "interpretation": (
            "The selected cluster is a geometric consistency heuristic, not a guaranteed geolocation. "
            "Validate with independent image, map, horizon, timestamp, weather, and astronomical evidence."
        ),
    }


def write_outputs(result: dict[str, Any], output_dir: Path) -> None:
    output_dir.mkdir(parents=True, exist_ok=True)

    (output_dir / "result.json").write_text(
        json.dumps(result, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )

    with (output_dir / "candidates.csv").open(
        "w", newline="", encoding="utf-8-sig"
    ) as handle:
        writer = csv.DictWriter(
            handle,
            fieldnames=["pair", "branch", "latitude", "longitude"],
        )
        writer.writeheader()
        writer.writerows(result["candidates"])


def main() -> int:
    parser = argparse.ArgumentParser(
        description="TAO OSINT photo stargazing positioning prototype"
    )
    parser.add_argument("config", type=Path, help="Observation JSON file")
    parser.add_argument(
        "--output",
        type=Path,
        default=Path("output"),
        help="Output directory (default: ./output)",
    )
    args = parser.parse_args()

    config = json.loads(args.config.read_text(encoding="utf-8"))
    result = analyze(config)
    write_outputs(result, args.output)

    print(f"Stars: {result['input']['star_count']}")
    print(f"Focal length: {result['focal']['mean_px']:.3f} px")
    print(f"Candidates: {len(result['candidates'])}")

    selected = result["selected_cluster"]
    if selected:
        print(
            "Selected cluster: "
            f"{selected['latitude']:.6f}, {selected['longitude']:.6f} "
            f"({selected['size']} candidates, max radius {selected['max_distance_km']:.1f} km)"
        )
    else:
        print("Selected cluster: none")

    for warning in result["diagnostics"]["warnings"]:
        print(f"WARNING: {warning}")

    print(f"JSON: {args.output / 'result.json'}")
    print(f"CSV:  {args.output / 'candidates.csv'}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())