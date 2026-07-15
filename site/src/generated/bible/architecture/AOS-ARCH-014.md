---
id: "AOS-ARCH-014"
title: "Power, Thermal, and Background Execution"
status: "Normative foundation"
version: "1.1.0"
baseline_date: "2026-07-15"
owners: "Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Power, thermal, non-blocking background execution, durable transfer, shutdown handoff, evidence, risks, and traceability for the Agent OS programme."
---

# Power, Thermal, and Background Execution

> This specification defines a native Agent OS contract. Android, Linux, Fuchsia and other systems may inform the design, but do not become ambient native ABI dependencies.

## Table of Contents

- [Purpose and Scope](#purpose-and-scope)
- [Normative Position](#normative-position)
- [Operating Model](#operating-model)
- [Optimistic Non-Blocking Interaction](#optimistic-non-blocking-interaction)
- [Durable Background Work](#durable-background-work)
- [Shutdown Handoff](#shutdown-handoff)
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
4. A long operation whose requested outcome is already understood must normally detach from the initiating surface, preserve user intent durably, and allow the user to continue immediately.
5. The initiating UI is optimistic and non-blocking when the operation is safely reversible or its pending state can be represented honestly; durable progress remains inspectable from the system status area.
<a id="operating-model"></a>

## Operating Model

The operating model is contract-first and evidence-driven. A component declares its authority, resources, lifecycle, error model, cancellation and timeout behavior, observability, version, and compatibility promise. Backends are replaceable only when the same conformance suite passes and no forbidden platform type leaks into portable layers.

Implementation proceeds through a reference model or mock, deterministic QEMU evidence where relevant, documentation-first physical hardware, and quality-hardware evidence. Pixel 9 adapters remain quarantined according to [ADR-0004](AOS-ADR-0004.md#decision).

<a id="optimistic-non-blocking-interaction"></a>

## Optimistic Non-Blocking Interaction

Operations such as saving remote media into the user's library, exporting, importing, synchronizing, indexing, transcoding, installing, backing up, uploading, or downloading must not hold the originating screen open after the system has durably accepted the request.

The default interaction is:

1. Validate that the request is structurally possible and that required authority exists.
2. Persist an operation record, its target result, dependencies, retry policy, cancellation semantics, and user-visible pending state.
3. Reflect the expected result optimistically where doing so cannot misrepresent irreversible completion. A newly requested photo may immediately appear in the library as a clearly pending item.
4. Return control to the user. The user may navigate elsewhere, start additional operations, lock the device, or initiate shutdown.
5. Expose compact aggregate progress in the status bar or status island when work is long-running. Opening it reveals per-item state, progress, estimated remaining work when meaningful, pause/resume/cancel controls, errors, and the operation receipt.

Optimistic presentation must distinguish **accepted/pending** from **committed/available**. The UI must not claim that bytes are safely stored, a payment is complete, a message is delivered, or an external side effect occurred before the corresponding commit evidence exists.

<a id="durable-background-work"></a>

## Durable Background Work

Every eligible long operation is represented as a durable, restartable job rather than as the lifetime of a screen, process, or application session.

- Job state, checkpoints, dependencies, authority, provenance, and user intent survive process crashes, suspend, reboot, and ordinary power-off.
- Independent jobs may execute concurrently within resource, thermal, battery, radio, and fairness budgets. Starting another download or library import must not require waiting for the previous one.
- Transient failures use bounded exponential backoff with jitter and typed retry classes. Retry schedules must respect user deadlines, metered-network policy, battery constraints, server guidance, and explicit permanent failures.
- Upload and download providers must use resumable transfer where the protocol permits it: range requests, chunk manifests, content hashes, multipart upload state, and verified continuation rather than restarting from zero.
- Completed chunks and partial artifacts are integrity-checked before reuse. A resumed transfer must never silently combine bytes from incompatible object versions.
- Operations continue after UI teardown and, when policy and hardware permit, after the application processor has entered a low-power or apparently-off state.
- The status surface is the canonical user-visible control plane for active and deferred work; individual applications may project the same operation records but do not privately own their lifecycle.

<a id="shutdown-handoff"></a>

## Shutdown Handoff

When shutdown is requested while eligible durable operations remain unfinished, the system must present a per-item decision rather than a single destructive global prompt. Each item offers:

1. **Finish in background.** Hand the operation to the lowest-power execution domain capable of completing it. The phone may look and behave as switched off: the display, application processor, and unnecessary radios are powered down, while the always-on power island retains the job record and may selectively power the required storage, radio, modem, or compute domain until completion. The UI must include a concise hint explaining that the device is not electrically at zero power and that completion consumes battery and may use the network.
2. **Finish after next power-on.** Checkpoint the operation, release active resources safely, and resume automatically after the next boot when its policy constraints are satisfied.
3. **Stop.** Cancel the operation according to its declared semantics, remove or retain partial data as specified, and clearly report any external effect that cannot be undone.

The chooser must support applying one decision to all compatible items while preserving per-item overrides. Safety-critical shutdown, depleted battery, thermal emergency, hardware fault, or explicit hard-power removal may override background completion; the system then checkpoints or cancels according to the safest available policy and records why.

Autonomous completion by the power island is permitted only for operation classes whose code, credentials, storage access, radio control, verification logic, and energy envelope are explicitly supported by the island contract. More complex work may be delegated to a briefly powered application processor or deferred until boot. The system must never imply that arbitrary full-OS work can run while all relevant hardware is physically unpowered.
<a id="requirements"></a>

## Requirements

- **R01.** Represent devices and workloads with explicit power dependencies, residency costs, wake sources, quality levels, and thermal budgets.
- **R02.** Background work requires declared urgency, deadline, network, energy, and user-value class.
- **R03.** Quality may degrade predictably—frame rate, model size, camera pipeline, radio use—before safety limits are crossed.
- **R04.** Specify normal, partial, denied, timeout, cancellation, restart, upgrade, and permanent-failure behavior.
- **R05.** Expose structured diagnostics without leaking secrets or vendor-specific implementation details.
- **R06.** Link material unknowns to a claim and, when testable, an experiment with an owner and gate.
- **R07.** Update affected documentation and task data when evidence changes the model.
- **R08.** Eligible long operations must detach from initiating UI, persist their target state and checkpoints, and remain inspectable and controllable through a system status surface.
- **R09.** Optimistic UI must expose pending state and must not represent external or irreversible completion before commit evidence exists.
- **R10.** Transient failures must use bounded exponential backoff with jitter; retry policy must distinguish retryable, deferred, user-action-required, and permanent failures.
- **R11.** Uploads and downloads must support verified continuation when the provider protocol permits resumable transfer.
- **R12.** Shutdown with unfinished durable jobs must offer per-item finish-in-background, resume-on-next-boot, and stop choices, subject to safety overrides.
- **R13.** The always-on power island must be capable of retaining durable job state and completing an explicitly admitted subset of long operations autonomously or by selectively waking the minimum required hardware domain.
<a id="failure-and-degradation"></a>

## Failure and Degradation

Degradation must be explicit rather than accidental. The system reports capability absence, reduced quality, unavailable provider, stale data, unsafe condition, paused transfer, exhausted retry budget, or deferred-until-boot state through typed states. It must not silently fall back to broader authority, unrestricted legacy execution, unverified firmware, lossy data migration, irreversible agent action, or an unverified restart of a partial transfer.

Recovery defines what state is retained, reconstructed, re-enrolled, compensated, or intentionally discarded. Unsupported hardware or providers are rejected at binding time where possible. When an optimistic item cannot be committed, it remains visibly failed or is compensated according to the action contract; it must not disappear without an operation receipt.
<a id="evidence-and-acceptance"></a>

## Evidence and Acceptance

- Idle residency and wake-source tracing.
- Battery-run and thermal chamber profiles.
- Budget enforcement under adversarial background workloads.
- Crash, reboot, suspend, and shutdown tests proving that accepted jobs are neither lost nor duplicated.
- Resumable upload/download tests with network loss, object-version changes, corrupt chunks, expired credentials, and storage exhaustion.
- UI tests proving that initiating surfaces remain usable, pending state is honest, and status-bar progress maps to the canonical job record.
- Per-item shutdown-handoff tests for background completion, next-boot deferral, cancellation, low-battery override, and island/application-processor responsibility transfer.
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
- Optimistic UI can mislead users unless pending and committed states remain visibly distinct.
- Retry storms can waste energy or overload providers unless backoff, jitter, budgets, and server guidance are enforced centrally.
- Finishing work while the phone appears off creates battery, privacy, RF, travel, and user-expectation risks; the shutdown hint and status history must make this behavior explicit.
- The exact subset executable entirely on the power island remains hardware-dependent and must be admitted through conformance evidence rather than product copy.
- **Open-question rule:** an unanswered high-impact question becomes a claim/experiment record and cannot be hidden in meeting notes.
- **Stop rule:** work stops or changes track when legal rights, recovery, debug access, safety, or the required evidence path is unavailable.
<a id="related-documents"></a>

## Related Documents

- [Product vision](AOS-VSN-001.md#product-thesis)
- [Portable system architecture](AOS-ARCH-001.md#system-boundary)
- [Portable device-service contracts](AOS-ARCH-020.md#contract-set)
- [Hardware portfolio](../hardware/AOS-HW-001.md#portfolio)
- [Power architecture and always-on island](../hardware/HW-019-power-architecture-standby.md#two-domain)
- [Decision gates](../planning/AOS-PLAN-006.md#decision-gates)
- [Claim register](../research/AOS-RES-003.md#claim-register)
<a id="planning-reference-anchors"></a>

## Planning Reference Anchors

<a id="background-policy"></a>

### Background Policy

Eligible long operations are durable, restartable, non-blocking, centrally observable, and governed by [Optimistic Non-Blocking Interaction](#optimistic-non-blocking-interaction), [Durable Background Work](#durable-background-work), and [Shutdown Handoff](#shutdown-handoff).

<a id="energy-budgets"></a>

### Energy Budgets

`AOS-CAM-061` — Characterize and budget camera power, memory, bandwidth, and thermal cost

<a id="measurement"></a>

### Measurement

`AOS-OPEN-023` — Characterize documented-board power and thermal behavior; `AOS-OPEN-055` — Measure and improve open-phone idle, suspend, wake, charging, and thermal behavior

<a id="power-service"></a>

### Power Service

`AOS-PLAT-041` — Implement power, thermal, battery, charging, and suspend service contracts

<a id="scheduler-energy-contract"></a>

### Scheduler Energy Contract

`AOS-CORE-022` — Implement baseline scheduler

<a id="shutdown-background-handoff"></a>

### Shutdown Background Handoff

The system must preserve per-item user choice and transfer admitted work to the always-on island or the minimum selectively powered execution domain without falsely describing the device as electrically unpowered.

<a id="suspend-resume"></a>

### Suspend Resume

`AOS-PLAT-024` — Specify device lifecycle, reset, suspend, and hotplug state machine; `AOS-PLAT-041` — Implement power, thermal, battery, charging, and suspend service contracts