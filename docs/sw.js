if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,t,n)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(t.map(a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}})).then(e=>{const a=n(...e);return s.default||(s.default=a),s})}))}}define("./sw.js",["./workbox-6a047900"],(function(e){"use strict";importScripts(),e.enable(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/covid19-data/",revision:"z0JB01dEQy4NWERkuleTM"},{url:"/covid19-data/_next/static/chunks/8021e63501e733cbb8905eb3a235a98e5ec6fec7.46802f695e6d5ae689b2.js",revision:"a226ac30839e14aabcaeffefe715a2c2"},{url:"/covid19-data/_next/static/chunks/c73d0e269d328ca815bbb06bbb0dbd560904ca38.0dd44ae5d743eccad082.js",revision:"86a26eab7513aa45e84f55fd6a369520"},{url:"/covid19-data/_next/static/chunks/commons.a48772749a09fb1c7ad0.js",revision:"67b7e6ad763c90b82f863b88c1db5e96"},{url:"/covid19-data/_next/static/chunks/framework.8d738cd9f2950118dcb6.js",revision:"8e6204793e3d11a8bedf359bfb6e110d"},{url:"/covid19-data/_next/static/runtime/main-ab052c4d900d53f755db.js",revision:"c610fc7329743103d6a07cd1b5439e4d"},{url:"/covid19-data/_next/static/runtime/polyfills-f51fce9036796b86713b.js",revision:"05c5ba1fb18ff4600c9f833f196d4a24"},{url:"/covid19-data/_next/static/runtime/webpack-91b117697e716c22a78b.js",revision:"40b4095b5b68a142c856f388ccb756f2"},{url:"/covid19-data/_next/static/z0JB01dEQy4NWERkuleTM/_buildManifest.js",revision:"fb96ae7926f5104f50f0cf1b3a23a9b5"},{url:"/covid19-data/_next/static/z0JB01dEQy4NWERkuleTM/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/covid19-data/_next/static/z0JB01dEQy4NWERkuleTM/pages/_app.js",revision:"b37eb84fba06570b769bf4f79ddb7640"},{url:"/covid19-data/_next/static/z0JB01dEQy4NWERkuleTM/pages/_error.js",revision:"1c58b5492a3509980b3658e92f1899d5"},{url:"/covid19-data/_next/static/z0JB01dEQy4NWERkuleTM/pages/index.js",revision:"e31debec11b9f548b1ecac4dadf7aa32"},{url:"/covid19-data/icons/favicon.ico",revision:"940cc6bd3bb401fc3be83df3dfd09488"},{url:"/covid19-data/icons/icon192x192.png",revision:"b2bf260ccff2838a58aaf42ece6461b8"},{url:"/covid19-data/icons/icon512x512.png",revision:"7844d31fa2a65d7009616d77034a4949"},{url:"/covid19-data/manifest.json",revision:"688128be216cc2f753fe641590f2fcd3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https?.*/,new e.NetworkFirst({cacheName:"offlineCache",networkTimeoutSeconds:15,plugins:[new e.ExpirationPlugin({maxEntries:150,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(({event:e})=>"navigate"===e.request.mode,new e.CacheFirst({cacheName:"offlineCache",plugins:[new e.ExpirationPlugin({maxEntries:150,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
