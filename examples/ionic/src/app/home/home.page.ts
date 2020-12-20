import { Component } from '@angular/core';
import { Oreo } from '@ionic-native/oreo/ngx' ;


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public oreo: Oreo) {}

  fack()  {
    this.oreo.get( 'hola' ).then( e => {
      alert( e ) ;
    } ).catch( err => {
      alert( 'ERROR_OREO => ' + err.toString( ) ) ;
    } ) ;
  }
}
