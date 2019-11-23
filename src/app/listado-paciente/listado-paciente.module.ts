import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoPacientePageRoutingModule } from './listado-paciente-routing.module';

import { ListadoPacientePage } from './listado-paciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoPacientePageRoutingModule
  ],
  declarations: [ListadoPacientePage]
})
export class ListadoPacientePageModule {}
