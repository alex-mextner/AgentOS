#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
tmp_dir="$(mktemp -d)"
trap 'rm -rf "$tmp_dir"' EXIT

repo="$tmp_dir/repo"
mkdir -p "$repo/docs/specs/source-session-good" "$repo/docs/specs/source-session-bad"

write_good_archive() {
  local dir="$1"
  mkdir -p "$dir"
  printf '%s\n\n%s\n\n# Recovered\n' \
    '# Recovered Source' \
    '> Archive notice: Historical only.' \
    > "$dir/good.md"
  printf '%s\n\n%s\n\n# Recovered\n' \
    '<!-- Archive wrapper: recovered source session. -->' \
    '> Archive notice: Historical only.' \
    > "$dir/comment-wrapper.md"
  mkdir -p "$dir/originals"
  printf 'raw source text\n' > "$dir/originals/source.txt"
  printf '%s\n' '%PDF-1.4' > "$dir/originals/source.pdf"
}

printf '# Active spec\n' > "$repo/docs/specs/000-system-overview.md"
write_good_archive "$repo/docs/specs/source-session-good"

authoritative="$("$script_dir/list-authoritative-specs.sh" "$repo")"
case "$authoritative" in
  *source-session-good*) echo "authoritative list included archive directory" >&2; exit 1 ;;
esac
case "$authoritative" in
  *000-system-overview.md*) ;;
  *) echo "authoritative list missed active top-level spec" >&2; exit 1 ;;
esac

"$script_dir/check-doc-archives.sh" "$repo"

missing_wrapper="$tmp_dir/missing-wrapper"
mkdir -p "$missing_wrapper/docs/specs/source-session-bad"
printf '# Active spec\n' > "$missing_wrapper/docs/specs/000-system-overview.md"
printf '# Recovered\n' > "$missing_wrapper/docs/specs/source-session-bad/bad.md"
if "$script_dir/check-doc-archives.sh" "$missing_wrapper" >/dev/null 2>&1; then
  echo "missing notice was not rejected" >&2
  exit 1
fi

non_original_txt="$tmp_dir/non-original-txt"
mkdir -p "$non_original_txt/docs/specs/source-session-bad"
printf '# Active spec\n' > "$non_original_txt/docs/specs/000-system-overview.md"
printf 'raw source text\n' > "$non_original_txt/docs/specs/source-session-bad/source.txt"
if "$script_dir/check-doc-archives.sh" "$non_original_txt" >/dev/null 2>&1; then
  echo "non-original txt file was not rejected" >&2
  exit 1
fi

missing_notice="$tmp_dir/missing-notice"
mkdir -p "$missing_notice/docs/specs/source-session-bad"
printf '# Active spec\n' > "$missing_notice/docs/specs/000-system-overview.md"
printf '# Recovered\n\nRecovered body\n' > "$missing_notice/docs/specs/source-session-bad/bad.md"
if "$script_dir/check-doc-archives.sh" "$missing_notice" >/dev/null 2>&1; then
  echo "missing visible notice was not rejected" >&2
  exit 1
fi

late_notice="$tmp_dir/late-notice"
mkdir -p "$late_notice/docs/specs/source-session-bad"
printf '# Active spec\n' > "$late_notice/docs/specs/000-system-overview.md"
printf '# Recovered\n\nRecovered body before notice\n\n> Archive notice: Too late.\n' > "$late_notice/docs/specs/source-session-bad/bad.md"
if "$script_dir/check-doc-archives.sh" "$late_notice" >/dev/null 2>&1; then
  echo "late archive notice was not rejected" >&2
  exit 1
fi

second_heading_before_notice="$tmp_dir/second-heading-before-notice"
mkdir -p "$second_heading_before_notice/docs/specs/source-session-bad"
printf '# Active spec\n' > "$second_heading_before_notice/docs/specs/000-system-overview.md"
printf '# Wrapper title\n\n## Recovered section before notice\n\n> Archive notice: Too late.\n' > "$second_heading_before_notice/docs/specs/source-session-bad/bad.md"
if "$script_dir/check-doc-archives.sh" "$second_heading_before_notice" >/dev/null 2>&1; then
  echo "second heading before archive notice was not rejected" >&2
  exit 1
fi

flat_leak="$tmp_dir/flat-leak"
mkdir -p "$flat_leak/docs/specs"
printf '# Active spec\n' > "$flat_leak/docs/specs/000-system-overview.md"
printf '# Bad flat archive\n' > "$flat_leak/docs/specs/source-session-flat.md"
flat_authoritative="$("$script_dir/list-authoritative-specs.sh" "$flat_leak")"
case "$flat_authoritative" in
  *source-session-flat.md*) echo "authoritative list included flat archive" >&2; exit 1 ;;
esac
if "$script_dir/check-doc-archives.sh" "$flat_leak" >/dev/null 2>&1; then
  echo "flat source-session spec leak was not rejected" >&2
  exit 1
fi

legacy_flat_leak="$tmp_dir/legacy-flat-leak"
mkdir -p "$legacy_flat_leak/docs/specs"
printf '# Active spec\n' > "$legacy_flat_leak/docs/specs/000-system-overview.md"
printf '# Bad legacy flat archive\n' > "$legacy_flat_leak/docs/specs/opencode-session-legacy.md"
legacy_authoritative="$("$script_dir/list-authoritative-specs.sh" "$legacy_flat_leak")"
case "$legacy_authoritative" in
  *opencode-session-legacy.md*) echo "authoritative list included legacy flat archive" >&2; exit 1 ;;
esac
if "$script_dir/check-doc-archives.sh" "$legacy_flat_leak" >/dev/null 2>&1; then
  echo "flat opencode-session spec leak was not rejected" >&2
  exit 1
fi

echo "doc archive script tests passed"
