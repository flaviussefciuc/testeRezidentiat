// Rezi service worker: lets students keep studying without a connection.
// - On install it precaches the build listed in /sw-precache.json (app shell, every
//   lazy page, the active question bank) under a cache named after the build.
// - Pages: network first, falling back to the cached shell when offline.
// - Hashed assets: cache first. The previous build's cache is kept so a tab that is
//   still open on the old version can load its remaining chunks.
// - Question bank: cache first per version; older versions are dropped.
// - Other origins (Supabase sync) are never cached.
const META = 'rezi-meta';
const BANK = 'rezi-bank';
const FONTS = 'rezi-fonts';
let current = null;

async function builds() {
  const res = await (await caches.open(META)).match('/__builds');
  return res ? res.json() : [];
}
async function currentCache() {
  if (!current) { const list = await builds(); current = list.length ? 'rezi-' + list[list.length - 1] : 'rezi-runtime'; }
  return caches.open(current);
}

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const manifest = await (await fetch('/sw-precache.json', { cache: 'no-store' })).json();
    const cache = await caches.open('rezi-' + manifest.build);
    // One failed file must not abort the install; it will be fetched on demand.
    await Promise.all(manifest.files.map((f) => cache.add(new Request(f, { cache: 'reload' })).catch(() => undefined)));
    const bank = await caches.open(BANK);
    for (const f of manifest.bank) {
      if (!(await bank.match(f))) await bank.add(new Request(f, { cache: 'reload' })).catch(() => undefined);
    }
    const list = (await builds()).filter((b) => b !== manifest.build).concat(manifest.build);
    await (await caches.open(META)).put('/__builds', new Response(JSON.stringify(list)));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const list = await builds();
    const keep = new Set([META, BANK, FONTS, ...list.slice(-2).map((b) => 'rezi-' + b)]);
    for (const name of await caches.keys()) if (name.startsWith('rezi-') && !keep.has(name)) await caches.delete(name);
    await (await caches.open(META)).put('/__builds', new Response(JSON.stringify(list.slice(-2))));
    current = list.length ? 'rezi-' + list[list.length - 1] : null;
    await self.clients.claim();
  })());
});

async function page(request) {
  try {
    const response = await fetch(request);
    if (response.ok) (await currentCache()).put('/', response.clone());
    return response;
  } catch {
    return (await caches.match('/')) || (await caches.match('/index.html')) || Response.error();
  }
}
async function asset(request) {
  const hit = await caches.match(request);
  if (hit) return hit;
  const response = await fetch(request);
  if (response.ok && response.type === 'basic') (await currentCache()).put(request, response.clone());
  return response;
}
async function bankFile(request) {
  const cache = await caches.open(BANK);
  const hit = await cache.match(request);
  if (hit) return hit;
  const response = await fetch(request);
  if (response.ok) {
    await cache.put(request, response.clone());
    const path = new URL(request.url).pathname;
    for (const old of await cache.keys()) if (new URL(old.url).pathname === path && old.url !== request.url) await cache.delete(old);
  }
  return response;
}
async function font(request) {
  const cache = await caches.open(FONTS);
  const hit = await cache.match(request);
  const network = fetch(request).then((r) => { if (r.ok || r.type === 'opaque') cache.put(request, r.clone()); return r; }).catch(() => hit);
  return hit || network;
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) {
    if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') event.respondWith(font(request));
    return;
  }
  if (request.mode === 'navigate') return event.respondWith(page(request));
  if (url.pathname === '/sw.js' || url.pathname === '/sw-precache.json') return;
  if (url.pathname.startsWith('/bank/')) return event.respondWith(bankFile(request));
  event.respondWith(asset(request));
});
