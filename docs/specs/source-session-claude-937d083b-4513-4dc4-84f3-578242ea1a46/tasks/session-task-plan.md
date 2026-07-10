# Session Task Plan

> Archive notice: recovered from Claude session 937d083b-4513-4dc4-84f3-578242ea1a46. This is historical execution planning evidence only.

## Phase 0: Recon — digest specs + survey toolchain

- Description: Read 3 reference docs (custom-os-fuchsia-spec.pdf, Fuchsia RU guide, Своя мобильная ОС.txt) + bonus PDFs; survey Rust toolchain, machine load, disk, Fuchsia/Android emulator availability, code-intel (sverklo/haft/serena), Rust-skill install mechanism. 5 background agents running.
- Active form: Running recon swarm

## Phase 1: Route blocked work into research CLI

- Description: What can't be executed now (real Fuchsia fork, FEMU on constrained mac, Pixel 9 target, Rust UI stack choice) → run through experimental `research` CLI. Evaluate the tool, capture behavior, file issues for problems in the tool's own repo.
- Active form: Running research on blocked topics

## Phase 2: Haft framing + brainstorm the architecture

- Description: Use h-frame to frame the engineering problem (prototype scope, simulator target, Fuchsia-fork strategy). Brainstorm product MVP slice. Synthesize recon digests + research into a decision record.
- Active form: Framing architecture with Haft

## Phase 3: Write specs in docs/specs/

- Description: Spec-driven per user instruction. Author: product-vision spec, architecture spec (Fuchsia-inspired component/capability model), prototype-scope spec (MVP slice), simulator-target spec (Pixel 9 form factor). These are authoritative for implementation.
- Active form: Writing specs

## Phase 4: Decide Rust stack via review brainstorm/quorum

- Description: Settle the contested decisions (Rust UI framework, simulator approach, component-model impl) using review brainstorm + quorum + review qa (experimental — evaluate & report). Record final decision via h-decide.
- Active form: Deciding stack via review CLI

## Phase 5: Scaffold Rust workspace (light build only)

- Description: Create cargo workspace: crates for core (component/capability runtime), shell/launcher, widget contracts, simulator host. cargo check only — NO heavy build while machine is under load. Install Rust agent skills first.
- Active form: Scaffolding Rust workspace

## Phase 6: Implement MVP slice via dynamic workflow (swarm)

- Description: Dynamic Workflow fanning out subagents: each owns a subsystem/widget (launcher, widget host, intent box / Flexlight, a few stock widgets, tag-based FS mock, agentic layer stub). Worktree isolation. Verify each. Mind compile load — stagger builds.
- Active form: Implementing MVP via workflow swarm

## Phase 7: Run prototype in Pixel 9 simulator + visual proof

- Description: Boot the shell in the chosen Pixel 9 form-factor simulator, capture screenshots (Playwright/Electron/native, NOT screencapture), read captures back critically (visual-proof-cycle), iterate until it actually renders the product ideas.
- Active form: Running sim + capturing visual proof

## Phase 8: Report results + tool feedback via tg, file issues

- Description: Final tg report with artifacts/screenshots. Report how experimental review qa + research CLIs behaved; file all problems as issues in those projects' repos (user's too). Self-check completeness + next ideas.
- Active form: Reporting + filing tool feedback
