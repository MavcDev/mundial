import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceResultadoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceResultadoProvider {

  url = "https://worldcup.sfg.io/teams/results?fifa_code=";  

  constructor(public http: HttpClient) {
    console.log('Hello ServiceResultadoProvider Provider');
  }

  getResulTeam( fifaCode ){
    return this.http.get( this.url  + fifaCode );
  }    
}





