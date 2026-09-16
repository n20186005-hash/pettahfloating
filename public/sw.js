/*
 * Pettah Floating Market — offline-first service worker.
 * Cache version is the only thing you need to bump when site content changes.
 */
const CACHE_VERSION = 'pettah-floating-v1';
const PRECACHE = [
  '/',
  '/manifest.webmanifest',
  '/favicon.svg',
  '/logo.svg',
  '/icons/icon-512.svg',
  '/icons/maskable-icon-512.svg',
  '/icons/apple-touch-icon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_VERSION);
      await Promise.allSettled(PRECACHE.map((url) => cache.add(new Request(url, { cache: 'reload' }))));
      await self.skipWaiting();
    })()
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key)));
      await self.clients.claim();
    })()
  );
});

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_VERSION);
  const cached = await cache.match(request, { ignoreSearch: false });
  const network = fetch(request)
    .then((response) => {
      if (response && response.ok && response.type === 'basic') {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => undefined);

  if (cached) {
    // Refresh in the background, serve the cached copy immediately.
    network.catch(() => undefined);
    return cached;
  }

  const response = await network;
  if (response) return response;

  const offline = await cache.match('/');
  if (offline) return offline;
  return new Response('Offline', { status: 503, statusText: 'Offline' });
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Navigations: try the network first so fresh content wins, fall back to cache.
  if (request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(request);
          const cache = await caches.open(CACHE_VERSION);
          cache.put(request, response.clone());
          return response;
        } catch (error) {
          const cache = await caches.open(CACHE_VERSION);
          const cached = (await cache.match(request)) || (await cache.match('/'));
          if (cached) return cached;
          throw error;
        }
      })()
    );
    return;
  }

  event.respondWith(staleWhileRevalidate(request));
});
