---
id: "AOS-SRC-README"
title: "Source Corpus and Provenance"
status: "Normative provenance policy"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Agent OS Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Immutable user inputs, normalized digests, extracted text, authority rules, and conflict handling."
---
# Source Corpus and Provenance

## Table of Contents

- [Purpose](#purpose)
- [Directory Contract](#directory-contract)
- [Authority Rules](#authority-rules)
- [Normalization Rules](#normalization-rules)
- [Conflict Handling](#conflict-handling)
- [PDF Handling](#pdf-handling)

<a id="purpose"></a>

## Purpose

This directory preserves the complete material supplied for the project and makes every downstream statement traceable. Original files are evidence, not automatically current requirements. Normative requirements live under `docs/`; historical assumptions remain visible through source and claim records.

<a id="directory-contract"></a>

## Directory Contract

- `original/` contains byte-preserved archives and unpacked trees.
- `extracted/` contains machine-readable text derived from PDFs. It is convenient but non-authoritative when layout, figures, or tables matter.
- `normalized/` contains English digests that separate enduring product intent from superseded implementation choices.
- `provenance/source-files.csv` records path, size, SHA-256, origin, and mutability.

<a id="authority-rules"></a>

## Authority Rules

1. User intent and accepted architecture decisions outrank historical implementation drafts.
2. A normative document may adopt, reject, narrow, or defer a source claim, but must not silently rewrite provenance.
3. External technical facts require a registered source and a verification state.
4. Legal interpretations are issue maps for counsel review, not legal advice.
5. Reverse-engineered observations are evidence only for the tested device, build, region, and conditions.

<a id="normalization-rules"></a>

## Normalization Rules

Normalized digests use stable IDs, retain source paths, identify conflicts, and state the current disposition. Translation and paraphrase must preserve uncertainty. Terms such as “works”, “supported”, “open”, and “portable” are replaced with measurable claims whenever possible.

<a id="conflict-handling"></a>

## Conflict Handling

Conflicts are recorded in [the conflict map](AOS-RES-005.md#conflict-register). The current model is a Fuchsia/Zircon fork with portable native contracts on top. Zircon/DFv2/FIDL/Magma/Starnix are the taken-as-is base; Android, Linux, seL4, and other systems are prior art or bounded evidence environments. Android/Linux use is restricted by [ADR-0004](AOS-ADR-0004.md#decision).

<a id="pdf-handling"></a>

## PDF Handling

The two PDFs were rendered page-by-page before synthesis. Extracted text is included for search, while page-level statements that depend on diagrams or tables require visual confirmation against the original PDF. The Fuchsia-oriented mobile specification is retained as prior art and an assumption inventory, not adopted wholesale.


<a id="planning-reference-anchors"></a>

## Planning Reference Anchors

<a id="immutability"></a>

### Immutability

Stable planning anchor; obligations are defined by linked tasks in `docs/planning/tasks.csv`.
