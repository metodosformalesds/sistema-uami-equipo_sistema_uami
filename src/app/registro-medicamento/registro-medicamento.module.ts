import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroMedicamentoPageRoutingModule } from './registro-medicamento-routing.module';

import { RegistroMedicamentoPage } from './registro-medicamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroMedicamentoPageRoutingModule
  ],
  declarations: [RegistroMedicamentoPage]
})
export class RegistroMedicamentoPageModule {}
