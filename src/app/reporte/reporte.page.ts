import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BDService } from '../services/bd.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.page.html',
  styleUrls: ['./reporte.page.scss'],
})
export class ReportePage implements OnInit {

  constructor(private navCtrl:NavController, private BD:BDService) { }

  ngOnInit() {
  }
  goToReporteEnfermedades(){
    this.navCtrl.navigateForward('reporte-enfermedades')
  }
  goToReporteMedicamento(){
    this.navCtrl.navigateForward('reporte-medicamento')
  }

}
