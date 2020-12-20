---
layout: default
title: Node.js
nav_order: 3
parent: Examples
---

# Node.js Example
This package can be used in any app based on node.js even *backend-servers*.

### Install
Don't forget to install the package in your project first, or you will get a error at package import.

`npm install --save oreo.js`

------

### index.js
```js
// IMPORT THE PACKAGE AND CREATE REFERENCE [v]
let oreo = require( 'oreo.js' ) ;

// WRITE A COOKIE [v]
oreo( 'my-cookie', 'my-value' ) ;

// SHOW ME ALL SAVED COOKIES [v]
console.log( oreo.list ) ;  

// DELETE THE CREATED ONE [v]
oreo.remove( 'my-cookie' ) ;

// SHOW ME AGAIN ALL SAVED COOKIES [v]
console.log( oreo.list ) ;  
```

[View on Github](https://github.com/PudreteDiablo/oreo.js/tree/master/examples/nodejs){: .btn .btn-purple }