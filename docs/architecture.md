# TAO OSINT Architecture

## Purpose

TAO OSINT is primarily a curated OSINT tool aggregation platform with a small number of integrated TAO-built utilities.

The architecture should therefore optimize for:

- easy catalog maintenance
- fast filtering and search
- clear tool metadata
- stable external links
- workflow collections
- simple integration of selected internal projects

It should **not** begin as a heavy investigation database.

## Top-Level Architecture

```text
                 TAO OSINT
                     |
       +-------------+-------------+
       |             |             |
       v             v             v
 Tool Catalog    Workflows     TAO Projects
       |             |             |
       +-------------+-------------+
                     |
                     v
               Web Launchpad
                     |
          +----------+----------+
          |                     |
          v                     v
   External Tools        Internal Utilities
   official links        hosted/integrated
```

## Data Flow

```text
catalog/tools.yaml
catalog/categories.yaml
        |
        v
Catalog loader / validation
        |
        v
Search + filters + collections
        |
        v
Frontend cards / detail pages
        |
        +--> Official external tool
        |
        +--> TAO internal project
```

## Catalog-First Design

The catalog is the source of truth for external tools.

A tool entry should be portable and human-editable. YAML is suitable for the first version because:

- changes are easy to review in Git
- contributors can edit without database access
- version history is built in
- static-site generation remains possible

A database should only be introduced when catalog scale or user features require it.

## Frontend

The frontend should provide:

- global search
- category navigation
- tool cards
- filters
- favorites/collections later
- workflow pages
- detail pages
- external launch buttons
- badges for free/paid/account required
- badges for External / TAO Built / TAO Optimized

## Backend

A backend is optional in the early versions.

Use one only when needed for:

- catalog API
- full-text/fuzzy search beyond static capabilities
- user collections
- automated health checks
- contribution moderation
- internal TAO tools that require server-side computation

## Internal TAO Projects

Selected internal projects live under `projects/`.

They should remain independently understandable and ideally runnable on their own.

Example:

```text
projects/
└── photo-stargazing-positioning/
    ├── README.md
    ├── app/
    ├── core/
    ├── tests/
    └── docs/
```

Shared reusable logic may move into `modules/` only after at least two projects need it.

## External Tools

External tools are referenced, not vendored.

For each external tool, TAO OSINT should track:

- official URL
- category
- status
- cost
- login requirement
- purpose
- limitations
- privacy considerations
- last reviewed date

## Health Checking

A future maintenance job may periodically check:

- HTTP availability
- redirects
- obvious domain changes

It should not automatically assume that a reachable page means the tool still works correctly.

## Security & Privacy

- never collect user credentials for external tools
- clearly indicate when a user leaves TAO OSINT
- do not proxy sensitive queries by default
- avoid storing user search terms unless a feature truly requires it
- treat internal tool uploads as sensitive local data
- provide clear deletion controls for hosted uploads
- do not build features centered on private-person targeting

See [ethics.md](ethics.md).
