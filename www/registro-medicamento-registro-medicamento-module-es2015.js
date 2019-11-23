(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registro-medicamento-registro-medicamento-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/registro-medicamento/registro-medicamento.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/registro-medicamento/registro-medicamento.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"top\">\n  <ion-item color=\"light\">\n    <ion-label>Nombre:</ion-label>\n    <ion-input [(ngModel)]=\"nombre\" type=\"text\"></ion-input>\n  </ion-item>\n  <ion-item color=\"light\">\n    <ion-label>Cantidad:</ion-label>\n    <ion-input [(ngModel)]=\"cantidad\" type=\"number\"></ion-input>\n  </ion-item>\n  <ion-item color=\"light\">\n    <ion-label>Observaciones: </ion-label>\n    <ion-input [(ngModel)]=\"observaciones\" type=\"text\"></ion-input>\n  </ion-item>\n</div>\n  <ion-button expand=\"full\" shape=\"round\" color=\"tertiary\" (click)=\"guardarMedicamento()\">Guardar</ion-button>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/registro-medicamento/registro-medicamento-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/registro-medicamento/registro-medicamento-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: RegistroMedicamentoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroMedicamentoPageRoutingModule", function() { return RegistroMedicamentoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _registro_medicamento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registro-medicamento.page */ "./src/app/registro-medicamento/registro-medicamento.page.ts");




const routes = [
    {
        path: '',
        component: _registro_medicamento_page__WEBPACK_IMPORTED_MODULE_3__["RegistroMedicamentoPage"]
    }
];
let RegistroMedicamentoPageRoutingModule = class RegistroMedicamentoPageRoutingModule {
};
RegistroMedicamentoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistroMedicamentoPageRoutingModule);



/***/ }),

/***/ "./src/app/registro-medicamento/registro-medicamento.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/registro-medicamento/registro-medicamento.module.ts ***!
  \*********************************************************************/
/*! exports provided: RegistroMedicamentoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroMedicamentoPageModule", function() { return RegistroMedicamentoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registro_medicamento_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registro-medicamento-routing.module */ "./src/app/registro-medicamento/registro-medicamento-routing.module.ts");
/* harmony import */ var _registro_medicamento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro-medicamento.page */ "./src/app/registro-medicamento/registro-medicamento.page.ts");







let RegistroMedicamentoPageModule = class RegistroMedicamentoPageModule {
};
RegistroMedicamentoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registro_medicamento_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroMedicamentoPageRoutingModule"]
        ],
        declarations: [_registro_medicamento_page__WEBPACK_IMPORTED_MODULE_6__["RegistroMedicamentoPage"]]
    })
], RegistroMedicamentoPageModule);



/***/ }),

/***/ "./src/app/registro-medicamento/registro-medicamento.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/registro-medicamento/registro-medicamento.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.top {\n  margin-top: 7%;\n  margin-right: 30%;\n  margin-left: 30%;\n}\n\nion-button {\n  margin-top: 2%;\n  align-content: flex-start;\n  margin-right: 30%;\n  margin-left: 30%;\n}\n\nion-img {\n  margin-right: 78%;\n}\n\nion-content {\n  --ion-background-color: #013CA6;\n}\n\nion-item {\n  margin-top: 1%;\n  margin-left: 20%;\n  margin-right: 20%;\n}\n\nion-item .der {\n  margin-left: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cm8tbWVkaWNhbWVudG8vQzpcXFVzZXJzXFxqb2huY1xcRG9jdW1lbnRzXFxNZXRvZG9zXFxVQU1JL3NyY1xcYXBwXFxyZWdpc3Ryby1tZWRpY2FtZW50b1xccmVnaXN0cm8tbWVkaWNhbWVudG8ucGFnZS5zY3NzIiwic3JjL2FwcC9yZWdpc3Ryby1tZWRpY2FtZW50by9yZWdpc3Ryby1tZWRpY2FtZW50by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREFBO0VBRUksY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0VKOztBRENBO0VBQ0ksaUJBQUE7QUNFSjs7QURBQTtFQUNJLCtCQUFBO0FDR0o7O0FEREE7RUFJSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRE5JO0VBQ0ksZUFBQTtBQ1FSIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cm8tbWVkaWNhbWVudG8vcmVnaXN0cm8tbWVkaWNhbWVudG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcntcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnRvcHtcclxuICAgIG1hcmdpbi10b3A6IDclO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG59XHJcbmlvbi1idXR0b257XHJcbiAgICBcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbi1yaWdodDogMzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICAgIFxyXG59XHJcbmlvbi1pbWd7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDc4JTtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMTNDQTY7XHJcbn1cclxuaW9uLWl0ZW17XHJcbiAgICAuZGVye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIH1cclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMjAlO1xyXG59XHJcbiIsIi5jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udG9wIHtcbiAgbWFyZ2luLXRvcDogNyU7XG4gIG1hcmdpbi1yaWdodDogMzAlO1xuICBtYXJnaW4tbGVmdDogMzAlO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1yaWdodDogMzAlO1xuICBtYXJnaW4tbGVmdDogMzAlO1xufVxuXG5pb24taW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiA3OCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAxM0NBNjtcbn1cblxuaW9uLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgbWFyZ2luLXJpZ2h0OiAyMCU7XG59XG5pb24taXRlbSAuZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/registro-medicamento/registro-medicamento.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/registro-medicamento/registro-medicamento.page.ts ***!
  \*******************************************************************/
/*! exports provided: RegistroMedicamentoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroMedicamentoPage", function() { return RegistroMedicamentoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_bd_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/bd.service */ "./src/app/services/bd.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RegistroMedicamentoPage = class RegistroMedicamentoPage {
    constructor(navCtrl, BD, activeRoute) {
        this.navCtrl = navCtrl;
        this.BD = BD;
        this.activeRoute = activeRoute;
        this.observaciones = "";
    }
    ngOnInit() {
        this.nombre = this.activeRoute.snapshot.paramMap.get('nombre');
    }
    guardarMedicamento() {
        this.BD.guardarMedicamento(this.nombre, this.cantidad, this.observaciones);
        this.navCtrl.navigateForward('menu');
    }
};
RegistroMedicamentoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_bd_service__WEBPACK_IMPORTED_MODULE_3__["BDService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
RegistroMedicamentoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registro-medicamento',
        template: __webpack_require__(/*! raw-loader!./registro-medicamento.page.html */ "./node_modules/raw-loader/index.js!./src/app/registro-medicamento/registro-medicamento.page.html"),
        styles: [__webpack_require__(/*! ./registro-medicamento.page.scss */ "./src/app/registro-medicamento/registro-medicamento.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_bd_service__WEBPACK_IMPORTED_MODULE_3__["BDService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], RegistroMedicamentoPage);



/***/ })

}]);
//# sourceMappingURL=registro-medicamento-registro-medicamento-module-es2015.js.map