---
id: "AOS-ARCH-003"
title: "Process, Memory, and Scheduling Model"
status: "Normative foundation"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Process, Memory, and Scheduling Model: scope, decisions, requirements, evidence, risks, and traceability for the Agent OS programme."
---
# Process, Memory, and Scheduling Model

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

This document owns the semantics implied by **Process, Memory, and Scheduling Model**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.
<a id="normative-position"></a>

## Normative Position

1. Separate process identity, address space, execution context, scheduling context, and resource budget.
2. Define deterministic failure for allocation, mapping, guard-page, copy, and invalid-access operations.
3. Start with a measured SMP scheduler baseline before heterogeneous or distributed scheduling.
<a id="operating-model"></a>

## Operating Model

The operating model is contract-first and evidence-driven. A component declares its authority, resources, lifecycle, error model, cancellation and timeout behavior, observability, version, and compatibility promise. Backends are replaceable only when the same conformance suite passes and no forbidden platform type leaks into portable layers.

Implementation proceeds through a reference model or mock, deterministic QEMU evidence where relevant, documentation-first physical hardware, and quality-hardware evidence. Pixel 9 adapters remain quarantined according to [ADR-0004](AOS-ADR-0004.md#decision).
<a id="requirements"></a>

## Requirements

- **R01.** Separate process identity, address space, execution context, scheduling context, and resource budget.
- **R02.** Define deterministic failure for allocation, mapping, guard-page, copy, and invalid-access operations.
- **R03.** Start with a measured SMP scheduler baseline before heterogeneous or distributed scheduling.
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

- Isolation fault injection.
- Scheduler trace corpus and latency distributions.
- Memory-accounting invariants under pressure.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, seed, timestamps, artifacts, expected result, actual result, and reviewer.
- Acceptance requires the referenced tasks to meet their own criteria; prose completion is not implementation completion.
<a id="implementation-obligations"></a>

## Implementation Obligations

| Task | Obligation | Priority | Gate/Milestone | Verification |
| --- | --- | --- | --- | --- |
| AOS-CORE-013 | Implement physical memory manager | P0 | M1 | property tests, exhaustion, overlap, fragmentation and malformed-map tests |
| AOS-CORE-014 | Implement virtual address spaces and mappings | P0 | M1 | randomized mapping model comparison and permission/fault tests on both QEMU targets |
| AOS-CORE-015 | Enter user mode and launch initial process | P0 | M1 | launch valid/invalid images, fault user code, and inspect isolation/crash artifacts |
| AOS-CORE-016 | Implement exceptions, interrupts, timers, and CPU-local state | P0 | M1 | inject each exception/IRQ class, timer wrap/bounds, nested/disabled states and malformed returns |
| AOS-CORE-018 | Implement process and thread lifecycle | P0 | M2 | state-machine tests, concurrent kill/wait, crash storms, orphan/reaping and quota tests |
| AOS-CORE-020 | Prove user-process isolation and fault containment | P0 | M1 | EXP-003 across both QEMU architectures |
| AOS-CORE-021 | Implement monotonic time, deadlines, and timer objects | P1 | M2 | ordering, cancellation races, overflow, suspend adjustment contract and load tests |
| AOS-CORE-022 | Implement baseline scheduler | P0 | M2 | deterministic model tests plus fairness, starvation, latency and overload workloads |
| AOS-CORE-023 | Implement synchronization primitives and futex-like wait | P0 | M2 | race model, lost-wakeup, ABA/address reuse, timeout, process exit and contention tests |
| AOS-CORE-034 | Implement jobs, quotas, and resource accounting | P0 | M2 | exhaust each resource, nested domains, concurrent charge/release, process death and accounting reconciliation |
| AOS-CORE-035 | Enable symmetric multiprocessing and cross-CPU coordination | P1 | M3 | multicore stress, randomized scheduling, TLB/mapping races, CPU offline/failure injection |
| AOS-CORE-036 | Validate IPC priority propagation and deadline behavior | P1 | M2 | EXP-005 across nested calls, cancellation, overload and malicious servers |
<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- Unbounded kernel allocation and priority inheritance create denial-of-service paths.
- DMA and shared-memory mappings can bypass process isolation.
- Power-aware scheduling can conflict with latency guarantees.
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

<a id="address-spaces"></a>

### Address Spaces

`AOS-CORE-014` — Implement virtual address spaces and mappings; `AOS-CORE-035` — Enable symmetric multiprocessing and cross-CPU coordination; `AOS-CORE-035` — Enable symmetric multiprocessing and cross-CPU coordination

<a id="aos-model"></a>

### Aos Model

`AOS-CORE-035` — Enable symmetric multiprocessing and cross-CPU coordination; `AOS-CORE-035` — Enable symmetric multiprocessing and cross-CPU coordination

<a id="exceptions-and-interrupts"></a>

### Exceptions And Interrupts

`AOS-CORE-016` — Implement exceptions, interrupts, timers, and CPU-local state; `AOS-CORE-016` — Implement exceptions, interrupts, timers, and CPU-local state

<a id="fault-containment"></a>

### Fault Containment

`AOS-CORE-020` — Prove user-process isolation and fault containment

<a id="physical-memory"></a>

### Physical Memory

`AOS-CORE-013` — Implement physical memory manager

<a id="priority-inversion"></a>

### Priority Inversion

`AOS-CORE-023` — Implement synchronization primitives and futex-like wait; `AOS-CORE-023` — Implement synchronization primitives and futex-like wait; `AOS-CORE-036` — Validate IPC priority propagation and deadline behavior

<a id="process-model"></a>

### Process Model

`AOS-CORE-015` — Enter user mode and launch initial process; `AOS-CORE-018` — Implement process and thread lifecycle; `AOS-CORE-018` — Implement process and thread lifecycle

<a id="resource-accounting"></a>

### Resource Accounting

`AOS-CORE-034` — Implement jobs, quotas, and resource accounting

<a id="scheduler"></a>

### Scheduler

`AOS-CORE-022` — Implement baseline scheduler

<a id="synchronization"></a>

### Synchronization

`AOS-CORE-023` — Implement synchronization primitives and futex-like wait; `AOS-CORE-023` — Implement synchronization primitives and futex-like wait

<a id="thread-model"></a>

### Thread Model

`AOS-CORE-018` — Implement process and thread lifecycle; `AOS-CORE-018` — Implement process and thread lifecycle

<a id="time"></a>

### Time

`AOS-CORE-016` — Implement exceptions, interrupts, timers, and CPU-local state; `AOS-CORE-016` — Implement exceptions, interrupts, timers, and CPU-local state; `AOS-CORE-021` — Implement monotonic time, deadlines, and timer objects
