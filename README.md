# පිටකොටුව පාවෙන වෙළඳපොළ — Pettah Floating Market

A Sinhala-first, single-page Astro visitor guide for Pettah Floating Market, Colombo, Sri Lanka.

**Live origin:** `https://pettahfloating.com` (configured in `astro.config.ts`).

> **Delivery status:** This archive is a source candidate, not a QA-accepted production build. The current execution container cannot resolve `registry.npmjs.org`, so a synchronized `pnpm-lock.yaml` could not be generated and the required frozen install / `astro check` / build sequence could not be run here. See `QA-NOTICE.md` and `LOCKFILE-SOURCE.md`. Do not treat the project as production-verified until `scripts/verify-clean.sh` passes in a networked environment.

## Stack

- Astro 7
- Tailwind CSS 4 via `@tailwindcss/vite`
- TypeScript 6 (kept within `@astrojs/check`'s supported peer range)
- pnpm
- Cloudflare Workers Static Assets
- GA4: `G-HXM22WWPKP`
- PWA manifest + offline-first service worker

## Site URL: one configuration point

The domain is already set in `astro.config.ts`:

```ts
const SITE = 'https://pettahfloating.com';
```

Changing `SITE` will also toggle the `@astrojs/sitemap` integration, canonical / Open Graph absolute URLs, and the JSON-LD `@id`/`url` values.

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

## Entity-bound SEO highlights

- Domain set to `pettahfloating.com`; canonical, `og:url`, and JSON-LD `url`/`@id` generated automatically.
- `TouristAttraction` + `LocalBusiness` JSON-LD with `@id`, `image`, `isAccessibleForFree`, `hasMap`, `sameAs`, and `AggregateRating`.
- `FAQPage` JSON-LD covering English location/free-to-visit questions and Sinhala practical questions.
- Google Maps rating displayed on the page only (synced 3.7 / 18,836 reviews · September 2026) with clear source attribution; no individual review text is reproduced or injected as structured data.
- PWA manifest + service worker for offline caching of static assets.

## Images

All four hero/gallery photos are real Pettah Floating Market photographs from Wikimedia Commons under CC BY-SA 4.0. They are self-hosted in `public/images/` so the page does not depend on Wikimedia thumbnail availability. The source/attribution manifest is at `public/images/README.md`.

## Map localization

The embedded Google Map uses `hl=si&gl=lk` for Sinhala / Sri Lanka.
