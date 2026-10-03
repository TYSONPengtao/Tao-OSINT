# TAO OSINT Tool Schema

Each external or internal tool should use a consistent catalog record.

## Required Fields

```yaml
id:
name:
category:
type:
url:
description:
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
tao_project_path:
```

## Type

Allowed initial values:

- `external`
- `tao-built`
- `tao-optimized`

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

## Example

```yaml
- id: tineye
  name: TinEye
  category: image-video
  type: external
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

## Curation Rule

The catalog should describe what a tool is useful for without overstating what its output proves.
