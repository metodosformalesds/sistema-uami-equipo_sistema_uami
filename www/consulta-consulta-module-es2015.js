(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["consulta-consulta-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/consulta/consulta.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/consulta/consulta.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"top\">\n    <ion-item color=\"light\">\n      <ion-label>Codigo de enfermedad:</ion-label>\n      <ion-input [(ngModel)]=\"enfermedad\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item color=\"light\">\n      <ion-label>Matricula:</ion-label>\n      <ion-input [(ngModel)]=\"matricula\" type=\"tex\"></ion-input>\n    </ion-item>\n    <ion-radio-group [(ngModel)]=\"recibio\"> <h6 class=\"color\">Recibio medicamento?</h6>\n      <ion-row >\n        <ion-col>\n          <ion-item color=\"light\">\n            <ion-icon src=\"../assets/si.svg\" item-start></ion-icon>\n            <ion-label>Si</ion-label>\n            <ion-radio value=\"true\"></ion-radio>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n           <ion-item color=\"light\" shape=\"round\">\n             <ion-icon src=\"../assets/no.svg\" item-start></ion-icon>\n             <ion-label>No</ion-label>\n             <ion-radio value=\"false\"></ion-radio>\n           </ion-item>\n         </ion-col>\n      </ion-row>\n     </ion-radio-group>\n\n  <ion-item color=\"light\">\n    <ion-label>Seleccione un medicamento</ion-label>\n  <ion-select [(ngModel)]=\"medicamentoSelect\" ok-text=\"Seleccionar\" cancel-text=\"Cancelar\">\n    <ion-select-option value=\"\"></ion-select-option>\n    <ion-select-option *ngFor=\"let med of medicamentos\" value=\"{{med.Nombre}}\" >{{med.Nombre}}</ion-select-option>\n  </ion-select>\n</ion-item>\n\n   </div>\n    <ion-button expand=\"full\" shape=\"round\" color=\"tertiary\" (click)=\"guardar()\">Guardar</ion-button>\n  \n  </ion-content>\n  \n"

/***/ }),

/***/ "./src/app/consulta/consulta-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/consulta/consulta-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ConsultaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaPageRoutingModule", function() { return ConsultaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _consulta_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consulta.page */ "./src/app/consulta/consulta.page.ts");




const routes = [
    {
        path: '',
        component: _consulta_page__WEBPACK_IMPORTED_MODULE_3__["ConsultaPage"]
    }
];
let ConsultaPageRoutingModule = class ConsultaPageRoutingModule {
};
ConsultaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConsultaPageRoutingModule);



/***/ }),

/***/ "./src/app/consulta/consulta.module.ts":
/*!*********************************************!*\
  !*** ./src/app/consulta/consulta.module.ts ***!
  \*********************************************/
/*! exports provided: ConsultaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaPageModule", function() { return ConsultaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _consulta_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consulta-routing.module */ "./src/app/consulta/consulta-routing.module.ts");
/* harmony import */ var _consulta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consulta.page */ "./src/app/consulta/consulta.page.ts");







let ConsultaPageModule = class ConsultaPageModule {
};
ConsultaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _consulta_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConsultaPageRoutingModule"]
        ],
        declarations: [_consulta_page__WEBPACK_IMPORTED_MODULE_6__["ConsultaPage"]]
    })
], ConsultaPageModule);



/***/ }),

/***/ "./src/app/consulta/consulta.page.scss":
/*!*********************************************!*\
  !*** ./src/app/consulta/consulta.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.top {\n  margin-top: 7%;\n  margin-left: 30%;\n  margin-right: 30%;\n}\n\n.color {\n  color: white;\n}\n\nion-button {\n  margin-top: 2%;\n  align-content: flex-start;\n  margin-left: 30%;\n  margin-right: 30%;\n}\n\nion-img {\n  margin-right: 78%;\n}\n\nion-content {\n  --ion-background-color: #013CA6;\n}\n\nion-item {\n  margin-top: 1%;\n}\n\nion-item .der {\n  margin-left: 2%;\n}\n\nion-round-group {\n  margin-left: 20%;\n  margin-right: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uc3VsdGEvQzpcXFVzZXJzXFxqb2huY1xcRG9jdW1lbnRzXFxNZXRvZG9zXFxVQU1JL3NyY1xcYXBwXFxjb25zdWx0YVxcY29uc3VsdGEucGFnZS5zY3NzIiwic3JjL2FwcC9jb25zdWx0YS9jb25zdWx0YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtBQ0dKOztBRERBO0VBRUksY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0dKOztBREFBO0VBQ0ksaUJBQUE7QUNHSjs7QUREQTtFQUNJLCtCQUFBO0FDSUo7O0FERkE7RUFJSSxjQUFBO0FDRUo7O0FETEk7RUFDSSxlQUFBO0FDT1I7O0FERkE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9jb25zdWx0YS9jb25zdWx0YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVye1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4udG9we1xyXG4gICAgbWFyZ2luLXRvcDogNyU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMCU7XHJcbn1cclxuLmNvbG9ye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmlvbi1idXR0b257XHJcbiAgICBcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwJTtcclxuICAgIFxyXG59XHJcbmlvbi1pbWd7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDc4JTtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMTNDQTY7XHJcbn1cclxuaW9uLWl0ZW17XHJcbiAgICAuZGVye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIH1cclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG5cclxufVxyXG5pb24tcm91bmQtZ3JvdXB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbn1cclxuIiwiLmNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50b3Age1xuICBtYXJnaW4tdG9wOiA3JTtcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgbWFyZ2luLXJpZ2h0OiAzMCU7XG59XG5cbi5jb2xvciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tbGVmdDogMzAlO1xuICBtYXJnaW4tcmlnaHQ6IDMwJTtcbn1cblxuaW9uLWltZyB7XG4gIG1hcmdpbi1yaWdodDogNzglO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMTNDQTY7XG59XG5cbmlvbi1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMSU7XG59XG5pb24taXRlbSAuZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuXG5pb24tcm91bmQtZ3JvdXAge1xuICBtYXJnaW4tbGVmdDogMjAlO1xuICBtYXJnaW4tcmlnaHQ6IDIwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/consulta/consulta.page.ts":
/*!*******************************************!*\
  !*** ./src/app/consulta/consulta.page.ts ***!
  \*******************************************/
/*! exports provided: ConsultaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaPage", function() { return ConsultaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_bd_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/bd.service */ "./src/app/services/bd.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ConsultaPage = class ConsultaPage {
    constructor(navCtrl, BD, alertCtrl, activeRoute) {
        this.navCtrl = navCtrl;
        this.BD = BD;
        this.alertCtrl = alertCtrl;
        this.activeRoute = activeRoute;
        this.medicamentoSelect = "";
    }
    ngOnInit() {
        this.matricula = this.activeRoute.snapshot.paramMap.get('matricula');
        this.id = this.activeRoute.snapshot.paramMap.get('id');
        this.BD.listadoMedicamento();
        setTimeout(() => {
            this.listadomed();
        }, 500);
    }
    listadomed() {
        this.medicamentos = this.BD.ListadoMedicamentos;
    }
    guardar() {
        this.id = Math.floor(Math.random() * (999999)) + 1;
        this.id = this.id.toString();
        this.fecha = new Date().toISOString();
        this.BD.guardarConsulta(this.id, this.enfermedad, this.matricula, this.medicamentoSelect, this.fecha);
        let alert = this.alertCtrl.create({
            message: 'Se termino la caja de medicamento?',
            subHeader: 'Medicación',
            buttons: [{
                    text: 'Si',
                    handler: () => {
                        this.restarMedicamento(this.medicamentoSelect);
                        this.navCtrl.navigateForward('menu');
                    }
                }, {
                    text: 'No',
                    handler: () => {
                        this.navCtrl.navigateForward('menu');
                    }
                }]
        }).then(alert => alert.present());
    }
    restarMedicamento(a) {
        this.BD.restarMedicamento(a);
    }
};
ConsultaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_bd_service__WEBPACK_IMPORTED_MODULE_3__["BDService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
ConsultaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-consulta',
        template: __webpack_require__(/*! raw-loader!./consulta.page.html */ "./node_modules/raw-loader/index.js!./src/app/consulta/consulta.page.html"),
        styles: [__webpack_require__(/*! ./consulta.page.scss */ "./src/app/consulta/consulta.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_bd_service__WEBPACK_IMPORTED_MODULE_3__["BDService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], ConsultaPage);



/***/ })

}]);
//# sourceMappingURL=consulta-consulta-module-es2015.js.map