---
id: "AOS-ARCH-021"
title: "Layered Boot and Instant Modes"
status: "Normative planning baseline"
version: "1.0.0"
baseline_date: "2026-07-13"
owners: "Agent OS Architecture Council"
audience: "Engineering, product, and program leadership"
summary: "Founder-directed architecture: the OS boots in layers, and the device can (re)boot near-instantly into primitive single-purpose modes — typewriter, reader, calculator, remote — as both a battery strategy and a focus feature."
---

# Layered Boot and Instant Modes

> The OS is not one monolithic boot target. It is a stack of layers, and the lowest useful layers are products in their own right: near-instant, radio-quiet, single-purpose modes for an information-overloaded world.

## Table of Contents

- [Purpose and Scope](#purpose-and-scope)
- [Founder Intent](#founder-intent)
- [Boot Layer Model](#layer-model)
- [Instant Modes](#instant-modes)
- [Mode Switching Mechanics](#switching)
- [Data and Capability Rules](#data-rules)
- [Battery Rationale](#battery)
- [Requirements](#requirements)
- [Failure and Degradation](#failure-and-degradation)
- [Evidence and Acceptance](#evidence-and-acceptance)
- [Risks and Open Questions](#risks-and-open-questions)
- [Related Documents](#related-documents)

<a id="purpose-and-scope"></a>

## Purpose and Scope

**Area:** System Architecture.

This document owns the layered-boot model and the instant-mode product concept for Agent OS, including its mapping onto the demo brick (HW-017/HW-018). It defines the target model and evidence; it does not assert current implementation.

<a id="founder-intent"></a>

## Founder Intent (recorded 2026-07-13)

The OS must be able to load in layers, and the user must be able to reboot — or first-boot — near-instantly into a primitive mode: typewriter, e-reader, calculator, IR remote, and similar single-purpose personalities. This is simultaneously a battery strategy (minimal layers keep radios and heavy services off) and a product feature: a deliberate low-stimulation device state in an attention-saturated world.

<a id="layer-model"></a>

## Boot Layer Model

| Layer | Contents | Boot budget (target) |
| --- | --- | --- |
| L0 Kernel | microkernel, memory, capabilities, IPC, timers | < 1 s |
| L1 Core services | storage (journal append), display, input, power/thermal, watchdog | + < 1 s |
| L2 Mode runtime | one instant-mode personality (typewriter, reader, calculator, remote) | + < 1 s to interactive |
| L3 Connectivity | Wi-Fi, BT, cellular, time sync, sync services | on demand |
| L4 Full product | entity/action/history runtime, IntentBox, agents | on demand |
| L5 Heavy | camera pipeline, models/NPU workloads | on demand |

Rules: every layer starts strictly on top of the previous ones; higher layers are *loadable and unloadable at runtime*, so "reboot into typewriter" and "collapse from full OS down to typewriter" are the same mechanism viewed from opposite ends. A cold boot to L2 interactive targets **< 3 s**; leaving a primitive mode up to L4 must not require a reboot.

<a id="instant-modes"></a>

## Instant Modes

An instant mode is a manifest: a tiny userland naming its layer ceiling, its capability set, its storage scope, and its render style. Initial set:

- **Typewriter** — full-screen text capture into the append-only journal; no radios, no notifications; the only "app" is the cursor.
- **Reader** — renders a preloaded library; page-turn input only; grayscale/low-refresh render style to cut display power.
- **Calculator** — instant math/unit scratchpad; results can be appended to the journal.
- **Remote** — IR blaster (and later network remote) personality; learned codes stored as versioned assets.
- **Phone-lite (later gate)** — L3 minimal cellular for calls/SMS only, everything else dark; admitted only after the cellular evidence gates.

Modes are deliberately boring: no multitasking, no feeds, no agent chatter unless the mode manifest asks for it.

<a id="switching"></a>

## Mode Switching Mechanics

- **Cold path:** power-on with the lock button held selects a mode from a minimal boot menu (or the last-used mode); firmware→L2 within the boot budget.
- **Warm path:** from the full OS, "descend" tears down L5→L3 and leaves the running L2 personality; ascent reloads layers without reboot.
- **Snapshot path (experiment):** per-mode prebaked memory images resumed from storage for sub-second perceived boot, contingent on NVMe read performance and image invalidation rules.
- Every switch is journaled (receipt), reversible, and survivable: a crashing higher layer never takes L0–L2 down.

<a id="data-rules"></a>

## Data and Capability Rules

- Primitive modes get **append-only** access to the journal and **read-only** access to their declared corpus (library, codes, notes); no mode may silently widen scope.
- Radios are capability-gated per manifest; typewriter/reader/calculator manifests hold no radio capabilities at all — the battery and the focus promise are enforced by capability absence, not by settings.
- Sync happens on ascent to L3+, never inside a radio-less mode.

<a id="battery"></a>

## Battery Rationale

On the demo brick the dominant idle costs are the SoC floor, display, and radios (HW-018 problem review P1). Instant modes attack all three: radios absent by capability, display in a low-power render style, and higher-layer services simply not loaded. The measurable target: reader mode at low brightness must multiply battery runtime versus the full OS by an evidenced factor, recorded per hardware revision.

<a id="requirements"></a>

## Requirements

- **R01.** Implement boot as explicit layers L0–L5 with declared dependencies; no layer may require a higher layer.
- **R02.** Implement instant modes as capability-scoped manifests over L2, with append-only journal writes and read-only corpora.
- **R03.** Cold boot to an interactive primitive mode in < 3 s on the demo brick; ascent to the full OS without reboot.
- **R04.** Specify normal, partial, denied, timeout, cancellation, restart, upgrade, and permanent-failure behavior per layer.
- **R05.** Expose structured diagnostics without leaking secrets or vendor-specific implementation details.
- **R06.** Link material unknowns to a claim and, when testable, an experiment with an owner and gate.
- **R07.** Update affected documentation and task data when evidence changes the model.

<a id="failure-and-degradation"></a>

## Failure and Degradation

Degradation must be explicit rather than accidental. A failing higher layer degrades the device to the highest healthy layer with a typed state; the primitive modes are the designed floor of degradation — a brick whose full OS is broken still boots as a typewriter. Recovery ascends layer by layer with evidence at each step.

<a id="evidence-and-acceptance"></a>

## Evidence and Acceptance

- Measured cold-boot times per layer on the demo brick, per hardware revision.
- Battery runtime comparison: reader mode vs full OS, fixed brightness and workload.
- Capability audit proving radio-less manifests hold no radio capabilities.
- Crash-injection evidence: killing L4/L5 leaves L2 interactive.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, timestamps, artifacts, expected result, actual result, and reviewer.

<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- Display init dominates cold boot on DSI panels; the < 3 s budget may force panel-specific fast-init work.
- Snapshot resume interacts badly with journal integrity if invalidation rules are sloppy; snapshots are an experiment, not a baseline.
- Phone-lite mode inherits every cellular gate from AOS-HW-007; it must not become a shortcut around them.
- **Open-question rule:** an unanswered high-impact question becomes a claim/experiment record and cannot be hidden in meeting notes.
- **Stop rule:** work stops or changes track when the required evidence path is unavailable.

<a id="related-documents"></a>

## Related Documents

- [Interim demo device](../hardware/HW-017-interim-demo-device.md)
- [Demo brick V1 configuration](../hardware/HW-018-demo-brick-v1-configuration.md)
- [Portable system architecture](AOS-ARCH-001.md)
- [Microkernel specification](AOS-ARCH-002.md)
