(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reporte-medicamento-reporte-medicamento-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/reporte-medicamento/reporte-medicamento.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reporte-medicamento/reporte-medicamento.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n      <div>\n        <ion-item color=\"light\">\n        <ion-label>Nombre</ion-label>\n        <ion-label>Cantidad</ion-label>\n        <ion-label>Observaciones</ion-label>\n      </ion-item>\n      </div>\n      <div>\n      <ion-list>\n        <ion-item *ngFor=\"let item of medicamentos\"color=\"light\">\n          <ion-label>{{item.Nombre}}</ion-label>\n          <ion-label>{{item.Cantidad}}</ion-label>\n          <ion-label>{{item.Observaciones}}</ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n      <ion-button color=\"tertiary\" (click)=\"goToMenu()\" size=\"large\">OK</ion-button>\n    </ion-content>"

/***/ }),

/***/ "./src/app/reporte-medicamento/reporte-medicamento-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/reporte-medicamento/reporte-medicamento-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ReporteMedicamentoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteMedicamentoPageRoutingModule", function() { return ReporteMedicamentoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reporte_medicamento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reporte-medicamento.page */ "./src/app/reporte-medicamento/reporte-medicamento.page.ts");




const routes = [
    {
        path: '',
        component: _reporte_medicamento_page__WEBPACK_IMPORTED_MODULE_3__["ReporteMedicamentoPage"]
    }
];
let ReporteMedicamentoPageRoutingModule = class ReporteMedicamentoPageRoutingModule {
};
ReporteMedicamentoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReporteMedicamentoPageRoutingModule);



/***/ }),

/***/ "./src/app/reporte-medicamento/reporte-medicamento.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/reporte-medicamento/reporte-medicamento.module.ts ***!
  \*******************************************************************/
/*! exports provided: ReporteMedicamentoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteMedicamentoPageModule", function() { return ReporteMedicamentoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reporte_medicamento_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reporte-medicamento-routing.module */ "./src/app/reporte-medicamento/reporte-medicamento-routing.module.ts");
/* harmony import */ var _reporte_medicamento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reporte-medicamento.page */ "./src/app/reporte-medicamento/reporte-medicamento.page.ts");







let ReporteMedicamentoPageModule = class ReporteMedicamentoPageModule {
};
ReporteMedicamentoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reporte_medicamento_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReporteMedicamentoPageRoutingModule"]
        ],
        declarations: [_reporte_medicamento_page__WEBPACK_IMPORTED_MODULE_6__["ReporteMedicamentoPage"]]
    })
], ReporteMedicamentoPageModule);



/***/ }),

/***/ "./src/app/reporte-medicamento/reporte-medicamento.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/reporte-medicamento/reporte-medicamento.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.top {\n  margin-top: 7%;\n  margin-left: 30%;\n  margin-right: 30%;\n}\n\n.color {\n  color: white;\n}\n\n.right {\n  margin-top: -4%;\n  margin-right: 60%;\n}\n\n.left {\n  margin-top: 1%;\n  margin-left: 68%;\n}\n\nion-button {\n  margin-top: 2%;\n  align-content: flex-start;\n  margin-left: 80%;\n}\n\nion-img {\n  margin-right: 78%;\n}\n\nion-content {\n  --ion-background-color: #013CA6;\n}\n\nion-item {\n  margin-top: 1%;\n  margin-right: 40%;\n  margin-left: 0.8%;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-item .der {\n  margin-left: 2%;\n}\n\nion-item .pointer {\n  cursor: pointer;\n}\n\nion-round-group {\n  margin-left: 20%;\n  margin-right: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0ZS1tZWRpY2FtZW50by9DOlxcVXNlcnNcXGpvaG5jXFxEb2N1bWVudHNcXE1ldG9kb3NcXFVBTUkvc3JjXFxhcHBcXHJlcG9ydGUtbWVkaWNhbWVudG9cXHJlcG9ydGUtbWVkaWNhbWVudG8ucGFnZS5zY3NzIiwic3JjL2FwcC9yZXBvcnRlLW1lZGljYW1lbnRvL3JlcG9ydGUtbWVkaWNhbWVudG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURBQTtFQUNJLFlBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0lKOztBREZBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDS0o7O0FESEE7RUFFSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0tKOztBRERBO0VBQ0ksaUJBQUE7QUNJSjs7QURGQTtFQUNJLCtCQUFBO0FDS0o7O0FESEE7RUFJSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUlBLHdCQUFBO1VBQUEsdUJBQUE7QUNBSjs7QURUSTtFQUNJLGVBQUE7QUNXUjs7QUROSTtFQUNJLGVBQUE7QUNRUjs7QURIQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydGUtbWVkaWNhbWVudG8vcmVwb3J0ZS1tZWRpY2FtZW50by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVye1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4udG9we1xyXG4gICAgbWFyZ2luLXRvcDogNyU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMCU7XHJcbn1cclxuLmNvbG9ye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5yaWdodHtcclxuICAgIG1hcmdpbi10b3A6IC00JTtcclxuICAgIG1hcmdpbi1yaWdodDogNjAlO1xyXG59XHJcbi5sZWZ0e1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBtYXJnaW4tbGVmdDogNjglO1xyXG59XHJcbmlvbi1idXR0b257XHJcbiAgICBcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XHJcbiAgICBcclxuICAgIFxyXG59XHJcbmlvbi1pbWd7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDc4JTtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMTNDQTY7XHJcbn1cclxuaW9uLWl0ZW17XHJcbiAgICAuZGVye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIH1cclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLjglO1xyXG4gICAgLnBvaW50ZXJ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG59XHJcbmlvbi1yb3VuZC1ncm91cHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcclxufSIsIi5jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udG9wIHtcbiAgbWFyZ2luLXRvcDogNyU7XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIG1hcmdpbi1yaWdodDogMzAlO1xufVxuXG4uY29sb3Ige1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5yaWdodCB7XG4gIG1hcmdpbi10b3A6IC00JTtcbiAgbWFyZ2luLXJpZ2h0OiA2MCU7XG59XG5cbi5sZWZ0IHtcbiAgbWFyZ2luLXRvcDogMSU7XG4gIG1hcmdpbi1sZWZ0OiA2OCU7XG59XG5cbmlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luLWxlZnQ6IDgwJTtcbn1cblxuaW9uLWltZyB7XG4gIG1hcmdpbi1yaWdodDogNzglO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMTNDQTY7XG59XG5cbmlvbi1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMSU7XG4gIG1hcmdpbi1yaWdodDogNDAlO1xuICBtYXJnaW4tbGVmdDogMC44JTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5pb24taXRlbSAuZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuaW9uLWl0ZW0gLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlvbi1yb3VuZC1ncm91cCB7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG4gIG1hcmdpbi1yaWdodDogMjAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/reporte-medicamento/reporte-medicamento.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/reporte-medicamento/reporte-medicamento.page.ts ***!
  \*****************************************************************/
/*! exports provided: ReporteMedicamentoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteMedicamentoPage", function() { return ReporteMedicamentoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_bd_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/bd.service */ "./src/app/services/bd.service.ts");




let ReporteMedicamentoPage = class ReporteMedicamentoPage {
    constructor(navCtrl, BD) {
        this.navCtrl = navCtrl;
        this.BD = BD;
    }
    ngOnInit() {
        this.medicamentos = [];
        this.BD.listadoMedicamento();
        setTimeout(a => this.getMedicamentos(), 500);
    }
    getMedicamentos() {
        this.medicamentos = this.BD.ListadoMedicamentos;
        console.log(this.medicamentos);
        this.BD.ListadoPacientes = [];
    }
    goToMenu() {
        this.navCtrl.navigateForward('menu');
    }
};
ReporteMedicamentoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_bd_service__WEBPACK_IMPORTED_MODULE_3__["BDService"] }
];
ReporteMedicamentoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reporte-medicamento',
        template: __webpack_require__(/*! raw-loader!./reporte-medicamento.page.html */ "./node_modules/raw-loader/index.js!./src/app/reporte-medicamento/reporte-medicamento.page.html"),
        styles: [__webpack_require__(/*! ./reporte-medicamento.page.scss */ "./src/app/reporte-medicamento/reporte-medicamento.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_bd_service__WEBPACK_IMPORTED_MODULE_3__["BDService"]])
], ReporteMedicamentoPage);



/***/ })

}]);
//# sourceMappingURL=reporte-medicamento-reporte-medicamento-module-es2015.js.map