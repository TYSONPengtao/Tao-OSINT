# TAO OSINT Architecture

## Purpose

TAO OSINT is an evidence-centric research platform for lawfully accessible public information.

The architecture separates:

- user interface
- research domain logic
- analysis modules
- external source connectors
- persistence and search
- reporting/export

## Top-Level Architecture

```text
+-------------------------------+
|        Web Workbench          |
| Cases / Sources / Claims      |
| Timeline / Graph / Map        |
+---------------+---------------+
                |
                v
+-------------------------------+
|          TAO OSINT API        |
+---------------+---------------+
                |
        +-------+-------+
        |               |
        v               v
+---------------+  +---------------+
| Research Core |  | Analysis      |
|---------------|  |---------------|
| Case          |  | Timeline      |
| Source        |  | Graph         |
| Capture       |  | Geospatial    |
| Claim         |  | Comparison    |
| Evidence      |  | Reporting     |
| Entity        |  +---------------+
| Event         |
| Relationship  |
| Assessment    |
+-------+-------+
        |
        v
+-------------------------------+
| Connectors / Import / Export  |
| Public APIs / archives / files|
+---------------+---------------+
                |
                v
+-------------------------------+
| Persistence / Search / Index  |
+-------------------------------+
```

## Design Rules

### 1. Research Core stays protocol-independent

The canonical research model must not depend on a particular search engine, archive, social platform or file format.

### 2. Connectors are adapters

External sources should enter through adapters that normalize data into canonical objects.

### 3. Raw and normalized data remain distinguishable

A captured observation is not the same object as an analyst claim or assessment.

### 4. Provenance is never optional

Important derived objects must be traceable back to one or more sources or analyst actions.

### 5. Analysis views are projections

Timeline, graph and map views should derive from canonical research objects instead of maintaining separate truth.

## Initial Components

### Frontend

Future web workbench responsibilities:

- case navigation
- source ledger
- claim/evidence review
- entity and event editing
- timeline
- graph
- map
- report preview

### Backend

Future service responsibilities:

- validation
- persistence
- import/export
- canonical IDs
- relationship integrity
- search
- analysis orchestration

### Modules

```text
modules/
├── collection/
├── verification/
├── entities/
├── timeline/
├── graph/
├── geospatial/
└── reporting/
```

Each module should expose a narrow interface and operate on canonical research objects.

## Local-First Direction

Where practical, TAO OSINT should support local research projects without requiring a cloud account.

Potential future persistence:

- SQLite for local cases
- PostgreSQL for larger deployments
- full-text search index when needed
- optional graph storage only if canonical relational storage becomes insufficient

The project should avoid introducing infrastructure before a demonstrated need exists.

## Security Direction

- treat imported content as untrusted
- sanitize rendered HTML
- do not execute source-provided scripts
- validate URLs and file types
- isolate connector credentials
- log automated collection activity
- rate-limit public-source connectors
- preserve user control over exports and deletion

See [ethics.md](ethics.md).
