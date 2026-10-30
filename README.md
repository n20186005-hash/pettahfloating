# Pettah Floating Market independent visitor guide

Four existing language versions: English `/`, Sinhala `/si/`, Tamil `/ta/`, simplified Chinese `/zh/`.

The architecture remains pure-static Astro with Tailwind through Vite. A separate root Worker serves static assets and the same-origin Open-Meteo model-weather endpoint. Node 24.21.0, pnpm 12.4.1 and exact dependency versions are retained. The committed lock and workspace build allowances are authoritative.

```sh
pnpm install --frozen-lockfile
npm run check
npm run build
npx wrangler dev --ip 127.0.0.1
```

The observed deployment flow uses `npm run build` then `npx wrangler deploy`; release authorization and independent acceptance are separate from local validation. Do not regenerate the dependency graph to perform a content update.

UDA facility information, event-reservation contact hours, dated Maps information and dated condition reports have different scopes. The guide does not assert a confirmed recurring market schedule, free admission or current availability of all original stalls/facilities. Public Maps values are dated third-party attribution, excluded from rating markup.

The public imagery consists of original symbolic vector illustrations, not photographs, maps or proof of present conditions. See `public/images/CREDITS.txt`. Earlier photographs remain in Git history but are retired from delivery.

The privacy section in every language describes hosting, observed independent Cloudflare Web Analytics, the existing cookie-conditioned Google Analytics loader, the map and weather data flow. It does not invent a measurement switch. The retiring service worker removes only this site's old cache namespace and does not intercept requests.

The weather endpoint validates model age, local forecast dates and numeric fields, bounds edge caching to fifteen minutes, and returns a no-store unavailable response on failure. No forecast is fetched or embedded at build time. Unknown paths and explicit error aliases return true 404/noindex through the Worker; www and HTTP canonical redirects preserve path/query when the request reaches the configured Worker.
