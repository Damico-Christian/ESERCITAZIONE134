import 'zone.js/dist/zone';  // Included with Angular CLI.

import 'core-js/es/reflect';
import 'zone.js/dist/zone';  // Included with Angular CLI.

if (typeof window !== 'undefined') {
  // Polyfill for the 'fetch' API
  import('whatwg-fetch').then(() => {
    console.log('Fetch polyfill loaded');
  });
}