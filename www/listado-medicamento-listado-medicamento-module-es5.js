(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listado-medicamento-listado-medicamento-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/listado-medicamento/listado-medicamento.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/listado-medicamento/listado-medicamento.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"left\">\n      <ion-button color=\"light\" (click)=\"goToRegistroMedicamento()\"> Agregar nuevo medicamento</ion-button>\n    </div>\n      <div class=\"right\">\n      <ion-searchbar color=\"light\" \n      (ionChange)=\"onSearchTerm($event)\" \n      placeholder=\"Buscar matricula\"\n      ></ion-searchbar>\n    </div>\n      <div>\n        <ion-item color=\"light\">\n        <ion-label>Nombre</ion-label>\n        <ion-label>Observaciones</ion-label>\n      </ion-item>\n      </div>\n      <ion-list>\n        <ion-item *ngFor=\"let item of medicamentos\" (click)=\"goToModificarMedicamento(item.Nombre)\" color=\"light\">\n          <ion-label>{{item.Nombre}}</ion-label>\n          <ion-label>{{item.Observaciones}}</ion-label>\n          <ion-icon src=\"../assets/add.svg\" class=\"pointer\"></ion-icon>\n        </ion-item>\n      </ion-list>\n    </ion-content>"

/***/ }),

/***/ "./src/app/listado-medicamento/listado-medicamento-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/listado-medicamento/listado-medicamento-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ListadoMedicamentoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoMedicamentoPageRoutingModule", function() { return ListadoMedicamentoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _listado_medicamento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listado-medicamento.page */ "./src/app/listado-medicamento/listado-medicamento.page.ts");




var routes = [
    {
        path: '',
        component: _listado_medicamento_page__WEBPACK_IMPORTED_MODULE_3__["ListadoMedicamentoPage"]
    }
];
var ListadoMedicamentoPageRoutingModule = /** @class */ (function () {
    function ListadoMedicamentoPageRoutingModule() {
    }
    ListadoMedicamentoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ListadoMedicamentoPageRoutingModule);
    return ListadoMedicamentoPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/listado-medicamento/listado-medicamento.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/listado-medicamento/listado-medicamento.module.ts ***!
  \*******************************************************************/
/*! exports provided: ListadoMedicamentoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoMedicamentoPageModule", function() { return ListadoMedicamentoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _listado_medicamento_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listado-medicamento-routing.module */ "./src/app/listado-medicamento/listado-medicamento-routing.module.ts");
/* harmony import */ var _listado_medicamento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listado-medicamento.page */ "./src/app/listado-medicamento/listado-medicamento.page.ts");







var ListadoMedicamentoPageModule = /** @class */ (function () {
    function ListadoMedicamentoPageModule() {
    }
    ListadoMedicamentoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _listado_medicamento_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListadoMedicamentoPageRoutingModule"]
            ],
            declarations: [_listado_medicamento_page__WEBPACK_IMPORTED_MODULE_6__["ListadoMedicamentoPage"]]
        })
    ], ListadoMedicamentoPageModule);
    return ListadoMedicamentoPageModule;
}());



/***/ }),

/***/ "./src/app/listado-medicamento/listado-medicamento.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/listado-medicamento/listado-medicamento.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.top {\n  margin-top: 7%;\n  margin-left: 30%;\n  margin-right: 30%;\n}\n\n.color {\n  color: white;\n}\n\n.right {\n  margin-top: -4%;\n  margin-right: 60%;\n}\n\n.left {\n  margin-top: 1%;\n  margin-left: 68%;\n}\n\nion-button {\n  margin-top: 2%;\n  align-content: flex-start;\n  margin-left: 30%;\n  margin-right: 30%;\n}\n\nion-img {\n  margin-right: 78%;\n}\n\nion-content {\n  --ion-background-color: #013CA6;\n}\n\nion-item {\n  margin-top: 1%;\n  margin-right: 40%;\n  margin-left: 0.8%;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-item .der {\n  margin-left: 2%;\n}\n\nion-item .pointer {\n  cursor: pointer;\n}\n\nion-round-group {\n  margin-left: 20%;\n  margin-right: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGFkby1tZWRpY2FtZW50by9DOlxcVXNlcnNcXGpvaG5jXFxEb2N1bWVudHNcXE1ldG9kb3NcXFVBTUkvc3JjXFxhcHBcXGxpc3RhZG8tbWVkaWNhbWVudG9cXGxpc3RhZG8tbWVkaWNhbWVudG8ucGFnZS5zY3NzIiwic3JjL2FwcC9saXN0YWRvLW1lZGljYW1lbnRvL2xpc3RhZG8tbWVkaWNhbWVudG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURBQTtFQUNJLFlBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0lKOztBREZBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDS0o7O0FESEE7RUFFSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDS0o7O0FERkE7RUFDSSxpQkFBQTtBQ0tKOztBREhBO0VBQ0ksK0JBQUE7QUNNSjs7QURKQTtFQUlJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBSUEsd0JBQUE7VUFBQSx1QkFBQTtBQ0NKOztBRFZJO0VBQ0ksZUFBQTtBQ1lSOztBRFBJO0VBQ0ksZUFBQTtBQ1NSOztBREpBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvbGlzdGFkby1tZWRpY2FtZW50by9saXN0YWRvLW1lZGljYW1lbnRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi50b3B7XHJcbiAgICBtYXJnaW4tdG9wOiA3JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwJTtcclxufVxyXG4uY29sb3J7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnJpZ2h0e1xyXG4gICAgbWFyZ2luLXRvcDogLTQlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2MCU7XHJcbn1cclxuLmxlZnR7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA2OCU7XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgIFxyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMzAlO1xyXG4gICAgXHJcbn1cclxuaW9uLWltZ3tcclxuICAgIG1hcmdpbi1yaWdodDogNzglO1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAxM0NBNjtcclxufVxyXG5pb24taXRlbXtcclxuICAgIC5kZXJ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgfVxyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAuOCU7XHJcbiAgICAucG9pbnRlcntcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbn1cclxuaW9uLXJvdW5kLWdyb3Vwe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMjAlO1xyXG59IiwiLmNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50b3Age1xuICBtYXJnaW4tdG9wOiA3JTtcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgbWFyZ2luLXJpZ2h0OiAzMCU7XG59XG5cbi5jb2xvciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJpZ2h0IHtcbiAgbWFyZ2luLXRvcDogLTQlO1xuICBtYXJnaW4tcmlnaHQ6IDYwJTtcbn1cblxuLmxlZnQge1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgbWFyZ2luLWxlZnQ6IDY4JTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tbGVmdDogMzAlO1xuICBtYXJnaW4tcmlnaHQ6IDMwJTtcbn1cblxuaW9uLWltZyB7XG4gIG1hcmdpbi1yaWdodDogNzglO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMTNDQTY7XG59XG5cbmlvbi1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMSU7XG4gIG1hcmdpbi1yaWdodDogNDAlO1xuICBtYXJnaW4tbGVmdDogMC44JTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5pb24taXRlbSAuZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuaW9uLWl0ZW0gLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlvbi1yb3VuZC1ncm91cCB7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG4gIG1hcmdpbi1yaWdodDogMjAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/listado-medicamento/listado-medicamento.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/listado-medicamento/listado-medicamento.page.ts ***!
  \*****************************************************************/
/*! exports provided: ListadoMedicamentoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoMedicamentoPage", function() { return ListadoMedicamentoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_bd_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/bd.service */ "./src/app/services/bd.service.ts");




var ListadoMedicamentoPage = /** @class */ (function () {
    function ListadoMedicamentoPage(navCtrl, BD) {
        this.navCtrl = navCtrl;
        this.BD = BD;
    }
    ListadoMedicamentoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.medicamentos = [];
        this.BD.listadoMedicamento();
        setTimeout(function (a) { return _this.getMedicamentos(); }, 500);
        this.BD.ListadoMedicamentos = [];
    };
    ListadoMedicamentoPage.prototype.getMedicamentos = function () {
        this.medicamentos = this.BD.ListadoMedicamentos;
        console.log(this.medicamentos);
        this.BD.ListadoPacientes = [];
    };
    ListadoMedicamentoPage.prototype.onSearchTerm = function (ev) {
        var val = ev.detail.value;
        if (val && val.trim() !== '') {
            this.medicamentos = this.medicamentos.filter(function (term) {
                return term.medicamentos.indexOf(val.trim().toLowerCase()) > -1;
            });
        }
        else {
            this.ngOnInit();
        }
    };
    ListadoMedicamentoPage.prototype.goToRegistroMedicamento = function () {
        this.navCtrl.navigateForward('registro-medicamento');
    };
    ListadoMedicamentoPage.prototype.goToModificarMedicamento = function (nombre) {
        this.navCtrl.navigateForward(['registro-medicamento', nombre]);
    };
    ListadoMedicamentoPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _services_bd_service__WEBPACK_IMPORTED_MODULE_3__["BDService"] }
    ]; };
    ListadoMedicamentoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listado-medicamento',
            template: __webpack_require__(/*! raw-loader!./listado-medicamento.page.html */ "./node_modules/raw-loader/index.js!./src/app/listado-medicamento/listado-medicamento.page.html"),
            styles: [__webpack_require__(/*! ./listado-medicamento.page.scss */ "./src/app/listado-medicamento/listado-medicamento.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_bd_service__WEBPACK_IMPORTED_MODULE_3__["BDService"]])
    ], ListadoMedicamentoPage);
    return ListadoMedicamentoPage;
}());



/***/ })

}]);
//# sourceMappingURL=listado-medicamento-listado-medicamento-module-es5.js.map