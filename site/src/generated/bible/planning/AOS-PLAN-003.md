---
id: "AOS-PLAN-003"
title: "Work Breakdown Structure"
status: "Normative foundation"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Programme Lead"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Work Breakdown Structure: scope, decisions, requirements, evidence, risks, and traceability for the Agent OS programme."
---
# Work Breakdown Structure

> This document converts architecture and uncertainty into owned work, dependencies, budgets, dates, evidence, gates, and stop criteria.

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

**Area:** Programme Planning.

This document converts architecture and uncertainty into owned work, dependencies, budgets, dates, evidence, gates, and stop criteria.

This document owns the semantics implied by **Work Breakdown Structure**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.
<a id="normative-position"></a>

## Normative Position

1. Represent nine chronological execution phases separately from ten thematic documentation volumes.
2. Schedule evidence gates and dependency edges, not only activity dates.
3. Keep tracker state derived from repository CSV plus API reconciliation; no critical decision exists only in Linear or GitHub.
<a id="operating-model"></a>

## Operating Model

The operating model is contract-first and evidence-driven. A component declares its authority, resources, lifecycle, error model, cancellation and timeout behavior, observability, version, and compatibility promise. Backends are replaceable only when the same conformance suite passes and no forbidden platform type leaks into portable layers.

Implementation proceeds through a reference model or mock, deterministic QEMU evidence where relevant, documentation-first physical hardware, and quality-hardware evidence. Pixel 9 adapters remain quarantined according to [ADR-0004](AOS-ADR-0004.md#decision).
<a id="requirements"></a>

## Requirements

- **R01.** Represent nine chronological execution phases separately from ten thematic documentation volumes.
- **R02.** Schedule evidence gates and dependency edges, not only activity dates.
- **R03.** Keep tracker state derived from repository CSV plus API reconciliation; no critical decision exists only in Linear or GitHub.
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

- Acyclic task graph.
- Milestone and dependency reconciliation.
- Monthly evidence, risk, spend and decision review.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, seed, timestamps, artifacts, expected result, actual result, and reviewer.
- Acceptance requires the referenced tasks to meet their own criteria; prose completion is not implementation completion.
<a id="implementation-obligations"></a>

## Implementation Obligations

| Task | Obligation | Priority | Gate/Milestone | Verification |
| --- | --- | --- | --- | --- |
| AOS-COMM-011 | Create contributor starter tasks and learning paths | P2 | M8 | three external-style contributors complete different paths with measured friction |
<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- False precision in long-range dates hides unknown hardware work.
- Large epics can mask stalled evidence.
- Parallel tracks can duplicate interfaces without conformance ownership.
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

<a id="completion-rules"></a>

### Completion Rules

`AOS-COMM-011` — Create contributor starter tasks and learning paths
