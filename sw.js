self.addEventListener('install', (e) => {
  console.log('Service Worker: Instalado');
});

self.addEventListener('fetch', (e) => {
  // PWA básica que permite la instalación en el celular
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
