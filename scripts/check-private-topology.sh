#!/usr/bin/env bash
# Fails when tracked files reveal private network topology: private/tailnet/public IPv4 addresses,
# IPv6 ULA/link-local, *.ts.net and *.local hostnames, MAC addresses, e-mail addresses, and any
# name listed in an untracked local denylist. Real machine names never live in this file: put them
# one extended-regex per line in the denylist (default ~/.config/private-topology/denylist.txt, or
# the file named by PRIVATE_TOPOLOGY_DENYLIST). Without a denylist only the generic patterns run.
#
# Escape hatches: a `topology-ok` marker on the line, or a glob per line in .private-topology-allow
# (tracked, repo root) for paths that legitimately hold examples. RFC 5737 documentation addresses
# (192.0.2.x, 198.51.100.x, 203.0.113.x), loopback and well-known public resolvers are always fine.
#
# Usage: scripts/check-private-topology.sh            scan tracked files
#        scripts/check-private-topology.sh --self-test  prove every pattern fires and the allowances hold
set -euo pipefail

octet='(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])'
ipv4="(?<![0-9A-Za-z_.-])${octet}(\\.${octet}){3}(?![0-9A-Za-z_-]|\\.[0-9])"
rules=(
  "private-ipv4|(?<![0-9A-Za-z_.-])(10(\\.${octet}){3}|192\\.168(\\.${octet}){2}|172\\.(1[6-9]|2[0-9]|3[01])(\\.${octet}){2})(?![0-9A-Za-z_-]|\\.[0-9])"
  "tailnet-ipv4|(?<![0-9A-Za-z_.-])100\\.(6[4-9]|[7-9][0-9]|1[01][0-9]|12[0-7])(\\.${octet}){2}(?![0-9A-Za-z_-]|\\.[0-9])"
  "public-ipv4|${ipv4}"
  "ipv6-private|(?i)(?<![0-9a-f:])(fe80|fd[0-9a-f]{2}|fc[0-9a-f]{2}):[0-9a-f:]*[0-9a-f]"
  "tailnet-hostname|(?i)[a-z0-9-]+(\\.[a-z0-9-]+)*\\.ts\\.net\\b"
  "mdns-hostname|(?i)\\b[a-z0-9][a-z0-9-]*\\.local\\b"
  "dyndns-hostname|(?i)\\b[a-z0-9-]+\\.(duckdns\\.org|dataplicity\\.io|ngrok(-free)?\\.(app|io|dev)|trycloudflare\\.com|dynv6\\.net|ddns\\.net|no-ip\\.(org|com|biz)|myfritz\\.net)\\b"
  "mac-address|(?i)(?<![0-9a-f:-])([0-9a-f]{2}[:-]){5}[0-9a-f]{2}(?![0-9a-f:-])"
  "email|(?i)[a-z0-9._%+-]+@[a-z0-9-]+(\\.[a-z0-9-]+)*\\.[a-z]{2,}"
)
# Values that are not topology even when a rule matches them.
benign='^(127\.[0-9.]+|0\.0\.0\.0|255\.255\.255\.255|1\.1\.1\.1|1\.0\.0\.1|8\.8\.8\.8|8\.8\.4\.4|9\.9\.9\.9|192\.0\.2\.[0-9]+|198\.51\.100\.[0-9]+|203\.0\.113\.[0-9]+)$|(^|[@.])(example\.(com|org|net)|users\.noreply\.github\.com|noreply\..*|localhost)$|^noreply@|^(no-reply|git)@github\.com$|^(aa:bb:cc:dd:ee:ff|00:00:00:00:00:00|ff:ff:ff:ff:ff:ff|11:22:33:44:55:66|01:23:45:67:89:ab|de:ad:be:ef:[0-9a-f:]+)$|^((\.?env|threading|local|mocha|express)\.local)$|^test@o0\.ingest\.sentry\.io$|^[a-z0-9._%+-]*@[a-z0-9._-]+\.(service|timer|socket|target|path|mount|slice|scope)$'
nonpublic='^(10\.|192\.168\.|172\.(1[6-9]|2[0-9]|3[01])\.|100\.(6[4-9]|[7-9][0-9]|1[01][0-9]|12[0-7])\.)'

scan() {
  local fail=0 allow=() name re line out
  if [ -f .private-topology-allow ]; then
    while IFS= read -r line; do
      case "$line" in ''|'#'*) ;; *) allow+=(":(exclude,glob)$line") ;; esac
    done < .private-topology-allow
  fi
  # Lockfiles list public package authors' addresses, not the owner's topology.
  allow+=(":(exclude).private-topology-allow" ":(exclude)scripts/check-private-topology.sh"
    ":(exclude,glob)**/pnpm-lock.yaml" ":(exclude,glob)**/package-lock.json" ":(exclude,glob)**/yarn.lock"
    ":(exclude,glob)**/bun.lock" ":(exclude,glob)**/Cargo.lock" ":(exclude,glob)**/poetry.lock"
    ":(exclude,glob)**/uv.lock" ":(exclude,glob)**/go.sum")
  for rule in "${rules[@]}"; do
    name=${rule%%|*}; re=${rule#*|}
    out=$(git grep -nIP --no-color -e "$re" -- . "${allow[@]}" 2>/dev/null | grep -v 'topology-ok' || true)
    [ -n "$out" ] || continue
    while IFS= read -r line; do
      local file=${line%%:*} rest=${line#*:}
      local lineno=${rest%%:*} text=${rest#*:} value
      while IFS= read -r value; do
        if printf '%s' "$value" | grep -Eqi "$benign"; then continue; fi
        # public-ipv4 is a catch-all; private and tailnet addresses are reported by their own rules.
        if [ "$name" = public-ipv4 ] && printf '%s' "$value" | grep -Eq "$nonpublic"; then continue; fi
        printf '%s:%s: %s %s\n' "$file" "$lineno" "$name" "$value"
        fail=1
      done < <(grep -oP -e "$re" <<<"$text")
    done <<<"$out"
  done
  local deny=${PRIVATE_TOPOLOGY_DENYLIST:-${XDG_CONFIG_HOME:-$HOME/.config}/private-topology/denylist.txt}
  if [ -f "$deny" ]; then
    local alt
    alt=$(grep -Ev '^\s*(#|$)' "$deny" | paste -sd'|' -)
    if [ -n "$alt" ]; then
      # The matched text is deliberately not printed: a CI log must not repeat a real name.
      out=$(git grep -nIiP --no-color -e "(?<![A-Za-z0-9-])($alt)(?![A-Za-z0-9-])" -- . "${allow[@]}" 2>/dev/null \
        | grep -v 'topology-ok' | cut -d: -f1,2 || true)
      if [ -n "$out" ]; then
        sed 's/$/: denylisted-name (value hidden)/' <<<"$out" >&2
        fail=1
      fi
      out=$(git ls-files -- . "${allow[@]}" | grep -iP "(?<![A-Za-z0-9-])($alt)(?![A-Za-z0-9-])" || true)
      if [ -n "$out" ]; then
        sed 's/$/: denylisted-name in path (value hidden)/' <<<"$out" >&2
        fail=1
      fi
    fi
  elif [ "${PRIVATE_TOPOLOGY_REQUIRE_DENYLIST:-0}" = 1 ]; then
    echo "check-private-topology: denylist $deny missing" >&2; return 2
  else
    echo "check-private-topology: no local denylist; generic patterns only" >&2
  fi
  return $fail
}

self_test() {
  local tmp; tmp=$(mktemp -d); trap 'rm -rf "$tmp"' RETURN
  cd "$tmp"; git init -q .
  local dot=.
  printf '%s\n' \
    "a 192${dot}168${dot}1${dot}20" "b 10${dot}0${dot}0${dot}5" "c 172${dot}16${dot}4${dot}9" "d 100${dot}101${dot}2${dot}3" \
    "e 93${dot}184${dot}216${dot}34" "f fd12:3456:789a::1" "g box.tailnet-x${dot}ts${dot}net" "h printer${dot}local" "l myhome${dot}duckdns${dot}org" \
    "i 3c:52:a1:09:7f:e4" "j who@example-corp${dot}io" "k seedhost-alpha" > bad.txt
  printf '%s\n' "ok 192${dot}0${dot}2${dot}7" "ok 127${dot}0${dot}0${dot}1" "v 1${dot}2${dot}3${dot}4${dot}5" "m 192${dot}168${dot}1${dot}1 # topology-ok" "x noreply@example${dot}com" "u backup@nightly${dot}service" > good.txt
  git add .
  local deny="$tmp/deny"; echo "seedhost-alpha" > "$deny"
  local out; out=$(PRIVATE_TOPOLOGY_DENYLIST="$deny" scan 2>&1 || true)
  local kind
  for kind in private-ipv4 tailnet-ipv4 public-ipv4 ipv6-private tailnet-hostname dyndns-hostname mdns-hostname mac-address email denylisted-name; do
    grep -q "bad.txt:[0-9]*: $kind" <<<"$out" || { echo "self-test: $kind did not fire" >&2; return 1; }
  done
  ! grep -q 'good.txt' <<<"$out" || { echo "self-test: benign line flagged" >&2; return 1; }
  ! grep -q 'seedhost-alpha' <<<"$out" || { echo "self-test: denylisted value leaked into output" >&2; return 1; }
  echo "check-private-topology self-test OK"
}

if [ "${1:-}" = "--self-test" ]; then self_test; exit $?; fi
cd "$(git rev-parse --show-toplevel)"
if scan; then echo "check-private-topology: clean"; else
  echo "check-private-topology: private topology found. Use a placeholder (<server-lan-ip>, <tailnet-host>), read the value from config/env, or add a topology-ok marker with a reason." >&2
  exit 1
fi
