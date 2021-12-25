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

var PRECACHE_ID='minidex-swsh';
var PRECACHE_VERSION='v1';
var PRECACHE_URLS=[
'/minidex/swsh/index.html','/minidex/swsh/',
'/minidex/swsh/manifest.json',

/* core */
'/minidex/swsh/app/minidex.js',
'/minidex/swsh/app/minidex_locale.js',
'/minidex/swsh/app/minidex.css',
'/minidex/swsh/app/assets/minidex_sprites.png',
/* core assets */
'/minidex/swsh/app/assets/minidex_dex_header1.png',
'/minidex/swsh/app/assets/minidex_dex_header2.png',
'/minidex/swsh/app/assets/minidex_home_header1.png',
'/minidex/swsh/app/assets/minidex_home_header2.png',

/* specific game data */
'/minidex/swsh/app/data/swsh_game.js',
'/minidex/swsh/app/data/swsh_pokemon.js',
'/minidex/swsh/app/data/swsh_encounters.js',
'/minidex/swsh/app/data/gen8_competitive.js',
/* specific assets */
'/minidex/swsh/app/assets/favicon16.png',
'/minidex/swsh/app/assets/favicon192.png',
'/minidex/swsh/app/assets/swsh_icons.png',
'/minidex/swsh/app/assets/swsh_map_wild_area.png',
'/minidex/swsh/app/assets/swsh_map_wild_area_es.png',
'/minidex/swsh/app/assets/swsh_map_dlc1.png',
'/minidex/swsh/app/assets/swsh_map_dlc2.png'
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