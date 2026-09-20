// Service Worker for SysJoL PWA
//
// Estrategia:
// - Navegaciones (HTML): network-first. El HTML nunca lleva hash en el nombre,
//   así que si se sirve desde caché el sitio queda "congelado" en el deploy
//   anterior. Con network-first cada visita trae el index.html nuevo y por ende
//   los bundles nuevos. Si no hay red, se usa la copia en caché (offline).
// - /assets/* (JS/CSS con hash de Vite): cache-first, son inmutables.
// - Todo lo demás (APIs, JSON, imágenes): sin caché del SW, lo maneja el navegador.
//
// IMPORTANTE: al cambiar este archivo (o la estrategia), subir CACHE_NAME
// (sysjol-vN) para que los clientes con el SW viejo migren y borren cachés.
const CACHE_NAME = "sysjol-v3";
const PRECACHE_URLS = ["/favicon.png", "/manifest.json"];

// Install: pre-cache solo estáticos que no cambian entre deploys.
// Ya NO se pre-cachea "/" ni "/index.html" (eso congelaba el home).
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .catch(() => undefined),
  );
  self.skipWaiting();
});

// Activate: borra cachés de versiones anteriores y toma control.
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
            return undefined;
          }),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  // 1) Navegaciones: red primero, caché solo como respaldo offline.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() =>
          caches
            .match(request)
            .then((cached) => cached || caches.match("/index.html")),
        ),
    );
    return;
  }

  // 2) Assets con hash de Vite: caché primero (inmutables entre deploys).
  try {
    const url = new URL(request.url);
    if (
      url.origin === self.location.origin &&
      url.pathname.startsWith("/assets/")
    ) {
      event.respondWith(
        caches.match(request).then(
          (cached) =>
            cached ||
            fetch(request).then((response) => {
              if (response && response.status === 200) {
                const copy = response.clone();
                caches
                  .open(CACHE_NAME)
                  .then((cache) => cache.put(request, copy));
              }
              return response;
            }),
        ),
      );
    }
  } catch {
    // URL inválida: deja que el navegador resuelva sin el SW.
  }
  // 3) Resto de peticiones: no se interceptan.
});

// Permite al cliente (UpdatePrompt) activar el SW nuevo de inmediato.
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
