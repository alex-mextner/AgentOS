---
id: AOS-DATA-TASKS
title: Public Task Catalog
status: derived
---

# Public Task Catalog

The open JSON catalog under `data/tasks/` contains the current 327-item programme plan. The browser loads `data/tasks/index.json`, fetches every declared shard, verifies the expected count, and overlays live GitHub Issue state using stable `AOS-*` identifiers.

## Authority

- Planning fields originate from the Foundation planning corpus.
- Imported GitHub Issues become the canonical mutable records.
- JSON shards remain versioned interchange, audit, and recovery artifacts.
- Project v2 dates and relationships supersede baseline dates and links after import.

## Format

The manifest declares the total record count and every expected file/count pair. Shards are intentionally small enough for direct review, Git transport, browser loading, validation, and downstream API clients without compression or proprietary storage.

Each public record contains the fields required by the task table, Gantt projection, stable-ID reconciliation, and basic API consumers. Full acceptance criteria, evidence requirements, claim references, experiment references, and specification cross-links remain in the canonical planning dataset and are copied into Issues during import.

## Publication boundary

The catalog contains original project planning data only. User-provided ZIP/PDF archives and restricted source artifacts are not published.
