---
id: "AOS-HW-008"
title: "Custom Device and ODM Readiness"
status: "Normative planning baseline"
version: "1.0.0"
baseline_date: "2026-07-13"
owners: "Agent OS Architecture Council"
audience: "Engineering, product, security, legal, and program leadership"
summary: "Architecture, evidence, commercial package, contracts, and prototype stages required before a future ODM or contract-manufactured device."
---

# Custom Device and ODM Readiness

> Architecture, evidence, commercial package, contracts, and prototype stages required before a future ODM or contract-manufactured device.

## Table of Contents

- [Contract Device Role](#contract-device-role)
- [Readiness Prerequisites](#readiness-prerequisites)
- [Platform Options](#platform-options)
- [Vendor Request Package](#vendor-package)
- [Contract Controls](#contract-controls)
- [Prototype Stages](#prototype-stages)
- [Community-Compatible Strategy](#community-compatible-strategy)
- [Acceptance Evidence](#acceptance)
- [Planning Reference Anchors](#planning-reference-anchors)

<a id="contract-device-role"></a>

## Contract Device Role

A contract-manufactured device is a future packaging and supply-chain target for the portable Agent OS architecture. It is not used to avoid learning the hardware contracts: the project first proves them on public development targets so that an ODM engagement purchases integration and productization rather than an opaque replacement OS.

<a id="readiness-prerequisites"></a>

## Readiness Prerequisites

Before requesting quotations, Agent OS must have:

- accepted kernel and hardware-service ABI versions;
- at least two native board ports;
- a reference display/touch, camera, audio, modem, power, and update implementation;
- measurable performance, battery, thermal, and camera requirements;
- security root, key ceremony, manufacturing, update, and recovery specifications;
- source, firmware, redistribution, vulnerability, and support contract requirements;
- initial industrial-design, repairability, waterproofing, RF, antenna, and certification requirements;
- realistic volume, region, schedule, target BOM, and NRE range.

<a id="platform-options"></a>

## Platform Options

Candidate directions include a Qualcomm QCM/QCS mobile or IoT platform with vendor support, a MediaTek platform through an IDH/ODM, an NXP/TI application processor plus external certified modem, or a Rockchip-class application processor for a Wi-Fi-first device. The best production path may accept proprietary firmware and NDA documentation while requiring native Agent OS drivers, reproducible interfaces, update rights, long-term vulnerability support, and escrow or continuity protections.

<a id="vendor-package"></a>

## Vendor Request Package

The request for information contains target markets, volume bands, form factor, display/camera/battery/radio requirements, OS architecture, boot and security model, driver ownership, source-license expectations, firmware redistribution, update support period, vulnerability SLA, certification responsibilities, manufacturing test, calibration, repair parts, tooling ownership, NRE, per-unit cost, lead time, and exit/transition rights.

<a id="contract-controls"></a>

## Contract Controls

Key controls include deliverable source and build environments, reproducible firmware packages, interface documentation, engineering escalation, defect and security SLAs, support horizon, component-change notification, substitute approval, calibration data ownership, factory key custody, audit rights, regulatory responsibility matrix, export restrictions, data processing, confidentiality boundaries, IP indemnities, and continued support if the supplier exits.

<a id="prototype-stages"></a>

## Prototype Stages

1. Evaluation kit and module proof.
2. Vendor reference board with native Agent OS services.
3. Custom carrier board or smartphone development kit.
4. EVT electrical/mechanical prototypes.
5. DVT design validation and certification units.
6. PVT manufacturing validation.
7. Controlled pilot with field update/recovery.
8. Production only after security, quality, supply, and compliance gates.

<a id="community-compatible-strategy"></a>

## Community-Compatible Strategy

The project should negotiate a publishable community board subset, redacted interface specifications, redistributable firmware packages, and upstreamable native drivers even when full phone schematics or RF data remain confidential. A community edition and a certified product may share source above the board package while differing in confidential manufacturing material.

<a id="acceptance"></a>

## Acceptance Evidence

- An RFI can be sent without changing the architecture.
- Requirements distinguish mandatory, preferred, and negotiable openness.
- At least three vendor routes are commercially compared.
- Contract terms cover source, firmware, updates, vulnerabilities, supply, and exit.
- Factory provisioning and certification responsibility are unambiguous.

<a id="planning-reference-anchors"></a>

## Planning Reference Anchors

These fine-grained anchors give the execution plan stable links into this specification. They are normative pointers: the linked canonical section remains the full requirement source.

<a id="architecture-envelope"></a>

### Architecture Envelope

For planning, conformance, and task cross-references, **Architecture Envelope** denotes the part of this specification governed primarily by [Readiness Prerequisites](#readiness-prerequisites). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="architecture-readiness"></a>

### Architecture Readiness

For planning, conformance, and task cross-references, **Architecture Readiness** denotes the part of this specification governed primarily by [Acceptance Evidence](#acceptance). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="camera-manufacturing"></a>

### Camera Manufacturing

For planning, conformance, and task cross-references, **Camera Manufacturing** denotes the part of this specification governed primarily by [Vendor Request Package](#vendor-package). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="carrier-board-stage"></a>

### Carrier Board Stage

For planning, conformance, and task cross-references, **Carrier Board Stage** denotes the part of this specification governed primarily by [Prototype Stages](#prototype-stages). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="certification-readiness"></a>

### Certification Readiness

For planning, conformance, and task cross-references, **Certification Readiness** denotes the part of this specification governed primarily by [Readiness Prerequisites](#readiness-prerequisites). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="commercial-readiness"></a>

### Commercial Readiness

For planning, conformance, and task cross-references, **Commercial Readiness** denotes the part of this specification governed primarily by [Readiness Prerequisites](#readiness-prerequisites). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="community-reference-kit"></a>

### Community Reference Kit

For planning, conformance, and task cross-references, **Community Reference Kit** denotes the part of this specification governed primarily by [Community-Compatible Strategy](#community-compatible-strategy). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="contract-requirements"></a>

### Contract Requirements

For planning, conformance, and task cross-references, **Contract Requirements** denotes the part of this specification governed primarily by [Contract Controls](#contract-controls). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="design-now"></a>

### Design Now

For planning, conformance, and task cross-references, **Design Now** denotes the part of this specification governed primarily by [Readiness Prerequisites](#readiness-prerequisites). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="evt-dvt-pvt"></a>

### EVT DVT PVT

For planning, conformance, and task cross-references, **EVT DVT PVT** denotes the part of this specification governed primarily by [Prototype Stages](#prototype-stages). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="manufacturing-readiness"></a>

### Manufacturing Readiness

For planning, conformance, and task cross-references, **Manufacturing Readiness** denotes the part of this specification governed primarily by [Readiness Prerequisites](#readiness-prerequisites). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="manufacturing-test"></a>

### Manufacturing Test

For planning, conformance, and task cross-references, **Manufacturing Test** denotes the part of this specification governed primarily by [Vendor Request Package](#vendor-package). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="mechanical-and-power"></a>

### Mechanical And Power

For planning, conformance, and task cross-references, **Mechanical And Power** denotes the part of this specification governed primarily by [Prototype Stages](#prototype-stages). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="odm-rfi"></a>

### ODM Rfi

For planning, conformance, and task cross-references, **ODM Rfi** denotes the part of this specification governed primarily by [Vendor Request Package](#vendor-package). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="partner-scorecard"></a>

### Partner Scorecard

For planning, conformance, and task cross-references, **Partner Scorecard** denotes the part of this specification governed primarily by [Contract Controls](#contract-controls). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="replaceability"></a>

### Replaceability

For planning, conformance, and task cross-references, **Replaceability** denotes the part of this specification governed primarily by [Platform Options](#platform-options). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.
