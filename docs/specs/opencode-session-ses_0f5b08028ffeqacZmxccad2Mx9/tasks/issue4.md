<!-- Archive wrapper: recovered from opencode session ses_0f5b08028ffeqacZmxccad2Mx9. The whole file is historical evidence only and is not authoritative for any current repository contract. Recovered source content follows. -->

> **Archive notice:** This recovered opencode-session file is historical evidence only and is not authoritative for any current repository contract.

## What
A persistence layer (SwiftData/SQLite): cache repos/tree/files/PRs/issues/tickets with freshness metadata. Background and on-demand sync; a merge strategy; a stale indicator. Everything downloaded works offline.

## Acceptance
- Cache of all entities survives restart and works in airplane mode
- Pull-to-refresh + background sync; stale/offline indicator
- Cache cleanup/limits (LRU by size)
- Tests for online → offline → online scenarios

## Why
SPEC §0/§2: local-first is a core principle; the app must work without a network.

## Impact
Code/PRs/tickets available anywhere; no spinners without a network.

## If not done
The app is useless offline — violating the core principle.
