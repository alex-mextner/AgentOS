#!/usr/bin/env bash
# WARN-ONLY guard against "owned-from-scratch microkernel" framing regressions.
# Agent OS forks the entire Fuchsia tree; no document should imply we author our own
# kernel from scratch. This flags suspicious phrases for human review. It does NOT fail
# the build (some matches are legitimate meta-text describing the prohibition itself).
# Uses grep only; runs on macOS and Linux.
set -euo pipefail

repo_root=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
scan_root="$repo_root/engineering-bible"

echo "== check-framing: scanning $scan_root for owned-microkernel regression phrases (warn-only) =="

# Case-insensitive extended-regex patterns. Kept narrow to reduce noise.
patterns=(
  'microkernel we (are )?(build|writ|author)'
  'our own (micro)?kernel'
  '(kernel|microkernel)[^.]{0,40}(written|built|authored) from scratch'
  'from scratch (micro)?kernel'
  'build(ing)? (a|our) (micro)?kernel from scratch'
  'owned-from-scratch microkernel'
)

# Meta files that legitimately discuss the prohibition; excluded to cut false positives.
exclude_re='engineering-bible/(handoffs/|validation/VALIDATION\.md|MIGRATION-NOTES\.md)'

found=0
for pat in "${patterns[@]}"; do
  while IFS= read -r hit; do
    [ -z "$hit" ] && continue
    rel=${hit#"$repo_root/"}
    echo "  WARN [$pat]: $rel"
    found=$((found + 1))
  done < <(grep -rniE "$pat" "$scan_root" --include='*.md' 2>/dev/null \
             | grep -vE "$exclude_re" || true)
done

if [ "$found" -gt 0 ]; then
  echo "WARN: $found possible framing regression(s) flagged above — human review recommended."
else
  echo "PASS: no owned-microkernel framing phrases detected."
fi
exit 0
