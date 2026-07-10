#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
repo_root="${1:-$(cd "$script_dir/.." && pwd)}"

status=0

if ! "$script_dir/list-authoritative-specs.sh" "$repo_root" >/dev/null; then
  echo "failed to list authoritative specs" >&2
  exit 1
fi

while IFS= read -r -d "" file; do
  rel="${file#"$repo_root"/}"
  echo "archival appendix must be a directory, not a top-level spec file: $rel" >&2
  status=1
done < <(find "$repo_root/docs/specs" -maxdepth 1 -type f \( -name "source-session-*" -o -name "opencode-session-*" \) -print0)

while IFS= read -r -d "" file; do
  rel="${file#"$repo_root"/}"
  case "$rel" in
    docs/specs/source-session-*/originals/*)
      continue
      ;;
  esac

  case "$file" in
    *.md)
      first_content="$(awk '
        BEGIN { seen_title = 0 }
        NF == 0 { next }
        /^<!--/ {
          if ($0 !~ /-->/) {
            while ((getline line) > 0 && line !~ /-->/) {}
          }
          next
        }
        /^# / && seen_title == 0 { seen_title = 1; next }
        { print; exit }
      ' "$file")"
      if [[ "$first_content" != "> Archive notice:"* ]]; then
        echo "missing visible archive notice before content: $rel" >&2
        status=1
      fi
      ;;
    *)
      echo "unexpected non-original source-session file: $rel" >&2
      status=1
      ;;
  esac
done < <(find "$repo_root/docs/specs" -type f -path "*/source-session-*/*" -print0)

exit "$status"
