<!-- Archive wrapper: recovered from opencode session ses_0f5b08028ffeqacZmxccad2Mx9. The whole file is historical evidence only and is not authoritative for any current repository contract. Recovered source content follows. -->

> **Archive notice:** This recovered opencode-session file is historical evidence only and is not authoritative for any current repository contract.

# HyperGit

[![mobile CI](https://github.com/hyperide/HyperGit/actions/workflows/mobile.yml/badge.svg)](https://github.com/hyperide/HyperGit/actions/workflows/mobile.yml)
[![release](https://github.com/hyperide/HyperGit/actions/workflows/release.yml/badge.svg)](https://github.com/hyperide/HyperGit/actions/workflows/release.yml)
[![issues](https://img.shields.io/github/issues/hyperide/HyperGit?color=blue)](https://github.com/hyperide/HyperGit/issues)

**An open-source replacement for GitHub** (git server, CI/CD, static hosting, snippets,
issues, agent work-logs, live presence, GraphQL, PRs, smart blame) **with a local-first
SwiftUI mobile app** (offline viewer for GitHub + Linear).

> Status: early development (Phase 1 — mobile MVP). The spec is authoritative:
> `docs/SPEC.md`. Documentation, issues, and PRs are English-only.

---

## What it is

HyperGit is an open-source GitHub replacement with a first-class local-first mobile
client, in one monorepo:

1. **Platform** (GitHub replacement) — git hosting on real bare repositories, a
   GitHub-Actions-compatible CI/CD, static/SSG hosting, snippets (gists), a `gh` CLI
   shim, issues, agent work-logs attached to commits, a Notion-like wiki, live presence
   ("who is editing what, where" — in the IDE and at the agent-hook level), GraphQL +
   webhooks, PRs, fast smart blame, and smart search (fuzzy + index + symbols + AI). See
   SPEC §1 (`docs/SPEC.md#1-hypergit--the-github-replacement-platform`).
2. **Mobile** (SwiftUI, local-first) — offline access to repositories, files, PRs,
   issues, commits (GitHub) and tickets (Linear); semantic diff, AI questions, smart
   search/blame. See SPEC §2 (`docs/SPEC.md#2-hypergit-mobile--swiftui-local-first-the-current-concrete-scope`).

**Non-goals:** other VCS (git only), a projects board (use Linear), an in-browser IDE
(that's hyperide). See SPEC §3 (`docs/SPEC.md#3-non-goals-what-we-do-not-build`).

## Repository layout

```
docs/SPEC.md     # master spec — source of truth
server/          # platform backend (git server, API, CI, hosting) — planned
mobile/          # SwiftUI iOS app + HyperGitCore (Phase 1)
ci/              # rig-managed CI gate scripts
.github/         # workflows, PR template (rig-managed)
rig.yaml         # declarative repo guardrails
AGENTS.md        # conventions for agents (and humans)
```

## Mobile — quick start

```sh
cd mobile

# Core library + tests (works without Xcode, on a macOS host)
swift build
swift test --parallel

# iOS app (needs Xcode — locally or in CI)
brew install xcodegen
xcodegen generate
xcodebuild -scheme HyperGit -destination 'generic/platform=iOS Simulator' build
# or open HyperGit.xcodeproj in Xcode and run on a simulator
```

To use the app: open **Settings**, paste a GitHub PAT (`repo` scope) and/or a Linear API
key, then pull-to-refresh on Repos / Tickets. Everything fetched is cached and works
offline.

Architecture (`mobile/`): `Views → AppStore (@Observable, @MainActor) →
RepositorySource / TicketSource (protocols) → GitHubClient / LinearClient → CacheStore`.
The backend sits behind a protocol so GitHub can be swapped for HyperGit later without
touching the UI. Details in `mobile/README.md`.

## Releases & TestFlight

- **Releases:** tagged builds ship a Simulator `.app` artifact (no Apple account needed)
  via the `release` workflow. See [Releases](https://github.com/hyperide/HyperGit/releases).
- **TestFlight:** the `testflight` workflow builds a signed `.ipa` and uploads it to App
  Store Connect. It requires Apple signing secrets and is gated behind the
  `ENABLE_TESTFLIGHT` repo variable. Setup: `docs/testflight.md`.

## Roadmap

- **Phase 0–1** ✅ — bootstrap, spec, conventions, mobile scaffold, GitHub client
  ([#1](https://github.com/hyperide/HyperGit/issues/1),
  [#2](https://github.com/hyperide/HyperGit/issues/2)).
- **Phase 1 (in progress)** — Linear client [#3](https://github.com/hyperide/HyperGit/issues/3),
  SwiftData cache [#4](https://github.com/hyperide/HyperGit/issues/4),
  UI screens [#5](https://github.com/hyperide/HyperGit/issues/5).
- **Phase 2** — semantic diff, AI questions, smart search/blame [#7](https://github.com/hyperide/HyperGit/issues/7).
- **Phase 3** — platform backend (Forgejo/Gitea fork decision) [#6](https://github.com/hyperide/HyperGit/issues/6).

Full picture: SPEC §6 (`docs/SPEC.md#6-roadmap-phases`).

## Conventions

- **Commits:** Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`), atomic, often.
- **Branches:** feature branch → PR (squash-merge). `main` stays green; CI gates are not
  bypassed.
- **Spec:** any behavior change updates `docs/SPEC.md` in the same PR.
- **Tasks:** GitHub Issues (via the `task` CLI).
- **Agents are first-class:** APIs/hooks/UI are designed for machines too.

More in `AGENTS.md`.

## License

Open source. The exact license is TBD (see
SPEC §5 (`docs/SPEC.md#5-open-source-alternatives-research`) — a Forgejo/Gitea fork, MIT,
is under consideration).
