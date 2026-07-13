# Changelog

All notable changes to this repository are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/). This project has not yet cut a
semantic version for the whole repository; the engineering bible tracks its own
`1.0.0-foundation` release (see `engineering-bible/MANIFEST.md`).

## [Unreleased]

### Added

- `scripts/check-cyrillic.sh`, `scripts/check-links.sh`, `scripts/gen-checksums.sh`,
  `scripts/check-framing.sh`, and `scripts/validate-all.sh` — the documentation-integrity
  gate that was previously described only as prose in
  `engineering-bible/validation/VALIDATION.md`. Portable across macOS and Linux
  (bash + python3 stdlib + shasum/sha256sum).
- `CHANGELOG.md` (this file).

### Changed

- Refreshed the top-level `README.md` to name `engineering-bible/` as the single source of
  truth, describe the four-audience portal (Build OS / Developers / Investors / Users), make
  the Fuchsia-fork kernel framing explicit, and point "Start here" links at
  `engineering-bible/` instead of the deprecated `knowledge/` mirror.

### Notes

- `engineering-bible/validation/VALIDATION.md` under-enumerates the Cyrillic-bearing files:
  it lists five research/provenance files but omits `engineering-bible/AgentOS.md` (the raw
  Russian wishlist source digest) and `engineering-bible/diagrams/005-source-session-assignment.md`
  (the recovered source-session trace). Both are archival provenance, not normative specs, and
  are allowlisted in `scripts/check-cyrillic.sh`. VALIDATION.md's prose should be reconciled
  with the script's allowlist in a follow-up.

## 2026-07-13 — Foundation consolidation and handoff continuation

### Added

- Full Foundation corpus imported under `engineering-bible/` (142+ `AOS-*` documents,
  digests, diagrams, atlases), with PDF provenance and per-file SHA-256 checksum manifests,
  a validation suite (unique IDs, no duplicates, zero broken links, zero Cyrillic in
  normative specs), migration notes, and a single-source-of-truth policy.
- Four-audience public portal front door under `portal/` (Build OS, Developers, Investors,
  Users), with the Wiki sourced from the canonical engineering bible.
- Consolidated master handoff (`engineering-bible/handoffs/HANDOFF-MASTER.md`) indexing all
  outstanding work.

### Changed

- Corrected kernel-approach framing across the corpus: the plan is and always was to **fork
  the entire Fuchsia tree** (Zircon, DFv2, FIDL, Magma, Scenic/Flatland, Starnix taken
  as-is) and build the Rust-first product layer on top — not to author an owned microkernel
  from scratch. `ADR-0001` retitled accordingly.
- Normalized the product name to "Agent OS" (stable IDs use `AOS-*`); zero `HyperOS`
  references remain in the docs.

### Deprecated

- `knowledge/` marked as a legacy compatibility mirror (`knowledge/DEPRECATED.md`);
  `engineering-bible/docs/**` is authoritative.

### Archived

- The Pixel 9 hardware target is archived under `ADR-0007` in favour of a demo-brick
  bring-up track; the Fuchsia-fork software approach remains current.
