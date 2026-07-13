---
id: "AOS-MANIFEST"
title: "Release Manifest"
status: "Foundation release manifest"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Agent OS Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Inventory, validation state, reproducibility rules, canonical datasets, and release boundaries for the Agent OS Engineering Bible."
---

# Release Manifest

## Table of Contents

- [Release Identity](#release-identity)
- [Release Scope](#release-scope)
- [Canonical Artifacts](#canonical-artifacts)
- [Inventory](#inventory)
- [Validation Status](#validation-status)
- [Rebuild and Publication](#rebuild-and-publication)
- [Limitations](#limitations)

<a id="release-identity"></a>

## Release Identity

- **Edition:** Foundation Release
- **Version:** `1.0.0-foundation`
- **Release date:** `2026-07-12`
- **Working name:** Agent OS; not trademark-cleared
- **Stable namespace:** `AOS-*`

<a id="release-scope"></a>

## Release Scope

This release is a normative planning and research foundation for an independently implemented Rust-first microkernel, portable system and product layers, parallel hardware tracks, and a future partner/custom-device route. It is not a claim that the operating system, drivers, Pixel 9 support, camera stack, cellular stack, certifications, or production device already exist.

Historical Fuchsia-oriented and Android/Linux-oriented material is retained as immutable prior art and provenance. Current requirements are defined by canonical `AOS-*` documents and ADRs.

<a id="canonical-artifacts"></a>

## Canonical Artifacts

| Artifact | Role |
| --- | --- |
| `docs/**/*.md` | Normative and research documentation |
| `docs/planning/tasks.csv` | Canonical task graph |
| `docs/research/source-register.csv` | Source registry |
| `docs/research/claim-register.csv` | Claim state registry |
| `docs/research/experiment-register.csv` | Experiment/evidence registry |
| `docs/hardware/procurement.csv` | Procurement planning data |
| `docs/legal/contacts.csv` | Contact acquisition plan |
| `sources/original/` | Immutable supplied archives |
| `sources/normalized/` | English source digests and dispositions |
| `imports/` | Derived tracker-neutral and tracker staging views |
| `wiki/` | Derived flat GitHub Wiki view |

<a id="inventory"></a>

## Inventory

- **Registered Markdown documents:** 142
- **Canonical tasks:** 327
- **Registered sources:** 109
- **Claim records:** 34
- **Experiment records:** 51
- **Wiki pages:** generated during release build
- **File checksums:** `validation/CHECKSUMS.sha256`
- **Machine-readable file inventory:** `validation/FILE-MANIFEST.csv`

<a id="validation-status"></a>

## Validation Status

**Status:** PASS — zero blocking errors in the packaged structural and traceability validator.

The release validator checks document IDs, explicit anchors, cross-references, local Markdown links, task parents and dependency cycles, task-to-spec anchors, source/claim/experiment IDs, import row consistency, Wiki coverage, language constraints outside immutable sources, and deprecated project-name usage. The authoritative report is `validation/VALIDATION.md`.

<a id="rebuild-and-publication"></a>

## Rebuild and Publication

Run:

```bash
python3 tools/build_release.py --rebuild
python3 tools/validate.py
```

The build regenerates evidence views, task projections, imports, link map, Wiki, validation inventory, and checksums from canonical files. GitHub/Linear imports require post-import reconciliation because tracker CSV importers do not preserve every dependency and cross-link type.

<a id="limitations"></a>

## Limitations

This edition contains researched specifications and executable planning data, but many engineering claims remain hypotheses pending experiments or specialist review. Legal documents are issue-spotting and process specifications, not jurisdiction-specific legal advice. Cost ranges are planning estimates, not supplier quotations. Hardware candidates must pass SKU, documentation, recovery, licensing, availability, and unique-evidence gates before purchase.
