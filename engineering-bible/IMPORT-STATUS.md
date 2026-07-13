---
id: AOS-BIBLE-IMPORT
 title: Engineering Bible Import Status
status: active migration
---

# Engineering Bible Import Status

## Source baseline

The source baseline is `AgentOS-Engineering-Bible-Foundation-2026-07-12.zip`, unpacked and inspected before import.

Inventory of the source baseline:

- 370 files total;
- 142 registered canonical documents;
- 135 files under `docs/`;
- 69 files under `sources/`;
- 10 tracker/import datasets;
- 3 build and validation tools;
- 144 generated Wiki pages;
- 327 canonical tasks;
- 109 sources, 34 claims, and 51 experiments.

## Import policy

1. Preserve the extracted Bible structure under `engineering-bible/` as the versioned Foundation baseline.
2. Treat `engineering-bible/docs/**` and its canonical CSV registers as authoritative documentation data.
3. Treat `engineering-bible/wiki/**` as generated publication output, not a competing source of truth.
4. Include the supplied source archives and PDFs under `engineering-bible/sources/original/` with provenance and redistribution classification.
5. Point the public portal at the canonical Bible index and documents.
6. Merge newer portal/product decisions into canonical documents through reviewed follow-up commits; do not silently overwrite the baseline.
7. Run the packaged build and validation tools after the complete import and publish the resulting inventory/checksums.

## Migration gates

- [ ] Top-level README, briefing, manifest, diagrams, tools, and validation files imported.
- [ ] All canonical `docs/**` files imported without omissions.
- [ ] All canonical CSV/YAML datasets imported without schema loss.
- [ ] Normalized and extracted source digests imported.
- [ ] Original supplied ZIP/PDF/source files imported with provenance classification.
- [ ] Generated Wiki imported or regenerated from canonical documents.
- [ ] Portal reads the canonical Bible document index.
- [ ] All internal links and anchors validate.
- [ ] File count, document count, task count, source count, claim count, experiment count, and checksums reconcile with the packaged baseline.
