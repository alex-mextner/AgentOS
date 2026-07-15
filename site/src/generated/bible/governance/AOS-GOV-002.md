---
id: "AOS-GOV-002"
title: "Contribution and Community Model"
status: "Normative foundation"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Project Governance Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Contribution and Community Model: scope, decisions, requirements, evidence, risks, and traceability for the Agent OS programme."
---
# Contribution and Community Model

> This document defines how decisions, contributions, funding, security reports, partnerships, and public claims are governed.

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

**Area:** Governance.

This document defines how decisions, contributions, funding, security reports, partnerships, and public claims are governed.

This document owns the semantics implied by **Contribution and Community Model**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.
<a id="normative-position"></a>

## Normative Position

1. Publish ownership, decision, review, conflict-of-interest, contribution, security disclosure, licensing, and evidence policies before broad recruitment.
2. Use scoped bounties for reproducible outputs, not vague subsystem completion.
3. Contact vendors, researchers, counsel, labs, communities, standards bodies and potential maintainers with precise asks.
<a id="operating-model"></a>

## Operating Model

The operating model is contract-first and evidence-driven. A component declares its authority, resources, lifecycle, error model, cancellation and timeout behavior, observability, version, and compatibility promise. Backends are replaceable only when the same conformance suite passes and no forbidden platform type leaks into portable layers.

Implementation proceeds through a reference model or mock, deterministic QEMU evidence where relevant, documentation-first physical hardware, and quality-hardware evidence. Pixel 9 adapters remain quarantined according to [ADR-0004](AOS-ADR-0004.md#decision).
<a id="requirements"></a>

## Requirements

- **R01.** Publish ownership, decision, review, conflict-of-interest, contribution, security disclosure, licensing, and evidence policies before broad recruitment.
- **R02.** Use scoped bounties for reproducible outputs, not vague subsystem completion.
- **R03.** Contact vendors, researchers, counsel, labs, communities, standards bodies and potential maintainers with precise asks.
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

- Accepted contribution through full provenance path.
- Maintainer and response-time metrics.
- Partner/contact register with result and next action.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, seed, timestamps, artifacts, expected result, actual result, and reviewer.
- Acceptance requires the referenced tasks to meet their own criteria; prose completion is not implementation completion.
<a id="implementation-obligations"></a>

## Implementation Obligations

| Task | Obligation | Priority | Gate/Milestone | Verification |
| --- | --- | --- | --- | --- |
| AOS-PLAT-090 | Publish developer SDK, debugger, and service test kit | P1 | M8 | fresh external-style onboarding on Linux hosts and reproducible sample component release |
| AOS-OPEN-060 | Design reproducible community hardware kit | P1 | M10 | internal clean-room-style reproduction before external pilot |
| AOS-COMM-000 | Community and Ecosystem epic | P1 | Continuous | monthly project review and gate reconciliation |
| AOS-COMM-001 | Ratify governance and specification lifecycle | P0 | M0 | founder/core-team/legal review and two simulated architecture/community disputes |
| AOS-COMM-002 | Adopt code of conduct and moderation process | P0 | M0 | scenario review including harassment, unsafe instructions, provenance evasion and vendor conflict |
| AOS-COMM-003 | Publish contributor onboarding, DCO, and clean-room disclosure flow | P0 | M0 | new-contributor walkthrough and seeded missing signoff/unknown source/taint cases |
| AOS-COMM-004 | Publish evidence-based public roadmap and support labels | P1 | M1 | architecture/product/legal review and reader comprehension sample |
| AOS-COMM-011 | Create contributor starter tasks and learning paths | P2 | M8 | three external-style contributors complete different paths with measured friction |
| AOS-COMM-050 | Establish hardware maintainer and CI specimen program | P1 | M8 | audit each maintained target and simulate maintainer departure/revision change/security update |
| AOS-COMM-060 | Run external community hardware-kit reproduction pilot | P0 | M10 | EXP-090 by multiple independent environments and at least one non-core maintainer |
<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- Community expectations can exceed project capacity.
- Unreviewed contributions can contaminate provenance.
- Funding can distort architecture or public claims.
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

<a id="community-infrastructure"></a>

### Community Infrastructure

`AOS-PLAT-090` — Publish developer SDK, debugger, and service test kit; `AOS-COMM-011` — Create contributor starter tasks and learning paths

<a id="community-principles"></a>

### Community Principles

`AOS-COMM-000` — Community and Ecosystem epic; `AOS-COMM-004` — Publish evidence-based public roadmap and support labels

<a id="contribution-path"></a>

### Contribution Path

`AOS-COMM-003` — Publish contributor onboarding, DCO, and clean-room disclosure flow

<a id="decision-and-conduct"></a>

### Decision And Conduct

`AOS-COMM-002` — Adopt code of conduct and moderation process

<a id="hardware-maintainers"></a>

### Hardware Maintainers

`AOS-OPEN-060` — Design reproducible community hardware kit; `AOS-COMM-050` — Establish hardware maintainer and CI specimen program; `AOS-COMM-060` — Run external community hardware-kit reproduction pilot

<a id="maintainer-model"></a>

### Maintainer Model

`AOS-COMM-001` — Ratify governance and specification lifecycle
