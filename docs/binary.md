---
layout: default
title: Binary Package (CLI)
nav_order: 1
description: "A binary option of oreo.js to store cookies in desktop platforms."
permalink: /bin
---

# Binary Package
A executable option for non-javascript developers. This binary package will allow you to store cookies in desktop platforms.

[Download from Github](https://github.com/PudreteDiablo/oreo.js/releases){: .btn .btn-purple }

------

## Usage
In the command line, navigate to the directory where you have saved the binary-package and execute next command to get the current oreo version installed in the binary-package.

```bash
oreo-bin-file version
# This will return a version value like "0.2.46".

# Call a oreo method with the next structure [v]
oreo-bin-file method_name "parameter1" --argumentName=argumentValue
```

### Creating a Cookie
```bash
oreo set "cookie-key" "cookie-value" --file="path/to/cookies_file" --expires=24
```

#### Arguments
  - `?file` **Path** - (Optional) The full path (file name included) of the file to store cookies. Default: `${ WORKING_DIRECTORY }/oreo.cookies`.
  - `?expires` **Number** - Expiration in days. Default: 30



### Requesting a Cookie
```bash
oreo get "cookie-key" --file="path/to/cookies_file"
```

#### Arguments
  - `?file` **Path** - (Optional) The full path (file name included) of the file to store cookies. Default: `${ WORKING_DIRECTORY }/oreo.cookies`.



### Removing a Cookie
```bash
oreo remove "cookie-key" --file="path/to/cookies_file"
```

#### Arguments
  - `?file` **Path** - (Optional) The full path (file name included) of the file to store cookies. Default: `${ WORKING_DIRECTORY }/oreo.cookies`.



### Remove All Cookies
```bash
oreo clear --file="path/to/cookies_file"
```

#### Arguments
  - `?file` **Path** - (Optional) The full path (file name included) of the file to store cookies. Default: `${ WORKING_DIRECTORY }/oreo.cookies`.
