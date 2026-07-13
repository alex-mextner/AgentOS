---
id: "AOS-HW-017"
title: "Interim Demo Device: Module Brick"
status: "Normative planning baseline"
version: "1.0.0"
baseline_date: "2026-07-13"
owners: "Agent OS Architecture Council"
audience: "Engineering, product, security, legal, and program leadership"
summary: "A pocketable demonstration handheld assembled from documented, pre-certified modules: reference architecture, baseline BOM, cellular and camera strategy, demo-claim limits, and intake tasks."
---

# Interim Demo Device: Module Brick

> A deliberately thick, 3D-printed handheld assembled from documented, separately certified off-the-shelf modules so that Agent OS can be carried, shown, and exercised on real radio, camera, display, and battery hardware years before any custom or ODM device exists.

## Table of Contents

- [Purpose and Scope](#purpose-and-scope)
- [Normative Position](#normative-position)
- [Operating Model](#operating-model)
- [Reference Architecture](#reference-architecture)
- [Baseline Bill of Materials](#baseline-bom)
- [Cellular Strategy](#cellular-strategy)
- [Camera Strategy](#camera-strategy)
- [Certification and Legal Constraints](#certification-and-legal)
- [Demo Scope and Claim Limits](#demo-claims)
- [Requirements](#requirements)
- [Failure and Degradation](#failure-and-degradation)
- [Evidence and Acceptance](#evidence-and-acceptance)
- [Market Intelligence Baseline (2026-07)](#market-intelligence)
- [Community Channels](#community-channels)
- [Relationship to the Pixel 9 Archive](#pixel9-relationship)
- [Implementation Obligations](#implementation-obligations)
- [Risks and Open Questions](#risks-and-open-questions)
- [Related Documents](#related-documents)
- [Planning Reference Anchors](#planning-reference-anchors)

<a id="purpose-and-scope"></a>

## Purpose and Scope

**Area:** Hardware Programme.

The demo brick is an interim, hand-carried demonstration target. Its job is to make the portable Agent OS contracts tangible — boot, display, touch, cellular data, SMS, best-effort voice, Wi-Fi, and a genuinely good camera — inside one battery-powered enclosure that fits in a pocket. It accepts thickness, weight, and industrial-design compromises that a product never would.

This document owns the semantics implied by **Interim Demo Device: Module Brick**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.

The demo brick is a packaging of already-planned work, not a new architecture route. It combines the camera-capable documented platform ([AOS-HW-006](AOS-HW-006.md)), the externally connected documented modem ([AOS-HW-007](AOS-HW-007.md)), and an early, radically simplified instance of the custom carrier-board stage ([AOS-HW-008#carrier-board-stage](AOS-HW-008.md#carrier-board-stage)). It also serves as a de-risking rehearsal for the community hardware kit (AOS-OPEN-060).

<a id="normative-position"></a>

## Normative Position

1. The demo brick is assembled exclusively from documented, separately certified, commercially purchasable modules; no undocumented vendor stack, desoldered phone subassembly, or reverse-engineered firmware enters the build.
2. The demo brick proves portable device-service contracts on real hardware; its module choices, wiring, and workarounds terminate in the board package and service backends and never become portable API.
3. No "phone" product claim is made from demo-brick evidence: data and SMS are first-class demo capabilities, voice is best-effort per operator, and the IMS/emergency gates of [AOS-HW-007](AOS-HW-007.md#ims-and-voice) remain unmet until separately certified.

<a id="operating-model"></a>

## Operating Model

The operating model is contract-first and evidence-driven. A component declares its authority, resources, lifecycle, error model, cancellation and timeout behavior, observability, version, and compatibility promise. Backends are replaceable only when the same conformance suite passes and no forbidden platform type leaks into portable layers.

Implementation proceeds through a reference model or mock, deterministic QEMU evidence where relevant, documentation-first physical hardware, and quality-hardware evidence. Pixel 9 adapters remain quarantined according to [ADR-0004](AOS-ADR-0004.md#decision), and the native Pixel 9 route itself is archived according to [ADR-0007](../decisions/ADR-0007-archive-pixel-9-route.md#decision).

<a id="reference-architecture"></a>

## Reference Architecture

The brick is a sandwich: compute module on a simple interconnect (initially off-the-shelf adapters and flat cables, later a single thin carrier PCB), with every radio and imaging function delegated to a documented module.

| Subsystem | Primary choice | Alternates | Rationale |
| --- | --- | --- | --- |
| Compute | NXP i.MX 8M Plus SoM (e.g. SolidRun, Variscite, TechNexion) | Raspberry Pi CM5; Radxa RK3588 SoM | Documented ISP path already selected as the camera target (AOS-OPEN-091); public reference manuals; multiple SoM vendors |
| Cellular | Quectel EG25-G (mPCIe/M.2, LTE Cat 4) | Quectel EM05/EM060K; RM520N-GL for 5G data-only | Pre-certified, AT-command documented, PCM/ALSA voice audio, large community knowledge base (PinePhone lineage) |
| Camera | Sony IMX477-class module (Raspberry Pi HQ Camera / Arducam) on MIPI CSI-2 | e-con Systems or FRAMOS module with documented Sony/onsemi sensor | Documented sensor, RAW access, libcamera support, matches vendor list in [AOS-HW-006](AOS-HW-006.md) |
| Display/Touch | 5.5–6.5" MIPI-DSI panel with I2C capacitive touch | HDMI bridge panel as fallback | Phone-like demo surface; DSI exercises the real display contract |
| Audio | I2S codec + speaker/mic, wired to modem PCM for voice path | USB audio class fallback | Voice demo requires modem audio routing, not only network audio |
| Power | 1S/2S Li-ion pack with protected BMS board + USB-C PD charge IC | Off-the-shelf UPS HAT for CM5 | Battery and charging are demo-critical; protection stays on a certified BMS board |
| Debug | Exposed UART, USB, and reset accessible without disassembly | JTAG header under a service lid | A demo unit that cannot be recovered in the field is not admissible |
| Enclosure | 3D-printed, 15–22 mm thick, with antenna keep-out zones and airflow | CNC or SLS reprint for durability | Thickness is an accepted compromise recorded in the compromise ledger (AOS-HW-013) |

Two identical units are built. A demo target with only one irreplaceable unit cannot sit on the critical path, per [AOS-HW-001](HW-001-target-portfolio.md#minimum-portfolio).

<a id="baseline-bom"></a>

## Baseline Bill of Materials

Indicative single-unit costs for planning only; the BOM freeze task records exact SKUs, revisions, and quotes.

| Item | Indicative cost (USD) |
| --- | --- |
| Compute SoM + minimal carrier/adapter | 150–350 |
| Quectel LTE module + M.2 adapter + antennas (main/div/GNSS) | 60–120 |
| Camera module (IMX477-class, lens included) | 60–120 |
| MIPI-DSI display + touch | 50–120 |
| Audio codec board, speaker, microphones | 20–40 |
| Battery pack, BMS, USB-C PD charging | 40–80 |
| Cables, connectors, SIM socket, buttons, fasteners | 30–60 |
| 3D-printed enclosure iterations | 20–50 |
| **Per-unit total** | **≈ 430–940** |

Programme-level budget for two units, spares, one bench modem, and SIMs on two operators: roughly 2,500–4,000 USD — small enough to approve outside the ODM funding tranches ([AOS-PLAN-004#funding-tranches](AOS-PLAN-004.md#funding-tranches)).

<a id="cellular-strategy"></a>

## Cellular Strategy

The brick applies requirement R02 of [AOS-HW-007](AOS-HW-007.md): prefer externally connected documented modems for early native contracts.

- The modem is treated as an untrusted peripheral behind USB/PCIe transport, consistent with the modem-isolation obligations of AOS-CELL/AOS-OPEN-057.
- LTE packet data and SMS over documented AT/QMI/MBIM interfaces are the first-class demo capabilities.
- Voice is attempted through the modem's own voice support with PCM audio routed to the local codec. Success is recorded per operator and region; failure on a given operator is a bounded negative result, not a defect of the architecture.
- VoLTE/IMS behavior depends on module firmware and operator provisioning and is never presented as guaranteed. Successful packet data does not imply voice support ([glossary: IMS, VoLTE, VoWiFi](AOS-GLOSSARY.md#term-ims-volte-and-vowifi)).
- For high-stakes demonstrations, a second stock phone acting as a Wi-Fi hotspot is a permitted, openly documented sidecar fallback for connectivity; it is announced as such and never disguised as native cellular capability.

<a id="camera-strategy"></a>

## Camera Strategy

The camera is the brick's showcase subsystem and follows the portable imaging pipeline of [AOS-HW-006](AOS-HW-006.md#capture-path):

- A documented Sony/onsemi sensor on MIPI CSI-2 feeds the SoC's documented ISP (i.MX 8M Plus primary path).
- The Raspberry Pi + libcamera ecosystem is the reference open tuned pipeline: it is currently the only widely available imaging stack that is simultaneously open, documented, and production-tuned, and it serves as the tuning-methodology prior art for the portable pipeline.
- Tuning and calibration data are stored as versioned, device-specific assets with provenance, per R03 of [AOS-HW-012](AOS-HW-012.md#requirements).
- "Good camera" is defined by the fixed-scene comparison protocol of the calibration lab ([AOS-HW-006#calibration](AOS-HW-006.md#calibration)), not by demo-floor impressions; the demo target is credible daylight and indoor stills plus stable 1080p video, with computational low-light explicitly out of scope for v1.

<a id="certification-and-legal"></a>

## Certification and Legal Constraints

- Every radio in the brick (LTE module, Wi-Fi/BT on the SoM) is a pre-certified module carrying its own regulatory approvals and, for cellular, its own module IMEI/TAC. The programme does not invent production identifiers or copy identifiers from other devices ([glossary: IMEI and TAC](AOS-GLOSSARY.md#term-imei-and-tac)).
- Module pre-certification does not transfer final-device obligations; the brick is operated as engineering/demonstration equipment in small quantity, not sold, and antenna choices follow the module vendor's approved configurations to stay within the module grant.
- Commercial SIMs on public networks are used for data/SMS/voice testing in a normal subscriber role; no network experimentation beyond ordinary subscriber behavior is performed. Cellular legal boundaries follow [AOS-LEGAL-004](AOS-LEGAL-004.md#cellular-path).
- Emergency calling is out of scope and explicitly disclaimed on the device and in demos; a stock phone is physically present during any field demonstration.

<a id="demo-claims"></a>

## Demo Scope and Claim Limits

Public and internal language about the brick must distinguish:

| Claim | Permitted wording | Forbidden wording |
| --- | --- | --- |
| Identity | "demonstration device", "engineering brick" | "phone", "product", "handset" |
| Cellular | "LTE data and SMS on a documented module" | "full cellular support", "carrier certified" |
| Voice | "voice calls demonstrated on operators X, Y" | "calls work" (unqualified) |
| Camera | "documented-sensor pipeline with versioned tuning" | "flagship camera quality" |

<a id="requirements"></a>

## Requirements

- **R01.** Assemble the demo brick exclusively from documented, separately certified, purchasable modules with recorded SKUs and revisions.
- **R02.** Keep all module-specific wiring, firmware, and workarounds inside the board package and service backends; portable contracts remain the only upward interface.
- **R03.** Treat the modem as an untrusted peripheral; treat data and SMS as first-class, voice as best-effort per operator, and IMS/emergency as unmet gates.
- **R04.** Specify normal, partial, denied, timeout, cancellation, restart, upgrade, and permanent-failure behavior.
- **R05.** Expose structured diagnostics without leaking secrets or vendor-specific implementation details.
- **R06.** Link material unknowns to a claim and, when testable, an experiment with an owner and gate.
- **R07.** Update affected documentation and task data when evidence changes the model.

<a id="failure-and-degradation"></a>

## Failure and Degradation

Degradation must be explicit rather than accidental. The system reports capability absence, reduced quality, unavailable provider, stale data, or unsafe condition through typed states. It must not silently fall back to broader authority, unrestricted legacy execution, unverified firmware, lossy data migration, or irreversible agent action.

Demo-specific rules: modem crash, replug, or SIM change must degrade to a typed "cellular unavailable" state with the rest of the device fully usable; battery and thermal limits must throttle or shut down visibly rather than corrupt state; the hotspot sidecar fallback is a declared mode, never an automatic silent substitution.

Recovery defines what state is retained, reconstructed, re-enrolled, compensated, or intentionally discarded. Unsupported hardware or providers are rejected at binding time where possible.

<a id="evidence-and-acceptance"></a>

## Evidence and Acceptance

- Frozen BOM with exact SKUs, revisions, quotes, and supplier links.
- Reproducible assembly, flash, and recovery instructions verified by a second person on the second unit.
- Cold boot to interactive UI on battery; suspend/wake; a full demo day (≥ 6 h mixed use) on one charge recorded.
- LTE attach, data, and SMS on at least two operators; voice attempts recorded per operator with pass/fail and traces.
- Camera captures from the fixed-scene corpus with versioned tuning assets and a reference-device comparison.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, seed, timestamps, artifacts, expected result, actual result, and reviewer.
- Acceptance requires the referenced tasks to meet their own criteria; prose completion is not implementation completion.

<a id="market-intelligence"></a>

## Market Intelligence Baseline (2026-07)

Findings that motivated this document and require catalog updates:

- **PinePhone Pro discontinued (August 2025)** due to low sales; original PinePhone production is expected to continue for roughly two more years. AOS-OPEN-094 (PinePhone Pro dossier refresh) must record end-of-life status, spare-mainboard strategy, and a substitution recommendation.
- **FLX1 (Furi Labs)** — Snapdragon 7c Gen 2, 6 GB RAM, dual-SIM 5G, unlockable bootloader via developer mode, Debian-based vendor OS; camera limited to a basic libcamera pipeline without computational photography. Candidate for admission review in [AOS-HW-011](AOS-HW-011.md#candidates) as a phone-form bridge.
- **postmarketOS trajectory** — generic mainline-kernel strategy and ~254 devices in the 26.06 release; community-tier devices (Fairphone 4, OnePlus 6/6T, PinePhone family) remain the strongest donor-device prior art. Camera remains the weakest subsystem across donor devices, reinforcing the brick's documented-ISP camera strategy over any donor-phone camera plan.
- **Quectel EG25-G ecosystem** — mature community knowledge (ModemManager integration, the Biktorgj open firmware project) makes it the lowest-risk voice-capable module; this knowledge is prior art to consult, not firmware to redistribute.

<a id="community-channels"></a>

## Community Channels

Channels worth monitoring and, where appropriate, engaging under the research-provenance rules of [AOS-RES-001](AOS-RES-001.md):

- postmarketOS Matrix rooms, wiki, and device pages (donor-device and modem prior art).
- Pine64 forum and community chats (PinePhone modem/audio routing lineage; EOL and spare-parts intelligence).
- libcamera mailing list and IRC (ISP and tuning expertise; portable pipeline prior art).
- ModemManager and Biktorgj EG25-G firmware communities (modem behavior, AT/QMI edge cases).
- Furi Labs community channels (FLX1 bring-up and bootloader policy).
- Hackaday.io DIY-handheld projects (CM4/CM5 phone builds; enclosure and battery patterns).
- LINMOB.net weekly and r/linuxmobile (ecosystem digest).

<a id="pixel9-relationship"></a>

## Relationship to the Pixel 9 Archive

The Pixel 9 native route is archived per [ADR-0007](../decisions/ADR-0007-archive-pixel-9-route.md#decision). The demo brick takes over the "walk-around showcase" role that the Pixel route would otherwise have carried, without inheriting its legal, documentation, and access risks. Pixel documentation, dossiers, and the ADR-0004 quarantine rules remain in the corpus unchanged so the route can be reactivated under the conditions listed in ADR-0007.

<a id="implementation-obligations"></a>

## Implementation Obligations

Proposed intake tasks for the task register (IDs reserved here; ownership, scheduling, and milestones assigned at intake):

| Task | Obligation | Priority | Gate/Milestone | Verification |
| --- | --- | --- | --- | --- |
| AOS-DEMO-001 | Freeze demo-brick BOM, suppliers, and per-unit budget; purchase two unit sets plus spares | P1 | intake | Quote records, SKU/revision dossier, second-person review |
| AOS-DEMO-002 | Bring up compute + display + touch + battery in the printed enclosure | P1 | intake | Cold boot on battery, suspend/wake, recovery from external instructions on both units |
| AOS-DEMO-003 | Integrate the LTE module with the native cellular service for data and SMS | P1 | intake | Registration/data/SMS on two operators; crash/replug/SIM-change degradation tests |
| AOS-DEMO-004 | Demonstrate best-effort voice via modem PCM audio routing | P2 | intake | Per-operator pass/fail matrix with traces; typed unsupported states |
| AOS-DEMO-005 | Stand up the documented-sensor camera pipeline with versioned tuning on the brick | P1 | intake | Fixed-scene corpus captures, reference comparison, calibration provenance |
| AOS-DEMO-006 | Produce the demo script, claim-limit card, and field-recovery kit | P2 | intake | Dry-run demo by a person other than the builder; fallback modes rehearsed |

Dependencies to reuse rather than duplicate: AOS-OPEN-091 (i.MX 8M Plus camera dossier), AOS-PLAT-041 (power contracts), AOS-OPEN-057/AOS-CELL-070 (modem and cellular product integration), AOS-OPEN-060 (community kit rehearsal).

<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- Voice on a given operator may fail for provisioning reasons outside the programme's control; the demo narrative must survive a data+SMS-only day.
- Module vendors can silently revise firmware or discontinue SKUs; the frozen BOM and spare units mitigate but do not remove this.
- A demo device attracts "when can I buy it" pressure that can distort claims; the claim-limit table is normative.
- Antenna placement in a 3D-printed enclosure can degrade RF performance below the module grant's assumptions; keep-out zones and vendor antenna guidance are mandatory.
- Thermal behavior of an SoM in a sealed printed enclosure under camera + LTE load is unmeasured until AOS-DEMO-002/005.
- **Open-question rule:** an unanswered high-impact question becomes a claim/experiment record and cannot be hidden in meeting notes.
- **Stop rule:** work stops or changes track when legal rights, recovery, debug access, safety, or the required evidence path is unavailable.

<a id="related-documents"></a>

## Related Documents

- [Product vision](AOS-VSN-001.md#product-thesis)
- [Portable system architecture](AOS-ARCH-001.md#system-boundary)
- [Portable device-service contracts](AOS-ARCH-020.md#contract-set)
- [Hardware portfolio](HW-001-target-portfolio.md#portfolio)
- [Camera architecture](AOS-HW-006.md)
- [Native cellular stack](AOS-HW-007.md)
- [Custom device and ODM readiness](AOS-HW-008.md)
- [Decision gates](AOS-PLAN-006.md#decision-gates)
- [Claim register](AOS-RES-003.md#claim-register)
- [ADR-0007: Archive the Pixel 9 native route](../decisions/ADR-0007-archive-pixel-9-route.md)

<a id="planning-reference-anchors"></a>

## Planning Reference Anchors

These fine-grained anchors give the execution plan stable links into this specification. They are normative pointers: the linked canonical section remains the full requirement source.

<a id="demo-bom"></a>

### Demo BOM

For planning, conformance, and task cross-references, **Demo BOM** denotes the part of this specification governed primarily by [Baseline Bill of Materials](#baseline-bom). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="demo-cellular"></a>

### Demo Cellular

For planning, conformance, and task cross-references, **Demo Cellular** denotes the part of this specification governed primarily by [Cellular Strategy](#cellular-strategy). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="demo-camera"></a>

### Demo Camera

For planning, conformance, and task cross-references, **Demo Camera** denotes the part of this specification governed primarily by [Camera Strategy](#camera-strategy). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="demo-claims-anchor"></a>

### Demo Claims

For planning, conformance, and task cross-references, **Demo Claims** denotes the part of this specification governed primarily by [Demo Scope and Claim Limits](#demo-claims). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.
