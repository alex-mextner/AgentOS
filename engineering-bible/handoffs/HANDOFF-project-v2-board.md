---
id: AOS-HANDOFF-001
title: "Handoff — Populate GitHub Project v2 board"
status: handoff
audience: "claude code (or any agent with Projects access)"
---

# Handoff: Populate the Project v2 board

## Why this is a handoff
The fine-grained PAT used for docs/issues has **Contents + Issues** permissions but **no Projects
permission**. Every Project v2 GraphQL call (create, read, list, add-item) returns `FORBIDDEN`.
Classic Projects REST returns 404 (deprecated). So the board cannot be populated with that token.

**claude code run locally with the user's own `gh` auth does NOT need that token** — it has the
user's session, which includes Projects. This handoff is for that context.

## Preconditions
- `gh auth status` shows the user authenticated with `project` scope (run `gh auth refresh -s project,read:project` if not).
- Project exists: https://github.com/users/alex-mextner/projects/1
- Issues already exist: **#25–#43**, label `demo-brick` (the AOS-DEMO family + VOICE-001, ARCH-CAP-001, SEC-001).

## Step 1 — get the project node id
```bash
gh api graphql -f query='query{ user(login:"alex-mextner"){ projectV2(number:1){ id } } }'
```

## Step 2 — add all demo-brick issues to the project
```bash
PID=<project id from step 1>
for n in $(seq 25 43); do
  IID=$(gh api repos/alex-mextner/AgentOS/issues/$n --jq .node_id)
  gh api graphql -f query='mutation($p:ID!,$c:ID!){ addProjectV2ItemById(input:{projectId:$p,contentId:$c}){ item{ id } } }' -f p=$PID -f c=$IID
done
```

## Step 3 — create custom fields
Create single-select fields: **Phase**, **Track**, **Risk** (values from the tasks), and date
fields **Start**, **Target**. Use `gh api graphql` with `createProjectV2Field`. Field values per
issue come from the intake table in `engineering-bible/docs/planning/PLAN-017-demo-brick-task-intake.md`
and lane/status labels already on the issues.

## Step 4 — set status column + lane
Map the existing labels to the board's Status field:
- `status:next` → **Next**, `status:in-progress` → **In progress**, `status:backlog` → **Backlog**.
- Lane labels (`lane:procurement`, `lane:software-no-hw`, `lane:bench`, `lane:docs`) → the Track field.

## Step 5 — parent/blocked-by
The intake table lists `Depends on`. Set those as blocked-by relations (or a Blocked-by text field
if the org lacks issue-type hierarchy). Priorities are the `P1`/`P2` labels already applied.

## Acceptance
Board shows issues #25–#43 with Status, Track, Phase, Start/Target populated; a change of status
has one canonical write path (the board / the issue). Report back the project URL and item count.
