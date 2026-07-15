---
id: "AOS-ARCH-008"
title: "Graphics, Compositor, and UI Runtime"
status: "Normative foundation"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Graphics, Compositor, and UI Runtime: scope, decisions, requirements, evidence, risks, and traceability for the Agent OS programme."
---
# Graphics, Compositor, and UI Runtime

> This specification defines a native Agent OS contract. Android, Linux, Fuchsia and other systems may inform the design, but do not become ambient native ABI dependencies.

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

**Area:** System Architecture.

This specification defines a native Agent OS contract. Android, Linux, Fuchsia and other systems may inform the design, but do not become ambient native ABI dependencies.

This document owns the semantics implied by **Graphics, Compositor, and UI Runtime**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.
<a id="normative-position"></a>

## Normative Position

1. Separate display scanout, GPU execution, buffer allocation, synchronization, composition, input routing, and accessibility semantics.
2. Use explicit buffer ownership and fence timelines.
3. Keep application surfaces declarative enough to support composition, inspection, history, and agent-mediated actions.
<a id="operating-model"></a>

## Operating Model

The operating model is contract-first and evidence-driven. A component declares its authority, resources, lifecycle, error model, cancellation and timeout behavior, observability, version, and compatibility promise. Backends are replaceable only when the same conformance suite passes and no forbidden platform type leaks into portable layers.

Implementation proceeds through a reference model or mock, deterministic QEMU evidence where relevant, documentation-first physical hardware, and quality-hardware evidence. Pixel 9 adapters remain quarantined according to [ADR-0004](AOS-ADR-0004.md#decision).
<a id="requirements"></a>

## Requirements

- **R01.** Separate display scanout, GPU execution, buffer allocation, synchronization, composition, input routing, and accessibility semantics.
- **R02.** Use explicit buffer ownership and fence timelines.
- **R03.** Keep application surfaces declarative enough to support composition, inspection, history, and agent-mediated actions.
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

- Software-rendered reference backend.
- Frame-timing, buffer-lifetime, and damage tests.
- Physical display/touch bring-up evidence.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, seed, timestamps, artifacts, expected result, actual result, and reviewer.
- Acceptance requires the referenced tasks to meet their own criteria; prose completion is not implementation completion.
<a id="implementation-obligations"></a>

## Implementation Obligations

| Task | Obligation | Priority | Gate/Milestone | Verification |
| --- | --- | --- | --- | --- |
| AOS-PLAT-035 | Implement input service and semantic event contract | P1 | M4 | multi-device, hotplug, timestamp/order, focus isolation, secure-field and accessibility tests |
| AOS-PLAT-037 | Implement display, buffer, and compositor backend contract | P0 | M3 | first-frame, mode change, buffer lifetime, missed deadline, driver restart, secure surface and load tests |
| AOS-PLAT-038 | Specify GPU acceleration and command-submission contract | P2 | M5 | architecture/security review and two candidate backend mapping exercises |
| AOS-PROD-050 | Implement entity-first shell skeleton | P0 | M4 | QEMU and first-board workflows, keyboard/switch/screen-reader, provider failure and large graph tests |
| AOS-PROD-052 | Implement widget and view sandbox contracts | P1 | M8 | malicious widget, overdraw/CPU/network, provider crash/update, accessibility and action-denial tests |
| AOS-PROD-070 | Implement accessibility semantics and assistive-service baseline | P0 | M8 | keyboard-only, switch-only, screen-reader and custom-view conformance with disabled/limited sensory scenarios |
| AOS-OPEN-022 | Deliver first frame and input on documented board | P0 | M3 | boot-to-frame, mode/error/restart, input latency/focus, repeated cold boots and two displays where practical |
<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- GPU firmware and command streams may remain undocumented.
- Zero-copy paths can create lifetime and confidentiality errors.
- Frame scheduling can damage power and latency.
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

<a id="display-contract"></a>

### Display Contract

`AOS-PLAT-037` — Implement display, buffer, and compositor backend contract; `AOS-PLAT-037` — Implement display, buffer, and compositor backend contract; `AOS-OPEN-022` — Deliver first frame and input on documented board

<a id="gpu-acceleration"></a>

### Gpu Acceleration

`AOS-PLAT-038` — Specify GPU acceleration and command-submission contract

<a id="input-service"></a>

### Input Service

`AOS-PLAT-035` — Implement input service and semantic event contract

<a id="sandboxed-views"></a>

### Sandboxed Views

`AOS-PROD-052` — Implement widget and view sandbox contracts

<a id="scene-and-semantics"></a>

### Scene And Semantics

`AOS-PLAT-037` — Implement display, buffer, and compositor backend contract; `AOS-PLAT-037` — Implement display, buffer, and compositor backend contract; `AOS-PROD-050` — Implement entity-first shell skeleton; `AOS-PROD-070` — Implement accessibility semantics and assistive-service baseline
