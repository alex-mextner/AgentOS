# Target System Spec

## TS.environment.001 Simulator-visible capability OS prototype

```yaml spec-section
id: TS.environment.001
spec: target-system
kind: target.environment
title: Simulator-visible capability OS prototype
statement_type: definition
claim_layer: object
owner: human
status: active
valid_until: 2026-09-30
depends_on: []
supersedes: []
terms:
  - HyperOS
  - Pixel 9 form-factor simulator
  - capability handle
target_refs:
  - docs/specs/000-system-overview.md
  - docs/specs/001-bootstrap-toolchain.md
  - docs/specs/010-kernel-primitives.md
  - docs/specs/020-capability-ipc.md
  - docs/specs/030-pixel9-simulator.md
  - docs/specs/040-ui-composition.md
evidence_required:
  - kind: document
    description: docs/specs/000-system-overview.md and follow-up subsystem specs remain authoritative.
  - kind: runtime
    description: Future implementation provides simulator boot and IPC denial evidence.
```

HyperOS changes the repository from an empty skeleton into a Rust mobile OS
prototype whose observable target is a Pixel 9 form-factor simulator. The
prototype must demonstrate process/resource isolation, explicit capability-passing
IPC, and a simulator-visible UI surface before it can be treated as an MVP.

## TS.role.001 Capability-secure mobile prototype role

```yaml spec-section
id: TS.role.001
spec: target-system
kind: target.role
title: Capability-secure mobile prototype role
statement_type: definition
claim_layer: object
owner: human
status: active
valid_until: 2026-09-30
depends_on:
  - TS.environment.001
supersedes: []
terms:
  - HyperOS
  - capability handle
target_refs:
  - docs/specs/000-system-overview.md
  - docs/specs/010-kernel-primitives.md
  - docs/specs/020-capability-ipc.md
  - docs/specs/030-pixel9-simulator.md
  - docs/specs/040-ui-composition.md
evidence_required:
  - kind: document
    description: Follow-up subsystem specs preserve the role/capability/method/work split.
```

The target system's role is a capability-secure mobile OS prototype: it is
assigned to demonstrate isolation, explicit authority transfer, and a
simulator-visible app surface. Its capability is running the prototype in a Pixel
9 form-factor simulator; its methods and runtime work must be specified by later
subsystem specs.

## TS.boundary.001 Bootstrap target boundary

```yaml spec-section
id: TS.boundary.001
spec: target-system
kind: target.boundary
title: Bootstrap target boundary
statement_type: admissibility
claim_layer: object
owner: human
status: active
valid_until: 2026-09-30
depends_on:
  - TS.role.001
supersedes: []
terms:
  - HyperOS
  - Pixel 9 form-factor simulator
target_refs:
  - docs/specs/000-system-overview.md#architecture-boundaries
  - docs/specs/000-system-overview.md#non-goals
  - docs/specs/001-bootstrap-toolchain.md#repository-layout-contract
  - docs/specs/010-kernel-primitives.md#boundary-rules
  - docs/specs/020-capability-ipc.md#security-invariants
  - docs/specs/030-pixel9-simulator.md#evidence-contract
  - docs/specs/040-ui-composition.md#cross-boundary-contract
  - AGENTS.md#how-agents-work-in-this-repo
  - docs/specs/000-system-overview.md#acceptance-evidence
evidence_required:
  - kind: document
    description: Follow-up specs state which architecture boundary they touch.
```

Bootstrap work is inside the target boundary only when it contributes to the Rust
prototype, the Pixel 9 form-factor simulator, the capability IPC model, or the
first UI surface. Hardware boot, Android compatibility, cellular support,
production certification, and package management stay outside the boundary until
a later spec admits them.
