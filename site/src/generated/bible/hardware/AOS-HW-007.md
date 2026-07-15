---
id: "AOS-HW-007"
title: "Cellular and Telephony Program"
status: "Normative foundation"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Hardware Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Cellular and Telephony Program: scope, decisions, requirements, evidence, risks, and traceability for the Agent OS programme."
---
# Cellular and Telephony Program

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

This document owns the semantics implied by **Cellular and Telephony Program**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.
<a id="normative-position"></a>

## Normative Position

1. Separate modem transport, SIM/eSIM, registration, packet data, SMS, emergency behavior, IMS, audio routing, policy, diagnostics, and certification.
2. Prefer externally connected documented modems for early native contracts.
3. Do not infer voice support from packet-data support.
<a id="operating-model"></a>

## Operating Model

The operating model is contract-first and evidence-driven. A component declares its authority, resources, lifecycle, error model, cancellation and timeout behavior, observability, version, and compatibility promise. Backends are replaceable only when the same conformance suite passes and no forbidden platform type leaks into portable layers.

Implementation proceeds through a reference model or mock, deterministic QEMU evidence where relevant, documentation-first physical hardware, and quality-hardware evidence. Pixel 9 adapters remain quarantined according to [ADR-0004](AOS-ADR-0004.md#decision).
<a id="requirements"></a>

## Requirements

- **R01.** Separate modem transport, SIM/eSIM, registration, packet data, SMS, emergency behavior, IMS, audio routing, policy, diagnostics, and certification.
- **R02.** Prefer externally connected documented modems for early native contracts.
- **R03.** Do not infer voice support from packet-data support.
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

- State-machine trace replay.
- Data/SMS/voice tests by operator and region.
- Certification and partner evidence before “phone” claims.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, seed, timestamps, artifacts, expected result, actual result, and reviewer.
- Acceptance requires the referenced tasks to meet their own criteria; prose completion is not implementation completion.
<a id="implementation-obligations"></a>

## Implementation Obligations

| Task | Obligation | Priority | Gate/Milestone | Verification |
| --- | --- | --- | --- | --- |
| AOS-PLAT-036 | Implement audio service and graph contract | P1 | M4 | latency/drift/glitch, route changes, device removal, permission, suspend and crash tests |
| AOS-PLAT-040 | Specify portable cellular and telephony service contracts | P1 | M5 | map MBIM/QMI/module/data/SMS and unresolved IMS paths without claiming unsupported functions |
| AOS-OPEN-057 | Integrate open-phone modem hardware with native cellular service | P1 | M6 | registration/data/SMS tasks, modem crash/replug/reset, suspend and capability isolation |
| AOS-CELL-000 | Cellular and Telephony Program epic | P1 | Continuous | monthly project review and gate reconciliation |
| AOS-CELL-001 | Define cellular capability decomposition and product claims | P0 | M3 | review against 3GPP/GSMA/Android decomposition and open module cases without importing their APIs |
| AOS-CELL-002 | Shortlist documented cellular modules and evaluation kits | P0 | M3 | official-source/vendor-response review and sample availability/pricing check |
| AOS-CELL-003 | Commission lawful cellular test environment | P1 | M4 | controlled registration/data/SMS test and emergency-path tabletop with counsel/lab guidance |
| AOS-CELL-010 | Implement native USB/serial/AT modem transport | P0 | M5 | malformed/partial/unsolicited/timeout/reset/replug/driver-crash and command-injection tests |
| AOS-CELL-020 | Implement native MBIM/QMI transport and control proof | P0 | M5 | EXP-041 connect/register/session/status/reset/invalid-message scenarios and forbidden-dependency scan |
| AOS-CELL-021 | Implement modem registration and lifecycle state machine | P0 | M6 | SIM absent/locked, denied/roaming, coverage loss, modem crash/reset, suspend, firmware mismatch and rapid toggling |
| AOS-CELL-022 | Implement physical SIM access and secret boundary | P0 | M5 | wrong PIN/PUK, brute-force/rate, process crash, removal, secure-input/journal and unauthorized APDU tests |
| AOS-CELL-030 | Deliver native cellular data and SMS prototype | P0 | M6 | EXP-042 registration/data/DNS/large transfer/SMS send-receive/duplicate/loss/reset/roaming policy cases |
| AOS-CELL-031 | Harden cellular recovery, suspend, roaming, and power behavior | P1 | M8 | hours-long coverage/modem/suspend/roaming/data-limit fault campaign with power measurement |
| AOS-CELL-040 | Model and evaluate eSIM lifecycle and partner requirements | P1 | M9 | EXP-043 tabletop and available evaluation path; lost device, transfer, rollback and malicious profile scenarios |
| AOS-CELL-041 | Integrate modem-assisted GNSS where supportable | P3 | M8 | known-location/time comparison, cold/warm start, denial/background, no-network and suspend tests |
| AOS-CELL-042 | Define emergency-calling safety boundary before voice work | P0 | M9 | tabletop and accredited/operator consultation without live unauthorized emergency calls |
| AOS-CELL-050 | Establish native voice and IMS feasibility | P0 | M9 | EXP-044 with written partner evidence and lawful lab/test-network demonstration where available |
| AOS-CELL-051 | Implement telephony audio-routing contract and test path | P1 | M9 | route changes, mute/privacy, echo/latency, device loss, suspend, call interruption and failure tests |

The canonical task CSV contains 5 additional linked tasks.
<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- IMS and emergency calling are vendor-, operator-, region-, and certification-dependent.
- Baseband firmware remains a separate high-risk computing domain.
- RF and legal certification costs dominate late hardware changes.
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

<a id="audio-routing"></a>

### Audio Routing

`AOS-PLAT-036` — Implement audio service and graph contract; `AOS-CELL-051` — Implement telephony audio-routing contract and test path

<a id="certification-consequences"></a>

### Certification Consequences

`AOS-CELL-052` — Build cellular certification and carrier engagement plan

<a id="data-and-sms"></a>

### Data And Sms

`AOS-CELL-030` — Deliver native cellular data and SMS prototype

<a id="emergency-calling"></a>

### Emergency Calling

`AOS-CELL-042` — Define emergency-calling safety boundary before voice work

<a id="gnss"></a>

### Gnss

`AOS-CELL-041` — Integrate modem-assisted GNSS where supportable

<a id="modem-state-machine"></a>

### Modem State Machine

`AOS-CELL-021` — Implement modem registration and lifecycle state machine

<a id="module-selection"></a>

### Module Selection

`AOS-CELL-002` — Shortlist documented cellular modules and evaluation kits; `AOS-CELL-060` — Secure cellular module vendor and FAE relationships; `AOS-ODM-024` — Define production cellular/RF module and antenna architecture

<a id="native-cellular-stack"></a>

### Native Cellular Stack

`AOS-OPEN-057` — Integrate open-phone modem hardware with native cellular service; `AOS-CELL-010` — Implement native USB/serial/AT modem transport; `AOS-CELL-020` — Implement native MBIM/QMI transport and control proof

<a id="product-claim-levels"></a>

### Product Claim Levels

`AOS-CELL-080` — Decide connected-device versus full-phone product route

<a id="reliability-and-power"></a>

### Reliability And Power

`AOS-CELL-031` — Harden cellular recovery, suspend, roaming, and power behavior

<a id="separate-capability-gates"></a>

### Separate Capability Gates

`AOS-PLAT-040` — Specify portable cellular and telephony service contracts; `AOS-CELL-000` — Cellular and Telephony Program epic; `AOS-CELL-001` — Define cellular capability decomposition and product claims; `AOS-P9-095` — Test Pixel 9 modem isolation and native service boundary feasibility

<a id="sim-and-esim"></a>

### Sim And Esim

`AOS-CELL-022` — Implement physical SIM access and secret boundary; `AOS-CELL-040` — Model and evaluate eSIM lifecycle and partner requirements

<a id="test-environment"></a>

### Test Environment

`AOS-CELL-003` — Commission lawful cellular test environment

<a id="voice-and-ims"></a>

### Voice And Ims

`AOS-CELL-050` — Establish native voice and IMS feasibility
