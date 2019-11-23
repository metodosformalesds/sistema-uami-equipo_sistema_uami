(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listado-consulta-listado-consulta-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/listado-consulta/listado-consulta.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/listado-consulta/listado-consulta.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"right\">\n  <ion-searchbar color=\"light\" \n  (ionChange)=\"onSearchTerm($event)\" \n  placeholder=\"Buscar matricula\"\n  ></ion-searchbar>\n</div>\n  <div>\n    <ion-item color=\"light\">\n    <ion-label>Matricula</ion-label>\n    <ion-label>Medicamento</ion-label>\n    <ion-label>Fecha</ion-label>\n    \n  </ion-item>\n  </div>\n  <ion-list>\n    <ion-item *ngFor=\"let item of consultas\" (click)=\"goToModificarConsulta(item.Matricula,item.ID)\" color=\"light\">\n      <ion-label>{{item.Matricula}}</ion-label>\n      <ion-label>{{item.Medicamento}}</ion-label>\n      <ion-label>{{item.Fecha}}</ion-label>\n      <ion-icon src=\"../assets/add.svg\" class=\"pointer\"></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/listado-consulta/listado-consulta-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/listado-consulta/listado-consulta-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ListadoConsultaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoConsultaPageRoutingModule", function() { return ListadoConsultaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _listado_consulta_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listado-consulta.page */ "./src/app/listado-consulta/listado-consulta.page.ts");




const routes = [
    {
        path: '',
        component: _listado_consulta_page__WEBPACK_IMPORTED_MODULE_3__["ListadoConsultaPage"]
    }
];
let ListadoConsultaPageRoutingModule = class ListadoConsultaPageRoutingModule {
};
ListadoConsultaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListadoConsultaPageRoutingModule);



/***/ }),

/***/ "./src/app/listado-consulta/listado-consulta.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/listado-consulta/listado-consulta.module.ts ***!
  \*************************************************************/
/*! exports provided: ListadoConsultaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoConsultaPageModule", function() { return ListadoConsultaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _listado_consulta_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listado-consulta-routing.module */ "./src/app/listado-consulta/listado-consulta-routing.module.ts");
/* harmony import */ var _listado_consulta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listado-consulta.page */ "./src/app/listado-consulta/listado-consulta.page.ts");







let ListadoConsultaPageModule = class ListadoConsultaPageModule {
};
ListadoConsultaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _listado_consulta_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListadoConsultaPageRoutingModule"]
        ],
        declarations: [_listado_consulta_page__WEBPACK_IMPORTED_MODULE_6__["ListadoConsultaPage"]]
    })
], ListadoConsultaPageModule);



/***/ }),

/***/ "./src/app/listado-consulta/listado-consulta.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/listado-consulta/listado-consulta.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.top {\n  margin-top: 7%;\n  margin-left: 30%;\n  margin-right: 30%;\n}\n\n.color {\n  color: white;\n}\n\n.right {\n  margin-right: 60%;\n}\n\nion-button {\n  margin-top: 2%;\n  align-content: flex-start;\n  margin-left: 30%;\n  margin-right: 30%;\n}\n\nion-img {\n  margin-right: 78%;\n}\n\nion-content {\n  --ion-background-color: #013CA6;\n}\n\nion-item {\n  margin-top: 1%;\n  margin-right: 40%;\n}\n\nion-item .der {\n  margin-left: 2%;\n}\n\nion-item .pointer {\n  cursor: pointer;\n}\n\nion-round-group {\n  margin-left: 20%;\n  margin-right: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGFkby1jb25zdWx0YS9DOlxcVXNlcnNcXGpvaG5jXFxEb2N1bWVudHNcXE1ldG9kb3NcXFVBTUkvc3JjXFxhcHBcXGxpc3RhZG8tY29uc3VsdGFcXGxpc3RhZG8tY29uc3VsdGEucGFnZS5zY3NzIiwic3JjL2FwcC9saXN0YWRvLWNvbnN1bHRhL2xpc3RhZG8tY29uc3VsdGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURBQTtFQUNJLFlBQUE7QUNHSjs7QUREQTtFQUNJLGlCQUFBO0FDSUo7O0FERkE7RUFFSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDSUo7O0FEREE7RUFDSSxpQkFBQTtBQ0lKOztBREZBO0VBQ0ksK0JBQUE7QUNLSjs7QURIQTtFQUlJLGNBQUE7RUFDQSxpQkFBQTtBQ0dKOztBRFBJO0VBQ0ksZUFBQTtBQ1NSOztBRExJO0VBQ0ksZUFBQTtBQ09SOztBREhBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvbGlzdGFkby1jb25zdWx0YS9saXN0YWRvLWNvbnN1bHRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi50b3B7XHJcbiAgICBtYXJnaW4tdG9wOiA3JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwJTtcclxufVxyXG4uY29sb3J7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnJpZ2h0e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2MCU7XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgIFxyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMzAlO1xyXG4gICAgXHJcbn1cclxuaW9uLWltZ3tcclxuICAgIG1hcmdpbi1yaWdodDogNzglO1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAxM0NBNjtcclxufVxyXG5pb24taXRlbXtcclxuICAgIC5kZXJ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgfVxyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQwJTtcclxuICAgIC5wb2ludGVye1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbn1cclxuaW9uLXJvdW5kLWdyb3Vwe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMjAlO1xyXG59XHJcbiIsIi5jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udG9wIHtcbiAgbWFyZ2luLXRvcDogNyU7XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIG1hcmdpbi1yaWdodDogMzAlO1xufVxuXG4uY29sb3Ige1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5yaWdodCB7XG4gIG1hcmdpbi1yaWdodDogNjAlO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIG1hcmdpbi1yaWdodDogMzAlO1xufVxuXG5pb24taW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiA3OCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAxM0NBNjtcbn1cblxuaW9uLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgbWFyZ2luLXJpZ2h0OiA0MCU7XG59XG5pb24taXRlbSAuZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuaW9uLWl0ZW0gLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlvbi1yb3VuZC1ncm91cCB7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG4gIG1hcmdpbi1yaWdodDogMjAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/listado-consulta/listado-consulta.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/listado-consulta/listado-consulta.page.ts ***!
  \***********************************************************/
/*! exports provided: ListadoConsultaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoConsultaPage", function() { return ListadoConsultaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_bd_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bd.service */ "./src/app/services/bd.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let ListadoConsultaPage = class ListadoConsultaPage {
    constructor(navCtrl, BD) {
        this.navCtrl = navCtrl;
        this.BD = BD;
    }
    ngOnInit() {
        this.consultas = [];
        this.BD.listadoConsulta();
        setTimeout(a => this.getConsultas(), 500);
        this.BD.ListadoConsultas = [];
    }
    goToModificarConsulta(matricula, id) {
        console.log(matricula);
        console.log(id);
        this.navCtrl.navigateForward(['/consulta', { matricula, id }]);
    }
    getConsultas() {
        this.consultas = this.BD.ListadoConsultas;
    }
    onSearchTerm(ev) {
        const val = ev.detail.value;
        if (val && val.trim() !== '') {
            this.consultas = this.consultas.filter(term => {
                return term.Matricula.indexOf(val.trim().toLowerCase()) > -1;
            });
        }
        else {
            this.ngOnInit();
        }
    }
};
ListadoConsultaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _services_bd_service__WEBPACK_IMPORTED_MODULE_2__["BDService"] }
];
ListadoConsultaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listado-consulta',
        template: __webpack_require__(/*! raw-loader!./listado-consulta.page.html */ "./node_modules/raw-loader/index.js!./src/app/listado-consulta/listado-consulta.page.html"),
        styles: [__webpack_require__(/*! ./listado-consulta.page.scss */ "./src/app/listado-consulta/listado-consulta.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _services_bd_service__WEBPACK_IMPORTED_MODULE_2__["BDService"]])
], ListadoConsultaPage);



/***/ })

}]);
//# sourceMappingURL=listado-consulta-listado-consulta-module-es2015.js.map