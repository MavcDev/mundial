import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListEquipoPage } from '../pages/list-equipo/list-equipo';
import { ViewEquipoPage } from '../pages/view-equipo/view-equipo';

import { ServiceEquipoProvider } from '../providers/service-equipo/service-equipo';
import { ServiceResultadoProvider } from '../providers/service-resultado/service-resultado';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListEquipoPage,
    ViewEquipoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListEquipoPage,
    ViewEquipoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceEquipoProvider,
    ServiceResultadoProvider
  ]
})
export class AppModule {}
