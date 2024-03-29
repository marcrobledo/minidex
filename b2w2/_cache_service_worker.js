/*
	Cache Service Worker template by mrc 2019
	mostly based in:
	https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/basic/service-worker.js
	https://github.com/chriscoyier/Simple-Offline-Site/blob/master/js/service-worker.js
	https://gist.github.com/kosamari/7c5d1e8449b2fbc97d372675f16b566e	
	
	Note for GitHub Pages:
	there can be an unexpected behaviour (cache not updating) when site is accessed from
	https://user.github.io/repo/ (without index.html) in some browsers (Firefox)
	use absolute paths if hosted in GitHub Pages in order to avoid it
	also invoke sw with an absolute path:
	navigator.serviceWorker.register('/repo/_cache_service_worker.js', {scope: '/repo/'})
*/

var PRECACHE_ID='minidex-b2w2';
var PRECACHE_VERSION='v1';
var PRECACHE_URLS=[
'/minidex/b2w2/index.html','/minidex/b2w2/',
'/minidex/b2w2/manifest.json',

/* core */
'/minidex/b2w2/app/minidex.js',
'/minidex/b2w2/app/minidex_locale.js',
'/minidex/b2w2/app/minidex.css',
'/minidex/b2w2/app/assets/minidex_sprites.png',
/* core assets */
'/minidex/b2w2/app/assets/minidex_dex_header1.png',
'/minidex/b2w2/app/assets/minidex_dex_header2.png',
'/minidex/b2w2/app/assets/minidex_home_header1.png',
'/minidex/b2w2/app/assets/minidex_home_header2.png',

/* specific game data */
'/minidex/b2w2/app/data/b2w2_game.js',
'/minidex/b2w2/app/data/b2w2_pokemon.js',
'/minidex/b2w2/app/data/b2w2_encounters.js',
'/minidex/b2w2/app/data/gen5_competitive.js',
/* specific assets */
'/minidex/b2w2/app/assets/favicon16.png',
'/minidex/b2w2/app/assets/favicon192.png',
'/minidex/b2w2/app/assets/b2w2_icons.png'
];



// install event (fired when sw is first installed): opens a new cache
self.addEventListener('install', evt => {
	evt.waitUntil(
		caches.open('precache-'+PRECACHE_ID+'-'+PRECACHE_VERSION)
			.then(cache => cache.addAll(PRECACHE_URLS))
			.then(self.skipWaiting())
	);
});


// activate event (fired when sw is has been successfully installed): cleans up old outdated caches
self.addEventListener('activate', evt => {
	evt.waitUntil(
		caches.keys().then(cacheNames => {
			return cacheNames.filter(cacheName => (cacheName.startsWith('precache-'+PRECACHE_ID+'-') && !cacheName.endsWith('-'+PRECACHE_VERSION)));
		}).then(cachesToDelete => {
			return Promise.all(cachesToDelete.map(cacheToDelete => {
				console.log('delete '+cacheToDelete);
				return caches.delete(cacheToDelete);
			}));
		}).then(() => self.clients.claim())
	);
});


// fetch event (fired when requesting a resource): returns cached resource when possible
self.addEventListener('fetch', evt => {
	if(evt.request.url.startsWith(self.location.origin)){ //skip cross-origin requests
		evt.respondWith(
			caches.match(evt.request).then(cachedResource => {
				if (cachedResource) {
					return cachedResource;
				}else{
					return fetch(evt.request);
				}
			})
		);
	}
});