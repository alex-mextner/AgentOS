<!-- Archive wrapper: recovered from opencode session ses_0f5b08028ffeqacZmxccad2Mx9. The whole file is historical evidence only and is not authoritative for any current repository contract. Recovered source content follows. -->

> **Archive notice:** This recovered opencode-session file is historical evidence only and is not authoritative for any current repository contract.

## What
Research and decide the platform backend (SPEC §5/§8): fork/reuse Forgejo (Go, MIT, Actions-compatible) vs Gitea vs custom. Evaluate: Actions compatibility, GraphQL, extensibility (work-logs, live presence, smart search/blame), licensing, and the cost of extensions. Outcome: an RFC in `docs/`.

## Acceptance
- RFC `docs/specs/backend-decision.md` comparing options
- GitHub Actions compatibility assessment (act/runner)
- Assessment of HyperGit extension points (work-logs, presence, search)
- Decision recorded in SPEC §5/§8

## Why
SPEC §5: do not build from scratch; reuse mature work; the decision blocks Phase 3.

## Impact
Determines the entire server architecture and Phase 3 speed.

## If not done
Phase 3 cannot start; risk of rebuilding what already exists.
