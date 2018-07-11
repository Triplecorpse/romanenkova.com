(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["articles-articles-module"],{

/***/ "./src/app/pages/articles/articles.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/articles/articles.module.ts ***!
  \***************************************************/
/*! exports provided: ArticlesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesModule", function() { return ArticlesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_articles_articles_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/articles/articles.component */ "./src/app/pages/articles/components/articles/articles.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ArticlesModule = /** @class */ (function () {
    function ArticlesModule() {
    }
    ArticlesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: '**', component: _components_articles_articles_component__WEBPACK_IMPORTED_MODULE_2__["ArticlesComponent"] }
                ])
            ],
            declarations: [_components_articles_articles_component__WEBPACK_IMPORTED_MODULE_2__["ArticlesComponent"]]
        })
    ], ArticlesModule);
    return ArticlesModule;
}());



/***/ }),

/***/ "./src/app/pages/articles/components/articles/articles.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/articles/components/articles/articles.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  articles works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/articles/components/articles/articles.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/articles/components/articles/articles.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/articles/components/articles/articles.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/articles/components/articles/articles.component.ts ***!
  \**************************************************************************/
/*! exports provided: ArticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesComponent", function() { return ArticlesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticlesComponent = /** @class */ (function () {
    function ArticlesComponent() {
    }
    ArticlesComponent.prototype.ngOnInit = function () {
    };
    ArticlesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-articles',
            template: __webpack_require__(/*! ./articles.component.html */ "./src/app/pages/articles/components/articles/articles.component.html"),
            styles: [__webpack_require__(/*! ./articles.component.scss */ "./src/app/pages/articles/components/articles/articles.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ArticlesComponent);
    return ArticlesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=articles-articles-module.b4e48318418462dcfa37.js.map