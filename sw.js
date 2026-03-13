self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('core-shell-cache').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/script.js'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    if (event.request.destination === 'document' || event.request.destination === 'script' || event.request.destination === 'style') {
        event.respondWith(
            fetch(event.request).catch(() => {
                return caches.match(event.request);
            })
        );
    } else if (event.request.url.includes('/json/products')) {
        event.respondWith(
            fetch(event.request).then(response => {
                return response || fetch(event.request);
            }).catch(() => {
                return caches.match(event.request);
            })
        );
    }
});
