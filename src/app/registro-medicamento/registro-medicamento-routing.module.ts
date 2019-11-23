import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroMedicamentoPage } from './registro-medicamento.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroMedicamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroMedicamentoPageRoutingModule {}
