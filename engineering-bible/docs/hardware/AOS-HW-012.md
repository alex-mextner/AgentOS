---
id: "AOS-HW-012"
title: "Camera Hardware Options and Quality Path"
status: "Normative foundation"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Hardware Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Camera Hardware Options and Quality Path: scope, decisions, requirements, evidence, risks, and traceability for the Agent OS programme."
---
# Camera Hardware Options and Quality Path

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

This document owns the semantics implied by **Camera Hardware Options and Quality Path**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.
<a id="normative-position"></a>

## Normative Position

1. Treat camera as sensor mode control, capture, calibration, ISP, 3A, metadata, temporal pipeline, computational photography, encoding, latency, power, and quality assurance.
2. Build a portable camera service and multiple backends: UVC/reference, documented ISP, and Pixel evidence adapter.
3. Store tuning and calibration as versioned, device-specific assets with provenance.
<a id="operating-model"></a>

## Operating Model

The operating model is contract-first and evidence-driven. A component declares its authority, resources, lifecycle, error model, cancellation and timeout behavior, observability, version, and compatibility promise. Backends are replaceable only when the same conformance suite passes and no forbidden platform type leaks into portable layers.

Implementation proceeds through a reference model or mock, deterministic QEMU evidence where relevant, documentation-first physical hardware, and quality-hardware evidence. Pixel 9 adapters remain quarantined according to [ADR-0004](AOS-ADR-0004.md#decision).
<a id="requirements"></a>

## Requirements

- **R01.** Treat camera as sensor mode control, capture, calibration, ISP, 3A, metadata, temporal pipeline, computational photography, encoding, latency, power, and quality assurance.
- **R02.** Build a portable camera service and multiple backends: UVC/reference, documented ISP, and Pixel evidence adapter.
- **R03.** Store tuning and calibration as versioned, device-specific assets with provenance.
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

- Controlled scene corpus with RAW and processed outputs.
- Objective metrics plus blinded expert review.
- Latency, thermal, video, stabilization, autofocus, exposure and low-light tests.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, seed, timestamps, artifacts, expected result, actual result, and reviewer.
- Acceptance requires the referenced tasks to meet their own criteria; prose completion is not implementation completion.
<a id="implementation-obligations"></a>

## Implementation Obligations

| Task | Obligation | Priority | Gate/Milestone | Verification |
| --- | --- | --- | --- | --- |
| AOS-OPEN-091 | Produce the NXP i.MX 8M Plus target and camera dossier | P1 | M1 | Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria. |
| AOS-CAM-090 | Build a lawful Pixel-class camera quality oracle corpus | P0 | M1 | Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria. |
| AOS-CAM-091 | Bring up a documented i.MX 8M Plus RAW and metadata bench | P0 | M5 | Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria. |
| AOS-CAM-092 | Specify portable 3A, calibration, and capture-result contracts | P0 | M2 | Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria. |
| AOS-CAM-093 | Establish a calibrated camera quality measurement laboratory | P1 | M5 | Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria. |
| AOS-CAM-094 | Evaluate industrial and UVC camera modules as compromise reducers | P1 | M5 | Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria. |
| AOS-P9-094 | Test Pixel 9 camera control and quality replacement feasibility | P0 | M7 | Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria. |
<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- A published algorithm is not a production camera stack.
- Sensor/ISP documentation and calibration access may be contract-restricted.
- Image quality can regress while functional tests still pass.
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

<a id="portable-pipeline"></a>

### Portable Pipeline

`AOS-CAM-092` — Specify portable 3A, calibration, and capture-result contracts

<a id="quality-model"></a>

### Quality Model

`AOS-CAM-093` — Establish a calibrated camera quality measurement laboratory

<a id="tracks"></a>

### Tracks

`AOS-OPEN-091` — Produce the NXP i.MX 8M Plus target and camera dossier; `AOS-CAM-090` — Build a lawful Pixel-class camera quality oracle corpus; `AOS-CAM-091` — Bring up a documented i.MX 8M Plus RAW and metadata bench; `AOS-CAM-094` — Evaluate industrial and UVC camera modules as compromise reducers; `AOS-P9-094` — Test Pixel 9 camera control and quality replacement feasibility
