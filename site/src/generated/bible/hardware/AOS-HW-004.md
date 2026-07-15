---
id: "AOS-HW-004"
title: "Documented Development-Board Track"
status: "Normative foundation"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Hardware Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Documented Development-Board Track: scope, decisions, requirements, evidence, risks, and traceability for the Agent OS programme."
---
# Documented Development-Board Track

> This specification treats hardware support as an evidence programme with explicit documentation rights, recovery paths, quality gates, and replacement strategies.

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

**Area:** Hardware Programme.

This specification treats hardware support as an evidence programme with explicit documentation rights, recovery paths, quality gates, and replacement strategies.

This document owns the semantics implied by **Documented Development-Board Track**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.
<a id="normative-position"></a>

## Normative Position

1. Score candidates separately for documentation, redistributable firmware, recovery, debug, IOMMU, display, camera, modem isolation, power control, longevity, unit availability, and vendor responsiveness.
2. Run QEMU, documentation-first boards, open phone form factor, semi-open quality, Pixel 9, camera laboratory, and future custom-device tracks in parallel.
3. A candidate is purchased only after SKU and documentation gates pass.
<a id="operating-model"></a>

## Operating Model

The operating model is contract-first and evidence-driven. A component declares its authority, resources, lifecycle, error model, cancellation and timeout behavior, observability, version, and compatibility promise. Backends are replaceable only when the same conformance suite passes and no forbidden platform type leaks into portable layers.

Implementation proceeds through a reference model or mock, deterministic QEMU evidence where relevant, documentation-first physical hardware, and quality-hardware evidence. Pixel 9 adapters remain quarantined according to [ADR-0004](AOS-ADR-0004.md#decision).
<a id="requirements"></a>

## Requirements

- **R01.** Score candidates separately for documentation, redistributable firmware, recovery, debug, IOMMU, display, camera, modem isolation, power control, longevity, unit availability, and vendor responsiveness.
- **R02.** Run QEMU, documentation-first boards, open phone form factor, semi-open quality, Pixel 9, camera laboratory, and future custom-device tracks in parallel.
- **R03.** A candidate is purchased only after SKU and documentation gates pass.
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

- Completed target dossier.
- Reproducible recovery and first-boot evidence.
- Second-vendor portability result.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, seed, timestamps, artifacts, expected result, actual result, and reviewer.
- Acceptance requires the referenced tasks to meet their own criteria; prose completion is not implementation completion.
<a id="implementation-obligations"></a>

## Implementation Obligations

| Task | Obligation | Priority | Gate/Milestone | Verification |
| --- | --- | --- | --- | --- |
| AOS-PLAT-020 | Specify board package and hardware resource contract | P0 | M3 | represent two unrelated targets and reject conflicting/overlapping resources |
| AOS-PLAT-034 | Implement USB host/device service baseline | P1 | M4 | malformed descriptors, hotplug storms, reset, driver crash, DMA ownership and real devices on documented board |
| AOS-OPEN-020 | Bring up Agent OS on BeaglePlay/AM625 | P0 | M3 | EXP-014 on two specimens from power-off and after failed images |
| AOS-OPEN-021 | Enable BeaglePlay storage, USB, and network services | P0 | M3 | cold boot, I/O stress, cable/device loss, driver crash, update/recovery and cross-target conformance |
| AOS-OPEN-022 | Deliver first frame and input on documented board | P0 | M3 | boot-to-frame, mode/error/restart, input latency/focus, repeated cold boots and two displays where practical |
| AOS-OPEN-023 | Characterize documented-board power and thermal behavior | P1 | M4 | controlled workloads, repeated ambient conditions, peripheral on/off, failed suspend participant and thermal trip tests |
| AOS-OPEN-030 | Port Agent OS to a second documented SoC family | P0 | M5 | EXP-015 and source/config comparison with QEMU/AM625 |
| AOS-OPEN-031 | Evaluate and bring up BeagleY-AI/AM67A vision target | P1 | M5 | repeat boot, public-source/document audit, camera-path experiment and cross-target service tests |
| AOS-OPEN-032 | Evaluate and bring up NXP i.MX 8M Plus target | P2 | M5 | official-source review, vendor contact, native boot/camera feasibility and scorecard update |
| AOS-OPEN-090 | Produce the BeagleY-AI and AM67A target dossier | P1 | M1 | Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria. |
<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- “Open source” may cover only kernel sources, not datasheets, firmware, ISP or secure boot.
- Consumer boards can disappear or revise silently.
- A strong SoC without recovery/debug access is a weak research target.
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

<a id="beagleplay-track"></a>

### Beagleplay Track

`AOS-OPEN-020` — Bring up Agent OS on BeaglePlay/AM625; `AOS-OPEN-020` — Bring up Agent OS on BeaglePlay/AM625; `AOS-OPEN-021` — Enable BeaglePlay storage, USB, and network services

<a id="camera-capable-boards"></a>

### Camera Capable Boards

`AOS-OPEN-031` — Evaluate and bring up BeagleY-AI/AM67A vision target; `AOS-OPEN-032` — Evaluate and bring up NXP i.MX 8M Plus target

<a id="display-path"></a>

### Display Path

`AOS-OPEN-022` — Deliver first frame and input on documented board

<a id="documentation-audit"></a>

### Documentation Audit

`AOS-OPEN-090` — Produce the BeagleY-AI and AM67A target dossier

<a id="porting-sequence"></a>

### Porting Sequence

`AOS-PLAT-020` — Specify board package and hardware resource contract; `AOS-OPEN-020` — Bring up Agent OS on BeaglePlay/AM625; `AOS-OPEN-020` — Bring up Agent OS on BeaglePlay/AM625

<a id="power-and-thermal"></a>

### Power And Thermal

`AOS-OPEN-023` — Characterize documented-board power and thermal behavior

<a id="second-soc-track"></a>

### Second Soc Track

`AOS-OPEN-030` — Port Agent OS to a second documented SoC family

<a id="usb-first"></a>

### Usb First

`AOS-PLAT-034` — Implement USB host/device service baseline
