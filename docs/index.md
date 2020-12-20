---
layout: default
title: Home
nav_order: 0
description: "Oreo.js is a cross-platform package to store cookies in apps under Electron, Cordova or Browsers."
permalink: /
---

# Let's add Cookies to Electron and Cordova
With oreo.js you can bring cookies to all your javascript-based apps. Make browser cookies available in other platforms like *Electron* and *Cordova*. Also, at the same time, use the package to manage your browser-app cookies.

[Github Repository](http://example.com/){: .btn .btn-blue }
[Patreon Support](http://patreon.com/PudreteDiablo){: .btn .btn-purple }
[Examples](http://patreon.com/PudreteDiablo){: .btn }

------

## Table of Content
- [Installation](#installation)
- [Download Package](#download)
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
<script src="https://cdn.jsdelivr.net/npm/oreo.js/dist/oreo.min.js"/></script>
```

### cordova-plugin (Cordova)
`cordova plugin add cordova-plugin-oreo`

I recommend the "script-tag" method if your are trying to make a cross-platform app. With that option you don't need to edit your code to get a correct package functionallity (talking about oreo.js package only).

## Download
You can download the last version instead use a CDN or package-installer to import it in your project. Just select one option and then press **Ctrl+S** hotkey to save the file in your computer:

[Download oreo.min.js](https://cdn.jsdelivr.net/npm/oreo.js/dist/oreo.min.js){: .btn .btn-purple }
[Download oreo.js](https://cdn.jsdelivr.net/npm/oreo.js/dist/oreo.js){: .btn }

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