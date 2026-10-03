# TAO OSINT Projects

This directory contains the small number of OSINT utilities that TAO builds or substantially optimizes.

The main TAO OSINT product remains the **tool aggregation portal**.

Internal projects should exist only when they provide a clear capability that is not already well served by an external tool.

## Current

### Photo Stargazing Positioning

[Open project](photo-stargazing-positioning/README.md)

Status: **TAO Optimized prototype**

Migrated from the historical local learning project and refactored into:

- reusable Python core
- reproducible sample configuration
- unit tests
- JSON / CSV result export
- geographic candidate clustering
- browser-only Web MVP

The original historical executable is not used as source-of-truth.
