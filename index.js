/* 
  Copyright 2021 Diablo Luna [@PudreteDiablo]
  Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/
var root       = typeof window !== "undefined" ? window : this ;
var isElectron = ( ) => typeof window !== "undefined" && window.process && window.process.platform ? true : false ;
var isNodejs   = ( ) => typeof module !== 'undefined' && module.exports ? true : false ;
var isCordova  = ( ) => typeof window !== "undefined" && window.hasOwnProperty( 'cordova' ) ? true : false ;
var fs         = isNodejs( ) || isElectron( )  ? require( 'fs' ) : { } ;
var path       = isNodejs( ) || isElectron( )  ? require( 'path' ) : { } ;
var atob       = isNodejs( ) && !isElectron( ) ? require( 'atob' ) : window.atob ;
var btoa       = isNodejs( ) && !isElectron( ) ? require( 'btoa' ) : window.btoa ;
var cryptr     = {
  encrypt : ( str ) => ENCRYPT( str ) ,
  decrypt : ( str ) => DECRYPT( str )
} ;

/* DEFINE CLASS [v] */
/**
 * @class
 * A cookie storaged by oreo.js
 */
class OreoCookie {
  /**
   * Create new OreoCookie
   * @param {!string} cookie_str - The entire string of the cookie. 
   */
  constructor( str ) {
    if( typeof str !== "string" ) 
      { throw new Error( 'Please provide a valid javascript-cookie string.' ) ; }
    var arr = str.indexOf( ';' ) === -1 ? [ str ] : str.split( ';' ) ;
    if( arr [ 0 ].indexOf( '=' ) === -1 ) 
      { throw new Error( 'Invalid cookie-string. Valid example => "username=Diablo Luna; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/" or just "username=Diablo Luna"' ) }
    /* Key & Value [v] */
    var k_v    = arr[ 0 ].split( '=' ) ;
    this.key   = k_v[ 0 ] ;
    this.value = k_v[ 1 ] ;
    /* Properties [v] */
    var cookie = this ;
    for( var i = 1 ; i < arr.length ; i++ ) {
      let s = arr[ i ] ;
      if( s . indexOf( '=' ) === -1 ) { continue ; }
      let k = s.split( '=' )[ 0 ] ;
      let v = s.split( '=' )[ 1 ] ;
      cookie[ k.replace( /\s+/g, '' ) ] = v ;
    } /* -------------- [^] */
    /* Processing Value [v] */
    var v = this.value ;
    if( typeof v !== "undefined" ) {
      if( v.match( /^\d+$/ ) ) {
        // if Int ;
        v = parseInt( v ) ;
      } else if( v.match( /^(\d|\.)+$/ ) ) {
        // if float ;
        v = parseFloat( v ) ;
      } else if( v === "true" ) {
        // if true boleean ;
        v = true ;
      } else if( v === "false" ) {
        // if false boleean ;
        v = false ;
      } else if( v === "undefined" ) {
        // if undefined boleean ;
        v = undefined ;
      } else if( v === "null" ) {
        // if null boleean ;
        v = null ;
      } else if( Date.parse( v ) ) {
        v = new Date( Date.parse( v ) ) ;
      } this.value = v ;
    } /* FINALLY RETURN [v] */
    this.cookie_str = str ;
    return this ;
  }

  /**
   * Check if the cookie has expired by current date
   * 
   * @return {boolean} - Has expired?
   */
  get expired( ) {
    var now = new Date( ) ;
    var dte = this.expiration_date ? new Date( this.expiration_date ) : null ;
    if( !dte ) 
      { return false ; }
    if( now > dte ) 
      { return true }
    // by default :
    return false ;
  }

  /**
   * Get current cookie size.
   * 
   * @return {number} - Cookie value size in bytes.
   */
  get size( ) {
    var m = encodeURIComponent( this.cookie_str ).match( /%[89ABab]/g ) ;
    return this.cookie_str.length + ( m ? m.length : 0 ) ;
  }
}


/* DEFINE OREO [v] */
var oreo  ;
var cache = { } ;
var ch_iz = false ;
var fileK = "WATERMELON-CIGARETTES" ;
var conf  = {
  cookies_limit : true ,
  cookies_size_limit : true ,
  cookies_file  : './oreo.cookies' ,
  auto_samesite : true
} ;

/**
 * @param {!string} key - The name of the cookie to index in the storage.
 * @param {?string} value - (Optional) value to save in the defined key-index.
 * @param {?Object} properties - (Optional) set cookie properties to write in the storage.
 * 
 * @return {(Object|Null)} - Cookie-Value.
 * 
 * @example
 * ```js
 * // Read a Cookie 
 * var cookie = oreo( 'cookie-name' ) ;
 * 
 * // Write a Cookie
 * oreo( 'cookie-name', 'cookie-value' ) ;
 * ```
 */
oreo = ( key, value, props ) => {
  if( typeof key === "undefined" ) 
    { throw new Error( 'Please define at least one parameter to use oreo method.' ) ; }
  if( typeof value === "undefined" ) {
    return oreo.get( key ) ;
  } else { 
    oreo.set( key, value, props || { } ) ; 
  }
} ;

Object.defineProperty( oreo, 'list', {
  /**
   * @return {OreoCookie[]} - All saved cookies.
   */
  get : ( ) => {
    if( ch_iz === false ) { READ( ) ; }
    var l = [ ] ;
    for( var i in cache ) { l.push( cache[ i ].cookie_str ) ; }
    return l ;
  }
} ) ;

Object.defineProperty( oreo, 'cookies', {
  /**
   * @return {Object} - All saved cookies with its information.
   */
  get : ( ) => {
    if( ch_iz === false ) { READ( ) ; }
    var obj = { } ;
    for( var x in cache ) { if( cache[ x ] !== null ) { obj[ x ] = cache[ x ] ; } }
    return obj ;
  }
} ) ;

Object.defineProperty( oreo, 'length', {
  /**
   * @return {number} - Current number of saved cookies.
   */
  get : ( ) => {
    if( ch_iz === false ) { READ( ) ; }
    var i = 0 ;
    for( var x in cache ) { if( cache[ x ] !== null ) { i += 1 ; } }
    return i ;
  }
} ) ;

/**
 * Define config properties of oreo.js work flow.
 * 
 * @param {Object} config - The object with all config properties to change.
 * @property {boolean} config.cookies_limit - By security, Browsers set a limit of cookies, but this limit can't be disabled ONLY for electron and cordova. Default: true
 * @property {boolean} config.cookies_size_limit - By security, Browsers set a 4096 bytes limit per cookie value. This limit can't be disbled ONLY for electron and cordova. Default: true
 * @property {string} config.cookies_file - (Electron and Node.js Only) Change the file where encrypted cookies will be storaged. Default: "./oreo.cookies"
 * @property {string} config.auto_samesite - (Browsers) Automatically adds "SameSite=Lax" property to cookies to avoid a warning. Default : true
 *
 * @example
 * ```js
 * // Removing cookies_size_limit [v]
 * oreo.config( {
 *  cookies_size_limit : false
 * } ) ;
 * ```
 */
oreo.config = ( obj ) => {
  if( typeof obj !== "object" )
    { throw new Error( 'Please define a object as first-parameter with all properties to change in configuration.' ) ; }
  for( var i in conf ) {
    if( obj[ i ] ) { conf[ i ] = obj[ i ] ; }
  } return true ;
} ;

/**
 * @param {!String} key - The name of the previously saved cookie.
 * 
 * @return {(Object|Null)} - Cookie Value.
 * 
 * @example
 * ```js
 * // fast-type [v]
 * var cookie = oreo( 'cookie-key' ) ;
 * 
 * // direct-call method [v]
 * var cookie = oreo.get( 'cookie-key' ) ;
 * ```
 */
oreo.get = ( key ) => {
  if( typeof key === "undefined" ) 
    { throw new Error( 'Please define the cookie-name as key parameter.' ) ; }
  if( typeof cache[ key ] !== "undefined" ) 
    { var v = ( cache[ key ] || { } ).value ; return v === undefined ? null : v ; }
  READ( ) ; // CLEAN-CACHE [<]
  if( cache[ key ] === null || cache[ key ] === undefined ) { 
    cache[ key ] = null ; 
    return null ;
  } else {
    var $c = cache[ key ] ;
    if( $c . expired === true ) {
      oreo.eat( $c.key ) ;
      return null ;
    } else 
      { return $c.value ; }
  } 
} ;


/**
 * @param {!string} key - The name of the cookie to index in the storage.
 * @param {!string} value - value to save in the defined key-index.
 * @param {?Object} props - (Optional) set cookie properties to write in the storage.
 * 
 * @example
 * ```js
 * // fast-type [v]
 * oreo( 'cookie-key', 'cookie-value', { properties } ) ;
 * 
 * // direct-call method [v]
 * oreo.set( 'cookie-key', 'cookie-value', { properties } ) ;
 * ```
 */
oreo.remove = ( key ) => {
  if( typeof key !== "string" ) 
    { throw new Error( 'Please define the cookie-name as key parameter to remove the cookie.' ) ; }
  if( ch_iz === false ) { READ( ) ; }
  if( !cache[ key ] ) { return true ; }
  cache[ key ] = null ;
  let $h = cache ;
  // CLEAN NEW CACHE [v]
  for( var i in $h ) { if( !$h[ i ] ) { delete $h[ i ] ; } }
  // CREATE INDEX -- [v]
  var ix = ( function ( ) {
    var arr = [ ] ;
    Object.keys( $h ).forEach( o => arr.push( o ) ) ;
    return arr.length > 0 ? arr.join( ',' ) : '' ;
  } ( ) ) ;  
  if( isElectron( ) || isNodejs( ) ) {
    var obj = { } ;
    for( var i in $h ) { obj[ i ] = $h[ i ].cookie_str ; }
    var raw = JSON.stringify( obj ) ;
    var enc = ENCRYPT( raw ) ;
    var dir = isElectron( ) ? require( 'electron' ).remote.app.getPath( 'appData' ) : './' ;
    fs.writeFileSync( !conf.cookies_file || conf.cookies_file === "./oreo.cookies" ? path.join( dir, conf.cookies_file ) : conf.cookies_file, enc ) ;
  } else if( isCordova( ) ) {
    window.localStorage.removeItem( `o-cookie-${ $c.key }` ) ;
    window.localStorage.setItem( `o-cookies-index`, ix ) ;
  } else {
    document.cookie = `${ $c.key }=; expires=Thu, 01 Jan 1970 00:00:00 UTC;` ;
    window.localStorage.setItem( `o-cookies-index`, ix ) ;
  } /* UPDATING CACHE [v] */
  return true ;
} ;


/**
 * Remove the defined cookie :: Is a 'echo function' of oreo.remove( cookie_key )
 */
oreo.eat = oreo.remove ;


/**
 * @param {!string} key - The name of the cookie to index in the storage.
 * @param {!string} value - value to save in the defined key-index.
 * @param {?Object} props - (Optional) set cookie properties to write in the storage.
 * 
 * @example
 * ```js
 * // fast-type [v]
 * oreo( 'cookie-key', 'cookie-value', { properties } ) ;
 * 
 * // direct-call method [v]
 * oreo.set( 'cookie-key', 'cookie-value', { properties } ) ;
 * ```
 */
oreo.set = ( key, value, props ) => {
  if( typeof key !== "string" ) 
    { throw new Error( 'Please define the cookie-name as key parameter.' ) ; }
  if( typeof value === "undefined" ) 
    { throw new Error( 'Please define a value to storage in the cookie.' ) ; }
  if( typeof props === "undefined" ) { props = { } ; }
  if( !key.match( /^[a-zA-Z0-9\_]*$/g ) ) 
    { throw new Error( 'Invalid cookie-name. Please use simple names like: "cookiename", "cookie_name" even "CooKiE_NaMe"' ) }
  if( conf.auto_samesite === true ) 
    { props[ 'samesite' ] = "Lax" }
  /* FIXING VALUE [v] */
  if( value instanceof Date ) {
    value = value.toISOString( ) ;
  } else if( typeof value === "boolean" ) {
    value = value === true ? 'true' : 'false' ;
  } else if( typeof value === "object" ) {
    value = JSON.stringify( value ) ;
  } /* --------------- [v] */
  /* FIXING PROPERTIES [v] */
  var exp ;
  if( typeof props === "number" ) {
    var d = new Date( ) ;
        d . setDate( d.getDate( ) + props ) ;
    exp = d ;
  } else if( props instanceof Date ) {
    exp = props ;
  } else if( typeof props === "string" && Date.parse( props ) ) {
    exp = new Date( exp ) ;
  } if( exp instanceof Date ) {
    props = { expires : exp.toUTCString( ) } ;
  } /* ---------------------- [v] */
  /* GENERATING COOKIE-STRING [v] */
  var str = `${ key }=${ value }` ;
  for( var i in props ) {
    let v= props [ i ] ;
    if( v instanceof Date ) {
      v = v.toUTCString( ) ;
    } /* Save Property - [v] */
    str += `; ${ i.toLowerCase( ) }=${ v }` ;
  } /* CREATE OreoCookie [v] */
  return WRITE( str ) ;
} ;


function WRITE( str ) {
  if( ch_iz === false ) { READ( ) ; }
  var $c = new OreoCookie( str ) ;
  if( $c.size > 4096 && conf.cookies_size_limit !== false ) 
    { throw new Error( 'COOKIE_WRITE_ERROR :: the new cookie has more than 4096 bytes. You can remove this size_limit with oreo.config( ) [Electron & Cordova Only].' ) ; }
  var sm = !cache[ $c.key ] ? 1 : 0 ;
  if( conf.cookies_limit !== false && ( Object.keys( cache ).length + sm ) > 128 ) 
    { throw new Error( 'COOKIES_LIMIT_EXCEEDED :: Browsers have a limit of ~128 cookies per page. You can disable this limit (Only for electron, node.js & cordova) with oreo.config( )' ) ; }
  let $h = cache ;
      $h [ $c.key ] = $c ;
  // CLEAN NEW CACHE [v]
  for( var i in $h ) { if( !$h[ i ] ) { delete $h[ i ] ; } }
  // CREATE INDEX -- [v]
  var ix = ( function ( ) {
    var arr = [ ] ;
    Object.keys( $h ).forEach( o => arr.push( o ) ) ;
    return arr.length > 0 ? arr.join( ',' ) : '' ;
  } ( ) ) ;
  if( isElectron( ) || isNodejs( ) ) {
    var obj = { } ;
    for( var i in $h ) { obj[ i ] = $h[ i ].cookie_str ; }
    var raw = JSON.stringify( obj ) ;
    var enc = ENCRYPT( raw ) ;
    var dir = isElectron( ) ? require( 'electron' ).remote.app.getPath( 'appData' ) : './' ;
    fs.writeFileSync( !conf.cookies_file || conf.cookies_file === "./oreo.cookies" ? path.join( dir, conf.cookies_file ) : conf.cookies_file, enc ) ;
  } else if( isCordova( ) ) {
    window.localStorage.setItem( `o-cookie-${ key }`, str ) ;
    window.localStorage.setItem( `o-cookies-index`, ix ) ;
  } else {
    document.cookie = str ;
    window.localStorage.setItem( `o-cookies-index`, ix ) ;
  } /* UPDATING CACHE [v] */
  cache[ $c.key ] = $c ;
  return $c ;
}

function READ( ) {
  var obj = { } ;
  if( isNodejs( ) || isElectron( ) ) {
    try {
      var dir = isElectron( ) ? require( 'electron' ).remote.app.getPath( 'appData' ) : './' ;
      var raw = fs.readFileSync( !conf.cookies_file || conf.cookies_file === "./oreo.cookies" ? path.join( dir, conf.cookies_file ) : conf.cookies_file, 'utf-8' ) ;
      var dec = DECRYPT( raw ) ;
          obj = JSON.parse( dec ) ;
    } catch( ex ) {
      throw new Error( 'READ_OREO_COOKIES_FILE_ERROR :: ' + ex.toString( ) ) ;
    }
  } else if( isCordova( ) ) {
    console.log( 'fack' )
    var ix = window.localStorage.getItem( 'o-cookies-index' ) ;
    if( ix ) {
      var arr = ix.split( ',' ) ;
      for( var i = 0 ; i < arr.length ; i++ ) 
        { obj[ arr[ i ] ] = window.localStorage.getItem( `o-cookie-${ arr[ i ] }` ) ; }
    } /* BACKUP INDEX [^] */
  } else {
    var str = document.cookie ,
        arr = str ? str.split( ';' ) : [ ] ;
    for( var i = 0 ; i < arr.length ; i++ ) {
      let a = arr[ i ].split( '=' ) ;
      obj[ a[ 0 ] ] = arr[ i ] ;
    } /* CREATE OBJ --- [^] */
  } /* GENERATING CACHE [v] */
  for( var i in obj ) {
    if( typeof obj[ i ] !== "string" ) { continue ; }
    cache[ i ] = new OreoCookie( obj[ i ] ) ; 
  } return cache ;
}


/* FUNCTIONS [v] */
function GET_RANDOM_STRING( length ) {
  var result           = '' ,
     characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' ,
     charactersLength = characters.length ;
  for ( var i = 0 ; i < length ; i++ ) {
    result += characters.charAt( Math.floor( Math.random( ) * charactersLength ) ) ;
  } return result ;
}

function ENCRYPT( str, key ) {
  str = typeof key === "string" ? str + '@k:' + key : str ;
  str = btoa( str ) ;
  str = str.reverse( ) ;
  str = str.hexEncode( ) ;
  str = str.reverse( ) ;
  return str ;
}

function DECRYPT( str, key ) {
  str = str.reverse( ) ;
  str = str.hexDecode( ) ;
  str = str.reverse( ) ;
  str = atob( str ) ;
  var i = str.indexOf( '@k:' ) ;
  if( i !== -1 ) {
    var k = str.substring( i + 3, str.length ) ;
    if( k !== key ) 
      { throw new Error( 'Invalid cookies.oreo file key' ) ; }
  } /* VALIDATING KEY [^] */
  return str.replace( /(@k:).*$/, "" ) ;
}

String.prototype.reverse = function ( ) {
  return this.split( "" ).reverse( ).join( "" ) ;
} ;

String.prototype.hexEncode = function( ) {
  var hex, i ;
  var result = "" ;
  for( i = 0 ; i < this.length ; i++ ) {
    hex = this.charCodeAt( i ).toString( 16 ) ;
    result += ( "000"+hex ).slice( -4 ) ;
  } return result ;
} ;

String.prototype.hexDecode = function( ) {
  var j ;
  var hexes = this.match( /.{1,4}/g ) || [ ] ;
  var back = "" ;
  for( j = 0 ; j < hexes.length ; j++ ) {
    back += String.fromCharCode( parseInt( hexes[ j ], 16 ) ) ;
  } return back ;
} ;


/* define module [v] === */
if( typeof module !== 'undefined' && module.exports ) {
  module.exports  = oreo ;
  root.oreo       = oreo ;
  root.cookies    = oreo ;
} else { 
  root.oreo       = oreo ;
  root.cookies    = oreo ;
} /* =================== */
/* define module [^] === */