#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

if [[ ! -f pnpm-lock.yaml ]]; then
  echo "ERROR: pnpm-lock.yaml is missing; frozen install cannot be verified." >&2
  exit 1
fi

if [[ -f pnpm-workspace.yaml ]]; then
  node - <<'NODE'
const fs = require('fs');
const text = fs.readFileSync('pnpm-workspace.yaml', 'utf8');
if (!/^packages:\s*\n(?:\s*-\s*['\"]?\.['\"]?\s*\n?)+/m.test(text)) {
  console.error("ERROR: pnpm-workspace.yaml exists but packages does not include '.'.");
  process.exit(1);
}
NODE
fi

rm -rf node_modules dist .astro
CI=1 corepack pnpm install --frozen-lockfile
corepack pnpm check
corepack pnpm build

if grep -RInE 'example\.com|localhost|chrome-extension://' dist; then
  echo "ERROR: forbidden placeholder/extension content found in dist." >&2
  exit 1
fi

if find dist -maxdepth 2 -type f -name 'sitemap*.xml' -print -quit | grep -q .; then
  if grep -RIn '<lastmod>' dist/sitemap*.xml; then
    echo "ERROR: sitemap contains lastmod; this project does not intentionally emit fabricated lastmod." >&2
    exit 1
  fi
fi

echo "PASS: clean install, astro check, build, and output grep completed."
