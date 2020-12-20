---
layout: default
title: remove( )
nav_order: 3
parent: Methods
---

# remove( key : string )
Removes the specified cookie.

## Parameters
- `key` **String** - The key of the cookie to remove.

## Returns
- `completed` **Boolean**.

## Example
```js
oreo.remove( 'cookie_key' ) ;

console.log( cookie.remove( 'my-cookie' ) ) ;
/* Console.Log => true */
```