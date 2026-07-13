---
id: "AOS-META-001"
title: "Linking and Publishing Convention"
status: "Normative foundation"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Documentation Lead"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Linking and Publishing Convention: scope, decisions, requirements, evidence, risks, and traceability for the Agent OS programme."
---
# Linking and Publishing Convention

> This document defines the machine-readable conventions that keep specifications, tasks, sources, claims, experiments, and Wiki output consistent.

## Table of Contents

- [Purpose and Scope](#purpose-and-scope)
- [Normative Position](#normative-position)
- [Operating Model](#operating-model)
- [Requirements](#requirements)
- [Failure and Degradation](#failure-and-degradation)
- [Evidence and Acceptance](#evidence-and-acceptance)
- [Implementation Obligations](#implementation-obligations)
- [Risks and Open Questions](#risks-and-open-questions)
- [Related Documents](#related-documents)
- [Planning Reference Anchors](#planning-reference-anchors)
<a id="purpose-and-scope"></a>

## Purpose and Scope

**Area:** Documentation System.

This document defines the machine-readable conventions that keep specifications, tasks, sources, claims, experiments, and Wiki output consistent.

This document owns the semantics implied by **Linking and Publishing Convention**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.
<a id="normative-position"></a>

## Normative Position

1. Use stable document, task, source, claim, experiment, decision, and evidence IDs.
2. Use explicit anchors and machine xrefs that render to repository and GitHub Wiki links.
3. Keep Markdown narrative and CSV registries generated from one canonical relationship model where possible.
<a id="operating-model"></a>

## Operating Model

The operating model is contract-first and evidence-driven. A component declares its authority, resources, lifecycle, error model, cancellation and timeout behavior, observability, version, and compatibility promise. Backends are replaceable only when the same conformance suite passes and no forbidden platform type leaks into portable layers.

Implementation proceeds through a reference model or mock, deterministic QEMU evidence where relevant, documentation-first physical hardware, and quality-hardware evidence. Pixel 9 adapters remain quarantined according to [ADR-0004](AOS-ADR-0004.md#decision).
<a id="requirements"></a>

## Requirements

- **R01.** Use stable document, task, source, claim, experiment, decision, and evidence IDs.
- **R02.** Use explicit anchors and machine xrefs that render to repository and GitHub Wiki links.
- **R03.** Keep Markdown narrative and CSV registries generated from one canonical relationship model where possible.
- **R04.** Specify normal, partial, denied, timeout, cancellation, restart, upgrade, and permanent-failure behavior.
- **R05.** Expose structured diagnostics without leaking secrets or vendor-specific implementation details.
- **R06.** Link material unknowns to a claim and, when testable, an experiment with an owner and gate.
- **R07.** Update affected documentation and task data when evidence changes the model.
<a id="failure-and-degradation"></a>

## Failure and Degradation

Degradation must be explicit rather than accidental. The system reports capability absence, reduced quality, unavailable provider, stale data, or unsafe condition through typed states. It must not silently fall back to broader authority, unrestricted legacy execution, unverified firmware, lossy data migration, or irreversible agent action.

Recovery defines what state is retained, reconstructed, re-enrolled, compensated, or intentionally discarded. Unsupported hardware or providers are rejected at binding time where possible.
<a id="evidence-and-acceptance"></a>

## Evidence and Acceptance

- Cross-reference crawler.
- Frontmatter schema validation.
- Manifest/hash generation and duplicate-view checks.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, seed, timestamps, artifacts, expected result, actual result, and reviewer.
- Acceptance requires the referenced tasks to meet their own criteria; prose completion is not implementation completion.
<a id="implementation-obligations"></a>

## Implementation Obligations

| Task | Obligation | Priority | Gate/Milestone | Verification |
| --- | --- | --- | --- | --- |
| AOS-DOCS-002 | Implement cross-reference and Wiki publishing convention | P0 | M0 | render repository docs into flat Wiki preview and crawl links |
| AOS-DOCS-007 | Implement document and task validators | P0 | M0 | positive and intentionally broken fixture runs |
| AOS-DOCS-011 | Generate and review Wiki publication preview | P2 | M0 | crawl all generated pages and compare xref targets to source |
| AOS-DOCS-023 | Define canonical cross-reference and anchor syntax | P0 | M0 | Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria. |
| AOS-DOCS-028 | Generate and verify GitHub Wiki publication views | P1 | M8 | Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria. |
| AOS-COMM-010 | Build documentation site and Wiki publication pipeline | P1 | M2 | build from clean source, crawl links, test mobile/accessibility/search/versioned anchors |
<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- Duplicated Wiki copies can drift.
- Renamed headings can break deep links.
- Machine-generated volume can obscure review status.
- **Open-question rule:** an unanswered high-impact question becomes a claim/experiment record and cannot be hidden in meeting notes.
- **Stop rule:** work stops or changes track when legal rights, recovery, debug access, safety, or the required evidence path is unavailable.
<a id="related-documents"></a>

## Related Documents

- [Product vision](AOS-VSN-001.md#product-thesis)
- [Portable system architecture](AOS-ARCH-001.md#system-boundary)
- [Portable device-service contracts](AOS-ARCH-020.md#contract-set)
- [Hardware portfolio](AOS-HW-001.md#portfolio)
- [Decision gates](AOS-PLAN-006.md#decision-gates)
- [Claim register](AOS-RES-003.md#claim-register)
<a id="planning-reference-anchors"></a>

## Planning Reference Anchors

<a id="publishing-flow"></a>

### Publishing Flow

`AOS-DOCS-002` — Implement cross-reference and Wiki publishing convention; `AOS-DOCS-002` — Implement cross-reference and Wiki publishing convention; `AOS-DOCS-011` — Generate and review Wiki publication preview; `AOS-DOCS-028` — Generate and verify GitHub Wiki publication views; `AOS-COMM-010` — Build documentation site and Wiki publication pipeline

<a id="validation"></a>

### Validation

`AOS-DOCS-007` — Implement document and task validators

<a id="xref-syntax"></a>

### Xref Syntax

`AOS-DOCS-002` — Implement cross-reference and Wiki publishing convention; `AOS-DOCS-002` — Implement cross-reference and Wiki publishing convention; `AOS-DOCS-023` — Define canonical cross-reference and anchor syntax
