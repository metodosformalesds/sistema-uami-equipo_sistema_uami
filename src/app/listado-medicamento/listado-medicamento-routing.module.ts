import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoMedicamentoPage } from './listado-medicamento.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoMedicamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoMedicamentoPageRoutingModule {}
