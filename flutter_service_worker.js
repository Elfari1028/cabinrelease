'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "fe424f4e59b988a0d2162dbbe4298c57",
"assets/FontManifest.json": "96880f5cbd12a15751331cdbdac93202",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/images/avatar_default.jpg": "89a682404afb42ddac754c37d89b4920",
"assets/images/background.png": "38484100d7bb31c07454ecb7f0ac5d48",
"assets/images/splash.png": "fd594f9114d72c1ed952f7f9b25b12dc",
"assets/images/title.png": "6f9ee30041688f5b0ccf638485f0bfb8",
"assets/images/title_white.png": "b919d847c16c8fe015108ab2657e336e",
"assets/LICENSE": "eeadfbfbd7f74ef60e24b77a7ea1ab15",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/open_iconic_flutter/assets/open-iconic.woff": "3cf97837524dd7445e9d1462e3c4afe2",
"assets/packages/progress_dialog/assets/double_ring_loading_io.gif": "e5b006904226dc824fdb6b8027f7d930",
"favicon.png": "aa984459f22ce6450724e5f12c7381ba",
"icons/fav.png": "0118e6d84e03d78cddcc7da7334727eb",
"icons/Icon-192.png": "507c18ffb0b3821406833f1f1a55c576",
"icons/Icon-512.png": "af516dfcb4482dd00c6764d19044fe17",
"index.html": "538cf1c524deac07d75553fb3961abed",
"/": "538cf1c524deac07d75553fb3961abed",
"main.dart.js": "564dbfd62623c98796e273f2dc3feae1",
"manifest.json": "9976d21f7920f099663a25dcb4ee7abd"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
