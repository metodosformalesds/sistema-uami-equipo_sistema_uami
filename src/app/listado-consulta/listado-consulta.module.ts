import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoConsultaPageRoutingModule } from './listado-consulta-routing.module';

import { ListadoConsultaPage } from './listado-consulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ListadoConsultaPageRoutingModule
  ],
  declarations: [ListadoConsultaPage]
})
export class ListadoConsultaPageModule {}
