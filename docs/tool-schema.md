# TAO OSINT Tool Schema

Each external or internal tool should use a consistent catalog record.

The schema is optimized for TAO OSINT's primary role as a **collection / showcase / bookmark platform**.

## Required Fields

```yaml
id:
name:
category:
type:
interaction:
url:
description:
description_zh:
use_cases:
cost:
account_required:
platform:
tags:
status:
last_reviewed:
```

## Recommended Fields

```yaml
input_types:
output_types:
limitations:
privacy_notes:
official_docs:
source_repository:
languages:
name_zh:
tao_project_path:
```

## Type

Describes where the tool comes from.

Allowed initial values:

- `external`
- `tao-built`
- `tao-optimized`

## Interaction

Describes how TAO OSINT presents the tool.

Allowed initial values:

- `external` — TAO OSINT collects and displays the tool, then opens its official site/repository
- `bookmark` — primarily intended to be saved into favorites/collections and revisited
- `integrated` — directly usable inside TAO OSINT

Most tools should be `external` or `bookmark`.

Only a small number of selected TAO tools should be `integrated`.

## Cost

Allowed initial values:

- `free`
- `partially-free`
- `paid`
- `unknown`

## Status

Allowed initial values:

- `active`
- `limited`
- `deprecated`
- `offline`
- `review-needed`

## External Tool Example

```yaml
- id: tineye
  name: TinEye
  category: image-video
  type: external
  interaction: external
  url: https://tineye.com/
  description: Reverse image search service.
  use_cases:
    - Find matching or modified versions of an image
    - Look for earlier appearances of an image
  cost: partially-free
  account_required: false
  platform:
    - web
  input_types:
    - image
    - image-url
  limitations:
    - Coverage depends on TinEye's index
    - A match does not by itself establish context or authenticity
  tags:
    - reverse-image
    - verification
  status: active
  last_reviewed: 2026-10-04
```

## Integrated Tool Example

```yaml
- id: photo-stargazing-positioning
  name: Photo Stargazing Positioning
  category: tao-projects
  type: tao-optimized
  interaction: integrated
  url: ./projects/photo-stargazing-positioning/
  description: Analyze star geometry as one clue for night-sky photo positioning.
  cost: free
  account_required: false
  platform:
    - web
    - python
  tags:
    - astronomy
    - geolocation
    - image
    - tao
  status: active
  last_reviewed: 2026-10-04
```

## Curation Rule

The catalog should describe what a tool is useful for without overstating what its output proves.

Collection is the default. Direct integration is the exception.


## Bilingual Metadata

The catalog remains English-first for stable identifiers and interoperability, while user-facing entries may include:

```yaml
name: Official Tool Name
name_zh: 可选中文显示名
description: English description
description_zh: 中文说明
```

The frontend must provide both Chinese and English descriptions for every displayed tool.
