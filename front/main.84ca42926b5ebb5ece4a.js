(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./../about/about.module.ngfactory": [
		"./src/app/pages/about/about.module.ngfactory.js",
		"about-about-module-ngfactory"
	],
	"./../article/article.module.ngfactory": [
		"./src/app/pages/article/article.module.ngfactory.js",
		"article-article-module-ngfactory"
	],
	"./../articles/articles.module.ngfactory": [
		"./src/app/pages/articles/articles.module.ngfactory.js",
		"articles-articles-module-ngfactory"
	],
	"./../diplomas/diplomas.module.ngfactory": [
		"./src/app/pages/diplomas/diplomas.module.ngfactory.js",
		"diplomas-diplomas-module-ngfactory"
	],
	"./../services/services.module.ngfactory": [
		"./src/app/pages/services/services.module.ngfactory.js",
		"services-services-module-ngfactory"
	],
	"./pages/_index/index.module.ngfactory": [
		"./src/app/pages/_index/index.module.ngfactory.js",
		"pages-_index-index-module-ngfactory"
	],
	"./pages/_page404/page404.module.ngfactory": [
		"./src/app/pages/_page404/page404.module.ngfactory.js",
		"pages-_page404-page404-module-ngfactory"
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
	return __webpack_require__.e(ids[1]).then(function() {
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_index_services_resolve_index_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/_index/services/resolve-index.service */ "./src/app/pages/_index/services/resolve-index.service.ts");
/* harmony import */ var _pages_index_components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/_index/components/index/index.component */ "./src/app/pages/_index/components/index/index.component.ts");
/* harmony import */ var _resolve_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolve-language.service */ "./src/app/resolve-language.service.ts");
/* harmony import */ var _language_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./language-guard.service */ "./src/app/language-guard.service.ts");





var routes = [
    {
        path: ':lang',
        loadChildren: './pages/_index/index.module#IndexModule',
        canActivate: [_language_guard_service__WEBPACK_IMPORTED_MODULE_4__["LanguageGuardService"]],
        resolve: { headerData: _pages_index_services_resolve_index_service__WEBPACK_IMPORTED_MODULE_1__["ResolveIndexService"], language: _resolve_language_service__WEBPACK_IMPORTED_MODULE_3__["ResolveLanguageService"] },
        component: _pages_index_components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"],
        outlet: 'primary'
    },
    {
        path: '404',
        loadChildren: './pages/_page404/page404.module#Page404Module',
        outlet: 'primary'
    },
    { path: '', component: _pages_index_components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"], outlet: 'primary', canActivate: [_language_guard_service__WEBPACK_IMPORTED_MODULE_4__["LanguageGuardService"]] },
    { path: '**', redirectTo: '404', pathMatch: 'full', outlet: 'primary' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.scss.shim.ngstyle */ "./src/app/app.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], [], null, null)], null, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.scss.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
  \****************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".container[_ngcontent-%COMP%] {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 525px auto 528px;\n      grid-template-rows: 525px auto 528px;\n  min-height: 100%; }"];



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
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _pages_index_components_index_index_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/_index/components/index/index.component.ngfactory */ "./src/app/pages/_index/components/index/index.component.ngfactory.js");
/* harmony import */ var _pages_index_components_main_main_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/_index/components/main/main.component.ngfactory */ "./src/app/pages/_index/components/main/main.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _language_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./language-guard.service */ "./src/app/language-guard.service.ts");
/* harmony import */ var _pages_index_services_resolve_index_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/_index/services/resolve-index.service */ "./src/app/pages/_index/services/resolve-index.service.ts");
/* harmony import */ var _resolve_language_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./resolve-language.service */ "./src/app/resolve-language.service.ts");
/* harmony import */ var _pages_index_components_index_index_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/_index/components/index/index.component */ "./src/app/pages/_index/components/index/index.component.ts");
/* harmony import */ var _pages_index_index_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/_index/index.module */ "./src/app/pages/_index/index.module.ts");
/* harmony import */ var _pages_index_services_resolve_page_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/_index/services/resolve-page.service */ "./src/app/pages/_index/services/resolve-page.service.ts");
/* harmony import */ var _pages_index_components_main_main_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/_index/components/main/main.component */ "./src/app/pages/_index/components/main/main.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ng4_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng4-click-outside/lib/click-outside.module */ "./node_modules/ng4-click-outside/lib/click-outside.module.js");
/* harmony import */ var ng4_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ng4_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_19__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




















var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵEmptyOutletComponentNgFactory"], _pages_index_components_index_index_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["IndexComponentNgFactory"], _pages_index_components_main_main_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MainComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_l"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_k"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_browser_platform_browser_e"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomRendererFactory2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Meta"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_f"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_9__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_9__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_9__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_9__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_i"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_g"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_g"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_g"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_browser_platform_browser_h"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_h"](p1_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_g"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_d"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_9__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_c"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTES"], function () { return [[{ path: ":lang", loadChildren: "./pages/_index/index.module#IndexModule", canActivate: [_language_guard_service__WEBPACK_IMPORTED_MODULE_11__["LanguageGuardService"]], resolve: { headerData: _pages_index_services_resolve_index_service__WEBPACK_IMPORTED_MODULE_12__["ResolveIndexService"], language: _resolve_language_service__WEBPACK_IMPORTED_MODULE_13__["ResolveLanguageService"] }, component: _pages_index_components_index_index_component__WEBPACK_IMPORTED_MODULE_14__["IndexComponent"], outlet: "primary" }, { path: "404", loadChildren: "./pages/_page404/page404.module#Page404Module", outlet: "primary" }, { path: "", component: _pages_index_components_index_index_component__WEBPACK_IMPORTED_MODULE_14__["IndexComponent"], outlet: "primary", canActivate: [_language_guard_service__WEBPACK_IMPORTED_MODULE_11__["LanguageGuardService"]] }, { path: "**", redirectTo: "404", pathMatch: "full", outlet: "primary" }], [{ path: "about", loadChildren: "./../about/about.module#AboutModule", data: _pages_index_index_module__WEBPACK_IMPORTED_MODULE_15__["ɵ0"], resolve: { pageData: _pages_index_services_resolve_page_service__WEBPACK_IMPORTED_MODULE_16__["ResolvePageService"] } }, { path: "articles", loadChildren: "./../articles/articles.module#ArticlesModule", data: _pages_index_index_module__WEBPACK_IMPORTED_MODULE_15__["ɵ1"], resolve: { pageData: _pages_index_services_resolve_page_service__WEBPACK_IMPORTED_MODULE_16__["ResolvePageService"] } }, { path: "services", loadChildren: "./../services/services.module#ServicesModule", data: _pages_index_index_module__WEBPACK_IMPORTED_MODULE_15__["ɵ2"], resolve: { pageData: _pages_index_services_resolve_page_service__WEBPACK_IMPORTED_MODULE_16__["ResolvePageService"] } }, { path: "diplomas", loadChildren: "./../diplomas/diplomas.module#DiplomasModule", data: _pages_index_index_module__WEBPACK_IMPORTED_MODULE_15__["ɵ3"], resolve: { pageData: _pages_index_services_resolve_page_service__WEBPACK_IMPORTED_MODULE_16__["ResolvePageService"] } }, { path: "article/:id", loadChildren: "./../article/article.module#ArticleModule", data: _pages_index_index_module__WEBPACK_IMPORTED_MODULE_15__["ɵ4"], resolve: { pageData: _pages_index_services_resolve_page_service__WEBPACK_IMPORTED_MODULE_16__["ResolvePageService"] } }, { path: "", component: _pages_index_components_main_main_component__WEBPACK_IMPORTED_MODULE_17__["MainComponent"], data: _pages_index_index_module__WEBPACK_IMPORTED_MODULE_15__["ɵ5"], resolve: { pageData: _pages_index_services_resolve_page_service__WEBPACK_IMPORTED_MODULE_16__["ResolvePageService"] } }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_e"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng4_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_19__["ClickOutsideModule"], ng4_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_19__["ClickOutsideModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _pages_index_index_module__WEBPACK_IMPORTED_MODULE_15__["IndexModule"], _pages_index_index_module__WEBPACK_IMPORTED_MODULE_15__["IndexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", [])]); });



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
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");








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
            return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }
        if (route.params.lang === '404') {
            return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }
        if (storedLang) {
            this.route.navigate([storedLang]);
            return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api + 'language')
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (lang) {
            localStorage.setItem('lang', lang.lang);
            _this.route.navigate([lang.lang]);
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return false; }));
    };
    LanguageGuardService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_5__["defineInjectable"]({ factory: function LanguageGuardService_Factory() { return new LanguageGuardService(_angular_core__WEBPACK_IMPORTED_MODULE_5__["inject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); }, token: LanguageGuardService, providedIn: "root" });
    return LanguageGuardService;
}());



/***/ }),

/***/ "./src/app/pages/_index/components/attend-button/attend-button.component.ngfactory.js":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/_index/components/attend-button/attend-button.component.ngfactory.js ***!
  \********************************************************************************************/
/*! exports provided: RenderType_AttendButtonComponent, View_AttendButtonComponent_0, View_AttendButtonComponent_Host_0, AttendButtonComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AttendButtonComponent", function() { return RenderType_AttendButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AttendButtonComponent_0", function() { return View_AttendButtonComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AttendButtonComponent_Host_0", function() { return View_AttendButtonComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendButtonComponentNgFactory", function() { return AttendButtonComponentNgFactory; });
/* harmony import */ var _attend_button_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attend-button.component.scss.shim.ngstyle */ "./src/app/pages/_index/components/attend-button/attend-button.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _attend_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attend-button.component */ "./src/app/pages/_index/components/attend-button/attend-button.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_AttendButtonComponent = [_attend_button_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AttendButtonComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AttendButtonComponent, data: {} });

function View_AttendButtonComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "attend-button accent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", "\n"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.text; _ck(_v, 1, 0, currVal_0); }); }
function View_AttendButtonComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-attend-button", [], null, null, null, View_AttendButtonComponent_0, RenderType_AttendButtonComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _attend_button_component__WEBPACK_IMPORTED_MODULE_2__["AttendButtonComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AttendButtonComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-attend-button", _attend_button_component__WEBPACK_IMPORTED_MODULE_2__["AttendButtonComponent"], View_AttendButtonComponent_Host_0, { text: "text" }, {}, []);



/***/ }),

/***/ "./src/app/pages/_index/components/attend-button/attend-button.component.scss.shim.ngstyle.js":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/_index/components/attend-button/attend-button.component.scss.shim.ngstyle.js ***!
  \****************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".attend-button[_ngcontent-%COMP%] {\n  height: 70px;\n  background-color: #fff;\n  border: none;\n  text-transform: uppercase;\n  min-width: 280px;\n  font-weight: bold;\n  padding: 0 50px;\n  font-family: 'Montserrat', sans-serif;\n  cursor: pointer;\n  position: relative;\n  -webkit-transform: perspective(1px) translateZ(0);\n          transform: perspective(1px) translateZ(0);\n  transition: color .3s ease;\n  font-size: 1rem; }\n  .attend-button[_ngcontent-%COMP%]:before {\n    content: '';\n    background-color: #0f778b;\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 100%;\n    bottom: 0;\n    z-index: -1;\n    transition: right 0.3s cubic-bezier(0.84, -0.36, 0.13, 1.13); }\n  .attend-button[_ngcontent-%COMP%]:hover {\n    color: #000000;\n    transition: color .3s ease; }\n  .attend-button[_ngcontent-%COMP%]:hover:before {\n      right: 0;\n      transition: right 0.3s cubic-bezier(0.84, -0.36, 0.13, 1.13); }"];



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

var AttendButtonComponent = /** @class */ (function () {
    function AttendButtonComponent() {
    }
    AttendButtonComponent.prototype.ngOnInit = function () {
    };
    return AttendButtonComponent;
}());



/***/ }),

/***/ "./src/app/pages/_index/components/contacts/contacts.component.ngfactory.js":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/_index/components/contacts/contacts.component.ngfactory.js ***!
  \**********************************************************************************/
/*! exports provided: RenderType_ContactsComponent, View_ContactsComponent_0, View_ContactsComponent_Host_0, ContactsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ContactsComponent", function() { return RenderType_ContactsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContactsComponent_0", function() { return View_ContactsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContactsComponent_Host_0", function() { return View_ContactsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponentNgFactory", function() { return ContactsComponentNgFactory; });
/* harmony import */ var _contacts_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts.component.scss.shim.ngstyle */ "./src/app/pages/_index/components/contacts/contacts.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _attend_button_attend_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../attend-button/attend-button.component.ngfactory */ "./src/app/pages/_index/components/attend-button/attend-button.component.ngfactory.js");
/* harmony import */ var _attend_button_attend_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../attend-button/attend-button.component */ "./src/app/pages/_index/components/attend-button/attend-button.component.ts");
/* harmony import */ var _contacts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contacts.component */ "./src/app/pages/_index/components/contacts/contacts.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_ContactsComponent = [_contacts_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ContactsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ContactsComponent, data: {} });

function View_ContactsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "contact-account"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.account; _ck(_v, 1, 0, currVal_0); }); }
function View_ContactsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "contact"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h4", [["class", "contact-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_1 = !_v.context.$implicit.li; _ck(_v, 4, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.name; _ck(_v, 2, 0, currVal_0); }); }
function View_ContactsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "contacts"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h3", [["class", "contacts-header h1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 802816, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "div", [["class", "attend-button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "app-attend-button", [], null, null, null, _attend_button_attend_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_AttendButtonComponent_0"], _attend_button_attend_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_AttendButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 114688, null, 0, _attend_button_attend_button_component__WEBPACK_IMPORTED_MODULE_4__["AttendButtonComponent"], [], { text: [0, "text"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.data.pageData; _ck(_v, 4, 0, currVal_1); var currVal_2 = _co.attend; _ck(_v, 7, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.data.header; _ck(_v, 2, 0, currVal_0); }); }
function View_ContactsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-contacts", [], null, null, null, View_ContactsComponent_0, RenderType_ContactsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _contacts_component__WEBPACK_IMPORTED_MODULE_5__["ContactsComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ContactsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-contacts", _contacts_component__WEBPACK_IMPORTED_MODULE_5__["ContactsComponent"], View_ContactsComponent_Host_0, { data: "data", attend: "attend" }, {}, []);



/***/ }),

/***/ "./src/app/pages/_index/components/contacts/contacts.component.scss.shim.ngstyle.js":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/_index/components/contacts/contacts.component.scss.shim.ngstyle.js ***!
  \******************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".contacts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 33.333%;\n  margin: auto; }\n  .contacts-header[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 25px; }\n  .contacts[_ngcontent-%COMP%]:before {\n    content: '';\n    display: block;\n    background-image: url(/assets/contacts.svg);\n    height: 46px;\n    width: 46px;\n    margin: 0 auto 25px; }\n  .contact[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 25px; }\n  .attend-button[_ngcontent-%COMP%] {\n  -ms-grid-row-align: center;\n      align-self: center; }"];



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

var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
        console.log('fromContacts', this.data);
    };
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/pages/_index/components/footer/footer.component.ngfactory.js":
/*!******************************************************************************!*\
  !*** ./src/app/pages/_index/components/footer/footer.component.ngfactory.js ***!
  \******************************************************************************/
/*! exports provided: RenderType_FooterComponent, View_FooterComponent_0, View_FooterComponent_Host_0, FooterComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_FooterComponent", function() { return RenderType_FooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FooterComponent_0", function() { return View_FooterComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FooterComponent_Host_0", function() { return View_FooterComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponentNgFactory", function() { return FooterComponentNgFactory; });
/* harmony import */ var _footer_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.scss.shim.ngstyle */ "./src/app/pages/_index/components/footer/footer.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contacts_contacts_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contacts/contacts.component.ngfactory */ "./src/app/pages/_index/components/contacts/contacts.component.ngfactory.js");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contacts/contacts.component */ "./src/app/pages/_index/components/contacts/contacts.component.ts");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.component */ "./src/app/pages/_index/components/footer/footer.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_FooterComponent = [_footer_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_FooterComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_FooterComponent, data: {} });

function View_FooterComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-contacts", [], null, null, null, _contacts_contacts_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ContactsComponent_0"], _contacts_contacts_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ContactsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__["ContactsComponent"], [], { data: [0, "data"], attend: [1, "attend"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.data; var currVal_1 = _co.attend; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_FooterComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-footer", [], null, null, null, View_FooterComponent_0, RenderType_FooterComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FooterComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-footer", _footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], View_FooterComponent_Host_0, { data: "data", attend: "attend" }, {}, []);



/***/ }),

/***/ "./src/app/pages/_index/components/footer/footer.component.scss.shim.ngstyle.js":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/_index/components/footer/footer.component.scss.shim.ngstyle.js ***!
  \**************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".footer[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-image: url(/assets/footer.png);\n  background-position: 50% 100%;\n  width: 100%;\n  padding-bottom: 200px; }"];



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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/pages/_index/components/header/header.component.ngfactory.js":
/*!******************************************************************************!*\
  !*** ./src/app/pages/_index/components/header/header.component.ngfactory.js ***!
  \******************************************************************************/
/*! exports provided: RenderType_HeaderComponent, View_HeaderComponent_0, View_HeaderComponent_Host_0, HeaderComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HeaderComponent", function() { return RenderType_HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_0", function() { return View_HeaderComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_Host_0", function() { return View_HeaderComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponentNgFactory", function() { return HeaderComponentNgFactory; });
/* harmony import */ var _header_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.scss.shim.ngstyle */ "./src/app/pages/_index/components/header/header.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng4_click_outside_lib_click_outside_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-click-outside/lib/click-outside.directive */ "./node_modules/ng4-click-outside/lib/click-outside.directive.js");
/* harmony import */ var ng4_click_outside_lib_click_outside_directive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_click_outside_lib_click_outside_directive__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _attend_button_attend_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../attend-button/attend-button.component.ngfactory */ "./src/app/pages/_index/components/attend-button/attend-button.component.ngfactory.js");
/* harmony import */ var _attend_button_attend_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../attend-button/attend-button.component */ "./src/app/pages/_index/components/attend-button/attend-button.component.ts");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header.component */ "./src/app/pages/_index/components/header/header.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_HeaderComponent = [_header_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HeaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HeaderComponent, data: {} });

function View_HeaderComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "a", [["class", "link-root"], ["routerLink", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [["class", "accent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""]))], function (_ck, _v) { var currVal_2 = ""; _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = ((_co.title[0] == null) ? null : _co.title[0].toUpperCase()); _ck(_v, 4, 0, currVal_3); var currVal_4 = ((_co.title[1] == null) ? null : _co.title[1].toUpperCase()); _ck(_v, 6, 0, currVal_4); }); }
function View_HeaderComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "li", [["class", "navigation-list-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "a", [["class", "navigation-list-item-text"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, [[2, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, [" ", " "]))], function (_ck, _v) { var currVal_2 = _v.context.$implicit.href; _ck(_v, 2, 0, currVal_2); var currVal_3 = "active"; _ck(_v, 3, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_4 = _v.context.$implicit.name; _ck(_v, 6, 0, currVal_4); }); }
function View_HeaderComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "span", [["class", "language-list-item-icon icon-arrow-down accent"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.close() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, null); }
function View_HeaderComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "li", [["class", "language-list-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "a", [["class", "language-list-item-text"]], [[1, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_2 = (_v.context.index === 0); _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.href; _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.name; _ck(_v, 2, 0, currVal_1); }); }
function View_HeaderComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 28, "div", [["class", "header-block-wrapper"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngStyle: [0, "ngStyle"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, { "background-image": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 19, "div", [["class", "nav-wrapper"]], [[2, "fixed", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 3, "nav", [["class", "navigation"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "ul", [["class", "navigation-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 802816, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 11, "div", [["class", "right-side"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "div", [["class", "social"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 0, "a", [["class", "social-icon icon-facebook"], ["href", "https://facebook.com"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "a", [["class", "social-icon icon-instagram"], ["href", "https://instagram.com"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 7, "div", [["class", "language-selector"]], null, [[null, "click"], [null, "clickOutside"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.open() !== false);
        ad = (pd_0 && ad);
    } if (("clickOutside" === en)) {
        var pd_1 = (_co.close() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 737280, null, 0, ng4_click_outside_lib_click_outside_directive__WEBPACK_IMPORTED_MODULE_4__["ClickOutsideDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], null, { clickOutside: "clickOutside" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "span", [["class", "language-selector-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 0, "span", [["class", "language-selector-icon icon-arrow-down accent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 2, "ul", [["class", "language-list"]], [[2, "open", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 802816, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 0, "div", [["class", "bottom-line"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "h1", [["class", "page-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](24, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 3, "div", [["class", "header-block button-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 2, "span", [["class", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "app-attend-button", [], null, null, null, _attend_button_attend_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_AttendButtonComponent_0"], _attend_button_attend_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_AttendButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 114688, null, 0, _attend_button_attend_button_component__WEBPACK_IMPORTED_MODULE_6__["AttendButtonComponent"], [], { text: [0, "text"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 2, 0, (("url(" + _co.src) + ")")); _ck(_v, 1, 0, currVal_0); var currVal_2 = _co.title; _ck(_v, 5, 0, currVal_2); var currVal_3 = _co.nav; _ck(_v, 9, 0, currVal_3); _ck(_v, 15, 0); var currVal_6 = _co.languages; _ck(_v, 21, 0, currVal_6); var currVal_8 = _co.attend; _ck(_v, 28, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.isFixed; _ck(_v, 3, 0, currVal_1); var currVal_4 = _co.lang; _ck(_v, 17, 0, currVal_4); var currVal_5 = _co.isOpen; _ck(_v, 19, 0, currVal_5); var currVal_7 = _co.header; _ck(_v, 24, 0, currVal_7); }); }
function View_HeaderComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-header", [], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).listenter() !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_HeaderComponent_0, RenderType_HeaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HeaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-header", _header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], View_HeaderComponent_Host_0, { src: "src", header: "header", attend: "attend", title: "title", nav: "nav" }, {}, []);



/***/ }),

/***/ "./src/app/pages/_index/components/header/header.component.scss.shim.ngstyle.js":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/_index/components/header/header.component.scss.shim.ngstyle.js ***!
  \**************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["@-webkit-keyframes arrowdown {\n  0% {\n    margin-top: 0;\n    opacity: 1; }\n  25% {\n    margin-top: 10px; }\n  50% {\n    opacity: 0; }\n  100% {\n    margin-top: 10px;\n    opacity: 0; } }\n\n@keyframes arrowdown {\n  0% {\n    margin-top: 0;\n    opacity: 1; }\n  25% {\n    margin-top: 10px; }\n  50% {\n    opacity: 0; }\n  100% {\n    margin-top: 10px;\n    opacity: 0; } }\n\n@-webkit-keyframes arrowup {\n  0% {\n    margin-top: 0;\n    opacity: 1; }\n  25% {\n    margin-top: -10px; }\n  50% {\n    opacity: 0; }\n  100% {\n    margin-top: -10px;\n    opacity: 0; } }\n\n@keyframes arrowup {\n  0% {\n    margin-top: 0;\n    opacity: 1; }\n  25% {\n    margin-top: -10px; }\n  50% {\n    opacity: 0; }\n  100% {\n    margin-top: -10px;\n    opacity: 0; } }\n\n.header-block-wrapper[_ngcontent-%COMP%] {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: [left] 1fr [middle] 2.75fr [right] 1fr;\n      grid-template-columns: [left] 1fr [middle] 2.75fr [right] 1fr;\n  -ms-grid-rows: [top] 120px [header] 150px [button] auto;\n      grid-template-rows: [top] 120px [header] 150px [button] auto;\n  width: 100%;\n  height: 525px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n  justify-items: center; }\n\n.header-block.button-wrapper[_ngcontent-%COMP%] {\n  grid-column: middle;\n  grid-row: button;\n  -ms-grid-column-align: center;\n      justify-self: center; }\n\n.header-block.button-wrapper[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n    -ms-grid-column-align: center;\n        justify-self: center; }\n\n.page-header[_ngcontent-%COMP%] {\n  grid-column: middle;\n  grid-row: header;\n  -ms-grid-row-align: end;\n      align-self: end;\n  margin-bottom: 15px;\n  font-weight: 600;\n  text-align: center; }\n\n.nav-wrapper[_ngcontent-%COMP%] {\n  grid-column: left / span 3;\n  grid-row: top;\n  display: flex;\n  justify-content: space-between;\n  height: 50px;\n  margin-top: 35px;\n  width: 100%;\n  z-index: 10;\n  transition: .3s background-color ease .3s; }\n\n.nav-wrapper[_ngcontent-%COMP%]   .bottom-line[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 1px;\n    background-color: #000000;\n    bottom: 0;\n    width: 0;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    left: 50%;\n    transition: 0.3s width cubic-bezier(0.84, -0.36, 0.13, 1.13); }\n\n.nav-wrapper.fixed[_ngcontent-%COMP%] {\n    background-color: #ffffff;\n    position: fixed;\n    margin-top: 0;\n    transition: .3s background-color ease .3s; }\n\n.nav-wrapper.fixed[_ngcontent-%COMP%]   .bottom-line[_ngcontent-%COMP%] {\n      width: 100%;\n      transition: 1s width cubic-bezier(0.84, -0.36, 0.13, 1.13); }\n\n.nav-wrapper[_ngcontent-%COMP%]   .link-root[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: 100px;\n    -ms-grid-row-align: center;\n        align-self: center;\n    text-transform: uppercase;\n    flex-basis: 0;\n    flex-grow: 1; }\n\n.nav-wrapper[_ngcontent-%COMP%]   .link-root[_ngcontent-%COMP%], .nav-wrapper[_ngcontent-%COMP%]   .link-root[_ngcontent-%COMP%]:hover, .nav-wrapper[_ngcontent-%COMP%]   .link-root[_ngcontent-%COMP%]:focus, .nav-wrapper[_ngcontent-%COMP%]   .link-root[_ngcontent-%COMP%]:visited {\n      text-decoration: none; }\n\n.nav-wrapper[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    -ms-grid-row-align: center;\n        align-self: center;\n    text-transform: uppercase;\n    flex-basis: 0;\n    flex-grow: 1; }\n\n.nav-wrapper[_ngcontent-%COMP%]   .navigation-list[_ngcontent-%COMP%] {\n      list-style: none;\n      display: flex;\n      padding-left: 0;\n      justify-content: center; }\n\n.nav-wrapper[_ngcontent-%COMP%]   .navigation-list-item[_ngcontent-%COMP%] {\n        margin-right: 15px;\n        font-weight: bold; }\n\n.nav-wrapper[_ngcontent-%COMP%]   .navigation-list-item-text[_ngcontent-%COMP%] {\n          color: #0f778b;\n          transition: .3s color ease;\n          white-space: nowrap; }\n\n.nav-wrapper[_ngcontent-%COMP%]   .navigation-list-item-text[_ngcontent-%COMP%], .nav-wrapper[_ngcontent-%COMP%]   .navigation-list-item-text[_ngcontent-%COMP%]:hover, .nav-wrapper[_ngcontent-%COMP%]   .navigation-list-item-text[_ngcontent-%COMP%]:focus, .nav-wrapper[_ngcontent-%COMP%]   .navigation-list-item-text[_ngcontent-%COMP%]:visited {\n            text-decoration: none; }\n\n.nav-wrapper[_ngcontent-%COMP%]   .navigation-list-item-text.active[_ngcontent-%COMP%] {\n            color: #000000;\n            transition: .3s color ease;\n            border-bottom: 1px solid #000000; }\n\n.nav-wrapper[_ngcontent-%COMP%]   .navigation-list-item-text[_ngcontent-%COMP%]:hover {\n            color: #000000;\n            transition: .3s color ease; }\n\n.nav-wrapper[_ngcontent-%COMP%]   .navigation-list-item[_ngcontent-%COMP%]:last-child {\n          margin-right: 0; }\n\n.nav-wrapper[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%] {\n    flex-basis: 0;\n    flex-grow: 1;\n    display: flex;\n    margin-right: 100px; }\n\n.nav-wrapper[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n    flex-basis: 0;\n    flex-grow: 1;\n    display: flex;\n    justify-content: flex-end; }\n\n.nav-wrapper[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%] {\n      font-size: 1.5rem;\n      margin-right: 20px;\n      -ms-grid-row-align: center;\n          align-self: center; }\n\n.nav-wrapper[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%], .nav-wrapper[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]:hover, .nav-wrapper[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]:focus, .nav-wrapper[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]:visited {\n        text-decoration: none; }\n\n.nav-wrapper[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]:last-child {\n        margin-right: 75px; }\n\n.nav-wrapper[_ngcontent-%COMP%]   .language-selector[_ngcontent-%COMP%] {\n    align-self: center;\n    font-weight: bold;\n    cursor: pointer;\n    position: relative;\n    text-transform: uppercase;\n    transition: .3s color ease;\n    display: flex;\n    height: 30px; }\n\n.nav-wrapper[_ngcontent-%COMP%]   .language-selector-text[_ngcontent-%COMP%] {\n      -ms-grid-row-align: center;\n          align-self: center; }\n\n.nav-wrapper[_ngcontent-%COMP%]   .language-selector-icon[_ngcontent-%COMP%] {\n      -ms-grid-row-align: center;\n          align-self: center; }\n\n.nav-wrapper[_ngcontent-%COMP%]   .language-selector[_ngcontent-%COMP%]:hover   .language-selector-icon[_ngcontent-%COMP%] {\n      -webkit-animation: arrowdown 1s infinite linear;\n              animation: arrowdown 1s infinite linear; }\n\n.nav-wrapper[_ngcontent-%COMP%]   .language-selector[_ngcontent-%COMP%]   .language-list[_ngcontent-%COMP%] {\n      list-style: none;\n      position: absolute;\n      left: -15px;\n      padding: 0;\n      margin: 0;\n      z-index: 21;\n      border: 1px solid #000;\n      top: -200px;\n      opacity: 0;\n      transition: 0.3s all cubic-bezier(0.46, 0.17, 0.47, 1.58); }\n\n.nav-wrapper[_ngcontent-%COMP%]   .language-selector[_ngcontent-%COMP%]   .language-list.open[_ngcontent-%COMP%] {\n        top: -15px;\n        opacity: 1;\n        transition: 0.5s all cubic-bezier(0.46, 0.17, 0.23, 1.32); }\n\n.nav-wrapper[_ngcontent-%COMP%]   .language-selector[_ngcontent-%COMP%]   .language-list-item[_ngcontent-%COMP%] {\n        padding: 15px 15px 0;\n        background-color: #ffffff;\n        white-space: nowrap;\n        display: flex; }\n\n.nav-wrapper[_ngcontent-%COMP%]   .language-selector[_ngcontent-%COMP%]   .language-list-item-icon[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(180deg);\n                  transform: rotate(180deg);\n          display: block;\n          -ms-grid-row-align: center;\n              align-self: center; }\n\n.nav-wrapper[_ngcontent-%COMP%]   .language-selector[_ngcontent-%COMP%]   .language-list-item-icon[_ngcontent-%COMP%]:hover {\n            -webkit-animation: arrowup 1s infinite linear;\n                    animation: arrowup 1s infinite linear; }\n\n.nav-wrapper[_ngcontent-%COMP%]   .language-selector[_ngcontent-%COMP%]   .language-list-item-text[_ngcontent-%COMP%] {\n          -ms-grid-row-align: center;\n              align-self: center;\n          text-decoration: none; }\n\n.nav-wrapper[_ngcontent-%COMP%]   .language-selector[_ngcontent-%COMP%]   .language-list-item-text[_ngcontent-%COMP%]:hover {\n            text-decoration: none;\n            color: #0f778b;\n            transition: .3s color ease; }\n\n.nav-wrapper[_ngcontent-%COMP%]   .language-selector[_ngcontent-%COMP%]   .language-list-item[_ngcontent-%COMP%]:last-child {\n          padding-bottom: 15px; }"];



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(document, route, router) {
        var _this = this;
        this.document = document;
        this.route = route;
        this.router = router;
        this.isFixed = false;
        this.isOpen = false;
        this.languages = [
            { code: 'en', name: 'Eng' },
            { code: 'ru', name: 'Рус' },
            { code: 'uk', name: 'Укр' }
        ];
        router.events
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
            .subscribe(function (e) {
            _this.languages.forEach(function (lang) {
                lang.href = _this.router.url.replace(/^\/(en|ru|uk)?(\/|$)/gmi, "/" + lang.code + "/");
            });
        });
    }
    HeaderComponent.prototype.listenter = function (e) {
        var scrollTop = this.document.documentElement.scrollTop;
        this.isFixed = scrollTop > 35;
        this.isOpen = false;
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var currentLang = localStorage.getItem('lang');
        this.lang = this.languages.find(function (lang) { return lang.code === currentLang; }).name;
    };
    HeaderComponent.prototype.open = function () {
        this.isOpen = true;
    };
    HeaderComponent.prototype.close = function () {
        this.isOpen = false;
    };
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/_index/components/index/index.component.ngfactory.js":
/*!****************************************************************************!*\
  !*** ./src/app/pages/_index/components/index/index.component.ngfactory.js ***!
  \****************************************************************************/
/*! exports provided: RenderType_IndexComponent, View_IndexComponent_0, View_IndexComponent_Host_0, IndexComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_IndexComponent", function() { return RenderType_IndexComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_IndexComponent_0", function() { return View_IndexComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_IndexComponent_Host_0", function() { return View_IndexComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponentNgFactory", function() { return IndexComponentNgFactory; });
/* harmony import */ var _index_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.component.scss.shim.ngstyle */ "./src/app/pages/_index/components/index/index.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component.ngfactory */ "./src/app/pages/_index/components/header/header.component.ngfactory.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "./src/app/pages/_index/components/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component.ngfactory */ "./src/app/pages/_index/components/footer/footer.component.ngfactory.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/pages/_index/components/footer/footer.component.ts");
/* harmony import */ var _index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.component */ "./src/app/pages/_index/components/index/index.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_IndexComponent = [_index_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_IndexComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_IndexComponent, data: {} });

function View_IndexComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "header", [["class", "header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "app-header", [], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).listenter() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HeaderComponent_0"], _header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]], { src: [0, "src"], header: [1, "header"], attend: [2, "attend"], title: [3, "title"], nav: [4, "nav"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "main", [["class", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "footer", [["class", "footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "app-footer", [], null, null, null, _footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_FooterComponent_0"], _footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_FooterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 114688, null, 0, _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], [], { data: [0, "data"], attend: [1, "attend"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.src; var currVal_1 = _co.header; var currVal_2 = _co.attend; var currVal_3 = _co.title; var currVal_4 = _co.nav; _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); _ck(_v, 6, 0); var currVal_5 = _co.footer; var currVal_6 = _co.attend; _ck(_v, 9, 0, currVal_5, currVal_6); }, null); }
function View_IndexComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-index", [], null, null, null, View_IndexComponent_0, RenderType_IndexComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _index_component__WEBPACK_IMPORTED_MODULE_8__["IndexComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var IndexComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-index", _index_component__WEBPACK_IMPORTED_MODULE_8__["IndexComponent"], View_IndexComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/_index/components/index/index.component.scss.shim.ngstyle.js":
/*!************************************************************************************!*\
  !*** ./src/app/pages/_index/components/index/index.component.scss.shim.ngstyle.js ***!
  \************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



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



var IndexComponent = /** @class */ (function () {
    function IndexComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        router.events
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
            .subscribe(function (e) {
            _this.header = route.snapshot.firstChild.data.pageData.header;
            _this.src = _this.route.snapshot.firstChild.data.headerData ? 'assets/header-main.png' : 'assets/header-common.png';
        });
    }
    IndexComponent.prototype.ngOnInit = function () {
        // todo: perform more clear way to receive data
        this.title = this.route.snapshot['_resolvedData'].headerData.title;
        this.nav = this.route.snapshot['_resolvedData'].headerData.navigation;
        this.footer = this.route.snapshot['_resolvedData'].headerData.contacts;
        this.attend = this.route.snapshot['_resolvedData'].headerData.buttonText;
    };
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/pages/_index/components/main/main.component.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./src/app/pages/_index/components/main/main.component.ngfactory.js ***!
  \**************************************************************************/
/*! exports provided: RenderType_MainComponent, View_MainComponent_0, View_MainComponent_Host_0, MainComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MainComponent", function() { return RenderType_MainComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MainComponent_0", function() { return View_MainComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MainComponent_Host_0", function() { return View_MainComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponentNgFactory", function() { return MainComponentNgFactory; });
/* harmony import */ var _main_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.component.scss.shim.ngstyle */ "./src/app/pages/_index/components/main/main.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.component */ "./src/app/pages/_index/components/main/main.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_MainComponent = [_main_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_MainComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_MainComponent, data: {} });

function View_MainComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" main works!\n"]))], null, null); }
function View_MainComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-main", [], null, null, null, View_MainComponent_0, RenderType_MainComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MainComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-main", _main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"], View_MainComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/_index/components/main/main.component.scss.shim.ngstyle.js":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/_index/components/main/main.component.scss.shim.ngstyle.js ***!
  \**********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



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


var MainComponent = /** @class */ (function () {
    function MainComponent(route) {
        this.route = route;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.header = this.route.snapshot.data.header;
    };
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/pages/_index/index.module.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/_index/index.module.ts ***!
  \**********************************************/
/*! exports provided: IndexModule, ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexModule", function() { return IndexModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return ɵ2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ3", function() { return ɵ3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ4", function() { return ɵ4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ5", function() { return ɵ5; });
var ɵ0 = { pageid: 'about' }, ɵ1 = { pageid: 'article' }, ɵ2 = { pageid: 'service' }, ɵ3 = { pageid: 'diploma' }, ɵ4 = { pageid: 'article' }, ɵ5 = { pageid: 'main' };
var IndexModule = /** @class */ (function () {
    function IndexModule() {
    }
    return IndexModule;
}());




/***/ }),

/***/ "./src/app/pages/_index/services/resolve-index.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/_index/services/resolve-index.service.ts ***!
  \****************************************************************/
/*! exports provided: ResolveIndexService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolveIndexService", function() { return ResolveIndexService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var ResolveIndexService = /** @class */ (function () {
    function ResolveIndexService(httpClient) {
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
    ResolveIndexService.prototype.resolve = function (route) {
        var _this = this;
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api + 'interface', { params: { lang: route.params.lang, id: ['contacts', 'nav'] } })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            var contacts = data.find(function (page) { return page.entityId === 'contacts'; });
            var header = data.find(function (page) { return page.entityId === 'nav'; });
            var rawTitle = header.pageData[0].name;
            var title = rawTitle.split(' ');
            var buttonText = header.pageData[1].name;
            var navigation = header.pageData.slice(2, 7);
            navigation.forEach(function (navItem) {
                var anchor = navItem.anchor;
                var navUrlItem = _this.navigationUrls.find(function (navUrl) { return navUrl.anchor === anchor; });
                navItem.href = navUrlItem.href;
            });
            return {
                title: title,
                buttonText: buttonText,
                navigation: navigation,
                contacts: contacts
            };
        }));
    };
    ResolveIndexService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"]({ factory: function ResolveIndexService_Factory() { return new ResolveIndexService(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); }, token: ResolveIndexService, providedIn: "root" });
    return ResolveIndexService;
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
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var ResolvePageService = /** @class */ (function () {
    function ResolvePageService(httpClient) {
        this.httpClient = httpClient;
    }
    ResolvePageService.prototype.resolve = function (route) {
        var lang = localStorage.getItem('lang');
        if (route.data.pageid) {
            return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api + 'interface', { params: { lang: lang, id: route.data.pageid } });
        }
        return null;
    };
    ResolvePageService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"]({ factory: function ResolvePageService_Factory() { return new ResolvePageService(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); }, token: ResolvePageService, providedIn: "root" });
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResolveLanguageService = /** @class */ (function () {
    function ResolveLanguageService() {
    }
    ResolveLanguageService.prototype.resolve = function (route) {
        return route.params.lang;
    };
    ResolveLanguageService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"]({ factory: function ResolveLanguageService_Factory() { return new ResolveLanguageService(); }, token: ResolveLanguageService, providedIn: "root" });
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
    // api: 'http://localhost:3000/api/'
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])
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
//# sourceMappingURL=main.84ca42926b5ebb5ece4a.js.map