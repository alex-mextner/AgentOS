---
id: AOS-ARCH-001
title: Portable System Architecture
status: foundation
---

# Portable System Architecture

## Principle

The operating system is divided into architecture packages, board packages, device services, and portable system/product layers. Product code depends on owned IDL contracts rather than SoC-, Linux-, Android-, or vendor-specific APIs.

## Layer model

1. **Microkernel** — scheduling, address spaces, interrupts, capabilities, IPC, timers, and minimal platform primitives.
2. **Architecture package** — AArch64 and later RISC-V/x86-64 CPU, MMU, interrupt, and boot implementations.
3. **Board package** — memory map, clocks, resets, buses, power domains, and device enumeration for one board.
4. **Device services** — display, GPU, camera, audio, storage, network, modem, sensor, power, and secure-service contracts.
5. **System services** — component lifecycle, package management, storage, identity, policy, update, recovery, and observability.
6. **Product layer** — entity graph, actions, history, agents, shell, integrations, backup, and sync.

## Portability rule

No portable layer may expose Linux file descriptors, ioctl values, Binder objects, Android HAL types, vendor structs, or board addresses. Platform providers implement native versioned contracts.

## Contract and adapter performance

Portability is a semantic boundary, not a requirement to serialize or copy every operation.

- IDL tooling generates statically typed bindings; control-plane conversion must be compile-time visible and bounded.
- Semantically identical native values may be passed through without field-by-field rebuilding.
- Bulk camera, display, audio, network, and storage payloads use shared memory, DMA-capable buffer handles, descriptor rings, queues, and synchronization fences.
- A documented semantic gap describes a capability or behavioural difference during design and bring-up; it is not a mandatory runtime translation step.
- Backend-specific fast paths are allowed below the stable contract when they preserve observable semantics and capability checks.
- A hot-path provider is unacceptable if it adds an avoidable full-payload copy, unbounded allocation, hidden format conversion, or unmeasured scheduling hop.

Each device-service specification must define latency, throughput, copy-count, allocation, and CPU-budget tests. The initial baseline is measured against the most direct safe implementation on that target; subsequent providers must report their delta.

## Pixel 9 boundary

Pixel 9 work may use stock Android/Linux only as an evidence oracle, trace source, recovery environment, or temporary sidecar. Every retained dependency requires a replacement issue, owner, legal basis, and stop condition.

## Acceptance

A component is portable when it runs unchanged against QEMU and at least one physical board provider, with conformance tests proving identical observable contract behaviour and performance tests showing no accidental data-path copies.
