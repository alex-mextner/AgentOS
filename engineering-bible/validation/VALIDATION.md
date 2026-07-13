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
- engineering-bible/docs/research/ios-vs-android-vs-agent-os.md: 0 chars (translated to English in place)
- engineering-bible/docs/research/prior-art-atlas.md: 0 chars (translated to English in place)
- engineering-bible/docs/research/agent-os-wider-lens.md: 0 chars (translated to English in place)

Repo-wide Cyrillic total: 0 chars. Every research atlas and every recovered-source excerpt has
been translated to English in place.

Classification:
- **Normative specs with real cyrillic: 0** — none; the normative corpus is English.
- **Policy: repository docs are English-only, no exceptions.** Recovered-source excerpts and
  quoted fragments are translated to English in place, with a note identifying them as translated
  recovered-source material (see `engineering-bible/diagrams/005-source-session-assignment.md`,
  `engineering-bible/docs/research/RES-012-fuchsia-spec-lessons.md`, and
  `engineering-bible/docs/research/agentos-spec-digest-product-architecture.md` for the pattern).
  Original-language text is never kept as the shipped version of a repo doc.
- The three former Russian prior-art atlases (`ios-vs-android-vs-agent-os.md`, `prior-art-atlas.md`,
  `agent-os-wider-lens.md`) have been translated to English in place and carry zero Cyrillic. They
  remain non-normative research (`docs/research/`); normative requirements still live in the linked
  architecture/product/hardware/legal/planning documents. No English-only exceptions remain repo-wide.

## Follow-ups (owned)
- Zero-Cyrillic state is met repo-wide; `scripts/check-cyrillic.sh` enforces it strictly (empty
  allowlist, fails on any Cyrillic anywhere in engineering-bible).
- The zero-Cyrillic claim above was verified with `perl -CSD -ne 'print if /[\x{0400}-\x{04FF}]/'`
  (note the `-CSD` flag — without it Perl reads bytes, not decoded UTF-8, and silently fails to match
  multi-byte Cyrillic, giving a false "clean" result) and cross-checked with `rg '\p{Cyrillic}'`,
  both over the final files.
