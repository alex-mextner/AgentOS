---
id: "AOS-ADR-0007"
title: "ADR-0007: Archive the Pixel 9 Native Route"
status: "Accepted foundation decision"
version: "1.0.0"
baseline_date: "2026-07-13"
owners: "Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "ADR-0007: Archive the Pixel 9 Native Route: the Pixel 9 native-feasibility track is moved to archived status with documentation retained, quarantine rules unchanged, and explicit reactivation conditions."
---

# ADR-0007: Archive the Pixel 9 Native Route

> This record freezes a high-cost architectural decision, its rationale, consequences, reversal conditions, and required evidence.

## Table of Contents

- [Purpose and Scope](#purpose-and-scope)
- [Normative Position](#normative-position)
- [Context and Rationale](#context-and-rationale)
- [Operating Model](#operating-model)
- [Requirements](#requirements)
- [Consequences](#consequences-section)
- [Reactivation Conditions](#reactivation-conditions)
- [Failure and Degradation](#failure-and-degradation)
- [Evidence and Acceptance](#evidence-and-acceptance)
- [Implementation Obligations](#implementation-obligations)
- [Risks and Open Questions](#risks-and-open-questions)
- [Related Documents](#related-documents)
- [Planning Reference Anchors](#planning-reference-anchors)

<a id="purpose-and-scope"></a>

## Purpose and Scope

**Area:** Architecture Decision.

This record archives the Pixel 9 native-feasibility route as an active engineering track while preserving its documentation, dossiers, acquired devices, and containment rules for possible reactivation.

This document owns the semantics implied by **ADR-0007: Archive the Pixel 9 Native Route**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.

<a id="normative-position"></a>

## Normative Position

1. The Pixel 9 native route (the AOS-P9 task family and its milestones) moves to **Archived** status: no active engineering effort, budget, or schedule commitments are attached to it.
2. All Pixel 9 documentation, dossiers, source references, and the [ADR-0004](AOS-ADR-0004.md#decision) quarantine rules remain in the corpus unchanged and continue to govern any residual Pixel artifacts, devices, or traces.
3. The "walk-around showcase" role is reassigned to the interim demo brick defined in [AOS-HW-017](../hardware/HW-017-interim-demo-device.md); Pixel 9 remains available as a read-only stock-quality oracle for measurement baselines only.

<a id="context-and-rationale"></a>

## Context and Rationale

The Pixel 9 route carried the highest concentration of programme risk: undocumented vendor subsystems, proprietary camera and radio stacks, legal and access uncertainty, and an unbounded native-port effort, in exchange for a flagship quality ceiling. The programme's near-term need — a carriable device demonstrating the portable contracts on real radio, camera, and battery hardware — is met at far lower cost and risk by the module-based demo brick ([AOS-HW-017](../hardware/HW-017-interim-demo-device.md)) combined with the documented-board and camera-lab tracks. Archiving, rather than deleting, preserves the option value of the Pixel research already catalogued.

<a id="operating-model"></a>

## Operating Model

The operating model is contract-first and evidence-driven. A component declares its authority, resources, lifecycle, error model, cancellation and timeout behavior, observability, version, and compatibility promise. Backends are replaceable only when the same conformance suite passes and no forbidden platform type leaks into portable layers.

Implementation proceeds through a reference model or mock, deterministic QEMU evidence where relevant, documentation-first physical hardware, and quality-hardware evidence. Pixel 9 adapters remain quarantined according to [ADR-0004](AOS-ADR-0004.md#decision); under this ADR no new Pixel adapters are created while the route is archived.

<a id="requirements"></a>

## Requirements

- **R01.** Mark all AOS-P9 tasks as Archived in the task register; none may appear on an active milestone or critical path.
- **R02.** Preserve Pixel devices in a known-good stock state with their acquisition and recovery dossiers; devices are not repurposed, unlocked further, or disposed of without a new decision record.
- **R03.** Permit stock-oracle use only as a measurement baseline (camera quality, latency, battery reference points) with no native-port, extraction, or bridge work attached.
- **R04.** Specify normal, partial, denied, timeout, cancellation, restart, upgrade, and permanent-failure behavior.
- **R05.** Expose structured diagnostics without leaking secrets or vendor-specific implementation details.
- **R06.** Link material unknowns to a claim and, when testable, an experiment with an owner and gate.
- **R07.** Update affected documentation and task data when evidence changes the model.

<a id="consequences-section"></a>

## Consequences

- Engineering capacity previously earmarked for Pixel feasibility spikes is released to the demo brick (AOS-DEMO tasks), documented boards, and the camera laboratory.
- The hardware-routes table in [AOS-BRIEF](AOS-BRIEF.md#hardware-routes) and the portfolio in [AOS-HW-001](../hardware/AOS-HW-001.md#target-classes) must annotate the Pixel 9 row as archived at their next revision.
- Documents referencing Pixel 9 experiments as scheduled work (notably AOS-HW-002, AOS-HW-005, and the AOS-P9 sections of the task register) inherit archived status for those references without textual rewrites; this ADR is the authoritative status source.
- Public and partner communication describes Pixel 9 as "researched and archived", never as "abandoned" or "in progress".

<a id="reactivation-conditions"></a>

## Reactivation Conditions

The route may be reactivated only by a new decision record citing at least one of:

1. Vendor or partner access materially changing documentation, source, or firmware rights for the relevant subsystems.
2. Demo-brick and documented-board evidence maturing to the point where the remaining Pixel-only questions (flagship camera ceiling, integrated power, secure element) are the programme's binding constraints.
3. Funding and staffing explicitly sized for an unbounded native-port effort with its own stop criteria.

<a id="failure-and-degradation"></a>

## Failure and Degradation

Degradation must be explicit rather than accidental. The system reports capability absence, reduced quality, unavailable provider, stale data, or unsafe condition through typed states. It must not silently fall back to broader authority, unrestricted legacy execution, unverified firmware, lossy data migration, or irreversible agent action.

For this decision specifically: any drift of Pixel artifacts back into active work without a reactivating decision record is a containment failure and is escalated to the Architecture Council.

Recovery defines what state is retained, reconstructed, re-enrolled, compensated, or intentionally discarded. Unsupported hardware or providers are rejected at binding time where possible.

<a id="evidence-and-acceptance"></a>

## Evidence and Acceptance

- Task-register diff showing every AOS-P9 task in Archived status with this ADR as the cause.
- Device custody record for preserved Pixel units in stock state.
- Dependency scan proving no active build, test, or milestone references a Pixel adapter.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, seed, timestamps, artifacts, expected result, actual result, and reviewer.
- Acceptance requires the referenced tasks to meet their own criteria; prose completion is not implementation completion.

<a id="implementation-obligations"></a>

## Implementation Obligations

| Task | Obligation | Priority | Gate/Milestone | Verification |
| --- | --- | --- | --- | --- |
| AOS-DEMO-000 (intake) | Apply Archived status to the AOS-P9 task family and annotate portfolio documents | P1 | intake | Task-register diff, document annotations, independent review against this ADR |
| AOS-DEMO-001..006 | Execute the interim demo-brick programme per [AOS-HW-017](../hardware/HW-017-interim-demo-device.md#implementation-obligations) | P1/P2 | intake | Per-task verification defined in AOS-HW-017 |

<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- Archived knowledge decays: Pixel SKUs, firmware, and unlock policies will drift while the route sleeps, raising reactivation cost.
- The demo brick may under-represent the flagship quality ceiling, weakening future ODM negotiations that Pixel evidence would have anchored.
- Schedule pressure may tempt informal Pixel work outside the register; R01 and the containment escalation exist to prevent this.
- **Open-question rule:** an unanswered high-impact question becomes a claim/experiment record and cannot be hidden in meeting notes.
- **Stop rule:** work stops or changes track when legal rights, recovery, debug access, safety, or the required evidence path is unavailable.

<a id="related-documents"></a>

## Related Documents

- [Product vision](AOS-VSN-001.md#product-thesis)
- [Portable system architecture](AOS-ARCH-001.md#system-boundary)
- [Hardware portfolio](../hardware/AOS-HW-001.md#portfolio)
- [ADR-0004: Minimal Android/Linux Use on Pixel 9](AOS-ADR-0004.md#decision)
- [Interim demo device](../hardware/HW-017-interim-demo-device.md)
- [Decision gates](AOS-PLAN-006.md#decision-gates)
- [Claim register](AOS-RES-003.md#claim-register)

<a id="planning-reference-anchors"></a>

## Planning Reference Anchors

<a id="decision"></a>

### Decision

For planning, conformance, and task cross-references, **Decision** denotes the archival of the Pixel 9 native route as governed by [Normative Position](#normative-position) and [Consequences](#consequences-section).

<a id="reactivation"></a>

### Reactivation

For planning, conformance, and task cross-references, **Reactivation** denotes the conditions governed by [Reactivation Conditions](#reactivation-conditions).
