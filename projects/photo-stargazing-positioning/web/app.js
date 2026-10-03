const EPS = 1e-12;
const EARTH_RADIUS_KM = 6371.0088;
const LANGUAGE_KEY = "tao-stargazing-language";
const TRANSLATIONS = {
  "zh-CN": {
    "hero.kicker": "夜空照片定位辅助工具", "hero.line1": "用恒星几何关系", "hero.line2": "缩小位置候选范围。",
    "hero.description": "输入已识别恒星的时角、赤纬、图像坐标与天顶坐标。工具会复现旧项目的几何公式，计算焦距一致性、位置候选与主聚类。结果仅作为 OSINT 线索，需要独立证据交叉验证。",
    "input.title": "观测数据", "input.loadSample": "载入示例", "input.run": "开始计算", "input.coordinateTitle": "坐标约定",
    "input.coordinateText": "恒星与天顶必须使用同一个图像坐标系。旧项目的 y 方向约定与 GeoGebra 默认坐标方向不同。",
    "result.title": "计算结果", "status.idle": "载入示例或输入观测数据后开始计算。", "status.sampleLoaded": "示例数据已载入。",
    "status.successCluster": "计算完成：已找到由多个恒星对共同支持的主聚类。", "status.successNoCluster": "计算完成，但没有找到多点主聚类。", "status.failed": "计算失败：",
    "metric.candidates": "数学候选", "metric.cluster": "候选数", "cluster.notCalculated": "尚未计算", "cluster.none": "未找到多点主聚类",
    "map.title": "全球候选分布", "map.projection": "经纬度等距投影", "table.pair": "星对", "table.branch": "分支", "table.latitude": "纬度", "table.longitude": "经度", "table.cluster": "聚类", "table.empty": "暂无候选点", "table.primary": "主聚类",
    "export.json": "导出 JSON", "export.csv": "导出 CSV", "method.title": "方法与限制", "method.a.title": "恒星参考", "method.a.text": "使用已识别恒星的时角与赤纬建立天球方向向量。",
    "method.b.title": "焦距一致性", "method.b.text": "根据恒星对的天球夹角与图像平面距离反推等效焦距。", "method.c.title": "候选求解", "method.c.text": "由恒星仰角约束求得多个数学经纬度根，不假定单根就是答案。",
    "method.d.title": "候选聚类", "method.d.text": "寻找多个星对共同支持的地理聚类，并展示离散程度。", "warning.label": "重要：",
    "warning.text": "该方法对星体识别、时角、图像坐标、天顶估计、镜头畸变与相机投影都敏感。聚类中心不是“精确定位真值”，应与地形、地标、时间、天气、Stellarium/星图等证据交叉验证。",
    "error.hourAngle": "时角的分/秒必须位于 0–60 之间。", "error.declination": "赤纬的分/秒必须位于 0–60 之间。", "error.starFields": "每颗恒星都必须包含 name / hour_angle / declination / image。",
    "error.minStars": "至少需要 3 颗恒星。", "error.zenith": "天顶坐标或聚类半径不是有效数字。", "error.noFocal": "没有恒星对能够得到有效焦距。"
  },
  en: {
    "hero.kicker": "Night-sky photo geolocation aid", "hero.line1": "Use stellar geometry to", "hero.line2": "narrow location candidates.",
    "hero.description": "Enter the hour angle, declination, image coordinates and zenith coordinates for identified stars. The tool reproduces the legacy geometric method to evaluate focal-length consistency, generate location candidates and identify the strongest cluster. Treat the output as an OSINT clue that still requires independent verification.",
    "input.title": "Observation data", "input.loadSample": "Load sample", "input.run": "Run analysis", "input.coordinateTitle": "Coordinate convention",
    "input.coordinateText": "Stars and the zenith must use the same image coordinate system. The historical project used a y-axis convention that differs from GeoGebra's default coordinates.",
    "result.title": "Analysis result", "status.idle": "Load the sample or enter observation data, then run the analysis.", "status.sampleLoaded": "Sample data loaded.",
    "status.successCluster": "Analysis complete: a primary cluster supported by multiple star pairs was found.", "status.successNoCluster": "Analysis complete, but no multi-point primary cluster was found.", "status.failed": "Analysis failed: ",
    "metric.candidates": "mathematical roots", "metric.cluster": "candidates", "cluster.notCalculated": "Not calculated", "cluster.none": "No multi-point primary cluster",
    "map.title": "Global candidate distribution", "map.projection": "Equirectangular projection", "table.pair": "Pair", "table.branch": "Branch", "table.latitude": "Latitude", "table.longitude": "Longitude", "table.cluster": "Cluster", "table.empty": "No candidates yet", "table.primary": "PRIMARY",
    "export.json": "Export JSON", "export.csv": "Export CSV", "method.title": "Method & limitations", "method.a.title": "Stellar references", "method.a.text": "Use the hour angle and declination of identified stars to construct celestial direction vectors.",
    "method.b.title": "Focal consistency", "method.b.text": "Estimate an effective focal length from the celestial separation of star pairs and their image-plane geometry.", "method.c.title": "Candidate solving", "method.c.text": "Solve multiple mathematical latitude/longitude roots from elevation constraints instead of assuming a single root is correct.",
    "method.d.title": "Candidate clustering", "method.d.text": "Find a geographic cluster supported by multiple star pairs and expose its spread.", "warning.label": "Important:",
    "warning.text": "The method is sensitive to star identification, hour angle, image coordinates, zenith estimation, lens distortion and camera projection. The cluster center is not an exact ground truth location; cross-check it with terrain, landmarks, time, weather, Stellarium/sky charts and other independent evidence.",
    "error.hourAngle": "Hour-angle minutes and seconds must be between 0 and 60.", "error.declination": "Declination minutes and seconds must be between 0 and 60.", "error.starFields": "Each star must include name / hour_angle / declination / image.",
    "error.minStars": "At least 3 stars are required.", "error.zenith": "Zenith coordinates or cluster radius are not valid numbers.", "error.noFocal": "No star pair produced a valid focal-length estimate."
  }
};
function getSavedLanguage() {
  try { return localStorage.getItem(LANGUAGE_KEY); } catch { return null; }
}
function saveLanguage(language) {
  try { localStorage.setItem(LANGUAGE_KEY, language); } catch {}
}
let currentLanguage = getSavedLanguage() || "zh-CN";
function t(key) { return TRANSLATIONS[currentLanguage]?.[key] ?? TRANSLATIONS["zh-CN"][key] ?? key; }
function renderEmptyTable() {
  const tbody = $("candidate-table"); tbody.innerHTML = "";
  const tr = document.createElement("tr"), td = document.createElement("td");
  td.colSpan = 5; td.className = "empty"; td.textContent = t("table.empty"); tr.appendChild(td); tbody.appendChild(tr);
}
function applyLanguage(language) {
  currentLanguage = TRANSLATIONS[language] ? language : "zh-CN";
  saveLanguage(currentLanguage);
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach((element) => { element.textContent = t(element.dataset.i18n); });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const active = button.dataset.lang === currentLanguage;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
  if (lastResult) render(lastResult);
  else {
    $("status").textContent = t("status.idle");
    $("cluster-coordinate").textContent = t("cluster.notCalculated");
    renderEmptyTable();
  }
}


const SAMPLE = {
  description: "Reconstructed from the newer v0.2 packaged project data.",
  cluster_radius_km: 150,
  zenith: { x: -51.747903865207434, y: -462.93870580032103 },
  stars: [
    {
      name: "天津四 / Deneb",
      hour_angle: { hours: 12, minutes: 10, seconds: 23.38 },
      declination: { degrees: 45, minutes: 21, seconds: 1.2 },
      image: { x: -159.5, y: 74.0 }
    },
    {
      name: "织女 / Vega",
      hour_angle: { hours: 14, minutes: 14, seconds: 53.74 },
      declination: { degrees: 38, minutes: 48, seconds: 20.2 },
      image: { x: -59.5, y: -142.0 }
    },
    {
      name: "牛郎 / Altair",
      hour_angle: { hours: 13, minutes: 0, seconds: 45.96 },
      declination: { degrees: 8, minutes: 55, seconds: 19.9 },
      image: { x: 227.5, y: 53.0 }
    }
  ]
};

const $ = (id) => document.getElementById(id);
let lastResult = null;

function hmsToHours(value) {
  const h = Number(value.hours);
  const m = Number(value.minutes);
  const s = Number(value.seconds);
  if (![h, m, s].every(Number.isFinite) || m < 0 || s < 0 || m >= 60 || s >= 60) {
    throw new Error(t("error.hourAngle"));
  }
  return h + m / 60 + s / 3600;
}

function dmsToDegrees(value) {
  const d = Number(value.degrees);
  const m = Number(value.minutes);
  const s = Number(value.seconds);
  if (![d, m, s].every(Number.isFinite) || m < 0 || s < 0 || m >= 60 || s >= 60) {
    throw new Error(t("error.declination"));
  }
  const sign = d < 0 ? -1 : 1;
  return sign * (Math.abs(d) + m / 60 + s / 3600);
}

function normalizeLongitude(value) {
  const result = ((value + 180) % 360 + 360) % 360 - 180;
  return result === -180 ? 180 : result;
}

function parseStar(raw) {
  if (!raw.name || !raw.hour_angle || !raw.declination || !raw.image) {
    throw new Error(t("error.starFields"));
  }
  return {
    name: String(raw.name),
    hourAngleHours: hmsToHours(raw.hour_angle),
    declinationDeg: dmsToDegrees(raw.declination),
    x: Number(raw.image.x),
    y: Number(raw.image.y)
  };
}

function groundPoint(star) {
  return {
    latitude: star.declinationDeg,
    longitude: normalizeLongitude(360 - star.hourAngleHours * 15)
  };
}

function normalVector(point) {
  const lat = point.latitude * Math.PI / 180;
  const lon = point.longitude * Math.PI / 180;
  return [
    Math.cos(lon) * Math.cos(lat),
    Math.sin(lon) * Math.cos(lat),
    Math.sin(lat)
  ];
}

function dot(a, b) {
  return a.reduce((sum, value, index) => sum + value * b[index], 0);
}

function focalForPair(first, second, firstVector, secondVector) {
  const cosine = Math.max(-1, Math.min(1, dot(firstVector, secondVector)));
  const { x: x1, y: y1 } = first;
  const { x: x2, y: y2 } = second;

  const d = cosine * cosine - 1;
  const e = (x1*x1 + y1*y1 + x2*x2 + y2*y2) * cosine * cosine - 2 * (x1*x2 + y1*y2);
  const f = (x1*x1 + y1*y1) * (x2*x2 + y2*y2) * cosine * cosine - (x1*x2 + y1*y2) ** 2;
  const discriminant = e * e - 4 * d * f;

  if (Math.abs(d) <= EPS) return { value: null, reason: "degenerate focal equation" };
  if (discriminant < 0) return { value: null, reason: "negative focal discriminant" };

  const radicand = (-Math.sqrt(discriminant) - e) / (2 * d);
  if (radicand < 0) return { value: null, reason: "negative focal radicand" };
  return { value: Math.sqrt(radicand), reason: null };
}

function elevationSines(stars, zenith, focal) {
  const zenithNorm = Math.hypot(zenith.x, zenith.y, focal);
  return stars.map((star) => {
    const starNorm = Math.hypot(star.x, star.y, focal);
    const ratio = (zenith.x * star.x + zenith.y * star.y + focal * focal) / (zenithNorm * starNorm);
    return Math.max(-1, Math.min(1, ratio));
  });
}

function solvePair(first, second, a, b, sinFirst, sinSecond) {
  const crossX = b[1] * a[2] - b[2] * a[1];
  const crossY = b[2] * a[0] - b[0] * a[2];
  const crossZ = b[0] * a[1] - b[1] * a[0];
  const aa = crossX*crossX + crossY*crossY + crossZ*crossZ;

  const termA = b[0] * a[2] - a[0] * b[2];
  const termB = a[2] * sinSecond - b[2] * sinFirst;
  const termC = a[0] * b[1] - a[1] * b[0];
  const termD = b[1] * sinFirst - a[1] * sinSecond;
  const bb = 2 * (termA * termB + termC * termD);

  const qA = a[2] * sinSecond - b[2] * sinFirst;
  const qB = b[1] * sinFirst - a[1] * sinSecond;
  const qC = a[1] * b[2] - b[1] * a[2];
  const cc = qA*qA + qB*qB - qC*qC;
  const discriminant = bb*bb - 4*aa*cc;

  if (aa <= EPS || discriminant < 0) return [];

  const termF = a[1] * b[2] - b[1] * a[2];
  const termI = b[1] * a[2] - a[1] * b[2];
  if (Math.abs(termF) <= EPS || Math.abs(termI) <= EPS) return [];

  const sqrtD = Math.sqrt(discriminant);
  const roots = [
    ["+", (-bb + sqrtD) / (2 * aa)],
    ["-", (-bb - sqrtD) / (2 * aa)]
  ];

  return roots.map(([branch, x]) => {
    const y = (termA * x + termB) / termF;
    const termG = a[0] * b[1] - b[0] * a[1];
    const termH = b[1] * sinFirst - a[1] * sinSecond;
    const z = (termG * x + termH) / termI;
    const norm = Math.hypot(x, y, z);
    return {
      pair: `${first.name} / ${second.name}`,
      branch,
      latitude: Math.asin(Math.max(-1, Math.min(1, z / norm))) * 180 / Math.PI,
      longitude: normalizeLongitude(Math.atan2(-y, -x) * 180 / Math.PI)
    };
  });
}

function haversineKm(a, b) {
  const lat1 = a.latitude * Math.PI / 180;
  const lat2 = b.latitude * Math.PI / 180;
  const dLat = lat2 - lat1;
  const dLon = (b.longitude - a.longitude) * Math.PI / 180;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 2 * EARTH_RADIUS_KM * Math.asin(Math.min(1, Math.sqrt(h)));
}

function sphericalCenter(points) {
  let x = 0, y = 0, z = 0;
  for (const point of points) {
    const lat = point.latitude * Math.PI / 180;
    const lon = point.longitude * Math.PI / 180;
    x += Math.cos(lat) * Math.cos(lon);
    y += Math.cos(lat) * Math.sin(lon);
    z += Math.sin(lat);
  }
  x /= points.length; y /= points.length; z /= points.length;
  return {
    latitude: Math.atan2(z, Math.hypot(x, y)) * 180 / Math.PI,
    longitude: normalizeLongitude(Math.atan2(y, x) * 180 / Math.PI)
  };
}

function median(values) {
  const items = [...values].sort((a, b) => a - b);
  const middle = Math.floor(items.length / 2);
  return items.length % 2 ? items[middle] : (items[middle - 1] + items[middle]) / 2;
}

function clusterCandidates(candidates, radiusKm) {
  const visited = new Set();
  const components = [];

  for (let start = 0; start < candidates.length; start++) {
    if (visited.has(start)) continue;
    const queue = [start];
    visited.add(start);
    const component = [];

    while (queue.length) {
      const current = queue.pop();
      component.push(current);
      for (let other = 0; other < candidates.length; other++) {
        if (visited.has(other)) continue;
        if (haversineKm(candidates[current], candidates[other]) <= radiusKm) {
          visited.add(other);
          queue.push(other);
        }
      }
    }
    components.push(component);
  }

  const ranked = components.map((indexes) => {
    const points = indexes.map((index) => candidates[index]);
    const center = sphericalCenter(points);
    const distances = points.map((point) => haversineKm(point, center));
    return { points, center, distances };
  }).sort((a, b) => {
    if (b.points.length !== a.points.length) return b.points.length - a.points.length;
    return median(a.distances) - median(b.distances);
  });

  const best = ranked[0];
  if (!best || best.points.length < 2) return null;
  return {
    size: best.points.length,
    latitude: best.center.latitude,
    longitude: best.center.longitude,
    median_distance_km: median(best.distances),
    max_distance_km: Math.max(...best.distances),
    members: best.points
  };
}

function analyze(raw) {
  const stars = raw.stars.map(parseStar);
  if (stars.length < 3) throw new Error(t("error.minStars"));

  const zenith = { x: Number(raw.zenith.x), y: Number(raw.zenith.y) };
  const clusterRadiusKm = Number(raw.cluster_radius_km ?? 150);
  if (![zenith.x, zenith.y, clusterRadiusKm].every(Number.isFinite)) {
    throw new Error(t("error.zenith"));
  }

  const groundPoints = stars.map(groundPoint);
  const vectors = groundPoints.map(normalVector);
  const focalPairs = [];
  const focalValues = [];

  for (let i = 0; i < stars.length; i++) {
    for (let j = i + 1; j < stars.length; j++) {
      const result = focalForPair(stars[i], stars[j], vectors[i], vectors[j]);
      focalPairs.push({ pair: `${stars[i].name} / ${stars[j].name}`, ...result });
      if (result.value !== null) focalValues.push(result.value);
    }
  }

  if (!focalValues.length) throw new Error(t("error.noFocal"));
  const focal = focalValues.reduce((sum, value) => sum + value, 0) / focalValues.length;
  const sines = elevationSines(stars, zenith, focal);
  const candidates = [];

  for (let i = 0; i < stars.length; i++) {
    for (let j = i + 1; j < stars.length; j++) {
      candidates.push(...solvePair(stars[i], stars[j], vectors[i], vectors[j], sines[i], sines[j]));
    }
  }

  const selectedCluster = clusterCandidates(candidates, clusterRadiusKm);
  return {
    tool: "TAO Photo Stargazing Positioning",
    version: "0.1-web",
    focal: {
      mean_px: focal,
      pair_values: focalPairs
    },
    candidates,
    selected_cluster: selectedCluster,
    interpretation: "Cluster result is a geometric consistency heuristic, not a guaranteed geolocation."
  };
}

function download(filename, text, type) {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

function renderGrid() {
  const grid = $("grid");
  grid.innerHTML = "";
  for (let lon = -180; lon <= 180; lon += 30) {
    const x = (lon + 180) / 360 * 1000;
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x); line.setAttribute("x2", x);
    line.setAttribute("y1", 0); line.setAttribute("y2", 500);
    line.setAttribute("class", lon === 0 ? "grid-line prime" : "grid-line");
    grid.appendChild(line);
  }
  for (let lat = -90; lat <= 90; lat += 30) {
    const y = (90 - lat) / 180 * 500;
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", 0); line.setAttribute("x2", 1000);
    line.setAttribute("y1", y); line.setAttribute("y2", y);
    line.setAttribute("class", lat === 0 ? "grid-line equator" : "grid-line");
    grid.appendChild(line);
  }
}

function renderMap(result) {
  const group = $("candidate-points");
  group.innerHTML = "";
  const cluster = result.selected_cluster;
  const isClusterMember = (candidate) => cluster?.members.some((member) =>
    member.pair === candidate.pair &&
    member.branch === candidate.branch &&
    Math.abs(member.latitude - candidate.latitude) < 1e-8 &&
    Math.abs(member.longitude - candidate.longitude) < 1e-8
  );

  for (const candidate of result.candidates) {
    const x = (candidate.longitude + 180) / 360 * 1000;
    const y = (90 - candidate.latitude) / 180 * 500;
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", isClusterMember(candidate) ? 8 : 6);
    circle.setAttribute("class", isClusterMember(candidate) ? "point cluster" : "point");
    const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
    title.textContent = `${candidate.pair} ${candidate.branch}: ${candidate.latitude.toFixed(5)}, ${candidate.longitude.toFixed(5)}`;
    circle.appendChild(title);
    group.appendChild(circle);
  }

  if (cluster) {
    const x = (cluster.longitude + 180) / 360 * 1000;
    const y = (90 - cluster.latitude) / 180 * 500;
    const center = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    center.setAttribute("cx", x);
    center.setAttribute("cy", y);
    center.setAttribute("r", 15);
    center.setAttribute("class", "point-center");
    group.appendChild(center);
  }
}

function renderTable(result) {
  const cluster = result.selected_cluster;
  const tbody = $("candidate-table");
  tbody.innerHTML = "";

  for (const candidate of result.candidates) {
    const member = cluster?.members.some((point) =>
      point.pair === candidate.pair &&
      point.branch === candidate.branch &&
      Math.abs(point.latitude - candidate.latitude) < 1e-8 &&
      Math.abs(point.longitude - candidate.longitude) < 1e-8
    );

    const tr = document.createElement("tr");
    const values = [
      candidate.pair,
      candidate.branch,
      candidate.latitude.toFixed(6),
      candidate.longitude.toFixed(6),
      member ? t("table.primary") : ""
    ];
    for (const value of values) {
      const td = document.createElement("td");
      td.textContent = value;
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
}

function render(result) {
  lastResult = result;
  $("metric-focal").textContent = result.focal.mean_px.toFixed(3);
  $("metric-candidates").textContent = String(result.candidates.length);

  const cluster = result.selected_cluster;
  $("metric-cluster").textContent = cluster ? String(cluster.size) : "0";
  $("metric-radius").textContent = cluster ? cluster.max_distance_km.toFixed(1) : "—";
  $("cluster-coordinate").textContent = cluster
    ? `${cluster.latitude.toFixed(6)}° N, ${cluster.longitude.toFixed(6)}° E`
    : t("cluster.none");

  const mapLink = $("map-link");
  if (cluster) {
    mapLink.href = `https://www.openstreetmap.org/?mlat=${cluster.latitude}&mlon=${cluster.longitude}#map=7/${cluster.latitude}/${cluster.longitude}`;
    mapLink.classList.remove("disabled");
  } else {
    mapLink.href = "#";
    mapLink.classList.add("disabled");
  }

  renderMap(result);
  renderTable(result);
  $("export-json").disabled = false;
  $("export-csv").disabled = false;
  $("status").textContent = cluster ? t("status.successCluster") : t("status.successNoCluster");
  $("status").className = "status ok";
}

function toCsv(result) {
  const rows = [["pair", "branch", "latitude", "longitude"]];
  for (const item of result.candidates) {
    rows.push([item.pair, item.branch, item.latitude, item.longitude]);
  }
  return rows.map((row) => row.map((cell) => {
    const value = String(cell);
    return /[",\n]/.test(value) ? `"${value.replaceAll('"', '""')}"` : value;
  }).join(",")).join("\n");
}

document.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => applyLanguage(button.dataset.lang)));

$("load-sample").addEventListener("click", () => {
  $("observation-json").value = JSON.stringify(SAMPLE, null, 2);
  $("status").textContent = t("status.sampleLoaded");
  $("status").className = "status idle";
});

$("run-analysis").addEventListener("click", () => {
  try {
    const raw = JSON.parse($("observation-json").value);
    render(analyze(raw));
  } catch (error) {
    lastResult = null;
    $("status").textContent = t("status.failed") + error.message;
    $("status").className = "status error";
  }
});

$("export-json").addEventListener("click", () => {
  if (!lastResult) return;
  download("tao-stargazing-result.json", JSON.stringify(lastResult, null, 2), "application/json");
});

$("export-csv").addEventListener("click", () => {
  if (!lastResult) return;
  download("tao-stargazing-candidates.csv", "\uFEFF" + toCsv(lastResult), "text/csv;charset=utf-8");
});

renderGrid();
$("observation-json").value = JSON.stringify(SAMPLE, null, 2);
applyLanguage(currentLanguage);