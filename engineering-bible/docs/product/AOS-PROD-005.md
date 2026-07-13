---
id: "AOS-PROD-005"
title: "Accessibility, Localization, and Input"
status: "Normative foundation"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Product Architecture"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Accessibility, Localization, and Input: scope, decisions, requirements, evidence, risks, and traceability for the Agent OS programme."
---
# Accessibility, Localization, and Input

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

This document owns the semantics implied by **Accessibility, Localization, and Input**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.
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
| AOS-PLAT-035 | Implement input service and semantic event contract | P1 | M4 | multi-device, hotplug, timestamp/order, focus isolation, secure-field and accessibility tests |
| AOS-PROD-053 | Implement notification, structured clipboard, and share services | P1 | M8 | sensitive clipboard, spoofing, expiry, background access, multi-format coercion and accessibility tests |
| AOS-PROD-070 | Implement accessibility semantics and assistive-service baseline | P0 | M8 | keyboard-only, switch-only, screen-reader and custom-view conformance with disabled/limited sensory scenarios |
| AOS-PROD-071 | Implement localization and multimodal input framework | P1 | M8 | RTL, CJK/Indic/Thai, mixed scripts, expansion, plural/case, time zones and original-retention tests |
| AOS-COMM-070 | Establish translation and accessibility contribution workflow | P2 | M8 | pilot two non-English locales and one assistive-technology contribution through release |
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

<a id="acceptance-requirements"></a>

### Acceptance Requirements

`AOS-COMM-070` — Establish translation and accessibility contribution workflow; `AOS-COMM-070` — Establish translation and accessibility contribution workflow

<a id="assistive-services"></a>

### Assistive Services

`AOS-PROD-070` — Implement accessibility semantics and assistive-service baseline; `AOS-PROD-070` — Implement accessibility semantics and assistive-service baseline

<a id="clipboard-and-selection"></a>

### Clipboard And Selection

`AOS-PROD-053` — Implement notification, structured clipboard, and share services

<a id="input-modalities"></a>

### Input Modalities

`AOS-PLAT-035` — Implement input service and semantic event contract; `AOS-PROD-071` — Implement localization and multimodal input framework; `AOS-PROD-071` — Implement localization and multimodal input framework

<a id="localization"></a>

### Localization

`AOS-PROD-071` — Implement localization and multimodal input framework; `AOS-PROD-071` — Implement localization and multimodal input framework; `AOS-COMM-070` — Establish translation and accessibility contribution workflow; `AOS-COMM-070` — Establish translation and accessibility contribution workflow

<a id="semantic-tree"></a>

### Semantic Tree

`AOS-PROD-070` — Implement accessibility semantics and assistive-service baseline; `AOS-PROD-070` — Implement accessibility semantics and assistive-service baseline
