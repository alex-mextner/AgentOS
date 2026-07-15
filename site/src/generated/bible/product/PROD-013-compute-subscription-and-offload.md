---
id: "AOS-PROD-013"
title: "Compute Subscription and Elastic Offload"
status: "Normative planning baseline"
version: "1.0.0"
baseline_date: "2026-07-13"
owners: "Product / Architecture Council"
audience: "Product, engineering, and program leadership"
summary: "Founder-directed monetization and system feature: subscription tiers sell not only cloud storage but server compute; the OS opportunistically offloads heavy work to subscribed server resources over stable links, saving battery, thermals, and hardware cost — without breaking the local-first contract."
---

# Compute Subscription and Elastic Offload

> The subscription sells two things: durable storage and **elastic compute**. When the link is stable and the user has consented, the system runs heavy work server-side and the device gets lighter, cooler, and longer-lived — as a visible, typed, reversible decision, never as silent background migration.

## Table of Contents

- [Purpose and Scope](#purpose-and-scope)
- [Founder Intent](#founder-intent)
- [Local-First Invariant](#local-first)
- [Offloadable Work Classes](#work-classes)
- [Elastic Execution Model](#elastic-execution)
- [Subscription Tiers](#tiers)
- [Power and Hardware Consequences](#power)
- [Requirements](#requirements)
- [Failure and Degradation](#failure-and-degradation)
- [Evidence and Acceptance](#evidence-and-acceptance)
- [Risks and Open Questions](#risks-and-open-questions)
- [Related Documents](#related-documents)

<a id="purpose-and-scope"></a>

## Purpose and Scope

**Area:** Product / System Architecture.

This document owns the compute-subscription product concept and the elastic-offload execution model that implements it. It defines how server resources become a first-class, capability-gated backend of the portable runtime, and the invariants that keep the offering compatible with the project's local-first, privacy-first position.

<a id="founder-intent"></a>

## Founder Intent (recorded 2026-07-13)

Users can pay subscription tiers not only for cloud storage but for access to server compute. When internet connectivity is stable, the system offloads many processes to the server, saving on-device resources across the board.

<a id="local-first"></a>

## Local-First Invariant

Offload is an accelerator, never a dependency:

1. **The device is complete offline.** Every core function (entities, actions, history, capture, instant modes) works with zero connectivity; offload absence is a typed performance state, not a broken feature.
2. **No silent migration.** An offload decision surfaces through IntentBox semantics — provider, effect, data flow, cost, reversibility — and lands in the history service as a receipt.
3. **Data classes govern eligibility.** Work over public or user-published data offloads freely under the plan; work over personal corpora requires an explicit consent grant per class, with end-to-end encryption in transit and documented server-side handling; some classes are marked local-only permanently.
4. **Exit is always open.** Everything the server holds is exportable; canceling the subscription degrades performance, never data ownership.

<a id="work-classes"></a>

## Offloadable Work Classes

| Class | Examples | Default eligibility |
| --- | --- | --- |
| Heavy inference | large-model reasoning, long-context agent runs | plan-gated, consent per data class |
| Media processing | video transcode, burst-photo merge experiments, large RAW development | plan-gated |
| Indexing/sync | semantic indexing of synced corpora, cross-device search | plan-gated, personal-data consent |
| Web automation | agent browsing/scraping tasks that need no device sensors | freely offloadable |
| Background maintenance | backups, dedup, format migration | freely offloadable on synced data |
| Never offload | key operations in the secure element, biometric matching, raw mic/camera streams outside an active user action | local-only by construction |

<a id="elastic-execution"></a>

## Elastic Execution Model

- The action/agent runtime treats "local" and "subscribed server" as two backends of the same typed execution contract; scheduling picks a backend from declared inputs: link quality/stability, battery state and power mode (HW-019 S/I state), thermal headroom, task data class, plan entitlements, and user policy.
- Placement decisions are deterministic given those inputs, logged, and reversible: a task recalled from the server resumes locally from its journaled state.
- Server results carry provenance (backend identity, versions) exactly like device evidence, so remote execution never becomes an unauditable black box.
- Metering is visible: the user sees compute consumption like storage consumption; no opaque throttling.

<a id="tiers"></a>

## Subscription Tiers (sketch, priced later)

| Tier | Storage | Compute | Notes |
| --- | --- | --- | --- |
| Free/Local | device + self-host option | none | full OS, forever; the trust anchor |
| Plus | synced storage quota | burst offload (queued heavy tasks) | the battery-saver tier |
| Pro | larger quota | priority + always-on agent runtime server-side | agents keep working while the phone sleeps in S3 |
| Self-host | user's own server | same protocols, user's hardware | the credibility tier: the server contract is publishable, not proprietary lock-in |

The self-host tier is strategic: it proves offload is a protocol, not a trap, and matches the project's openness posture.

<a id="power"></a>

## Power and Hardware Consequences

Offload is the third economy axis after SoC sleep states and island modes ([AOS-HW-019](../hardware/HW-019-power-architecture-standby.md)):

- Heavy layers (ARCH-021 L5) can stay unloaded while the server carries inference — the device runs cooler and the L2–L4 session lives longer on battery.
- "Agent works while the phone sleeps": with Pro, an agent task continues server-side during S3 standby, and the island's comms-standby poll picks up results — the standby story and the subscription story reinforce each other.
- Hardware cost lever: a mid-range SoC plus subscription can match a flagship's perceived capability; this widens the future ODM design space.
- Every battery claim from offload is measured (task energy local vs offloaded, radio cost included — offload that burns more radio than it saves compute is rejected by the scheduler's energy model).

<a id="requirements"></a>

## Requirements

- **R01.** Implement server compute as a typed backend of the portable execution contract, selected by declared inputs and never by hidden heuristics.
- **R02.** Enforce the local-first invariant: full offline function, typed degradation, exportable server state, permanent local-only classes.
- **R03.** Surface every offload decision with provider/data-flow/cost/reversibility semantics and a history receipt; meter compute visibly.
- **R04.** Specify normal, partial, denied, timeout, cancellation, restart, upgrade, and permanent-failure behavior for placement, recall, and link loss mid-task.
- **R05.** Include radio energy in the placement model; reject offloads with negative net energy.
- **R06.** Link material unknowns (energy deltas, latency envelopes, server cost per tier) to claims/experiments with owners and gates.
- **R07.** Publish the server protocol sufficiently for the self-host tier.

<a id="failure-and-degradation"></a>

## Failure and Degradation

Link loss mid-task recalls or checkpoints the task with a typed state; results never silently fork between backends. Plan expiry degrades to local execution with queued-work notice. Server unavailability is indistinguishable in *correctness* from being offline — only latency and battery differ.

<a id="evidence-and-acceptance"></a>

## Evidence and Acceptance

- Measured energy per representative task: local vs offloaded including radio cost, per link type.
- Placement determinism tests: same inputs → same decision; full receipt trail.
- Recall/resume correctness under injected link loss at every task phase.
- Self-host conformance: the published protocol passes the same suite as the first-party server.
- Evidence records identity, versions, configuration, timestamps, artifacts, expected/actual results, reviewer.

<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- Positioning risk: offload can read as contradicting privacy-first; the consent classes, receipts, and self-host tier are the answer and must ship together, not later.
- Unit economics of server compute per subscriber are unmodeled; a cost model task gates any pricing announcement.
- Latency-sensitive interactive tasks may never offload well; the scheduler needs honest task-class annotations.
- Regulatory: cross-border processing of personal corpora intersects data-protection regimes; counsel review before personal-data classes go live.
- **Open-question rule:** an unanswered high-impact question becomes a claim/experiment record and cannot be hidden in meeting notes.
- **Stop rule:** work stops or changes track when the required evidence path is unavailable.

<a id="related-documents"></a>

## Related Documents

- [Power architecture and standby](../hardware/HW-019-power-architecture-standby.md)
- [Layered boot and instant modes](../architecture/ARCH-021-layered-boot-and-instant-modes.md)
- [Demo brick V1 configuration](../hardware/HW-018-demo-brick-v1-configuration.md)
