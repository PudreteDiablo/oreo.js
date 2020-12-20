---
layout: default
title: on( )
nav_order: 6
parent: Methods
---

# on( eventName : string, callback : function )

## Parameters
- `eventName` **String** - A valid event name to invoke the defined callback once the event gets fired. Check [events section](/events) to see all available events.
- `callback` **Function** - The function to call every time the event gets fired.

## Example
```js
// Fire the callback every time a cookie is saved or created.
oreo.on( 'set', ( ev ) => {
  var cookie = ev.cookie ; // <= OreoCookie
  var index  = ev.cookie_key ; // <= cookie_string
  console.log( `The cookie "${ cookie.key }" has been saved!` ) ;
} ) ;
```