---
id: "AOS-VALIDATION"
title: "Release Validation Report"
status: "Generated release evidence"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Agent OS Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Validation scope, counts, integrity results, and known limitations for the packaged foundation release."
---

# Release Validation Report

## Table of Contents

- [Result](#result)
- [Validated Invariants](#validated-invariants)
- [Inventory](#inventory)
- [Known Limitations](#known-limitations)

<a id="result"></a>

## Result

**PASS** — generated on 2026-07-12.

<a id="validated-invariants"></a>

## Validated Invariants

- Unique canonical document IDs and stable explicit anchors.
- Resolved canonical document-and-anchor references and bundled local Markdown links.
- Table of contents in every canonical document except the repository README entry page.
- Task parents, references, dependency edges, and acyclic dependency graph.
- Task-to-spec anchors and source/claim/experiment identifiers.
- Row consistency for Gantt, Linear, GitHub, dependency, and cross-link exports.
- Flat Wiki page coverage for every canonical document.
- Deprecated project-name use of `SMP` removed; the term remains only for symmetric multiprocessing.
- SHA-256 inventory for packaged release files.

<a id="inventory"></a>

## Inventory

- Files covered by checksum inventory: 367
- Canonical registered documents: 142
- Canonical tasks: 327
- Sources: 109
- Claims: 34
- Experiments: 51
- Top-level file groups: BRIEFING.md=1, MANIFEST.md=1, README.md=1, diagrams=3, docs=135, imports=10, sources=69, tools=3, wiki=144

<a id="known-limitations"></a>

## Known Limitations

Structural validation does not substitute for implementation evidence, independent security review, jurisdiction-specific legal advice, carrier certification, camera tuning, silicon documentation, or production supplier quotations. Documents explicitly label hypotheses, experiments, review gates, and stop criteria where these remain unresolved.
