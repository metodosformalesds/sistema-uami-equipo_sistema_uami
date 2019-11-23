import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BDService } from '../services/bd.service';

@Component({
  selector: 'app-registro-paciente',
  templateUrl: './registro-paciente.page.html',
  styleUrls: ['./registro-paciente.page.scss'],
})
export class RegistroPacientePage implements OnInit {
  sexo; matricula; edad; carrera:string;
  constructor(private navCtrl: NavController,private BD:BDService) { }

  ngOnInit() {
  }

  guardar(){
   this.BD.guardarPaciente(this.matricula,this.carrera,this.edad,this.sexo)
   this.navCtrl.navigateForward('menu')
  }

}
