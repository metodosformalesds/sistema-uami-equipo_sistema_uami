import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoConsultaPage } from './listado-consulta.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoConsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoConsultaPageRoutingModule {}
