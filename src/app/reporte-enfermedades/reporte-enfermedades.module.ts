import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteEnfermedadesPageRoutingModule } from './reporte-enfermedades-routing.module';

import { ReporteEnfermedadesPage } from './reporte-enfermedades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporteEnfermedadesPageRoutingModule
  ],
  declarations: [ReporteEnfermedadesPage]
})
export class ReporteEnfermedadesPageModule {}
