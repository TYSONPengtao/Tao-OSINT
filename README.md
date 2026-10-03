# TAO OSINT

**A curated OSINT tool collection, showcase and bookmark platform — with only a small number of directly usable TAO tools.**

TAO OSINT is a first-class TAO project, parallel to **TAO Digital Twin**.

Its core purpose is:

> **Collect useful OSINT tools, organize them well, display them clearly, and make them easy to save and reopen. Build only a few internal tools when there is a real reason to do so.**

## Positioning

TAO OSINT is primarily a **collection / showcase / bookmark platform**.

It is **not** intended to replace mature OSINT tools, and it is not meant to become a giant all-in-one investigation suite.

Most entries are:

- collected
- categorized
- described
- tagged
- bookmarked
- linked to their official website or repository

Only a small number are directly usable inside TAO OSINT.

```text
TAO OSINT
│
├── COLLECTION — the main product
│   ├── Search & Discovery
│   ├── Image & Video
│   ├── Geolocation & Maps
│   ├── Metadata & Files
│   ├── Archives
│   ├── Web & Domains
│   ├── Verification
│   ├── Cyber / URL Analysis
│   └── Research Resources
│
├── BOOKMARKS
│   ├── Favorites
│   ├── Collections
│   └── Recently used / reviewed
│
├── SHOWCASE
│   ├── Tool cards
│   ├── Purpose
│   ├── Cost / login requirements
│   ├── Platform
│   ├── Limitations
│   └── Official links
│
└── TAO TOOLS — intentionally small
    ├── Photo Stargazing Positioning
    └── Future selected utilities
```

## Core Product

The main product should be a clean OSINT tool library where a user can:

- browse tools by category
- search by name, use case or tag
- quickly understand what each tool is for
- see whether it is free, partially free or paid
- see whether an account is required
- see platform and input requirements
- read concise limitations and privacy notes
- save tools to favorites or custom collections
- quickly reopen the official website/repository
- distinguish **External**, **TAO Optimized** and **TAO Built** entries
- directly launch the small number of integrated TAO tools

The primary value is **organization and curation**, not replacing the original tools.

## Tool Entry Model

Each tool entry should describe:

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
- last reviewed date
- interaction mode:
  - **external** — open the official tool
  - **bookmark** — save / organize / revisit
  - **integrated** — directly usable inside TAO OSINT
- origin:
  - **external**
  - **tao-optimized**
  - **tao-built**

See [docs/tool-schema.md](docs/tool-schema.md).

## Initial Categories

```text
Search & Discovery
Image & Video
Geolocation & Maps
Metadata & Files
Archives
Web & Domains
Cyber / URL Analysis
Verification
Research Resources
TAO Projects
```

## Seed Tools

Initial external entries include:

- Bellingcat Online Investigations Toolkit
- TinEye
- ExifTool
- OpenStreetMap
- SunCalc
- Internet Archive / Wayback Machine
- urlscan.io
- VirusTotal

These are **collected references**. TAO OSINT links users to the official source instead of copying the tool.

## TAO Tools

Directly usable tools should remain a minority.

A TAO tool should only exist when:

- there is a useful capability gap
- the local workflow benefits from integration
- the tool can be maintained
- the result can be tested and explained

### Photo Stargazing Positioning

The first TAO Optimized tool.

It migrated from an existing local prototype and now has:

- a refactored Python core
- reproducible sample data
- tests
- JSON / CSV export
- geographic candidate clustering
- a local-first Web MVP
- Chinese / English interface switching

See [projects/photo-stargazing-positioning/README.md](projects/photo-stargazing-positioning/README.md).

## Repository Structure

```text
Tao-OSINT/
├── catalog/
│   ├── categories.yaml
│   └── tools.yaml
├── frontend/                  # collection / showcase / bookmark UI
├── backend/                   # optional services only when needed
├── projects/                  # small number of usable TAO tools
│   ├── README.md
│   └── photo-stargazing-positioning/
├── modules/
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

1. **Collection first.**
2. **Showcase clearly.**
3. **Bookmark and organize.**
4. **Link to official tools instead of copying them.**
5. **Do not rebuild mature external tools without a clear reason.**
6. **Keep directly usable TAO tools few and high quality.**
7. **Fast search and filtering matter more than feature overload.**
8. **Document cost, account, platform, privacy and limitations.**
9. **Keep the platform useful on desktop and mobile.**
10. **Do not design for stalking, doxxing or unauthorized access.**

## Roadmap

```text
v0.1  Catalog foundation
  ↓
v0.2  Search + categories + tool showcase
  ↓
v0.3  Favorites + collections + bookmarks
  ↓
v0.4  Selected integrated TAO tools
  ↓
v0.5  Maintenance + contribution workflow
  ↓
v1.0  Stable OSINT tool collection platform
```

See [docs/roadmap.md](docs/roadmap.md).

## Related TAO Projects

- [TAO Digital Twin](https://github.com/TYSONPengtao/Tao-Digital-Twin)
- [TAO Personal Technology Lab](https://tysonpengtao.github.io)

## Status

**Collection-platform foundation in progress.**

No stable release has been tagged yet.
