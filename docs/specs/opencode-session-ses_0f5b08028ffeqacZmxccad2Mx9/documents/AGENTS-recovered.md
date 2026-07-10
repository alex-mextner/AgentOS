<!-- Archive wrapper: recovered from opencode session ses_0f5b08028ffeqacZmxccad2Mx9. The whole file is historical evidence only and is not authoritative for any current repository contract. Recovered source content follows. -->

> **Archive notice:** This recovered opencode-session file is historical evidence only and is not authoritative for any current repository contract.

# Agent guide

Repository instructions for coding agents (Claude Code, Codex, etc.). This is the
canonical file; the other agent-guide filename is a symlink to it, so every agent
reads the same guide.

## Project: HyperGit

Open-source GitHub replacement (git server, CI/CD, hosting, snippets, issues, agent
work-logs, live-presence, GraphQL, PR, smart blame) **plus** a local-first SwiftUI
mobile app (GitHub + Linear offline viewer → evolving toward an agent-centric mobile OS).

**The spec is authoritative:** read `docs/SPEC.md` before touching any feature. If code
and spec disagree, the disagreement is the finding. Update the spec in the same PR that
changes behavior.

## Repo layout

```
docs/SPEC.md     # master spec — source of truth
server/          # platform backend (git server, API, CI, hosting)
mobile/          # SwiftUI iOS app (MVP)
ci/              # rig-managed CI gate scripts
.github/         # workflows, PR template (rig-managed)
rig.yaml         # declarative repo guardrails
```

## Commands

- **Swift (mobile):** `swift build` (package) · `xcodebuild -scheme HyperGit build` (app) · run on simulator via Xcode.
- **Tests:** `swift test`.
- **Tasks/issues:** use the `task` CLI (writes to GitHub Issues in this repo).
- **Guardrails:** `rig status` (drift) · `rig apply` (converge) · `rig doctor` (deps).
- **Review before commit:** `review diff -C .` (multi-model, read-only).

## Conventions

- **Git only** — no other VCS. Projects → Linear. Browser IDE → hyperide (not us).
- **Commits:** Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`), atomic, often.
- **Branches:** feature branch → PR (squash-merge). `main` stays green. CI gates are not
  bypassed (no `--no-verify`).
- **Spec sync:** any behavior change updates `docs/SPEC.md` in the same PR.
- **Agents are first-class users:** design APIs/hooks/UI so machines read and write them too.
- **Local-first on mobile:** everything downloadable must work offline; sync is background.
- **Minimal dependencies:** prefer native frameworks; justify every new dependency.
- **No secrets in git.** `.env*`, `*.key`, `*.pem`, `credentials.toml` are gitignored.

## Mobile stack (SwiftUI)

- Swift 6, strict concurrency (`async/await`, `@Observable`, Sendable).
- Layers: Views → Store/ViewModel → Services → Clients (GitHub/Linear REST+GraphQL) →
  Persistence (SwiftData/SQLite).
- Backend is abstracted behind protocols so GitHub can be swapped for HyperGit later.
