# HyperOS Bootstrap Plan

## Intent

Turn the empty repository skeleton into a spec-led Rust workspace without
starting subsystem implementation ahead of the architecture specs.

## Sequence

1. Land the system overview spec and tool governance setup.
2. Close the follow-up spec set named by `docs/specs/000-system-overview.md`:
   source-session trace, toolchain, kernel primitives, capability IPC, Pixel 9
   simulator, UI composition, and real-device operation roadmap.
3. Add the root Cargo workspace and placeholder crates only after
   `docs/specs/001-bootstrap-toolchain.md` defines the workspace shape, allowed
   cheap checks, documented build command, and current build-status policy.
4. Add the first smoke tests only after the owning spec defines acceptance
   evidence.
5. Add a scheduled or CI-driven `haft check --json` gate once the CI surface
   exists, so expiring `valid_until` dates are reported before they go stale.

## Current Build Status

There is no runnable code and no Cargo workspace yet. The follow-up specs now
define the intended workspace and subsystem contracts. Do not run `cargo build`
or `cargo test` until the Cargo workspace exists and
`001-bootstrap-toolchain.md` names the documented build/status commands for that
workspace.

## Verification For This Plan

- `haft doctor` must pass with zero failed checks.
- `haft spec check` must pass before relying on Haft spec coverage or plan
  commands.
- `sverklo reindex . --timing` should complete.
- `serena project health-check` may report no analyzable files until Rust source
  files exist; that result is expected during this phase.

## Fresh Checkout Haft Baselines

Haft stores SpecSection baselines in the operator's local SQLite state, not in
git. After cloning or switching machines, run `haft sync`, review the active
sections in `.haft/specs/`, then approve the bootstrap sections locally:

```bash
haft spec onboard --approve TS.environment.001 --approved-by "$USER"
haft spec onboard --approve TS.role.001 --approved-by "$USER"
haft spec onboard --approve TS.boundary.001 --approved-by "$USER"
haft spec onboard --approve ES.repo.001 --approved-by "$USER"
```

Rerun `haft spec check --json` after approval.
