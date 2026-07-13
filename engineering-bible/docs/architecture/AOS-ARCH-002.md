---
id: "AOS-ARCH-002"
title: "Microkernel Specification"
status: "Normative planning baseline"
version: "1.0.0"
baseline_date: "2026-07-13"
owners: "Agent OS Architecture Council"
audience: "Engineering, product, security, legal, and program leadership"
summary: "Scope, object model, syscall discipline, unsafe policy, fault behavior, determinism, and acceptance for the forked Fuchsia/Zircon microkernel."
---

# Microkernel Specification

> Scope, object model, syscall discipline, unsafe policy, fault behavior, determinism, and acceptance for the forked Fuchsia/Zircon microkernel.

## Table of Contents

- [Kernel Scope](#kernel-scope)
- [Kernel Object Model](#kernel-objects)
- [System Call Budget](#syscall-budget)
- [Implementation Language and Unsafe Policy](#kernel-language)
- [Object Lifetime and Destruction](#object-lifetime)
- [Fault and Panic Model](#fault-model)
- [Time and Deterministic Test Mode](#time-and-determinism)
- [Formal Methods Path](#formal-methods-path)
- [Performance Principles](#performance-principles)
- [Kernel Acceptance](#kernel-acceptance)
- [Planning Reference Anchors](#planning-reference-anchors)

<a id="kernel-scope"></a>

## Kernel Scope

The Agent OS kernel is a fork of Fuchsia's Zircon microkernel, providing isolation, explicit authority, scheduling, memory protection, and hardware mediation. Zircon supplies the object and capability model; the project adds board drivers and product layers and maintains the fork. Its first acceptance target is QEMU/FEMU because deterministic evidence and rapid iteration are essential.

Kernel-resident objects are limited to those whose invariants require privileged enforcement or fast cross-domain coordination. Filesystems, device policy, network protocols, graphics policy, package management, entity semantics, agent policy, and most security policy remain in user space.

<a id="kernel-objects"></a>

## Kernel Object Model

Initial object classes:

- task/job domain;
- process/address space;
- thread;
- memory object and mapping;
- endpoint/channel;
- event and wait set;
- interrupt object;
- timer;
- I/O resource and MMIO window;
- DMA domain/buffer;
- debug/evidence stream with build-time restrictions.

Every object is referenced through a capability-bearing handle in a per-process capability space. Raw kernel pointers and global numeric object identifiers are never user-visible authority.

<a id="syscall-budget"></a>

## System Call Budget

The initial syscall groups are:

1. handle/capability operations;
2. IPC send, receive, call, and wait;
3. thread/process creation and lifecycle;
4. memory-object creation, mapping, protection, and query;
5. time, timers, and wait sets;
6. interrupt acknowledgement and binding;
7. DMA and I/O resource operations for authorized driver domains;
8. controlled debugging and evidence collection.

Every proposed syscall must answer why a user-space service plus existing primitives cannot implement the behavior. The architecture council reviews syscall count, semantic overlap, privilege, denial behavior, and lifetime rules before acceptance.

<a id="kernel-language"></a>

## Implementation Language and Unsafe Policy

The kernel is Rust-first and `no_std`. Architecture entry, context-switch, atomic, and selected low-level paths may use assembly or tightly scoped unsafe Rust. Each unsafe block documents the invariant it establishes, the caller obligation, and the tests or formal model that cover it. Unsafe code is concentrated in architecture, memory-management, and hardware-access modules rather than spread through object policy.

<a id="object-lifetime"></a>

## Object Lifetime and Destruction

Capabilities hold references to kernel objects. Object destruction occurs only when the last reference and kernel-internal dependency are released, with explicit rules for peer closure, outstanding IPC, mapped memory, interrupt binding, and DMA. Destruction must not block indefinitely on a user process. Resource cleanup is observable through typed peer-closed and cancellation events.

<a id="fault-model"></a>

## Fault and Panic Model

User faults terminate or suspend the offending thread/process according to policy delegated to the process manager. Driver faults are isolated to their domain. Kernel invariant violations produce a structured crash record, halt or controlled reboot according to the build profile, and preserve the last evidence buffer when possible.

Production kernels must not continue after an integrity-critical invariant failure merely to preserve availability. Recoverable allocation pressure, timeouts, revoked capabilities, malformed messages, and user page faults are normal typed errors, not panics.

<a id="time-and-determinism"></a>

## Time and Deterministic Test Mode

The kernel exposes monotonic and wall-clock abstractions separately. QEMU test builds support virtual time, deterministic event ordering within declared constraints, seeded scheduling perturbation, and replayable fault injection. Production scheduling remains preemptive; no public user-space contract may depend on cooperative yield points.

<a id="formal-methods-path"></a>

## Formal Methods Path

Agent OS does not claim whole-kernel verification at inception. It does require executable models for capability derivation/revocation, IPC state transitions, object lifetime, and selected scheduler invariants. The project should use TLA+, Alloy, Lean, Coq, Isabelle/HOL, Kani, Prusti, or equivalent tools where they materially reduce risk. The seL4 proof program is prior art and a quality reference, not a claim that Agent OS inherits its proofs.

<a id="performance-principles"></a>

## Performance Principles

Optimize only after semantics are stable and measured. Priority paths are IPC, context switch, page fault, timer wake, display buffer handoff, and audio/camera streaming. Zero-copy is permitted only when ownership, revocation, cache coherency, and information leakage are explicit. A fast path may not bypass capability checks or observability requirements.

<a id="kernel-acceptance"></a>

## Kernel Acceptance

Kernel v0.1 requires:

- x86_64 QEMU boot to the first user process;
- preemptive threads and timers;
- isolated address spaces and guarded user copy;
- capability creation, derivation, transfer, and denial;
- synchronous and asynchronous IPC;
- typed process fault delivery;
- one virtual interrupt-backed driver;
- fuzz and property tests for handles and IPC;
- a versioned kernel ABI manifest and boot evidence bundle.

<a id="planning-reference-anchors"></a>

## Planning Reference Anchors

These fine-grained anchors give the execution plan stable links into this specification. They are normative pointers: the linked canonical section remains the full requirement source.

<a id="assurance-boundary"></a>

### Assurance Boundary

For planning, conformance, and task cross-references, **Assurance Boundary** denotes the part of this specification governed primarily by [Formal Methods Path](#formal-methods-path). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="boot-and-architecture"></a>

### Boot And Architecture

For planning, conformance, and task cross-references, **Boot And Architecture** denotes the part of this specification governed primarily by [Kernel Scope](#kernel-scope). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="implementation-language"></a>

### Implementation Language

For planning, conformance, and task cross-references, **Implementation Language** denotes the part of this specification governed primarily by [Implementation Language and Unsafe Policy](#kernel-language). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="kernel-non-goals"></a>

### Kernel Non Goals

For planning, conformance, and task cross-references, **Kernel Non Goals** denotes the part of this specification governed primarily by [Time and Deterministic Test Mode](#time-and-determinism). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.
