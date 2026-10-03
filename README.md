# TAO OSINT

**Open-source intelligence research platform for collecting, verifying, correlating and visualizing publicly available information.**

TAO OSINT is a first-class project in the TAO technology portfolio, at the same level as **TAO Digital Twin**.

Its purpose is to turn public information into structured, traceable research:

```text
Public Sources
      ↓
Collection
      ↓
Normalization
      ↓
Sources / Claims / Evidence / Entities / Events
      ↓
Verification & Corroboration
      ↓
Timeline / Graph / Map
      ↓
Analysis
      ↓
Report / Export
```

## Vision

TAO OSINT is not intended to be a "search everything" tool.

The platform should help a researcher answer four questions:

1. **Where did this information come from?**
2. **What exactly does the source support?**
3. **How strongly is the claim corroborated?**
4. **How are people, organizations, places and events related over time?**

The long-term goal is an evidence-centric research environment that keeps provenance, uncertainty and alternative explanations visible.

## Core Objects

The platform is organized around a small canonical research model:

- **Research Case** — one investigation or research topic
- **Source** — a public information source and its provenance
- **Capture** — a preserved observation or snapshot of source material
- **Claim** — a concrete statement that can be supported or challenged
- **Evidence** — source material linked to a claim
- **Entity** — person, organization, place, asset, publication or other named object
- **Event** — something that happened at a time or within a time interval
- **Relationship** — a typed connection between entities, claims or events
- **Location** — geospatial context
- **Assessment** — analyst judgment with confidence and rationale

See [docs/data-model.md](docs/data-model.md).

## Research Workflow

```text
DISCOVER
   ↓
CAPTURE
   ↓
NORMALIZE
   ↓
VERIFY
   ↓
CORRELATE
   ↓
ANALYZE
   ↓
REPORT
```

### Discover
Find relevant, lawfully accessible public sources.

### Capture
Record URL, source type, publication date, event date and important excerpts or observations.

### Normalize
Convert heterogeneous information into the canonical TAO OSINT data model.

### Verify
Separate direct evidence, secondary reporting, inference and unverified claims.

### Correlate
Compare independent sources and identify agreement, contradiction or dependency.

### Analyze
Use timelines, entity graphs and geospatial views to understand structure and sequence.

### Report
Produce a traceable result where important conclusions remain connected to their sources.

## Planned Platform Architecture

```text
Web Workbench
     |
     v
TAO OSINT API
     |
     +---------------------------+
     |             |             |
Research Core   Analysis      Connectors
     |             |             |
     v             v             v
Case/Source    Timeline       Public APIs
Claim/Evidence Graph          Archives
Entity/Event   Map            User imports
     |
     v
Persistence / Search / Export
```

## Repository Structure

```text
Tao-OSINT/
├── frontend/                 # Future web research workbench
├── backend/                  # Future API and research services
├── modules/
│   ├── collection/           # Source ingestion and capture
│   ├── verification/         # Evidence and claim assessment
│   ├── entities/             # Entity normalization
│   ├── timeline/             # Event sequencing
│   ├── graph/                # Relationship analysis
│   ├── geospatial/           # Map-oriented analysis
│   └── reporting/            # Research outputs
├── config/
├── tests/
└── docs/
    ├── architecture.md
    ├── data-model.md
    ├── methodology.md
    ├── ethics.md
    └── roadmap.md
```

## v0.1 Foundation

The first milestone is deliberately small:

- canonical research data model
- research case and source management
- manual public-source entry/import
- claim and evidence ledger
- provenance tracking
- event timeline
- basic entity relationships
- JSON import/export
- clear methodology and responsible-use boundaries

Automation comes **after** the data model and evidence workflow are stable.

## Research Boundaries

TAO OSINT is designed for lawful public-information research.

It should not be used to:

- bypass authentication, paywalls or access controls
- obtain data from private systems without authorization
- stalk, doxx or harass individuals
- aggregate sensitive personal information for targeting
- disguise inference as verified fact

The platform should preserve source provenance, uncertainty and analyst reasoning.

See [docs/ethics.md](docs/ethics.md).

## Project Principles

1. **Evidence before automation.**
2. **Provenance is part of the data model.**
3. **Claims and evidence are separate objects.**
4. **Independent corroboration matters.**
5. **Event time and publication time are not the same thing.**
6. **Fact, inference and assessment must remain distinguishable.**
7. **Public-source research still requires responsible handling.**
8. **The platform should be useful offline/local-first where practical.**

## Roadmap

See [docs/roadmap.md](docs/roadmap.md).

High-level direction:

```text
v0.1  Research foundation
  ↓
v0.2  Evidence workbench
  ↓
v0.3  Timeline + entity graph
  ↓
v0.4  Geospatial analysis
  ↓
v0.5  Public-source connectors
  ↓
v1.0  Integrated research platform
```

## Related TAO Projects

- [TAO Digital Twin](https://github.com/TYSONPengtao/Tao-Digital-Twin)
- [TAO Personal Technology Lab](https://tysonpengtao.github.io)

## Status

**Architecture foundation in progress.**

No stable release has been tagged yet.
