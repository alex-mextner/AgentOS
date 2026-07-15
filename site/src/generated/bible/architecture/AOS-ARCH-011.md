---
id: "AOS-ARCH-011"
title: "Compatibility and Pixel 9 Legacy Policy"
status: "Normative planning baseline"
version: "1.0.0"
baseline_date: "2026-07-13"
owners: "Agent OS Architecture Council"
audience: "Engineering, product, security, legal, and program leadership"
summary: "Strict quarantine of Android/Linux to Pixel 9 research, temporary sidecar rules, trace replay, retirement records, and future compatibility admission."
---

# Compatibility and Pixel 9 Legacy Policy

> Strict quarantine of Android/Linux to Pixel 9 research, temporary sidecar rules, trace replay, retirement records, and future compatibility admission.

## Table of Contents

- [Compatibility Policy](#compatibility-policy)
- [Pixel 9 Legacy Boundary](#pixel-legacy-boundary)
- [Legacy Dependency Record](#legacy-dependency-record)
- [Temporary Sidecar Pattern](#sidecar-pattern)
- [Trace Capture and Replay](#trace-replay)
- [Optional Future Compatibility Cells](#optional-future-cells)
- [Anti-Leakage Controls](#anti-leakage-controls)
- [Acceptance Evidence](#acceptance)
- [Planning Reference Anchors](#planning-reference-anchors)

<a id="compatibility-policy"></a>

## Compatibility Policy

Agent OS has no requirement to expose Linux, Android, POSIX, Binder, Java, or glibc as its native application contract. Compatibility may be introduced later as isolated user-space cells when a measured product need justifies the security, maintenance, licensing, and performance cost. Such cells cannot define the core service architecture.

<a id="pixel-legacy-boundary"></a>

## Pixel 9 Legacy Boundary

Android and Linux are permitted only within the Pixel 9 hardware research track and only in the following roles:

- stock-device behavioral oracle and quality baseline;
- acquisition path for lawfully distributable firmware or public sources;
- trace and state-transition collector;
- differential test environment;
- protocol observation environment approved by counsel;
- temporary sidecar that exposes a narrow Agent OS hardware-service contract during staged bring-up;
- reference implementation used to write independent behavioral specifications.

They are prohibited as dependencies of the Agent OS kernel, portable system services, product runtime, entity/action schemas, non-Pixel board ports, or public SDK.

<a id="legacy-dependency-record"></a>

## Legacy Dependency Record

Every Pixel legacy dependency has a record containing:

- exact component and version;
- purpose and required output;
- legal basis and redistribution status;
- data and device access;
- interface exposed to Agent OS;
- contamination/taint classification;
- native replacement owner;
- retirement condition and latest acceptable milestone;
- test proving the replacement is behaviorally compatible.

<a id="sidecar-pattern"></a>

## Temporary Sidecar Pattern

A sidecar, when approved, runs outside the portable trust boundary and communicates through an authenticated, versioned hardware-service protocol. It never exposes Binder objects, Linux file descriptors, ioctls, device nodes, Android HAL structs, or vendor-specific C ABIs to portable code. The adapter translates them into Agent OS types and declares semantic gaps.

<a id="trace-replay"></a>

## Trace Capture and Replay

Pixel observations are converted into sanitized, typed traces: state transitions, timing classes, protocol messages where lawful, error conditions, and expected effects. Traces exclude personal data, account credentials, cryptographic keys, operator secrets, and proprietary binary content. The QEMU simulator and service fakes replay these traces to test portable state machines.

<a id="optional-future-cells"></a>

## Optional Future Compatibility Cells

A future compatibility cell may implement a bounded non-native bytecode runtime or protocol environment in an unprivileged process. Android, Linux, POSIX, Binder, glibc, and Linux system-call compatibility remain prohibited outside the Pixel 9 research boundary unless a later architecture decision explicitly changes this policy. Admission requires a threat model, license analysis, feature-coverage statement, update ownership, isolation tests, resource limits, a removal strategy, and a measured product justification. Compatibility is a provider, not an entitlement to ambient device access.

<a id="anti-leakage-controls"></a>

## Anti-Leakage Controls

CI rejects portable crates that import Pixel adapter packages or match forbidden type names and include paths. Build manifests for QEMU and documented boards must succeed with the entire Pixel tree absent. Public documentation and SDK examples use only Agent OS contracts.

<a id="acceptance"></a>

## Acceptance Evidence

- The portable system builds and tests after deleting Pixel adapter directories.
- A Pixel sidecar can be replaced by a trace-replay backend without product code changes.
- No Android/Linux ABI type appears in generated portable APIs.
- Each legacy component has an owner and retirement gate.
- Clean-room implementation tests use behavioral specifications rather than proprietary source.
- An optional future compatibility-cell proposal cannot merge without the admission package.

<a id="planning-reference-anchors"></a>

## Planning Reference Anchors

These fine-grained anchors give the execution plan stable links into this specification. They are normative pointers: the linked canonical section remains the full requirement source.

<a id="compatibility-cells"></a>

### Compatibility Cells

For planning, conformance, and task cross-references, **Compatibility Cells** denotes the part of this specification governed primarily by [Optional Future Compatibility Cells](#optional-future-cells). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="linux-reference-code"></a>

### Linux Reference Code

For planning, conformance, and task cross-references, **Linux Reference Code** denotes the part of this specification governed primarily by [Temporary Sidecar Pattern](#sidecar-pattern). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.

<a id="retirement-requirement"></a>

### Retirement Requirement

For planning, conformance, and task cross-references, **Retirement Requirement** denotes the part of this specification governed primarily by [Legacy Dependency Record](#legacy-dependency-record). Implementations using this label MUST apply the requirements, failure behavior, evidence obligations, and portability or security boundaries of that section together with any narrower task acceptance criteria.
