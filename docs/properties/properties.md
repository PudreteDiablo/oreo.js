---
layout: default
title: Properties
nav_order: 4
has_children: false
permalink: properties/
---

# Properties
All properties available in the main oreo object.

## `oreo.list`
All cookies saved in the cache and storage.

### Returns
- `cookies` **cookie_str[]**. An array of all cookies in string format.

------

## `oreo.cookies`
All cookies saved in the cache and storage already converted in [OreoCookie](/classes/oreo_cookie.html) class.

### Returns
- `cookies` **Object**. An object with all current storaged cookies.

------

## `oreo.length`
Number of cookies storaged.

### Returns
- `cookies_length` **Number**.

------

## `oreo.file`
(Electron and Node.js) File where cookies are storing.

### Returns
- `cookies_file` **String** - Path of storage file.