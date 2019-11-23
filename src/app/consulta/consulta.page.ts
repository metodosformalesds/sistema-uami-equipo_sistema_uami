import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { BDService } from '../services/bd.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage implements OnInit {
  medicamentos;medicamentoSelect:any="";recibio;matricula; enfermedad;
  id; fecha;
  constructor(private navCtrl:NavController,
    private BD:BDService,
    private alertCtrl:AlertController,
    private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.BD.ListadoMedicamentos=[]
    this.matricula=this.activeRoute.snapshot.paramMap.get('matricula')
    this.id=this.activeRoute.snapshot.paramMap.get('id')
    this.BD.listadoMedicamento()
    setTimeout(() => {
      this.listadomed()
    }, 500);
  }

  listadomed(){
    this.medicamentos=this.BD.ListadoMedicamentos
    
    
  }
  guardar(){
    if(this.id==""||this.id==null){
    this.id=Math.floor(Math.random() * (999999)) + 1;
    this.id=this.id.toString()
    }
    this.fecha=new Date().toISOString()
    this.BD.guardarConsulta(this.id,this.enfermedad,this.matricula,this.medicamentoSelect,this.fecha)
    let alert =  this.alertCtrl.create({
      message: 'Se termino la caja de medicamento?',
      subHeader:'Medicación',
      buttons:[{
        text: 'Si',
        handler:()=>{
          this.restarMedicamento(this.medicamentoSelect)
          this.navCtrl.navigateForward('menu')
        }
      },{
        text:'No',
        handler:()=>{
          this.navCtrl.navigateForward('menu')
        }
      }]}).then(alert=>alert.present())
  }

  restarMedicamento(a){
    this.BD.restarMedicamento(a)
  }

}
