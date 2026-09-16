/**
 * Static asset server for Cloudflare Workers.
 *
 * This site is a pure-static Astro build (output: 'static'). Every file under
 * ./dist — the HTML pages, the bundled CSS/JS, AND the images in /images —
 * is served through the ASSETS binding. Using an explicit worker makes static
 * asset delivery unambiguous and avoids any assets-only mode edge cases where
 * a request could fall through to a fallback instead of the real file.
 *
 * No adapter (@astrojs/cloudflare) is used, so the previous
 * `maybeResolveMain` / `dist/_worker.js` conflict does not apply here.
 */
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
