(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-maphome-maphome-module"],{

/***/ "./src/app/pages/maphome/maphome.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/maphome/maphome.module.ts ***!
  \*************************************************/
/*! exports provided: MaphomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaphomePageModule", function() { return MaphomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _maphome_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maphome.page */ "./src/app/pages/maphome/maphome.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _maphome_page__WEBPACK_IMPORTED_MODULE_5__["MaphomePage"]
    }
];
var MaphomePageModule = /** @class */ (function () {
    function MaphomePageModule() {
    }
    MaphomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_maphome_page__WEBPACK_IMPORTED_MODULE_5__["MaphomePage"]]
        })
    ], MaphomePageModule);
    return MaphomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/maphome/maphome.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/maphome/maphome.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-row>\n        <ion-col text-start padding-top>\n            <ion-title>موقعیت </ion-title>\n        </ion-col>\n        <ion-col>\n            <ion-button (click)=\"loadMap()\" shape=\"round\" fill=\"outline\">\n                <ion-icon slot=\"start\" name=\"locate\"></ion-icon>\n                من کجام؟\n            </ion-button>\n        </ion-col>\n        <ion-col text-end>\n            <ion-button (click)=\"closemap()\" shape=\"round\" fill=\"outline\">\n                <ion-icon slot=\"end\" name=\"close\"></ion-icon>\n                بازگشت\n            </ion-button>\n        </ion-col>\n\n    </ion-row>\n</ion-header>\n<ion-content>\n\n    <div class=\"map-wrapper\">\n        <div id=\"map_center\">\n            <img src=\"../../assets/img/1.png\" />\n        </div>\n        <div #map id=\"map\"></div>\n    </div>\n    <div id=\"address\">\n        <span>{{address}}</span>\n    </div>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/maphome/maphome.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/maphome/maphome.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: var(--ion-color-light);\n}\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n.scrolling-wrapper-flexbox {\n  display: flex;\n  flex-wrap: initial;\n  overflow-x: auto;\n}\n.scrolling-wrapper-flexbox .card {\n  flex: 0 0 auto;\n}\ndiv.scrollmenu {\n  background-color: #333;\n  overflow: auto;\n  white-space: nowrap;\n}\ndiv.scrollmenu a {\n  display: inline-block;\n  color: white;\n  text-align: center;\n  padding: 100px;\n  text-decoration: none;\n}\nimg1 {\n  border: 2px solid #BA55D3;\n  border-radius: 50%;\n  padding: 5px;\n  width: 50px;\n  background-color: #4B0082;\n  box-shadow: 1px 1px 1px 1px yellow;\n}\n.card {\n  background: #1E90FF;\n  border-radius: 50%;\n  display: inline-block;\n  height: 50px;\n  border: 1px solid #fff;\n  padding: 7px;\n  margin: 1rem;\n  position: relative;\n  width: 50px;\n}\n.card-1 {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.card-1:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\ndiv.scrollmenu a:hover {\n  background-color: #777;\n}\n.scrolling-wrapper {\n  -webkit-overflow-scrolling: touch;\n}\n.container {\n  display: flex;\n  overflow-x: auto;\n}\n#map_canvas {\n  width: 90%;\n  height: 80%;\n  border: 1px solid red;\n}\n#address {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\n#map {\n  width: 100%;\n  height: 70vh;\n}\n.map-wrapper {\n  position: relative;\n}\n.map-wrapper #map_center {\n  position: absolute;\n  z-index: 99;\n  height: 40px;\n  width: 40px;\n  top: 50%;\n  left: 50%;\n  margin-left: -21px;\n  margin-top: -41px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taXJ6YS9EZXNrdG9wL1Byb2plY3RzL1BhYXNoby9zcmMvYXBwL3BhZ2VzL21hcGhvbWUvbWFwaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21hcGhvbWUvbWFwaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxvQ0FBQTtBQ0FSO0FERUk7RUFDSSxnQkFBQTtFQUNBLGlEQUFBO0FDQVI7QURHUTtFQUNJLGdCQUFBO0FDRFo7QURNQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDSEo7QURJSTtFQUNJLGNBQUE7QUNGUjtBRE1BO0VBQ0ksc0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNISjtBRE1BO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNISjtBRE1BO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtBQ0hKO0FETUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0hKO0FETUE7RUFDSSx3RUFBQTtFQUNBLHFEQUFBO0FDSEo7QURNQTtFQUNJLDRFQUFBO0FDSEo7QURNQTtFQUNJLHNCQUFBO0FDSEo7QURNQTtFQUNJLGlDQUFBO0FDSEo7QURNQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQ0hKO0FETUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDSEo7QURNQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNISjtBRE1BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNISjtBRE1BO0VBQ0ksa0JBQUE7QUNISjtBRElJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcGhvbWUvbWFwaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgfVxuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICB9XG4gICAgaW9uLWNhcmQge1xuICAgICAgICAmLm5vLXJhZGl1cyB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2Nyb2xsaW5nLXdyYXBwZXItZmxleGJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IGluaXRpYWw7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAuY2FyZCB7XG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIH1cbn1cblxuZGl2LnNjcm9sbG1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuZGl2LnNjcm9sbG1lbnUgYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTAwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pbWcxIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjQkE1NUQzO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRCMDA4MjtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggeWVsbG93O1xufVxuXG4uY2FyZCB7XG4gICAgYmFja2dyb3VuZDogIzFFOTBGRjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA1MHB4O1xufVxuXG4uY2FyZC0xIHtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSk7XG59XG5cbi5jYXJkLTE6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG59XG5cbmRpdi5zY3JvbGxtZW51IGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7XG59XG5cbi5zY3JvbGxpbmctd3JhcHBlciB7XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbiNtYXBfY2FudmFzIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogODAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuI2FkZHJlc3Mge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jbWFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDcwdmg7XG59XG5cbi5tYXAtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICNtYXBfY2VudGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yMXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtNDFweDtcbiAgICB9XG59IiwiOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG46aG9zdCBpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG46aG9zdCBpb24tY2FyZC5uby1yYWRpdXMge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uc2Nyb2xsaW5nLXdyYXBwZXItZmxleGJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogaW5pdGlhbDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cbi5zY3JvbGxpbmctd3JhcHBlci1mbGV4Ym94IC5jYXJkIHtcbiAgZmxleDogMCAwIGF1dG87XG59XG5cbmRpdi5zY3JvbGxtZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbmRpdi5zY3JvbGxtZW51IGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMDBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pbWcxIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0JBNTVEMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEIwMDgyO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggeWVsbG93O1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6ICMxRTkwRkY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIHBhZGRpbmc6IDdweDtcbiAgbWFyZ2luOiAxcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4uY2FyZC0xIHtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbn1cblxuLmNhcmQtMTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG59XG5cbmRpdi5zY3JvbGxtZW51IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3O1xufVxuXG4uc2Nyb2xsaW5nLXdyYXBwZXIge1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4jbWFwX2NhbnZhcyB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogODAlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbiNhZGRyZXNzIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwdmg7XG59XG5cbi5tYXAtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYXAtd3JhcHBlciAjbWFwX2NlbnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMjFweDtcbiAgbWFyZ2luLXRvcDogLTQxcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/maphome/maphome.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/maphome/maphome.page.ts ***!
  \***********************************************/
/*! exports provided: MaphomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaphomePage", function() { return MaphomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MaphomePage = /** @class */ (function () {
    function MaphomePage(geolocation, nativeGeocoder, navCtrl, menuCtrl, popoverCtrl, alertCtrl, modalCtrl, toastCtrl, apiService) {
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.apiService = apiService;
    }
    MaphomePage.prototype.ngOnInit = function () {
    };
    MaphomePage.prototype.closemap = function () {
        this.navCtrl.back();
    };
    MaphomePage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            var latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.map.addListener('tilesloaded', function () {
                console.log('accuracy', _this.map);
                _this.getAddressFromCoords(_this.map.center.lat(), _this.map.center.lng());
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    MaphomePage.prototype.getAddressFromCoords = function (lattitude, longitude) {
        var _this = this;
        console.log('getAddressFromCoords ' + lattitude + ' ' + longitude);
        var options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
            .then(function (result) {
            _this.address = '';
            var responseAddress = [];
            for (var _i = 0, _a = Object.entries(result[0]); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                if ((value.length > 0)) {
                    responseAddress.push(value);
                }
            }
            responseAddress.reverse();
            for (var _c = 0, responseAddress_1 = responseAddress; _c < responseAddress_1.length; _c++) {
                var value = responseAddress_1[_c];
                _this.address += value + ', ';
            }
            _this.address = _this.address.slice(0, -2);
        })
            .catch(function (error) {
            _this.address = 'Address Not Available!';
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('map'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MaphomePage.prototype, "mapElement", void 0);
    MaphomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maphome',
            template: __webpack_require__(/*! ./maphome.page.html */ "./src/app/pages/maphome/maphome.page.html"),
            styles: [__webpack_require__(/*! ./maphome.page.scss */ "./src/app/pages/maphome/maphome.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_1__["Geolocation"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeGeocoder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], MaphomePage);
    return MaphomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-maphome-maphome-module.js.map