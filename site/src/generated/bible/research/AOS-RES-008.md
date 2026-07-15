---
id: "AOS-RES-008"
title: "GPU, Camera, Cellular, Power, and Boot Prior Art"
status: "Research-backed evidence map"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Research Lead"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "GPU, Camera, Cellular, Power, and Boot Prior Art: scope, decisions, requirements, evidence, risks, and traceability for the Agent OS programme."
---
# GPU, Camera, Cellular, Power, and Boot Prior Art

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

This document owns the semantics implied by **GPU, Camera, Cellular, Power, and Boot Prior Art**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.
<a id="normative-position"></a>

## Normative Position

1. Define ROM/firmware handoff, verified stages, measurements, anti-rollback, A/B or equivalent atomic update, recovery, and user-visible failure states.
2. Separate device keys, release keys, recovery authority, and development unlock policy.
3. Updates include kernel, services, drivers, firmware metadata, schemas, and migrations as an atomic compatibility set.
<a id="operating-model"></a>

## Operating Model

The operating model is contract-first and evidence-driven. A component declares its authority, resources, lifecycle, error model, cancellation and timeout behavior, observability, version, and compatibility promise. Backends are replaceable only when the same conformance suite passes and no forbidden platform type leaks into portable layers.

Implementation proceeds through a reference model or mock, deterministic QEMU evidence where relevant, documentation-first physical hardware, and quality-hardware evidence. Pixel 9 adapters remain quarantined according to [ADR-0004](AOS-ADR-0004.md#decision).
<a id="requirements"></a>

## Requirements

- **R01.** Define ROM/firmware handoff, verified stages, measurements, anti-rollback, A/B or equivalent atomic update, recovery, and user-visible failure states.
- **R02.** Separate device keys, release keys, recovery authority, and development unlock policy.
- **R03.** Updates include kernel, services, drivers, firmware metadata, schemas, and migrations as an atomic compatibility set.
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

- Power-cut update tests.
- Rollback/freeze attack tests.
- Reproducible recovery from corrupted slots and migrations.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, seed, timestamps, artifacts, expected result, actual result, and reviewer.
- Acceptance requires the referenced tasks to meet their own criteria; prose completion is not implementation completion.
<a id="implementation-obligations"></a>

## Implementation Obligations

No current task row references this document directly. Before implementation begins, create an owned task or explicitly mark the document as informational.
<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- A partially updated system can be unrecoverable.
- Vendor firmware rollback rules may conflict with project recovery.
- Development unlock paths can weaken production guarantees.
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

No additional task-specific anchors are required in this baseline.
