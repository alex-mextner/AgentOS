# Public derived data

This directory contains machine-readable projections used by the public portal and import tooling.

## `tasks/`

An open JSON projection of the canonical 327-item planning dataset, partitioned into bounded shards by implementation phase.

- `tasks/index.json` is the manifest and authoritative published record count.
- Each manifest entry names one JSON shard and its expected record count.
- Stable `AOS-*` IDs are the reconciliation keys.
- The portal overlays live Issue state and URLs on matching planning records.
- GitHub Issues become the canonical write layer for imported work.
- JSON remains an auditable interchange and recovery representation.
- User-provided ZIP/PDF source archives are not included here or elsewhere in the public repository.

The portal projection includes titles, summaries, hierarchy, dependencies, dates, priority, phase, documentation volume, and task type. Detailed acceptance, evidence, claim, experiment, and specification links remain in the canonical planning corpus and are copied into Issues during import.
