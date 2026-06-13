'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ae475409fcbab7cb5bb667760e04c4c1",
"stripe-cancel.html": "41c49cdbf3b43455c213a8171a37798a",
"version.json": "17ebb0af53c18f87afc1569bc0dd4caf",
"splash/background.png": "45d671b7845471acd93020d5477cbf25",
"splash/logo.png": "0da438014beeabfa4f202f8934e81931",
"splash/app-icon.png": "4d3f95ab10b65c14e27e82c99fcefde6",
"index.html": "a76fb61df4474ef033efd155fba91ebd",
"/": "a76fb61df4474ef033efd155fba91ebd",
"firebase-messaging-sw.js": "1c915c2767d1c252ddd81007063bdcdb",
"main.dart.js": "a6f40383994ab50900b78db3a0504607",
"whish-success.html": "9b2d67715c5c5239cc6633baf88654bb",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "4830f6dc5b6d89855364c619dc02ec55",
"whish-failure.html": "67b1e9d446c259bcdf15cd712f4345d3",
"icons/Icon-192.png": "f1cfb22c1a52fdd5aa76e1957fa2c460",
"icons/Icon-maskable-192.png": "f1cfb22c1a52fdd5aa76e1957fa2c460",
"icons/Icon-maskable-512.png": "3b6f3f576eee697e8d3684c03ca5ce09",
"icons/Icon-512.png": "3b6f3f576eee697e8d3684c03ca5ce09",
"manifest.json": "e657de293a9cf6f2dd2ecb5bc4b6e3d9",
"stripe-success.html": "4b21fb9d98883ca49b0427c16eab5206",
"assets/NOTICES": "3bfc36f8babbadecf533f9aa2d3c93d5",
"assets/FontManifest.json": "06f2dc6e3de1ad93fa2cdfc66f29bc1c",
"assets/AssetManifest.bin.json": "5544f68384c380a211761cf3a60c93d8",
"assets/packages/flutter_gcaptcha_v3/assets/index.html": "950caadc27f7d52b11aca8727827f92b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/hugeicons/lib/fonts/hugeicons-stroke-rounded.ttf": "ed1746fbad500fea94f6e5c5eb97ed7d",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "6d247986689d283b7e45ccdf7214c2ff",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "5aaf92c5ab9985f01d7b013fe414dfea",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/jsons/countries.json.tmp": "832a0cb85d3d75c973a9fb18a600dcce",
"assets/assets/jsons/hugeicons_stroke.json": "f63acf86f1c2a61fc0fa27f69804c9f7",
"assets/assets/jsons/countries.json": "832a0cb85d3d75c973a9fb18a600dcce",
"assets/assets/images/new/onboarding1.png": "7bdc94f86396ee7740d72daaebbbe7b0",
"assets/assets/images/new/homework_image.jpg": "9e9b5dbeef4530bac3ea992ab4a5b416",
"assets/assets/images/new/class.png": "accee5b8063a900bfa25684aac5a4b26",
"assets/assets/images/new/onboarding3.png": "267f146dd3e6a7273161b2257771fa04",
"assets/assets/images/new/onboarding2.png": "97fe860b8958663a0bea55e38f677dc8",
"assets/assets/images/new/french.png": "edce83d1273bca4d22d913649c13351a",
"assets/assets/images/new/arabic.png": "6d0f90a6695478ac9ec0abcc29b87c05",
"assets/assets/images/new/google_icon.svg": "cda5ffef8de49f8500eb4f2d4390cf26",
"assets/assets/images/new/logo_splash.png": "0da438014beeabfa4f202f8934e81931",
"assets/assets/images/new/splash_background.png": "45d671b7845471acd93020d5477cbf25",
"assets/assets/images/new/female_avatar.png": "b213d7074dea102e6e392a8abbb9d4db",
"assets/assets/images/new/male_avatar.png": "af841642e6dac62f784d5b612fd627c8",
"assets/assets/images/new/class_bg.png": "61a8c7e40cadc2f9693845cf11bddccf",
"assets/assets/images/new/logo.png": "10904b2028f5c70038e2794bcaf7cf4d",
"assets/assets/images/new/project_image.jpg": "03aacc5505155833e459ff82fbbbef98",
"assets/assets/images/new/Appicon.png": "4d3f95ab10b65c14e27e82c99fcefde6",
"assets/assets/images/new/thesis_image.jpg": "f68e3515c5ab53afc858e1c7f58a2921",
"assets/assets/images/new/facebook_icon.svg": "03957bf6481cab62479bce6ace8fbf50",
"assets/assets/images/new/web.svg": "663f0c6cc001a600294e01b94724f97c",
"assets/assets/images/new/sos_image.jpg": "f78f3628c2bea467a15879f01ec5b9c9",
"assets/assets/images/new/apple_icon.svg": "fd0d77ddb37b5d6a60c9963c5922a680",
"assets/assets/images/new/english.png": "519c5893cfb043efcf36ce3bc3aced09",
"assets/assets/images/new/exam_image.jpg": "7f2891f70f569f0d5ff0a5815fc9f7e1",
"assets/assets/audio/new_message.mp3": "a9d89deba9adf6a4097964f9fc4166f9",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
