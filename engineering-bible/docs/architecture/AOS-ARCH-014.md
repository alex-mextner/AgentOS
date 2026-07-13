---
id: "AOS-ARCH-014"
title: "Power, Thermal, and Background Execution"
status: "Normative foundation"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Power, Thermal, and Background Execution: scope, decisions, requirements, evidence, risks, and traceability for the Agent OS programme."
---
# Power, Thermal, and Background Execution

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

This document owns the semantics implied by **Power, Thermal, and Background Execution**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.
<a id="normative-position"></a>

## Normative Position

1. Represent devices and workloads with explicit power dependencies, residency costs, wake sources, quality levels, and thermal budgets.
2. Background work requires declared urgency, deadline, network, energy, and user-value class.
3. Quality may degrade predictably—frame rate, model size, camera pipeline, radio use—before safety limits are crossed.
<a id="operating-model"></a>

## Operating Model

The operating model is contract-first and evidence-driven. A component declares its authority, resources, lifecycle, error model, cancellation and timeout behavior, observability, version, and compatibility promise. Backends are replaceable only when the same conformance suite passes and no forbidden platform type leaks into portable layers.

Implementation proceeds through a reference model or mock, deterministic QEMU evidence where relevant, documentation-first physical hardware, and quality-hardware evidence. Pixel 9 adapters remain quarantined according to [ADR-0004](AOS-ADR-0004.md#decision).
<a id="requirements"></a>

## Requirements

- **R01.** Represent devices and workloads with explicit power dependencies, residency costs, wake sources, quality levels, and thermal budgets.
- **R02.** Background work requires declared urgency, deadline, network, energy, and user-value class.
- **R03.** Quality may degrade predictably—frame rate, model size, camera pipeline, radio use—before safety limits are crossed.
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

- Idle residency and wake-source tracing.
- Battery-run and thermal chamber profiles.
- Budget enforcement under adversarial background workloads.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, seed, timestamps, artifacts, expected result, actual result, and reviewer.
- Acceptance requires the referenced tasks to meet their own criteria; prose completion is not implementation completion.
<a id="implementation-obligations"></a>

## Implementation Obligations

| Task | Obligation | Priority | Gate/Milestone | Verification |
| --- | --- | --- | --- | --- |
| AOS-CORE-022 | Implement baseline scheduler | P0 | M2 | deterministic model tests plus fairness, starvation, latency and overload workloads |
| AOS-PLAT-024 | Specify device lifecycle, reset, suspend, and hotplug state machine | P0 | M3 | model-check lifecycle sequences and run reset/suspend/removal fault injection |
| AOS-PLAT-041 | Implement power, thermal, battery, charging, and suspend service contracts | P0 | M4 | failed suspend participant, wake storm, thermal trip, charger removal, low battery and budget-enforcement tests |
| AOS-OPEN-023 | Characterize documented-board power and thermal behavior | P1 | M4 | controlled workloads, repeated ambient conditions, peripheral on/off, failed suspend participant and thermal trip tests |
| AOS-OPEN-055 | Measure and improve open-phone idle, suspend, wake, charging, and thermal behavior | P0 | M6 | EXP-023 repeated cycles, network/modem/display states, charger variants, low battery, wake storms and thermal limits |
| AOS-CAM-061 | Characterize and budget camera power, memory, bandwidth, and thermal cost | P1 | M9 | long-run and burst workloads at controlled ambient/battery states on reference/open hardware |
| AOS-CELL-031 | Harden cellular recovery, suspend, roaming, and power behavior | P1 | M8 | hours-long coverage/modem/suspend/roaming/data-limit fault campaign with power measurement |
<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- Undocumented PMIC and firmware sequencing can damage reliability.
- Background agents can create persistent wakeups.
- Thermal throttling can invalidate performance claims.
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

<a id="background-policy"></a>

### Background Policy

`AOS-CELL-031` — Harden cellular recovery, suspend, roaming, and power behavior

<a id="energy-budgets"></a>

### Energy Budgets

`AOS-CAM-061` — Characterize and budget camera power, memory, bandwidth, and thermal cost

<a id="measurement"></a>

### Measurement

`AOS-OPEN-023` — Characterize documented-board power and thermal behavior; `AOS-OPEN-055` — Measure and improve open-phone idle, suspend, wake, charging, and thermal behavior

<a id="power-service"></a>

### Power Service

`AOS-PLAT-041` — Implement power, thermal, battery, charging, and suspend service contracts; `AOS-PLAT-041` — Implement power, thermal, battery, charging, and suspend service contracts

<a id="scheduler-energy-contract"></a>

### Scheduler Energy Contract

`AOS-CORE-022` — Implement baseline scheduler

<a id="suspend-resume"></a>

### Suspend Resume

`AOS-PLAT-024` — Specify device lifecycle, reset, suspend, and hotplug state machine; `AOS-PLAT-041` — Implement power, thermal, battery, charging, and suspend service contracts; `AOS-PLAT-041` — Implement power, thermal, battery, charging, and suspend service contracts
