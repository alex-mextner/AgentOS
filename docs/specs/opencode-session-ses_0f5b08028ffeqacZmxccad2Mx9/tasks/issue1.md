<!-- Archive wrapper: recovered from opencode session ses_0f5b08028ffeqacZmxccad2Mx9. The whole file is historical evidence only and is not authoritative for any current repository contract. Recovered source content follows. -->

> **Archive notice:** This recovered opencode-session file is historical evidence only and is not authoritative for any current repository contract.

## What
Create the SwiftUI iOS app skeleton in `mobile/` (SwiftPM Package + app target): app entry point, tab navigation (Repos/PRs/Issues/Search/Settings), `SourceRepository`/`BackendClient` protocols to abstract the data source (GitHub → HyperGit), base theme. Foundation for Phase 1 (SPEC §2).

## Acceptance
- `mobile/` has `Package.swift` (or `.xcodeproj`) and an app target
- `swift build` / `xcodebuild -scheme HyperGit build` passes without errors
- App entry point with tab navigation (Repos, PRs, Issues, Search, Settings)
- `SourceRepository`/`BackendClient` protocols defined (backend-swappable)
- `mobile/README.md` with build/run instructions

## Why
SPEC §2: the mobile MVP is the nearest concrete scope; without the scaffold no mobile feature can start.

## Impact
Unlocks all mobile work (GitHub/Linear clients, UI, offline cache).

## If not done
The mobile track does not start; Phase 1 is blocked.

> Resolved by PRs #8 + #9. iOS app builds green in CI.
