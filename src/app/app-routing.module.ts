import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'reporte-enfermedades', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {path: 'login',loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'consulta',
      loadChildren: () => import('./consulta/consulta.module').then( m => m.ConsultaPageModule)
  },
  {
    path: 'consulta/:matricula',
    loadChildren: () => import('./consulta/consulta.module').then( m => m.ConsultaPageModule)
  },
  {
    path: 'consulta/:matricula,id',
      loadChildren: () => import('./consulta/consulta.module').then( m => m.ConsultaPageModule)
  },
  {
    path: 'registro-paciente',
    loadChildren: () => import('./registro-paciente/registro-paciente.module').then( m => m.RegistroPacientePageModule)
  },
  {
    path: 'registro-usuario',
    loadChildren: () => import('./registro-usuario/registro-usuario.module').then( m => m.RegistroUsuarioPageModule)
  },
  {
    path: 'registro-medicamento',
    loadChildren: () => import('./registro-medicamento/registro-medicamento.module').then( m => m.RegistroMedicamentoPageModule)
  },
  {
    path: 'registro-medicamento/:nombre',
    loadChildren: () => import('./registro-medicamento/registro-medicamento.module').then( m => m.RegistroMedicamentoPageModule)
  },
  {
    path: 'reporte-medicamento',
    loadChildren: () => import('./reporte-medicamento/reporte-medicamento.module').then( m => m.ReporteMedicamentoPageModule)
  },
  {
    path: 'reporte-enfermedades',
    loadChildren: () => import('./reporte-enfermedades/reporte-enfermedades.module').then( m => m.ReporteEnfermedadesPageModule)
  },
  {
    path: 'listado-paciente',
    loadChildren: () => import('./listado-paciente/listado-paciente.module').then( m => m.ListadoPacientePageModule)
  },
  {
    path: 'listado-medicamento',
    loadChildren: () => import('./listado-medicamento/listado-medicamento.module').then( m => m.ListadoMedicamentoPageModule)
  },
  {
    path: 'listado-consulta',
    loadChildren: () => import('./listado-consulta/listado-consulta.module').then( m => m.ListadoConsultaPageModule)
  },
  {
    path: 'reporte',
    loadChildren: () => import('./reporte/reporte.module').then( m => m.ReportePageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
