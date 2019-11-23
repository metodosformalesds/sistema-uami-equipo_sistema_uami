import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { BDService } from '../services/bd.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
})
export class RegistroUsuarioPage implements OnInit {
  nickname;contrasena;email; ROL;
  constructor(private navCtrl:NavController,
    private BD:BDService, 
    private alertCtrl:AlertController) { }

  ngOnInit() {
    this.nickname=this.generateNickname()
    this.contrasena=this.generatePassword()
  }
  generateNickname(){
    return Math.random().toString(36).substr(2, 9);
  }
  generatePassword(){
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }
  guardar(){
    this.BD.crearUsuario(this.nickname,this.contrasena,this.email,this.ROL)
    let alert =  this.alertCtrl.create({
      message: 'Recuerde guardar su contraseña en un lugar seguro',
      subHeader:'Guardo la contraseña?',
      buttons:[{
        text: 'Si',
        handler:()=>{
          this.navCtrl.navigateForward('menu')
        }
      },{
        text:'No',
        role:'cancel'
      }]}).then(alert=>alert.present())
  }

}
