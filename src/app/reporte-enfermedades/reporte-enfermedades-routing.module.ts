import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReporteEnfermedadesPage } from './reporte-enfermedades.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteEnfermedadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteEnfermedadesPageRoutingModule {}
