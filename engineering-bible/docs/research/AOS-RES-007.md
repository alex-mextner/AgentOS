---
id: "AOS-RES-007"
title: "Microkernel and Portability Prior-Art Synthesis"
status: "Research-backed evidence map"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Research Lead"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Microkernel and Portability Prior-Art Synthesis: scope, decisions, requirements, evidence, risks, and traceability for the Agent OS programme."
---
# Microkernel and Portability Prior-Art Synthesis

> This document distinguishes sources, observations, inferences, hypotheses, experiments, and normative decisions so that research cannot silently harden into architecture.

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

**Area:** Research and Evidence.

This document distinguishes sources, observations, inferences, hypotheses, experiments, and normative decisions so that research cannot silently harden into architecture.

This document owns the semantics implied by **Microkernel and Portability Prior-Art Synthesis**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.
<a id="normative-position"></a>

## Normative Position

1. Keep the kernel limited to address spaces, threads, scheduling mechanisms, capability/object enforcement, IPC, interrupts, clocks, and minimal evidence hooks.
2. Place drivers, filesystems, networking, graphics, compatibility, package management, product state, and agents in isolated user space.
3. Implement architecture ports behind explicit trap, MMU, interrupt-controller, timer, atomic, and context-switch interfaces.
<a id="operating-model"></a>

## Operating Model

The operating model is contract-first and evidence-driven. A component declares its authority, resources, lifecycle, error model, cancellation and timeout behavior, observability, version, and compatibility promise. Backends are replaceable only when the same conformance suite passes and no forbidden platform type leaks into portable layers.

Implementation proceeds through a reference model or mock, deterministic QEMU evidence where relevant, documentation-first physical hardware, and quality-hardware evidence. Pixel 9 adapters remain quarantined according to [ADR-0004](AOS-ADR-0004.md#decision).
<a id="requirements"></a>

## Requirements

- **R01.** Keep the kernel limited to address spaces, threads, scheduling mechanisms, capability/object enforcement, IPC, interrupts, clocks, and minimal evidence hooks.
- **R02.** Place drivers, filesystems, networking, graphics, compatibility, package management, product state, and agents in isolated user space.
- **R03.** Implement architecture ports behind explicit trap, MMU, interrupt-controller, timer, atomic, and context-switch interfaces.
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

- Deterministic QEMU boot and reproducible build evidence.
- Fault-containment and capability property tests.
- A second architecture or SoC port without semantic forks.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, seed, timestamps, artifacts, expected result, actual result, and reviewer.
- Acceptance requires the referenced tasks to meet their own criteria; prose completion is not implementation completion.
<a id="implementation-obligations"></a>

## Implementation Obligations

| Task | Obligation | Priority | Gate/Milestone | Verification |
| --- | --- | --- | --- | --- |
| AOS-OPEN-093 | Produce the VIM3/A311D reference dossier | P1 | M1 | Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria. |
<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- Kernel scope creep expands the trusted computing base and verification cost.
- Unsafe Rust and assembly can invalidate language-level safety assumptions.
- Untested revocation, priority propagation, or DMA authority can break isolation.
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

<a id="dimensions"></a>

### Dimensions

`AOS-OPEN-093` — Produce the VIM3/A311D reference dossier
