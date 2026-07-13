#!/usr/bin/env bash
# Aggregate documentation validation for the engineering bible. Runs the read-only checks
# (Cyrillic, internal links, framing) and returns non-zero if any hard check fails.
# Does NOT regenerate checksums — run scripts/gen-checksums.sh explicitly for that, then
# commit the updated manifests. Framing is warn-only and never fails the aggregate.
set -uo pipefail

script_dir=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
rc=0

run_check() {
  local name=$1 script=$2
  echo ""
  echo "########## $name ##########"
  if bash "$script_dir/$script"; then
    echo "---> $name: PASS"
  else
    echo "---> $name: FAIL"
    rc=1
  fi
}

run_check "cyrillic" "check-cyrillic.sh"
run_check "links"    "check-links.sh"
run_check "framing"  "check-framing.sh"   # warn-only, exits 0

echo ""
echo "########## SUMMARY ##########"
if [ "$rc" -eq 0 ]; then
  echo "validate-all: ALL HARD CHECKS PASSED"
else
  echo "validate-all: ONE OR MORE HARD CHECKS FAILED"
fi
exit "$rc"
