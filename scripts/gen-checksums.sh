#!/usr/bin/env bash
# Regenerate the two SHA-256 manifests:
#   engineering-bible/CHECKSUMS.sha256            — every *.md under engineering-bible/
#   engineering-bible/registers/CHECKSUMS.sha256  — the four register CSVs
# Both manifests store repository-root-relative paths and are LC_ALL=C sorted, matching the
# existing files. Verify afterwards with:  shasum -a 256 -c engineering-bible/CHECKSUMS.sha256
# Uses shasum (BSD/macOS) or sha256sum (Linux); no python required.
set -euo pipefail

repo_root=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
cd "$repo_root"

# Pick a hasher as an array (shellcheck-clean; a shell function can't be exec'd by xargs).
if command -v shasum >/dev/null 2>&1; then
  hasher=(shasum -a 256)
elif command -v sha256sum >/dev/null 2>&1; then
  hasher=(sha256sum)
else
  echo "FAIL: neither shasum nor sha256sum is available." >&2
  exit 1
fi

root_manifest="engineering-bible/CHECKSUMS.sha256"
reg_manifest="engineering-bible/registers/CHECKSUMS.sha256"

# Hash a NUL-delimited, C-sorted file list into a manifest. Guards the empty-input case:
# a bare `xargs shasum` with no input would exec the hasher with no args and block on stdin.
gen_manifest() {
  local out=$1; shift
  local files
  files=$(find "$@" -print0 | LC_ALL=C sort -z | tr '\0' '\n' | grep -c '.')
  if [ "$files" -eq 0 ]; then
    echo "FAIL: no files matched for $out" >&2
    exit 1
  fi
  find "$@" -print0 | LC_ALL=C sort -z | xargs -0 "${hasher[@]}" > "$out"
}

echo "== gen-checksums: regenerating $root_manifest =="
# All markdown under engineering-bible/ (the manifest files themselves are not *.md).
gen_manifest "$root_manifest" engineering-bible -type f -name '*.md'
echo "  wrote $(wc -l < "$root_manifest" | tr -d ' ') entries"

echo "== gen-checksums: regenerating $reg_manifest =="
# The four canonical registers only (matches the existing manifest scope).
gen_manifest "$reg_manifest" engineering-bible/registers -type f -name '*-register.csv'
echo "  wrote $(wc -l < "$reg_manifest" | tr -d ' ') entries"

echo "PASS: checksum manifests regenerated."
