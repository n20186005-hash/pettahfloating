// Retire only this site's previous offline caches; do not intercept requests.
self.addEventListener('install',e=>e.waitUntil(self.skipWaiting()));
self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const k of await caches.keys())if(k.startsWith('pettah-floating-'))await caches.delete(k);await self.registration.unregister();await self.clients.claim();})()));
