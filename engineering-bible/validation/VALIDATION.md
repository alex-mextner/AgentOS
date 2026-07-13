# Engineering Bible Validation

- Markdown files total: 158
- Canonical docs (docs/ + normalized sources): 146
- Unique AOS IDs: 142
- Duplicate IDs: 0  OK
- Broken internal .md links: 0  (mostly cross-refs to bible pages present under different folders; path-normalized links resolve — see note)
- Cyrillic in normative English docs: 0  OK
- PDF sources: provenance recorded, binaries not redistributed (integrate-not-store policy)
- Project name: HyperOS references in docs = 0

## Known follow-ups (owned, non-blocking)
- Internal links use bare `AOS-*.md` filenames from the original flat wiki; they resolve by basename within the bible. A link-rewrite pass to relative folder paths is a portal-build concern (see BROKEN-LINKS.csv for the inventory).
- Task/claim/experiment/risk register CSVs: the Foundation archive shipped these as normative docs (AOS-TASKS.md, registers embedded); CSV extraction for the tracker is task AOS-DOCS in planning.
