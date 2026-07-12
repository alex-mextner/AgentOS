---
id: AOS-GLOSSARY
title: Engineering Glossary
status: foundation
---

# Engineering Glossary

## Alphabetical index

[A](#address-space) · [B](#board-support-package) · [C](#capability) · [D](#device-service) · [E](#evidence-gate) · [I](#idl) · [M](#microkernel) · [O](#oracle) · [R](#revocation) · [T](#trace)

## Address space

The virtual-memory environment visible to a process. An address space maps virtual pages to physical memory with permissions enforced by the MMU. See [Microkernel](../architecture/ARCH-002-microkernel.md#processes-and-scheduling).

## Board support package

The implementation package describing one board's memory map, clocks, resets, buses, power domains, interrupt wiring, boot path, and device enumeration. It must not leak board-specific structures into portable system services. See [Portable architecture](../architecture/ARCH-001-portable-system-architecture.md#layer-model).

## Capability

An unforgeable reference to an object combined with explicit rights. Possession authorizes an operation; names or process identity alone do not. Delegation may attenuate rights. See [Microkernel](../architecture/ARCH-002-microkernel.md#capability-objects).

## Device service

An isolated service implementing a native versioned hardware contract such as display, camera, audio, storage, network, modem, sensor, or power control.

## Evidence gate

A milestone that requires inspectable artifacts before downstream work may rely on a claim. Evidence can include tests, traces, measurements, logs, reviewed code, legal opinions, or bounded negative results.

## IDL

Interface Definition Language. The machine-readable description of native messages, handles, versions, rights, errors, and compatibility rules used to generate bindings and conformance tests.

## Microkernel

A kernel that retains only fundamental protection and execution mechanisms while moving drivers and higher-level policy into isolated user-space services.

## Oracle

A reference implementation or stock device used to observe expected behaviour. In the Pixel 9 track, Android may serve as an oracle without becoming part of the native architecture.

## Revocation

Invalidation of a capability and, where specified, capabilities derived from it. Revocation behaviour must be deterministic under delegation, concurrency, cancellation, and object destruction.

## Trace

A timestamped record of relevant state transitions or events used for replay, comparison, debugging, or evidence. Traces must be legally obtained, minimized, classified, and stripped of unnecessary personal data.
