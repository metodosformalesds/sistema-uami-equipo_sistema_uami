import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BDService } from '../services/bd.service';

@Component({
  selector: 'app-listado-paciente',
  templateUrl: './listado-paciente.page.html',
  styleUrls: ['./listado-paciente.page.scss'],
})
export class ListadoPacientePage implements OnInit {
  pacientes;
  constructor(private navCtrl:NavController,
    private BD:BDService) { }

  ngOnInit() {
    this.pacientes=[]
    this.BD.listadoPaciente()
    setTimeout(a=>this.getPacientes(),500)
    this.BD.ListadoPacientes=[]
  }

  getPacientes(){
    this.pacientes=this.BD.ListadoPacientes
    console.log(this.pacientes)
  }

  onSearchTerm(ev: CustomEvent) {
   
    const val = ev.detail.value;
 
    if (val && val.trim() !== '') {
      this.pacientes = this.pacientes.filter(term => {
        return term.Matricula.indexOf(val.trim().toLowerCase()) > -1;
      });
    }else{
      this.ngOnInit()
    }
  }

  goToConsulta(Matricula){
    this.navCtrl.navigateForward(['/consulta',Matricula])
  }
  goToRegistraPaciente(){
    this.navCtrl.navigateForward('registro-paciente')
  }
}
