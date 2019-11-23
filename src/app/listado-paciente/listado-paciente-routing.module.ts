import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoPacientePage } from './listado-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoPacientePageRoutingModule {}
