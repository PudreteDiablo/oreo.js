#!/usr/bin/env node
var oreo   = require( 'oreo.js' ) ;
var colors = require( 'colors' ) ;
var args   = process.argv.slice( 2 ) ;
var path   = require( 'path' ) ;
var params = { } ;

var i ;
args.forEach( a => {
  if( a.indexOf( '-' ) !== 0 && typeof i === 'string' ) {
    params[ i ] = a.replace( /^(\"+)/g, '' ).replace( /(\"+)$/g, '' ) ;
    return ( i = undefined ) ;
  } else if( a.indexOf( '-' ) === 0 ) { 
    p = true ;
    if( typeof i === "string" ) { params[ i ] = true ; }
    if( a.indexOf( '=' ) !== -1 ) {
      var arr = a.split( '=' ) ;
      params[ arr[ 0 ].replace( /^(\-+)/g, '' ) ] = arr[ 1 ] ;
    } else if( a.replace( /^(\-+)/g, '' ) !== '' )
      { i = a.replace( /^(\-+)/g, '' ) ; }
  }
} ) ;

/* =============== */
var file = params.file || params.cookies_file ; 

oreo.config( {
  cookies_file : file || path.join( process.cwd( ), './oreo.cookies' ) ,
  cookies_limit : false ,
  cookies_size_limit : false
} ) ;


function end( val ) {
  console.log( val ) ;
  process.exit( 0 ) ;
}

const METHODS = {
  set : ( ) => {
    var key = args[ 1 ] ;
    var val = args[ 2 ] ;
    if( !key || !val ) 
      { throw new Error( 'Invalid set parameters. Please define a cookie_key and a cookie_value ~> oreo set cookie_key cookie_val' ) ; }
    else if( key.indexOf( '-' ) === 0 )
      { throw new Error( 'Invalid cookie_key "' + key + '", can\'t start with a dash (-)' ) ; }
    else if( val.indexOf( '-' ) === 0 )
      { throw new Error( 'Invalid cookie_val "' + val + '", can\'t start with a dash (-)' ) ; }
    var props = { } ;
    var isNum = ( /^\d+$/ ).test( params.expires || '' ) ;
    if( params.expires ) { props.expires = isNum === true ? parseInt( params.expires ) : params.expires ; }
    if( params.path    ) { props.path    = params.path    ; }
    return end( oreo( key, val, props ) ) ;
  } ,
  get : ( ) => {
    var key = args[ 1 ] ;
    if( !key ) 
      { throw new Error( 'Invalid get parameters. Please define a cookie_key ~> oreo get cookie_key' ) ; }
    else if( key.indexOf( '-' ) === 0 )
      { throw new Error( 'Invalid cookie_key "' + key + '", can\'t start with a dash (-)' ) ; }
    return end( oreo( key ) ) ;
  } ,
  remove : ( ) => {
    var key = args[ 1 ] ;
    if( !key ) 
      { throw new Error( 'Invalid remove parameters. Please define a cookie_key to remove ~> oreo remove cookie_key' ) ; }
    else if( key.indexOf( '-' ) === 0 )
      { throw new Error( 'Invalid cookie_key "' + key + '", can\'t start with a dash (-)' ) ; }
    return end( oreo.remove( key ) ) ;
  } , 
  clear : ( ) => {
    return end( oreo.clear( ) ) ;
  } ,
  eat : ( ) => {
    return METHODS.remove( ) ;
  } ,
  version : ( ) => {
    return end( '0.2.47' ) ;
  } ,
  v : ( ) => {
    return METHODS.version( ) ;
  }
} ;

/* DEFINE INSTANCE [v] */
( function ( ) {
  var fn = ( args[ 0 ] || '' ).toLowerCase( ) ;
  if( fn === '' ) {
    console.error( 'No argument defined. Please call one of the valid methods, example: oreo get "cookie-name"'.red ) ;
    return process.exit( 1 ) ;
  } else if( typeof METHODS[ fn ] !== "function" ) {
    console.error( `The method "${ fn }" doesn't exists in the current Oreo binary.`.red ) ;
    return process.exit( 1 ) ;
  } /* CALL THE METHOD [v] */
  try {
    return METHODS[ fn ]( ) ;
  } catch( ex ) {
    console.error( `FUNCTION_ERROR ~> ${ ex.toString( ) }`.red ) ;
    return process.exit( 1 ) ;
  } /* CATCH ERROR [^] */
} ( ) ) ;