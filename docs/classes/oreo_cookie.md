---
layout: default
title: OreoCookie
parent: Classes
---

# class OreoCookie
A object with all information of a saved cookie.

## Constructor ( cookie_str : string )

### Parameters
- `cookie_str` **String** - A valid [HTTP cookie-string](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie). Like when you save a cookie in browsers with `document.cookie = "my-new-cookie"` ;

### Example
```js
var cookie = new oreo.cookieClass( "my-cookie=my-value; samesite=Lax; other-property=other-value" ) ;
```

## Properties
- `size` **Number** - Cookie size in bytes.
- `expired` **Boolean** - To check if cookie is already expired (dev).
- `key` **String** - Key of the cookie.
- `value` **Any** - Formatted value of the cookie.