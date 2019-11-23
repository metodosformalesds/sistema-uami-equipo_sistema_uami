import { Component, OnInit } from '@angular/core';

import { BDService } from '../services/bd.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-listado-consulta',
  templateUrl: './listado-consulta.page.html',
  styleUrls: ['./listado-consulta.page.scss'],
})
export class ListadoConsultaPage implements OnInit {
   consultas;
  constructor(private navCtrl:NavController,
    private BD:BDService) { }

  ngOnInit() {
    this.consultas=[]
    this.BD.listadoConsulta()
    setTimeout(a=>this.getConsultas(),500)
    this.BD.ListadoConsultas=[] 
  }

  goToModificarConsulta(matricula,id){
    console.log(matricula)
    console.log(id)
    this.navCtrl.navigateForward(['/consulta',{matricula,id}])
  }

  getConsultas(){
    this.consultas=this.BD.ListadoConsultas
  }

  onSearchTerm(ev: CustomEvent) {
   
    const val = ev.detail.value;
 
    if (val && val.trim() !== '') {
      this.consultas = this.consultas.filter(term => {
        return term.Matricula.indexOf(val.trim().toLowerCase()) > -1;
      });
    }else{
      this.ngOnInit()
    }
  }
}
