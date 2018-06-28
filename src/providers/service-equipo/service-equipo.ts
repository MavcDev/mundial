import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceEquipoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceEquipoProvider {

  url = "https://worldcup.sfg.io/teams/";  

  constructor(public http: HttpClient) {
    console.log('Hello ServiceEquipoProvider Provider');
  }

  getall(){
    return this.http.get( this.url  );
  }    
}
