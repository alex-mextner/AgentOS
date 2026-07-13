---
id: "AOS-PLAN-008"
title: "Linear and GitHub Operating Model"
status: "Normative planning baseline"
version: "1.0.0"
baseline_date: "2026-07-13"
owners: "Agent OS Architecture Council"
audience: "Engineering, product, security, legal, and program leadership"
summary: "GitHub as the source of truth, Linear as operational planning, and a reproducible import/reconciliation process."
---

# Linear and GitHub Operating Model

> GitHub as the source of truth, Linear as operational planning, and a reproducible import/reconciliation process.

## Table of Contents

- [Workspace Model](#workspace-model)
- [GitHub Structure](#github-structure)
- [Linear Model](#linear-model)
- [Import and Post-Import Flow](#import-flow)
- [Status and Priority Mapping](#status-model)
- [Gantt and Dependency Visualization](#gantt-in-linear)
- [Agent Operating Rules](#agent-rules)

<a id="workspace-model"></a>

## Workspace Model

Use **GitHub** as the authoritative code/spec/evidence repository and **Linear** as the schedule, ownership, dependency, and program-status view. The canonical portable task dataset remains [`tasks.csv`](AOS-PLAN-009.md#canonical-schema); platform-specific imports are derived artifacts.

<a id="github-structure"></a>

## GitHub Structure

Recommended repositories:

- `smp-specs` — normative documents, ADRs, source/claim/experiment registers.
- `smp-kernel` — kernel, architecture ports, kernel tests, formal models.
- `smp-platform` — IDL, drivers, services, board packages, build SDK.
- `smp-product` — entity/action/history runtime, shell, stock experiences.
- `smp-hardware-lab` — public-safe board evidence, fixtures, traces, lab tooling.
- `smp-security` — advisories, threat/assurance material, disclosure tooling as appropriate.
- `smp-infra` — CI, release, artifact, reproducibility, dashboards.

Use repository CODEOWNERS, branch protection, required tests, signed release tags, issue templates, DCO checks, dependency review, secret scanning, provenance/SBOM generation, and release evidence bundles.

<a id="linear-model"></a>

## Linear Model

- One workspace; teams aligned with stable ownership groups rather than every temporary track.
- Projects correspond to the project codes in the canonical CSV.
- Project milestones correspond to M0–M11 and appear on the project timeline.
- Issue relations encode blocking dependencies; project dependencies encode cross-project sequencing.
- Cycles are used for short execution commitments, not for multi-year roadmap truth.
- Initiatives may group Core OS, Product, Hardware, and Productization portfolios.
- Project updates link evidence, risk changes, and gate status rather than restating activity.

<a id="import-flow"></a>

## Import and Post-Import Flow

1. Import `imports/linear-issues.csv` into a staging team.
2. Verify title, description, priority, status, labels, and estimates.
3. Create/import projects from `imports/projects.csv`.
4. Create milestones from `imports/milestones.csv` and assign target dates.
5. Apply parent, project, milestone, and dependency relationships from `imports/dependencies.csv` and canonical task fields using an agent/API pass.
6. Resolve owners by role map; leave unknown humans unassigned rather than guessing.
7. Sample at least ten issues across tracks and compare against canonical rows.
8. Lock generated CSVs as derived; edit `tasks.csv` or the live tracker through an approved synchronization process.

CSV import tools may not preserve all relationship and project metadata. The post-import pass is mandatory and idempotent.

<a id="status-model"></a>

## Status and Priority Mapping

| Canonical status | Linear/GitHub meaning |
| --- | --- |
| Backlog | valid but unscheduled |
| Ready | dependencies satisfied and acceptance criteria complete |
| In Progress | owned and actively worked |
| Blocked | explicit blocker/task/source/vendor/legal dependency |
| In Review | implementation/evidence under review |
| Done | acceptance and evidence verified |
| Cancelled | intentionally closed with rationale |

Priority uses `P0 Critical`, `P1 High`, `P2 Medium`, `P3 Low`. “Urgent” is reserved for incident response or a time-critical external deadline, not architectural importance.

<a id="gantt-in-linear"></a>

## Gantt and Dependency Visualization

Linear’s project timeline can render projects, milestones, and dependencies as the operational Gantt view. Keep the Mermaid Gantt in the repository as a reviewable baseline and use Linear for live scheduling. A weekly automation compares milestone target dates and project status against the canonical export, reporting drift rather than overwriting live estimates silently.

<a id="agent-rules"></a>

## Agent Operating Rules

The import agent must preserve canonical IDs in descriptions and labels, resolve every cross-reference, create relationships only after all issue IDs exist, record failed mutations, avoid assigning people by inference, and produce a reconciliation report. It may create draft issues/projects but may not close gates, alter acceptance criteria, or downgrade risks without an approved source change.
