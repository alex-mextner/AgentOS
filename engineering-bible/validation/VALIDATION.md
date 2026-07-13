# Engineering Bible Validation

Corrected report (a previous pass under-scoped the cyrillic check and wrongly reported 0).

- Markdown files total: 182
- Canonical docs: 162
- Unique AOS IDs: 158
- Duplicate IDs: 0
- Broken internal links: 0 OK
- Project name HyperOS in docs: 0
- Kernel approach: fork the entire Fuchsia tree (corrected; 0 owned-microkernel assertions)

## Cyrillic (honest accounting)
Real Cyrillic characters (Unicode U+0400–U+04FF), not em-dashes:
- engineering-bible/docs/research/ios-vs-android-vs-agent-os.md: 17210 chars
- engineering-bible/docs/research/prior-art-atlas.md: 6865 chars
- engineering-bible/docs/research/agent-os-wider-lens.md: 6607 chars

Classification:
- **Normative specs with real cyrillic: 0** — none; the normative corpus is English.
- **Policy: repository docs are English-only, no exceptions.** Recovered-source excerpts and
  quoted fragments are translated to English in place, with a note identifying them as translated
  recovered-source material (see `engineering-bible/diagrams/005-source-session-assignment.md`,
  `engineering-bible/docs/research/RES-012-fuchsia-spec-lessons.md`, and
  `engineering-bible/docs/research/agentos-spec-digest-product-architecture.md` for the pattern).
  Original-language text is never kept as the shipped version of a repo doc.
- The three atlas files above (`ios-vs-android-vs-agent-os.md`, `prior-art-atlas.md`,
  `agent-os-wider-lens.md`) are the sole remaining exception: they are pending translation on a
  separate in-flight branch and were intentionally left untouched by this pass to avoid merge
  conflicts. They must be translated (or superseded) before this policy is fully met repo-wide.

## Follow-ups (owned)
- Land the pending translation of the three atlases (ios-vs-android, prior-art-atlas,
  agent-os-wider-lens) from their branch — this is the last item blocking a repo-wide zero-Cyrillic
  state.
