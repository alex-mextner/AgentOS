---
id: "AOS-HW-018"
title: "Demo Brick V1 Configuration Baseline"
status: "Normative planning baseline"
version: "1.6.0"
baseline_date: "2026-07-13"
owners: "Agent OS Architecture Council"
audience: "Engineering, product, security, legal, and program leadership"
summary: "Frozen V1 configuration for the interim demo brick: CM5 compute with native (non-Linux) OS independence notes, portless industrial design, soldered consumer eUICC (true eSIM), NVMe storage expansion, SurfaceVolume gesture control, Taptic-class haptics-as-audio with software prior art, IR blaster, optional sensor bay, far-field audio subsystem, thermal design, and parametric enclosure CAD strategy."
---

# Demo Brick V1 Configuration Baseline

> This baseline freezes the founder-selected V1 configuration of the interim demo brick ([AOS-HW-017](HW-017-interim-demo-device.md)): a Raspberry Pi CM5 core in a portless 3D-printed body, with gesture-based volume, an internal eUICC instead of a SIM tray, and a far-field, agent-grade audio subsystem.

## Table of Contents

- [Purpose and Scope](#purpose-and-scope)
- [Normative Position](#normative-position)
- [OS Independence on CM5](#os-independence)
- [V1 Configuration Table](#v1-configuration)
- [Portless Industrial Design](#portless-design)
- [Cellular Identity Without a SIM Tray](#internal-euicc)
- [SurfaceVolume Gesture Specification](#surfacevolume)
- [Audio Subsystem](#audio-subsystem)
- [Authentication and Secure Element](#authentication)
- [Sensor Set](#sensor-set)
- [Thermal Design](#thermal-design)
- [Enclosure CAD Strategy](#enclosure-cad)
- [Power Design](#power-design)
- [Requirements](#requirements)
- [Failure and Degradation](#failure-and-degradation)
- [Evidence and Acceptance](#evidence-and-acceptance)
- [System-Level Problem Review](#problem-review)
- [Recorded Future Directions](#future-directions)
- [Risks and Open Questions](#risks-and-open-questions)
- [Related Documents](#related-documents)
- [Planning Reference Anchors](#planning-reference-anchors)

<a id="purpose-and-scope"></a>

## Purpose and Scope

**Area:** Hardware Programme.

This document records the concrete V1 component and interaction decisions for the demo brick. [AOS-HW-017](HW-017-interim-demo-device.md) remains the governing specification for role, claims, certification, and evidence; this baseline narrows its reference architecture to one buildable configuration. Where the two disagree, AOS-HW-017 governs semantics and this document governs the V1 parts list.

This document owns the semantics implied by **Demo Brick V1 Configuration Baseline**. It does not assert that every described subsystem already exists. It defines the target model, constraints, evidence needed to trust an implementation, and the boundary with adjacent documents.

<a id="normative-position"></a>

## Normative Position

1. V1 compute is the Raspberry Pi Compute Module 5 (16 GB RAM / 64 GB eMMC / Wi-Fi variant); the i.MX 8M Plus path of AOS-HW-017 remains the documented-ISP alternate, not the V1 build.
2. The exterior carries exactly one connector (USB-C) and exactly two buttons (lock, hardware mute); there is no SIM tray, headphone jack, microSD slot, or volume buttons.
3. Volume is controlled by the SurfaceVolume gesture (three-finger vertical swipe), staged from screen to back cover to side rails, with a permanent on-screen accessibility fallback.

<a id="os-independence"></a>

## OS Independence on CM5

The demo brick runs the native Agent OS, not Linux. The CM5 platform is admissible for this precisely because its documentation posture is unusual for consumer silicon:

- Raspberry Pi has published the **PiSP image signal processor specification** and the **RP1 southbridge peripherals datasheet**, so the camera pipeline and most I/O peripherals can be driven by native Agent OS drivers written from public documentation.
- The boot chain (BCM2712 boot ROM plus the EEPROM bootloader) loads an arbitrary kernel image; it is a closed but OS-agnostic component, recorded as a compromise in the AOS-HW-013 ledger together with the Wi-Fi/BT firmware blobs, which are required regardless of the operating system.
- The full BCM2712 technical reference is not public; gaps are filled from the RP1/PiSP documents, published open-source drivers as *reference reading*, and bounded experiments — never by linking Linux code into portable layers.
- Linux with libcamera is used only as a **bench oracle**: a known-good stack on identical hardware for image-quality and behavior comparison, exactly analogous to the Pixel stock-oracle rule of [ADR-0004](AOS-ADR-0004.md#decision). No Linux userland or kernel component ships on the demo brick.

<a id="v1-configuration"></a>

## V1 Configuration Table

| Subsystem | V1 selection | Notes |
| --- | --- | --- |
| Compute | Raspberry Pi CM5, 16 GB RAM / 64 GB eMMC / Wi-Fi+BT | Wi-Fi/BT on-module; RTC on-module (coin cell required) |
| Carrier | Compact CM5 carrier exposing PCIe as M.2 M-key, USB for the modem, dual CSI, DSI | Exact board selected at BOM freeze; M.2 M-key is a hard requirement for storage |
| Storage expansion | NVMe SSD, M.2 2230 bare board, 1 TB quality tier: WD SN740/SN770M, Corsair MP600 Mini, Kioxia BG5 class | eMMC size is fixed at module purchase; NVMe is the only expansion path. CM5 PCIe is x1 Gen2/Gen3, so sequential speed is host-capped — select for power efficiency and sustained-write behavior, not peak benchmarks. OS on eMMC, capture data and RAW bursts on NVMe |
| Display/Touch | Waveshare 6.25" DSI LCD, 720×1560, capacitive multitouch | Phone aspect ratio; native MIPI-DSI; verify current SKU/revision at BOM freeze. Fallback: Raspberry Pi Touch Display 2 (7", 720×1280) |
| Camera (main, rear) | **StarlightEye — Sony IMX585 (Starvis 2, 1/1.2", 4K)** open-hardware module by Will Whang; 4-lane MIPI CSI-2, switchable IR filter, M12/CS lens | Founder decision: top computational-photography sensor within the ≤$300 camera budget; class-leading low light and dynamic range; open KiCad hardware + open driver + tuning; manual/M12 focus (no AF) is the recorded trade-off; CM5 bring-up is experiment-gated (board is specified for Pi 5 / CM4 4-lane pinout) |
| Camera (second: front/wide, AF) | Raspberry Pi Camera Module 3 (Sony IMX708) | Tuned pipeline, phase-detect AF, HDR; carries video calls and quick AF shots while IMX585 carries showcase stills |
| Camera (big-sensor alternate) | OneInchEye — Sony IMX283 (1", 20 MP), same open ecosystem | Admitted only if IMX585 evidence shows resolution as the binding constraint |
| Camera (lab reference) | Raspberry Pi HQ Camera (Sony IMX477) | Bench/calibration only |
| Cellular | Quectel EG25-G on M.2 adapter (per AOS-HW-017); alternate: Waveshare SIM7600G-H HAT with onboard voice codec | A/B resolved at AOS-DEMO-003/004; GNSS provided by the modem; two LTE antennas + GNSS antenna |
| Cellular identity | Internal removable eUICC card + open-source LPA (lpac) | See [Cellular Identity Without a SIM Tray](#internal-euicc) |
| Microphones | 4× MEMS array on XMOS XVF3800 voice processor | AEC, beamforming, direction-of-arrival; I2S or USB-audio to CM5 |
| Speakers | 2× micro-speakers on TI TAS2563 smart amplifiers | IV-sense speaker protection; printed acoustic back volumes ≈1 cm³ per driver |
| Haptics | Taptic-class wideband voice-coil linear actuator (genuine iPhone Taptic Engine spare part or high-end X-axis LRA), driven as a dedicated audio channel through a small class-D amplifier | Founder decision: ERM-class vibration motors are rejected; DRV2624-class closed-loop driver is the alternate drive path; see [Audio Subsystem](#audio-subsystem) |
| Sensors | LSM6DSV16X IMU; magnetometer; BMP390 barometer; ALS+proximity (VCNL4040-class); NXP PN7150 NFC | IMU ML core reserved for tap/gesture experiments |
| IR blaster | 940 nm IR LED + driver transistor (TX) and TSOP38238-class receiver (RX) behind a printed IR window | Universal-remote agent demos; RX enables learning existing remotes |
| Buttons | Lock (power/wake); hardware mute | Mute physically cuts microphone power (kill-switch semantics) |
| Port | Single USB-C | Charging, data, debug (UART via debug accessory); no other external ports |
| Battery | Option A: quality 1S Li-Po pouch 5000–8000 mAh; Option B: 2× 21700 high-density Li-ion cells in parallel (≈10 Ah) with 1S BMS | Li-ion remains the density king at retail: LiFePO4/sodium are worse Wh/L, solid-state is not purchasable. Watch silicon-carbon (Si/C) pouch cells from flagship supply chains reaching retail — adopt when buyable. Fuel gauge (MAX17048-class); USB-C PD charge controller |
| Enclosure | 3D-printed PETG/ABS/PC, aluminum midframe plate | PLA is prohibited (glass transition ≈60 °C); antenna keep-out zones per module vendor guidance |

<a id="portless-design"></a>

## Portless Industrial Design

Deliberately absent from the exterior: SIM tray, 3.5 mm jack, microSD slot, and volume buttons. Consequences that must be engineered rather than discovered:

- Audio output without a jack is speakers, Bluetooth, or USB-C; demo scripts must not assume wired headphones.
- Bulk storage lives on the internal NVMe SSD; offload is over USB-C or Wi-Fi, and the eMMC holds only the OS.
- Volume control depends on SurfaceVolume plus its on-screen fallback; there is no mechanical recovery path for audio level.
- Operator changes are pure software (eSIM profile operations via lpac); physical service (battery, NVMe, debug headers) requires opening the case, which must be a tool-light, documented, repeatable procedure.

<a id="internal-euicc"></a>

## Cellular Identity Without a SIM Tray (True eSIM)

**Founder decision: no SIM slot anywhere in the user-facing design.** LTE still requires a subscriber identity, so V1 implements a genuine consumer eSIM:

- The eUICC is a **consumer SGP.22 chip with GSMA production certificates**, sourced as a solder-type MFF2 part (sysmoEUICC1-CMG class — the rare purchasable low-quantity consumer eUICC in MFF2) or, for the V1 hand-built stage, the same eUICC in triple-cut card form (sysmoEUICC1-C2G class) seated in the modem adapter's on-board socket, fully enclosed and invisible to the user.
- Profile management uses the open-source LPA client **lpac** on the Agent OS host: the eUICC itself carries no LPA, so profile download (QR-code activation), enable/disable, and delete are host software operations — no case opening, no tray.
- V2 (custom carrier PCB) solders the MFF2 part directly on the SIM lines, eliminating the socket entirely.
- Known risk: some operators restrict eSIM profile delivery to allow-listed device EIDs; per-operator behavior is recorded as evidence, and a bench-only test SIM path (external fixture, never in the enclosure) remains available for operator debugging.
- All identifiers follow the IMEI/TAC rules of [AOS-HW-017#certification-and-legal](HW-017-interim-demo-device.md#certification-and-legal): the module's own identity is used; nothing is invented or copied.

<a id="surfacevolume"></a>

## SurfaceVolume Gesture Specification

**Founder decision (recorded 2026-07-13).** Volume is adjusted with a three-finger vertical swipe — up for louder, down for quieter — ideally recognized on any surface of the device: screen, back cover, and side rails.

Staged implementation:

| Stage | Surface | Mechanism | Gate |
| --- | --- | --- | --- |
| V1 | Screen | Pure software: three-finger vertical swipe recognized by the input service above the touch driver | Ships with first build |
| V1.5 | Back cover | Capacitive electrode matrix on flex PCB laminated inside the printed cover (≤2.5 mm plastic), trackpad controller of the Azoteq IQS550/IQS7211 class | Prototype detects a three-finger swipe through the actual printed cover material with <5% false-positive rate in pocket/grip tests |
| V2 | Side rails | Capacitive strip sensors along both rails | Same false-positive gate; grip rejection proven |

Rules:

- A visible on-screen volume control remains permanently available as the accessibility and failure fallback; SurfaceVolume augments, never replaces, it.
- Gesture recognition is suppressed when the proximity sensor reports at-ear state and during pocket detection, to prevent phantom volume changes.
- Every gesture-driven change produces haptic and on-screen feedback with a short undo window, consistent with the reversibility principles of the product runtime.
- The IMU's embedded tap/gesture engine may be evaluated as a low-power pre-trigger, but capacitive sensing is the normative mechanism for swipe recognition on non-screen surfaces.

<a id="audio-subsystem"></a>

## Audio Subsystem

Audio is a first-class agent interface, not an accessory. The V1 subsystem is therefore specified at "small smart-speaker" quality rather than "hobby board" quality:

- **Capture.** Four MEMS microphones (high-SNR, IM69D130-class) arranged as a rectangular array, processed by an XMOS XVF3800 voice processor providing acoustic echo cancellation, beamforming, noise suppression, and direction-of-arrival. The processed stream reaches the CM5 as a clean digital capture device; raw per-microphone channels remain accessible for the portable audio pipeline's own experiments.
- **Playback.** Two micro-speakers, each driven by a TI TAS2563 smart amplifier with IV-sense excursion protection over I2S/TDM. Each driver gets a sealed printed back volume of roughly 1 cm³ tuned during enclosure iteration; a speaker without a designed acoustic chamber is a defect, not a compromise.
- **Voice calls.** The modem PCM path is bridged into the same digital audio graph so cellular voice uses the array's AEC rather than a separate narrowband path.
- **Haptics as audio (Taptic-class).** The haptic actuator is a wideband voice-coil linear motor (genuine iPhone Taptic Engine spare part, or an equivalent X-axis LRA) treated as one more output channel of the audio graph: waveforms are synthesized like sound and delivered through a dedicated class-D amplifier channel, giving full-bandwidth control of texture, attack, and decay — the architecture used by flagship-phone haptic drivers. The alternate path is a closed-loop haptic driver IC (TI DRV2624 class) with on-chip waveform memory and resonance tracking. ERM motors and simple buzz patterns are rejected outright; every haptic event is a designed waveform asset, versioned like camera tuning.
  - *Software prior art (recorded).* No Apple software exists or is needed to drive a Taptic Engine — it is a passive voice-coil actuator. Open references: Apple's AHAP haptic-pattern format is documented JSON, so an open AHAP→PCM-waveform converter is a planned utility; the Cirrus Logic CS40L2x haptic-driver code in the open Linux kernel tree is the engineering reference for closed-loop, audio-coupled haptic drive; the AOSP vibration stack (Apache-2.0) is the API-shape reference for effect primitives and envelopes. Waveform authoring uses ordinary open audio tooling; assets are versioned with provenance like camera tuning files.
- **Mute.** The hardware mute button cuts microphone power ahead of the XVF3800, giving kill-switch semantics that the OS reports as a typed capability-absent state.

<a id="authentication"></a>

## Authentication and Secure Element

**Founder decision: camera-based face unlock is rejected as an authentication factor** — 2D face video is not reliable against presentation attacks and structured-light/ToF FaceID-class hardware is not purchasable at prototype scale. V1 authentication:

- **Root secret:** device PIN/passphrase, always sufficient on its own; biometrics are convenience factors layered on top, never the sole path.
- **Fingerprint:** capacitive match-on-module sensor (R503-class, ~$20) mounted in the lock button area. Honest trust posture, recorded: matching happens on the module's own MCU and the "matched" signal crosses a UART — this is demo-grade biometrics, hardened by host-side rate limiting, binding the module's serial/keys at enrollment, and treating a match as unlocking a *host-held* secret rather than as authority itself. Phone-grade match-in-TEE is explicitly out of scope for V1.
- **Secure element (device root of trust):** primary — Zymbit Zymkey 4i class (Raspberry Pi–specific HSM: key storage, tamper detection, battery-backed RTC, ~$45); board-level alternates — NXP SE050/EdgeLock or Microchip ATECC608B breakouts ($5–20) and an SPI TPM 2.0 module (SLB9670 class). Disk-encryption keys and identity keys are sealed in the SE and released only by PIN (optionally accelerated by fingerprint); the SE is a typed service behind the portable contracts, replaceable per vendor rules.
- **Threat-model note:** with a closed boot ROM and no verified-boot chain on CM5, the SE protects keys at rest and against casual extraction, not against a fully compromised host; this limit is stated in demos and recorded in the compromise ledger.

<a id="sensor-set"></a>

## Sensor Set

- **IMU:** LSM6DSV16X (accelerometer + gyroscope with embedded ML core) for orientation, tap, and gesture experiments.
- **Magnetometer** for heading; **BMP390** barometer — barometric context is a phone staple: floor/elevator detection, faster and more accurate GNSS altitude, pressure-trend awareness, and step/stair inference for the agent's situational model.
- **Ambient light + proximity** (VCNL4040-class): display brightness, at-ear suppression of SurfaceVolume and touch.
- **NFC:** NXP PN7150 (mainline-friendly Linux support) for tap interactions and future identity experiments.
- **IR blaster:** 940 nm LED (TX) + TSOP38238-class receiver (RX) — the "universal remote" agent capability; RX allows learning codes from existing remotes.
- **GNSS:** provided by the EG25-G modem; no separate receiver in V1.

**Tier-2 optional sensor bay.** The carrier reserves headers and enclosure volume for showcase sensors, admitted individually only with a demo story and a typed capability (never as silent always-on inputs):

| Sensor | Class part | What it gives the agent |
| --- | --- | --- |
| Multizone ToF depth | VL53L5CX/L8CX (8×8 zones) | Mini depth camera: air gestures, presence, camera AF assist |
| mmWave presence radar | LD2410/LD2450 24 GHz | Soli-style presence and micro-motion sensing through the case |
| UWB | DWM3000 class | Precise spatial anchors and "point at device" interactions |
| Air quality | BME688 (gas + on-sensor AI) or SCD41 (CO₂) | Environment context, ventilation nudges |
| Thermal imager | MLX90640 (32×24) | Showcase demos: heat leaks, cooking, electronics debug |
| Lightning detector | AS3935 | Storm warning conversation piece |

**Device finding (Find My analog).** There is no single "Find My sensor" — the capability is BLE + UWB plus software. V1 path: BLE (already on CM5) for coarse discovery and "last seen"; UWB (DWM3000-class) for precision finding via two-way ranging — a hot/cold distance readout with haptic feedback. True direction arrows (AoA/PDoA) need multi-antenna UWB hardware and are out of V1 scope. Software prior art: Qorvo DW3000 SDK and API examples; Zephyr and Apache NimBLE BLE stacks; OpenHaystack (research project that makes DIY beacons findable through Apple's Find My network — study-only, terms-of-service gray zone, recorded as prior art not a dependency); Google's Find My Device network specifications (partially public) as the ecosystem reference.

**mmWave software prior art.** LD2410/LD2450 presence radars expose a vendor-documented UART protocol with mature open integrations (ESPHome components, Home Assistant, community Python libraries) — presence/micro-motion is essentially a solved software problem at $5 hardware cost. For real gesture radar (Soli-class), the serious open path is a TI IWR6843 evaluation module with the TI mmWave SDK plus the OpenRadar open-source Python toolkit for raw radar processing; Google Soli itself is closed, but its published papers are the concept reference. Radar data is treated like microphone data: typed capability, explicit indicator, never silent always-on.

<a id="thermal-design"></a>

## Thermal Design

- The aluminum midframe plate is the primary heat spreader: SoC, modem, and amplifier thermal pads couple into it; the plate couples to the enclosure interior with ventilation slots along the top edge.
- Enclosure material is PETG, ABS, or polycarbonate; PLA is prohibited anywhere in the thermal path or structural shell.
- A sustained SoC budget (target ≈3–4 W under camera + LTE load) is enforced by the power/thermal service; throttling is a typed, visible state per [AOS-HW-017](HW-017-interim-demo-device.md#failure-and-degradation).
- An optional micro-blower footprint is reserved on the midframe for a "demo turbo" variant but is not part of V1 acceptance.

<a id="enclosure-cad"></a>

## Enclosure CAD Strategy

No off-the-shelf "generative phone case" tool exists; the enclosure is therefore a **parametric CAD program** (OpenSCAD or CadQuery), not a static STL, so that every geometry change regenerates dependent features:

- **Speaker chambers:** sealed back volumes (~1 cm³ class) generated from a sealed-box calculation per driver, with the port/grille pattern derived from the driver footprint; a speaker without a designed chamber is a defect.
- **Antenna windows and keep-outs:** LTE/GNSS/Wi-Fi window zones and metal keep-outs generated from module-vendor hardware design guides; the aluminum midframe is cut back automatically around them.
- **Moisture protection (splash class, no IP claim):** generated gasket groove for silicone O-ring cord or neutral-cure silicone; sealed button membranes; acrylic conformal coating on assembled boards; drainage mesh over speaker and mic ports.
- **Assembly features:** heat-set brass insert bosses, midframe registration pins, FFC routing channels, service-opening path per the portless-design rule.
- **Open CAD prior art (studied, not copied):** MNT Pocket Reform (fully open mechanical CAD), ClockworkPi uConsole shell, Beepy — the best available references for printed portables with speakers, antennas, and batteries.

<a id="power-design"></a>

## Power Design

Single USB-C port carrying PD charging, data, and debug. Charge controller (BQ25792-class) + fuel gauge (MAX17048-class) + a 1S pack per the battery options in the configuration table (pouch for thinness, dual-21700 for maximum capacity and cell replaceability). Chemistry decision recorded: stay on Li-ion; nothing retail beats it on Wh/L — LiFePO4 and sodium are denser-rejected, solid-state is unavailable; silicon-carbon pouches are the watch item. Acceptance targets inherit from AOS-HW-017: cold boot on battery, suspend/wake, and a ≥6 h mixed-use demo day.

<a id="problem-review"></a>

## System-Level Problem Review

Founder-requested sweep of "what will bite us"; each item is a claim/experiment candidate, ordered by severity.

**P1 — Idle power (the biggest one).** CM5 has no phone-grade suspend: a Pi-class board idles at watts, not milliwatts, so a 5 Ah pack gives hours of standby, not days. Mitigations: aggressive display/radio gating, undervolt/clock floors, a "pocket state" that suspends to RAM where driver support allows, and honest demo expectations (a demo day, not a standby week). This is addressed structurally by the heterogeneous power architecture in [AOS-HW-019](HW-019-power-architecture-standby.md): an always-on MCU island hard-gates the CM5 and radios, turning hours-of-idle into days-of-standby. The bare-CM5 gap is real but is a design input, not the final story.

**P2 — Wi-Fi hotspot / tethering (founder requirement: must fully work).** No special modem is needed: the modem only supplies the WAN data pipe (USB/QMI or PCIe); a hotspot is the Wi-Fi radio in AP mode plus NAT/routing in the network service. Two real constraints instead: (a) the CM5 onboard Wi-Fi (CYW43455-class) supports AP mode, but *simultaneous* STA+AP on one radio is channel-locked and fragile — for the "receive Wi-Fi and re-share it" repeater case, and for robust LTE-hotspot-while-connected, V1 adds a second Wi-Fi radio (MT7612U/MT7921AU-class USB module with strong open AP support); (b) operators police tethering via plan terms and traffic inspection — the working plan is to use a subscription whose terms permit tethering (open the tethering allowance on the SIM/plan) rather than to defeat detection; hotspot behavior is verified per operator, and any throttling is an operator/plan finding.

**P3 — Single USB-C for charge + data.** Charging while a demo uses USB peripherals requires a proper PD path with a data mux; the ReSpeaker in I2S mode (not USB) keeps the external port free. Design rule: external USB-C is PD sink + debug; all internal peripherals live on carrier USB/I2S/PCIe.

**P4 — RF coexistence.** Two LTE antennas, GNSS, Wi-Fi, BT, and a UWB option inside one printed brick with an aluminum midframe: desense and coupling are guaranteed without discipline. Antenna keep-outs, separation per module design guides, and a coexistence test (LTE transfer while Wi-Fi hotspot and BT audio run) gate the enclosure design.

**P5 — Modem voice audio path.** Bridging modem PCM into the XVF3800 AEC graph is the fiddliest wiring in the build; fallback is the SIM7600 HAT's onboard codec path with reduced AEC quality, recorded as degraded-typed.

**P6 — StarlightEye on CM5.** Board is specified for Pi 5/CM4 4-lane pinout; CM5 bring-up is experiment-gated before BOM freeze commits the main camera.

**P7 — Native driver surface.** Display (DSI panel init), touch (I2C), PiSP camera, Wi-Fi firmware interface, and NVMe each need native Agent OS drivers; the RP1/PiSP documentation makes this tractable but the sum is the real schedule risk, ahead of any single part.

**P8 — Sourcing fragility.** Tindie single-maker camera stock, sysmocom sample quantities, parallel-import CM5 in Moscow: every unique-source row carries a spare-unit rule.

<a id="future-directions"></a>

## Recorded Future Directions (non-normative)

Founder intentions logged for V3+; they shape V1 choices but carry no V1 acceptance weight:

- **Foldable form factor** with a **single end-edge camera** serving both selfie and main photography via the fold — enabling one large sensor with a real lens instead of two compromised modules. The IMX585 big-sensor decision is deliberately compatible with this direction.
- **Display strategy question (open, claim-tracked):** flexible panel vs two tiled panels. Physics of tiling: every panel has a border (driver circuitry, encapsulation), so butting two displays leaves a 3–6 mm seam — fine for two-app layouts (Surface Duo prior art), unacceptable for one continuous canvas; seamless tiling awaits microLED-class tech. Crease-free flexible displays are the frontier Apple is reportedly attacking with a liquid-metal (amorphous "metallic glass") die-cast hinge, a stress-dispersing metal plate under the panel, a dual-layer UTG/UFG glass sandwich with the display layer decoupled from the hinge, a self-healing top layer, and a <0.15 mm crease-depth target — recorded here as research pointers, each an unverified vendor-leak claim until evidenced.

<a id="requirements"></a>

## Requirements

- **R01.** Build V1 exactly from the configuration table; substitutions require a recorded decision with re-verification of affected evidence.
- **R02.** Keep the exterior limited to one USB-C port and two buttons; every removed affordance has an engineered replacement documented in this baseline.
- **R03a.** Treat LTE→Wi-Fi hotspot as a first-class capability: AP mode with NAT in the network service, second Wi-Fi radio for concurrent STA+AP/repeater use, per-operator tethering evidence.
- **R03.** Implement SurfaceVolume in stages with the stated gates, preserving the on-screen fallback and at-ear/pocket suppression at every stage.
- **R04.** Specify normal, partial, denied, timeout, cancellation, restart, upgrade, and permanent-failure behavior.
- **R05.** Expose structured diagnostics without leaking secrets or vendor-specific implementation details.
- **R06.** Link material unknowns to a claim and, when testable, an experiment with an owner and gate.
- **R07.** Update affected documentation and task data when evidence changes the model.

<a id="failure-and-degradation"></a>

## Failure and Degradation

Degradation must be explicit rather than accidental. The system reports capability absence, reduced quality, unavailable provider, stale data, or unsafe condition through typed states. It must not silently fall back to broader authority, unrestricted legacy execution, unverified firmware, lossy data migration, or irreversible agent action.

Configuration-specific rules: loss of the capacitive gesture surface degrades to screen gestures plus the on-screen control; XVF3800 failure degrades capture to a single raw microphone with a visible quality warning; hardware mute always wins over any software audio state.

Recovery defines what state is retained, reconstructed, re-enrolled, compensated, or intentionally discarded. Unsupported hardware or providers are rejected at binding time where possible.

<a id="evidence-and-acceptance"></a>

## Evidence and Acceptance

- Frozen V1 BOM with SKUs, revisions, and quotes (extends the AOS-HW-017 BOM freeze).
- SurfaceVolume stage gates passed with recorded false-positive/false-negative rates per surface.
- Audio evidence: AEC convergence during speaker playback, beamforming pickup at 1 m and 3 m, cellular voice through the array path, speaker protection engaging under sweep tests.
- Thermal evidence: sustained camera + LTE workload without enclosure deformation and with typed throttling only.
- eUICC evidence: profile download, switch, and fallback-to-physical-SIM demonstrated on at least one operator.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, seed, timestamps, artifacts, expected result, actual result, and reviewer.
- Acceptance requires the referenced tasks to meet their own criteria; prose completion is not implementation completion.

<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- The Raspberry Pi ISP path is open and tuned but register-level documentation is thinner than i.MX 8M Plus; the documented-ISP alternate stays alive for that reason.
- Capacitive sensing through printed covers is sensitive to material, infill, and moisture; V1.5 may force a cover-material change.
- Consumer eUICC cards occupy a gray zone with some operators; the physical-SIM fallback is mandatory, and operator behavior is recorded per region.
- Three-finger swipes on side rails may be anatomically awkward one-handed; V2 admission depends on usability evidence, not on the aesthetic of the idea.
- A single USB-C port is a single point of failure for charge, data, and debug; the internal debug header must remain reachable after assembly.
- **Open-question rule:** an unanswered high-impact question becomes a claim/experiment record and cannot be hidden in meeting notes.
- **Stop rule:** work stops or changes track when legal rights, recovery, debug access, safety, or the required evidence path is unavailable.

<a id="related-documents"></a>

## Related Documents

- [Interim demo device](HW-017-interim-demo-device.md)
- [Camera architecture](AOS-HW-006.md)
- [Native cellular stack](AOS-HW-007.md)
- [Hardware portfolio](AOS-HW-001.md#portfolio)
- [Interim hardware market survey](../research/RES-011-interim-hardware-market-survey.md)
- [Claim register](AOS-RES-003.md#claim-register)

<a id="planning-reference-anchors"></a>

## Planning Reference Anchors

<a id="v1-config"></a>

### V1 Config

For planning, conformance, and task cross-references, **V1 Config** denotes the part of this specification governed primarily by [V1 Configuration Table](#v1-configuration) together with [Portless Industrial Design](#portless-design).

<a id="surfacevolume-anchor"></a>

### SurfaceVolume

For planning, conformance, and task cross-references, **SurfaceVolume** denotes the part of this specification governed primarily by [SurfaceVolume Gesture Specification](#surfacevolume).

<a id="agent-audio"></a>

### Agent Audio

For planning, conformance, and task cross-references, **Agent Audio** denotes the part of this specification governed primarily by [Audio Subsystem](#audio-subsystem).
