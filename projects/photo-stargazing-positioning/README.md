# Photo Stargazing Positioning

## Status

Existing local prototype identified for migration into TAO OSINT.

The source code has not yet been imported into this repository.

## Intended Role

A focused image/geolocation utility that uses visible stars, constellations and sky geometry as evidence for estimating or checking:

- viewing direction
- candidate location
- candidate date/time
- consistency between a photo and an asserted context

It should be presented as an **analysis aid**, not as a guaranteed one-click geolocation system.

## Planned Optimization

### 1. Audit the existing prototype

- inventory files and dependencies
- identify current calculations
- separate working code from experiments
- document current inputs/outputs
- identify hard-coded assumptions

### 2. Separate the core

Suggested layers:

```text
UI
 ↓
Photo / observation input
 ↓
Astronomy core
 ↓
Candidate comparison
 ↓
Confidence / uncertainty
 ↓
Map + sky visualization
 ↓
Report
```

### 3. Improve astronomy handling

Potential components:

- star/constellation reference data
- altitude/azimuth calculations
- time and timezone handling
- observer latitude/longitude
- camera orientation assumptions
- horizon/reference-line handling

### 4. Improve result quality

The tool should show:

- candidate result
- assumptions
- evidence used
- uncertainty
- alternative candidates
- calculation parameters

### 5. Improve interface

Target:

- simple photo-first workflow
- desktop + mobile
- map panel
- sky/constellation panel
- step-by-step guidance
- exportable analysis summary

## Integration

When ready, this project should be accessible directly from the TAO OSINT tool catalog with a **TAO Optimized** badge.
