---
id: "AOS-PROD-015"
title: "Voice Agent and Conversational Interface"
status: "Normative planning baseline"
version: "1.0.0"
baseline_date: "2026-07-13"
owners: "Product / Architecture Council"
audience: "Product, engineering, and program leadership"
summary: "The voice agent is the primary differentiator that justifies the far-field audio hardware: an inspectable, capability-scoped, local-first conversational interface to the entity/action/history system, with a tiered on-device/server split and honest confirmation of every effectful action."
---

# Voice Agent and Conversational Interface

> The far-field microphone array and audio subsystem exist for this. The voice agent is not a chatbot bolted on; it is a first-class, inspectable interface to the same entities, actions, and history the rest of the OS exposes — running local-first, escalating to server only by consent.

## Table of Contents

- [Purpose and Scope](#purpose-and-scope)
- [Why It Is the Differentiator](#differentiator)
- [Design Principles](#principles)
- [Pipeline](#pipeline)
- [On-Device / Server Tiering](#tiering)
- [Action Model and Confirmation](#actions)
- [Inspectability](#inspectability)
- [Wake, Privacy, and the Mute Switch](#privacy)
- [Instant-Mode and Standby Behavior](#modes)
- [Requirements](#requirements)
- [Failure and Degradation](#failure)
- [Evidence and Acceptance](#evidence)
- [Risks and Open Questions](#risks)
- [Related Documents](#related)

<a id="purpose-and-scope"></a>

## Purpose and Scope

**Area:** Product / System Architecture.

This document owns the voice agent: what it is, how it maps speech to the system's typed actions, where computation runs, and the trust and inspectability rules that keep it aligned with the local-first, agent-inspectable position. It is the product justification for the audio hardware in AOS-HW-018 and consumes the offload model of AOS-PROD-013.

<a id="differentiator"></a>

## Why It Is the Differentiator

iOS and Android voice assistants are thin front-ends over app silos: they can open apps and fire a fixed set of intents, but they cannot see or manipulate a unified object model, cannot show why they did something, and cannot be trusted with real authority because their actions are opaque. AgentOS exposes entities, typed actions, and semantic history natively, so the voice agent can operate on the *actual system state* with scoped capabilities and a full receipt trail. That is a category difference, not a feature difference — and it is why premium far-field capture (XVF3800, 4-mic array) is worth the hardware cost.

<a id="principles"></a>

## Design Principles

1. **Inspectable, not magic.** Every interpretation, plan, and action is visible and explainable via IntentBox semantics (provider, effect, data flow, confidence, cost, reversibility).
2. **Capability-scoped.** The agent holds only the capabilities the user granted; it cannot act outside them, and effectful actions surface their authority.
3. **Local-first.** Wake, ASR, and common intents run on-device; server escalation is a consented, typed decision (AOS-PROD-013), never a silent default.
4. **Reversible by default.** Effectful actions produce history receipts with an undo path; irreversible actions require explicit confirmation.
5. **Honest degradation.** Offline, low-confidence, or unavailable-provider states are typed and spoken, never faked.

<a id="pipeline"></a>

## Pipeline

Speech to effect, each stage a replaceable typed component:

1. **Capture** — 4-mic array + XVF3800 front-end: AEC, beamforming, DoA, noise suppression; a clean single stream plus optional raw channels.
2. **Wake / VAD** — on-device keyword + voice-activity detection; the mic path is gated by the hardware mute switch upstream.
3. **ASR** — on-device streaming speech-to-text for latency and privacy; server ASR only for hard audio by consent.
4. **Intent / plan** — map utterance to typed actions over entities; ambiguous input yields ranked interpretations in IntentBox, not a guess.
5. **Confirm** — effectful/irreversible actions confirmed per the action model below.
6. **Execute** — via the same action contracts any client uses; capability-checked.
7. **Respond** — spoken + on-screen result with a receipt; haptic confirmation (Taptic-class channel).

<a id="tiering"></a>

## On-Device / Server Tiering

| Task | Default placement | Escalation |
| --- | --- | --- |
| Wake, VAD | on-device always | never leaves device |
| Streaming ASR | on-device | server for noisy/accented hard cases, by consent |
| Common intents (timers, notes, capture, control, nav) | on-device small model | — |
| Long-context reasoning, large-model planning | on-device if capable, else server | Pro-tier server per PROD-013, with data-class consent |
| Personal-corpus retrieval | on-device index | server index only for synced, consented corpora |

The placement engine reuses PROD-013's inputs (link, battery/S-state, thermals, data class, plan, policy) and includes radio energy; an offload that costs more than it saves is rejected.

<a id="actions"></a>

## Action Model and Confirmation

- The agent emits the same **typed actions** published by providers to the system; it has no private backdoor to state.
- **Read/query** actions: run freely within granted capabilities.
- **Effectful, reversible** actions (create note, set timer, move item): execute with a receipt and an undo window; a brief spoken/visual confirmation, not a blocking prompt.
- **Irreversible or high-authority** actions (send message, make payment, delete, external effects): require explicit confirmation with the effect and target stated; payments additionally follow the regulated-rails rules of AOS-PROD-014 (never a replayed private banking call).
- **Batch/agentic** runs (multi-step): show the plan before executing; each step is a receipt; the run is cancellable and resumable.

<a id="inspectability"></a>

## Inspectability

Any action can be answered with "why": the agent shows the utterance, the chosen interpretation and its confidence, the alternatives it rejected, the capabilities used, the data touched, and the resulting receipt. There is no unlogged action. This is the trust mechanism that lets a voice agent hold real authority — the opposite of a black-box assistant.

<a id="privacy"></a>

## Wake, Privacy, and the Mute Switch

- The hardware mute switch (AOS-HW-018) cuts microphone power upstream of the voice processor; when muted, the OS reports a typed capability-absent state and the agent cannot hear, by physics, not policy.
- Wake-word detection runs on-device; audio is not streamed anywhere before an intent needs it, and never off-device without consent.
- An always-visible indicator shows listening state; DoA can show *who/where* it heard.
- Raw microphone streams are in the never-offload class (PROD-014 legality / PROD-013 rules) outside an active, consented action.

<a id="modes"></a>

## Instant-Mode and Standby Behavior

- In radio-less instant modes (ARCH-021), the agent runs fully local or is absent per the mode manifest; a typewriter holds no agent chatter unless asked.
- In deep standby (AOS-HW-019 S3), wake-word capability can be assigned to the always-on island for low-power "hey"-to-wake, escalating to the SoC only on a real request — the standby story and the voice story reinforce each other.

<a id="requirements"></a>

## Requirements

- **R01.** Map speech to the system's typed actions over entities; the agent has no private state path.
- **R02.** Run wake/VAD/ASR/common-intents on-device; escalate to server only as a consented, typed decision including radio energy in the model.
- **R03.** Confirm effectful actions with receipts and undo; require explicit confirmation for irreversible/high-authority actions; route payments through regulated rails only.
- **R04.** Make every interpretation and action inspectable ("why") with confidence, alternatives, capabilities, data, and receipt.
- **R05.** Enforce the hardware mute as a physical capability cut; keep raw audio in the never-offload class outside active actions.
- **R06.** Degrade honestly: offline, low-confidence, unavailable-provider are typed and spoken, never faked.
- **R07.** Participate correctly in instant modes and standby, including island-hosted low-power wake.

<a id="failure"></a>

## Failure and Degradation

Low ASR confidence yields a clarifying question or ranked options, never a silent guess on an effectful action. Loss of link mid-plan recalls or checkpoints per PROD-013. A crashed agent never leaves an effectful action half-applied without a receipt marking the state. Unavailable server degrades to on-device capability with a spoken notice.

<a id="evidence"></a>

## Evidence and Acceptance

- Far-field ASR accuracy at 1 m and 3 m, quiet and noisy, on-device vs server.
- Wake-word false-accept/false-reject rates; island-hosted wake latency and power.
- Action-confirmation correctness: no irreversible action without explicit confirm; full receipt coverage.
- Energy per representative interaction, local vs offloaded, radio included.
- Inspectability audit: every action answers "why" with complete provenance.
- Evidence records identity, versions, configuration, timestamps, artifacts, expected/actual, reviewer.

<a id="risks"></a>

## Risks and Open Questions

- On-device model capability vs battery/thermal budget on CM5 is unmeasured; the tiering leans on server for the heaviest reasoning until measured.
- Voice confirmation UX for irreversible actions must not become either unsafe (too easy) or annoying (too heavy); tuned with evidence.
- Multi-speaker and cross-talk handling in a real room is hard; DoA helps but is not a solved problem.
- Server escalation intersects privacy positioning; the consent, receipts, and never-offload classes are the answer and ship together.
- **Open-question rule:** an unanswered high-impact question becomes a claim/experiment record and cannot be hidden in meeting notes.
- **Stop rule:** work stops or changes track when the required evidence path is unavailable.

<a id="related"></a>

## Related Documents

- [Demo brick V1 configuration (audio, mute)](../hardware/HW-018-demo-brick-v1-configuration.md)
- [Compute subscription and offload](PROD-013-compute-subscription-and-offload.md)
- [Native app clients (payments, legality)](PROD-014-native-app-clients.md)
- [Layered boot and instant modes](../architecture/ARCH-021-layered-boot-and-instant-modes.md)
- [Power architecture and standby](../hardware/HW-019-power-architecture-standby.md)
