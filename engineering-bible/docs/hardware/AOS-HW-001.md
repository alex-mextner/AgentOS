---
id: "AOS-HW-001"
title: "Hardware Target Portfolio"
status: "Normative planning baseline"
version: "1.0.0"
baseline_date: "2026-07-13"
owners: "Agent OS Architecture Council"
audience: "Engineering, product, security, legal, and program leadership"
summary: "Parallel hardware target strategy, admission criteria, scoring dimensions, minimum lab portfolio, and retirement rules."
---

# Hardware Target Portfolio

> Parallel hardware target strategy, admission criteria, scoring dimensions, minimum lab portfolio, and retirement rules.

## Table of Contents

- [Portfolio Policy](#portfolio-policy)
- [Target Classes](#target-classes)
- [Selection Dimensions](#selection-dimensions)
- [Minimum Portfolio](#minimum-portfolio)
- [Track Admission](#track-admission)
- [Retirement and Substitution](#retirement-and-substitution)
- [Recommended Starting Portfolio](#portfolio-recommendation)
- [Acceptance Evidence](#portfolio-acceptance)
- [Planning Reference Anchors](#planning-reference-anchors)

<a id="portfolio-policy"></a>

## Portfolio Policy

Agent OS maintains several hardware targets because no available device simultaneously provides flagship mobile quality, complete public documentation, redistributable firmware, open board design, inexpensive access, and a realistic path to native drivers. Each target has a declared purpose, budget, evidence gate, and retirement rule.

The portable contracts in [the system architecture](AOS-ARCH-001.md#portable-boundaries) are the common product. Target-specific value is measured by how much of those contracts it implements natively, not by how closely it resembles an Android phone.

<a id="target-classes"></a>

## Target Classes

| Class | Candidate examples | Primary question | Not allowed to prove |
| --- | --- | --- | --- |
| Emulator | x86_64/AArch64 QEMU | Are kernel and service semantics correct and reproducible? | Physical power, camera, RF, or driver quality |
| Documented board | NXP i.MX 8M Plus EVK, TI AM62A/AM67A, BeagleY-AI | Can Agent OS port cleanly from public manuals and board data? | Phone ergonomics or flagship imaging |
| Performance board | RK3588 boards such as Radxa ROCK 5B/5B+ | Can native graphics, media, multicore, and high-bandwidth I/O scale? | Complete openness or phone power |
| Open phone | PinePhone Pro; Librem 5 when obtainable | Can phone-form-factor power, touch, sensors, audio, and a separate modem work natively? | Modern camera, battery, RF, or performance quality |
| Quality phone | Pixel 9 Pro; Fairphone Gen. 6; selected Sony Open Devices models | Can premium components be understood and progressively controlled? | Clean native conformance when using Android/Linux proxies |
| Future contract device | Vendor/ODM platform selected under NDA and source agreement | Can a supportable product be manufactured and certified? | Community openness unless contracts deliver it |

<a id="selection-dimensions"></a>

## Selection Dimensions

Every candidate is scored separately for:

- boot-chain control and recoverability;
- SoC technical-reference access;
- board schematics, layout, BOM, and device-tree availability;
- source license and firmware redistribution rights;
- serial, JTAG, trace, and test-point access;
- display, GPU, storage, USB, camera/ISP, audio, power, modem, Wi-Fi/Bluetooth, GNSS, NFC, and secure-element feasibility;
- component availability, replacement cost, and supply horizon;
- energy, thermals, enclosure, waterproofing, and repairability;
- expected native-driver person-months;
- legal constraints and ability to publish results.

The scoring rubric is [defined in the hardware scorecard](AOS-HW-010.md#scoring-method).

<a id="minimum-portfolio"></a>

## Minimum Portfolio

The baseline lab owns or has continuous access to:

- one x86_64 build host and one independent CI host;
- at least two units of the primary documented board;
- two units of one performance board;
- two open-phone units or one unit plus a recoverable spare mainboard;
- two identical unlockable Pixel 9 research devices, one preserved in a known-good stock state;
- one semi-open quality device for comparison and possible porting;
- duplicated serial, power, storage, and display accessories for unattended testing.

A target with only one irreplaceable unit cannot sit on the critical path.

<a id="track-admission"></a>

## Track Admission

A target enters active engineering only after a dossier records exact SKU/revision, unlock state, acquisition terms, boot behavior, available documents, source/firmware licenses, diagnostics, expected blockers, named owner, budget, and first three experiments. The Architecture Council admits the target at a decision gate; purchasing a device does not make it supported.

<a id="retirement-and-substitution"></a>

## Retirement and Substitution

A track is paused or retired when essential documentation is unavailable under usable terms, recovery is unreliable, required firmware cannot be lawfully acquired or redistributed, progress misses two consecutive gates without a credible corrective action, or another target can prove the same architecture hypothesis at materially lower cost. Artifacts, traces, and negative findings remain in the evidence repository.

<a id="portfolio-recommendation"></a>

## Recommended Starting Portfolio

1. **QEMU x86_64** for the first kernel and CI target.
2. **QEMU AArch64** before physical AArch64 bring-up.
3. **BeagleY-AI/AM67A and NXP i.MX 8M Plus EVK documentation audit**, selecting one as the first physical native target after a four-week evidence gate.
4. **RK3588/Radxa performance board** for GPU, video, camera throughput, and larger-memory work.
5. **PinePhone Pro** as the first phone-form-factor integration target, accepting its camera and power limitations.
6. **Pixel 9 Pro** as the primary premium camera/hardware research target under [the minimal-legacy policy](AOS-ARCH-011.md#pixel-legacy-boundary).
7. **Fairphone Gen. 6** as a repairable semi-open comparator and vendor-cooperation candidate.

<a id="portfolio-acceptance"></a>

## Acceptance Evidence

- A scored dossier exists for every purchased target.
- At least two unrelated SoC families boot the native kernel before upper layers are declared portable.
- Every proxy-backed service is visibly labeled and has a native replacement task.
- Target-specific code is confined to architecture, board, or driver packages.
- Track budget and stop criteria are visible in the canonical plan.

<a id="planning-reference-anchors"></a>

## Planning Reference Anchors

These fine-grained anchors give the execution plan stable links into this specification. They are normative pointers: the linked canonical section remains the full requirement source.

<a id="qemu-track"></a>

### Qemu Track

For planning, conformance, and task cross-references, **Qemu Track** denotes the part of this specification governed primarily by [Target Classes](#target-classes). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="support-levels"></a>

### Support Levels

For planning, conformance, and task cross-references, **Support Levels** denotes the part of this specification governed primarily by [Retirement and Substitution](#retirement-and-substitution). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="target-dossier"></a>

### Target Dossier

For planning, conformance, and task cross-references, **Target Dossier** denotes the part of this specification governed primarily by [Selection Dimensions](#selection-dimensions). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.


<a id="generated-xref-anchors"></a>

## Generated Cross-Reference Anchors

<a id="portfolio"></a>

### Portfolio

This stable anchor is referenced by another canonical document. Its normative content is the nearest applicable section above and the linked task/claim data; future editorial refinement must preserve the anchor.
