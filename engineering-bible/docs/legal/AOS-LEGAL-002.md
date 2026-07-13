---
id: "AOS-LEGAL-002"
title: "Clean-Room Reverse Engineering Protocol"
status: "Counsel-review engineering framework"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Legal Programme Owner"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Clean-Room Reverse Engineering Protocol: scope, decisions, requirements, evidence, risks, and traceability for the Agent OS programme."
---
# Clean-Room Reverse Engineering Protocol

> This document is an engineering issue map for qualified counsel and compliance specialists; it is not legal advice or a substitute for jurisdiction-specific review.

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

**Area:** Legal and Compliance.

This document is an engineering issue map for qualified counsel and compliance specialists; it is not legal advice or a substitute for jurisdiction-specific review.

This document owns the semantics implied by **Clean-Room Reverse Engineering Protocol**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.
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
| AOS-PLAT-081 | Implement hardware trace capture and deterministic replay | P1 | M5 | record/replay lifecycle scenarios and verify no protected/personal/Android/Linux type crosses format |
| AOS-P9-001 | Complete Pixel 9 target and legal dossier | P0 | M1 | architecture/hardware/security/legal review against official/current sources and acquired unit |
| AOS-P9-011 | Automate Pixel stock recovery and artifact inventory | P0 | M1 | recover from intentionally bad noncritical image/state and reproduce on a second unit |
| AOS-P9-021 | Implement approved Pixel trace and observation tooling | P1 | M3 | legal/source review, sensitive/proprietary scan, deterministic replay and version-change test |
| AOS-P9-031 | Map Pixel boot, memory, interrupt, timer, IOMMU, and storage architecture | P1 | M7 | clean-room/source review, controlled probes, consistency with boot traces and independent reviewer |
| AOS-P9-060 | Audit Pixel track source, license, security, and publication readiness | P0 | M7 | independent sample/rebuild/scan and counsel sign-off on releasable scope |
| AOS-LEGAL-005 | Approve clean-room interoperability protocol | P0 | M0 | tabletop exercise using a fictional protocol and contributor-taint scenario |
| AOS-LEGAL-007 | Approve Pixel 9 research boundary | P0 | M1 | counsel and architecture review against proposed Pixel experiments |
| AOS-LEGAL-022 | Implement clean-room roles, repositories, and taint labels | P0 | M0 | Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria. |
| AOS-COMM-003 | Publish contributor onboarding, DCO, and clean-room disclosure flow | P0 | M0 | new-contributor walkthrough and seeded missing signoff/unknown source/taint cases |
| AOS-COMM-040 | Launch bounded bounty program after review capacity exists | P2 | M8 | pilot two low-risk bounties through acceptance/payment/maintenance handoff |
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

<a id="artifact-controls"></a>

### Artifact Controls

`AOS-PLAT-081` — Implement hardware trace capture and deterministic replay; `AOS-P9-011` — Automate Pixel stock recovery and artifact inventory; `AOS-P9-060` — Audit Pixel track source, license, security, and publication readiness

<a id="contributor-onboarding"></a>

### Contributor Onboarding

`AOS-COMM-003` — Publish contributor onboarding, DCO, and clean-room disclosure flow

<a id="pixel-application"></a>

### Pixel Application

`AOS-P9-001` — Complete Pixel 9 target and legal dossier; `AOS-LEGAL-007` — Approve Pixel 9 research boundary

<a id="roles"></a>

### Roles

`AOS-LEGAL-022` — Implement clean-room roles, repositories, and taint labels

<a id="source-classes"></a>

### Source Classes

`AOS-LEGAL-005` — Approve clean-room interoperability protocol; `AOS-LEGAL-005` — Approve clean-room interoperability protocol; `AOS-COMM-040` — Launch bounded bounty program after review capacity exists

<a id="workflow"></a>

### Workflow

`AOS-P9-021` — Implement approved Pixel trace and observation tooling; `AOS-P9-031` — Map Pixel boot, memory, interrupt, timer, IOMMU, and storage architecture; `AOS-LEGAL-005` — Approve clean-room interoperability protocol; `AOS-LEGAL-005` — Approve clean-room interoperability protocol
