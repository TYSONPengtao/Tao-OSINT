# TAO OSINT Visual Language

**English** · [简体中文](visual-language.zh-CN.md)

## Purpose

TAO OSINT uses one restrained visual system across a growing collection of tools.

The interface should feel like a professional technical directory rather than a decorative dashboard.

## Category Icons

Every category has one built-in SVG line icon.

Rules:

- 24 × 24 SVG viewBox
- 1.65 px stroke
- round line caps and joins
- no emoji
- no external icon CDN
- one-color rendering through `currentColor`
- TAO green for active/category emphasis
- muted gray when inactive

The same category icon must appear consistently in:

- category navigation
- hero exploration shortcuts
- tool cards
- recent tools
- tool detail dialog

## Hierarchy

### Level 1 — Tool identity

Highest contrast:

- tool name
- primary action
- selected category

### Level 2 — Purpose

Medium contrast:

- short description
- category
- platform

### Level 3 — Metadata

Low contrast:

- tags
- account requirement
- last reviewed
- secondary badges

## Cards

Cards should remain compact enough for a catalog containing 100+ tools.

List mode prioritizes scanning.

Grid mode can be slightly more expressive, but should not become a large promotional-card wall.

Hover behavior is intentionally subtle:

- 1 px vertical lift
- stronger border
- 2 px TAO-green category rail

## Hero

The hero uses:

- restrained grid texture
- concise product statement
- primary browse action
- favorites shortcut
- a small set of high-frequency categories

It should communicate the product within one screen without pushing the catalog too far below the fold.

## Tool Detail

The detail dialog uses the category icon as the visual anchor.

Primary emphasis:

1. category icon
2. tool name
3. description
4. launch action

Metadata stays grouped below the main explanation.

## Color

Core palette:

```text
Background        #080a09
Panel             #0f120f
Raised panel      #141814
Text              #f1f4ee
Muted             #939c91
TAO accent        #c8ff00
```

Category differentiation should come primarily from icon shape and label, not from assigning many unrelated colors.

## Bilingual Layout

Chinese and English must use the same structure.

Do not create separate visual templates for each language.

Components must tolerate longer English labels and denser Chinese text without changing hierarchy.
