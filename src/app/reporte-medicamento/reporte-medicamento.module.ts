import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteMedicamentoPageRoutingModule } from './reporte-medicamento-routing.module';

import { ReporteMedicamentoPage } from './reporte-medicamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporteMedicamentoPageRoutingModule
  ],
  declarations: [ReporteMedicamentoPage]
})
export class ReporteMedicamentoPageModule {}
