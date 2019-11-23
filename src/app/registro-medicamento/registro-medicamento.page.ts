import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BDService } from '../services/bd.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro-medicamento',
  templateUrl: './registro-medicamento.page.html',
  styleUrls: ['./registro-medicamento.page.scss'],
})
export class RegistroMedicamentoPage implements OnInit {
  nombre:string;
  cantidad;
  observaciones: string="";
  constructor(private navCtrl:NavController, 
    private BD:BDService,
    private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.nombre=this.activeRoute.snapshot.paramMap.get('nombre')
  }
  guardarMedicamento(){
    this.BD.guardarMedicamento(this.nombre,this.cantidad,this.observaciones)
    this.navCtrl.navigateForward('menu')
  }

}
