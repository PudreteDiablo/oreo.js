const oreo = require( './index.js' ) ;

oreo.on( 'remove', ev => console.log( ev ) ) ;
//console.log( oreo.cookies )
console.log( oreo.remove( 'tacos', 'si', { path : '' } ) )
//console.log( oreo.remove( 'tacos' ) )
