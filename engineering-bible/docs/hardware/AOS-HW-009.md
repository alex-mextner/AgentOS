---
id: "AOS-HW-009"
title: "Lab, Procurement, and Initial Budget"
status: "Normative planning baseline"
version: "1.0.0"
baseline_date: "2026-07-13"
owners: "Agent OS Architecture Council"
audience: "Engineering, product, security, legal, and program leadership"
summary: "Initial laboratory, hardware, legal, and specialist procurement waves with budget ranges, safety controls, and inventory requirements."
---

# Lab, Procurement, and Initial Budget

> Initial laboratory, hardware, legal, and specialist procurement waves with budget ranges, safety controls, and inventory requirements.

## Table of Contents

- [Purchase Principles](#purchase-principles)
- [Purchase Waves](#purchase-waves)
- [Lean and Full Options](#lean-and-full-options)
- [First Purchase List](#first-purchase-list)
- [Safety and Calibration](#safety-and-calibration)
- [Inventory Control](#inventory-control)
- [Acceptance Evidence](#acceptance)
- [Planning Reference Anchors](#planning-reference-anchors)

<a id="purchase-principles"></a>

## Purchase Principles

Buy hardware in waves tied to evidence gates. Duplicate inexpensive critical targets; keep one known-good unit for comparison; verify exact SKU and unlockability before premium-phone purchase; and avoid specialized camera, RF, or JTAG instruments until a concrete experiment requires them. All amounts are planning envelopes in USD before tax, shipping, duties, and regional availability.

<a id="purchase-waves"></a>

## Purchase Waves

| Wave | Timing | Contents | Planning range |
| --- | --- | --- | ---: |
| W0: Build and debug | Days 0–14 | 32-core/128 GB/4 TB build workstation or equivalent, CI runner, serial adapters, USB hubs, basic logic analyzer, power meter, cables, storage | $8,000–18,000 |
| W1: Core targets | Days 0–30 | two documented-board families, two RK3588 boards, displays/touch, eMMC/NVMe, two PinePhone Pro-class units, two unlockable Pixel 9 units, one Fairphone-class comparator | $6,000–14,000 |
| W2: Power/camera lab | Days 15–60 | programmable supply, source-measure or quality power analyzer, oscilloscope, thermal camera, lighting, charts, mounts, UVC and raw camera modules, microphones/speakers | $8,000–22,000 |
| W3: Automation | Days 45–90 | controllable relays, USB switching, fixture boards, remote serial, network isolation, storage duplicators, safety equipment | $3,000–8,000 |
| W4: Legal and specialists | Days 0–90 | trademark/search counsel, reverse-engineering/open-source counsel, initial camera/telephony consultations | $15,000–30,000 |
| Contingency | Whole period | replacements, imports, second revisions, unexpected adapters | $5,000–12,000 |

<a id="lean-and-full-options"></a>

## Lean and Full Options

A lean setup reuses existing compute, buys one of each non-critical board, uses low-cost USB instruments, and rents or borrows camera/RF equipment. A full setup duplicates every target, adds professional power analysis, oscilloscope and protocol tools, a controlled camera bench, environmental fixtures, and paid specialist reviews. The canonical `procurement.csv` records both estimates and purchase gates.

<a id="first-purchase-list"></a>

## First Purchase List

Priority purchases are a build/CI host, two selected documented boards after the document audit, two RK3588 boards, serial and recovery accessories, two exact-SKU Pixel 9 research units, one Fairphone Gen. 6 comparator, two PinePhone Pro units or spare mainboard access, programmable power, current measurement, thermal camera, a basic oscilloscope, camera targets/lighting, one UVC smart camera, and two raw MIPI modules matched to documented boards.

<a id="safety-and-calibration"></a>

## Safety and Calibration

The lab requires ESD protection, current-limited supplies, battery-safe enclosures, fire-resistant charging area, appropriate fuses, ventilation, optical safety for bright lighting, RF legal restrictions, calibrated meters, and documented instrument calibration dates. Battery puncture, modem RF modification, and mains-powered fixtures require trained operators and risk assessment.

<a id="inventory-control"></a>

## Inventory Control

Every asset has an ID, exact revision, serial, purchase source, cost, location, custodian, firmware/boot state, repair history, calibration date, and permitted use. Research devices store no personal accounts or live credentials. Known-good images and recovery procedures are tested before destructive work.

<a id="acceptance"></a>

## Acceptance Evidence

- Procurement rows name the experiment or gate enabled.
- Premium devices are checked for exact unlockable SKU before payment.
- Critical targets have recovery accessories and replacement strategy.
- Instruments have safety and calibration records.
- Actual spend and commitments are reported against the approved envelope.

<a id="planning-reference-anchors"></a>

## Planning Reference Anchors

These fine-grained anchors give the execution plan stable links into this specification. They are normative pointers: the linked canonical section remains the full requirement source.

<a id="budget-scenarios"></a>

### Budget Scenarios

For planning, conformance, and task cross-references, **Budget Scenarios** denotes the part of this specification governed primarily by [Lean and Full Options](#lean-and-full-options). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="camera-lab"></a>

### Camera Lab

For planning, conformance, and task cross-references, **Camera Lab** denotes the part of this specification governed primarily by [Safety and Calibration](#safety-and-calibration). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="first-order"></a>

### First Order

For planning, conformance, and task cross-references, **First Order** denotes the part of this specification governed primarily by [First Purchase List](#first-purchase-list). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="laboratory-equipment"></a>

### Laboratory Equipment

For planning, conformance, and task cross-references, **Laboratory Equipment** denotes the part of this specification governed primarily by [First Purchase List](#first-purchase-list). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="procurement-controls"></a>

### Procurement Controls

For planning, conformance, and task cross-references, **Procurement Controls** denotes the part of this specification governed primarily by [Purchase Principles](#purchase-principles). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.
