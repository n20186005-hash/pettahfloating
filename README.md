# පිටකොටුව පාවෙන වෙළඳපොළ — Pettah Floating Market

A Sinhala-first, single-page Astro visitor guide for Pettah Floating Market, Colombo, Sri Lanka.

> **Delivery status:** This archive is a source candidate, not a QA-accepted production build. The current execution container cannot resolve `registry.npmjs.org`, so a synchronized `pnpm-lock.yaml` could not be generated and the required frozen install / `astro check` / build sequence could not be run here. See `QA-NOTICE.md` and `LOCKFILE-SOURCE.md`. Do not treat the project as production-verified until `scripts/verify-clean.sh` passes in a networked environment.

## Stack

- Astro 7
- Tailwind CSS 4 via `@tailwindcss/vite`
- TypeScript 6 (kept within `@astrojs/check`'s supported peer range)
- pnpm
- Cloudflare Workers Static Assets
- GA4: `G-HXM22WWPKP`

## Site URL: one configuration point

Edit **only** `SITE` in `astro.config.ts` after you own the final domain:

```ts
const SITE = ''; // replace the empty string with the real owned origin
```

Leave it as an empty string before the domain is chosen. The project still builds without a site URL. Canonical and Open Graph absolute URL tags are omitted when no `site` is set, and `@astrojs/sitemap` is enabled only when `site` has a real value.

## Commands

A frozen install requires the real synchronized lockfile first. In a networked environment run:

```bash
corepack enable
corepack prepare pnpm@12.4.1 --activate
pnpm install --lockfile-only
./scripts/verify-clean.sh
pnpm deploy
```

Once `pnpm-lock.yaml` exists and is committed, normal CI should start directly with `CI=1 corepack pnpm install --frozen-lockfile`.

The Cloudflare deployment is a static Astro build served by **Workers Static Assets**, using `assets.directory = ./dist` in `wrangler.jsonc`. No database, authentication, CMS, server rendering, or Worker runtime code is needed.

## Images

The four photos are real Pettah Floating Market photographs from Wikimedia Commons under CC BY-SA 4.0. This package includes a source/attribution manifest at `public/images/README.md`. The page currently uses the Commons originals directly; to self-host later, download the originals, keep the attribution, and update the four `src` fields in `src/pages/index.astro`.

## Domain-independent SEO behavior

- No placeholder domain is used.
- Canonical URL is rendered only if `Astro.site` exists.
- `og:url` is rendered only if `Astro.site` exists.
- JSON-LD `url` is added only if `Astro.site` exists.
- Sitemap integration runs only if `SITE` is non-empty.
- No manually authored sitemap or fabricated `lastmod` is included.

## Map localization

The embedded Google Map uses `hl=si&gl=lk` for Sinhala / Sri Lanka.
