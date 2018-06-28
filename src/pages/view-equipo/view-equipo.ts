import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceResultadoProvider } from '../../providers/service-resultado/service-resultado';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the ViewEquipoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-equipo',
  templateUrl: 'view-equipo.html',
})
export class ViewEquipoPage {

  fifaCode;
  nombre = "Nombre Equipo";
  equipo;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public resultadoProvider:  ServiceResultadoProvider,
    public loading : LoadingController) {

      this.fifaCode =  navParams.get("fifaCode");  
  }

  ionViewDidLoad() {

    const loader = this.loading.create({
      content: "Please wait..."
    });

    this.resultadoProvider.getResulTeam( this.fifaCode )
    .subscribe(
      (result) => { 
        this.equipo = result; 
        this.nombre = this.equipo[0].country;
        console.log( result );
        loader.dismiss();
      },
      (error) => { console.log( error ); }
    );
    loader.present();
  }

}
