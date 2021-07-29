if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"4f8598edb90bbd4738e069d009fd6c6f","url":"404.html"},{"revision":"0c209acdd19f6732370568f7a6ae0bdf","url":"ece08537062c28a2a7c1.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"4f8598edb90bbd4738e069d009fd6c6f","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"1139c7f91659b8d1e1f13fd2fdfdf753","url":"static/css/21.f5f9d973.chunk.css"},{"revision":"874fd88c227ce8213cc30158ea46c11b","url":"static/css/22.4247d24c.chunk.css"},{"revision":"17c389cf17272b648b44e76c5263a4fd","url":"static/js/0.ad9a7acd.chunk.js"},{"revision":"b80ee8cbdd0dd98891530bec4c96567c","url":"static/js/1.2d3d69db.chunk.js"},{"revision":"181b4223e341653629617cccb865d69d","url":"static/js/12.0e8c081b.chunk.js"},{"revision":"c04d7567b3f1f57d64ae06bf21fa09fa","url":"static/js/13.c1e08f1a.chunk.js"},{"revision":"90d5c5df228963a2ef700929cb82ef36","url":"static/js/14.40741439.chunk.js"},{"revision":"df1bfabfce4189933a7a5f4964b9f4d0","url":"static/js/15.79a8d518.chunk.js"},{"revision":"2eda117f2428b672888bc32c334914b6","url":"static/js/16.8694e312.chunk.js"},{"revision":"c9e9fa0e303aee7415480edfe57a6ab3","url":"static/js/17.4cf9aeee.chunk.js"},{"revision":"facb78b50cfb358d678bda1c0d78f104","url":"static/js/18.49f76163.chunk.js"},{"revision":"cc344c7fc26e630e6b20e68efc735e47","url":"static/js/19.69fbdaed.chunk.js"},{"revision":"1719be0aed4a647ef0a0b11dca617c68","url":"static/js/2.2d42af5e.chunk.js"},{"revision":"f536d845d8641a4a08fb0993ba3f7ad4","url":"static/js/20.cf35debe.chunk.js"},{"revision":"f93c574d45bdc0f0378fae267e1de31f","url":"static/js/21.7118ff08.chunk.js"},{"revision":"5266df231e682b832286757e3527c04c","url":"static/js/22.e1df06e2.chunk.js"},{"revision":"7ebad22eda9c4b7c1380d60653ea7750","url":"static/js/23.e84299f2.chunk.js"},{"revision":"8043cc6ecd6ccf2a4bb2687640830010","url":"static/js/24.9d524174.chunk.js"},{"revision":"ef1f006a40695899b4a4a10e680d7b39","url":"static/js/25.82ae13c4.chunk.js"},{"revision":"4ae46e7a386fd583ecaebd123ad08055","url":"static/js/26.9c1754e4.chunk.js"},{"revision":"fb1dbc752ad000e016ebfc0cf4ac7b1e","url":"static/js/27.f619f22a.chunk.js"},{"revision":"95abc6cbd63e90fc95cdcd68bc2d2d5a","url":"static/js/28.72b5a4e2.chunk.js"},{"revision":"b024aefd28685420c7e7f40d7e61c475","url":"static/js/29.f4528b0d.chunk.js"},{"revision":"5c483bab7eb20ed405b6c276c112add8","url":"static/js/3.1b6e2393.chunk.js"},{"revision":"29a28751182924115a25ca6121be3212","url":"static/js/30.94079f5e.chunk.js"},{"revision":"15508e942a93f347e051d2cb8bdffc66","url":"static/js/31.2e8007c3.chunk.js"},{"revision":"17950661b437a3526fd0007a07d5cfdf","url":"static/js/32.09a520fa.chunk.js"},{"revision":"c1d83d236432e2fcdcffa9ff96b4e729","url":"static/js/33.dacfc8ac.chunk.js"},{"revision":"8fa391814976326942346735bfb217e6","url":"static/js/34.ab22bea2.chunk.js"},{"revision":"9233dfe87545069076de1bb043819243","url":"static/js/35.b065e533.chunk.js"},{"revision":"f7987281d2aa225678226d964a4635ac","url":"static/js/36.181a3f31.chunk.js"},{"revision":"94e6a6d1740b41d751947c5a6ec08ddc","url":"static/js/37.7e0db801.chunk.js"},{"revision":"417c1618b94008a1a2a03c207b7b6a3b","url":"static/js/38.7491f798.chunk.js"},{"revision":"3b263afe2bce708f333341c094931018","url":"static/js/39.03dfa6d5.chunk.js"},{"revision":"e0450f8439a75e23a0b36876cd4ed985","url":"static/js/4.fff38bbd.chunk.js"},{"revision":"3b235b1017fef1203b8a057d9b07b8c7","url":"static/js/40.98bed6c4.chunk.js"},{"revision":"d124a05ceebbcc4b7b3157a4dabb414c","url":"static/js/41.b953d402.chunk.js"},{"revision":"0bfdcefbb242a6bb2f5758bbb4eca9a7","url":"static/js/42.82af42bc.chunk.js"},{"revision":"2a9e78fe87743aa0628b4b009430870b","url":"static/js/43.1be26e32.chunk.js"},{"revision":"887f29a47d71d4fa6a30c3c77f6f92af","url":"static/js/44.cc8bb10a.chunk.js"},{"revision":"e253f67c9b9d94b839f4fb4732fb4d94","url":"static/js/45.ea173efb.chunk.js"},{"revision":"834f9e4e920894ca288fd13a36902a64","url":"static/js/46.cbd2eb23.chunk.js"},{"revision":"63bc879f94d8e5de52f9aebe8ea89ce6","url":"static/js/47.f59ff91e.chunk.js"},{"revision":"3fe53582a410ab46a4503e9c4d26ae68","url":"static/js/5.13c10a2c.chunk.js"},{"revision":"1f38bc81a289ef2ff33fd58fe6301611","url":"static/js/6.495e106c.chunk.js"},{"revision":"666c1ba1cab90d93658d1527f90e1d89","url":"static/js/7.6f9a959e.chunk.js"},{"revision":"779af2860224a0be57a1115e9ac5865a","url":"static/js/8.f9a5893e.chunk.js"},{"revision":"60986cfe0b08e4dc9f82c10c78b6850a","url":"static/js/9.758369c0.chunk.js"},{"revision":"0aabdeff187bf22ffc9ba118d5c15be0","url":"static/js/main.48c3b0f8.chunk.js"},{"revision":"ea20ea719ca371c21df8c72ee4229b23","url":"static/js/runtime-main.d1760b3a.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
