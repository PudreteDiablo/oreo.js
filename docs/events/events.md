---
layout: default
title: Events
nav_order: 5
has_children: false
permalink: events/
---

# Events
Events available in the package and catchable through [on( )](/methods/on.html) method. 

## `set`
Fired when a cookie is created or edited through [set( )](/methods/set.html) method.

### Callback Parameters
- `eventData` **Object**
  - `cookie` **[OreoCookie](/classes/oreo_cookie.html)** - All information of the new/edited cookie.
  - `cookie_key` **String** - The cookie key.

------
  
## `remove`
Fired when a cookie gets removed.

### Callback Parameters
- `eventData` **Object**
  - `cookie_key` **String** - The removed cookie key.
  
------
  
## `clear`
Fired when all cookies get removed by [clear( )](/methods/clear.html) method.