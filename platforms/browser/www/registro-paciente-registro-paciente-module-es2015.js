(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registro-paciente-registro-paciente-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/registro-paciente/registro-paciente.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/registro-paciente/registro-paciente.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"top\">\n    <ion-item color=\"light\">\n      <ion-label>Matricula:</ion-label>\n      <ion-input [(ngModel)]=\"matricula\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item color=\"light\">\n      <ion-label>Carrera:</ion-label>\n      <ion-input [(ngModel)]=\"carrera\" type=\"tex\"></ion-input>\n    </ion-item>\n    <ion-item color=\"light\">\n      <ion-label>Edad: </ion-label>\n      <ion-input [(ngModel)]=\"edad\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-radio-group [(ngModel)]=\"sexo\"> \n   <ion-row >\n     <ion-col>\n       <ion-item color=\"light\">\n         <ion-icon src=\"../assets/woman.svg\" item-start></ion-icon>\n         <ion-label>Mujer</ion-label>\n         <ion-radio value=\"M\"></ion-radio>\n       </ion-item>\n     </ion-col>\n     <ion-col>\n        <ion-item color=\"light\" shape=\"round\">\n          <ion-icon src=\"../assets/man.svg\" item-start></ion-icon>\n          <ion-label>Hombre</ion-label>\n          <ion-radio value=\"H\"></ion-radio>\n        </ion-item>\n      </ion-col>\n   </ion-row>\n  </ion-radio-group>\n   </div>\n    <ion-button expand=\"full\" shape=\"round\" color=\"tertiary\" (click)=\"guardar()\">Guardar</ion-button>\n  \n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/registro-paciente/registro-paciente-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/registro-paciente/registro-paciente-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: RegistroPacientePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPacientePageRoutingModule", function() { return RegistroPacientePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _registro_paciente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registro-paciente.page */ "./src/app/registro-paciente/registro-paciente.page.ts");




const routes = [
    {
        path: '',
        component: _registro_paciente_page__WEBPACK_IMPORTED_MODULE_3__["RegistroPacientePage"]
    }
];
let RegistroPacientePageRoutingModule = class RegistroPacientePageRoutingModule {
};
RegistroPacientePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistroPacientePageRoutingModule);



/***/ }),

/***/ "./src/app/registro-paciente/registro-paciente.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/registro-paciente/registro-paciente.module.ts ***!
  \***************************************************************/
/*! exports provided: RegistroPacientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPacientePageModule", function() { return RegistroPacientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registro_paciente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registro-paciente-routing.module */ "./src/app/registro-paciente/registro-paciente-routing.module.ts");
/* harmony import */ var _registro_paciente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro-paciente.page */ "./src/app/registro-paciente/registro-paciente.page.ts");







let RegistroPacientePageModule = class RegistroPacientePageModule {
};
RegistroPacientePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registro_paciente_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroPacientePageRoutingModule"]
        ],
        declarations: [_registro_paciente_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPacientePage"]]
    })
], RegistroPacientePageModule);



/***/ }),

/***/ "./src/app/registro-paciente/registro-paciente.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/registro-paciente/registro-paciente.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.top {\n  margin-top: 7%;\n  margin-left: 30%;\n  margin-right: 30%;\n}\n\nion-button {\n  margin-top: 2%;\n  align-content: flex-start;\n  margin-left: 30%;\n  margin-right: 30%;\n}\n\nion-img {\n  margin-right: 78%;\n}\n\nion-content {\n  --ion-background-color: #013CA6;\n}\n\nion-item {\n  margin-top: 1%;\n}\n\nion-item .der {\n  margin-left: 2%;\n}\n\nion-round-group {\n  margin-left: 20%;\n  margin-right: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cm8tcGFjaWVudGUvQzpcXFVzZXJzXFxqb2huY1xcRG9jdW1lbnRzXFxNZXRvZG9zXFxVQU1JL3NyY1xcYXBwXFxyZWdpc3Ryby1wYWNpZW50ZVxccmVnaXN0cm8tcGFjaWVudGUucGFnZS5zY3NzIiwic3JjL2FwcC9yZWdpc3Ryby1wYWNpZW50ZS9yZWdpc3Ryby1wYWNpZW50ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFBO0VBRUksY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0VKOztBRENBO0VBQ0ksaUJBQUE7QUNFSjs7QURBQTtFQUNJLCtCQUFBO0FDR0o7O0FEREE7RUFJSSxjQUFBO0FDQ0o7O0FESkk7RUFDSSxlQUFBO0FDTVI7O0FEREE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Ryby1wYWNpZW50ZS9yZWdpc3Ryby1wYWNpZW50ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVye1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4udG9we1xyXG4gICAgbWFyZ2luLXRvcDogNyU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMCU7XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgIFxyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMzAlO1xyXG4gICAgXHJcbn1cclxuaW9uLWltZ3tcclxuICAgIG1hcmdpbi1yaWdodDogNzglO1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAxM0NBNjtcclxufVxyXG5pb24taXRlbXtcclxuICAgIC5kZXJ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgfVxyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcblxyXG59XHJcbmlvbi1yb3VuZC1ncm91cHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcclxufVxyXG4iLCIuY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRvcCB7XG4gIG1hcmdpbi10b3A6IDclO1xuICBtYXJnaW4tbGVmdDogMzAlO1xuICBtYXJnaW4tcmlnaHQ6IDMwJTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tbGVmdDogMzAlO1xuICBtYXJnaW4tcmlnaHQ6IDMwJTtcbn1cblxuaW9uLWltZyB7XG4gIG1hcmdpbi1yaWdodDogNzglO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMTNDQTY7XG59XG5cbmlvbi1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMSU7XG59XG5pb24taXRlbSAuZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuXG5pb24tcm91bmQtZ3JvdXAge1xuICBtYXJnaW4tbGVmdDogMjAlO1xuICBtYXJnaW4tcmlnaHQ6IDIwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/registro-paciente/registro-paciente.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/registro-paciente/registro-paciente.page.ts ***!
  \*************************************************************/
/*! exports provided: RegistroPacientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPacientePage", function() { return RegistroPacientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_bd_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/bd.service */ "./src/app/services/bd.service.ts");




let RegistroPacientePage = class RegistroPacientePage {
    constructor(navCtrl, BD) {
        this.navCtrl = navCtrl;
        this.BD = BD;
    }
    ngOnInit() {
    }
    guardar() {
        this.BD.guardarPaciente(this.matricula, this.carrera, this.edad, this.sexo);
        this.navCtrl.navigateForward('menu');
    }
};
RegistroPacientePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_bd_service__WEBPACK_IMPORTED_MODULE_3__["BDService"] }
];
RegistroPacientePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registro-paciente',
        template: __webpack_require__(/*! raw-loader!./registro-paciente.page.html */ "./node_modules/raw-loader/index.js!./src/app/registro-paciente/registro-paciente.page.html"),
        styles: [__webpack_require__(/*! ./registro-paciente.page.scss */ "./src/app/registro-paciente/registro-paciente.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_bd_service__WEBPACK_IMPORTED_MODULE_3__["BDService"]])
], RegistroPacientePage);



/***/ })

}]);
//# sourceMappingURL=registro-paciente-registro-paciente-module-es2015.js.map