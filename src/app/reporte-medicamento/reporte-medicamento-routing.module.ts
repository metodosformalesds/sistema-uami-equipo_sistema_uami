import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReporteMedicamentoPage } from './reporte-medicamento.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteMedicamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteMedicamentoPageRoutingModule {}
