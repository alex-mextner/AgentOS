---
id: AOS-ARCH-002
title: Microkernel Specification
status: foundation
---

# Microkernel Specification

## Scope

The kernel owns only mechanisms that cannot be implemented safely or efficiently in isolated user space: CPU scheduling, address spaces, capability validation, IPC transport, interrupt delivery, timers, low-level memory management, and the minimal boot/debug path.

## Capability objects

Kernel objects are referenced through unforgeable handles carrying explicit rights. Rights are monotonic: delegation may reduce rights but never increase them. Revocation semantics, transitive delegation, lifetime rules, and denial behaviour are normative and covered by property tests.

## IPC

IPC is typed at the user-space boundary through the native IDL. The kernel transports bounded messages, handles, and shared-memory grants without interpreting product protocols. Large transfers use explicitly mapped shared buffers and completion objects.

## Processes and scheduling

A process owns an address space and handle table. Threads are schedulable execution contexts. The first implementation targets deterministic single-core correctness, then preemptive SMP with priority inheritance, bounded critical sections, and measurable latency budgets.

## Drivers

Drivers run outside the kernel wherever hardware permits. Kernel-resident code is limited to interrupt, MMIO, DMA/IOMMU, and bootstrap mechanisms that cannot yet be delegated safely.

## Verification gates

- isolated user processes cannot access ungranted memory;
- forged, stale, and revoked handles fail deterministically;
- IPC rights transfer is tested under failure and cancellation;
- kernel panic evidence is structured and reproducible;
- unsafe Rust is locally justified, audited, and fuzzed;
- the same conformance suite runs in QEMU and physical-board bring-up.
