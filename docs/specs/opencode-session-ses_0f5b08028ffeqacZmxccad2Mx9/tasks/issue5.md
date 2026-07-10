<!-- Archive wrapper: recovered from opencode session ses_0f5b08028ffeqacZmxccad2Mx9. The whole file is historical evidence only and is not authoritative for any current repository contract. Recovered source content follows. -->

> **Archive notice:** This recovered opencode-session file is historical evidence only and is not authoritative for any current repository contract.

## What
SwiftUI screens: repo list, file tree, file viewer (highlighting), PR list/details/diff, GitHub Issues, Linear tickets. State via an `@Observable` Store/ViewModel; `NavigationStack` navigation.

## Acceptance
- Repo list with search; drill into the tree
- File tree + content viewer (with basic highlighting)
- PR list + details (meta, files diff, checks)
- GitHub Issues + Linear tickets lists/details
- Drift states: loading / error / empty / offline (stale)

## Why
SPEC §2.2: the visible MVP result — view code/PRs/tickets offline.

## Impact
The app becomes usable day-to-day.

## If not done
No UI — data exists but there is nowhere to view it.
