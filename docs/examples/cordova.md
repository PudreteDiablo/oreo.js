---
layout: default
title: Cordova
nav_order: 4
parent: Examples
---

# Cordova Example

## Before You Start
You need to decide which installation type want to use to import the package into your Cordova project.

------

## By script-tag
(Recommended) If you have decided to import oreo.js through `<script src="oreo.js"></script>` you can easily implement the same [example of the browser version](/examples/browser.html). The package will automatically detect if are working under *Cordova* to decide which storage type select.

## By Plugin
**NOTE:** You need to wait cordova `deviceready` event to start using oreo. See [this cordova article](https://cordova.apache.org/docs/es/latest/cordova/events/events.deviceready.html) for more information.

```js
  document.addEventListener( "deviceready", function( ) {
    // OREO AND OTHER PLUGINS ARE READY TO USE!
    window.oreo = cordova.plugins.oreo ;
  }, false ) ;
```

------

### Install
Don't forget to install the plugin in your cordova project or you will get a error at package import.

`cordova plugin add cordova-plugin-oreo`

------
### index.html
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Security-Policy"
      content="default-src 'unsafe-eval' 'unsafe-inline' 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; img-src 'self' data: content:;">
    <meta name="format-detection" content="telephone=no">
    <meta name="msapplication-tap-highlight" content="no">
    <meta name="viewport" content="initial-scale=1, width=device-width, viewport-fit=cover">
    <meta name="color-scheme" content="light dark">
    <title>Hello World</title>
  </head>
  <body>
    <div id="result">
      Oreo.js Testing Example
    </div>
    <br/>
    <button onclick="create( 'cookie1', true )">Create Cookie 1</button>
    <button onclick="create( 'cookie2', new Date( ) )">Create Cookie 2</button>
    <button onclick="remove( 'cookie1' )">Remove Cookie 1</button>
    <button onclick="remove( 'cookie2' )">Remove Cookie 2</button>
    <button onclick="removeAll( )">Remove All</button>
    <script src="cordova.js"></script>
    <script>
      var getOreo = ( ) => cordova.plugins.oreo ;

      function write( str ) {
        document.getElementById( 'result' ).innerHTML = str ;
      }

      function create( key, val ) {
        var oreo = getOreo( ) ;
        var cookie = oreo( key, val ) ;
        console.log( cookie ) ;
        return write( `COOKIE: "${ key }" Saved! <br/> ${ JSON.stringify( oreo.list, null, 2 ) }` ) ;
      } 

      function remove( key ) {
        var oreo = getOreo( ) ;
        var cookie = oreo.eat( key ) ;
        console.log( 'Cookie Deleted: ' + cookie ) ;
        return write( `COOKIE: "${ key }" Deleted! <br/> ${ JSON.stringify( oreo.list, null, 2 ) }` ) ;
      } 

      function removeAll( ) {
        var oreo  = getOreo( ) ;
        var clear = oreo.clear( ) ;
        console.log( 'Cookies Cleared: ' + clear ) ;
        return write( `All cookies deleted! <br/> ${ JSON.stringify( oreo.list, null, 2 ) }` ) ;
      } 
    </script>
  </body>
</html>
```

[Download Full Example](https://github.com/PudreteDiablo/oreo.js/tree/master/examples/cordova){: .btn .btn-purple }