// sw.js - Place in your Jekyll root directory
const CACHE_NAME = 'jekyll-site-v1';
const STATIC_CACHE = 'static-v1';

// Files to cache immediately when service worker installs
const PRECACHE_URLS = [
  '/',
  '/quiz/',
  '/persona/',
  '/self/',
  '/shadow/',
  '/growth/',
  '/relationship/',
  '/about/',
  '/contact/',
  '/disclaimer/',
  '/assets/css/base.css',
  '/assets/css/header.css',
  '/assets/css/starfield.css',
  '/assets/css/quiz.css',
  '/assets/css/footer.css',
  '/assets/js/header.js',
  '/assets/js/starfield.js',
  '/assets/js/xp.js',
  '/offline.html'
];

// Install event - cache essential files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  // Handle navigation requests (page loads)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // If online, cache the page and return it
          const responseClone = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => cache.put(event.request, responseClone));
          return response;
        })
        .catch(() => {
          // If offline, try cache first, then offline page
          return caches.match(event.request)
            .then(cachedResponse => {
              return cachedResponse || caches.match('/offline.html');
            });
        })
    );
    return;
  }

  // Handle asset requests (CSS, JS, images)
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        
        return fetch(event.request)
          .then(response => {
            // Don't cache if not a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            const responseClone = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => cache.put(event.request, responseClone));
            
            return response;
          });
      })
  );
});