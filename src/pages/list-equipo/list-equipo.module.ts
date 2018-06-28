import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListEquipoPage } from './list-equipo';

@NgModule({
  declarations: [
    ListEquipoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListEquipoPage),
  ],
})
export class ListEquipoPageModule {}
