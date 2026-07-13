---
id: "AOS-HW-019"
title: "Power Architecture and Ultra-Low-Power Standby"
status: "Normative planning baseline"
version: "1.1.0"
baseline_date: "2026-07-13"
owners: "Agent OS Architecture Council"
audience: "Engineering, product, and program leadership"
summary: "Heterogeneous power architecture for the demo brick: an always-on microcontroller domain (always-on island) that hard-gates the application processor and radios, enabling days-long standby and a competitive energy story rather than the hours-long idle of a bare CM5."
---

# Power Architecture and Ultra-Low-Power Standby

> A single application processor cannot both run the full OS and sip microwatts. The answer is a heterogeneous design: a tiny always-on microcontroller owns the standby world and switches the power-hungry world on only when needed. Energy efficiency is treated as a headline sales point, not an afterthought.

## Table of Contents

- [Purpose and Scope](#purpose-and-scope)
- [The Core Problem](#core-problem)
- [Two-Domain Architecture](#two-domain)
- [Power States](#power-states)
- [Standby Modes](#standby-modes)
- [Mapping to Layered Boot](#layered-boot-map)
- [Component Choices](#components)
- [Alternatives Considered](#alternatives)
- [Requirements](#requirements)
- [Failure and Degradation](#failure-and-degradation)
- [Evidence and Acceptance](#evidence-and-acceptance)
- [Risks and Open Questions](#risks-and-open-questions)
- [Related Documents](#related-documents)

<a id="purpose-and-scope"></a>

## Purpose and Scope

**Area:** Hardware Programme.

This document owns the power architecture of the demo brick ([AOS-HW-018](HW-018-demo-brick-v1-configuration.md)) and the standby strategy that turns its worst weakness (idle power, HW-018 problem P1) into a differentiator. It is the hardware complement to the layered-boot software model in [AOS-ARCH-021](../architecture/ARCH-021-layered-boot-and-instant-modes.md).

<a id="core-problem"></a>

## The Core Problem

Correctly separated into hardware facts and OS-dependent unknowns (correction v1.1: earlier text over-anchored on Linux measurements, which bound a *running Linux* floor, not the silicon):

- **Hardware facts.** The CM5/Pi 5 PMIC natively supports a near-off state (milliwatt class) with wake by power button and **RTC alarm** — this is silicon+PMIC capability, independent of any OS, and it already implements the S3 semantics below without external hardware. Its limitation: wake is a cold boot, not a resume, and its wake sources are only button and RTC.
- **OS-dependent unknown.** The BCM2712 TRM is not public, so the true *native-OS* active-idle floor (aggressive WFI, core/cluster gating, clock floors, DRAM self-refresh) is **unmeasured, not "bad"**: Linux community figures (~2.0–2.7 W tuned idle) are a Linux floor. Native idle floor is an open experiment with its own claim record; it may be substantially lower.
- **What no configuration changes.** While the A76 domain is powered and executing an OS, microwatt draw is not achievable; nanowatt/microwatt territory requires the domain off, reachable either via the native PMIC off-state or via external rail gating.

At Linux-like idle, a 5 Ah pack gives ~10 hours; at PMIC-off it gives months but with nothing running. The architecture below fills the space between.

<a id="two-domain"></a>

## Two-Domain Architecture

The device is split into an always-on island and a switchable high-power domain.

The island's role, precisely: it does **not** invent sleep — S3-class off exists natively via the PMIC. The island adds what the PMIC lacks: rich wake sources (modem ring/SMS, accelerometer tap, BLE), an always-available glance surface, and independent per-rail gating of peripherals (modem, audio, NVMe, second Wi-Fi) while the SoC runs or sleeps.

**Always-on island (microwatts–low milliwatts):**
- A low-power MCU (nRF5340 or ESP32-C6/-H2 class) that never sleeps below its own µA retention floor.
- Owns: the real-time clock, wake sources (buttons, timer, accelerometer tap, optional cellular ring/SMS indication), the power-path controllers' enable lines, the fuel gauge, and a small always-on indicator (single LED or a few e-ink segments).
- Optionally owns a BLE radio for presence/beacon/find-my duty and an e-ink status glance while the main SoC is fully off.

**Switchable high-power domain (watts):**
- CM5, display, cameras, NVMe, XVF3800 audio, and the LTE modem — each behind a load switch the island can cut independently.
- Brought up only on a wake event, and only the subset a given state needs.

The island physically holds the enable pins of the domain's DC-DC converters and load switches, so "off" means off, not "idle".

<a id="power-states"></a>

## Power States

| State | Application processor | Radios | Island | Target draw | Wake latency |
| --- | --- | --- | --- | --- | --- |
| S0 Active | on | as needed | on | 2–5 W | — |
| S1 Screen-off idle | on, clock-floored | gated | on | 1–2 W | instant |
| S2 Suspend-to-RAM | retention (if supported) | off | on | 0.3–0.8 W (est.) | ~1 s |
| S3 Deep standby | **off** (state on NVMe) | modem off; island BLE optional | on | 5–30 mW (est.) | 3–8 s (cold to L2) |
| S4 Ship/store | off | off | off | < 100 µW | button hold |

S3 is the headline: the main SoC is fully powered down, the island keeps time and watches wake sources, and the device resumes into a layered-boot primitive mode (ARCH-021) in a few seconds. Estimated figures are targets pending EXP measurement.

<a id="standby-modes"></a>

## Standby Modes

- **Glance standby.** Main SoC in S3; island drives an e-ink status strip (time, battery, one notification line) and BLE. This is the "smartwatch-grade standby on a phone-class device" story: days of glanceable standby, seconds to full power.
- **Comms standby (experiment).** Island periodically powers the modem for a short paging/SMS/notification poll, then cuts it — trading true always-connected for large energy savings, exactly the "ESP32 + periodic Wi-Fi/modem on/off" pattern. Missed-call/late-message trade-offs are explicit and user-configurable; this must never masquerade as always-on cellular.
- **Alarm/timer wake.** Island RTC wakes the SoC for scheduled tasks (sync, capture) then returns to S3.

<a id="layered-boot-map"></a>

## Mapping to Layered Boot

The island's states map onto the boot layers of [AOS-ARCH-021](../architecture/ARCH-021-layered-boot-and-instant-modes.md): S3 wake resumes to L2 (a primitive mode) first and ascends only as far as the task needs. A typewriter or reader session can run at L2 with the modem and most of the domain still gated, so the "focus mode" feature and the "days of standby" feature are the same mechanism. Radio-less instant modes hold no radio capabilities, so the island can keep those load switches open the entire session.

<a id="components"></a>

## Component Choices

| Function | Part class | Note |
| --- | --- | --- |
| Always-on MCU | Nordic nRF5340 (dual-core, BLE, µA sleep) or ESP32-C6/-H2 | nRF for lowest power + BLE quality; ESP32 for Wi-Fi/community familiarity |
| Load switches | TPS22918 / high-side load-switch family per rail | Independent gating of SoC, modem, audio, camera, NVMe |
| Power-path/charger | BQ25792-class (already in HW-018) | Charger + power path; island reads/writes over I2C |
| Fuel gauge | MAX17048-class (already in HW-018) | Owned by the island |
| Glance display | small e-ink strip or segment | Retains image at zero power |
| RTC | island MCU internal + backup coin cell | Timekeeping across S3/S4 |

The island adds cost and one more processor to the software surface, but it is the difference between an hours device and a days device.

<a id="alternatives"></a>

## Alternatives Considered

- **Different application processor instead of CM5.** Options with better idle: i.MX 8M Plus (documented low-power states and a documented VeriSilicon ISP) or a Snapdragon/Dimensity-class SoM. Precision on the camera coupling: the Sony sensor itself is portable — any 4-lane MIPI CSI-2 host can take IMX585 raw output — but **ISP tuning is not**: the shipped StarlightEye tuning targets the Raspberry Pi PiSP/libcamera pipeline specifically. Moving to i.MX 8M Plus means re-tuning with NXP/VeriSilicon tools (weeks-to-months, partly partner-gated) — feasible, and already the strategic documented-ISP path of AOS-HW-006; moving to Snapdragon means sensor bring-up plus tuning inside the NDA-gated CamX/Chromatix stack — effectively closed at prototype scale. i.MX 93 is struck from this list: it lacks a full ISP and is not a camera-grade part. Decision: keep CM5 for V1 because the *tuned* pipeline exists there today; add the island to fix idle; re-evaluate the application processor at the custom-carrier stage (AOS-ODM-021), by which point the portable pipeline's own versioned calibration (AOS-HW-006/AOS-HW-012) reduces ISP lock-in.
- **RP1 southbridge low-power modes only.** Insufficient; the A76 cores dominate idle.
- **Software suspend alone.** Necessary but not sufficient — S2 helps, S3 requires the hardware island.

<a id="requirements"></a>

## Requirements

- **R01.** Implement an always-on MCU island that hard-gates the application processor, radios, and peripheral rails via load-switch enable lines.
- **R02.** Implement power states S0–S4 with the island as the sole owner of S3/S4 entry and wake.
- **R03.** Resume from S3 into a layered-boot primitive mode (ARCH-021 L2) within the stated wake budget; never require a full ascent to wake.
- **R04.** Specify normal, partial, denied, timeout, cancellation, restart, upgrade, and permanent-failure behavior for every power transition; a wedged island must be independently resettable.
- **R05.** Expose structured power/energy diagnostics (per-rail, per-state) without leaking secrets.
- **R06.** Link material unknowns (measured S2/S3 draw, wake latency) to claims and experiments with owners and gates.
- **R07.** Update affected documentation and task data when measurements change the model.

<a id="failure-and-degradation"></a>

## Failure and Degradation

Degradation must be explicit rather than accidental. If the island cannot confirm a safe power state, it fails to the last known-safe state and reports a typed fault; it never leaves a rail in an undefined state. A crashed application processor is detected by the island watchdog and power-cycled without user data loss beyond the last journal checkpoint. Comms-standby missed events are surfaced, never silently dropped.

<a id="evidence-and-acceptance"></a>

## Evidence and Acceptance

- Measured draw at each state S0–S4 on the demo brick, per hardware revision, with the measurement method recorded.
- Wake-latency distribution from S2 and S3 to interactive L2.
- Standby-days estimate from measured S3 draw and pack capacity, with a competitor comparison table.
- Fault-injection: wedged island reset, SoC crash recovery, charger fault during S3.
- Evidence records target identity, hardware revision, firmware, source commit, toolchain, configuration, timestamps, artifacts, expected result, actual result, and reviewer.

<a id="risks-and-open-questions"></a>

## Risks and Open Questions

- CM5 suspend-to-RAM (S2) support under a native OS is unproven (TRM closed); if absent, S3 (PMIC/island power-down) carries the standby story alone and wake latency rises.
- Native-OS active-idle floor (S1) is an open measurement, not a known value; the competitive-standby claim is made only from measured S-state evidence.
- The island adds firmware that must itself be trustworthy and updatable; it is a second security surface.
- Comms-standby duty cycle trades connectivity for battery; the honest framing must survive a demo where a call is missed.
- E-ink glance strip adds mechanical and driver work; it is optional to the core standby claim.
- **Open-question rule:** an unanswered high-impact question becomes a claim/experiment record and cannot be hidden in meeting notes.
- **Stop rule:** work stops or changes track when the required evidence path is unavailable.

<a id="related-documents"></a>

## Related Documents

- [Interim demo device](HW-017-interim-demo-device.md)
- [Demo brick V1 configuration](HW-018-demo-brick-v1-configuration.md)
- [Layered boot and instant modes](../architecture/ARCH-021-layered-boot-and-instant-modes.md)
- [Custom device and ODM readiness](HW-008-custom-device-odm-readiness.md)
- [Interim hardware market survey](../research/RES-011-interim-hardware-market-survey.md)
