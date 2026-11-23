// Service Worker for Battle for Moscow PWA
// Handles offline caching and resource serving

// Cache version - increment this to force cache refresh
const CACHE_VERSION = 'b4m-v1.0.6';
const CACHE_NAME = `battle-for-moscow-${CACHE_VERSION}`;

// All resources to precache for offline functionality
const PRECACHE_URLS = [
  // HTML pages
  './',
  'index.html',
  'rules.html',
  'tournamentrules.html',

  // PWA manifest
  'manifest.json',

  // CSS resources
  'css/b4m.css',
  'css/rules.css',
  'css/explosion.png',

  // JavaScript files
  // The live site lists /b4m/js/b4m.js here, but that file 404s.
  // The page loads b4m.min.js, so the local copy precaches the file that exists.
  'js/b4m.min.js',
  'js/honeycomb.min.js',

  // Local images
  'img/1.png',
  'img/2.png',
  'img/3.png',
  'img/4.png',
  'img/5.png',
  'img/6.png',
  'img/arrows_counter.png',
  'img/b4m.png',
  'img/check_counter.png',
  'img/combat_example_1.png',
  'img/combat_example_2.png',
  'img/delete_counter.png',
  'img/forest_marker.png',
  'img/fortification_marker.png',
  'img/frame.png',
  'img/german_marker.png',
  'img/german_turn.png',
  'img/germans.png',
  'img/help_add_battles.png',
  'img/help_view_cities.png',
  'img/major_marker.png',
  'img/movement_example.png',
  'img/river_marker.png',
  'img/rotate.gif',
  'img/sample_military_units.png',
  'img/soviet_marker.png',
  'img/soviet_turn.png',
  'img/soviets.png',
  'img/unit_type_symbols.png',
  'img/zoc.png',
  'img/map.png',
  'img/terrain.png',
  'img/crt.png',
  'img/thumbnail.png',

  // Font Awesome, kept locally so the copy works offline
  'css/font-awesome.min.css',
  'fonts/fontawesome-webfont.eot',
  'fonts/fontawesome-webfont.svg',
  'fonts/fontawesome-webfont.ttf',
  'fonts/fontawesome-webfont.woff',
  'fonts/fontawesome-webfont.woff2',
];

// Map, terrain chart, CRT and thumbnail used to live on
// storage.googleapis.com and were cached with no-cors.
// They are local files now and are listed in PRECACHE_URLS.
const CORS_URLS = [];

// Install event - precache all resources
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Precaching local resources');

        // Cache local resources first
        const localCachePromise = cache.addAll(PRECACHE_URLS);

        // Cache cross-origin resources with no-cors mode
        const corsCachePromises = CORS_URLS.map(url => {
          return fetch(url, { mode: 'no-cors' })
            .then(response => {
              return cache.put(url, response);
            })
            .catch(error => {
              console.warn(`[Service Worker] Failed to cache ${url}:`, error);
              // Don't fail installation if a cross-origin resource fails
            });
        });

        return Promise.all([localCachePromise, ...corsCachePromises]);
      })
      .then(() => {
        console.log('[Service Worker] Installation complete');
        return self.skipWaiting(); // Activate immediately
      })
      .catch((error) => {
        console.error('[Service Worker] Installation failed:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              // Remove old Battle for Moscow caches
              return cacheName.startsWith('battle-for-moscow-') && cacheName !== CACHE_NAME;
            })
            .map((cacheName) => {
              console.log('[Service Worker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        console.log('[Service Worker] Activation complete');
        return self.clients.claim(); // Take control immediately
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          // Return cached version
          return cachedResponse;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest)
          .then((response) => {
            // Check if valid response
            if (!response || response.status !== 200) {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            // Cache the fetched resource for future use
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch((error) => {
            console.error('[Service Worker] Fetch failed:', error);

            // Offline fallback for HTML pages
            if (event.request.destination === 'document') {
              return caches.match('index.html');
            }

            throw error;
          });
      })
  );
});
