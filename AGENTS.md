# HyperOS

A Fuchsia-architecture-inspired mobile OS product prototype, written in Rust,
with a Pixel 9 form-factor simulator as the MVP acceptance target and a staged
roadmap toward real device operation.

## Status

Early bootstrap. Stack and scope being finalized via specs in docs/specs/.

## Repository layout

- `crates/` — Rust crates (kernel, drivers, services, user-space components).
- `sim/` — Simulator harness and device model for Pixel 9 form-factor.
- `docs/specs/` — Authoritative specification documents. Read these before touching code.
- `docs/plans/` — Implementation plans derived from specs.
- `assets/` — Static assets (icons, fonts, graphics, test fixtures).

## How agents work in this repo

- Work is spec-driven: read `docs/specs/` before writing or modifying any code.
- Rust is the primary language; no other languages in `crates/` or `sim/` without a spec blessing it.
- Prefer LSP/code-intelligence tooling (`serena`, `sverklo`) for navigation and refactors over raw grep.
- One logical change per commit; use conventional commit messages (e.g. `feat:`, `fix:`, `chore:`).
- Never commit Cyrillic into `AGENTS.md`, `CLAUDE.md`, or any other agent-facing doc. English only.
- Exception: `docs/specs/005-opencode-source-assignment.md` may contain verbatim
  recovered source excerpts in their original language for traceability; the
  surrounding normative text must remain English.
- Do not run `cargo build` or `cargo test` without checking the current build status first — the dev machine may be under load.

## Build & test

TBD — toolchain being selected. Be careful with heavy compilation; the dev machine is under load.


## Sverklo — Code Intelligence

This project has the sverklo MCP server installed. Sverklo is a code-intelligence index: ranked search, dependency graph, persistent memory. Use it as the **default** tool for code discovery in this repo.

### MCP Config Files

- `.mcp.json` is the generic MCP client configuration.
- `.codex/config.toml` is the Codex-specific MCP configuration.
- Keep both files aligned when adding or removing project MCP servers.

### Always Do

- **MUST call `sverklo_overview` before exploring an unfamiliar directory.** It returns the PageRank-ranked map of the codebase in one call — much cheaper than `ls` + `Read` loops.
- **MUST use `sverklo_search` instead of Grep for any query that is conceptual or fuzzy** ("how does auth work", "anything related to billing", "where do we handle retries"). Grep is for exact strings only.
- **MUST use `sverklo_lookup` to find a symbol's definition** by name — never grep + Read for this.
- **MUST run `sverklo_impact` before renaming, deleting, or changing the signature of any function/class/method** that may be called from elsewhere. Report the blast radius (callers, depth) to the user before editing.
- **MUST use `sverklo_refs` to enumerate callers of a symbol.**

### Never Do

- **NEVER use Grep when the query is conceptual.** Grep cannot find "the auth flow" — sverklo_search can.
- **NEVER edit a function or class without first running `sverklo_impact`** on it. Silently breaking a caller is the most expensive bug this codebase produces.
- **NEVER ignore HIGH or CRITICAL impact warnings** without surfacing them to the user.
- **NEVER rename symbols with find-and-replace.** Use `sverklo_refs` first; it knows which "foo" is the function and which is a string.
- **NEVER re-read a file sverklo just returned a path for.** Use `sverklo_lookup` for the specific symbol instead.

### When Grep / Read still wins

| Task | Tool |
|---|---|
| Exact string match (`"TODO(alice)"`, error message text) | Grep |
| Read a known file at a known path | Read |
| Inspect a specific line range | Read with offset/limit |

### Exploration order

`sverklo_overview` (1 call) → `sverklo_search` (1 call) → `sverklo_lookup` on the top hit → `sverklo_refs` / `sverklo_impact` only if you need the blast radius. If you've made 5 sverklo calls and still don't have the answer, **stop and ask a clarifying question** — don't burn 10 more.

### Output discipline

No preambles ("Here are the results", "Great question"), no closing affirmations, no em-dashes as conversational pauses. State the finding, show the fix, stop. User instructions override this file.
