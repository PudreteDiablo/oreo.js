---
layout: default
title: Configuration
nav_order: 1
description: "Configure the Oreo.js behavior in your app."
permalink: /configuration.html
---

# Configure Oreo.js Behavior
Package configuration is totally optional, because all configuration properties have a default value to emulate browsers cookies, could be useful for cross-platform apps but maybe you want to edit a few settings to disable limits.

## config( conf_options : object )
Method to configure the oreo.js options.

### Parameters
- `conf_options` **Object**
  - `cookies_limit` **Boolean** - Browsers set a number limit of cookies per web page, around ~128, depending on the browser rules. You can disable this limit but only applies for *Electron* and *Cordova*. Default: true
  - `cookies_size_limit` **Boolean** - Again, browsers applies a limit of ~4096 bytes per cookie value. You can disable this limit but only will work in *Electron* and *Cordova*. Default: true
  - `cookies_file` **String** - (Electron and Node.js) The full path of the file where cookies will be storaged in a fast and freandly encryption. Default: `${EXEC_DIR}/oreo.cookies`.
  - `auto_samesite` **Boolean** - (Browsers) Oreo will automatically add the `samesite=Lax;` option to every new cookie. This allow to prevent a warning saying *"The cookie "my-cookie" will be soon rejected because it has the “sameSite” attribute set to “none” or an invalid value, without the “secure” attribute."*. Of course you can set this option by your self in the *cookies.set( )* options; See [this mozilla article](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) for more information. Default: true

### Example
```js
oreo.config( {
  cookies_limit : false ,
  cookies_size_limit : true
} ) ;
```