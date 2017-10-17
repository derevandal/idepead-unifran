importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/app.fac7ce936f71dfb14b85.js",
    "revision": "01a914646a8a8f6b3834713b98492d22"
  },
  {
    "url": "/_nuxt/common.6553abce286619f7222d.js",
    "revision": "2058192816753f5525d9f0549e9a4052"
  },
  {
    "url": "/_nuxt/layouts/default.0e1152fe26dfadfa47c7.js",
    "revision": "cb3fcc5b1455063535ca6eac5cf95f77"
  },
  {
    "url": "/_nuxt/manifest.25cb068ab8796c1f4c4c.js",
    "revision": "0462c45f0f236c9f4c7738e7d0b944a1"
  },
  {
    "url": "/_nuxt/pages/cursos\\index.45b7a178caff51f0b1ec.js",
    "revision": "ea49b393e8676851de86e5199d1c76e5"
  },
  {
    "url": "/_nuxt/pages/euquero.190f8f8a47646cf61e77.js",
    "revision": "db0b20e896d806db6c83419d6d0641fc"
  },
  {
    "url": "/_nuxt/pages/euquero\\_slug.55f449a9a3c37fa56225.js",
    "revision": "39a7d3a1676d00238f9871b2cc5a2202"
  },
  {
    "url": "/_nuxt/pages/euquero\\index.83ea334f8b8f330bb069.js",
    "revision": "6231c9a0c0c9622c85c0512cc8b0d9bf"
  },
  {
    "url": "/_nuxt/pages/index.a7764c2a0c70efa86e27.js",
    "revision": "d5d72635604c42e49b94ce836b8d2b8f"
  },
  {
    "url": "/_nuxt/pages/metodologia\\index.7535d14eb2a0ec7c7b71.js",
    "revision": "b33ca723b5e7a9c45aabbe66ab83bb57"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "idepead-unifran_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
