console.log("Service worker: registered");
 let CACHE_NAME = 'restaurant-v1';

self.addEventListener('Install', function(e){
e.waitUntil(
	caches.open(CACHE_NAME).then(function(cache){
		return cache.addAll([
'./',
'./index.html',
'./restaurant.html',
'./css/styles.css',
'./css/mobileCss.css',
'./css/laptop.css',
'./js/dbhelper.js',
'.data/restaurant.json',
'./js/main.js',
'./js/restaurant_info.js',
'./js/sw_register.js',
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

self.addEventListener('fetch', function(e){
	e.respondWith(
		caches.match(e.request).then(function(response){
		if (response){
			console.log('Found', e.request, ' in cache');
			return response;
		}
		else {
			console.log('Cannot find ' , e.request, ' in cache, FETCHING!');
			return fetch(e.request).then(function(response){
				caches.open(CACHE_NAME).then(function(cache){
					cache.put(e.request, response);
				})
				return response;
			})
			.catch(function(err){
				console.error(err);
			})
		}	
		})

		);
})
