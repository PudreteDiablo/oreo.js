---
layout: default
title: Home
nav_order: 0
description: "Oreo.js is a cross-platform package to store cookies in apps under Electron, Cordova or Browsers."
permalink: /
---

# Let's add Cookies to Electron and Cordova
With oreo.js you can bring cookies to all your javascript-based apps. Make browser cookies available in other platforms like *Electron* and *Cordova*. Also, at the same time, use the package to manage your browser-app cookies.

[Github Repository](http://github.com/PudreteDiablo/oreo.js){: .btn .btn-blue }
[Patreon Support](http://patreon.com/PudreteDiablo){: .btn .btn-purple }
[Examples](http://patreon.com/PudreteDiablo){: .btn }

------

## Table of Content
- [Installation](#installation)
- [Download Package](#download)
- [Package Features](#features)
- [About the Storage](#storage)
- [Configuration](#configuration)
- [Next Steps](#next-steps)

------

## Installation
This package can be installed in different ways depending of the current developing tools.

### npm (Node.js & Electron)
`npm install --save oreo.js`

### script-tag (Browsers, Cordova & Electron)
```html
<script src="oreo.min.js"/></script>
<script src="https://cdn.jsdelivr.net/npm/cordova-plugin-oreo@0.3.2/www/oreo.js"/></script>
```

### cordova-plugin (Cordova)
`cordova plugin add cordova-plugin-oreo`

I recommend the "script-tag" method if your are trying to make a cross-platform app. With that option you don't need to edit your code to get a correct package functionallity (talking about oreo.js package only).

## Download
You can download the last version instead use a CDN or package-installer to import it in your project. Just select one option and then press **Ctrl+S** hotkey to save the file in your computer:

[Download oreo.min.js](https://cdn.jsdelivr.net/npm/oreo.js/dist/oreo.min.js){: .btn .btn-purple }
[Download oreo.js](https://cdn.jsdelivr.net/npm/oreo.js/dist/oreo.js){: .btn }

------

## Features
Ok, so the package allows me to save cookies in multiple platforms and also can be a interesting option to save cookies in my web-pages, but, what other features does it have?

| Feature               | Browsers   | Node.js | Electron | Cordova   | CLI |
| :-------------------- | :--------: | :-----: | :------: | :-------: | :-: |
| Formatted Values      | •          | •       | •        | •         |     |
| Expiration Time       | •          | •       | •        | •         | •   |
| Set Path Option       | •          | •       | •        | •         |     |
| Save JSON Objects     | •          | •       | •        | •         | •   |
| Save Javascript Dates | •          | •       | •        | •         | •   |
| Unlimited Cookies     |            | •       | •        | •         | •   |
| Cookies Size Limit    | 4096 bytes | ~       | ~        | All x 5MB | ~   |
| Cookies Drive-File    |            | •       | •        |           | •   |

### Why Browsers and Cordova have limits?
Oreo.js uses default *cookies-system* for WebBrowsers, and every browser sets a limit for security. About *Cordova*, the package uses **LocalStorage** because Cordova doesn't have *cookie-system* by itself, but **LocalStorage** also have limits like provide only 5MB for all values saved in that storage. 

------

## Storage
Depending of the platform (Electron, Cordova or WebBrowser), oreo.js will storage all cookies data in a specific file or *storage-system*. This will be automatically decided by the package every time you create or edit a cookie. In the next table you can see the *storage-system* selected per platform:

| WebBrowsers (Desktop & Phones)  | Electron & Node.js | Cordova      |
| :-----------------------------: | :----------------: | :----------: |
| Default Cookies-Storage         | OS Drive           | LocalStorage |

## Configuration
The configuration is totally optional, but it will helps you to control the package behavior. So, if you are interested, go to [configuration section](/configuration.html) to learn how to configure oreo.js

------

## Next Steps
You can go to [examples](/examples) section to understand the basics of the package depending on the platform. Then you can explore all available [Methods](/methods), [Properties](/properties) and [Events](/events) for a advance usage.