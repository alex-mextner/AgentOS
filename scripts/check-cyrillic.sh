#!/usr/bin/env bash
# Fail if real Cyrillic (Unicode U+0400-U+04FF) appears in a NORMATIVE engineering-bible
# markdown file. A short allowlist of provenance/prior-art files is permitted to carry
# Russian source material verbatim (see engineering-bible/validation/VALIDATION.md).
# Uses python3 stdlib only; runs on macOS and Linux.
set -euo pipefail

repo_root=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
scan_root="$repo_root/engineering-bible"

echo "== check-cyrillic: scanning $scan_root/**/*.md for U+0400-U+04FF =="

python3 - "$scan_root" <<'PY'
import os, sys, re

scan_root = sys.argv[1]

# Allowlisted provenance files (paths relative to the repository root). These may carry
# verbatim Russian prior-art analyses or source quotations for traceability.
ALLOW = {
    "engineering-bible/docs/research/ios-vs-android-vs-agent-os.md",
    "engineering-bible/docs/research/prior-art-atlas.md",
    "engineering-bible/docs/research/agent-os-wider-lens.md",
    "engineering-bible/docs/research/agentos-spec-digest-product-architecture.md",
    "engineering-bible/docs/research/RES-012-fuchsia-spec-lessons.md",
    # Archival provenance not enumerated by VALIDATION.md's (stale) Cyrillic list, but
    # unmistakably non-normative recovered source material kept verbatim in Russian:
    #   AgentOS.md            — the raw source wishlist digest ("Исходник — сырой список желаний").
    #   005-source-session... — the recovered source-session trace (see project CLAUDE.md exception).
    "engineering-bible/AgentOS.md",
    "engineering-bible/diagrams/005-source-session-assignment.md",
}

cyr = re.compile(r"[Ѐ-ӿ]")
repo_root = os.path.dirname(scan_root)

violations = []
for dirpath, _dirs, files in os.walk(scan_root):
    for name in files:
        if not name.endswith(".md"):
            continue
        full = os.path.join(dirpath, name)
        rel = os.path.relpath(full, repo_root)
        # Forward-guard: any recovered source-session appendix (by naming convention),
        # wherever it lands in scope, is provenance and allowed in its original language.
        if rel in ALLOW or "source-session-" in rel:
            continue
        with open(full, encoding="utf-8", errors="replace") as fh:
            for lineno, line in enumerate(fh, 1):
                if cyr.search(line):
                    count = len(cyr.findall(line))
                    violations.append((rel, lineno, count, line.strip()[:80]))

if violations:
    print(f"FAIL: Cyrillic found in {len({v[0] for v in violations})} non-allowlisted file(s):")
    for rel, lineno, count, snippet in violations:
        print(f"  {rel}:{lineno} ({count} cyr chars): {snippet}")
    sys.exit(1)

print("PASS: no Cyrillic outside the allowlist.")
PY
