(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listado-paciente-listado-paciente-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/listado-paciente/listado-paciente.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/listado-paciente/listado-paciente.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"left\">\n    <ion-button color=\"light\" (click)=\"goToRegistraPaciente()\"> Agregar nuevo paciente</ion-button>\n  </div>\n    <div class=\"right\">\n    <ion-searchbar color=\"light\" \n    (ionChange)=\"onSearchTerm($event)\" \n    placeholder=\"Buscar matricula\"\n    ></ion-searchbar>\n  </div>\n    <div>\n      <ion-item color=\"light\">\n      <ion-label>Matricula</ion-label>\n      <ion-label>Carrera</ion-label>\n      <ion-label>Edad</ion-label>\n      <ion-label>Sexo</ion-label>\n    </ion-item>\n    </div>\n    <ion-list>\n      <ion-item *ngFor=\"let item of pacientes\" (click)=\"goToConsulta(item.Matricula,item.ID)\" color=\"light\">\n        <ion-label>{{item.Matricula}}</ion-label>\n        <ion-label>{{item.Carrera}}</ion-label>\n        <ion-label>{{item.Edad}}</ion-label>\n        <ion-label>{{item.Sexo}}</ion-label>\n        <ion-icon src=\"../assets/add.svg\" class=\"pointer\"></ion-icon>\n      </ion-item>\n    </ion-list>\n  </ion-content>"

/***/ }),

/***/ "./src/app/listado-paciente/listado-paciente-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/listado-paciente/listado-paciente-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ListadoPacientePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoPacientePageRoutingModule", function() { return ListadoPacientePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _listado_paciente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listado-paciente.page */ "./src/app/listado-paciente/listado-paciente.page.ts");




const routes = [
    {
        path: '',
        component: _listado_paciente_page__WEBPACK_IMPORTED_MODULE_3__["ListadoPacientePage"]
    }
];
let ListadoPacientePageRoutingModule = class ListadoPacientePageRoutingModule {
};
ListadoPacientePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListadoPacientePageRoutingModule);



/***/ }),

/***/ "./src/app/listado-paciente/listado-paciente.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/listado-paciente/listado-paciente.module.ts ***!
  \*************************************************************/
/*! exports provided: ListadoPacientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoPacientePageModule", function() { return ListadoPacientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _listado_paciente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listado-paciente-routing.module */ "./src/app/listado-paciente/listado-paciente-routing.module.ts");
/* harmony import */ var _listado_paciente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listado-paciente.page */ "./src/app/listado-paciente/listado-paciente.page.ts");







let ListadoPacientePageModule = class ListadoPacientePageModule {
};
ListadoPacientePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _listado_paciente_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListadoPacientePageRoutingModule"]
        ],
        declarations: [_listado_paciente_page__WEBPACK_IMPORTED_MODULE_6__["ListadoPacientePage"]]
    })
], ListadoPacientePageModule);



/***/ }),

/***/ "./src/app/listado-paciente/listado-paciente.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/listado-paciente/listado-paciente.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.top {\n  margin-top: 7%;\n  margin-left: 30%;\n  margin-right: 30%;\n}\n\n.color {\n  color: white;\n}\n\n.right {\n  margin-top: -4%;\n  margin-right: 60%;\n}\n\n.left {\n  margin-top: 1%;\n  margin-left: 72%;\n}\n\nion-button {\n  margin-top: 2%;\n  align-content: flex-start;\n  margin-left: 30%;\n  margin-right: 30%;\n}\n\nion-img {\n  margin-right: 78%;\n}\n\nion-content {\n  --ion-background-color: #013CA6;\n}\n\nion-item {\n  margin-top: 1%;\n  margin-right: 40%;\n  margin-left: 0.8%;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-item .der {\n  margin-left: 2%;\n}\n\nion-item .pointer {\n  cursor: pointer;\n}\n\nion-round-group {\n  margin-left: 20%;\n  margin-right: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGFkby1wYWNpZW50ZS9DOlxcVXNlcnNcXGpvaG5jXFxEb2N1bWVudHNcXE1ldG9kb3NcXFVBTUkvc3JjXFxhcHBcXGxpc3RhZG8tcGFjaWVudGVcXGxpc3RhZG8tcGFjaWVudGUucGFnZS5zY3NzIiwic3JjL2FwcC9saXN0YWRvLXBhY2llbnRlL2xpc3RhZG8tcGFjaWVudGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURBQTtFQUNJLFlBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0lKOztBREZBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDS0o7O0FESEE7RUFFSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDS0o7O0FERkE7RUFDSSxpQkFBQTtBQ0tKOztBREhBO0VBQ0ksK0JBQUE7QUNNSjs7QURKQTtFQUlJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBSUEsd0JBQUE7VUFBQSx1QkFBQTtBQ0NKOztBRFZJO0VBQ0ksZUFBQTtBQ1lSOztBRFBJO0VBQ0ksZUFBQTtBQ1NSOztBREpBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvbGlzdGFkby1wYWNpZW50ZS9saXN0YWRvLXBhY2llbnRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi50b3B7XHJcbiAgICBtYXJnaW4tdG9wOiA3JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwJTtcclxufVxyXG4uY29sb3J7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnJpZ2h0e1xyXG4gICAgbWFyZ2luLXRvcDogLTQlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2MCU7XHJcbn1cclxuLmxlZnR7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MiU7XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgIFxyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMzAlO1xyXG4gICAgXHJcbn1cclxuaW9uLWltZ3tcclxuICAgIG1hcmdpbi1yaWdodDogNzglO1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAxM0NBNjtcclxufVxyXG5pb24taXRlbXtcclxuICAgIC5kZXJ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgfVxyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAuOCU7XHJcbiAgICAucG9pbnRlcntcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbn1cclxuaW9uLXJvdW5kLWdyb3Vwe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMjAlO1xyXG59XHJcbiIsIi5jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udG9wIHtcbiAgbWFyZ2luLXRvcDogNyU7XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIG1hcmdpbi1yaWdodDogMzAlO1xufVxuXG4uY29sb3Ige1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5yaWdodCB7XG4gIG1hcmdpbi10b3A6IC00JTtcbiAgbWFyZ2luLXJpZ2h0OiA2MCU7XG59XG5cbi5sZWZ0IHtcbiAgbWFyZ2luLXRvcDogMSU7XG4gIG1hcmdpbi1sZWZ0OiA3MiU7XG59XG5cbmlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgbWFyZ2luLXJpZ2h0OiAzMCU7XG59XG5cbmlvbi1pbWcge1xuICBtYXJnaW4tcmlnaHQ6IDc4JTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDEzQ0E2O1xufVxuXG5pb24taXRlbSB7XG4gIG1hcmdpbi10b3A6IDElO1xuICBtYXJnaW4tcmlnaHQ6IDQwJTtcbiAgbWFyZ2luLWxlZnQ6IDAuOCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW9uLWl0ZW0gLmRlciB7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cbmlvbi1pdGVtIC5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pb24tcm91bmQtZ3JvdXAge1xuICBtYXJnaW4tbGVmdDogMjAlO1xuICBtYXJnaW4tcmlnaHQ6IDIwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/listado-paciente/listado-paciente.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/listado-paciente/listado-paciente.page.ts ***!
  \***********************************************************/
/*! exports provided: ListadoPacientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoPacientePage", function() { return ListadoPacientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_bd_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/bd.service */ "./src/app/services/bd.service.ts");




let ListadoPacientePage = class ListadoPacientePage {
    constructor(navCtrl, BD) {
        this.navCtrl = navCtrl;
        this.BD = BD;
    }
    ngOnInit() {
        this.pacientes = [];
        this.BD.listadoPaciente();
        setTimeout(a => this.getPacientes(), 500);
        this.BD.ListadoPacientes = [];
    }
    getPacientes() {
        this.pacientes = this.BD.ListadoPacientes;
        console.log(this.pacientes);
    }
    onSearchTerm(ev) {
        const val = ev.detail.value;
        if (val && val.trim() !== '') {
            this.pacientes = this.pacientes.filter(term => {
                return term.Matricula.indexOf(val.trim().toLowerCase()) > -1;
            });
        }
        else {
            this.ngOnInit();
        }
    }
    goToConsulta(Matricula) {
        this.navCtrl.navigateForward(['/consulta', Matricula]);
    }
    goToRegistraPaciente() {
        this.navCtrl.navigateForward('registro-paciente');
    }
};
ListadoPacientePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_bd_service__WEBPACK_IMPORTED_MODULE_3__["BDService"] }
];
ListadoPacientePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listado-paciente',
        template: __webpack_require__(/*! raw-loader!./listado-paciente.page.html */ "./node_modules/raw-loader/index.js!./src/app/listado-paciente/listado-paciente.page.html"),
        styles: [__webpack_require__(/*! ./listado-paciente.page.scss */ "./src/app/listado-paciente/listado-paciente.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_bd_service__WEBPACK_IMPORTED_MODULE_3__["BDService"]])
], ListadoPacientePage);



/***/ })

}]);
//# sourceMappingURL=listado-paciente-listado-paciente-module-es2015.js.map