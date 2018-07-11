(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./../about/about.module": [
		"./src/app/pages/about/about.module.ts",
		"about-about-module"
	],
	"./../article/article.module": [
		"./src/app/pages/article/article.module.ts",
		"article-article-module"
	],
	"./../articles/articles.module": [
		"./src/app/pages/articles/articles.module.ts",
		"articles-articles-module"
	],
	"./../diplomas/diplomas.module": [
		"./src/app/pages/diplomas/diplomas.module.ts",
		"diplomas-diplomas-module"
	],
	"./../services/services.module": [
		"./src/app/pages/services/services.module.ts",
		"services-services-module"
	],
	"./pages/_index/index.module": [
		"./src/app/pages/_index/index.module.ts"
	],
	"./pages/_page404/page404.module": [
		"./src/app/pages/_page404/page404.module.ts",
		"pages-_page404-page404-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_index_services_resolve_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/_index/services/resolve-header.service */ "./src/app/pages/_index/services/resolve-header.service.ts");
/* harmony import */ var _pages_index_components_index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/_index/components/index/index.component */ "./src/app/pages/_index/components/index/index.component.ts");
/* harmony import */ var _resolve_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolve-language.service */ "./src/app/resolve-language.service.ts");
/* harmony import */ var _language_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./language-guard.service */ "./src/app/language-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: ':lang',
        loadChildren: './pages/_index/index.module#IndexModule',
        canActivate: [_language_guard_service__WEBPACK_IMPORTED_MODULE_5__["LanguageGuardService"]],
        resolve: { data: _pages_index_services_resolve_header_service__WEBPACK_IMPORTED_MODULE_2__["ResolveHeaderService"], language: _resolve_language_service__WEBPACK_IMPORTED_MODULE_4__["ResolveLanguageService"] },
        component: _pages_index_components_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"],
        outlet: 'primary'
    }, {
        path: ':lang/**',
        loadChildren: './pages/_index/index.module#IndexModule',
        canActivate: [_language_guard_service__WEBPACK_IMPORTED_MODULE_5__["LanguageGuardService"]],
        resolve: { data: _pages_index_services_resolve_header_service__WEBPACK_IMPORTED_MODULE_2__["ResolveHeaderService"], language: _resolve_language_service__WEBPACK_IMPORTED_MODULE_4__["ResolveLanguageService"] },
        component: _pages_index_components_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"],
        outlet: 'primary'
    }, {
        path: '404',
        loadChildren: './pages/_page404/page404.module#Page404Module',
        outlet: 'primary'
    },
    { path: '', component: _pages_index_components_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"], outlet: 'primary', canActivate: [_language_guard_service__WEBPACK_IMPORTED_MODULE_5__["LanguageGuardService"]] },
    { path: '**', redirectTo: '404', pathMatch: 'full', outlet: 'primary' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 525px auto 528px;\n      grid-template-rows: 525px auto 528px;\n  min-height: 100%; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pages_index_index_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/_index/index.module */ "./src/app/pages/_index/index.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _pages_index_index_module__WEBPACK_IMPORTED_MODULE_5__["IndexModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/language-guard.service.ts":
/*!*******************************************!*\
  !*** ./src/app/language-guard.service.ts ***!
  \*******************************************/
/*! exports provided: LanguageGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageGuardService", function() { return LanguageGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LanguageGuardService = /** @class */ (function () {
    function LanguageGuardService(route, httpClient) {
        this.route = route;
        this.httpClient = httpClient;
    }
    LanguageGuardService.prototype.canActivate = function (route, state) {
        var _this = this;
        var storedLang = localStorage.getItem('lang');
        if (route.params.lang === 'en' || route.params.lang === 'ru' || route.params.lang === 'uk') {
            localStorage.setItem('lang', route.params.lang);
            return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
        }
        if (route.params.lang === '404') {
            return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }
        if (storedLang) {
            this.route.navigate([storedLang]);
            return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + 'language')
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (lang) {
            localStorage.setItem('lang', lang.lang);
            _this.route.navigate([lang.lang]);
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return false; }));
    };
    LanguageGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], LanguageGuardService);
    return LanguageGuardService;
}());



/***/ }),

/***/ "./src/app/pages/_index/components/attend-button/attend-button.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/pages/_index/components/attend-button/attend-button.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"attend-button accent\">\r\n  {{text}}\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/pages/_index/components/attend-button/attend-button.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/_index/components/attend-button/attend-button.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".attend-button {\n  height: 70px;\n  background-color: #fff;\n  border: none;\n  text-transform: uppercase;\n  min-width: 280px;\n  font-weight: bold;\n  padding: 0 50px;\n  font-family: 'Montserrat', sans-serif;\n  cursor: pointer;\n  position: relative;\n  -webkit-transform: perspective(1px) translateZ(0);\n          transform: perspective(1px) translateZ(0);\n  transition: color .3s ease;\n  font-size: 1rem; }\n  .attend-button:before {\n    content: '';\n    background-color: #0f778b;\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 100%;\n    bottom: 0;\n    z-index: -1;\n    transition: right 0.3s cubic-bezier(0.84, -0.36, 0.13, 1.13); }\n  .attend-button:hover {\n    color: #000000;\n    transition: color .3s ease; }\n  .attend-button:hover:before {\n      right: 0;\n      transition: right 0.3s cubic-bezier(0.84, -0.36, 0.13, 1.13); }\n"

/***/ }),

/***/ "./src/app/pages/_index/components/attend-button/attend-button.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/_index/components/attend-button/attend-button.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AttendButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendButtonComponent", function() { return AttendButtonComponent; });
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

var AttendButtonComponent = /** @class */ (function () {
    function AttendButtonComponent() {
    }
    AttendButtonComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AttendButtonComponent.prototype, "text", void 0);
    AttendButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attend-button',
            template: __webpack_require__(/*! ./attend-button.component.html */ "./src/app/pages/_index/components/attend-button/attend-button.component.html"),
            styles: [__webpack_require__(/*! ./attend-button.component.scss */ "./src/app/pages/_index/components/attend-button/attend-button.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AttendButtonComponent);
    return AttendButtonComponent;
}());



/***/ }),

/***/ "./src/app/pages/_index/components/contacts/contacts.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/_index/components/contacts/contacts.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  contacts works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/_index/components/contacts/contacts.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/_index/components/contacts/contacts.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/_index/components/contacts/contacts.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/_index/components/contacts/contacts.component.ts ***!
  \************************************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
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

var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/pages/_index/components/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.scss */ "./src/app/pages/_index/components/contacts/contacts.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/pages/_index/components/footer/footer.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/_index/components/footer/footer.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\"></div>\r\n"

/***/ }),

/***/ "./src/app/pages/_index/components/footer/footer.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/_index/components/footer/footer.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url(/assets/footer.png);\n  background-position: 50% 50%;\n  height: 528px;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/pages/_index/components/footer/footer.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/_index/components/footer/footer.component.ts ***!
  \********************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/pages/_index/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/pages/_index/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/pages/_index/components/header/header.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/_index/components/header/header.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-wrapper\" [class.fixed]=\"isFixed\">\r\n  <a class=\"link-root\" routerLink=\"\" *ngIf=\"title\">\r\n    <h4>\r\n      <span class=\"accent\">{{title[0]?.toUpperCase()}} </span>\r\n      <span>{{title[1]?.toUpperCase()}}</span>\r\n    </h4>\r\n  </a>\r\n  <nav class=\"navigation\">\r\n    <ul class=\"navigation-list\">\r\n      <li class=\"navigation-list-item\" *ngFor=\"let navItem of nav\">\r\n        <a class=\"navigation-list-item-text\" [routerLink]=\"navItem.href\" routerLinkActive=\"active\">\r\n          {{navItem.name}}\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n  <div class=\"right-side\">\r\n    <div class=\"social\">\r\n      <a href=\"https://facebook.com\" class=\"social-icon icon-facebook\"></a>\r\n      <a href=\"https://instagram.com\" class=\"social-icon icon-instagram\"></a>\r\n    </div>\r\n    <div class=\"language-selector\" (click)=\"open = !open\">\r\n      <span>{{lang}}</span>\r\n      <span class=\"icon-arrow-down accent\"></span>\r\n      <ul class=\"language-list\" [class.open]=\"open\">\r\n        <li class=\"language-list-item\" *ngFor=\"let lang of languages; let i = index\" (click)=\"setLanguage(lang)\">\r\n          <span>{{lang.name}}</span>\r\n          <span class=\"icon-arrow-down accent\" *ngIf=\"i === 0\"></span>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"bottom-line\"></div>\r\n</div>\r\n<div class=\"header-block-wrapper\" [ngStyle]=\"{'background-image': 'url(' + src + ')'}\">\r\n  <h1 class=\"page-header\">\r\n    {{header}}\r\n  </h1>\r\n  <div class=\"header-block button-wrapper\">\r\n    <span class=\"button\">\r\n      <app-attend-button [text]=\"attend\"></app-attend-button>\r\n    </span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/_index/components/header/header.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/_index/components/header/header.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-block-wrapper {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: [left] 1fr [middle] 3.5fr [right] 1fr;\n      grid-template-columns: [left] 1fr [middle] 3.5fr [right] 1fr;\n  -ms-grid-rows: [header] 270px [button] auto;\n      grid-template-rows: [header] 270px [button] auto;\n  width: 100%;\n  height: 525px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n  justify-items: center; }\n\n.header-block.button-wrapper {\n  grid-column: middle;\n  grid-row: button;\n  -ms-grid-column-align: center;\n      justify-self: center; }\n\n.header-block.button-wrapper .button {\n    -ms-grid-column-align: center;\n        justify-self: center; }\n\n.page-header {\n  grid-column: middle;\n  grid-row: header;\n  -ms-grid-row-align: end;\n      align-self: end;\n  margin-bottom: 15px;\n  font-weight: 600; }\n\n.nav-wrapper {\n  position: fixed;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  height: 120px;\n  width: 100%;\n  z-index: 10;\n  transition: .3s all ease; }\n\n.nav-wrapper .bottom-line {\n    position: absolute;\n    height: 1px;\n    background-color: #000000;\n    bottom: 0;\n    width: 0;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    left: 50%;\n    transition: 0.3s width cubic-bezier(0.84, -0.36, 0.13, 1.13); }\n\n.nav-wrapper.fixed {\n    height: 50px;\n    background-color: #ffffff;\n    transition: .3s all ease; }\n\n.nav-wrapper.fixed .bottom-line {\n      width: 100%;\n      transition: 1s width cubic-bezier(0.84, -0.36, 0.13, 1.13); }\n\n.nav-wrapper .link-root {\n    display: block;\n    margin-left: 100px;\n    -ms-grid-row-align: center;\n        align-self: center;\n    text-transform: uppercase;\n    flex-basis: 0;\n    flex-grow: 1; }\n\n.nav-wrapper .link-root, .nav-wrapper .link-root:hover, .nav-wrapper .link-root:focus, .nav-wrapper .link-root:visited {\n      text-decoration: none; }\n\n.nav-wrapper .navigation {\n    -ms-grid-row-align: center;\n        align-self: center;\n    text-transform: uppercase;\n    flex-basis: 0;\n    flex-grow: 1; }\n\n.nav-wrapper .navigation-list {\n      list-style: none;\n      display: flex;\n      padding-left: 0;\n      justify-content: center; }\n\n.nav-wrapper .navigation-list-item {\n        margin-right: 15px;\n        font-weight: bold; }\n\n.nav-wrapper .navigation-list-item-text {\n          color: #0f778b;\n          transition: .3s color ease;\n          white-space: nowrap; }\n\n.nav-wrapper .navigation-list-item-text, .nav-wrapper .navigation-list-item-text:hover, .nav-wrapper .navigation-list-item-text:focus, .nav-wrapper .navigation-list-item-text:visited {\n            text-decoration: none; }\n\n.nav-wrapper .navigation-list-item-text.active {\n            color: #000000;\n            transition: .3s color ease;\n            border-bottom: 1px solid #000000; }\n\n.nav-wrapper .navigation-list-item-text:hover {\n            color: #000000;\n            transition: .3s color ease; }\n\n.nav-wrapper .navigation-list-item:last-child {\n          margin-right: 0; }\n\n.nav-wrapper .right-side {\n    flex-basis: 0;\n    flex-grow: 1;\n    display: flex;\n    margin-right: 100px; }\n\n.nav-wrapper .social {\n    flex-basis: 0;\n    flex-grow: 1;\n    display: flex;\n    justify-content: flex-end; }\n\n.nav-wrapper .social-icon {\n      font-size: 1.5rem;\n      margin-right: 20px;\n      -ms-grid-row-align: center;\n          align-self: center; }\n\n.nav-wrapper .social-icon, .nav-wrapper .social-icon:hover, .nav-wrapper .social-icon:focus, .nav-wrapper .social-icon:visited {\n        text-decoration: none; }\n\n.nav-wrapper .social-icon:last-child {\n        margin-right: 75px; }\n\n.nav-wrapper .language-selector {\n    -ms-grid-row-align: center;\n        align-self: center;\n    font-weight: bold;\n    cursor: pointer;\n    position: relative;\n    text-transform: uppercase;\n    transition: .3s color ease; }\n\n.nav-wrapper .language-selector .language-list {\n      list-style: none;\n      position: absolute;\n      top: -15px;\n      left: -15px;\n      padding: 0;\n      margin: 0;\n      z-index: 21;\n      border: 1px solid #000; }\n\n.nav-wrapper .language-selector .language-list-item {\n        padding: 15px 15px 0;\n        background-color: #ffffff;\n        white-space: nowrap; }\n\n.nav-wrapper .language-selector .language-list-item:last-child {\n          padding-bottom: 15px; }\n\n.nav-wrapper .language-selector .language-list-item:hover {\n          color: #0f778b;\n          transition: .3s color ease; }\n"

/***/ }),

/***/ "./src/app/pages/_index/components/header/header.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/_index/components/header/header.component.ts ***!
  \********************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(document) {
        this.document = document;
        this.isFixed = false;
        this.open = true;
        this.lang = 'eng';
        this.languages = [
            { code: 'en', name: 'Eng' },
            { code: 'ru', name: 'Рус' },
            { code: 'uk', name: 'Укр' }
        ];
    }
    HeaderComponent.prototype.listenter = function (e) {
        var scrollTop = this.document.documentElement.scrollTop;
        this.isFixed = scrollTop > 0;
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.setLanguage = function (lang) {
        this.open = false;
        console.log(lang);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "src", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "header", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "attend", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeaderComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeaderComponent.prototype, "nav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "listenter", null);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/pages/_index/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/pages/_index/components/header/header.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Document])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/_index/components/index/index.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/_index/components/index/index.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <header class=\"header\">\r\n    <app-header [src]=\"src\" [title]=\"title\" [nav]=\"nav\" [header]=\"header\" [attend]=\"attend\"></app-header>\r\n  </header>\r\n\r\n  <main class=\"content\">\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n\r\n  <footer class=\"footer\">\r\n    <app-footer></app-footer>\r\n  </footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/_index/components/index/index.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/_index/components/index/index.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/_index/components/index/index.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/_index/components/index/index.component.ts ***!
  \******************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexComponent = /** @class */ (function () {
    function IndexComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        router.events
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
            .subscribe(function (e) {
            _this.header = route.snapshot.firstChild.data.pageData.header;
            _this.src = _this.route.snapshot.firstChild.data.isRoot ? 'assets/header-main.png' : 'assets/header-common.png';
        });
    }
    IndexComponent.prototype.ngOnInit = function () {
        // todo: perform more clear way to receive data
        this.title = this.route.snapshot['_resolvedData'].data.title;
        this.nav = this.route.snapshot['_resolvedData'].data.navigation;
        this.attend = this.route.snapshot['_resolvedData'].data.buttonText;
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/pages/_index/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/pages/_index/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/pages/_index/components/main/main.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/_index/components/main/main.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  main works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/_index/components/main/main.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/_index/components/main/main.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/_index/components/main/main.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/_index/components/main/main.component.ts ***!
  \****************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = /** @class */ (function () {
    function MainComponent(route) {
        this.route = route;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.header = this.route.snapshot.data.header;
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/pages/_index/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/pages/_index/components/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/pages/_index/index.module.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/_index/index.module.ts ***!
  \**********************************************/
/*! exports provided: IndexModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexModule", function() { return IndexModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/pages/_index/components/index/index.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/pages/_index/components/main/main.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/pages/_index/components/footer/footer.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/pages/_index/components/header/header.component.ts");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/contacts/contacts.component */ "./src/app/pages/_index/components/contacts/contacts.component.ts");
/* harmony import */ var _components_attend_button_attend_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/attend-button/attend-button.component */ "./src/app/pages/_index/components/attend-button/attend-button.component.ts");
/* harmony import */ var _services_resolve_page_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/resolve-page.service */ "./src/app/pages/_index/services/resolve-page.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var IndexModule = /** @class */ (function () {
    function IndexModule() {
    }
    IndexModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: 'about',
                        loadChildren: './../about/about.module#AboutModule',
                        data: { pageid: 'about' },
                        resolve: { pageData: _services_resolve_page_service__WEBPACK_IMPORTED_MODULE_9__["ResolvePageService"] }
                    },
                    {
                        path: 'articles',
                        loadChildren: './../articles/articles.module#ArticlesModule',
                        data: { pageid: 'article' },
                        resolve: { pageData: _services_resolve_page_service__WEBPACK_IMPORTED_MODULE_9__["ResolvePageService"] }
                    },
                    {
                        path: 'services',
                        loadChildren: './../services/services.module#ServicesModule',
                        data: { pageid: 'service' },
                        resolve: { pageData: _services_resolve_page_service__WEBPACK_IMPORTED_MODULE_9__["ResolvePageService"] }
                    },
                    {
                        path: 'diplomas',
                        loadChildren: './../diplomas/diplomas.module#DiplomasModule',
                        data: { pageid: 'diploma' },
                        resolve: { pageData: _services_resolve_page_service__WEBPACK_IMPORTED_MODULE_9__["ResolvePageService"] }
                    },
                    {
                        path: 'article/:id',
                        loadChildren: './../article/article.module#ArticleModule',
                        data: { pageid: 'article' },
                        resolve: { pageData: _services_resolve_page_service__WEBPACK_IMPORTED_MODULE_9__["ResolvePageService"] }
                    },
                    {
                        path: '',
                        component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
                        data: { pageid: 'main' },
                        resolve: { pageData: _services_resolve_page_service__WEBPACK_IMPORTED_MODULE_9__["ResolvePageService"] }
                    },
                ])
            ],
            declarations: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"],
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_7__["ContactsComponent"],
                _components_attend_button_attend_button_component__WEBPACK_IMPORTED_MODULE_8__["AttendButtonComponent"]
            ],
            exports: []
        })
    ], IndexModule);
    return IndexModule;
}());



/***/ }),

/***/ "./src/app/pages/_index/services/resolve-header.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/_index/services/resolve-header.service.ts ***!
  \*****************************************************************/
/*! exports provided: ResolveHeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolveHeaderService", function() { return ResolveHeaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResolveHeaderService = /** @class */ (function () {
    function ResolveHeaderService(httpClient) {
        this.httpClient = httpClient;
        this.navigationUrls = [
            { href: '', anchor: 'main' },
            { href: 'about', anchor: 'about' },
            { href: 'services', anchor: 'services' },
            { href: 'diplomas', anchor: 'diplomas' },
            { href: 'articles', anchor: 'articles' },
            { href: '#contacts', anchor: 'contacts' }
        ];
    }
    ResolveHeaderService.prototype.resolve = function (route) {
        var _this = this;
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api + 'interface', { params: { lang: route.params.lang, id: 'nav' } })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var title = data[0].name.split(' ');
            var buttonText = data[1].name;
            data.splice(0, 2);
            _this.navigationUrls.forEach(function (navUrl) {
                var navItem = data.find(function (item) { return item.anchor === navUrl.anchor; });
                if (navItem) {
                    navItem.href = navUrl.href;
                }
            });
            return { title: title, navigation: data, isRoot: true, buttonText: buttonText };
        }));
    };
    ResolveHeaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ResolveHeaderService);
    return ResolveHeaderService;
}());



/***/ }),

/***/ "./src/app/pages/_index/services/resolve-page.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/_index/services/resolve-page.service.ts ***!
  \***************************************************************/
/*! exports provided: ResolvePageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolvePageService", function() { return ResolvePageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResolvePageService = /** @class */ (function () {
    function ResolvePageService(httpClient) {
        this.httpClient = httpClient;
    }
    ResolvePageService.prototype.resolve = function (route) {
        var lang = localStorage.getItem('lang');
        console.log('resolver', route.params, route.data.pageid);
        if (route.data.pageid) {
            return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api + 'interface', { params: { lang: lang, id: route.data.pageid } });
        }
        return null;
    };
    ResolvePageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ResolvePageService);
    return ResolvePageService;
}());



/***/ }),

/***/ "./src/app/resolve-language.service.ts":
/*!*********************************************!*\
  !*** ./src/app/resolve-language.service.ts ***!
  \*********************************************/
/*! exports provided: ResolveLanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolveLanguageService", function() { return ResolveLanguageService; });
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

var ResolveLanguageService = /** @class */ (function () {
    function ResolveLanguageService() {
    }
    ResolveLanguageService.prototype.resolve = function (route) {
        return route.params.lang;
    };
    ResolveLanguageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ResolveLanguageService);
    return ResolveLanguageService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    api: 'https://romanenkova.herokuapp.com/api/'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\eldar\WebstormProjects\romanenkova-front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.7252abca042b562804c0.js.map