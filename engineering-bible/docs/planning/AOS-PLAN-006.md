---
id: "AOS-PLAN-006"
title: "Decision Gates and Stop Criteria"
status: "Normative foundation"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Programme Lead"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Decision Gates and Stop Criteria: scope, decisions, requirements, evidence, risks, and traceability for the Agent OS programme."
---
# Decision Gates and Stop Criteria

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

This document owns the semantics implied by **Decision Gates and Stop Criteria**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.
<a id="normative-position"></a>

## Normative Position

1. Define the boundary, owner, inputs, outputs, failure modes, observability, security authority, lifecycle, and compatibility policy.
2. Keep implementation facts separate from desired outcomes and unverified assumptions.
3. Require a reproducible evidence bundle before downstream components depend on the result.
<a id="operating-model"></a>

## Operating Model

The operating model is contract-first and evidence-driven. A component declares its authority, resources, lifecycle, error model, cancellation and timeout behavior, observability, version, and compatibility promise. Backends are replaceable only when the same conformance suite passes and no forbidden platform type leaks into portable layers.

Implementation proceeds through a reference model or mock, deterministic QEMU evidence where relevant, documentation-first physical hardware, and quality-hardware evidence. Pixel 9 adapters remain quarantined according to [ADR-0004](AOS-ADR-0004.md#decision).
<a id="requirements"></a>

## Requirements

- **R01.** Define the boundary, owner, inputs, outputs, failure modes, observability, security authority, lifecycle, and compatibility policy.
- **R02.** Keep implementation facts separate from desired outcomes and unverified assumptions.
- **R03.** Require a reproducible evidence bundle before downstream components depend on the result.
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

- Reviewed specification.
- Linked tasks, claims, sources and experiments.
- Conformance or acceptance evidence.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, seed, timestamps, artifacts, expected result, actual result, and reviewer.
- Acceptance requires the referenced tasks to meet their own criteria; prose completion is not implementation completion.
<a id="implementation-obligations"></a>

## Implementation Obligations

| Task | Obligation | Priority | Gate/Milestone | Verification |
| --- | --- | --- | --- | --- |
| AOS-DOCS-009 | Baseline budget, procurement, risk, and gate registers | P1 | M0 | finance/procurement/technical/legal review |
| AOS-CORE-040 | Freeze kernel API level 0 at capability vertical-slice gate | P0 | M2 | architecture/security/platform review of evidence and independent rebuild |
| AOS-OPEN-080 | Select maintained hardware portfolio after M6/M7 | P0 | M9 | cross-functional gate review with total cost and capacity model |
| AOS-CAM-080 | Select camera route for quality-device track | P0 | M9 | architecture, camera, product, security, legal and program review |
| AOS-CELL-050 | Establish native voice and IMS feasibility | P0 | M9 | EXP-044 with written partner evidence and lawful lab/test-network demonstration where available |
| AOS-CELL-080 | Decide connected-device versus full-phone product route | P0 | M9 | product, cellular, legal, regulatory, security and program review |
| AOS-P9-030 | Reach lawful reproducible Agent OS early diagnostics on Pixel 9 | P0 | M7 | EXP-032 repeated from stock/recovery states on two units, malformed image and loss-of-diagnostic tests |
| AOS-P9-070 | Issue Pixel 9 continue, limit, or stop gate decision | P0 | M7 | cross-functional review with comparison to documented/open/custom alternatives |
| AOS-SEC-080 | Commission independent kernel/platform security review | P0 | M8 | qualified reviewer selection, finding triage/closure and retest |
| AOS-COMM-004 | Publish evidence-based public roadmap and support labels | P1 | M1 | architecture/product/legal review and reader comprehension sample |
| AOS-ODM-011 | Freeze product-hardware architecture envelope | P1 | M9 | product/camera/cellular/power/security/regulatory/supply review and sensitivity scenarios |
| AOS-ODM-030 | Complete custom carrier-board feasibility study | P0 | M10 | EXP-081 independent cross-functional design review and at least two vendor/manufacturer feasibility inputs |
| AOS-ODM-090 | Issue production-device program gate | P0 | Continuous | program-board review of all G0–G10 evidence and independent legal/security/finance inputs |
<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- Undefined ownership and failure semantics create hidden coupling.
- Unverified source claims can become architecture accidentally.
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

<a id="camera-stop-criteria"></a>

### Camera Stop Criteria

`AOS-CAM-080` — Select camera route for quality-device track

<a id="cellular-and-voice-criteria"></a>

### Cellular And Voice Criteria

`AOS-CELL-050` — Establish native voice and IMS feasibility; `AOS-CELL-080` — Decide connected-device versus full-phone product route

<a id="pixel-stop-criteria"></a>

### Pixel Stop Criteria

`AOS-P9-030` — Reach lawful reproducible Agent OS early diagnostics on Pixel 9; `AOS-P9-070` — Issue Pixel 9 continue, limit, or stop gate decision

<a id="quality-device-route-decision"></a>

### Quality Device Route Decision

`AOS-ODM-011` — Freeze product-hardware architecture envelope; `AOS-ODM-030` — Complete custom carrier-board feasibility study

<a id="release-language"></a>

### Release Language

`AOS-COMM-004` — Publish evidence-based public roadmap and support labels

<a id="technical-gates"></a>

### Technical Gates

`AOS-DOCS-009` — Baseline budget, procurement, risk, and gate registers; `AOS-CORE-040` — Freeze kernel API level 0 at capability vertical-slice gate; `AOS-OPEN-080` — Select maintained hardware portfolio after M6/M7; `AOS-SEC-080` — Commission independent kernel/platform security review; `AOS-ODM-090` — Issue production-device program gate


<a id="generated-xref-anchors"></a>

## Generated Cross-Reference Anchors

<a id="decision-gates"></a>

### Decision Gates

This stable anchor is referenced by another canonical document. Its normative content is the nearest applicable section above and the linked task/claim data; future editorial refinement must preserve the anchor.
