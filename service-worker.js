const CACHE_NAME = "choice-game-cache-v1";

// Add all files that should be available offline
const ASSETS = [
  "./",
  "index.html",
  "storyData.js",

  /* Media */
  "opening.jpg",
  "lightburst.jpg",
  "college.jpg",
  "riya.jpg",
  "awakening.jpg",
  "bridge_accident.jpg",
  "newspaper.jpg",
  "lab_dark.jpg",
  "dark_mutation.jpg",
  "kabirtalk.png",
  "city_fight.jpg",
  "kabirend.jpg",
  "bgmusic.mp3",
  "magic.mp3"
];

// Install service worker and cache all assets
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

// Serve files from cache first
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// Clean old caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});
