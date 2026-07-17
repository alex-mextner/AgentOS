---
id: "AOS-ARCH-010"
title: "Agent Runtime, Micro-App Generation, and Action Safety"
status: "Normative foundation"
version: "1.1.0"
baseline_date: "2026-07-16"
owners: "Architecture Council"
audience: "Engineering, product, security, legal, programme, partner, and community readers"
summary: "Agent planning, capability grants, text-to-micro-app generation, provider and route selection, effect receipts, budgets, confirmation and bounded autonomy."
---
# Agent Runtime, Micro-App Generation, and Action Safety

## Purpose and scope

This document defines how agents observe, plan, propose interfaces, invoke typed actions and select delivery providers without receiving ambient authority over UI, data, radios or external services.

Agents may generate declarative micro-app manifests and propose Agent Mesh routes. They do not receive permission to execute arbitrary generated code, broaden capabilities, alter radio compliance or claim delivery without receipt evidence.

## Normative position

1. Agents operate through typed query and action providers with explicit capability grants, never ambient UI control or unrestricted process authority.
2. Trust tiers progress from observation to proposal, reversible execution, confirmed sensitive execution and bounded autonomy.
3. Every effect records planner, model, input references, provider, authority, destination, cost, result and compensation or irreversibility.
4. Generated micro-apps are untrusted declarative proposals until schema validation, static policy checks, preview and authority review succeed.
5. Transport or provider selection is an inspectable policy decision. The agent may recommend a route but cannot bypass user, security, region, energy, data-class or airtime policy.
6. Pending, provider accepted, relay custody, committed, delivered, expired and compensated are distinct result states.

## Trust ladder

| Tier | Agent authority | Examples |
| --- | --- | --- |
| 0 — Observe | Read explicitly granted fields; no external effect | Summarise a project, inspect UV data, estimate a route |
| 1 — Propose | Produce plan, micro-app manifest, provider/route options and authority diff | Draft a UV micro-app; propose direct versus delayed delivery |
| 2 — Reversible execute | Invoke actions with reliable undo/rollback under budget | Create a reminder, install a private micro-app version |
| 3 — Confirmed sensitive | Execute after explicit confirmation tied to exact destination/effect | Share health summary, send an emergency bundle, pay a fee |
| 4 — Bounded autonomy | Repeated execution inside narrow policy, quotas and expiry | Maintain a project brief, relay approved mesh data, manage safe reminders |

A higher tier does not grant unrelated capabilities. Authority is task-, data-, destination-, provider-, time- and budget-scoped.

## Agent planning record

An executable plan contains:

- user objective and unresolved ambiguity;
- inputs and provenance;
- providers and substitutions;
- requested capabilities and data fields;
- steps, dependencies, cancellation and timeout;
- expected local and external effects;
- network/Agent Mesh route policy;
- cost, energy, airtime and background-wake budgets;
- confirmation points;
- receipt and compensation expectations.

The user can inspect the plan before approval. Hidden chain-of-thought is neither required nor treated as evidence; the plan contains the decision-relevant structured rationale.

## Micro-app generation

Agents may generate or edit:

- declarative manifest;
- trusted component graph;
- provider bindings;
- typed action wiring;
- fixtures and examples;
- surface variants;
- explanation and authority diff.

They may not generate unrestricted executable code into the portable micro-app runtime. Unknown custom components or providers require a separate signed package installation and review flow.

Natural-language, block and source forms must round-trip without changing requested authority or effect semantics. Any change to destination, data scope, spend, network use, sharing, background operation or provider identity reopens review.

## Provider and route selection

The policy engine ranks providers and transports by:

- recipient/entity identity and trust;
- declared outcome and deadline;
- privacy and data classification;
- local/offline preference;
- region and certification rules;
- payload size and fidelity;
- monetary, energy, airtime and latency budget;
- delivery evidence available;
- user/project defaults;
- provider health, provenance and revocation state.

An agent cannot silently turn “send to Daniel” into a public broadcast, substitute a provider with broader data collection, downgrade encryption, or use an illegal radio profile.

## Action execution and receipts

The action executor owns idempotency, deduplication, cancellation, retries, partial external effects and compensation. A receipt records what was requested, what actually happened and what remains pending.

For delayed Agent Mesh delivery, receipts distinguish local queue acceptance, relay custody and recipient delivery. For micro-app installation, receipts distinguish manifest validation, provider binding, grant approval, instance creation and external actions triggered later.

## Failure and degradation

Typed failures include ambiguity, missing provider, stale data, denied capability, quota exhaustion, unsafe destination, revoked signer, invalid manifest, prompt injection, route unavailable, region denial, delayed delivery, expired bundle, action timeout, partial effect and compensation failure.

The agent must stop, narrow scope, ask for clarification or return a bounded negative result. It must not improvise broader access, silently select a weaker route or hide uncertainty behind confident prose.

## Resource and safety budgets

Agents and generated micro-apps receive explicit limits for:

- CPU, memory and storage;
- local model and remote compute use;
- network bytes, destinations and data classes;
- Agent Mesh airtime, relay storage and hop count;
- sensor access and sampling;
- background wake frequency and duration;
- monetary spend and external side effects;
- number and rate of actions;
- plan lifetime and autonomous authority.

Budgets are charged to durable jobs and survive process restart. Exceeding a budget pauses or denies work and records why.

## Implementation obligations

| Task | Obligation | Gate | Verification |
| --- | --- | --- | --- |
| AOS-CORE-034 | Jobs, quotas and resource accounting | M2 | exhaustion, nested domains and reconciliation |
| AOS-PROD-010 | Portable action and effect taxonomy | M2 | local, external, delayed and irreversible action corpus |
| AOS-PROD-012 | Executor, receipts and compensation | M4 | duplicate, crash, timeout and partial effect tests |
| AOS-PROD-013 | Provider and route policy | M4 | ambiguity, outage, privacy, malicious ranking and region cases |
| AOS-PROD-051 | Draft, preview and confirmation flow | M8 | recipient, destination, amount and provider ambiguity |
| AOS-MICROAPP-002 | Text/block/source round-trip | M3 | semantic and authority equivalence |
| AOS-MICROAPP-005 | Authority diff and preview | M4 | prompt injection and capability escalation |
| AOS-MICROAPP-007 | Text-to-micro-app planner | M5 | unsafe plan, unknown component and provider attacks |
| AOS-MESH-007 | Routing, custody, quotas and deduplication | M5 | malicious relay, loop, flood and route substitution |
| AOS-MESH-008 | Emergency profile and abuse controls | M5 | controlled drills and false-priority tests |
| AOS-PROD-100 | Agent shadow mode | M8 | comparison against user decisions and withheld cases |
| AOS-PROD-101 | Budgets, approval and bounded autonomy | M9 | looping, costly, exfiltrating and revoked agents |
| AOS-SEC-070 | Agent/provider containment red team | M8 | compromised agent, provider and route scenarios |

## Evidence and acceptance

- privilege-amplification property tests;
- prompt-injection and malicious-provider suites;
- shadow-mode comparison with user decisions;
- micro-app generation and authority round-trip tests;
- delayed delivery and misleading-receipt tests;
- adversarial destination, budget, confirmation and rollback tests;
- accessibility and time-pressure evaluation;
- receipt completeness and enforcement audit.

## Related documents

- [Product Vision](../vision/AOS-VSN-001.md)
- [Storage, Entity Graph, History and Sync](AOS-ARCH-009.md)
- [Agent Mesh](ARCH-024-agent-mesh-connectivity.md)
- [Micro-App Runtime](ARCH-026-micro-app-runtime.md)
- [Actions, Integrations and Micro-Apps](../product/AOS-PROD-003.md)
- [Text-to-Micro-App Builder](../product/PROD-018-text-to-micro-app-builder.md)
- [Execution Plan](../planning/PLAN-019-mesh-and-microapps.md)

<a id="action-lifecycle"></a>
## Action lifecycle anchor

Every effect moves through proposal, validation, authorization, execution, receipt and compensation/closure states.

<a id="agent-budgets"></a>
## Agent budgets anchor

Autonomy is bounded by durable resource, data, effect, route, cost and time budgets.

<a id="defense-in-depth"></a>
## Defense in depth anchor

Schema validation, capabilities, sandboxing, provider provenance, preview, receipts and red-team evidence remain independent controls.

<a id="evaluation"></a>
## Evaluation anchor

Shadow mode, usability, accessibility and adversarial evaluation precede bounded autonomy.

<a id="policy-engine"></a>
## Policy engine anchor

Provider and route selection preserve identity, privacy, region, cost, energy and delivery semantics.

<a id="proposal-and-confirmation"></a>
## Proposal and confirmation anchor

Confirmation is tied to the exact interpreted action, destination, provider, data and effect.

<a id="resource-budgets"></a>
## Resource budgets anchor

Resource use is explicit, durable, observable and revocable.

<a id="trust-ladder"></a>
## Trust ladder anchor

Trust tiers increase effect authority only within the granted scope.
