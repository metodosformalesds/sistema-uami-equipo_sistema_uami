import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoMedicamentoPageRoutingModule } from './listado-medicamento-routing.module';

import { ListadoMedicamentoPage } from './listado-medicamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoMedicamentoPageRoutingModule
  ],
  declarations: [ListadoMedicamentoPage]
})
export class ListadoMedicamentoPageModule {}
