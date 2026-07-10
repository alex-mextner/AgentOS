#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
tmp_dir="$(mktemp -d)"
trap 'rm -rf "$tmp_dir"' EXIT

repo="$tmp_dir/repo"
mkdir -p "$repo/docs/specs/opencode-session-good" "$repo/docs/specs/opencode-session-bad"

write_good_archive() {
  local dir="$1"
  mkdir -p "$dir"
  printf '%s\n\n%s\n\n# Recovered\n' \
    '<!-- Archive wrapper: recovered. -->' \
    '> **Archive notice:** Historical only.' \
    > "$dir/good.md"
  printf '%s\n\n%s\n' \
    '# Archive wrapper: recovered.' \
    '<session-dir>/docs/SPEC.md' \
    > "$dir/paths.txt"
}

printf '# Active spec\n' > "$repo/docs/specs/000-system-overview.md"
write_good_archive "$repo/docs/specs/opencode-session-good"

authoritative="$("$script_dir/list-authoritative-specs.sh" "$repo")"
case "$authoritative" in
  *opencode-session-good*) echo "authoritative list included archive directory" >&2; exit 1 ;;
esac
case "$authoritative" in
  *000-system-overview.md*) ;;
  *) echo "authoritative list missed active top-level spec" >&2; exit 1 ;;
esac

"$script_dir/check-doc-archives.sh" "$repo"

missing_wrapper="$tmp_dir/missing-wrapper"
mkdir -p "$missing_wrapper/docs/specs/opencode-session-bad"
printf '# Active spec\n' > "$missing_wrapper/docs/specs/000-system-overview.md"
printf '# Recovered\n' > "$missing_wrapper/docs/specs/opencode-session-bad/bad.md"
if "$script_dir/check-doc-archives.sh" "$missing_wrapper" >/dev/null 2>&1; then
  echo "missing wrapper was not rejected" >&2
  exit 1
fi

missing_txt_wrapper="$tmp_dir/missing-txt-wrapper"
mkdir -p "$missing_txt_wrapper/docs/specs/opencode-session-bad"
printf '# Active spec\n' > "$missing_txt_wrapper/docs/specs/000-system-overview.md"
printf '<session-dir>/docs/SPEC.md\n' > "$missing_txt_wrapper/docs/specs/opencode-session-bad/paths.txt"
if "$script_dir/check-doc-archives.sh" "$missing_txt_wrapper" >/dev/null 2>&1; then
  echo "missing txt wrapper was not rejected" >&2
  exit 1
fi

missing_notice="$tmp_dir/missing-notice"
mkdir -p "$missing_notice/docs/specs/opencode-session-bad"
printf '# Active spec\n' > "$missing_notice/docs/specs/000-system-overview.md"
printf '%s\n\n# Recovered\n' \
  '<!-- Archive wrapper: recovered. -->' \
  > "$missing_notice/docs/specs/opencode-session-bad/bad.md"
if "$script_dir/check-doc-archives.sh" "$missing_notice" >/dev/null 2>&1; then
  echo "missing visible notice was not rejected" >&2
  exit 1
fi

flat_leak="$tmp_dir/flat-leak"
mkdir -p "$flat_leak/docs/specs"
printf '# Active spec\n' > "$flat_leak/docs/specs/000-system-overview.md"
printf '# Bad flat archive\n' > "$flat_leak/docs/specs/opencode-session-flat.md"
flat_authoritative="$("$script_dir/list-authoritative-specs.sh" "$flat_leak")"
case "$flat_authoritative" in
  *opencode-session-flat.md*) echo "authoritative list included flat archive" >&2; exit 1 ;;
esac
if "$script_dir/check-doc-archives.sh" "$flat_leak" >/dev/null 2>&1; then
  echo "flat opencode-session spec leak was not rejected" >&2
  exit 1
fi

echo "doc archive script tests passed"
