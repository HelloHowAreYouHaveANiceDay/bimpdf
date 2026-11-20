#!/usr/bin/env bash
# Installs the pinned veraPDF greenfield release into $1 (default ./.verapdf) and prints the dir.
# Needs java (>= 11), curl, unzip. The installer zip is checked against the pinned sha256 first.
#   export VERAPDF=$(bash scripts/install-verapdf.sh) && node scripts/verapdf-check.mjs
set -euo pipefail
VERSION=1.30.4
SHA256=04415ef3f149526a3048b9889723e81320ddf013bd891bcc7f0f297f3eadcc23
DEST=$(mkdir -p "${1:-.verapdf}" && cd "${1:-.verapdf}" && { pwd -W 2>/dev/null || pwd; })
WORK=$(mktemp -d)
trap 'rm -rf "$WORK"' EXIT
curl -fsSL -o "$WORK/vp.zip" "https://software.verapdf.org/rel/1.30/verapdf-greenfield-$VERSION-installer.zip"
echo "$SHA256  $WORK/vp.zip" | sha256sum -c - >&2
unzip -q "$WORK/vp.zip" -d "$WORK"
cat > "$WORK/auto.xml" <<XML
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<AutomatedInstallation langpack="eng">
<com.izforge.izpack.panels.htmlhello.HTMLHelloPanel id="welcome"/>
<com.izforge.izpack.panels.target.TargetPanel id="install_dir"><installpath>$DEST</installpath></com.izforge.izpack.panels.target.TargetPanel>
<com.izforge.izpack.panels.packs.PacksPanel id="sdk_pack_select"><pack index="0" name="veraPDF Runtime" selected="true"/><pack index="1" name="veraPDF Mac and *nix Scripts" selected="true"/><pack index="2" name="veraPDF Validation model" selected="false"/><pack index="3" name="veraPDF Documentation" selected="false"/><pack index="4" name="veraPDF Sample Plugins" selected="false"/></com.izforge.izpack.panels.packs.PacksPanel>
<com.izforge.izpack.panels.install.InstallPanel id="install"/>
<com.izforge.izpack.panels.finish.FinishPanel id="finish"/>
</AutomatedInstallation>
XML
java -jar "$WORK/verapdf-greenfield-$VERSION/verapdf-izpack-installer-$VERSION.jar" "$WORK/auto.xml" >&2
echo "$DEST"
