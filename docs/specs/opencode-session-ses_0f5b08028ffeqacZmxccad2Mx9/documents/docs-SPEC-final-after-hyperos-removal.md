<!-- Archive wrapper: recovered from opencode session ses_0f5b08028ffeqacZmxccad2Mx9. The whole file is historical evidence only and is not authoritative for any current repository contract. Recovered source content follows. -->

> **Archive notice:** This recovered opencode-session file is historical evidence only and is not authoritative for any current repository contract.

# HyperGit — Master Spec

> **Status:** Authoritative. The spec is the source of truth. If code and spec disagree,
> the disagreement is the bug — fix the code, or update the spec in the same PR.
> **Repo:** `git@github.com:hyperide/HyperGit.git` · **Org:** `hyperide`
> **Language:** All documentation, issues, and PRs are English-only.

HyperGit is an **open-source replacement for GitHub** — git hosting, CI/CD, static
hosting, snippets, issues, agent work-logs, live presence, GraphQL, pull requests, and
a fast smart blame — with a **local-first SwiftUI mobile client** that works offline
against GitHub and Linear today and against the HyperGit backend later.

Both halves grow from the same roots: **git as the universal data layer**, **agents as
first-class users**, and **local-first** mobile access.

---

## 0. Principles

- **Git is the only version control system.** No other VCS (see Non-goals).
- **Agents are first-class users.** Every API, log, hook, and UI surface is designed to
  be read and written by machines as well as people.
- **Local-first on mobile.** Code, PRs, issues, and tickets are downloaded and available
  offline; synchronization is background or on demand.
- **Open source.** Study and reuse existing alternatives where it is sensible rather than
  building from scratch (see §5).
- **The spec is authoritative.** Any behavior change is made through a spec change.

---

## 1. HyperGit — the GitHub replacement (platform)

### 1.1 Git hosting
- **Native bare repositories** as the storage backend. The server operates on real bare
  git repositories rather than inventing its own object store.
- Push/pull/fetch/clone over standard git protocols (SSH + HTTPS smart HTTP).
- Import existing repositories from GitHub/GitLab.

### 1.2 CI/CD (a GitHub Actions compatible clone)
- Workflow files (`*.yml`) compatible with the GitHub Actions format, supporting
  one-copy migration ("gh actions clone").
- **Templates** — a library of reusable workflow templates.
- **Easy multi-stages** — declarative pipelines with explicit stage boundaries, inter-stage
  artifacts, and fan-out / fan-in.
- Runners: self-hosted first (container-based), with optional cloud burst.
- Reuse: evaluate [act](https://github.com/nektos/act) / Gitea Actions for runner
  compatibility.

### 1.3 Static / SSG hosting (a GitHub Pages clone)
- Publish static sites and SSG output (build → artifact → serve).
- Branch/folder/tag binding, custom domains, HTTPS (Let's Encrypt).
- `gh docs`-compatible UX.

### 1.4 Snippets (a Gist clone)
- Versioned snippets with fork and comments.
- **`gh gist` CLI** compatibility plus a first-party CLI shim.
- **Linking with repos/orgs** — a snippet can reference a repo/file/line and vice versa.

### 1.5 `gh` CLI shim
- A drop-in wrapper over `gh` that routes to the HyperGit backend with the same UX
  (`gh repo`, `gh pr`, `gh issue`, `gh gist`, `gh run`).
- Graceful degradation: unimplemented commands transparently proxy to real GitHub.

### 1.6 Issues (tasks)
- Issues as first-class git objects (or a store synchronized with git).
- **Linear integration** — two-way sync (see Non-goals: Projects → Linear).

### 1.7 Work logs (agent JSONL logs attached to commits)
- Agents attach their work sessions (JSONL) to commits/PRs as trailer metadata or a
  dedicated ref.
- Logs are timeline-attached to a commit: what the agent read, what it changed, which tool
  calls it made, how long it took.
- UI: a "work history" view for a file/commit/PR.

### 1.8 README + Wiki (Notion-like)
- A block-based document editor (headings, code, tables, embeds, formulas, diagrams).
- Wiki per repo/org, two-way linked to code (references to symbols/lines), live preview.
- Documents versioned as git.

### 1.9 Live presence — "who is editing what, where"
- **In the IDE** — real-time indication of who (and which agent) is editing a
  file/line/symbol.
- **At the agent-hook level** — an agent registers activity through hooks; presence is
  visible to everyone.
- **Show agents alongside humans**: agent avatar, status (thinking/editing/idle), current
  task.
- Implementation: CRDT/OT for collaborative presence plus a pub/sub layer.

### 1.10 GraphQL API + Webhooks
- **GraphQL API** — the primary programmatic interface (as on GitHub).
- **Webhooks** — events for every entity, with retries and a dead-letter queue.

### 1.11 Pull requests
- Full PRs: diff, review, comments, approvals, checks, merge strategies.
- Semantic diff (see Mobile §2.2).

### 1.12 Smart blame
- **Fast and smart**: an index over git history with instant response on large repos.
- **Smart** — grouping, ignoring formatting/refactors (semantic blame via tree-sitter),
  attributing to the real logic change.

### 1.13 URL mappings
- Stable, human-readable URLs: `/org/repo/blob/sha/path#L12`, `/org/repo/-/tree/...`,
  symbol permalinks, deep links into the mobile app.
- Compatibility with familiar GitHub mappings plus extensions.

### 1.14 Smart search
- **Fuzzy** + **inverted index** + **semantic (AI)** + **by symbol** (LSP/tree-sitter).
- A single search across code, issues, documents, PRs, and commits.

### 1.15 Mobile client (see §2)
The local-first app is the first-class way to use the platform from a phone.

---

## 2. HyperGit Mobile — SwiftUI, local-first (the current concrete scope)

> This is **the MVP being built now**.

### 2.1 MVP goal
A SwiftUI iOS app that runs against the **GitHub API** (and later the HyperGit API) and
**Linear**, and allows **offline** browsing of:
- repositories, file tree, file contents (with highlighting);
- pull requests (list, details, diff, discussions, checks);
- issues/tickets (from GitHub Issues and Linear);
- commits, blame, history.

Everything fetched is cached locally (local-first); sync is background or on demand.

### 2.2 Mobile features
- **Semantic diffs** — diff by AST (added/changed/moved function) rather than by line.
- **AI: questions** — "explain this PR", "why this code", "what changed between tags"
  (an LLM over local context).
- **Files: tree + go-tos** — tree navigation, go-to-symbol, quick-open.
- **Smart search** — fuzzy + index + AI + by symbol (see §1.14).
- **GitHub support** — source #1 for the MVP.
- **Linear support** — download and offline-view tickets.

### 2.3 Mobile architecture (MVP)
- SwiftUI + `async/await`, `@Observable` (Swift 6 concurrency, strict concurrency).
- Layers: `App (Views)` → `ViewModels/Store` → `Services` → `Clients (GitHub/Linear
  REST+GraphQL)` → `Persistence (SwiftData/SQLite local cache)`.
- Dependencies behind protocols (testability; the backend can be swapped GitHub → HyperGit).
- Minimal third-party dependencies; prefer native frameworks.

### 2.4 Multiple backends
A `RepositorySource` abstraction reads from GitHub today and from the HyperGit backend
later, without reworking the UI.

---

## 3. Non-goals (what we do NOT build)

- **Other version control systems.** Git only. No Mercurial/SVN/etc.
- **Projects / boards.** We do not build project management — we use **Linear**.
- **An in-browser code-server / IDE.** That is **hyperide**'s domain (a separate product).
  HyperGit focuses on the platform (git / CI / hosting / presence UI).

---

## 4. Architecture & repository layout (monorepo)

```
HyperGit/
├── docs/
│   └── SPEC.md                 # this file — master spec (authoritative)
├── server/                     # git server, API, CI, hosting (platform backend)
├── mobile/                     # SwiftUI iOS app (MVP)
├── ci/                         # gate scripts (rig-managed)
├── .github/workflows/          # CI (rig-managed)
├── rig.yaml                    # declarative repo guardrails
└── AGENTS.md                   # conventions for agents
```

Stack (preliminary):
- **Backend**: language/runtime TBD (candidates evaluated in §5). REST + GraphQL.
- **Mobile**: Swift 6 / SwiftUI / SwiftData. Minimal external dependencies.
- **Git storage**: native bare repositories; indexes (blame/search) layered on top.

---

## 5. Open-source alternatives research

Before building the backend from scratch, study and where possible fork/reuse.

| Project | What it is | Relevance | Notes |
|---|---|---|---|
| **Gitea** | lightweight self-hosted git server (Go), issues, PR, Actions | High | Mature, Actions-compatible, active. Candidate #1 to fork/reuse. |
| **Forgejo** | community fork of Gitea, non-profit | High | Gitea-compatible under independent governance. |
| **Gogs** | predecessor of Gitea (Go), simpler/lighter | Medium | Less active; Gitea/Forgejo preferred. |
| **Codeberg** (Forgejo hosting) | reference instance | Low | Example deployment, not code. |
| **GitLab CE** | heavy all-in-one (Ruby/Go) | Low | Too heavy; does not fit the principles. |
| **radicle** | p2p git (no central server) | Medium (ideas) | Interesting local-first/p2p philosophy; different model. |
| **OneDev** | git server + CI (Java) | Medium | Built-in CI, but Java stack. |
| **sourcehut** | set of simple git services (Go) | Medium (ideas) | Simplicity aligns with our principles; no monolith. |
| **act** | local GitHub Actions runner | High (CI) | Actions runner compatibility. |
| **tree-sitter** | parsing for semantic diff/blame/search | High (smart features) | Foundation for semantic diff, smart blame, symbol search. |

**Provisional decision:** the backend forks/reuses **Forgejo/Gitea** (Go,
Actions-compatible, mature) plus HyperGit-specific extensions (work-logs, live presence,
smart search/blame, mobile API). Finalized by a dedicated research issue.

---

## 6. Roadmap (phases)

### Phase 0 — Bootstrap (done)
- [x] Repo `hyperide/HyperGit` created.
- [x] Master spec `docs/SPEC.md`.
- [x] `AGENTS.md` conventions.
- [x] CI / guardrails active (rig).
- [x] Tasks in GitHub Issues.

### Phase 1 — Mobile MVP (in progress)
- [x] SwiftUI app scaffold.
- [x] GitHub API client (auth, repos, tree, files, PRs, issues, commits, pagination).
- [ ] Linear client (tickets) — #3.
- [ ] Local-first cache (SwiftData) — #4.
- [ ] UI screens (repo list, file tree, file viewer, PR, issues, tickets) — #5.

### Phase 2 — Mobile smart features
- [ ] Semantic diff (tree-sitter).
- [ ] AI questions (LLM).
- [ ] Smart search (fuzzy + index + symbols).
- [ ] Smart blame.

### Phase 3 — HyperGit platform (backend)
- [ ] Backend decision (Forgejo/Gitea fork vs custom) — #6.
- [ ] GraphQL API + webhooks.
- [ ] CI/CD (Actions-compatible).
- [ ] Static hosting, snippets, gist shim, gh shim.
- [ ] Agent work-logs.
- [ ] Live presence (IDE + hooks).

---

## 7. Conventions

- **Commits:** Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`), atomic, often.
- **Branches:** feature branch → PR (squash-merge). `main` stays green; CI gates are not
  bypassed.
- **Spec:** updated in the same PR that changes behavior.
- **Tasks:** GitHub Issues in this repo (via the `task` CLI).
- **Agents:** read `AGENTS.md`; attach work-logs to commits (once the mechanism exists).
- **Language:** English-only for all documentation, issues, and PRs.

---

## 8. Open questions

- Backend language/stack and the degree of reuse from Forgejo/Gitea (research issue #6).
- Storage model for agent work-logs (git ref vs object vs dedicated store).
- Live-presence protocol (CRDT vs OT vs simple pub/sub) and IDE integration.
- Linear: two-way sync vs read-only for the MVP.
- License compliance when forking open-source (Forgejo: MIT).
