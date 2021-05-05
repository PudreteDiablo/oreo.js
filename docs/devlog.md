---
layout: default
title: DevLog
nav_order: 8
description: "All  oreo.js dev-notes and updates."
permalink: /devlog
---

# 0.3.2 (Value-Types and Auto-Remove Bugs Fixed)
When you requested an expired cookie, it was not deleted in cordova and electron, but this was fixed in this last version. Also, the value returned was always the cookie-object with all its information, but it was changed so that you get the value directly.

JSON and Array cookies are now also automatically converted on request.

# Binary Version Released ☕
Maybe can be helpful, maybe not, I just realease the option for no-javascript developers to store cookies in desktop platforms like Windows, MacOS and Linux.

# 0.2.47 (Release Bugs Fixed)
I starting developing the binary version of the package and I found a couple bugs. With each update I found a new bug, but finally I fixed all of them:

- Expire in days not working if is set as object property (fixed).
- `get( )` returns a OreoCookie instead a value (fixed).
- Expired cookies not removed automatically in non-browser platforms (fixed).
- Throws an Error at undefined cookies request (fixed).

# 0.2.4 (Version Release 🥳)
The package is really stable (at least on the tested platforms).

### Platforms Tested:
- Windows 10
- Android 6.0.1 (Marshmallow)
- Firefox
- Node.js CLI

I can't test the package in other platforms because I don't have other devices (I'm poor guys).

### Ionic Plans
I tried to make the an *@ionic-native* plugin, but my equipment is too old and is really hard to test in ionic because many errors and also require several compilation times. Errors aren't the problem, just my equipment takes a lot of time to re-compile every change, so, sorry.
