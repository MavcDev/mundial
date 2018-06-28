import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceEquipoProvider } from '../../providers/service-equipo/service-equipo';
import { LoadingController } from 'ionic-angular';
import { ViewEquipoPage } from '../../pages/view-equipo/view-equipo';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the ListEquipoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-equipo',
  templateUrl: 'list-equipo.html',
})
export class ListEquipoPage {

  equipos;
  auxEquipos;
  filter = '1';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public equipoProvider: ServiceEquipoProvider,
    public loading : LoadingController,
    public modalCtrl: ModalController ) {
  }

  ionViewDidLoad() {

    const loader = this.loading.create({
      content: "Please wait..."
    });

    this.equipoProvider.getall()
    .subscribe(
      (result) => { 
        this.equipos = result; 
        this.auxEquipos = result;
        console.log( result );
        loader.dismiss();
      },
      (error) => { console.log( error ); }
    );
    loader.present();
  }

  getFilter( ev: any ){
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.equipos = this.equipos.filter((item) => {
        
        switch( parseInt(  this.filter )){
          case 1:
            return (item.country.toLowerCase().indexOf(val.toLowerCase()) > -1);  
          case 2:
            return (item.fifa_code.toLowerCase().indexOf(val.toLowerCase()) > -1);  
          case 3:
            return (item.group_letter.toLowerCase().indexOf(val.toLowerCase()) > -1);  
        } 
      })
    }else{
        this.equipos = this.auxEquipos;
    }
  }

  openModal(fifaCode){
    const modal = this.modalCtrl.create(ViewEquipoPage, {'fifaCode': fifaCode});
    modal.present();
  }

  openTeam(fifaCode){
    this.navCtrl.push( ViewEquipoPage, {'fifaCode': fifaCode} );
  }
}
