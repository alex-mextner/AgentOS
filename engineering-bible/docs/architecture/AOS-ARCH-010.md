---
id: "AOS-ARCH-010"
title: "Agent Runtime and Action Safety"
status: "Normative foundation"
version: "1.0.0-foundation"
baseline_date: "2026-07-13"
owners: "Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Agent Runtime and Action Safety: scope, decisions, requirements, evidence, risks, and traceability for the Agent OS programme."
---
# Agent Runtime and Action Safety

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

This document owns the semantics implied by **Agent Runtime and Action Safety**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.
<a id="normative-position"></a>

## Normative Position

1. Agents operate through typed action providers and explicit capability grants, never ambient UI control.
2. Trust tiers progress from observation to proposal, reversible execution, confirmed sensitive execution, and bounded autonomy.
3. Every effect records planner, model, inputs, authority, cost, destination, result, and compensation or irreversibility.
<a id="operating-model"></a>

## Operating Model

The operating model is contract-first and evidence-driven. A component declares its authority, resources, lifecycle, error model, cancellation and timeout behavior, observability, version, and compatibility promise. Backends are replaceable only when the same conformance suite passes and no forbidden platform type leaks into portable layers.

Implementation proceeds through a reference model or mock, deterministic QEMU evidence where relevant, documentation-first physical hardware, and quality-hardware evidence. Pixel 9 adapters remain quarantined according to [ADR-0004](AOS-ADR-0004.md#decision).
<a id="requirements"></a>

## Requirements

- **R01.** Agents operate through typed action providers and explicit capability grants, never ambient UI control.
- **R02.** Trust tiers progress from observation to proposal, reversible execution, confirmed sensitive execution, and bounded autonomy.
- **R03.** Every effect records planner, model, inputs, authority, cost, destination, result, and compensation or irreversibility.
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

- Privilege-amplification property tests.
- Shadow-mode comparison with user behavior.
- Adversarial destination, budget, confirmation, and rollback tests.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, seed, timestamps, artifacts, expected result, actual result, and reviewer.
- Acceptance requires the referenced tasks to meet their own criteria; prose completion is not implementation completion.
<a id="implementation-obligations"></a>

## Implementation Obligations

| Task | Obligation | Priority | Gate/Milestone | Verification |
| --- | --- | --- | --- | --- |
| AOS-CORE-034 | Implement jobs, quotas, and resource accounting | P0 | M2 | exhaust each resource, nested domains, concurrent charge/release, process death and accounting reconciliation |
| AOS-PROD-010 | Define portable action schema and effect taxonomy | P0 | M2 | model ten local/external/system actions and adversarial/missing-provider cases |
| AOS-PROD-012 | Implement action executor, receipts, and compensation | P0 | M4 | duplicate, timeout, crash, cancellation, partial external effect, malicious result and compensation tests |
| AOS-PROD-013 | Implement provider selection and routing policy | P1 | M4 | account/recipient/destination/cost/privacy ambiguity, outage and malicious-ranking tests |
| AOS-PROD-051 | Implement IntentBox draft and confirmation flow | P1 | M8 | ambiguous recipient/account/amount/destination and inaccessible/offline provider tests |
| AOS-PROD-090 | Evaluate IntentBox interpretation and confirmation safety | P0 | M8 | EXP-071 including time pressure, accessibility needs and adversarial provider labels |
| AOS-PROD-100 | Implement and evaluate agent shadow mode | P1 | M8 | EXP-073 across local/external/sensitive workflows and withheld adversarial cases |
| AOS-PROD-101 | Implement agent budgets, approval, receipts, and bounded autonomy | P1 | M9 | malicious/looping/costly/data-exfiltrating agent, revocation, offline and provider-compromise tests |
| AOS-SEC-070 | Red-team agent capability, data, budget, and effect containment | P0 | M8 | EXP-074 with hidden cases and compromised provider/agent scenarios |
| AOS-SEC-112 | Evaluate agent shadow mode and dangerous false-action rates | P0 | M8 | Run the relevant document, schema, conformance, build, experiment, or hardware checks; independently review boundary compliance and acceptance criteria. |
<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- Prompt injection can redirect authority.
- Provider descriptions can misstate external effects.
- Receipts without enforcement become cosmetic audit logs.
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

<a id="action-lifecycle"></a>

### Action Lifecycle

`AOS-PROD-010` — Define portable action schema and effect taxonomy; `AOS-PROD-012` — Implement action executor, receipts, and compensation

<a id="agent-budgets"></a>

### Agent Budgets

`AOS-CORE-034` — Implement jobs, quotas, and resource accounting

<a id="defense-in-depth"></a>

### Defense In Depth

`AOS-PROD-101` — Implement agent budgets, approval, receipts, and bounded autonomy; `AOS-PROD-101` — Implement agent budgets, approval, receipts, and bounded autonomy; `AOS-SEC-070` — Red-team agent capability, data, budget, and effect containment; `AOS-SEC-070` — Red-team agent capability, data, budget, and effect containment

<a id="evaluation"></a>

### Evaluation

`AOS-PROD-100` — Implement and evaluate agent shadow mode; `AOS-PROD-100` — Implement and evaluate agent shadow mode

<a id="policy-engine"></a>

### Policy Engine

`AOS-PROD-013` — Implement provider selection and routing policy

<a id="proposal-and-confirmation"></a>

### Proposal And Confirmation

`AOS-PROD-051` — Implement IntentBox draft and confirmation flow; `AOS-PROD-090` — Evaluate IntentBox interpretation and confirmation safety

<a id="resource-budgets"></a>

### Resource Budgets

`AOS-PROD-101` — Implement agent budgets, approval, receipts, and bounded autonomy; `AOS-PROD-101` — Implement agent budgets, approval, receipts, and bounded autonomy; `AOS-SEC-070` — Red-team agent capability, data, budget, and effect containment; `AOS-SEC-070` — Red-team agent capability, data, budget, and effect containment

<a id="trust-ladder"></a>

### Trust Ladder

`AOS-PROD-100` — Implement and evaluate agent shadow mode; `AOS-PROD-100` — Implement and evaluate agent shadow mode; `AOS-SEC-112` — Evaluate agent shadow mode and dangerous false-action rates
