# TAO OSINT Architecture

## Purpose

TAO OSINT is primarily a **curated OSINT collection, showcase and bookmark platform**.

The architecture should optimize for:

- easy catalog maintenance
- fast search and filtering
- clear presentation
- favorites and collections
- stable official links
- lightweight metadata
- a very small number of integrated TAO tools

The platform should stay simple unless a real requirement justifies more infrastructure.

## Top-Level Architecture

```text
                     TAO OSINT
                         |
        +----------------+----------------+
        |                |                |
        v                v                v
   Tool Catalog      Bookmarks         TAO Tools
        |                |                |
        +----------------+----------------+
                         |
                         v
                  Web Collection UI
                         |
             +-----------+-----------+
             |                       |
             v                       v
      External Tools           Integrated Tools
      official links           directly usable
```

## Product Split

### 1. External tools — the majority

Most catalog items are external.

TAO OSINT stores only useful metadata and links users to the official source.

### 2. Bookmarks / collections — core user value

Users should be able to organize useful tools without copying or re-hosting them.

Potential features:

- favorites
- custom collections
- recently opened
- recently reviewed
- tags
- personal notes later

Early versions can store these locally in the browser.

### 3. Integrated TAO tools — the minority

Only selected projects are directly runnable inside TAO OSINT.

Example:

```text
projects/
└── photo-stargazing-positioning/
    ├── core/
    ├── samples/
    ├── tests/
    ├── docs/
    └── web/
```

## Catalog-First Design

`catalog/tools.yaml` and `catalog/categories.yaml` remain the source of truth.

This gives the project:

- Git version history
- easy review
- simple contributions
- static-site compatibility
- no required database

A database should only be introduced when real user features require it.

## Frontend

The frontend should prioritize:

- category navigation
- full-text / fuzzy search
- tool cards
- tags
- filters
- favorite button
- collections
- official link button
- External / TAO Optimized / TAO Built badge
- Integrated / External interaction badge
- mobile usability

The homepage should feel like a curated personal toolbox rather than a dashboard full of investigation features.

## Backend

A backend is **not required** for the core product.

Introduce one only when necessary for:

- optional account sync
- shared collections
- contribution moderation
- catalog health checks
- integrated tools that need server-side computation

Local browser storage is sufficient for early favorites and collections.

## External Tool Rule

External tools are referenced, not vendored.

For each entry, track:

- official URL
- category
- purpose
- status
- cost
- account requirement
- platform
- inputs
- limitations
- privacy notes
- last reviewed date

## Integrated Tool Rule

A direct-use tool must justify its maintenance cost.

Before integration, ask:

1. Is the workflow genuinely useful?
2. Does an existing mature external tool already solve it?
3. Does integration add meaningful value?
4. Can it run safely and predictably?
5. Can its limitations be explained?

## Security & Privacy

- never collect external-tool credentials
- clearly indicate when users leave TAO OSINT
- do not proxy sensitive queries by default
- keep favorites local-first initially
- treat uploads to internal tools as potentially sensitive
- avoid unnecessary retention
- do not build features centered on private-person targeting

See [ethics.md](ethics.md).
