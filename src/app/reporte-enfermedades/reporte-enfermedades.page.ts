import { Component, OnInit, ViewChild } from '@angular/core';
import { BDService } from '../services/bd.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reporte-enfermedades',
  templateUrl: './reporte-enfermedades.page.html',
  styleUrls: ['./reporte-enfermedades.page.scss'],
})
export class ReporteEnfermedadesPage implements OnInit {
  
  listadoconsultas;CodigoEnfermedad=[];a:any; 
  @ViewChild('barChart',{static:false}) barChart;
  bars: any;
  colorArray: any;
  constructor(private navCtrl:NavController,public BD:BDService) { }

  ngOnInit() {
    this.listadoconsultas=[]
    this.BD.ListadoConsultas=[]
    this.BD.listadoConsulta()
    setTimeout(a=>this.getConsultas(),500)
     
  }

  getConsultas(){
    this.listadoconsultas=this.BD.listadoEnfermedades()
    this.listadoconsultas.once('value',ss=>{
      ss.forEach(element => {
        this.CodigoEnfermedad[element.val().CodigoEnfermedad]=(this.CodigoEnfermedad[element.val().CodigoEnfermedad]||0)+1
        
      });
    })
    
    console.log(this.CodigoEnfermedad)
  }
    
  exportar(){
    this.navCtrl.navigateForward('menu')
  }

}
