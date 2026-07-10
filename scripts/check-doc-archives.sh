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
done < <(find "$repo_root/docs/specs" -maxdepth 1 -type f -name "opencode-session-*" -print0)

while IFS= read -r -d "" file; do
  rel="${file#"$repo_root"/}"
  first="$(sed -n '1p' "$file")"
  if [[ "$first" != *"Archive wrapper:"* ]]; then
    echo "missing archive wrapper: $rel" >&2
    status=1
  fi

  case "$file" in
    *.md)
      first_visible="$(awk '
        NF == 0 { next }
        /^<!--/ {
          if ($0 !~ /-->/) {
            while ((getline line) > 0 && line !~ /-->/) {}
          }
          next
        }
        { print; exit }
      ' "$file")"
      if [[ "$first_visible" != "> **Archive notice:**"* ]]; then
        echo "missing visible archive notice before content: $rel" >&2
        status=1
      fi
      ;;
  esac
done < <(find "$repo_root/docs/specs" -type f -path "*/opencode-session-*/*" -print0)

exit "$status"
