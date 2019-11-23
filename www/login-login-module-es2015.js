(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-padding\" >\n  <ion-img src=\"../assets/download.png\"></ion-img>\n        <form class=\"form\" [formGroup]=\"validations_form\" (ngSubmit)=\"loginUser(validations_form.value)\" >\n          <ion-item class=\"top\" >\n              <ion-label  position=\"floating\" >Email</ion-label>\n              <ion-input type=\"email\" formControlName=\"email\" ></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\" >\n              <ng-container *ngFor=\"let validation of validation_messages.email\">\n                <div color=\"tertiary\" class=\"error-message\" *ngIf=\"validations_form.get('email').hasError(validation.type) && (validations_form.get('email').dirty || validations_form.get('email').touched)\">\n                  {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n         \n            <ion-item  >\n              <ion-label  position=\"floating\">Password</ion-label>\n              <ion-input type=\"password\"  formControlName=\"password\" class=\"form-controll\" required ></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\" >\n              <ng-container *ngFor=\"let validation of validation_messages.password\">\n                <div  class=\"error-message\" *ngIf=\"validations_form.get('password').hasError(validation.type) && (validations_form.get('password').dirty || validations_form.get('password').touched)\">\n                  {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n            <div >\n            <ion-button shape=\"round\" size=\"block\" class=\"submit-btn\" color=\"tertiary\" type=\"submit\" >Log In</ion-button>\n          \n            <label  class=\"error-message\">{{errorMessage}}</label>\n          </div>\n      </form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-padding {\n  align-content: center;\n  margin-left: 20%;\n  margin-right: 20%;\n}\n\n.top {\n  margin-top: 10%;\n}\n\nion-item {\n  margin-top: 2%;\n  align-content: center;\n  margin-right: 30%;\n  margin-left: 30%;\n  size: 30%;\n  --ion-background-color: white;\n}\n\nion-button {\n  margin-top: 3%;\n  align-content: flex-start;\n  margin-right: 35%;\n  margin-left: 35%;\n}\n\n.validation-errors {\n  margin-right: 30%;\n  margin-left: 30%;\n  color: white;\n}\n\n.error-message {\n  margin-right: 30%;\n  margin-left: 30%;\n  color: white;\n}\n\nion-content {\n  --ion-background-color: #013CA6;\n}\n\nion-img {\n  margin-right: 78%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxqb2huY1xcRG9jdW1lbnRzXFxNZXRvZG9zXFxVQU1JL3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7QUNFSjs7QURBQTtFQUVJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7QUNFSjs7QURDQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURHQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQUo7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksK0JBQUE7QUNFSjs7QURBQTtFQUNJLGlCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tcGFkZGluZ3tcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcclxufVxyXG4udG9we1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcbmlvbi1pdGVte1xyXG4gIFxyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgICBzaXplOiAzMCU7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG59XHJcbmlvbi1idXR0b257XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDM1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNSU7XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbn1cclxuLnZhbGlkYXRpb24tZXJyb3Jze1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5lcnJvci1tZXNzYWdle1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAxM0NBNjtcclxufVxyXG5pb24taW1ne1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3OCU7XHJcbn1cclxuIiwiaW9uLXBhZGRpbmcge1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG4gIG1hcmdpbi1yaWdodDogMjAlO1xufVxuXG4udG9wIHtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG5pb24taXRlbSB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMzAlO1xuICBtYXJnaW4tbGVmdDogMzAlO1xuICBzaXplOiAzMCU7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1yaWdodDogMzUlO1xuICBtYXJnaW4tbGVmdDogMzUlO1xufVxuXG4udmFsaWRhdGlvbi1lcnJvcnMge1xuICBtYXJnaW4tcmlnaHQ6IDMwJTtcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIG1hcmdpbi1yaWdodDogMzAlO1xuICBtYXJnaW4tbGVmdDogMzAlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAxM0NBNjtcbn1cblxuaW9uLWltZyB7XG4gIG1hcmdpbi1yaWdodDogNzglO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_bd_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/bd.service */ "./src/app/services/bd.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let LoginPage = class LoginPage {
    constructor(navCtrl, authService, formBuilder) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.errorMessage = '';
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Please enter a valid email.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' }
            ]
        };
    }
    ngOnInit() {
        this.validations_form = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])),
        });
    }
    loginUser(value) {
        this.authService.loginUser(value)
            .then(res => {
            console.log(res);
            this.errorMessage = "";
            this.navCtrl.navigateRoot('menu');
        }, err => {
            this.errorMessage = err.message;
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_bd_service__WEBPACK_IMPORTED_MODULE_3__["BDService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_bd_service__WEBPACK_IMPORTED_MODULE_3__["BDService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map