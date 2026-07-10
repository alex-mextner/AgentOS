#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
repo_root="${1:-$(cd "$script_dir/.." && pwd)}"

find "$repo_root/docs/specs" -maxdepth 1 -type f -name "*.md" ! -name "opencode-session-*" | sort
