# TAO OSINT Canonical Data Model

## Goal

The data model separates what a source **is**, what it **says**, what an analyst **infers**, and what the project currently **assesses**.

## ResearchCase

Container for one research question or investigation.

Core fields:

```text
id
title
description
status
created_at
updated_at
tags[]
research_questions[]
```

## Source

Represents the provenance of public information.

```text
id
title
url
source_type
publisher
author
published_at
retrieved_at
language
archive_url
notes
```

Possible source types:

- official
- primary
- news
- academic
- archive
- social
- database
- document
- user_import
- other

## Capture

Represents what was observed or preserved from a source at a particular time.

```text
id
source_id
captured_at
content_type
content_hash
text
local_reference
metadata
```

A changing web page may have multiple captures.

## Claim

A concrete proposition that can be evaluated.

```text
id
case_id
statement
claim_type
status
created_at
```

Suggested status values:

- unverified
- supported
- verified
- disputed
- contradicted
- unresolved

## Evidence

Connects source material to a claim.

```text
id
claim_id
source_id
capture_id
relationship
excerpt_or_observation
analyst_note
created_at
```

Relationship examples:

- supports
- contradicts
- contextualizes
- repeats
- mentions

## Entity

Normalized named object.

```text
id
entity_type
canonical_name
aliases[]
description
external_ids
```

Initial entity types:

- person
- organization
- place
- publication
- asset
- product
- account
- domain
- other

Sensitive personal data should not be collected merely because it is technically accessible.

## Event

Represents something that happened.

```text
id
case_id
title
description
start_time
end_time
time_precision
location_id
status
```

Important: event time and publication time are separate fields.

## Relationship

Typed edge between canonical objects.

```text
id
source_object_type
source_object_id
relationship_type
target_object_type
target_object_id
valid_from
valid_to
confidence
evidence_ids[]
```

## Location

```text
id
name
latitude
longitude
precision
source_id
notes
```

Location precision matters. Approximate locations must not be represented as exact coordinates.

## Assessment

Explicit analyst judgment.

```text
id
case_id
subject_type
subject_id
assessment_type
value
confidence
rationale
evidence_ids[]
created_at
```

Assessments must remain distinguishable from source facts.

## Confidence

Initial convention:

```text
low
medium
high
```

Numerical probabilities should only be introduced when the methodology defines what the numbers mean.

## Provenance Rule

Any important conclusion should be able to answer:

```text
Conclusion
   ↓
Assessment / Claim
   ↓
Evidence
   ↓
Capture
   ↓
Source
```
