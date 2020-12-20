---
layout: default
title: Browser
nav_order: 1
parent: Examples
---

# Browser Example
Once you import the package, two objects will be registered in the window as *global variables*: `oreo` and `cookies`. Both variables are the same object, I just decided to set *cookies* name if someone prefers that reference-name.

**NOTE:** This example can be applied for Electron and Cordova apps too.

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
    var getOreo = ( ) => window.oreo || window.cookies ;

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

[Open on Github](https://github.com/PudreteDiablo/oreo.js/tree/master/examples/browser){: .btn .btn-purple }