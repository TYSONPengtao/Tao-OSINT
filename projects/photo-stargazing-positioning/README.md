# TAO Photo Stargazing Positioning — Optimized Prototype

This folder contains a safe refactor of the original learning prototype.

The original files are preserved unchanged.

## What was fixed

- Observation values are no longer hard-coded in the algorithm.
- The output path is no longer hard-coded to a Desktop folder.
- The older source typo for 天津四 (`13h10m23.38s`) is corrected in the sample to the v0.2 value (`12h10m23.38s`).
- Focal-length pair failures are reported instead of hidden in console noise.
- Numerical edge cases are checked.
- Candidate coordinates are exported as JSON and CSV.
- Candidate points are clustered geographically instead of naively averaging every root.
- The selected cluster is explicitly described as a heuristic, not a guaranteed geolocation.
- The implementation uses only the Python standard library.

## Run

From this directory:

```powershell
python .\tao_star_positioning.py .\sample_observation.json --output .\output\sample
```

Expected sample characteristics:

- focal length ≈ **554.485 px**
- 6 mathematical location candidates
- 3 candidates form the strongest geographic cluster
- the coherent sample cluster is around **33.6° N, 115.3° E**

The sample reproduces the v0.2 packaged project's stored focal-length value (about 554.485 px).

## Input

Edit a copy of `sample_observation.json`.

For each star provide:

- name
- hour angle (hours / minutes / seconds)
- declination (degrees / minutes / seconds)
- measured image x/y coordinate

Also provide the measured image coordinate of the zenith.

### Coordinate convention

The historical project uses image-plane coordinates where the image/grid convention must stay consistent with the measured zenith and star points.

Do not mix coordinate systems between tools without transforming them.

## Output

`result.json`

Contains:

- computed ground points
- per-pair focal diagnostics
- focal mean / median / spread
- all mathematical location candidates
- selected geographic cluster
- warnings and interpretation notes

`candidates.csv`

Contains raw pair/branch latitude/longitude candidates for mapping or further analysis.

## Important limitation

This method can produce multiple mathematical roots and is sensitive to:

- star identification errors
- hour-angle/time errors
- pixel-coordinate errors
- zenith estimation
- lens distortion
- camera projection assumptions
- horizon/reference-frame assumptions

Use the result as one OSINT clue. Validate it independently with terrain, landmarks, timestamp, weather, maps, shadow/sun information, and astronomical software.

## TAO OSINT integration direction

This tool can later become a guided web workflow:

```text
Upload photo
   ↓
Mark stars + zenith
   ↓
Enter/select astronomical references
   ↓
Calculate focal consistency
   ↓
Generate location candidates
   ↓
Cluster candidates
   ↓
Map + sky visualization
   ↓
Export reproducible report
```