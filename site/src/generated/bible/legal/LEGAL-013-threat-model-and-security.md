---
id: "AOS-LEGAL-013"
title: "Consolidated Threat Model and Security Posture"
status: "Normative planning baseline"
version: "1.0.0"
baseline_date: "2026-07-13"
owners: "Security / Architecture Council"
audience: "Engineering, security, product, legal"
summary: "One place that states what the demo brick and AgentOS defend against, what they explicitly do not, the honest limits of the CM5 platform (closed boot ROM, no verified boot), and the security properties that hold anyway — so 'privacy-first' is a claim with evidence, not a slogan."
---

# Consolidated Threat Model and Security Posture

> Privacy-first is asserted throughout the bible. This document makes it falsifiable: named adversaries, assets, what holds, what does not, and where the honest limits are on the interim hardware.

## Table of Contents

- [Purpose and Scope](#purpose)
- [Assets](#assets)
- [Adversaries and What We Defend](#adversaries)
- [Security Properties That Hold](#holds)
- [Honest Limits (demo brick)](#limits)
- [Update and Recovery Security](#updates)
- [Lost/Stolen Device](#stolen)
- [Requirements](#requirements)
- [Related Documents](#related)

<a id="purpose"></a>

## Purpose and Scope

**Area:** Security.

This document consolidates the security posture scattered across HW-018 (secure element, mute), PROD-013/014 (offload/data legality), and LEGAL-012 (borders) into one threat model, and states the platform limits of the CM5 demo brick plainly.

<a id="assets"></a>

## Assets

User data at rest (entities, journal, corpora, media), keys (disk-encryption, identity, secure-element-held), credentials/sessions for connected services, live sensor streams (mic, camera, location), and the integrity of the OS itself.

<a id="adversaries"></a>

## Adversaries and What We Defend

| Adversary | Defended in V1? | Mechanism |
| --- | --- | --- |
| Casual thief (opportunistic) | Yes | Full-disk encryption; PIN; SE-held keys released only by PIN |
| App/service overreach | Yes | Capability model (ARCH-022): no ambient authority; scoped grants; inspectable agent |
| Passive network eavesdropper | Yes | Standard transport encryption; offload only to consented endpoints |
| Silent data exfiltration by the OS/agent | Yes (by design) | No unlogged action; never-offload classes; receipts; local-first default |
| Curious co-located party (shoulder/mic) | Partial | Hardware mute cuts mic power; listening indicator; DoA |
| Sophisticated forensic extraction (device in hand, powered) | Partial | SE resists casual extraction; but see limits |
| Nation-state / full host compromise | No (V1) | Out of scope for interim hardware; stated plainly |
| Supply-chain implant | Partial | Documented modules; but no attestation on CM5 |

<a id="holds"></a>

## Security Properties That Hold

- **No ambient authority.** Every component acts only within granted capabilities; the agent cannot exceed them and every action is logged (ARCH-022, PROD-015).
- **Data at rest encrypted**, keys sealed in the secure element, released by PIN (HW-018 auth).
- **Physical mic cut** via hardware mute — a property of physics, not policy.
- **Local-first**: core function needs no network; offload is consented, typed, and receipted (PROD-013).
- **Lawful data boundaries**: only the user's own data via entitled interfaces; never defeating others' security controls (PROD-014).

<a id="limits"></a>

## Honest Limits (demo brick)

Stated plainly, in demos and docs:

- **Closed boot ROM / no verified boot on CM5.** There is no measured, signed boot chain; a determined attacker with the powered device and time can attempt host compromise below the OS. The secure element protects keys *at rest* and against casual extraction, not against a fully compromised running host.
- **Wi-Fi/BT firmware blobs** are unaudited (true of essentially all hardware).
- **No hardware attestation**; the platform cannot prove its own integrity to a remote party.
- **Match-on-module fingerprint** is a convenience factor at demo-grade trust, not a phone-TEE biometric.

These are why the demo brick is a demonstration device, not a security product; the ODM stage (with a chosen SoC's secure boot + attestation) is where the production security story is built.

<a id="updates"></a>

## Update and Recovery Security

- OS updates are signed; the update service verifies signatures before applying and never falls back to unverified firmware (matches bible degradation rules). On CM5 the verification is OS-level, not silicon-rooted — a recorded limit.
- Recovery must be reproducible from external instructions (HW-018 acceptance) without exposing keys.
- Rollback protection and A/B update slots are design targets for the custom-carrier stage.

<a id="stolen"></a>

## Lost/Stolen Device

- Powered-off + encrypted = data protected against casual theft.
- Find-my (UWB/BLE, PROD-014-adjacent) aids location; remote wipe requires the device online and is a server-tier feature.
- The honest limit: a powered, unlocked device in a sophisticated adversary's hands is not fully defended in V1; the ODM stage addresses this.

<a id="requirements"></a>

## Requirements

- **R01.** State the threat model and its limits plainly wherever security is claimed; no unqualified "secure" claims.
- **R02.** Enforce capability-based no-ambient-authority as the core property; every effectful action is logged.
- **R03.** Encrypt data at rest; seal keys in the secure element; release only by PIN.
- **R04.** Sign OS updates and verify before apply; never fall back to unverified firmware.
- **R05.** Record every platform security limit (closed boot ROM, no attestation, firmware blobs) as a compromise-ledger entry.
- **R06.** Defer production-grade secure boot/attestation to a SoC that supports it at the ODM stage.

<a id="related"></a>

## Related Documents

- [Demo brick config (auth, secure element, mute)](../hardware/HW-018-demo-brick-v1-configuration.md)
- [Capability model](../architecture/ARCH-022-layer-manifest-and-capabilities.md)
- [Compute subscription and offload](../product/PROD-013-compute-subscription-and-offload.md)
- [Native app clients (legality)](../product/PROD-014-native-app-clients.md)
- [Travel and borders](LEGAL-012-prototype-travel-and-borders.md)
