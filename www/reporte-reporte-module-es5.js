(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reporte-reporte-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/reporte/reporte.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reporte/reporte.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content padding>\n    <div class=\"top\">\n    <ion-button expand=\"full\" shape=\"round\" size=\"large\" (click)=\"goToReporteMedicamento()\" color=\"light\">Reporte medicamento</ion-button>\n    <ion-button expand=\"full\" shape=\"round\" size=\"large\" (click)=\"goToReporteEnfermedades()\" color=\"light\">Reporte enfermedades</ion-button>\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/reporte/reporte-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/reporte/reporte-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ReportePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportePageRoutingModule", function() { return ReportePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reporte_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reporte.page */ "./src/app/reporte/reporte.page.ts");




var routes = [
    {
        path: '',
        component: _reporte_page__WEBPACK_IMPORTED_MODULE_3__["ReportePage"]
    }
];
var ReportePageRoutingModule = /** @class */ (function () {
    function ReportePageRoutingModule() {
    }
    ReportePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ReportePageRoutingModule);
    return ReportePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/reporte/reporte.module.ts":
/*!*******************************************!*\
  !*** ./src/app/reporte/reporte.module.ts ***!
  \*******************************************/
/*! exports provided: ReportePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportePageModule", function() { return ReportePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reporte_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reporte-routing.module */ "./src/app/reporte/reporte-routing.module.ts");
/* harmony import */ var _reporte_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reporte.page */ "./src/app/reporte/reporte.page.ts");







var ReportePageModule = /** @class */ (function () {
    function ReportePageModule() {
    }
    ReportePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _reporte_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportePageRoutingModule"]
            ],
            declarations: [_reporte_page__WEBPACK_IMPORTED_MODULE_6__["ReportePage"]]
        })
    ], ReportePageModule);
    return ReportePageModule;
}());



/***/ }),

/***/ "./src/app/reporte/reporte.page.scss":
/*!*******************************************!*\
  !*** ./src/app/reporte/reporte.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.top {\n  margin-top: 20%;\n}\n\nion-button {\n  margin-top: 2%;\n  align-content: flex-start;\n  margin-right: 30%;\n  margin-left: 30%;\n}\n\nion-img {\n  margin-right: 78%;\n}\n\nion-content {\n  --ion-background-color: #013CA6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0ZS9DOlxcVXNlcnNcXGpvaG5jXFxEb2N1bWVudHNcXE1ldG9kb3NcXFVBTUkvc3JjXFxhcHBcXHJlcG9ydGVcXHJlcG9ydGUucGFnZS5zY3NzIiwic3JjL2FwcC9yZXBvcnRlL3JlcG9ydGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtBQ0VKOztBREFBO0VBRUksY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0VKOztBRENBO0VBQ0ksaUJBQUE7QUNFSjs7QURBQTtFQUNJLCtCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnRlL3JlcG9ydGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcntcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnRvcHtcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxufVxyXG5pb24tYnV0dG9ue1xyXG4gICAgXHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgICBcclxufVxyXG5pb24taW1ne1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3OCU7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDEzQ0E2O1xyXG59IiwiLmNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50b3Age1xuICBtYXJnaW4tdG9wOiAyMCU7XG59XG5cbmlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luLXJpZ2h0OiAzMCU7XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG59XG5cbmlvbi1pbWcge1xuICBtYXJnaW4tcmlnaHQ6IDc4JTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDEzQ0E2O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/reporte/reporte.page.ts":
/*!*****************************************!*\
  !*** ./src/app/reporte/reporte.page.ts ***!
  \*****************************************/
/*! exports provided: ReportePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportePage", function() { return ReportePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_bd_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/bd.service */ "./src/app/services/bd.service.ts");




var ReportePage = /** @class */ (function () {
    function ReportePage(navCtrl, BD) {
        this.navCtrl = navCtrl;
        this.BD = BD;
    }
    ReportePage.prototype.ngOnInit = function () {
    };
    ReportePage.prototype.goToReporteEnfermedades = function () {
        this.navCtrl.navigateForward('reporte-enfermedades');
    };
    ReportePage.prototype.goToReporteMedicamento = function () {
        this.navCtrl.navigateForward('reporte-medicamento');
    };
    ReportePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _services_bd_service__WEBPACK_IMPORTED_MODULE_3__["BDService"] }
    ]; };
    ReportePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reporte',
            template: __webpack_require__(/*! raw-loader!./reporte.page.html */ "./node_modules/raw-loader/index.js!./src/app/reporte/reporte.page.html"),
            styles: [__webpack_require__(/*! ./reporte.page.scss */ "./src/app/reporte/reporte.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_bd_service__WEBPACK_IMPORTED_MODULE_3__["BDService"]])
    ], ReportePage);
    return ReportePage;
}());



/***/ })

}]);
//# sourceMappingURL=reporte-reporte-module-es5.js.map