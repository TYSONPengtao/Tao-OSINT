# TAO OSINT Methodology

## Objective

TAO OSINT should make research more reproducible by preserving provenance, distinguishing evidence from interpretation, and making uncertainty visible.

## Workflow

### 1. Define the research question

Write the question before collecting large amounts of material.

Good questions are bounded by:

- subject
- time period
- geography
- evidence required
- stopping condition

### 2. Discover sources

Prefer sources with clear provenance.

Useful categories include:

- official publications
- primary documents
- reputable reporting
- academic literature
- public databases
- web archives

Discovery alone is not verification.

### 3. Capture context

For each source, record:

- URL
- title
- publisher/author when available
- retrieval time
- publication time
- relevant event time
- source type
- relevant observation

Avoid copying an isolated statement without its surrounding context.

### 4. Extract claims

Turn vague impressions into explicit statements.

Example:

Bad:

```text
"This looks suspicious."
```

Better:

```text
"Source A states that Event X occurred on 2026-09-12."
```

### 5. Classify evidence

Evidence may:

- support
- contradict
- contextualize
- merely repeat another source

Repeated reporting is not necessarily independent corroboration.

### 6. Evaluate source independence

Ask whether two sources ultimately rely on the same original source.

Three articles quoting the same press release are one information chain, not three independent confirmations.

### 7. Build time and entity structure

Use events for sequence and entities for relationships.

Keep:

- event date
- publication date
- retrieval date

as separate concepts.

### 8. Record alternative explanations

When evidence permits multiple interpretations, preserve them.

### 9. Assess confidence

Use qualitative confidence initially:

- low
- medium
- high

Always include a rationale.

### 10. Report with provenance

A reader should be able to move from a conclusion back to the sources supporting it.

## Source Evaluation Heuristics

Consider:

- proximity to the event
- directness
- expertise
- editorial or institutional accountability
- traceable sourcing
- consistency with independent evidence
- known limitations
- update/correction history

Do not reduce source quality to one universal number without context.

## Contradictions

Contradictions should remain visible instead of being silently discarded.

A contradiction may indicate:

- source error
- changing information
- different definitions
- different observation times
- incomplete context
- deliberate deception

The platform should store the contradiction before trying to resolve it.

## Research Notes

Analyst notes are not evidence.

Notes should be clearly marked as:

- observation
- hypothesis
- question
- assessment
- follow-up task
