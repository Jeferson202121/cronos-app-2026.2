const cacheName = 'cronos-v10';
const assets = [
  './',
  './index.html',
  './manifest.json'
];

// Instala o Service Worker e armazena os arquivos no cache do celular
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Permite que o app abra mesmo sem internet
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});