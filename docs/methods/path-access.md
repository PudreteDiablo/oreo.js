---
layout: default
title: Path Access Flow
nav_order: 7
permalink: /path-access
---

# A way to organize cookies in the client-side.
If you have working with **paths** in cookies before, probaly you don't need to read this article, because this section is only to learn how *path* option works in cookies. Oreo.js tries to emulate as much as possible the web-cookies, and *path access* is one of that features.

## How it works?
When you create a new cookie with a path defined, you only will able to read that cookie, as client, if you are inside of the defined path (like your OS drive and the file explorer). Let's see a example to explain this:

```js
// Ok, so we will set a basic cookie with a path property.
cookies( 'lemon_cookies', 'i_love_it', { path : '/blog' } ) ; 

// Now, we will navigate to other page and request the previously saved cookie. 
window.location.href = 'https://example.com/blog/post/2020-06-291.html' ; 
var cookie = cookies( 'lemon_cookies' ) ;
// The reponse will be the previously saved cookie because we are inside the
// path of the cookie ~> cookie_path = '/blog', we_are = '/blog/post/2020-06-291.html' ;

// Now, let's navigate to other page
window.location.href = 'https://example.com/help/search.html' ; 
var cookie = cookies( 'lemon_cookies' ) ;
// The reponse will be undefined because we are not inside of the cookie_path ;
// cookie_path = '/blog', we_are = '/help/search.html' ;
```

Perfect, so now we understand that we need to "be" in the right path to get a cookie with path property defined. But, what happens if we set a new cookie with the same name but with a 'deeper' path? Let's see the example:

```js
// Again, we defined a new cookie with a path property.
cookies( 'lemon_cookies', 'i_love_it', { path : '/blog' } ) ; 

// Also we defined another cookie with the same name but with another path.
cookies( 'lemon_cookies', 'i_love_it', { path : '/blog/articles' } ) ; 

// Now, we will navigate to other page and request a cookie. 
window.location.href = 'https://example.com/blog/post/2020-06-291.html' ; 
var cookie = cookies( 'lemon_cookies' ) ;
// The reponse will be the SECOND defined cookie, because is closer to the current path.

// Now, let's navigate to other page
window.location.href = 'https://example.com/blog' ; 
var cookie = cookies( 'lemon_cookies' ) ;
// The reponse will be the FIRST defined cookie, because is closer AND
// also 'cause we aren't inside of articles path.

// A final navigation
window.location.href = 'https://example.com/' ; 
var cookie = cookies( 'lemon_cookies' ) ;
// The reponse will be undefined because we aren't inside of a path that
// matchs with the previously defined cookies.
```

# Conclusion
sincerely, as web developer, I never use *path* property because could be confusing and also I set many properties that I need in all pages (paths), so I just set the path property as undefined to be able to access to the same cookies in all website. **Also, oreo.js set root path as default.**

I just set this option for developers that already uses this feature of the web-cookies.