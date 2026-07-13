# AgentOS Bootstrap Toolchain Spec

## Status

Active follow-up spec for the bootstrap phase. This spec owns the Rust workspace
shape, cheap verification policy, and build-status rules needed before any
subsystem implementation starts.

## Purpose

The bootstrap toolchain exists to make AgentOS buildable and inspectable without
turning early architecture work into a heavy compile loop. It must let agents and
humans answer three questions quickly:

- Which crates and simulator packages are part of the product?
- Which checks are cheap enough to run during normal agent work?
- Which heavier checks require an explicit build-status decision?

## MVP Scope

The MVP toolchain is a single Rust workspace with these logical members:

- `crates/kernel`: task, memory, scheduler, and handle primitives.
- `crates/core`: foundational identifiers, error types, and shared abstractions
  that are not owned by a narrower architectural layer.
- `crates/ipc`: capability message types, rights, and handle transfer helpers.
- `crates/drivers`: simulated device-facing abstractions used by services and
  the Pixel 9 simulator boundary.
- `crates/services`: process lifecycle, app launch, and display-service shells.
- `crates/ui`: surface data model, lifecycle event types, input event types, and
  first shell/app client integration points.
- `sim/pixel9`: Pixel 9 form-factor simulator harness and device model.

The MVP build policy is deliberately conservative:

- `cargo fmt --check` is allowed once the workspace exists.
- `cargo check -p <crate>` is allowed for a touched crate after the owning spec
  exists.
- Initial documented build command, once the workspace exists:
  `cargo build --workspace`.
- Initial cheap status command, once the workspace exists:
  `cargo metadata --format-version 1 --no-deps`.
- Full `cargo build`, full `cargo test`, and simulator smoke runs require
  checking current machine/load status first.
- No non-Rust implementation language is allowed under `crates/` or `sim/`
  unless a later spec explicitly admits it for a bounded path.

## Full Maximum Plan

The maximum toolchain plan adds:

- Workspace feature profiles for simulator, host tests, and future hardware
  bring-up experiments.
- Deterministic simulator smoke-test artifacts suitable for CI upload.
- Incremental dependency audit and license reporting.
- A fast `status` command that reports workspace health without compiling every
  crate.
- CI gates split into cheap preflight, targeted crate checks, simulator smoke,
  and long-running verification lanes.

## Repository Layout Contract

The workspace must preserve the product boundaries from
`docs/specs/000-system-overview.md`:

- Kernel primitives stay in kernel-owned crates.
- Foundational shared types stay in `crates/core` only when no narrower layer
  owns them; layer-specific types must not drift into `crates/core`.
- IPC types and transfer rules stay in the IPC layer.
- Driver/device abstractions stay in driver-owned crates or simulator-owned
  device models; user-space services consume them through explicit interfaces.
- User-space services do not import simulator internals.
- The compositor/display service implementation belongs to `crates/services`;
  `crates/ui` owns shared UI data types and client-side contracts.
- Driver-facing service interfaces must be capability or IPC mediated, and any
  real device class added after MVP needs an owning spec section before code.
- Simulator code drives device evidence but is not a dumping ground for product
  logic.
- Plans stay in `docs/plans/`; authoritative behavior stays in top-level
  `docs/specs/*.md`, excluding `docs/specs/source-session-*` archival
  appendices. This flat top-level spec structure is intentional until a later
  spec changes the ingestion contract.
- Any `docs/specs/source-session-*` archival appendix file must carry a visible
  non-authoritative notice before recovered body content; Markdown files may
  have a wrapper title first, but must render the notice visibly, not only in
  HTML comments. Raw source copies under `docs/specs/source-session-*/originals/`
  are exempt because they preserve the original files unchanged. Non-original
  appendix files must be Markdown so the visible notice can be rendered and
  checked consistently.
- Spec consumers must use `scripts/list-authoritative-specs.sh` for current
  authoritative spec ingestion; `scripts/check-doc-archives.sh` verifies archive
  notices and rejects top-level archive files that would blur the contract. The
  guard is covered by `scripts/test-doc-archives.sh`.

## Acceptance Evidence

This spec is satisfied for MVP when:

- A root Cargo workspace exists with the MVP logical members or documented
  placeholders for them.
- The documented build command is `cargo build --workspace`.
- The cheap status/check command is
  `cargo metadata --format-version 1 --no-deps`.
- The cheap documentation archive checks are `scripts/list-authoritative-specs.sh`
  `scripts/check-doc-archives.sh`, and `scripts/test-doc-archives.sh`.
- The repository states which commands are safe to run under normal machine
  load.
- At least one targeted check can run without invoking a full simulator boot.
