#!/usr/bin/env bash
# Fail if real Cyrillic (Unicode U+0400-U+04FF) appears in ANY engineering-bible markdown
# file. The repository is English-only with no standing exception: every research atlas and
# every recovered-source excerpt has been translated to English in place, so there is no
# provenance allowlist (see engineering-bible/validation/VALIDATION.md).
# Uses python3 stdlib only; runs on macOS and Linux.
set -euo pipefail

repo_root=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
scan_root="$repo_root/engineering-bible"

echo "== check-cyrillic: scanning $scan_root/**/*.md for U+0400-U+04FF =="

python3 - "$scan_root" <<'PY'
import os, sys, re

scan_root = sys.argv[1]

# Strict policy: NO allowlist. Any Cyrillic anywhere under engineering-bible/ is a failure.
cyr = re.compile(r"[\u0400-\u04FF]")
repo_root = os.path.dirname(scan_root)

violations = []
for dirpath, _dirs, files in os.walk(scan_root):
    for name in files:
        if not name.endswith(".md"):
            continue
        full = os.path.join(dirpath, name)
        rel = os.path.relpath(full, repo_root)
        with open(full, encoding="utf-8", errors="replace") as fh:
            for lineno, line in enumerate(fh, 1):
                if cyr.search(line):
                    count = len(cyr.findall(line))
                    violations.append((rel, lineno, count, line.strip()[:80]))

if violations:
    print(f"FAIL: Cyrillic found in {len({v[0] for v in violations})} file(s):")
    for rel, lineno, count, snippet in violations:
        print(f"  {rel}:{lineno} ({count} cyr chars): {snippet}")
    sys.exit(1)

print("PASS: no Cyrillic anywhere in engineering-bible.")
PY
