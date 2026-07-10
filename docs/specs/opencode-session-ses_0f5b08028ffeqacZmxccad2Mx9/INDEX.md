<!-- Archive wrapper: recovered from opencode session ses_0f5b08028ffeqacZmxccad2Mx9. The whole file is historical evidence only and is not authoritative for any current repository contract. Recovered source content follows. -->

> **Archive notice:** This recovered opencode-session file is historical evidence only and is not authoritative for any current repository contract.

# Opencode Session Source Appendix

## Source

- Session id: `ses_0f5b08028ffeqacZmxccad2Mx9`
- Export used: `<local-export>/opencode-ses_0f5b08028ffeqacZmxccad2Mx9.json`
- Session title: `HyperGit — альтернатива GitHub и своя мобильная ОС`
- Session directory: `<session-dir>`

This appendix contains recovered documentation and task bodies from the opencode
session. It intentionally does not include the raw JSON export because the export
contains tool output, local paths, and configuration data. It also excludes Swift
source and workflow code because the requested archive is documentation-only.

## Included Assignments

- `00-user-messages.md`: extracted user message stream from the opencode session,
  including the original combined HyperGit/HyperOS brief and later correction.

## Included Recovered Documents

- `documents/docs-SPEC-first-write-with-hyperos.md`: first full `docs/SPEC.md`
  body written by opencode, before HyperOS was removed from HyperGit scope.
- `documents/docs-SPEC-final-after-hyperos-removal.md`: final recovered
  `docs/SPEC.md` body after the HyperOS correction in that session.
- `documents/README-first-write.md`: first recovered repository README body.
- `documents/README-final.md`: final recovered repository README body.
- `documents/AGENTS-recovered.md`: recovered agent guide body from that session.
- `documents/mobile-README-recovered.md`: recovered mobile README body.
- `documents/docs-testflight-recovered.md`: recovered TestFlight/distribution
  documentation body.

## Included Recovered Tasks

- `tasks/issue1.md` through `tasks/issue7.md`: recovered issue/task bodies that
  opencode wrote as temporary markdown files before pushing them to GitHub.
- `tasks/v0.1.0-release-notes.md`: recovered release notes body.
- `tasks/task-related-commands.txt`: extracted task/issue/release shell commands
  from the session, included as provenance for the issue bodies.

## Errata

- `tasks/issue1.md` preserves the original task wording from the opencode
  session, including `SourceRepository` and `BackendClient`. The final recovered
  spec and written file manifest from that session use `RepositorySource`; treat
  the task wording as historical, not as a current interface name.

## Manifest

- `all-written-paths.txt`: every path written by opencode in the source session.
  This is a path manifest only; it does not include source code contents.

## Verification

Appendix files must start with an `Archive wrapper` header. Markdown files must
also render a visible `Archive notice` before recovered content. Run:

```bash
scripts/list-authoritative-specs.sh
scripts/check-doc-archives.sh
scripts/test-doc-archives.sh
```
