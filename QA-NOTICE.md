# QA status

This project was prepared against the requested stable version set, but this ChatGPT execution container cannot reach the npm registry and does not have the requested pnpm/Node versions preinstalled. Because of that limitation, I cannot truthfully claim that the required clean-environment command sequence completed here.

## Completed checks in this session

- `package.json`, `wrangler.jsonc`, and `astro.config.ts` parse successfully.
- All declared package versions in `package.json` are exact (no `latest`, `*`, caret, or tilde ranges).
- `packageManager`, `engines.node`, `engines.pnpm`, and `.node-version` are pinned.
- No `pnpm-workspace.yaml` is present.
- Source scan contains no forbidden placeholder hostnames or browser-extension URLs.
- Site URL is set to `https://pettahfloating.com` in `astro.config.ts`; canonical / `og:url` / sitemap are enabled.
- GA4 ID, Sinhala map locale, `TouristAttraction`/`LocalBusiness` JSON-LD with `@id`/`image`/`sameAs`, `FAQPage` JSON-LD, and `AggregateRating` JSON-LD are present.
- Google Maps review attribution block is visible on the page; no individual `Review` markup is injected.
- PWA manifest (`manifest.webmanifest`) + offline-first service worker (`sw.js`) + 512 SVG icons added.
- Logo/favicons are local; 180/32/16 PNGs are local; four gallery photos are self-hosted in `public/images/`.
- Image `alt` attributes are entity-bound and include the attraction name / city / country.

## Not completed in this session

- A synchronized `pnpm-lock.yaml` could not be generated because the package registry is unreachable from this container.
- Therefore `CI=1 corepack pnpm install --frozen-lockfile`, `pnpm check`, and `pnpm build` were **not** executed successfully here.
- Build-output grep and sitemap-output inspection consequently could not be performed on a real `dist/` directory.
- The Wikimedia image binaries were downloaded via `Special:FilePath` while available, but network throttling (429 responses) means the local copies should be re-verified during the first networked install/build.

`scripts/verify-clean.sh` contains the exact acceptance sequence to run once registry access is available. Until that script passes, this archive should be treated as a source candidate rather than a fully QA-accepted production build.
