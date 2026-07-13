---
id: AOS-MIGRATION-001
title: Foundation Corpus Migration Notes
status: migration record
---

# Foundation Corpus Migration Notes

## What happened
The full Engineering Bible Foundation corpus (142 canonical AOS-* documents, normalized
source digests, templates, diagrams, and prior-art atlases) was imported from the
founder-supplied Foundation archive into `engineering-bible/` under the repository's
folder convention. This replaces the earlier partial import stub.

## Layout
- `engineering-bible/docs/**` — canonical normative + research documentation (single source of truth).
- `engineering-bible/sources/normalized/` — AOS-SRC-N* normalized source digests.
- `engineering-bible/sources/provenance/PROVENANCE.md` — PDF source provenance + SHA-256.
- `engineering-bible/diagrams/` — system/architecture diagrams and source-session records.
- `engineering-bible/validation/` — VALIDATION.md, FILE-MANIFEST, BROKEN-LINKS, ORPHANED-IDS.
- `engineering-bible/CHECKSUMS.sha256` — hashes of every imported markdown file.

## Decisions applied during migration
- Project name normalized to **Agent OS / AgentOS**; all HyperOS references removed from docs (0 remain).
- **integrate-not-store**: source PDFs are NOT committed as binaries; their SHA-256 and normalized
  digests are retained (provenance + AOS-SRC-N*). No ZIP/PDF blobs enter git.
- The former `knowledge/` compatibility mirror was marked deprecated and has since been removed
  from the repository; the canonical write path is `engineering-bible/docs/**`.

## Source of truth (sol handoff §4)
| Object | Canonical source |
| --- | --- |
| Specifications | engineering-bible/docs/**/*.md |
| Source digests / provenance | engineering-bible/sources/** |
| Baseline tasks | engineering-bible/docs/planning/AOS-TASKS.md |
| Active tasks | GitHub Issues / Project v2 |
| Wiki / portal JSON | generated from docs/ |

## Open follow-ups (owned, non-blocking)
- Extract registers (claims/experiments/sources/risks) to CSV for the tracker.
- Portal: rebuild Wiki index from engineering-bible/docs/ and rewrite flat-wiki links to folder paths.
- Merge the demo-brick decisions already on main (HW-017..019, ARCH-021, PROD-013/014, ADR-0007,
  RES-011, LEGAL-012, PLAN-017/018) into the canonical tree — these were migrated from the former
  knowledge/docs tree (since removed); they are newer than the Foundation baseline and take
  precedence where they overlap.
