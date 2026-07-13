---
id: "AOS-ARCH-022"
title: "Layer Manifest Format and Capability Model"
status: "Normative planning baseline"
version: "1.0.0"
baseline_date: "2026-07-13"
owners: "Architecture Council"
audience: "Engineering"
summary: "The concrete format that makes ARCH-021 layered boot and instant modes buildable: a declarative layer/mode manifest and the capability model that enforces radio-less modes and scoped agent authority by construction."
---

# Layer Manifest Format and Capability Model

> ARCH-021 says the OS boots in layers and instant modes are capability-scoped manifests. This document defines the manifest and the capability model concretely, so the simulator (issue AOS-DEMO-012) and the instant-mode slice (AOS-DEMO-011) have something to build against.

## Table of Contents

- [Purpose and Scope](#purpose)
- [Capability Model](#capabilities)
- [Manifest Schema](#schema)
- [Enforcement](#enforcement)
- [Examples](#examples)
- [Requirements](#requirements)
- [Evidence and Acceptance](#evidence)
- [Related Documents](#related)

<a id="purpose"></a>

## Purpose and Scope

**Area:** System Architecture.

This document owns the on-disk/in-memory format of layer and instant-mode manifests and the capability semantics that back them. It is the buildable complement to AOS-ARCH-021 and the microkernel capability object model of AOS-ARCH-002.

<a id="capabilities"></a>

## Capability Model

A capability is an unforgeable, transferable token of authority over a specific resource with specific rights, held by a component and enforced by the kernel (per AOS-ARCH-002). Principles:

- **No ambient authority.** A component can do exactly what its capabilities allow and nothing more; there is no global "root".
- **Least authority.** A layer or mode receives the minimal capability set its manifest declares; unlisted authority is absent, not merely disabled.
- **Attenuation.** A component may hand a subordinate a weaker capability (narrower resource, fewer rights, time/use bound) but never a stronger one.
- **Revocation.** Granted capabilities are revocable; revocation is observable as a typed state.
- **Enforced by absence.** Radio-less instant modes hold no radio capabilities, so "no radios in typewriter mode" is a fact of the capability graph, not a setting that could be toggled.

Capability classes (illustrative): `storage.journal.append`, `storage.corpus.read:<id>`, `display.framebuffer`, `input.touch`, `radio.wifi`, `radio.cellular`, `radio.ble`, `sensor.imu`, `camera.capture`, `audio.mic`, `audio.out`, `net.socket`, `action.invoke:<action>`, `agent.plan`.

<a id="schema"></a>

## Manifest Schema

A manifest is declarative (TOML/JSON-equivalent; canonical form is an IDL-defined struct per AOS-ARCH-005). Fields:

```
id            = "mode.typewriter"        # stable id
kind          = "instant-mode"           # "layer" | "instant-mode"
layer_ceiling = "L2"                     # highest boot layer this may load (ARCH-021)
depends_on    = ["L0","L1","L2"]         # required lower layers
capabilities  = [                        # exhaustive authority list; nothing implicit
  "storage.journal.append",
  "display.framebuffer",
  "input.touch",
]
storage_scope = { append = ["journal"], read = [] }
render_style  = "low-power-mono"         # hint to display service
radios        = "none"                   # derived-check: must equal radios implied by capabilities
wake_sources  = []                       # for standby manifests (HW-019)
confirm_policy = "n/a"                    # effectful-action confirmation, if any
version        = "1.0.0"
compat         = { min_kernel = "..." }
```

Rules: `radios` MUST be consistent with the capability list (a manifest claiming `radios="none"` while listing `radio.*` fails validation). `layer_ceiling` MUST cover `depends_on`. Every capability MUST name a real class; wildcards are rejected.

<a id="enforcement"></a>

## Enforcement

- At load, the loader grants exactly the manifest's capabilities from its own (necessarily broader) set via attenuation; it cannot grant what it does not hold.
- The kernel rejects any operation whose capability is absent; there is no fallback to broader authority (matches the failure rules across the bible).
- A higher layer failing never revokes the capabilities of lower layers; a crashing L4/L5 leaves L0–L2 intact (ARCH-021 degradation floor).
- Manifest validation runs at build and at load; an invalid manifest never loads.

<a id="examples"></a>

## Examples

- **Typewriter** — ceiling L2; caps: `storage.journal.append`, `display.framebuffer`, `input.touch`; radios none. Cannot network, cannot read other corpora, by construction.
- **Reader** — ceiling L2; caps: `storage.corpus.read:<library>`, `display.framebuffer`, `input.touch`; radios none; render `low-power-mono`.
- **Remote** — ceiling L2; caps: `ir.tx`, `ir.rx`, `storage.corpus.read:<codes>`, `display.framebuffer`, `input.touch`; radios none.
- **Full product** — ceiling L4; caps include `radio.*`, `action.invoke:*` (as granted), `agent.plan`; radios enabled; confirm_policy active.
- **Standby glance (island)** — a HW-019 island manifest: wake_sources `["button","rtc","tap","modem.ring"]`, caps `display.eink`, `radio.ble` (optional); the SoC is off.

<a id="requirements"></a>

## Requirements

- **R01.** Define manifests as declarative, IDL-backed structures with an exhaustive capability list; no implicit authority.
- **R02.** Enforce least authority, attenuation, and revocation via the kernel capability model; radio-less modes hold no radio capabilities.
- **R03.** Validate manifests at build and load; consistency between `radios`, `capabilities`, `layer_ceiling`, and `depends_on` is mandatory.
- **R04.** Guarantee the degradation floor: a failing higher layer never strips lower-layer capabilities.
- **R05.** Expose the active capability set of any component for the inspectability requirements of the voice agent and IntentBox.

<a id="evidence"></a>

## Evidence and Acceptance

- Simulator (AOS-DEMO-012) loads each example manifest and proves the granted capability set equals the declared set.
- Negative tests: a manifest requesting an unheld/unknown/wildcard capability fails to load; a `radios="none"` manifest with a radio capability fails validation.
- Crash-injection: killing an L4 component leaves L2 manifests' capabilities intact.
- Inspectability: any component's live capability set is queryable and matches its manifest.

<a id="related"></a>

## Related Documents

- [Layered boot and instant modes](ARCH-021-layered-boot-and-instant-modes.md)
- [Microkernel specification](ARCH-002-microkernel.md)
- [IDL and type system](AOS-ARCH-005.md)
- [Power architecture and standby](../hardware/HW-019-power-architecture-standby.md)
- [Voice agent (inspectability)](../product/PROD-015-voice-agent.md)
