# Oreo.js
### Add cookies to multiple platforms with Cordova, Electron and Browsers.

[![npm version](https://badge.fury.io/js/oreo.js.svg)](//npmjs.com/package/oreo.js)
[![Electron](https://img.shields.io/badge/Electron-Yes-blue.svg)](#available-platforms)
[![Cordova](https://img.shields.io/badge/Cordova-Yes-blue.svg)](#available-platforms)
[![Browsers](https://img.shields.io/badge/Browsers-Yes-blue.svg)](#available-platforms)
[![Backend Server](https://img.shields.io/badge/Backend%20Servers-Yes-blue.svg)](#available-platforms)
[![Support](https://img.shields.io/badge/Support-Patreon-orange.svg)](https://patreon.com/PudreteDiablo)

------

## Installation
#### Node.js (Electron/Backend-Servers)
```
npm i oreo.js --save
```

#### Browser CDN
```
https://cdn.jsdelivr.net/npm/cordova-plugin-oreo@0.3.2/www/oreo.js
```

### Cordova
```
cordova plugin add cordova-plugin-oreo
```

#### Self-Host / Download
Go to [dist folder](https://github.com/PudreteDiablo/oreo.js/tree/master/dist), download one of the javascript files and save it in your project folder then just import it via html: ```<script src="./oreo.min.js"></script>``` or node.js: ```require( './oreo.js' )``` 

## Examples
```js
// WRITE A COOKIE [v]
// WILL EXPIRE IN A MONTH BY DEFAULT [v]
oreo( 'my-cookie-key', 'my-cookie-value' ) ;

// WRITE A COOKIE WITH EXPIRATION-DATE AND PATH [v]
// WILL EXPIRE IN A YEAR [v]
expiration = new Date( ) ;
expiration = expiration.setFullYear( expiration.getFullYear( ) + 1 ) ;
// OR 
expiration = 365 ; // EXPIRATION IN DAYS IS ACCEPTABLE TOO.
oreo( 'my-cookie-key', 'my-cookie-value', { expires : expiration, path : '/blog/' } ) ;

// READ COOKIE [v]
var cookie = oreo( 'my-cookie-key' ) ;

// REMOVE COOKIE [v]
oreo.remove( 'my-cookie-key' ) ;

// CLEAR ALL [v]
oreo.clear( ) ;
```

As programmer, I prefer to look at examples to understand how a package works. So I make a few examples with comments in the [examples folder](https://github.com/PudreteDiablo/oreo.js/tree/master/examples).

------

## Documentation
Check the updated [documentation page](https://pudretediablo.github.io/oreo.js) to see all available *Methods*, *Properties* and *Events* of oreo.js

Also the docs page have useful information such as devlog, tips, storage-info and other stuff, so check it out.

## Bugs & Requests
You can go to the [issues](https://github.com/PudreteDiablo/oreo.js/issues) section to report bugs and request new features.

## Support
Support this project and game-development assets through [Patreon](https://patreon.com/PudreteDiablo) or [Itch.io](https://pudretediablo.itch.io/)