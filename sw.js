console.log("Service worker: registered");
let CACHE_NAME = 'restaurant-v1';

self.addEventListener('Install', function (event) {
	event.waitUntil(
		caches.open(CACHE_NAME).then(function (cache) {
			return cache.addAll([
				'/',
				'/index.html',
				'/restaurant.html',
				'./css/styles.css',
				'./css/mobileCss.css',
				'./css/laptop.css',
				'./js/dbhelper.js',
				'.data/restaurant.json',
				'./js/main.js',
				'./js/restaurant_info.js',
				'/js/sw_register.js',
				'./img/1.jpg',
				'./img/2.jpg',
				'./img/3.jpg',
				'./img/4.jpg',
				'./img/5.jpg',
				'./img/6.jpg',
				'./img/7.jpg',
				'./img/8.jpg',
				'./img/10.jpg'

			]);
		})
	);
});

self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.match(event.request)
		.then(function (response) {

			return response || fetch(event.request);


		})
	);

});

self.addEventListener('activate', function (event) {
	event.waitUntil(
		caches.keys()
			.then(function (cacheNames) {
				return Promise.all(
					cacheNames.filter(function (cacheName) {
						return cacheName.startsWith('restaurant-') &&
							cacheName != CACHE_NAME;
					}).map(function (cacheName) {
						return caches.delete(cacheName);
					})
				);
			})
	);
});


