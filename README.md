# TAO OSINT

**An OSINT tool aggregation and experimental toolkit platform.**

TAO OSINT is a first-class TAO project, parallel to **TAO Digital Twin**.

Its main purpose is simple:

> Put useful OSINT tools in one organized place, explain what each tool is good for, and gradually add a small number of TAO-built or TAO-optimized utilities.

## Positioning

TAO OSINT is primarily a **curated OSINT launchpad**, not a monolithic investigation-management system.

```text
TAO OSINT
│
├── Tool Catalog
│   ├── Image & Video
│   ├── Geolocation & Maps
│   ├── Metadata & Files
│   ├── Archives
│   ├── Web & Domains
│   ├── Verification
│   ├── Search & Discovery
│   └── Research Resources
│
├── TAO Projects
│   ├── Photo Stargazing Positioning
│   └── Future focused utilities
│
└── Guides
    ├── Tool selection
    ├── Workflows
    └── Responsible use
```

## Core Product

The first real product should be a clean web interface where a user can:

- browse OSINT tools by category
- search tools by name, purpose or input type
- see whether a tool is free, partially free or paid
- see platform requirements and limitations
- open the official tool quickly
- read concise use cases
- mark TAO-built / TAO-optimized tools
- discover workflows such as image verification or geolocation
- launch selected internal TAO utilities directly

The model is closer to a personal, curated **OSINT toolbox / launchpad** than to a giant intelligence database.

## Tool Catalog

Each catalog entry should describe:

- name
- category
- official URL
- short description
- common use cases
- cost model
- account requirement
- platform
- input types
- limitations
- privacy / ethical notes
- maintenance status
- tags
- whether it is external, TAO-built or TAO-optimized

See [docs/tool-schema.md](docs/tool-schema.md).

## Initial Categories

```text
Image & Video
Geolocation & Maps
Metadata & Files
Archives
Web & Domains
Verification
Search & Discovery
Cyber / URL Analysis
Research Resources
TAO Projects
```

## Seed Tools

The first catalog can include well-established public tools such as:

- Bellingcat Online Investigations Toolkit
- TinEye
- ExifTool
- OpenStreetMap
- SunCalc
- Internet Archive / Wayback Machine
- urlscan.io
- VirusTotal

These are references to external tools, not bundled copies.

## TAO Projects

TAO OSINT will contain only a **small number of focused internal projects**.

The first planned project is:

### Photo Stargazing Positioning

An existing local prototype for inferring photo location/direction/time context from stars and sky geometry.

Planned optimization areas:

- clearer workflow
- better input/output design
- astronomical calculation separation
- map integration
- star/constellation reference workflow
- reproducible result report
- mobile-friendly UI
- integration into the TAO OSINT catalog as a first-class internal tool

Source import is pending from the existing local prototype.

See [projects/photo-stargazing-positioning/README.md](projects/photo-stargazing-positioning/README.md).

## Repository Structure

```text
Tao-OSINT/
├── catalog/
│   ├── categories.yaml
│   └── tools.yaml
├── frontend/                  # OSINT tool portal / launchpad
├── backend/                   # Optional catalog/search/API services
├── projects/
│   ├── README.md
│   └── photo-stargazing-positioning/
├── modules/                   # Shared components for TAO-built tools
├── docs/
│   ├── architecture.md
│   ├── tool-schema.md
│   ├── curation-guidelines.md
│   ├── ethics.md
│   └── roadmap.md
├── config/
└── tests/
```

## Product Principles

1. **Aggregation first.**
2. **Curate before automating.**
3. **Link to official tools instead of copying them.**
4. **Make tool purpose and limitations obvious.**
5. **Keep internal TAO tools few and high quality.**
6. **Prefer useful workflows over giant unstructured link lists.**
7. **Keep the portal fast, searchable and mobile-friendly.**
8. **Document privacy, account and cost requirements.**
9. **Do not design for stalking, doxxing or unauthorized access.**

## Roadmap

```text
v0.1  Tool catalog foundation
  ↓
v0.2  Searchable web launchpad
  ↓
v0.3  Workflows + collections
  ↓
v0.4  Photo Stargazing Positioning integration
  ↓
v0.5  More selected TAO utilities
  ↓
v1.0  Stable OSINT toolbox platform
```

See [docs/roadmap.md](docs/roadmap.md).

## Related TAO Projects

- [TAO Digital Twin](https://github.com/TYSONPengtao/Tao-Digital-Twin)
- [TAO Personal Technology Lab](https://tysonpengtao.github.io)

## Status

**Tool-platform foundation in progress.**

No stable release has been tagged yet.
