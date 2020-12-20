---
layout: default
title: set( )
nav_order: 2
parent: Methods
---

# set( key : string, value : any, ?options : object )

## Parameters
- `key` **String** - The key of the cookie to storage the value.
- `value` **Any** - The value of the cookie. Only [JSON-Valid values](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/JSON) or [Javascript Dates](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date) are valid to save in the cookies storage.
- `options` [**cookie_options**](#cookie_options) - (Optional) Set cookie options.

## Returns
- `cookie` [**OreoCookie**](/classes/oreo_cookie.html) - A object with all cookie information.

## Example
```js
oreo.set( 'cookie_key', 'cookie_value' ) ;

/* Fast-Line Version [v] */
var cookie = oreo( 'my-cookie', true ) ;

/* Date example [v] */
var cookie = oreo( 'date-cookie', new Date( ) ) ;

/* Object example [v] */
var cookie = oreo( 'json-cookie', {
  prop1 : 'value1' ,
  prop2 : 'value2'
} ) ;
```

## Limits
By default, the package is configured to emulate browsers cookies limit (useful if you are trying to make a cross-platform app). But you can disable this limits by [configuring oreo.js](/configuration).

| Max cookies | Max cookie size |
| :---------: | :-------------: |
| 128         |4096 bytes       |

# cookie_options
An object with all optinal options to control the cookie behavior. Basically you can set any [HTTP cookie options](https://developer.mozilla.org/es/docs/Web/HTTP/Cookies) because the cookie will be stored as string like a [typical cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie), but only a few settings will be useful for non-browser implementations (Electron, Cordova and Backend-Servers).

The next defined options are available for all platforms. To check all other cookie options for browsers, just check [this mozilla article](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie).

- `cookie_options` **Object**
  - `path` **String** - Set the path access to the cookie. See [path access](/stuff) article to understand how cookie access works depending on the current *web-app* page.

## Example
```js
cookie.set( 'my-cookie', 'value', {
  path : '/games/awesome-game/' , // <= This cookie will only available if the user is under this path even all files iniside the defined path.
  samesite : 'Lax' // <= Only for browsers.
} ) ;
```