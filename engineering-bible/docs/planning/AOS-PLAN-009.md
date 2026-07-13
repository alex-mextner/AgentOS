---
id: "AOS-PLAN-009"
title: "Task CSV Data Dictionary and Agent Instructions"
status: "Normative planning baseline"
version: "1.0.0"
baseline_date: "2026-07-13"
owners: "Agent OS Architecture Council"
audience: "Engineering, product, security, legal, and program leadership"
summary: "Canonical task CSV schema, writing standard, import views, cross-reference format, agent sequence, and validation rules."
---

# Task CSV Data Dictionary and Agent Instructions

> Canonical task CSV schema, writing standard, import views, cross-reference format, agent sequence, and validation rules.

## Table of Contents

- [Canonical Schema](#canonical-schema)
- [Project Codes](#project-codes)
- [Field Dictionary](#field-dictionary)
- [Description and Acceptance Standard](#description-standard)
- [Specification and Task References](#xref-format)
- [Derived Import Artifacts](#import-artifacts)
- [Agent Procedure](#agent-procedure)
- [Validation Rules](#validation)

<a id="canonical-schema"></a>

## Canonical Schema

`docs/planning/tasks.csv` is the authoritative portable work dataset. UTF-8, RFC 4180 CSV quoting, one header row, one task per row. Multi-value fields use semicolons; prose may use Markdown. Empty means unknown/not assigned, never “not applicable” unless stated in prose.

<a id="project-codes"></a>

## Project Codes

Valid project/track codes are `AOS-CORE`, `AOS-PLAT`, `AOS-PROD`, `AOS-OPEN`, `AOS-CAM`, `AOS-CELL`, `AOS-P9`, `AOS-SEC`, `AOS-LEGAL`, `AOS-COMM`, `AOS-ODM`, and `AOS-DOCS`. Task IDs use `<project>-NNN`; epic IDs use `<project>-000`.

<a id="field-dictionary"></a>

## Field Dictionary

| Field | Required | Meaning |
| --- | --- | --- |
| `task_id` | yes | stable, unique canonical ID |
| `title` | yes | imperative, outcome-oriented title |
| `issue_type` | yes | Epic, Task, Spike, Experiment, Review, Decision, Purchase, Contact |
| `track` | yes | project code |
| `workstream` | yes | stable functional grouping |
| `parent_id` | for non-epics | parent epic/task ID |
| `summary` | yes | one-sentence outcome |
| `description` | yes | context, scope, implementation boundaries, exclusions |
| `acceptance_criteria` | yes | semicolon-separated, observable conditions |
| `dependencies` | as applicable | blocking task IDs, semicolon-separated |
| `related_tasks` | as applicable | non-blocking task IDs |
| `related_specs` | yes | document IDs with optional anchors, e.g. `AOS-ARCH-004#revocation` |
| `priority` | yes | P0, P1, P2, P3 |
| `risk` | yes | Low, Medium, High, Critical |
| `owner_role` | yes | role, not guessed person |
| `estimate_days` | yes | focused effort, numeric |
| `start_week` | yes | integer weeks from 2026-07-13 |
| `duration_weeks` | yes | calendar range including waits |
| `start_date` | generated | ISO date |
| `target_date` | generated | ISO date |
| `milestone` | yes | M0–M11 or `Continuous` |
| `status` | yes | canonical status |
| `github_labels` | yes | semicolon-separated labels |
| `linear_team` | yes | intended team name |
| `linear_project` | yes | intended project title |
| `deliverables` | yes | named outputs/files/artifacts |
| `verification` | yes | tests/review/measurement method |
| `evidence` | yes | expected log/report/trace/decision record |
| `source_refs` | as applicable | source IDs or claim IDs |

<a id="description-standard"></a>

## Description and Acceptance Standard

A description answers: why the task exists; included work; excluded work; interfaces or legal boundaries; expected artifacts; and why downstream work can trust the result. Acceptance criteria are independently observable and avoid verbs such as “consider,” “look into,” or “mostly works.” Experiments state hypothesis, variables, procedure, stopping rule, and evidence retention.

<a id="xref-format"></a>

## Specification and Task References

Use document references as `AOS-DOC-ID#explicit-anchor`. Documents contain explicit HTML anchors and machine comments according to [META-001](AOS-META-001.md#xref-syntax). Task references use canonical IDs; the generated `TASKS.md` gives every task an anchor equal to its lowercase ID.

<a id="import-artifacts"></a>

## Derived Import Artifacts

- `imports/linear-issues.csv` — human/API staging import.
- `imports/github-issues.csv` — issue creation view.
- `imports/projects.csv` — project metadata and date range.
- `imports/milestones.csv` — program milestone targets and exit criteria.
- `imports/dependencies.csv` — parent/blocking/related/project/milestone edges.
- `imports/agent-import-manifest.yaml` — ordered operations and reconciliation rules.

Derived files include the canonical task ID so they can be reconciled. They are regenerated, not hand-edited.

<a id="agent-procedure"></a>

## Agent Procedure

1. Validate CSV encoding, schema, unique IDs, date logic, milestone names, and dependency existence.
2. Load or create projects and milestones.
3. Create all epics, then all issues in dependency-independent batches.
4. Store canonical ID to platform ID mapping.
5. Apply parent and blocking relations.
6. Assign project, milestone, labels, estimates, dates, and owner only when mapping is explicit.
7. Add specification links to descriptions.
8. Produce counts by status/project and a list of unresolved operations.
9. Sample and compare full descriptions/criteria against canonical data.
10. Never delete or close existing work solely because a row is absent; emit a drift report.

<a id="validation"></a>

## Validation Rules

The validator fails on duplicate IDs, unknown dependencies, dependency cycles, missing epics, invalid priorities/statuses, nonnumeric estimates, impossible dates, unresolved specification IDs/anchors, weak acceptance criteria, or missing evidence. Warnings flag tasks wider than six weeks, tasks with no dependency in a mature chain, and high-risk work without a decision gate.
