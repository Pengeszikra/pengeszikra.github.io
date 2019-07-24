/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["app.html","374cc4e79e6b96e85e0beb2ac0ff08c0"],["document/cave.1.1.md","ba396d9e84749aeb4ddd5070a40f9b98"],["document/cave.2.1.again.md","283d6c4fc0eac486defc99a2eca3970e"],["document/cave.2.1.md","9e49f9f517f1c5b9ea07cb6c49a51479"],["document/cave.2.10.md","12c9a22fc9c3fd5df106bd47b3e1b3b6"],["document/cave.2.11.md","66a385a135e9f0589d6dbe8474759b08"],["document/cave.2.12.md","2558ab24b00c403850467b743a8531a5"],["document/cave.2.2.md","105ce41084ac02be3d379b5a24c368ce"],["document/cave.2.3.md","7654fd02e26f2ea440c875640eb25e95"],["document/cave.2.4.md","538127c261a32f05c51d0ab15d0353c8"],["document/cave.2.5.md","d49e18fa13497f053cc2a99bd251cb43"],["document/cave.2.6.md","21d46c81ccb6e1e8945bf55edd8316f5"],["document/cave.2.7.md","056b90282a21bee91ad38016aff7e8f2"],["document/cave.2.8.md","421d3926f622b2b2daf788d8caa7c943"],["document/cave.2.9.md","5772012a61c38fc2f56af98be756dda7"],["document/cave.3.md","0f024a632f87399beaa387f13e5f9410"],["document/cave.4.md","21106e5f536634b2c3b415100d81c37f"],["document/cave.intro.md","1fa8b6b2064372497f4f72a70eb888f0"],["document/development.md","16239bb30ba7235ba28e9e78612ce445"],["document/findCubeUv.md","90be3fa69bca2b0b302ed78c0a49a08d"],["document/history.md","b5d80ccbf0fb8416d4e5a55f7504f6b9"],["document/idea.md","829e6a418c0c2fee3c284d0cca480ffe"],["document/image149.png","79c9a6f05ad44360aa9be6d56f9d417c"],["document/interactive-story-development.md","55b191a41ebf958684afd99d21074b24"],["document/intro.md","1fa8b6b2064372497f4f72a70eb888f0"],["document/levelSelector.md","5c510ea039bdf9adfd6393a10b13ac60"],["document/todo.md","39a4aae09ad1173a9522d049b91d8a72"],["favicon.ico","092b572a42811e131741f93f4603ced7"],["fonts/FiraSansExtraCondensed-Medium-latin-ext.woff2","4bd08d3db75498ebc5f3734b92df0beb"],["fonts/FiraSansExtraCondensed-Medium-latin.woff2","75450c16676befb89b02e4c16a2986f9"],["fonts/FiraSansExtraCondensed-Regular-latin-ext.woff2","c53484a93c864aa20ae0865837f258e0"],["fonts/FiraSansExtraCondensed-Regular-latin.woff2","62a9e2570fbe9c3b1e9b9bb84680cbf6"],["icon_128x128.30e0bb2a951b7bebad7ca0af2ef573cb.png","30e0bb2a951b7bebad7ca0af2ef573cb"],["icon_192x192.684dcc21f94dd78ce317de911cc213a5.png","684dcc21f94dd78ce317de911cc213a5"],["icon_256x256.48c3fd32ebd933abc52f303ca64b9e06.png","48c3fd32ebd933abc52f303ca64b9e06"],["icon_384x384.7af8e830a67b01d5636b199993235f89.png","7af8e830a67b01d5636b199993235f89"],["icon_512x512.01271075236a6a8a0302da808faf76c1.png","01271075236a6a8a0302da808faf76c1"],["icon_96x96.8bec0ef0df2346807185ad94d0a6c0e0.png","8bec0ef0df2346807185ad94d0a6c0e0"],["idea.js","e3ba19e8f3b8b7ac82d7b8936c7e3e5d"],["img/caves/barlang-01.png","1cf79edc32f0c3e524a5f60e5b3dffe2"],["img/caves/blue-cave.png","9c3784f2d50b29c0f43bd7e86610c002"],["img/caves/building-cave.png","a6c2cf8661aebb13ee0b6cf96654e1b6"],["img/caves/chain-cave.png","8233fee5a0d4abb5508fd2e46ec10a8e"],["img/caves/city.png","c7cb708b0186792fc1d2df706cc8d1a8"],["img/caves/door-closed.png","1affbe1e650b93638b14b2ec3ea0ee51"],["img/caves/enginer-cave.png","1b375a3c5312e6f08047273c304ba05a"],["img/caves/entrance.png","052a8127092afa8cbba4dc769497d6fd"],["img/caves/fang-cave.png","d2df47b71d02e362b0068f38d36b1d05"],["img/caves/greek-city.jpg","f7b13ec78ffaeb3db06dd1525124bf1f"],["img/caves/island.png","d5b52f3c6ca0033c50addd34d499dfa9"],["img/caves/island.png~","360b798dfc008c659057d96d2bdbfb7b"],["img/caves/light-cave.png","44cbc4a8ca864f174e0f8e2a27d94e0e"],["img/caves/needle-cave.png","13d86049c764f1da8bd67bed9c5c0809"],["img/caves/prisoner-place.png","dbf69a663434c358b46276aacea90be9"],["img/caves/prisoner-route-1.png","fd574de7c5e3a644a538fa613d7c6802"],["img/caves/prisoner-route-2.png","6576d05806c66e341e520623b76acd4c"],["img/caves/red-cave.png","1a994c8422d0d306ccfdbcee3b4c0fab"],["img/caves/road-cave.png","15bc6da0904590ce0890017bc7a37778"],["img/caves/staircase-cave.png","406b95f41495ab2df39be9e93bd6e11a"],["img/caves/waterfall-cave.png","24ccfd5605dd6a3987f15ab29f913bd5"],["img/caves/wheel-cave.png","45a4811fbb94a8b1aa614cc41479bb5d"],["img/gui/adeimantosz.png","86e5dc1d474a408c3877344ec20649cf"],["img/gui/bag.png","f8ee8b7167911c69c46788caf80b5f7e"],["img/gui/bottom-gui.png","e1f299ec30812c4505b95463cc90bd65"],["img/gui/circle-frame.png","3de327c45ed22ffa71a845ee1bcdad2b"],["img/gui/dark-gold-intro.png","6b5b1555fd07ae8c8415c5188e1b9bb0"],["img/gui/glaukon.png","4fee1ecffa3bd54ac4b0ea9cec4d9ff7"],["img/gui/glaukon.png~","193eae81db1d073dba7c87b05b48f9f4"],["img/gui/interacive-map.png","99260bad7e71bbbcc99507b10e5cc0eb"],["img/gui/intro-button.png","576f46e197702d35005737e22c634aac"],["img/gui/lvl-1-char.png","185eddfc43c7948c9ec9c69a4f2b2117"],["img/gui/lvl-2-char.png","a18e88976095a14ab891f48e5ded23d9"],["img/gui/map-close.png","e0d533f324493fd3e608bbb1e23de738"],["img/gui/map.png","7aea5ca2185ae353c55615acf2d8208a"],["img/gui/papper.png","088d0dcab64aa3da48120f6e80fe4927"],["img/gui/pergamen.png","e40589a731f720bb32964fa969a70bf6"],["img/gui/prisoner-on-scene.png","0036ec444c86ec831021d1214b57f4c5"],["img/gui/route-arrow.png","40240182e88d28985e8bd7c0b8aa1e3d"],["img/gui/saved.png","5f2e2345b44656afc5c55849e9db0af8"],["img/gui/setup.png","2b160c71886b31c9642fdc0614118b42"],["img/gui/simple-textured-bg.png","95ea3f02410bb216d91f58969d8684da"],["img/gui/small-logo.png","b8a8f95d84a67937938536bc88cb05ea"],["img/gui/speak.png","f678735a574f8c91c41cdae7770c92e1"],["img/gui/top-gui.png","79d343791f44a2f89da51a6a63372b1d"],["img/gui/underground.jpg","7161a06750d61eefbe79a60de2bf88f2"],["img/gui/underground.png","1ff3eff7b6a8cdebada02807be1dc946"],["img/icons/pwa-icon-idea.png","268fb898bb913904385da834cca9e337"],["img/mobs/item-01.png","4f7e1a5238d4bdde4a27987b71bdcf5f"],["img/mobs/item-02.png","d0101f3a7219c1ab21bb7481c09323af"],["img/mobs/item-03.png","7363f56eb82344b7e297f94f81fd88f2"],["img/mobs/item-04.png","bb14bb72ff65ade3e82627f850fa5d2f"],["img/mobs/item-05.png","c38b961b9e0dc6ecb302bb1a27e63fe0"],["img/mobs/item-06.png","71be1ac606190f1a71d3f987de317705"],["img/mobs/item-07.png","9b791c2ba446088325c805e089d63f56"],["img/mobs/item-08.png","c04e190d97c7c31d8141d6e625c54e65"],["img/mobs/item-09.png","c9c3f2940f8298dd01ac74a5fbc2da5a"],["img/mobs/item-10.png","b648c38b6e5757cb0646be7549dee619"],["img/mobs/item-11.png","d119499815c9f19a56376d5f190eb6a1"],["img/mobs/item-12.png","891f02989acacecefdefe600373972f8"],["img/mobs/prisoner-01.png","fb7a19316c3fcacf46dda76102b03504"],["img/mobs/prisoner-02.png","708b97971ff144061f701bc8f4c29500"],["img/mobs/prisoner-03.png","46838cf159140f9e7bba47ba45a82628"],["img/mobs/prisoner-04.png","1249cc5276a0b550fd004827d79b2215"],["img/mobs/prisoner-05.png","b70c210253cca7519d1c49ebf7081981"],["img/mobs/prisoner-06.png","fa1ebf12bd72bb8c61abfa19eba85679"],["img/mobs/prisoner-07.png","ef47271fc0ed31ba84df9b002d1136cf"],["img/mobs/prisoner-08.png","07324c108a6e911f12a11d06cfdb4647"],["img/mobs/prisoner-09.png","ae79a30c2bcc63e594f02d86857e2cb9"],["img/mobs/prisoner-10.png","140746b75c6f09d3694bd27f8bc0b2e9"],["img/mobs/prisoner-11.png","f57a6d97285d72c6e11b363f613c57d6"],["img/mobs/prisoner-12.png","9f582d3522e1cb5835a0ca44b060e079"],["img/quest/continuos-path.jpg","8e592ecfcb4c2950e8f9c1e67f53810d"],["img/quest/cube-uv-0.png","00725ee8edefef052b818371011eac76"],["img/quest/cube-uv-1.png","588118bdcf5a08c72b21b3bbaff1c783"],["img/quest/cube-uv-1.png~","b9c7c87dac856fc9b4778f8ca463542e"],["img/quest/cube-uv-2.png","9a37b035cf9b0b1b30af295cd6137a6e"],["img/quest/cube-uv-3.png","86e970d01329d5ec8e8c0c3054a346bf"],["img/quest/cube-uv-4.png","b8972caeee8b54d4ee6dfc5306101be5"],["img/quest/cube-uv-5.png","78daa48a8b36aa1364481a74a5e9dc44"],["img/quest/equipment-quest.jpg","8d4eb748e5e5aa5d1c4ff49879382b74"],["img/quest/found-all-projection.jpg","b35f82b87fe68811afa0b53e30167ff2"],["img/quest/found-cube-uv.jpg","207ab869bf63e71013a70ea0646ae73f"],["img/quest/found-tetraeder-uv.jpg","0c5ba204cdc5d19b835acc20af5e3c8f"],["img/quest/ope-2-trinagle.png","c10bf4fed5804b4b567cfd4d10bdcf93"],["img/quest/ope-4-corner.png","2967066294086ebd712c1b14991a621c"],["img/quest/ope-box.png","b2a8323e84a62ab6af27923b0aaeedec"],["img/quest/ope-brick.png","df29ada7d9bac91feec14d521dc681eb"],["img/quest/ope-circle.png","449aade2590cfa6774185cd9be1b9325"],["img/quest/ope-corner-trinagle.png","d18c3363e4a64b3232090a70ae38f7a4"],["img/quest/ope-deltoid.png","fccc21382b2b99f120948dcd6f6f2f14"],["img/quest/ope-fine-rombusz.png","8ff560f8cc71bbf95e4f9babf5881e78"],["img/quest/ope-fine-trinagle.png","b00c359e48be42a459b1d4784f4b48f0"],["img/quest/ope-paralelogramma.png","0664ced2164e1c631150786141e551e7"],["img/quest/ope-rombusz.png","dd5c629636ad775af845760eeaa28bf6"],["img/quest/open-code.jpg","ef345a44d56e516fcc89e40b2f97422a"],["img/quest/opr-fine-rombusz.png","8ff560f8cc71bbf95e4f9babf5881e78"],["img/quest/pair-project-to-solid.jpg","8e02604641379b461b0a00f6488f4987"],["img/quest/pair-solid-to-projection.jpg","094f72f1e043bcef11fd0077914460d2"],["img/quest/pipeline-quest.jpg","c431decca0dfa8749f491053dc8e5376"],["img/quest/point-projection.jpg","1f8b63c5cef851b73eb403456f39b1f9"],["img/quest/quest-bg.jpg","6b7ad9dff7fdc9f360e0e82138a23e96"],["img/quest/roman-numbers.jpg","c25f9a41fb6b0eea1b8b1b708b984e45"],["img/quest/small-speaker.png","29cfaee1fb4e6dcefdfecc42c24306df"],["img/quest/small-table.png","7432479c8e01e809e985c814aee3b3af"],["img/quest/solid-by-projection.jpg","b8bc080c9d56e908cd96ab13ec9facc7"],["index.html","35710adcd7122ae5981aa115fb53aafb"],["manifest.json","69a7ab5370643eee5f98b38fda295c34"],["penge.lnk","baa528fe39f11c72a0d4082a9f28e12f"]];
var cacheName = 'sw-precache-v3-0.480-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







