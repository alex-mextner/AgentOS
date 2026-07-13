---
id: "AOS-PROD-001"
title: "Entity-First Shell and Surfaces"
status: "Normative foundation"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Product Architecture"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Entity-First Shell and Surfaces: scope, decisions, requirements, evidence, risks, and traceability for the Agent OS programme."
---
# Entity-First Shell and Surfaces

> This specification defines a user-facing capability in terms of entities, actions, history, consent, recovery, accessibility, and provider contracts.

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

**Area:** Product System.

This specification defines a user-facing capability in terms of entities, actions, history, consent, recovery, accessibility, and provider contracts.

This document owns the semantics implied by **Entity-First Shell and Surfaces**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.
<a id="normative-position"></a>

## Normative Position

1. Model visible objects as stable entities with typed relationships, provenance, authority, schemas, views, actions, and history.
2. Providers publish typed actions and declarative surfaces; users and agents receive the same semantic operations with different authority and confirmation policy.
3. Composition and transclusion preserve origin and permission rather than copying opaque app state.
<a id="operating-model"></a>

## Operating Model

The operating model is contract-first and evidence-driven. A component declares its authority, resources, lifecycle, error model, cancellation and timeout behavior, observability, version, and compatibility promise. Backends are replaceable only when the same conformance suite passes and no forbidden platform type leaks into portable layers.

Implementation proceeds through a reference model or mock, deterministic QEMU evidence where relevant, documentation-first physical hardware, and quality-hardware evidence. Pixel 9 adapters remain quarantined according to [ADR-0004](AOS-ADR-0004.md#decision).
<a id="requirements"></a>

## Requirements

- **R01.** Model visible objects as stable entities with typed relationships, provenance, authority, schemas, views, actions, and history.
- **R02.** Providers publish typed actions and declarative surfaces; users and agents receive the same semantic operations with different authority and confirmation policy.
- **R03.** Composition and transclusion preserve origin and permission rather than copying opaque app state.
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

- Vertical slices across at least three domains.
- Usability and action-coverage studies.
- Migration, permission and provenance tests.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, seed, timestamps, artifacts, expected result, actual result, and reviewer.
- Acceptance requires the referenced tasks to meet their own criteria; prose completion is not implementation completion.
<a id="implementation-obligations"></a>

## Implementation Obligations

| Task | Obligation | Priority | Gate/Milestone | Verification |
| --- | --- | --- | --- | --- |
| AOS-PROD-000 | Product Runtime epic | P1 | Continuous | monthly project review and gate reconciliation |
| AOS-PROD-001 | Define entity and relationship schema v0 | P0 | M2 | schema review using person, document, activity, device, place, task, media and provider examples |
| AOS-PROD-002 | Implement provenance and entity-resolution model | P0 | M3 | duplicate/conflicting contacts, imported documents, provider deletion and malicious assertion scenarios |
| AOS-PROD-050 | Implement entity-first shell skeleton | P0 | M4 | QEMU and first-board workflows, keyboard/switch/screen-reader, provider failure and large graph tests |
| AOS-PROD-051 | Implement IntentBox draft and confirmation flow | P1 | M8 | ambiguous recipient/account/amount/destination and inaccessible/offline provider tests |
| AOS-PROD-053 | Implement notification, structured clipboard, and share services | P1 | M8 | sensitive clipboard, spoofing, expiry, background access, multi-format coercion and accessibility tests |
| AOS-PROD-080 | Benchmark entity-first shell against task baselines | P1 | M8 | EXP-070 with pilot then appropriately sized study and accessibility representation |
| AOS-PROD-090 | Evaluate IntentBox interpretation and confirmation safety | P0 | M8 | EXP-071 including time pressure, accessibility needs and adversarial provider labels |
<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- A universal entity model can become vague or over-normalized.
- Third-party providers may expose incomplete or misleading actions.
- Malleability can conflict with consistency, accessibility and support.
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

<a id="activity-and-stories"></a>

### Activity And Stories

`AOS-PROD-053` — Implement notification, structured clipboard, and share services

<a id="entity-surfaces"></a>

### Entity Surfaces

`AOS-PROD-001` — Define entity and relationship schema v0; `AOS-PROD-002` — Implement provenance and entity-resolution model; `AOS-PROD-050` — Implement entity-first shell skeleton

<a id="intent-box"></a>

### Intent Box

`AOS-PROD-051` — Implement IntentBox draft and confirmation flow; `AOS-PROD-090` — Evaluate IntentBox interpretation and confirmation safety

<a id="product-contract"></a>

### Product Contract

`AOS-PROD-000` — Product Runtime epic; `AOS-PROD-080` — Benchmark entity-first shell against task baselines
