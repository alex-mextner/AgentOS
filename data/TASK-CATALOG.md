---
id: AOS-DATA-TASKS
title: Public Task Catalog
status: derived
---

# Public Task Catalog

The open JSON catalog under `data/tasks/` contains the current 327-item programme plan. The browser loads `data/tasks/index.json`, fetches the nine phase shards, and overlays live GitHub Issue state using stable `AOS-*` identifiers.

## Authority

- Planning fields originate from the Foundation planning corpus.
- Imported GitHub Issues become the canonical mutable records.
- The JSON shards remain versioned interchange, audit, and recovery artifacts.
- Project v2 dates and relationships supersede the baseline projection after import.

## Format

The manifest declares the total record count and the expected file/count pair for every implementation phase. Each task record contains the fields required by the public table, Gantt projection, reconciliation, and API consumers.

## Publication boundary

The catalog contains original project planning data only. User-provided ZIP/PDF archives and restricted source artifacts are not published.
