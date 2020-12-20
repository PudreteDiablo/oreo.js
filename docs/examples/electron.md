---
layout: default
title: Electron
nav_order: 2
parent: Examples
---

# Electron Example

## Before You Start
You need to decide which installation type want to use to import the package into your Electron project.

------

## By script-tag
If you have decided to import oreo.js through `<script src="oreo.js"></script>` you can easily implement the same [example of the browser version](/examples/browser.html). The package will automatically detect if are working under *Electron* to decide which storage type select.

## By npm install & require( )
Once installed, you need to confirm that `nodeIntegration` option is enabled in your **BrowserWindow**. See this [electron article](https://www.electronjs.org/docs/tutorial/quick-start) for more information.

**NOTE:** This example is based in the [quick start](https://www.electronjs.org/docs/tutorial/quick-start) example of electron to start developing desktop apps.

### Install
Don't forget to install the package in your electron project or you will get a error at package import.

`npm install --save oreo.js`

------

### main.js
```js
function createWindow ( ) {
  const win = new BrowserWindow( {
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true // <= This option must be enabled to use "require( )"
    }
  } )
  win.loadFile( 'index.html' ) ;
}
```

------

Now, we will add the package in our *client-side* code to be able to use it.

### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Oreo.js Test</title>
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
  <script src="https://cdn.jsdelivr.net/npm/oreo.js/dist/oreo.min.js"></script>
  <script>
    // RIGHT HERE WE ARE IMPORTING OREO PACKAGE by require( ) ;
    var oreo = require( 'oreo.js' ) ;
    var getOreo = ( ) => oreo ;

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

[Download Full Example](https://github.com/PudreteDiablo/oreo.js/tree/master/examples/electron){: .btn .btn-purple }