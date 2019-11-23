import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BDService } from '../services/bd.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  ROL:String;
  ROL1:boolean=false
  constructor(private navCtrl:NavController,private BD:BDService) { }

  ngOnInit() {
    this.BD.rol()
    setTimeout(a=>this.getRol(),500)
  }
  goToListadoMedicamento(){
    this.navCtrl.navigateForward('listado-medicamento')
  }
  goToListadoPaciente(){
    this.navCtrl.navigateForward('listado-paciente')
  }
  goToListadoConsulta(){
    this.navCtrl.navigateForward('listado-consulta')
  }
  goToRegistroPaciente(){
    this.navCtrl.navigateForward('registro-paciente')
  }
  goToRegistroUsuario(){
    this.navCtrl.navigateForward('registro-usuario')
  }
  goToReporte(){
    this.navCtrl.navigateForward('reporte')
  }
  getRol(){
    this.ROL=this.BD.ROL
    console.log(this.ROL)
    if(this.ROL=="ADMINISTRADOR"){
      this.ROL1=true
    }
  }
  logout(){
    this.BD.logoutUser().then(a=>this.navCtrl.navigateRoot('home'))
  }
}
