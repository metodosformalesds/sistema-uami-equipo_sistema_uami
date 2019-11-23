(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registro-usuario-registro-usuario-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/registro-usuario/registro-usuario.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/registro-usuario/registro-usuario.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"top\">\n    <ion-item color=\"light\">\n      <ion-label>Nickname:</ion-label>\n      <ion-input disabled=\"true\" [(ngModel)]=\"nickname\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item color=\"light\">\n      <ion-label>Contraseña:</ion-label>\n      <ion-input disabled=\"true\" [(ngModel)]=\"contrasena\" type=\"tex\"></ion-input>\n    </ion-item>\n    <ion-item color=\"light\">\n      <ion-label>Email: </ion-label>\n      <ion-input [(ngModel)]=\"email\" type=\"email\"></ion-input>\n    </ion-item>\n    <ion-radio-group [(ngModel)]=\"ROL\"> \n   <ion-row >\n     <ion-col>\n       <ion-item color=\"light\">\n         <ion-icon src=\"../assets/boss.svg\" item-start></ion-icon>\n         <ion-label>Administrador</ion-label>\n         <ion-radio value=\"ADMINISTRADOR\"></ion-radio>\n       </ion-item>\n     </ion-col>\n     <ion-col>\n        <ion-item color=\"light\" shape=\"round\">\n          <ion-icon src=\"../assets/nurse.svg\" item-start></ion-icon>\n          <ion-label>Enfermera</ion-label>\n          <ion-radio value=\"ENFERMERA\"></ion-radio>\n        </ion-item>\n      </ion-col>\n   </ion-row>\n  </ion-radio-group>\n   </div>\n    <ion-button expand=\"full\" shape=\"round\" color=\"tertiary\" (click)=\"guardar()\">Guardar</ion-button>\n  \n  </ion-content>\n"

/***/ }),

/***/ "./src/app/registro-usuario/registro-usuario-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/registro-usuario/registro-usuario-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: RegistroUsuarioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroUsuarioPageRoutingModule", function() { return RegistroUsuarioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _registro_usuario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registro-usuario.page */ "./src/app/registro-usuario/registro-usuario.page.ts");




var routes = [
    {
        path: '',
        component: _registro_usuario_page__WEBPACK_IMPORTED_MODULE_3__["RegistroUsuarioPage"]
    }
];
var RegistroUsuarioPageRoutingModule = /** @class */ (function () {
    function RegistroUsuarioPageRoutingModule() {
    }
    RegistroUsuarioPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RegistroUsuarioPageRoutingModule);
    return RegistroUsuarioPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/registro-usuario/registro-usuario.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/registro-usuario/registro-usuario.module.ts ***!
  \*************************************************************/
/*! exports provided: RegistroUsuarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroUsuarioPageModule", function() { return RegistroUsuarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registro_usuario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registro-usuario-routing.module */ "./src/app/registro-usuario/registro-usuario-routing.module.ts");
/* harmony import */ var _registro_usuario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro-usuario.page */ "./src/app/registro-usuario/registro-usuario.page.ts");







var RegistroUsuarioPageModule = /** @class */ (function () {
    function RegistroUsuarioPageModule() {
    }
    RegistroUsuarioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _registro_usuario_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroUsuarioPageRoutingModule"]
            ],
            declarations: [_registro_usuario_page__WEBPACK_IMPORTED_MODULE_6__["RegistroUsuarioPage"]]
        })
    ], RegistroUsuarioPageModule);
    return RegistroUsuarioPageModule;
}());



/***/ }),

/***/ "./src/app/registro-usuario/registro-usuario.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/registro-usuario/registro-usuario.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.top {\n  margin-top: 7%;\n  margin-left: 30%;\n  margin-right: 30%;\n}\n\nion-button {\n  margin-top: 2%;\n  align-content: flex-start;\n  margin-left: 30%;\n  margin-right: 30%;\n}\n\nion-img {\n  margin-right: 78%;\n}\n\nion-content {\n  --ion-background-color: #013CA6;\n}\n\nion-item {\n  margin-top: 1%;\n}\n\nion-item .der {\n  margin-left: 2%;\n}\n\nion-round-group {\n  margin-left: 20%;\n  margin-right: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cm8tdXN1YXJpby9DOlxcVXNlcnNcXGpvaG5jXFxEb2N1bWVudHNcXE1ldG9kb3NcXFVBTUkvc3JjXFxhcHBcXHJlZ2lzdHJvLXVzdWFyaW9cXHJlZ2lzdHJvLXVzdWFyaW8ucGFnZS5zY3NzIiwic3JjL2FwcC9yZWdpc3Ryby11c3VhcmlvL3JlZ2lzdHJvLXVzdWFyaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURBQTtFQUVJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURDQTtFQUNJLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSwrQkFBQTtBQ0dKOztBRERBO0VBSUksY0FBQTtBQ0NKOztBREpJO0VBQ0ksZUFBQTtBQ01SOztBRERBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cm8tdXN1YXJpby9yZWdpc3Ryby11c3VhcmlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi50b3B7XHJcbiAgICBtYXJnaW4tdG9wOiA3JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwJTtcclxufVxyXG5pb24tYnV0dG9ue1xyXG4gICAgXHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMCU7XHJcbiAgICBcclxufVxyXG5pb24taW1ne1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3OCU7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDEzQ0E2O1xyXG59XHJcbmlvbi1pdGVte1xyXG4gICAgLmRlcntcclxuICAgICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICB9XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuXHJcbn1cclxuaW9uLXJvdW5kLWdyb3Vwe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMjAlO1xyXG59XHJcbiIsIi5jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udG9wIHtcbiAgbWFyZ2luLXRvcDogNyU7XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIG1hcmdpbi1yaWdodDogMzAlO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIG1hcmdpbi1yaWdodDogMzAlO1xufVxuXG5pb24taW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiA3OCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAxM0NBNjtcbn1cblxuaW9uLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAxJTtcbn1cbmlvbi1pdGVtIC5kZXIge1xuICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbmlvbi1yb3VuZC1ncm91cCB7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG4gIG1hcmdpbi1yaWdodDogMjAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/registro-usuario/registro-usuario.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/registro-usuario/registro-usuario.page.ts ***!
  \***********************************************************/
/*! exports provided: RegistroUsuarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroUsuarioPage", function() { return RegistroUsuarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_bd_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/bd.service */ "./src/app/services/bd.service.ts");




var RegistroUsuarioPage = /** @class */ (function () {
    function RegistroUsuarioPage(navCtrl, BD, alertCtrl) {
        this.navCtrl = navCtrl;
        this.BD = BD;
        this.alertCtrl = alertCtrl;
    }
    RegistroUsuarioPage.prototype.ngOnInit = function () {
        this.nickname = this.generateNickname();
        this.contrasena = this.generatePassword();
    };
    RegistroUsuarioPage.prototype.generateNickname = function () {
        return Math.random().toString(36).substr(2, 9);
    };
    RegistroUsuarioPage.prototype.generatePassword = function () {
        var length = 8, charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    };
    RegistroUsuarioPage.prototype.guardar = function () {
        var _this = this;
        this.BD.crearUsuario(this.nickname, this.contrasena, this.email, this.ROL);
        var alert = this.alertCtrl.create({
            message: 'Recuerde guardar su contraseña en un lugar seguro',
            subHeader: 'Guardo la contraseña?',
            buttons: [{
                    text: 'Si',
                    handler: function () {
                        _this.navCtrl.navigateForward('menu');
                    }
                }, {
                    text: 'No',
                    role: 'cancel'
                }]
        }).then(function (alert) { return alert.present(); });
    };
    RegistroUsuarioPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _services_bd_service__WEBPACK_IMPORTED_MODULE_3__["BDService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    RegistroUsuarioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registro-usuario',
            template: __webpack_require__(/*! raw-loader!./registro-usuario.page.html */ "./node_modules/raw-loader/index.js!./src/app/registro-usuario/registro-usuario.page.html"),
            styles: [__webpack_require__(/*! ./registro-usuario.page.scss */ "./src/app/registro-usuario/registro-usuario.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_bd_service__WEBPACK_IMPORTED_MODULE_3__["BDService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], RegistroUsuarioPage);
    return RegistroUsuarioPage;
}());



/***/ })

}]);
//# sourceMappingURL=registro-usuario-registro-usuario-module-es5.js.map