const oreo = require( './index.js' ) ;


console.log( oreo.cookies )
console.log( oreo( 'tacos', 'si', new Date( ) ) )
console.log( oreo.remove( 'tacos' ) )
console.log( oreo.cookies )