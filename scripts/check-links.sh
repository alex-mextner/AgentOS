#!/usr/bin/env bash
# Check that internal relative Markdown links inside engineering-bible/ resolve to a file
# that exists. External (http/https/mailto), pure-anchor (#...) and absolute links are
# skipped. Anchors on relative links are stripped before the file is resolved.
#
# Link-resolution model: the engineering bible is rendered as a GitHub wiki / portal where
# every page is addressable by basename regardless of its directory. A link therefore
# resolves if EITHER the filesystem-relative path exists (e.g. ../hardware/AOS-HW-001.md)
# OR a file with the same basename exists anywhere under engineering-bible/ (wiki-flat,
# e.g. a bare AOS-BRIEF.md link from a page in a different directory). This matches the
# authoritative engineering-bible/validation/BROKEN-LINKS.csv, which is empty.
#
# Uses python3 stdlib only; runs on macOS and Linux.
set -euo pipefail

repo_root=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
scan_root="$repo_root/engineering-bible"

echo "== check-links: resolving internal Markdown links under $scan_root =="

python3 - "$scan_root" <<'PY'
import os, sys, re
from urllib.parse import unquote

scan_root = sys.argv[1]
repo_root = os.path.dirname(scan_root)

# Index every file basename under engineering-bible/ for wiki-flat resolution.
basenames = set()
for dirpath, _dirs, files in os.walk(scan_root):
    for name in files:
        basenames.add(name)

link_re = re.compile(r"\]\(\s*([^)]+?)\s*\)")          # inline: ](target)
refdef_re = re.compile(r"^\s*\[[^\]]+\]:\s+(\S+)")       # reference def: [id]: target

def is_external(t):
    return (
        t.startswith(("http://", "https://", "mailto:", "tel:", "//", "/"))
        or t.startswith("#")
        or t.startswith("data:")
    )

def resolves(dirpath, path_part):
    # 1) filesystem-relative to the linking file's directory
    rel = os.path.normpath(os.path.join(dirpath, path_part))
    if os.path.exists(rel):
        return True
    # 2) wiki-flat: same basename exists anywhere under engineering-bible/
    return os.path.basename(path_part) in basenames

broken = []
checked = 0
for dirpath, _dirs, files in os.walk(scan_root):
    for name in files:
        if not name.endswith(".md"):
            continue
        full = os.path.join(dirpath, name)
        rel_file = os.path.relpath(full, repo_root)
        with open(full, encoding="utf-8", errors="replace") as fh:
            for lineno, line in enumerate(fh, 1):
                targets = link_re.findall(line)
                m = refdef_re.match(line)
                if m:
                    targets.append(m.group(1))
                for raw in targets:
                    target = raw.strip().strip("<>")
                    if " " in target and not target.startswith("#"):
                        target = target.split()[0]
                    if not target or is_external(target):
                        continue
                    path_part = unquote(target.split("#", 1)[0])
                    if not path_part:
                        continue
                    checked += 1
                    if not resolves(dirpath, path_part):
                        broken.append((rel_file, lineno, target))

print(f"Checked {checked} internal link(s).")
if broken:
    print(f"FAIL: {len(broken)} broken internal link(s):")
    for rel_file, lineno, target in broken:
        print(f"  {rel_file}:{lineno} -> {target}")
    sys.exit(1)

print("PASS: 0 broken internal links.")
PY
