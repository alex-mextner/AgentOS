#!/usr/bin/env bash
# Tier-1 SDK path — NATIVE on macOS arm64 (M-series) and on Linux.
# Builds our components against the prebuilt platform and boots the emulator from prebuilts.
# No full platform tree, no Linux box. Works on an M4 Pro directly.
set -euo pipefail
uname_s=$(uname -s); uname_m=$(uname -m)
echo "== host: $uname_s/$uname_m =="
case "$uname_s/$uname_m" in
  Darwin/arm64) echo "Apple Silicon: SDK/Bazel builds run natively (darwin_arm64). Good." ;;
  Darwin/x86_64) echo "Intel mac: fine for SDK path." ;;
  Linux/x86_64) echo "Linux x86_64: fine for SDK path (and the only host for the full tree)." ;;
  *) echo "Unusual host; SDK path may need adjustment." ;;
esac
mkdir -p "$HOME/fuchsia-work" && cd "$HOME/fuchsia-work"
if [ ! -d fuchsia-getting-started ]; then
  git clone https://fuchsia.googlesource.com/sdk-samples/getting-started fuchsia-getting-started --recurse-submodules
fi
cd fuchsia-getting-started
# bootstrap fetches the Bazel-based SDK + host tools for THIS host OS/arch
[ -x scripts/bootstrap.sh ] && scripts/bootstrap.sh || tools/bazel version || true
tools/ffx sdk version || true
echo "== list downloadable prebuilt product bundles =="
tools/ffx product list || true
cat <<'NOTE'
Next:
  1) tools/ffx product download <TRANSFER_MANIFEST_URL> ~/fuchsia-bundles/x   # prebuilt image, no build
  2) tools/ffx emu start                                                       # boot the emulator
  3) build OUR components natively (example):
     tools/bazel build --config=fuchsia //src/...
On Apple Silicon prefer an arm64 bundle if offered; qemu-arm64 is "very limited", so x64 under
emulation is the safer first boot. Record: SDK version, bundle, boot OK/fail, build time.
NOTE
