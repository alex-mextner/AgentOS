# Enabling System Spec

## ES.repo.001 Spec-led repository bootstrap

```yaml spec-section
id: ES.repo.001
spec: enabling-system
kind: enabling.architecture
title: Spec-led repository bootstrap
statement_type: admissibility
claim_layer: carrier
owner: human
status: active
valid_until: 2026-09-30
depends_on:
  - TS.boundary.001
supersedes: []
terms:
  - spec-led
  - build status
target_refs:
  - AGENTS.md
  - docs/specs/000-system-overview.md
  - docs/specs/001-bootstrap-toolchain.md
  - docs/plans/000-bootstrap-plan.md
  - docs/plans/001-mvp-to-maximum-plan.md
evidence_required:
  - kind: tool-check
    description: Local helper CLIs are checked before implementation work.
  - kind: repository
    description: No Rust workspace or simulator code is added before the owning spec exists.
```

Repository work is governed by written specs first. Agents must read
`docs/specs/` before modifying code, keep implementation plans in `docs/plans/`,
and respect the current build status instead of running heavy cargo commands
without an explicit build policy.
