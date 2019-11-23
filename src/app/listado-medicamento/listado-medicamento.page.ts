import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BDService } from '../services/bd.service';

@Component({
  selector: 'app-listado-medicamento',
  templateUrl: './listado-medicamento.page.html',
  styleUrls: ['./listado-medicamento.page.scss'],
})
export class ListadoMedicamentoPage implements OnInit {
  medicamentos=[]
  constructor(private navCtrl:NavController,
    private BD:BDService) { }

  ngOnInit() {
    this.BD.ListadoMedicamentos=[]
    this.BD.listadoMedicamento()
    setTimeout(a=>this.getMedicamentos(),500)
  }

  getMedicamentos(){
    this.medicamentos=this.BD.ListadoMedicamentos
    console.log(this.medicamentos)
    
  }

  onSearchTerm(ev: CustomEvent) {
   
    const val = ev.detail.value;
 
    if (val && val.trim() !== '') {
      this.medicamentos = this.medicamentos.filter(term => {
        return term.Nombre.indexOf(val.trim().toLowerCase()) > -1;
      });
    }else{
      this.ngOnInit()
    }
  }
  goToRegistroMedicamento(){
    this.navCtrl.navigateForward('registro-medicamento')
  }
  goToModificarMedicamento(nombre){
    this.navCtrl.navigateForward(['registro-medicamento',nombre])
  }
}
