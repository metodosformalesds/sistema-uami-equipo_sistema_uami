(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/menu/menu.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu/menu.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content>\n  <div class=\"left\">\n    <ion-button expand=\"full\" (click)=\"logout()\" color=\"danger\" size=\"medium\">Cerrar Sesion</ion-button>\n  </div>\n  <div class=\"top\">\n  <ion-button expand=\"full\" shape=\"round\" (click)=\"goToListadoMedicamento()\" color=\"light\" size=\"large\">Registrar Medicamento</ion-button>\n  <ion-button expand=\"full\" shape=\"round\" (click)=\"goToListadoPaciente()\"    color=\"light\" size=\"large\">Registrar consulta</ion-button>\n  <ion-button *ngIf=\"ROL1\" expand=\"full\" shape=\"round\" (click)=\"goToReporte()\" color=\"light\" size=\"large\">Generar reporte</ion-button>\n  <ion-button expand=\"full\" shape=\"round\" (click)=\"goToListadoConsulta()\"   color=\"light\" size=\"large\">Modificar consulta</ion-button>\n  <ion-button expand=\"full\" shape=\"round\" (click)=\"goToRegistroPaciente()\"   color=\"light\" size=\"large\">Registrar paciente</ion-button>\n  <ion-button *ngIf=\"ROL1\" expand=\"full\" shape=\"round\" (click)=\"goToRegistroUsuario()\" color=\"light\" size=\"large\">Registrar usuario</ion-button>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/menu/menu-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/menu/menu-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function() { return MenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.page */ "./src/app/menu/menu.page.ts");




const routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"]
    }
];
let MenuPageRoutingModule = class MenuPageRoutingModule {
};
MenuPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuPageRoutingModule);



/***/ }),

/***/ "./src/app/menu/menu.module.ts":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-routing.module */ "./src/app/menu/menu-routing.module.ts");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/menu/menu.page.ts");







let MenuPageModule = class MenuPageModule {
};
MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPageRoutingModule"]
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
    })
], MenuPageModule);



/***/ }),

/***/ "./src/app/menu/menu.page.scss":
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.top {\n  align-content: center;\n  margin-top: 4%;\n  margin-right: 30%;\n  margin-left: 30%;\n}\n\n.left {\n  margin-top: 1%;\n  margin-left: 85%;\n}\n\nion-button {\n  margin-top: 2%;\n  align-content: flex-start;\n}\n\nion-img {\n  margin-right: 78%;\n}\n\nion-content {\n  --ion-background-color: #013CA6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9DOlxcVXNlcnNcXGpvaG5jXFxEb2N1bWVudHNcXE1ldG9kb3NcXFVBTUkvc3JjXFxhcHBcXG1lbnVcXG1lbnUucGFnZS5zY3NzIiwic3JjL2FwcC9tZW51L21lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDR0o7O0FEREE7RUFFSSxjQUFBO0VBQ0EseUJBQUE7QUNHSjs7QURDQTtFQUNJLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSwrQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi50b3B7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA0JTtcclxuICAgIG1hcmdpbi1yaWdodDogMzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxufVxyXG4ubGVmdHtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDg1JTtcclxufVxyXG5pb24tYnV0dG9ue1xyXG4gICAgXHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBcclxuICAgIFxyXG59XHJcbmlvbi1pbWd7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDc4JTtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMTNDQTY7XHJcbn0iLCIuY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRvcCB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNCU7XG4gIG1hcmdpbi1yaWdodDogMzAlO1xuICBtYXJnaW4tbGVmdDogMzAlO1xufVxuXG4ubGVmdCB7XG4gIG1hcmdpbi10b3A6IDElO1xuICBtYXJnaW4tbGVmdDogODUlO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbmlvbi1pbWcge1xuICBtYXJnaW4tcmlnaHQ6IDc4JTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDEzQ0E2O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/menu/menu.page.ts":
/*!***********************************!*\
  !*** ./src/app/menu/menu.page.ts ***!
  \***********************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_bd_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/bd.service */ "./src/app/services/bd.service.ts");




let MenuPage = class MenuPage {
    constructor(navCtrl, BD) {
        this.navCtrl = navCtrl;
        this.BD = BD;
        this.ROL1 = false;
    }
    ngOnInit() {
        this.BD.rol();
        setTimeout(a => this.getRol(), 500);
    }
    goToListadoMedicamento() {
        this.navCtrl.navigateForward('listado-medicamento');
    }
    goToListadoPaciente() {
        this.navCtrl.navigateForward('listado-paciente');
    }
    goToListadoConsulta() {
        this.navCtrl.navigateForward('listado-consulta');
    }
    goToRegistroPaciente() {
        this.navCtrl.navigateForward('registro-paciente');
    }
    goToRegistroUsuario() {
        this.navCtrl.navigateForward('registro-usuario');
    }
    goToReporte() {
        this.navCtrl.navigateForward('reporte');
    }
    getRol() {
        this.ROL = this.BD.ROL;
        console.log(this.ROL);
        if (this.ROL == "ADMINISTRADOR") {
            this.ROL1 = true;
        }
    }
    logout() {
        this.BD.logoutUser().then(a => this.navCtrl.navigateRoot('home'));
    }
};
MenuPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_bd_service__WEBPACK_IMPORTED_MODULE_3__["BDService"] }
];
MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(/*! raw-loader!./menu.page.html */ "./node_modules/raw-loader/index.js!./src/app/menu/menu.page.html"),
        styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/menu/menu.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_bd_service__WEBPACK_IMPORTED_MODULE_3__["BDService"]])
], MenuPage);



/***/ })

}]);
//# sourceMappingURL=menu-menu-module-es2015.js.map