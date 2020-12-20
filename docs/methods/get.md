---
layout: default
title: get( )
nav_order: 1
parent: Methods
---

# get( key : string )

## Parameters
- `key` **String** - The key of the cookie to search value.

## Returns
- `value` **Any** - The value stored of the selected cookie. If the cookie doesn\'t exists, the method will return `undefined`. Also, the stored value will be converted automatically by the package, returning a `string`, `number`, `float`, `boolean` even a `new Date( )` or `JSON Object`.

## Example
```js
var cookie = oreo.get( 'cookie_key' ) ;

/* Fast-Line Version [v] */
var cookie = oreo( 'cookie_key' ) ;

/* Date example [v] */
/* This cookie have storaged a DateISOString, so will return a new Date( ) automatically. */
/* DateISOString: 2020-12-20T15:16:18.135Z */
var cookie = oreo( 'date-cookie' ) ;
console.log( cookie.getFullYear( ) ) ;
/* Console.Log => 2020 */

```