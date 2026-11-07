/* Service worker voor Trolhuizen.
   Nieuwe versie uitbrengen? Verhoog VERSION. Spelers krijgen dan de melding
   "Er is een nieuwe versie" en kunnen met één tik bijwerken. */
const VERSION = 'trolhuizen-v6';
const FONT_CACHE = 'trolhuizen-fonts';
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/schets1-klein.jpg',
  './assets/heks-schets-klein.jpg',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(SHELL)));
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) {
      if (key !== VERSION && key !== FONT_CACHE) await caches.delete(key);
    }
    await self.clients.claim();
  })());
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (req.mode === 'navigate') {
    event.respondWith(pageFirstFromNetwork(event));
  } else if (url.origin === self.location.origin) {
    event.respondWith(cacheThenRefresh(event, VERSION));
  } else if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(cacheThenRefresh(event, FONT_CACHE));
  }
});

// De pagina zelf: eerst het netwerk (zo krijg je altijd de nieuwste versie),
// zonder internet of bij een trage verbinding uit de cache.
async function pageFirstFromNetwork(event) {
  const cache = await caches.open(VERSION);
  const fromCache = () => cache.match(event.request, { ignoreSearch: true })
    .then(r => r || cache.match('./index.html') || cache.match('./'));
  try {
    const res = await Promise.race([
      fetch(event.request),
      new Promise((_, reject) => setTimeout(() => reject(new Error('traag')), 4000)),
    ]);
    if (res.ok) cache.put('./index.html', res.clone());
    return res;
  } catch (e) {
    const cached = await fromCache();
    return cached || Response.error();
  }
}

// Plaatjes, iconen en lettertypes: meteen uit de cache, op de achtergrond verversen.
async function cacheThenRefresh(event, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(event.request);
  const refresh = fetch(event.request).then(res => {
    if (res.ok || res.type === 'opaque') cache.put(event.request, res.clone());
    return res;
  }).catch(() => cached);
  if (cached) { event.waitUntil(refresh); return cached; }
  return refresh;
}
