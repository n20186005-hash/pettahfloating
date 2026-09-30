/**
 * Static asset server + lightweight weather proxy for Cloudflare Workers.
 *
 * The site is a pure-static Astro build (output: 'static'). Every file under
 * ./dist is served through the ASSETS binding. The single dynamic route
 * GET /api/weather proxies Open-Meteo (locale-independent numeric data; the
 * client applies language labels) and caches the response at the edge.
 *
 * No @astrojs/cloudflare adapter is used.
 */

const WEATHER_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=6.9329&longitude=79.8554' +
  '&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,weather_code,wind_speed_10m,is_day' +
  '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max' +
  '&timezone=Asia%2FColombo&forecast_days=7';

async function handleWeather(request, env) {
  const cacheKey = new Request('https://pettahfloating.com/__weather', request);
  if (env?.caches) {
    const cached = await env.caches.default.match(cacheKey);
    if (cached) return cached;
  }
  const upstream = await fetch(WEATHER_URL, { cf: { cacheTtl: 600 } });
  const data = await upstream.text();
  const res = new Response(data, {
    status: 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=600',
    },
  });
  if (env?.caches) {
    request.waitUntil?.(env.caches.default.put(cacheKey, res.clone()));
  }
  return res;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/weather') {
      try {
        return await handleWeather(request, env);
      } catch {
        return new Response(JSON.stringify({ error: 'weather_unavailable' }), {
          status: 502,
          headers: { 'content-type': 'application/json; charset=utf-8' },
        });
      }
    }
    return env.ASSETS.fetch(request);
  },
};
