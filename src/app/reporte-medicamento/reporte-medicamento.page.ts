import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BDService } from '../services/bd.service';

@Component({
  selector: 'app-reporte-medicamento',
  templateUrl: './reporte-medicamento.page.html',
  styleUrls: ['./reporte-medicamento.page.scss'],
})
export class ReporteMedicamentoPage implements OnInit {
  medicamentos
  constructor(private navCtrl:NavController,private BD:BDService) { }

  ngOnInit() {
    this.medicamentos=[]
    this.BD.listadoMedicamento()
    setTimeout(a=>this.getMedicamentos(),500)
    
  }

  getMedicamentos(){
    this.medicamentos=this.BD.ListadoMedicamentos
    console.log(this.medicamentos)
    this.BD.ListadoMedicamentos=[]
  }

  goToMenu(){
    this.navCtrl.navigateForward('menu')
  }

  
}
