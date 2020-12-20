---
layout: default
title: eat( )
nav_order: 4
parent: Methods
---

# eat( key : string )
Removes the specified cookie. Basically is a *echo function* of [remove( )](./remove.html).

## Parameters
- `key` **String** - The key of the cookie to remove.

## Returns
- `completed` **Boolean**.

## Example
```js
oreo.eat( 'cookie_key' ) ;

console.log( cookie.eat( 'my-cookie' ) ) ;
/* Console.Log => true */
```