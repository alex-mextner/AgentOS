---
id: "AOS-ARCH-006"
title: "Drivers, HAL, and Board Packages"
status: "Normative planning baseline"
version: "1.0.0"
baseline_date: "2026-07-13"
owners: "Agent OS Architecture Council"
audience: "Engineering, product, security, legal, and program leadership"
summary: "Isolated driver domains, board packages, hardware-service contracts, DMA/interrupt security, firmware provenance, and lifecycle behavior."
---

# Drivers, HAL, and Board Packages

> Isolated driver domains, board packages, hardware-service contracts, DMA/interrupt security, firmware provenance, and lifecycle behavior.

## Table of Contents

- [Driver Model](#driver-model)
- [Device Topology and Binding](#device-topology)
- [Board Package](#board-package)
- [Hardware Service Contracts](#hal-contracts)
- [DMA and IOMMU](#dma-iommu)
- [Interrupts](#interrupts)
- [Firmware and Microcode Policy](#firmware-policy)
- [Driver Lifecycle and Recovery](#driver-lifecycle)
- [Portable Driver Development](#portable-development)
- [Acceptance Evidence](#acceptance)
- [Planning Reference Anchors](#planning-reference-anchors)

<a id="driver-model"></a>

## Driver Model

Hardware drivers run in isolated user-space driver domains unless a specific primitive demonstrably requires kernel residency. A driver receives only the MMIO windows, interrupt objects, DMA domain, clocks, resets, GPIOs, and peer-service capabilities declared by its binding manifest. Driver failure must not corrupt the kernel or unrelated drivers.

<a id="device-topology"></a>

## Device Topology and Binding

The platform service constructs a device graph from a board manifest, firmware-provided descriptors, discoverable buses, and trusted probe results. Binding rules match device class, compatible identifiers, revision constraints, dependencies, and required resources. A binding rule selects a driver package; it does not grant authority outside the matched node.

<a id="board-package"></a>

## Board Package

A board package contains:

- boot entry and firmware handoff description;
- physical memory map and reserved regions;
- CPU topology and interrupt-controller description;
- timers, clocks, resets, power domains, and thermal zones;
- buses and device topology;
- storage and partition layout;
- display, touch, camera, audio, sensor, modem, and connectivity declarations;
- firmware names, hashes, acquisition/redistribution classification, and load policy;
- calibration and manufacturing-data schema;
- feature/quality profile;
- recovery and debug paths.

The board package is data plus narrowly scoped setup code. Product or service policy is prohibited there.

<a id="hal-contracts"></a>

## Hardware Service Contracts

Native drivers normally expose device-class protocols through broker services rather than raw register-shaped APIs. Examples include:

- block/storage transport;
- network link and Wi-Fi control;
- display controller and buffer presentation;
- touch/input stream;
- audio endpoint and route control;
- camera sensor/capture/ISP control;
- modem transport, SIM, radio, and telephony state;
- battery, charger, power domain, thermal, and sensor telemetry;
- secure element and key operations.

A low-level raw protocol may exist for bring-up, but production components use the class contract.

<a id="dma-iommu"></a>

## DMA and IOMMU

A driver cannot DMA to arbitrary physical memory. The kernel creates a DMA domain associated with the device or IOMMU context. Buffers are pinned and mapped through capabilities with declared direction, coherency, lifetime, and size. Systems without an IOMMU are assigned a higher risk tier and use constrained bounce buffers where practical.

<a id="interrupts"></a>

## Interrupts

The kernel binds a device interrupt to an interrupt capability. User-space acknowledgement, masking, and unmasking follow device-class rules. The kernel records storm thresholds and can quarantine a failing driver. Shared interrupts require a broker or explicit shared binding; unrelated domains do not receive each other’s interrupt authority.

<a id="firmware-policy"></a>

## Firmware and Microcode Policy

Firmware is treated as a separately versioned component with provenance, license, redistribution status, hash, security advisory path, rollback behavior, and supported hardware revisions. Proprietary firmware may be loaded when legally acquired and architecturally isolated, but it is never represented as open source. The legal controls are in [the binary and firmware policy](AOS-LEGAL-003.md#binary-and-firmware-policy).

<a id="driver-lifecycle"></a>

## Driver Lifecycle and Recovery

Drivers support bind, initialize, quiesce, suspend, resume, reset, remove, update, and crash-recovery transitions. The platform service serializes lifecycle operations, propagates cancellation, and prevents a new instance from accessing resources until the old instance is revoked. Critical devices may have a minimal recovery backend.

<a id="portable-development"></a>

## Portable Driver Development

Every target driver should be paired with at least one of:

- an emulated model;
- a protocol trace-replay model;
- a register-level fake;
- a reference implementation against a documented development board;
- a hardware-in-the-loop test fixture.

The common driver framework and device-class contracts run unchanged. Vendor or board code is replaceable.

<a id="acceptance"></a>

## Acceptance Evidence

- A user-space driver receives only declared MMIO, IRQ, and DMA resources.
- The driver can crash and restart without kernel failure or stale DMA authority.
- One device class has mock, emulated, and two native implementations.
- Board manifests generate a deterministic resource graph and capability profile.
- Firmware provenance and redistribution status are machine-readable.
- A suspend/resume test quiesces and restores a real device without leaked resources.

<a id="planning-reference-anchors"></a>

## Planning Reference Anchors

These fine-grained anchors give the execution plan stable links into this specification. They are normative pointers: the linked canonical section remains the full requirement source.

<a id="accelerators"></a>

### Accelerators

For planning, conformance, and task cross-references, **Accelerators** denotes the part of this specification governed primarily by [Driver Model](#driver-model). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="camera-contract"></a>

### Camera Contract

For planning, conformance, and task cross-references, **Camera Contract** denotes the part of this specification governed primarily by [Hardware Service Contracts](#hal-contracts). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="cellular-contract"></a>

### Cellular Contract

For planning, conformance, and task cross-references, **Cellular Contract** denotes the part of this specification governed primarily by [Hardware Service Contracts](#hal-contracts). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="device-discovery"></a>

### Device Discovery

For planning, conformance, and task cross-references, **Device Discovery** denotes the part of this specification governed primarily by [DMA and IOMMU](#dma-iommu). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="device-lifecycle"></a>

### Device Lifecycle

For planning, conformance, and task cross-references, **Device Lifecycle** denotes the part of this specification governed primarily by [DMA and IOMMU](#dma-iommu). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="dma-and-iommu"></a>

### DMA And IOMMU

For planning, conformance, and task cross-references, **DMA And IOMMU** denotes the part of this specification governed primarily by [DMA and IOMMU](#dma-iommu). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="driver-binding"></a>

### Driver Binding

For planning, conformance, and task cross-references, **Driver Binding** denotes the part of this specification governed primarily by [Interrupts](#interrupts). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="driver-domains"></a>

### Driver Domains

For planning, conformance, and task cross-references, **Driver Domains** denotes the part of this specification governed primarily by [Driver Model](#driver-model). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="gpu-contract"></a>

### GPU Contract

For planning, conformance, and task cross-references, **GPU Contract** denotes the part of this specification governed primarily by [Hardware Service Contracts](#hal-contracts). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="interrupt-contract"></a>

### Interrupt Contract

For planning, conformance, and task cross-references, **Interrupt Contract** denotes the part of this specification governed primarily by [Interrupts](#interrupts). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="manufacturing-interfaces"></a>

### Manufacturing Interfaces

For planning, conformance, and task cross-references, **Manufacturing Interfaces** denotes the part of this specification governed primarily by [Board Package](#board-package). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="resource-broker"></a>

### Resource Broker

For planning, conformance, and task cross-references, **Resource Broker** denotes the part of this specification governed primarily by [Interrupts](#interrupts). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="sensor-contract"></a>

### Sensor Contract

For planning, conformance, and task cross-references, **Sensor Contract** denotes the part of this specification governed primarily by [Hardware Service Contracts](#hal-contracts). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="service-contract-template"></a>

### Service Contract Template

For planning, conformance, and task cross-references, **Service Contract Template** denotes the part of this specification governed primarily by [Driver Model](#driver-model). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="storage-contract"></a>

### Storage Contract

For planning, conformance, and task cross-references, **Storage Contract** denotes the part of this specification governed primarily by [Hardware Service Contracts](#hal-contracts). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="usb-contract"></a>

### USB Contract

For planning, conformance, and task cross-references, **USB Contract** denotes the part of this specification governed primarily by [Hardware Service Contracts](#hal-contracts). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.
