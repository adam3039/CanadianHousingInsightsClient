webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar [map]=\"map\"></app-navbar>\r\n<div class=\"main-wrap\">\r\n    <router-outlet name=\"modal\"></router-outlet>\r\n    <app-sidebar></app-sidebar>\r\n    <app-map #map></app-map>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media (max-width: 767px) {\n  /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n  .body-content {\n    padding-top: 50px;\n  }\n}\n.main-wrap .sidebar {\n  background-color: #0D0808 !important;\n  width: 300px;\n  position: absolute;\n  top: 50px;\n  right: 0;\n  bottom: 0;\n  max-height: 100vh;\n  overflow-y: auto;\n  overflow-x: auto;\n}\n#sidebar-container {\n  padding-left: 0;\n  padding-right: 0;\n}\nbody,\nhtml {\n  height: 100%;\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.shared.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModuleShared; });
/* unused harmony export getBaseUrl */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_inline_svg__ = __webpack_require__("../../../../ng-inline-svg/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_inline_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_inline_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_highcharts__ = __webpack_require__("../../../../angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_map_service__ = __webpack_require__("../../../../../src/app/services/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_config_service__ = __webpack_require__("../../../../../src/app/utils/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_geo_service__ = __webpack_require__("../../../../../src/app/services/geo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_stats_service__ = __webpack_require__("../../../../../src/app/services/stats.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_news_service__ = __webpack_require__("../../../../../src/app/services/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_modal_service__ = __webpack_require__("../../../../../src/app/services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__sidebar_news_news_panel_news_component__ = __webpack_require__("../../../../../src/app/sidebar/news/news-panel/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__map_map_area_map_area_component__ = __webpack_require__("../../../../../src/app/map/map-area/map-area.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__map_map_popup_map_popup_component__ = __webpack_require__("../../../../../src/app/map/map-popup/map-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__sidebar_account_account_panel_account_component__ = __webpack_require__("../../../../../src/app/sidebar/account/account-panel/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__sidebar_stats_stats_panel_stats_component__ = __webpack_require__("../../../../../src/app/sidebar/stats/stats-panel/stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__sidebar_news_news_article_news_article_component__ = __webpack_require__("../../../../../src/app/sidebar/news/news-article/news-article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__sidebar_news_news_article_comments_comments_component__ = __webpack_require__("../../../../../src/app/sidebar/news/news-article-comments/comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__sidebar_news_new_comment_new_comment_component__ = __webpack_require__("../../../../../src/app/sidebar/news/new-comment/new-comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__auth_change_password_change_password_component__ = __webpack_require__("../../../../../src/app/auth/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__interceptors_token_interceptor__ = __webpack_require__("../../../../../src/app/interceptors/token.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__interceptors_jwt_interceptor__ = __webpack_require__("../../../../../src/app/interceptors/jwt.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__charts_chart_component__ = __webpack_require__("../../../../../src/app/charts/chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__sidebar_account_account_panel_recent_comments_recent_comments_component__ = __webpack_require__("../../../../../src/app/sidebar/account/account-panel/recent-comments/recent-comments.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// modules
















// services






// components


















var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var AppModuleShared = (function () {
    function AppModuleShared() {
    }
    AppModuleShared = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_20__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_21__sidebar_news_news_panel_news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__map_map_area_map_area_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_23__map_map_popup_map_popup_component__["a" /* MapPopupComponent */],
                __WEBPACK_IMPORTED_MODULE_28__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_24__sidebar_account_account_panel_account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_25__sidebar_stats_stats_panel_stats_component__["a" /* StatsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__sidebar_news_news_article_news_article_component__["a" /* NewsArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_27__sidebar_news_news_article_comments_comments_component__["a" /* CommentsComponent */],
                __WEBPACK_IMPORTED_MODULE_29__sidebar_news_new_comment_new_comment_component__["a" /* NewCommentComponent */],
                __WEBPACK_IMPORTED_MODULE_34__charts_chart_component__["a" /* ChartComponent */],
                __WEBPACK_IMPORTED_MODULE_30__auth_change_password_change_password_component__["a" /* ChangePasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_35__sidebar_account_account_panel_recent_comments_recent_comments_component__["a" /* RecentCommentsComponent */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_23__map_map_popup_map_popup_component__["a" /* MapPopupComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__auth_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["ToggleButtonModule"],
                __WEBPACK_IMPORTED_MODULE_10_angular_highcharts__["b" /* ChartModule */],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_11_ngx_perfect_scrollbar__["b" /* PerfectScrollbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forRoot([
                    { path: '', redirectTo: 'news', pathMatch: 'full' },
                    { path: 'news', component: __WEBPACK_IMPORTED_MODULE_21__sidebar_news_news_panel_news_component__["a" /* NewsComponent */] },
                    { path: 'account', component: __WEBPACK_IMPORTED_MODULE_24__sidebar_account_account_panel_account_component__["a" /* AccountComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_31__auth_guard__["a" /* AuthGuard */]] },
                    { path: 'stats', component: __WEBPACK_IMPORTED_MODULE_25__sidebar_stats_stats_panel_stats_component__["a" /* StatsComponent */] },
                    { path: '**', redirectTo: 'news' },
                    { path: 'chart', component: __WEBPACK_IMPORTED_MODULE_34__charts_chart_component__["a" /* ChartComponent */], outlet: 'modal' },
                    { path: 'changePassword', component: __WEBPACK_IMPORTED_MODULE_30__auth_change_password_change_password_component__["a" /* ChangePasswordComponent */], outlet: 'modal' }
                ]),
                __WEBPACK_IMPORTED_MODULE_5_ng_inline_svg__["InlineSVGModule"],
                __WEBPACK_IMPORTED_MODULE_12_ngx_loading__["a" /* LoadingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__services_map_service__["a" /* MapService */],
                __WEBPACK_IMPORTED_MODULE_17__services_news_service__["a" /* NewsService */],
                __WEBPACK_IMPORTED_MODULE_14__utils_config_service__["a" /* ConfigService */],
                __WEBPACK_IMPORTED_MODULE_15__services_geo_service__["a" /* GeoService */],
                __WEBPACK_IMPORTED_MODULE_16__services_stats_service__["a" /* StatsService */],
                __WEBPACK_IMPORTED_MODULE_18__services_modal_service__["a" /* ModalService */],
                __WEBPACK_IMPORTED_MODULE_31__auth_guard__["a" /* AuthGuard */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_32__interceptors_token_interceptor__["a" /* TokenInterceptor */],
                    multi: true
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_33__interceptors_jwt_interceptor__["a" /* JwtInterceptor */],
                    multi: true
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_11_ngx_perfect_scrollbar__["a" /* PERFECT_SCROLLBAR_CONFIG */],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                },
                { provide: 'BASE_URL', useFactory: getBaseUrl }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* AppComponent */]]
        })
    ], AppModuleShared);
    return AppModuleShared;
}());

function getBaseUrl() {
    return 'http://localhost:28532/';
}


/***/ }),

/***/ "../../../../../src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(user, router, currentActivatedRoute) {
        this.user = user;
        this.router = router;
        this.currentActivatedRoute = currentActivatedRoute;
    }
    AuthGuard.prototype.canActivate = function (activatedRouteSnapshot) {
        if (!this.user.isLoggedIn()) {
            var current = this.currentActivatedRoute;
            var path = activatedRouteSnapshot.url[0].path;
            this.router.navigate([{ outlets: { modal: 'auth' } }], { queryParams: { returnUrl: path } });
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth-modal/auth-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"auth-modal\">\r\n    <p-dialog [showHeader]=\"false\" [(visible)]=\"display\" (onHide)=\"onHide()\" [modal]=\"true\" [dismissableMask]=\"true\" [resizable]=\"false\">\r\n\r\n        <p-tabMenu [model]=\"menuItems\"></p-tabMenu>\r\n        <router-outlet></router-outlet>\r\n    </p-dialog>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/auth-modal/auth-modal.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#auth-modal .ui-dialog {\n  border: none;\n  width: 22em;\n  overflow: hidden;\n  resize: none;\n}\n#auth-modal .ui-dialog-content {\n  background: #0D0808 !important;\n  color: white;\n  padding: 0 !important;\n  font-family: 'Raleway', sans-serif;\n  font-weight: 600;\n  width: 100%;\n}\n#auth-modal .ui-dialog-content input {\n  background-color: #060606;\n  border-color: #060606;\n}\n#auth-modal .ui-dialog-content input::-webkit-input-placeholder {\n  text-align: center;\n  color: #404040;\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 11px;\n  letter-spacing: 2px;\n}\n#auth-modal .ui-dialog-content input:-moz-placeholder {\n  /* Firefox 18- */\n  text-align: center;\n  color: #404040;\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 11px;\n  letter-spacing: 2px;\n}\n#auth-modal .ui-dialog-content input::-moz-placeholder {\n  /* Firefox 19+ */\n  text-align: center;\n  color: #404040;\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 11px;\n  letter-spacing: 2px;\n}\n#auth-modal .ui-dialog-content input:-ms-input-placeholder {\n  text-align: center;\n  color: #404040;\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 11px;\n  letter-spacing: 2px;\n}\n#auth-modal .ui-dialog-content svg {\n  height: 20px;\n  margin-left: 0.4em;\n  margin-top: 0.25em;\n}\n/*@media(max-width:767px) {\n    .ui-dialog-content {\n        margin: 30px auto;\n        margin-top: 10em;\n    }\n}*/\n#auth-modal .ui-tabmenu .ui-tabmenu-nav {\n  border: none;\n  padding: 0;\n}\n#auth-modal .ui-tabmenu-nav .ui-tabmenuitem {\n  width: 50%;\n  background-color: #0D0808 !important;\n  border: none;\n  margin: 0 !important;\n  top: 0 !important;\n}\n/* tab color */\n#auth-modal .ui-tabmenu-nav > .ui-tabmenuitem > .ui-menuitem-link {\n  border: none;\n  color: #fff;\n  text-transform: uppercase;\n  text-align: center;\n  padding-top: 1.3em !important;\n  padding-bottom: 1.3em !important;\n  font-family: 'Raleway', sans-serif;\n  font-weight: 800;\n  width: 100%;\n}\n/* active tab color */\n#auth-modal li.ui-tabmenuitem.ui-state-default.ui-state-active {\n  color: #fff;\n  background-color: #C80000 !important;\n  background: #C80000 !important;\n}\n/* hover tab color */\n#auth-modal .ui-tabmenu-nav > .ui-tabmenuitem > a:hover {\n  border-color: #0D0808 !important;\n  background-color: #C80000;\n}\n#auth-modal .ui-tabmenu {\n  background: #0D0808;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/auth-modal/auth-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// app-modal.component.ts



var ModalComponent = (function () {
    function ModalComponent(router, activatedRoute, userService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.display = true;
    }
    ModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.loggedInObservable.subscribe(function (value) {
            _this.onLoginSuccess();
        });
        this.menuItems = [
            { label: 'Login', routerLink: ['login'] },
            { label: 'Register', routerLink: ['register'] }
        ];
    };
    ModalComponent.prototype.onHide = function () {
        this.display = false;
        this.router.navigate([{ outlets: { modal: null } }]);
    };
    ModalComponent.prototype.onLoginSuccess = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (queryParams) {
            _this.returnUrl = queryParams['returnUrl'];
        });
        this.router.navigate([{ outlets: { modal: null, primary: [this.returnUrl] } }]);
    };
    ModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__("../../../../../src/app/auth/auth-modal/auth-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/auth-modal/auth-modal.component.less")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_routing__ = __webpack_require__("../../../../../src/app/auth/auth.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__registration_form_registration_form_component__ = __webpack_require__("../../../../../src/app/auth/registration-form/registration-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_form_login_form_component__ = __webpack_require__("../../../../../src/app/auth/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_modal_auth_modal_component__ = __webpack_require__("../../../../../src/app/auth/auth-modal/auth-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sidebar_spinner_spinner_component__ = __webpack_require__("../../../../../src/app/sidebar/spinner/spinner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng_inline_svg_lib__ = __webpack_require__("../../../../ng-inline-svg/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng_inline_svg_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng_inline_svg_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__auth_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_9_ng_inline_svg_lib__["InlineSVGModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["TabMenuModule"],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["c" /* HttpClientModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__registration_form_registration_form_component__["a" /* RegistrationFormComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_form_login_form_component__["a" /* LoginFormComponent */],
                __WEBPACK_IMPORTED_MODULE_7__auth_modal_auth_modal_component__["a" /* ModalComponent */],
                __WEBPACK_IMPORTED_MODULE_8__sidebar_spinner_spinner_component__["a" /* SpinnerComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__registration_form_registration_form_component__ = __webpack_require__("../../../../../src/app/auth/registration-form/registration-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_form_login_form_component__ = __webpack_require__("../../../../../src/app/auth/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_modal_auth_modal_component__ = __webpack_require__("../../../../../src/app/auth/auth-modal/auth-modal.component.ts");




var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild([
    {
        path: 'auth', component: __WEBPACK_IMPORTED_MODULE_3__auth_auth_modal_auth_modal_component__["a" /* ModalComponent */], outlet: 'modal',
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'register', component: __WEBPACK_IMPORTED_MODULE_1__registration_form_registration_form_component__["a" /* RegistrationFormComponent */] },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_form_login_form_component__["a" /* LoginFormComponent */] }
        ]
    }
]);


/***/ }),

/***/ "../../../../../src/app/auth/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"cpm\">\r\n    <p-dialog [showHeader]=\"false\" [(visible)]=\"display\" (onHide)=\"onHide()\" [modal]=\"true\" [dismissableMask]=\"true\" [resizable]=\"false\">\r\n        <div class=\"row\" style=\"display: block;\">\r\n            <div class=\"col-sm-12\">\r\n                <form #f=\"ngForm\" novalidate (ngSubmit)=\"change(f)\">\r\n                    <!--Old Password-->\r\n                    <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"icon\">\r\n                                    <div [inlineSVG]=\"'assets/icons/_PasswordIcon.svg'\"></div>\r\n                                </div>\r\n                                <div class=\"text-input\">\r\n                                    <input id=\"current-password\" type=\"password\" required name=\"currentPassword\" [ngModel]=\"changePassword.currentPassword\" tmFocus class=\"form-control\" placeholder=\"Current Password\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--New Password-->\r\n                    <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"icon\">\r\n                                    <div [inlineSVG]=\"'assets/icons/_PasswordIcon.svg'\"></div>\r\n                                </div>\r\n                                <div class=\"text-input\">\r\n                                    <input id=\"new-password\" type=\"password\" required name=\"newPassword\" [ngModel]=\"changePassword.newPassword\" class=\"form-control\" placeholder=\"New Password\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--Confirm New Password-->\r\n                    <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"icon\">\r\n                                    <div [inlineSVG]=\"'assets/icons/_PasswordIcon.svg'\"></div>\r\n                                </div>\r\n                                <div class=\"text-input\">\r\n                                    <input id=\"confirm-new-password\" type=\"password\" required name=\"confirmNewPassword\" [ngModel]=\"changePassword.confirmNewPassword\" class=\"form-control\" placeholder=\"Confirm New Password\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--Submit-->\r\n                    <div class=\"form-group\">\r\n                        <div class=\"row\" id=\"change-password-submit\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div id=\"submit-icon\">\r\n                                    <div [inlineSVG]=\"'assets/icons/_LoginIcon.svg'\"></div>\r\n                                </div>\r\n                                <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"f.invalid || isRequesting\">Change Password</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\r\n                        <strong>Oops!</strong> {{errors}}\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </p-dialog>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/change-password/change-password.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#cpm .text-input {\n  padding-left: 0;\n  width: 85%;\n  float: left;\n}\n#cpm .text-input input {\n  letter-spacing: 2px;\n  font-size: 11px;\n  height: 40px;\n  font-family: 'Raleway', sans-serif;\n  font-weight: 700;\n  color: white;\n}\n#cpm .form-group {\n  margin-bottom: .8em;\n}\n#cpm .form-group:last-child {\n  margin-bottom: 0;\n}\n#cpm button {\n  width: 85%;\n  float: left;\n  background-color: #C80000 !important;\n  border: none !important;\n  border-radius: 3px !important;\n  border-top-left-radius: 0px !important;\n  border-bottom-left-radius: 0px !important;\n  text-transform: uppercase;\n  color: white !important;\n  font-size: 11px !important;\n  font-weight: 800 !important;\n  height: 40px;\n  letter-spacing: 2px;\n}\n#cpm #submit-icon {\n  background-color: #C80000;\n  height: 40px;\n  width: 40px;\n  padding-left: 0.15em;\n  padding-top: 0.4em;\n  float: left;\n  border-right: solid 1px #0D0808;\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px;\n}\n#cpm #change-password-submit {\n  margin-top: 2.5em;\n}\n#cpm .icon {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  background-color: #060606;\n  float: left;\n  padding: .5em;\n  padding-left: .7em;\n}\n#cpm .ui-dialog {\n  border: none;\n  width: 22em;\n  overflow: hidden;\n  resize: none;\n}\n#cpm .ui-dialog-content {\n  padding: 1.3em !important;\n  background: #0D0808 !important;\n  color: white;\n  font-family: 'Raleway', sans-serif;\n  font-weight: 600;\n  width: 100%;\n}\n#cpm .ui-dialog-content input {\n  background-color: #060606;\n  border-color: #060606;\n}\n#cpm .ui-dialog-content input::-webkit-input-placeholder {\n  text-align: center;\n  color: #404040;\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 11px;\n  letter-spacing: 2px;\n}\n#cpm .ui-dialog-content input:-moz-placeholder {\n  /* Firefox 18- */\n  text-align: center;\n  color: #404040;\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 11px;\n  letter-spacing: 2px;\n}\n#cpm .ui-dialog-content input::-moz-placeholder {\n  /* Firefox 19+ */\n  text-align: center;\n  color: #404040;\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 11px;\n  letter-spacing: 2px;\n}\n#cpm .ui-dialog-content input:-ms-input-placeholder {\n  text-align: center;\n  color: #404040;\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 11px;\n  letter-spacing: 2px;\n}\n#cpm .ui-dialog-content svg {\n  height: 20px;\n  margin-left: 0.4em;\n  margin-top: 0.25em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(userService, router, activatedRoute) {
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.display = true;
        this.submitted = false;
        this.changePassword = {
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: ''
        };
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.passwordChangeObservable.subscribe(function (value) {
            _this.onPasswordChangeSuccess();
        });
    };
    ChangePasswordComponent.prototype.change = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.userService.changePassword(value.currentPassword, value.newPassword)
                .finally(function () { return _this.isRequesting = false; })
                .subscribe(function () {
                _this.userService.changePasswordSucceeded(true);
            }, function (error) { return _this.errors = error; });
        }
    };
    ChangePasswordComponent.prototype.onHide = function () {
        this.router.navigate([{ outlets: { modal: null } }]);
    };
    ChangePasswordComponent.prototype.onPasswordChangeSuccess = function () {
        this.router.navigate([{ outlets: { modal: null } }]);
    };
    ChangePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-change-password-modal',
            template: __webpack_require__("../../../../../src/app/auth/change-password/change-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/change-password/change-password.component.less")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"login\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n\r\n            <form #f=\"ngForm\" novalidate (ngSubmit)=\"login(f)\">\r\n\r\n                <div class=\"form-group\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"icon\">\r\n                                <div [inlineSVG]=\"'../../assets/icons/_UsernameIcon.svg'\"></div>\r\n                            </div>\r\n                            <div class=\"text-input\">\r\n                                <input id=\"username\" type=\"text\" required name=\"username\" [ngModel]=\"credentials.username\" #username=\"ngModel\" tmFocus class=\"form-control\" placeholder=\"Username\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"icon\">\r\n                                <div [inlineSVG]=\"'../../assets/icons/_PasswordIcon.svg'\"></div>\r\n                            </div>\r\n                            <div class=\"text-input\">\r\n                                <input id=\"password\" type=\"password\" required name=\"password\" [ngModel]=\"credentials.password\" class=\"form-control\" placeholder=\"Password\" ngModel>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"remember-check\">\r\n                        <input type=\"checkbox\" id=\"RememberMe\" name=\"checkbox\" />\r\n                        <label for=\"RememberMe\">Remember Me</label>\r\n                    </div>\r\n                    <div class=\"remember-label\">\r\n                        Remember Me\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"row\" id=\"login-submit\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div id=\"login-icon\">\r\n                                <div [inlineSVG]=\"'../../assets/icons/_LoginIcon.svg'\"></div>\r\n                            </div>\r\n                            <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"f.invalid || isRequesting\">Log in</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\r\n                    <strong>Oops!</strong> {{errors}}\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/login-form/login-form.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#login .text-input {\n  padding-left: 0;\n  width: 80%;\n  float: left;\n}\n#login .text-input input {\n  letter-spacing: 2px;\n  font-size: 11px;\n  height: 40px;\n  font-family: 'Raleway', sans-serif;\n  font-weight: 700;\n  color: white;\n}\n#login input[type='checkbox'] {\n  opacity: 0;\n  z-index: -1;\n}\n#login input[type='checkbox'] + label {\n  width: 20px;\n  height: 20px;\n  display: block;\n  position: relative;\n  margin: 0 auto;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  text-indent: -999px;\n  overflow: hidden;\n  border: 1px solid #fff;\n  cursor: pointer;\n}\n#login input[type='checkbox']#RememberMe + label {\n  border: 1px solid #fff;\n  background: transparent;\n  transition: 0.5s ease all;\n  -moz-transition: 0.5s ease all;\n  -webkit-transition: 0.5s ease all;\n}\n#login input[type='checkbox']#RememberMe:checked + label {\n  border: 5px solid #fff;\n  background: #C80000;\n}\n#login .remember-check {\n  float: left;\n  margin-top: 7px;\n  margin-left: 0.7em;\n}\n#login #RememberMe {\n  display: none !important;\n}\n#login .remember-label {\n  float: left;\n  margin-top: 0.78em;\n  margin-left: 0.6em;\n  font-family: 'Raleway', sans-serif;\n  font-size: 12px;\n}\n#login .form-group {\n  margin-bottom: .8em;\n}\n#login {\n  padding-left: 30px;\n  padding-right: 30px;\n  margin-top: 1em;\n}\n#login a {\n  color: white;\n  font-size: 11px;\n}\n#login p {\n  margin-bottom: 0;\n}\n#login span {\n  font-size: 11px;\n  color: white;\n}\n#login button {\n  width: 80%;\n  float: left;\n  background-color: #C80000 !important;\n  border: none !important;\n  border-radius: 3px !important;\n  border-top-left-radius: 0px !important;\n  border-bottom-left-radius: 0px !important;\n  text-transform: uppercase;\n  color: white !important;\n  font-size: 11px !important;\n  font-weight: 800 !important;\n  height: 40px;\n  letter-spacing: 2px;\n}\n#login .icon {\n  height: 40px;\n  margin-right: .5em;\n  width: 34px;\n  padding: .5em;\n  float: left;\n}\n#login-icon {\n  background-color: #C80000;\n  height: 40px;\n  margin-left: .5em;\n  width: 40px;\n  padding-left: 0.15em;\n  padding-top: 0.4em;\n  float: left;\n  border-right: solid 1px #0D0808;\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px;\n}\n#login-submit {\n  margin-top: 6em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_modal_service__ = __webpack_require__("../../../../../src/app/services/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginFormComponent = (function () {
    function LoginFormComponent(modalService, userService, router, activatedRoute) {
        this.modalService = modalService;
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loggedIn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.submitted = false;
        this.credentials = { username: '', password: '' };
    }
    LoginFormComponent.prototype.login = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.userService.login(value.username, value.password)
                .finally(function () { return _this.isRequesting = false; })
                .subscribe(function (result) {
                if (result) {
                    _this.userService.loginSucceeded(true);
                }
            }, function (error) { return _this.errors = error; });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LoginFormComponent.prototype, "loggedIn", void 0);
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__("../../../../../src/app/auth/login-form/login-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/login-form/login-form.component.less")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/registration-form/registration-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"register\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            \r\n            <form #f=\"ngForm\" novalidate (ngSubmit)=\"registerUser(f)\">\r\n                \r\n                <div class=\"form-group\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"register-icon\">\r\n                                <div [inlineSVG]=\"'../../assets/icons/_UsernameIcon.svg'\"></div>\r\n                            </div>\r\n                            <div class=\"text-input\">\r\n                                <input id=\"username\" type=\"text\" required name=\"username\" tmFocus class=\"form-control\" placeholder=\"Username\">\r\n                            </div>\r\n                        </div>\r\n                    </div>                   \r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"register-icon\">\r\n                                <div [inlineSVG]=\"'../../assets/icons/_EmailIcon.svg'\"></div>\r\n                            </div>\r\n                            <div class=\"text-input\">\r\n                                <input id=\"email\" type=\"text\" required name=\"email\" validateEmail class=\"form-control\" placeholder=\"Email\">\r\n                            </div>\r\n                        </div>\r\n                    </div>                 <!--<small [hidden]=\"email.valid || (email.pristine && !submitted)\" class=\"text-danger\">Please enter a valid email</small>-->\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"register-icon\">\r\n                                <div [inlineSVG]=\"'../../assets/icons/_PasswordIcon.svg'\"></div>\r\n                            </div>\r\n                            <div class=\"text-input\">\r\n                                <input id=\"password\" type=\"password\" required name=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n                            </div>\r\n                        </div>\r\n                    </div>            \r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"register-icon\">\r\n                                <div [inlineSVG]=\"'../../assets/icons/_PasswordIcon.svg'\"></div>\r\n                            </div>\r\n                            <div class=\"text-input\">\r\n                                <input id=\"confirmPassword\" type=\"password\" required name=\"confirmPassword\" class=\"form-control\" placeholder=\"Confirm Password\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <div class=\"row\" id=\"register-submit\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"register-icon submit-icon\">\r\n                                <div [inlineSVG]=\"'../../assets/icons/_RegisterIcon.svg'\"></div>\r\n                            </div>\r\n                            <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"f.invalid || isRequesting\">Sign Up</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\r\n                    <strong>Oops!</strong> {{errors}}\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/registration-form/registration-form.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#register {\n  padding-left: 30px;\n  padding-right: 30px;\n  margin-top: 1em;\n}\n#register .text-input {\n  padding-left: 0;\n  width: 80%;\n  float: left;\n}\n#register .text-input input {\n  letter-spacing: 2px;\n  font-size: 11px;\n  height: 40px;\n  font-family: 'Raleway', sans-serif;\n  font-weight: 700;\n  color: white;\n}\n#register .form-group {\n  margin-bottom: .8em;\n}\n#register .register-icon {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  background-color: #060606;\n  float: left;\n  padding: .5em;\n  padding-left: .7em;\n}\n#register .register-icon svg {\n  height: 20px;\n  width: 20px;\n}\n#register input {\n  display: inline-block;\n  float: left;\n  height: 40px;\n  font-family: 'Raleway', sans-serif;\n  font-weight: 700;\n  color: white;\n}\n#register button {\n  width: 80%;\n  float: left;\n  background-color: #C80000 !important;\n  border: none !important;\n  border-radius: 3px !important;\n  border-top-left-radius: 0px !important;\n  border-bottom-left-radius: 0px !important;\n  text-transform: uppercase;\n  color: white !important;\n  font-size: 11px !important;\n  font-weight: 800 !important;\n  height: 40px;\n  letter-spacing: 2px;\n}\n#register .submit-icon {\n  background-color: #c80000;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  border-right: solid 1px #060606;\n}\n#register .submit-icon svg {\n  margin: 0;\n  margin-top: 0.2em;\n}\n#register span {\n  font-size: 11px;\n  color: white;\n}\n#register-submit {\n  margin-top: 1.5em;\n  margin-bottom: 1.5em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/registration-form/registration-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_modal_service__ = __webpack_require__("../../../../../src/app/services/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationFormComponent = (function () {
    function RegistrationFormComponent(modalService, userService, router) {
        this.modalService = modalService;
        this.userService = userService;
        this.router = router;
        this.submitted = false;
        this.visible = false;
    }
    RegistrationFormComponent.prototype.registerUser = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.userService.register(value.email, value.password, value.username, value.confirmPassword)
                .finally(function () { return _this.isRequesting = false; })
                .subscribe(function (registerResult) {
                if (registerResult) {
                    _this.userService.login(value.username, value.password)
                        .subscribe(function (loginResult) {
                        if (loginResult) {
                            _this.userService.loginSucceeded(true);
                        }
                    }, function (error) { return _this.errors = error; });
                }
            }, function (errors) { return _this.errors = errors; });
        }
    };
    RegistrationFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-registration-form',
            template: __webpack_require__("../../../../../src/app/auth/registration-form/registration-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/registration-form/registration-form.component.less")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_modal_service__["a" /* ModalService */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], RegistrationFormComponent);
    return RegistrationFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/charts/chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"stats-chart\">\r\n    <p-dialog [showHeader]=\"false\" [(visible)]=\"display\" (onHide)=\"onHide()\" [modal]=\"true\" [dismissableMask]=\"true\">\r\n        <div [chart]=\"chart\"></div>\r\n    </p-dialog>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/charts/chart.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#stats-chart .ui-dialog {\n  width: 90% !important;\n  border: none;\n  background: #2a2a2b;\n  /* Old browsers */\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(135deg, #2a2a2b 0%, #3e3e40 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#2a2a2b', endColorstr='#3e3e40', GradientType=1);\n  /* IE6-9 fallback on horizontal gradient */\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/charts/chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_highcharts__ = __webpack_require__("../../../../angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_stats_service__ = __webpack_require__("../../../../../src/app/services/stats.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_highcharts__ = __webpack_require__("../../../../highcharts/highcharts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_highcharts_highcharts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChartComponent = (function () {
    function ChartComponent(activatedRoute, statsService, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.statsService = statsService;
        this.router = router;
        this.display = false;
        this.activatedRoute.queryParams.subscribe(function (queryParams) {
            _this.scope = queryParams['scope'];
            _this.statId = queryParams['statId'];
            _this.cityId = queryParams['cityId'];
            _this.provinceId = queryParams['provinceId'];
        });
        if (this.scope === 'national') {
            this.statsService.getNationalChartData(this.statId).subscribe(function (chartData) {
                _this.chartData = chartData;
                _this.initializeChart(_this.chartData);
            });
        }
        else if (this.scope === 'provincial') {
            this.statsService.getProvincialChartData(this.statId, this.provinceId).subscribe(function (chartData) {
                _this.chartData = chartData;
                _this.initializeChart(_this.chartData);
            });
        }
        else if (this.scope === 'local') {
            this.statsService.getLocalChartData(this.statId, this.cityId).subscribe(function (chartData) {
                _this.chartData = chartData;
                _this.initializeChart(_this.chartData);
            });
        }
    }
    ChartComponent.prototype.onHide = function () {
        this.statsService.chartModalClosed();
        this.router.navigate([{ outlets: { modal: null } }]);
    };
    ChartComponent.prototype.initializeChart = function (chartData) {
        this.applyTheme();
        this.chart = new __WEBPACK_IMPORTED_MODULE_0_angular_highcharts__["a" /* Chart */]({
            chart: {
                type: 'line',
                zoomType: 'x',
                defaultSeriesType: 'line',
                alignTicks: true
            },
            title: {
                text: this.chartData.title
            },
            subtitle: {
                text: this.chartData.title
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: {},
                title: {
                    text: 'Date'
                }
            },
            yAxis: [
                {
                    labels: {
                        format: '{value}',
                    },
                    title: {
                        text: this.chartData.yAxisOne
                    }
                },
                {
                    labels: {
                        format: '{value}',
                    },
                    opposite: true,
                    title: {
                        text: this.chartData.yAxisTwo
                    }
                }
            ],
            credits: {
                enabled: false
            }
        });
        for (var s = 0; s < this.chartData.count; s++) {
            var series = JSON.parse(this.chartData.series[s]);
            var xdata = new Array();
            for (var n = 0; n < series.length; n++) {
                var tuple = series[n];
                var mstDate = new Date(tuple[0]);
                var date = new Date(mstDate.getUTCFullYear(), mstDate.getUTCMonth(), mstDate.getUTCDate());
                var year = date.getFullYear();
                var month = date.getMonth();
                var day = date.getDate();
                xdata.push([Date.UTC(year, month, day), tuple[1]]);
            }
            this.chart.addSerie({
                yAxis: this.chartData.seriesAxis[s],
                name: this.chartData.seriesName[s],
                data: xdata
            });
        }
        this.display = true;
    };
    ChartComponent.prototype.applyTheme = function () {
        __WEBPACK_IMPORTED_MODULE_4_highcharts_highcharts__["createElement"]('link', {
            href: 'https://fonts.googleapis.com/css?family=Unica+One',
            rel: 'stylesheet',
            type: 'text/css'
        }, null, document.getElementsByTagName('head')[0]);
        __WEBPACK_IMPORTED_MODULE_4_highcharts_highcharts__["theme"] = {
            colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
                '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
            chart: {
                backgroundColor: 'rgba(255,255,255,0.0)',
                style: {
                    fontFamily: '\'Unica One\', sans-serif'
                },
                plotBorderColor: '#606063'
            },
            title: {
                style: {
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '20px'
                }
            },
            subtitle: {
                style: {
                    color: '#E0E0E3',
                    textTransform: 'uppercase'
                }
            },
            xAxis: {
                gridLineColor: '#707073',
                labels: {
                    style: {
                        color: '#E0E0E3'
                    }
                },
                lineColor: '#707073',
                minorGridLineColor: '#505053',
                tickColor: '#707073',
                title: {
                    style: {
                        color: '#A0A0A3'
                    }
                }
            },
            yAxis: {
                gridLineColor: '#707073',
                labels: {
                    style: {
                        color: '#E0E0E3'
                    }
                },
                lineColor: '#707073',
                minorGridLineColor: '#505053',
                tickColor: '#707073',
                tickWidth: 1,
                title: {
                    style: {
                        color: '#A0A0A3'
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                style: {
                    color: '#F0F0F0'
                }
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        color: '#B0B0B3'
                    },
                    marker: {
                        lineColor: '#333'
                    }
                },
                boxplot: {
                    fillColor: '#505053'
                },
                candlestick: {
                    lineColor: 'white'
                },
                errorbar: {
                    color: 'white'
                }
            },
            legend: {
                itemStyle: {
                    color: '#E0E0E3'
                },
                itemHoverStyle: {
                    color: '#FFF'
                },
                itemHiddenStyle: {
                    color: '#606063'
                }
            },
            credits: {
                style: {
                    color: '#666'
                }
            },
            labels: {
                style: {
                    color: '#707073'
                }
            },
            drilldown: {
                activeAxisLabelStyle: {
                    color: '#F0F0F3'
                },
                activeDataLabelStyle: {
                    color: '#F0F0F3'
                }
            },
            navigation: {
                buttonOptions: {
                    symbolStroke: '#DDDDDD',
                    theme: {
                        fill: '#505053'
                    }
                }
            },
            // scroll charts
            rangeSelector: {
                buttonTheme: {
                    fill: '#505053',
                    stroke: '#000000',
                    style: {
                        color: '#CCC'
                    },
                    states: {
                        hover: {
                            fill: '#707073',
                            stroke: '#000000',
                            style: {
                                color: 'white'
                            }
                        },
                        select: {
                            fill: '#000003',
                            stroke: '#000000',
                            style: {
                                color: 'white'
                            }
                        }
                    }
                },
                inputBoxBorderColor: '#505053',
                inputStyle: {
                    backgroundColor: '#333',
                    color: 'silver'
                },
                labelStyle: {
                    color: 'silver'
                }
            },
            navigator: {
                handles: {
                    backgroundColor: '#666',
                    borderColor: '#AAA'
                },
                outlineColor: '#CCC',
                maskFill: 'rgba(255,255,255,0.1)',
                series: {
                    color: '#7798BF',
                    lineColor: '#A6C7ED'
                },
                xAxis: {
                    gridLineColor: '#505053'
                }
            },
            scrollbar: {
                barBackgroundColor: '#808083',
                barBorderColor: '#808083',
                buttonArrowColor: '#CCC',
                buttonBackgroundColor: '#606063',
                buttonBorderColor: '#606063',
                rifleColor: '#FFF',
                trackBackgroundColor: '#404043',
                trackBorderColor: '#404043'
            },
            // special colors for some of the
            legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
            background2: '#505053',
            dataLabelsColor: '#B0B0B3',
            textColor: '#C0C0C0',
            contrastTextColor: '#F0F0F3',
            maskColor: 'rgba(255,255,255,0.3)'
        };
        // Apply the theme
        __WEBPACK_IMPORTED_MODULE_4_highcharts_highcharts__["setOptions"](__WEBPACK_IMPORTED_MODULE_4_highcharts_highcharts__["theme"]);
    };
    ChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/charts/chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/charts/chart.component.less")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__services_stats_service__["a" /* StatsService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/interceptors/jwt.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JwtInterceptor = (function () {
    function JwtInterceptor(injector, router) {
        this.injector = injector;
        this.router = router;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        this.userService = this.injector.get(__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]);
        return next.handle(request).do(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["e" /* HttpResponse */]) {
                // do stuff with response if you want
            }
        }, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpErrorResponse */]) {
                if (err.status === 401) {
                    _this.router.navigate([{ outlets: { modal: 'auth' } }]);
                }
            }
        });
    };
    JwtInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/interceptors/token.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptor = (function () {
    function TokenInterceptor(injector) {
        this.injector = injector;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        this.userService = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]);
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + this.userService.getToken()
            }
        });
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/map/map-area/map-area.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"map-area\" [ngClass]=\"fullScreen ? 'map-area full-screen': 'map-area'\">\r\n    <div id='map'>\r\n        <a href=\"https://www.prairieapps.com\" class=\"prairieapps-wordmark\" target=\"_blank\">PrairieApplications</a>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/map/map-area/map-area.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".map-area {\n  background-color: #191A1A;\n  position: absolute;\n  top: 50px;\n  left: 0;\n  right: 300px;\n  bottom: 0;\n  transition: right 0.5s ease;\n}\n#map {\n  height: 100%;\n  width: 100%;\n}\n.full-screen {\n  right: 0;\n}\n.prairieapps-wordmark {\n  position: absolute;\n  display: block;\n  height: 60px;\n  width: 115px;\n  left: 0px;\n  bottom: 0px;\n  text-indent: -9999px;\n  z-index: 999999;\n  overflow: hidden;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/logos/badge.png") + ");\n  background-repeat: no-repeat;\n  background-position: 0 0;\n  background-size: 115px 60px;\n}\n.mapboxgl-popup-content {\n  font-weight: 600;\n  background-color: rgba(0, 0, 0, 0.75);\n  color: white;\n  font-family: 'Raleway', sans-serif;\n}\n.mapboxgl-popup-anchor-top .mapboxgl-popup-tip,\n.mapboxgl-popup-anchor-top-left .mapboxgl-popup-tip,\n.mapboxgl-popup-anchor-top-right .mapboxgl-popup-tip {\n  border-bottom-color: rgba(0, 0, 0, 0.75) !important;\n}\n.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip,\n.mapboxgl-popup-anchor-bottom-left .mapboxgl-popup-tip,\n.mapboxgl-popup-anchor-bottom-right .mapboxgl-popup-tip {\n  border-top-color: rgba(0, 0, 0, 0.75) !important;\n}\n.mapboxgl-popup-anchor-left .mapboxgl-popup-tip {\n  border-right-color: rgba(0, 0, 0, 0.75) !important;\n}\n.mapboxgl-popup-anchor-right .mapboxgl-popup-tip {\n  border-left-color: rgba(0, 0, 0, 0.75) !important;\n}\n.city-popup-header {\n  width: 25rem;\n  padding: 1rem 1rem;\n  margin-bottom: 1.5rem;\n  background: rgba(25, 25, 25, 0.75);\n}\n.city-popup-close-btn {\n  border: none;\n  background: transparent;\n  margin: .5rem 0rem;\n  float: right;\n  position: absolute;\n  top: 4px;\n  right: 8px;\n}\n.btn-statistics {\n  width: 70%;\n  background-color: #ac0202;\n  border-style: none;\n  padding: 1rem;\n}\n.btn-statistics:after {\n  font-family: 'FontAwesome';\n  content: \"\\F178\";\n  padding-left: 1rem;\n}\n.city-popup-image {\n  height: 4rem;\n  background-repeat: no-repeat;\n  float: left;\n  width: 4rem;\n  background-color: rgba(32, 32, 32, 0.75);\n  border-radius: 4rem;\n  margin-right: 2rem;\n  text-align: center;\n}\n.city-popup-footer {\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map/map-area/map-area.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_map_service__ = __webpack_require__("../../../../../src/app/services/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mapbox_gl__ = __webpack_require__("../../../../mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mapbox_gl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mapbox_gl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapComponent = (function () {
    function MapComponent(mapService, zone, router, renderer) {
        var _this = this;
        this.mapService = mapService;
        this.zone = zone;
        this.router = router;
        this.renderer = renderer;
        this.fullScreen = false;
        window['angularComponentRef'] = {
            zone: this.zone,
            componentFn: function () { return _this.closePopup(); },
            viewStatsBtnFn: function (provinceId, cityId) { return _this.onViewStatsClick(provinceId, cityId); },
            component: this
        };
        mapService.renderer = renderer;
    }
    MapComponent.prototype.updateToggled = function (sidePanelActive) {
        this.mapService.resizeMapForMilliseconds(500);
        this.fullScreen = !sidePanelActive;
    };
    MapComponent.prototype.closePopup = function () {
        this.mapService.popup.remove();
    };
    MapComponent.prototype.onViewStatsClick = function (provinceId, cityId) {
        this.router.navigate(['/stats'], { queryParams: { provinceId: provinceId, cityId: cityId } });
    };
    MapComponent.prototype.ngOnInit = function () {
        var map = new __WEBPACK_IMPORTED_MODULE_2_mapbox_gl__["Map"]({
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v9',
            center: [-98.93, 56.43],
            zoom: 2,
            logoPosition: 'bottom-right'
        });
        this.mapService.map = map;
        this.mapService.initializeMap();
    };
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-map',
            template: __webpack_require__("../../../../../src/app/map/map-area/map-area.component.html"),
            styles: [__webpack_require__("../../../../../src/app/map/map-area/map-area.component.less")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_map_service__["a" /* MapService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/map/map-popup/map-popup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"city-popup-header\">\r\n  <button id=\"city-popup-close-btn\" class=\"city-popup-close-btn\" onclick=\"window.angularComponentRef.zone.run(function () { window.angularComponentRef.componentFn()})\"><i class=\"fa fa-close\"></i></button>\r\n<div class=\"city-popup-image\">\r\n  <div [inlineSVG]=\"'assets/icons/_MapPointer.svg'\"></div>\r\n</div>\r\n<div>\r\n  <div>CITY: {{popupInfo.cityName}}</div>\r\n  <div>PROVINCE: {{popupInfo.provinceName}}</div>\r\n</div>\r\n</div>\r\n<div class=\"city-popup-footer\">\r\n  <button #viewStatsBtn class=\"btn-statistics\">VIEW STATISTICS</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/map/map-popup/map-popup.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map/map-popup/map-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapPopupComponent = (function () {
    function MapPopupComponent(renderer) {
        this.renderer = renderer;
    }
    MapPopupComponent.prototype.ngOnInit = function () {
        var listener = this.renderer.listen(this.viewStatsBtn.nativeElement, 'click', function (evt) { console.log('clicked'); });
    };
    MapPopupComponent.prototype.onViewStatsClick = function (cityId, provinceId) {
        console.log(cityId + ' ' + provinceId);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MapPopupComponent.prototype, "popupInfo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('viewStatsBtn'),
        __metadata("design:type", Object)
    ], MapPopupComponent.prototype, "viewStatsBtn", void 0);
    MapPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-map-popup',
            template: __webpack_require__("../../../../../src/app/map/map-popup/map-popup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/map/map-popup/map-popup.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], MapPopupComponent);
    return MapPopupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/news/news-article.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsArticle; });
var NewsArticle = (function () {
    function NewsArticle() {
    }
    return NewsArticle;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='navbar navbar-inverse navbar-fixed-top'>\r\n    <div class='navbar-header'>\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#nav-buttons-collapse\" aria-expanded=\"false\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class='navbar-brand' [routerLink]=\"['/home']\"><img class=\"img-responsive\" src=\"assets/images/logos/navbar-logo.png\" /></a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"nav-buttons-collapse\">\r\n        <ul [ngClass]=\"active ? 'nav navbar-nav navbar-right navbar-active' : 'nav navbar-nav navbar-right'\">\r\n            <li [ngClass]=\"activePage('/news')\"><a routerLink=\"/news\"><div [inlineSVG]=\"'assets/icons/_NewsIcon.svg'\"></div></a></li>\r\n            <li [ngClass]=\"activePage('/stats')\"><a routerLink=\"/stats\"><div [inlineSVG]=\"'assets/icons/_StatsIcon.svg'\"></div></a></li>\r\n            <li [ngClass]=\"activePage('/account')\"><a routerLink=\"/account\"><div [inlineSVG]=\"'assets/icons/_SettingsIcon.svg'\"></div></a></li>\r\n            <li (click)=\"sidePanelToggleClicked()\">\r\n                <div [inlineSVG]=\"active ? 'assets/icons/_ArrowRightIcon.svg' : 'assets/icons/_ArrowLeftIcon.svg' \"></div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* To change hamburger menu breakpoint */\n@media (min-width: 470px) {\n  .navbar-header {\n    float: left;\n  }\n  .navbar-toggle {\n    display: none;\n  }\n  .navbar-collapse {\n    border-top: 0 none;\n    box-shadow: none;\n    width: auto;\n  }\n  .navbar-collapse.collapse {\n    display: block !important;\n    height: auto !important;\n    padding-bottom: 0;\n    overflow: visible !important;\n  }\n  .navbar-fixed-top .navbar-collapse {\n    padding: 0;\n  }\n  .navbar-nav {\n    float: left !important;\n    margin: 0;\n  }\n  .navbar-right {\n    float: right !important;\n    margin: 0;\n  }\n  .navbar-nav > li {\n    float: left;\n  }\n  .navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n}\n/* End - To change hamburger menu breakpoint */\n.navbar {\n  background-color: #0D0808;\n  border-bottom: 1.3px solid red;\n}\n.navbar-nav {\n  width: 300px;\n  min-height: 50px;\n  margin-right: 0;\n}\n.navbar-nav.navbar-active {\n  background-color: #AC0202;\n}\n.navbar-nav > li > a {\n  padding: 0;\n}\n.navbar-nav > li:last-child {\n  padding: 0 15px 0 0;\n  float: right;\n  background-color: #AC0202;\n}\n.navbar-active > li:last-child svg {\n  fill: #1A1717 !important;\n}\n.navbar-header {\n  margin-left: 1.5em;\n  margin-top: 0.35em;\n  margin-bottom: 0.36em;\n}\n.navbar-brand {\n  padding: 5px 0;\n}\n.navbar-brand img {\n  width: 120px;\n  height: 100%;\n}\n.navbar li {\n  position: relative;\n}\n.navbar li.active-page::after {\n  content: '';\n  position: absolute;\n  left: 40%;\n  top: 100%;\n  width: 0;\n  height: 0;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 6px solid #C80000;\n  clear: both;\n}\n.navbar li div {\n  padding: 0 20px 0 20px;\n  margin-top: 1.4em;\n  margin-bottom: 1.1em;\n  border-right: 1px solid #CF4C4C;\n}\n.navbar li div svg {\n  fill: white;\n  fill-rule: evenodd;\n  height: 20px !important;\n  width: 20px;\n}\n.navbar li:nth-last-child(2) div {\n  border: none;\n}\n.navbar li:last-child {\n  border: none;\n  float: right;\n}\n.navbar li:last-child div {\n  border: none;\n  cursor: pointer;\n  padding-right: 0;\n}\n.navbar-nav li.active-page {\n  box-shadow: inset 0px -4px 0px 0px #C80000;\n}\n.navbar-nav.navbar-active li.active-page {\n  background-color: #C80000;\n  box-shadow: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_map_area_map_area_component__ = __webpack_require__("../../../../../src/app/map/map-area/map-area.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(router) {
        this.router = router;
        this.active = true;
    }
    NavbarComponent.prototype.sidePanelToggleClicked = function () {
        this.active = !this.active;
        this.map.updateToggled(this.active);
    };
    NavbarComponent.prototype.activePage = function (page) {
        return page === this.router.url ? 'active-page' : '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__map_map_area_map_area_component__["a" /* MapComponent */])
    ], NavbarComponent.prototype, "map", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.less")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/base.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");

var BaseService = (function () {
    function BaseService() {
    }
    BaseService.prototype.handleError = function (error) {
        var applicationError = error.headers.get('Application-Error');
        // either applicationError in header or model error in body
        if (applicationError) {
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].throw(applicationError);
        }
        var modelStateErrors = '';
        var serverError = error.json();
        if (!serverError.type) {
            for (var key in serverError) {
                if (serverError[key]) {
                    modelStateErrors += serverError[key] + '\n';
                }
            }
        }
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].throw(modelStateErrors || 'Server error');
    };
    return BaseService;
}());



/***/ }),

/***/ "../../../../../src/app/services/geo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var GeoService = (function () {
    function GeoService(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
    }
    GeoService.prototype.getProvinces = function () {
        return this.http.get(this.baseUrl + 'api/geo/provinces');
    };
    GeoService.prototype.getCitiesByProvinceId = function (provinceId) {
        return this.http.get(this.baseUrl + 'api/geo/cities?provinceId=' + provinceId);
    };
    GeoService.prototype.getCities = function () {
        return this.http.get(this.baseUrl + 'api/geo/cities');
    };
    GeoService.prototype.getCanadaBoundaries = function () {
        return this.http.get(this.baseUrl + 'api/geo/boundaries/national');
    };
    GeoService.prototype.getProvinceBoundaries = function () {
        return this.http.get(this.baseUrl + 'api/geo/boundaries/provincial');
    };
    GeoService.prototype.getProvinceAreas = function () {
        return this.http.get(this.baseUrl + 'api/geo/areas/provincial');
    };
    GeoService.prototype.getCityAreas = function () {
        return this.http.get(this.baseUrl + 'api/geo/areas/local');
    };
    GeoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], String])
    ], GeoService);
    return GeoService;
}());



/***/ }),

/***/ "../../../../../src/app/services/map.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__ = __webpack_require__("../../../../mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mapbox_gl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mapbox_gl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__geo_service__ = __webpack_require__("../../../../../src/app/services/geo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map_popup_map_popup_component__ = __webpack_require__("../../../../../src/app/map/map-popup/map-popup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapService = (function () {
    function MapService(geoService, resolver, injector) {
        this.geoService = geoService;
        this.resolver = resolver;
        this.injector = injector;
        this.citiesFeatureCollection = {
            type: 'FeatureCollection',
            features: []
        };
        this.provincesFeatureCollection = {
            type: 'FeatureCollection',
            features: []
        };
        this.citySelected = false;
        this.provinceSelected = false;
        this.popup = new __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__["Popup"]({
            closeButton: false,
            closeOnClick: false,
        });
        __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__["accessToken"] = 'pk.eyJ1IjoicHJhaXJpZWFwcHMiLCJhIjoiY2o2Y2xjd2loMXJqazMzb2xlNzE5ZTBvZyJ9.fNYlFI_mXg_TcaJ4gOaDCA';
        this.baseMaps = [
            { name: 'Street', id: 'street' },
            { name: 'Bright', id: 'bright' },
            { name: 'Light', id: 'light' },
            { name: 'Satellite', id: 'satellite' }
        ];
    }
    MapService.prototype.initializeMap = function () {
        var _this = this;
        this.map.on('load', function () {
            _this.initializeCanada();
            _this.initializeProvinces();
            _this.initializeCities();
        });
    };
    MapService.prototype.initializeCanada = function () {
        var _this = this;
        var canadaBoundaries;
        this.geoService.getCanadaBoundaries().subscribe(function (result) {
            canadaBoundaries = result;
            _this.map.addLayer({
                'id': 'canada',
                'type': 'fill',
                'source': { type: 'geojson', data: canadaBoundaries },
                'layout': {},
                'paint': {
                    'fill-color': '#191a1a',
                    'fill-opacity': 0.8
                }
            });
            _this.map.fitBounds([[-143.4375, 45.213003555993964], [-49.74609374999999, 67.06743335108298]]);
        });
    };
    MapService.prototype.initializeProvinces = function () {
        var _this = this;
        var provinceBoundaries;
        this.geoService.getProvinceAreas().subscribe(function (result) {
            provinceBoundaries = result;
            _this.map.addLayer({
                'id': 'province-fills',
                'type': 'fill',
                'source': { 'type': 'geojson', 'data': provinceBoundaries },
                'layout': {},
                'paint': {
                    'fill-color': '#627BC1',
                    'fill-opacity': 0
                }
            });
            _this.map.addLayer({
                'id': 'province-borders',
                'type': 'line',
                'source': { 'type': 'geojson', 'data': provinceBoundaries },
                'layout': {},
                'paint': {
                    'line-color': '#627BC1',
                    'line-width': 1,
                    'line-opacity': 1
                }
            });
            _this.map.addLayer({
                'id': 'province-fills-hover',
                'type': 'fill',
                'source': { 'type': 'geojson', 'data': provinceBoundaries },
                'layout': {},
                'paint': {
                    'fill-color': '#627BC1',
                    'fill-opacity': 0.2
                },
                'filter': ['==', 'name', '']
            });
            // When the user moves their mouse over the state-fill layer, we'll update the filter in
            // the state-fills-hover layer to only show the matching state, thus making a hover effect.
            _this.map.setFilter('province-borders', ['==', 'name', '']);
            _this.map.on('mousemove', 'province-fills', function (e) {
                _this.map.setFilter('province-borders', ['==', 'name', e.features[0].properties.name]);
            });
            // Reset the state-fills-hover layer's filter when the mouse leaves the layer.
            _this.map.on('mouseleave', 'province-fills', function () {
                _this.map.setFilter('province-borders', ['==', 'name', '']);
            });
            _this.map.on('click', 'province-fills', function (e) {
                if (!_this.citySelected && _this.map.getZoom() < 9) {
                    // zoom to the selected province
                    var provinceName = e.features[0].properties.name;
                    _this.flyToProvince(provinceName);
                }
                _this.popup.remove();
            });
            // Change the cursor to a pointer when the mouse is over the state layer.
            _this.map.on('mouseenter', 'state-fills', function () {
                _this.provinceSelected = true;
                _this.map.getCanvas().style.cursor = 'pointer';
            });
            // Change it back to a pointer when it leaves.
            _this.map.on('mouseleave', 'state-fills', function () {
                _this.provinceSelected = false;
                _this.map.getCanvas().style.cursor = '';
            });
        });
        this.geoService.getProvinces().subscribe(function (result) {
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var province = result_1[_i];
                _this.provincesFeatureCollection.features.push({
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [province.lng, province.lat]
                    },
                    properties: {
                        province: province.name,
                        provinceId: province.id,
                        zoomLevel: province.zoom
                    }
                });
            }
        });
    };
    MapService.prototype.initializeCities = function () {
        var _this = this;
        this.geoService.getCities().subscribe(function (cities) {
            for (var _i = 0, cities_1 = cities; _i < cities_1.length; _i++) {
                var city = cities_1[_i];
                _this.citiesFeatureCollection.features.push({
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [city.lng, city.lat]
                    },
                    properties: {
                        city: city.name,
                        province: city.provinceName,
                        cityId: city.id,
                        provinceId: city.provinceId,
                        zoomLevel: city.zoom
                    }
                });
            }
            _this.citiesFeatureCollection.features.forEach(function (marker) {
                // create a HTML element for each feature
                var el = document.createElement('div');
                el.className = 'city-default-marker';
                // make a marker for each feature and add to the map
                new __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__["Marker"](el)
                    .setLngLat(marker.geometry.coordinates)
                    .addTo(_this.map);
            });
            _this.map.addLayer({
                'id': 'cities',
                'type': 'circle',
                'source': { type: 'geojson', data: _this.citiesFeatureCollection },
                'paint': {
                    'circle-color': '#5bdea2',
                    'circle-radius': 10,
                    'circle-opacity': 0.2
                }
            });
            _this.map.addLayer({
                'id': 'cities2',
                'type': 'circle',
                'source': { type: 'geojson', data: _this.citiesFeatureCollection },
                'paint': {
                    'circle-color': '#b8ff5a',
                    'circle-radius': 5,
                    'circle-opacity': 0.7
                }
            });
            _this.map.on('mouseenter', 'cities', function (e) {
                _this.citySelected = true;
                // Change the cursor style as a UI indicator.
                _this.map.getCanvas().style.cursor = 'pointer';
                var selectedCity = e.features[0].properties;
                var prov = selectedCity.province;
                if (prov === 'Prince Edward Island') {
                    prov = 'P.E.I.';
                }
                var popupInfo = {
                    provinceId: selectedCity.provinceId,
                    provinceName: prov,
                    cityId: selectedCity.cityId,
                    cityName: selectedCity.city
                };
                var factory = _this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__map_map_popup_map_popup_component__["a" /* MapPopupComponent */]);
                var component = factory.create(_this.injector);
                component.instance.popupInfo = popupInfo;
                component.changeDetectorRef.detectChanges();
                // let viewStatsBtn = component.location.nativeElement.querySelector('.btn-statistics');
                // let listener = this.renderer.listen(viewStatsBtn, 'click', (evt) => {console.log('clicked')});
                _this.popup.setLngLat(e.features[0].geometry.coordinates)
                    .setHTML(component.location.nativeElement.innerHTML)
                    .addTo(_this.map);
            });
            _this.map.on('mouseleave', 'cities', function () {
                _this.citySelected = false;
                _this.map.getCanvas().style.cursor = '';
                // popup.remove();
            });
            _this.map.on('click', 'cities', function (e) {
                var cityName = e.features[0].properties.city;
                _this.flyToCity(cityName);
                _this.popup.remove();
            });
            _this.map.on('zoomend', function (e) {
                if (!_this.map.isMoving()) {
                    if (_this.map.getZoom() < 8) {
                        _this.map.setPitch(0);
                    }
                }
            });
        });
    };
    MapService.prototype.flyToCanada = function () {
        this.map.fitBounds([[-143.4375, 45.213003555993964], [-49.74609374999999, 67.06743335108298]]);
    };
    MapService.prototype.flyToProvince = function (provinceName) {
        var center = this.provincesFeatureCollection.features
            .filter(function (x) { return x.properties.province === provinceName; })[0]
            .geometry.coordinates;
        var zoomLevel = this.provincesFeatureCollection.features
            .filter(function (x) { return x.properties.province === provinceName; })[0]
            .properties.zoomLevel;
        this.map.flyTo({
            center: center,
            zoom: zoomLevel,
            bearing: 0,
            speed: 0.7,
            curve: 1,
            pitch: 0
        });
        // map.fitBounds([[bbox.xMin, bbox.yMin], [bbox.xMax, bbox.yMax]]);
    };
    MapService.prototype.flyToCity = function (cityName) {
        var center = this.citiesFeatureCollection.features.filter(function (x) { return x.properties.city === cityName; })[0].geometry.coordinates;
        var zoomLevel = this.citiesFeatureCollection.features.filter(function (x) { return x.properties.city === cityName; })[0].properties.zoomLevel;
        this.map.flyTo({
            center: center,
            zoom: zoomLevel,
            bearing: 0,
            speed: 0.7,
            curve: 1,
            pitch: 55
        });
        // map.fitBounds([[bbox.xMin, bbox.yMin], [bbox.xMax, bbox.yMax]]);
    };
    MapService.prototype.resizeMapForMilliseconds = function (ms) {
        var map = this.map;
        var startTime = (new Date()).getTime();
        var interval = 5;
        (function p() {
            map.resize();
            if (((new Date).getTime() - startTime) <= ms) {
                setTimeout(p, interval);
            }
        })();
    };
    MapService.prototype.getBoundingBox = function (data, isInverted) {
        var bounds = {};
        var latitude;
        var longitude;
        var firstElement;
        // coordinates[0] is the whole map coords (if we are using an inverted geometry)
        if (isInverted) {
            firstElement = 1;
        }
        else {
            firstElement = 0;
        }
        var polygons = data.geometry.coordinates;
        if (data.geometry.type === 'Polygon') {
            for (var i = firstElement; i < polygons.length; i++) {
                var polygon = data.geometry.coordinates[i];
                for (var j = 0; j < polygon.length; j++) {
                    longitude = polygon[j][0];
                    latitude = polygon[j][1];
                    bounds.xMin = bounds.xMin < longitude ? bounds.xMin : longitude;
                    bounds.xMax = bounds.xMax > longitude ? bounds.xMax : longitude;
                    bounds.yMin = bounds.yMin < latitude ? bounds.yMin : latitude;
                    bounds.yMax = bounds.yMax > latitude ? bounds.yMax : latitude;
                }
            }
        }
        else if (data.geometry.type === 'MultiPolygon') {
            for (var i = firstElement; i < polygons.length; i++) {
                var polygon = data.geometry.coordinates[i][0];
                for (var j = 0; j < polygon.length; j++) {
                    longitude = polygon[j][0];
                    latitude = polygon[j][1];
                    bounds.xMin = bounds.xMin < longitude ? bounds.xMin : longitude;
                    bounds.xMax = bounds.xMax > longitude ? bounds.xMax : longitude;
                    bounds.yMin = bounds.yMin < latitude ? bounds.yMin : latitude;
                    bounds.yMax = bounds.yMax > latitude ? bounds.yMax : latitude;
                }
            }
        }
        return bounds;
    };
    MapService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__geo_service__["a" /* GeoService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "../../../../../src/app/services/modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalService = (function () {
    function ModalService() {
        this.loginActive = false;
        this.loginActiveEmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ModalService.prototype.toggleLoginActiveState = function () {
        this.loginActive = !this.loginActive;
        this.loginActiveEmit.next(this.loginActive);
    };
    ModalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "../../../../../src/app/services/news.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var NewsService = (function () {
    function NewsService(http, baseUrl, userService) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.userService = userService;
    }
    NewsService.prototype.getArticles = function () {
        return this.http.get(this.baseUrl + 'api/news/articles');
    };
    NewsService.prototype.getComments = function (articleId) {
        return this.http.get(this.baseUrl + 'api/comments/comments/' + articleId);
    };
    NewsService.prototype.articleUpvoteClicked = function (articleId) {
        return this.http.post(this.baseUrl + 'api/news/upvotearticle', { articleId: articleId });
    };
    NewsService.prototype.articleDownvoteClicked = function (articleId) {
        return this.http.post(this.baseUrl + 'api/news/downvotearticle', { articleId: articleId });
    };
    NewsService.prototype.commentUpvoteClicked = function (commentId) {
        return this.http.post(this.baseUrl + 'api/comments/upvotecomment', { commentId: commentId });
    };
    NewsService.prototype.commentDownvoteClicked = function (commentId) {
        return this.http.post(this.baseUrl + 'api/comments/downvotecomment', { commentId: commentId });
    };
    NewsService.prototype.getCommentUserVotes = function (commentIds) {
        return this.http.post(this.baseUrl + 'api/comments/commentuservotes', { commentIds: commentIds });
    };
    NewsService.prototype.newComment = function (articleId, comment) {
        return this.http.post(this.baseUrl + 'api/comments/savecomment', { articleId: articleId, comment: comment });
    };
    NewsService.prototype.getArticlesUserVotes = function (articleIds) {
        return this.http.post(this.baseUrl + 'api/news/articleuservotes', { articleIds: articleIds });
    };
    NewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], String, __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/stats.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var StatsService = (function () {
    function StatsService(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.chartModalClosedObservable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    StatsService.prototype.getNationalStats = function () {
        return this.http.get(this.baseUrl + 'api/stats/national');
    };
    StatsService.prototype.getProvincialStats = function (provinceId) {
        return this.http.get(this.baseUrl + 'api/stats/provincial?provinceId=' + provinceId);
    };
    StatsService.prototype.getLocalStats = function (cityId) {
        return this.http.get(this.baseUrl + 'api/stats/local?cityId=' + cityId);
    };
    StatsService.prototype.getNationalChartData = function (statId) {
        return this.http.get(this.baseUrl + 'api/chart/national?statId=' + statId);
    };
    StatsService.prototype.getProvincialChartData = function (statId, provinceId) {
        return this.http.get(this.baseUrl + 'api/chart/provincial?provinceId=' + provinceId + '&statId=' + statId);
    };
    StatsService.prototype.getLocalChartData = function (statId, cityId) {
        return this.http.get(this.baseUrl + 'api/chart/local?cityId=' + cityId + '&statId=' + statId);
    };
    StatsService.prototype.chartModalClosed = function () {
        this.chartModalClosedObservable.next();
    };
    StatsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], String])
    ], StatsService);
    return StatsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_config_service__ = __webpack_require__("../../../../../src/app/utils/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_service__ = __webpack_require__("../../../../../src/app/services/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var UserService = (function (_super) {
    __extends(UserService, _super);
    function UserService(http, configService, baseUrl) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.configService = configService;
        _this.baseUrl = baseUrl;
        _this.loggedIn = false;
        _this.loggedInObservable = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        _this.passwordChangeObservable = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        _this.loggedIn = _this.determineIfLoggedIn();
        return _this;
    }
    UserService.prototype.register = function (email, password, userName, confirmPassword) {
        return this.http.post(this.baseUrl + 'api/account/register', { email: email, password: password, userName: userName, confirmPassword: confirmPassword })
            .map(function (res) { return true; })
            .catch(this.handleError);
    };
    UserService.prototype.login = function (userName, password) {
        return this.http.post(this.baseUrl + 'api/account/login', { userName: userName, password: password })
            .map(function (res) { return res; })
            .map(function (res) {
            localStorage.setItem('auth_token', res.auth_token);
            localStorage.setItem('token_valid_for', String(res.expires_in));
            localStorage.setItem('token_issued_at', res.issued_at);
            return true;
        })
            .catch(this.handleError);
    };
    UserService.prototype.changePassword = function (currentPassword, newPassword) {
        var response = this.http.post(this.baseUrl + 'api/account/changepassword', { currentPassword: currentPassword, newPassword: newPassword });
        return response;
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('token_valid_for');
        localStorage.removeItem('token_issued_at');
    };
    UserService.prototype.isLoggedIn = function () {
        return this.determineIfLoggedIn();
    };
    UserService.prototype.loginSucceeded = function (loggedIn) {
        this.loggedInObservable.next(loggedIn);
    };
    UserService.prototype.changePasswordSucceeded = function (passwordChanged) {
        this.passwordChangeObservable.next(passwordChanged);
    };
    UserService.prototype.getToken = function () {
        return localStorage.getItem('auth_token');
    };
    UserService.prototype.determineIfLoggedIn = function () {
        if (!!localStorage.getItem('auth_token')) {
            var issuedAt = localStorage.getItem('token_issued_at');
            var validFor = localStorage.getItem('token_valid_for');
            if (issuedAt != null && validFor != null) {
                var issuedAtDate = new Date(issuedAt);
                var validForSeconds = +validFor;
                issuedAtDate.setSeconds(issuedAtDate.getSeconds() + validForSeconds);
                var expiry = issuedAtDate;
                var now = new Date();
                if (now < expiry) {
                    return true;
                }
            }
        }
        return false;
    };
    UserService.prototype.getUserInformation = function () {
        return this.http.get(this.baseUrl + 'api/account/getuserinformation');
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__utils_config_service__["a" /* ConfigService */], String])
    ], UserService);
    return UserService;
}(__WEBPACK_IMPORTED_MODULE_2__base_service__["a" /* BaseService */]));



/***/ }),

/***/ "../../../../../src/app/sidebar/account/account-panel/account.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"account-panel-inner\">\r\n    <ngx-loading [show]=\"loading\"></ngx-loading>\r\n    <div *ngIf=\"userInfo\" id=\"profile\" class=\"row\">\r\n        <div id=\"account-profile-icon\" class=\"col-sm-12\">\r\n            <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i>\r\n        </div>\r\n        <div class=\"col-sm-12\"><h5>logged in as:</h5></div>\r\n        <div class=\"col-sm-12\">\r\n            <p>{{userInfo.userName}}</p>\r\n        </div>\r\n        <form #f=\"ngForm\" novalidate (ngSubmit)=\"logout()\" id=\"logoutForm\">\r\n            <ul>\r\n                <li>\r\n                    <button type=\"submit\">Log out  <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i></button>\r\n                </li>\r\n            </ul>\r\n        </form>\r\n        <div class=\"col-sm-12\">\r\n            <span>-</span> <a id=\"change-password-link\" (click)=\"changePassword()\">Change Password</a> <span>-</span>\r\n        </div>\r\n    </div>\r\n    <hr />\r\n    <!--<div id=\"recent-comments\">\r\n        <div class=\"recent-comments-simplebar\">\r\n            <div class=\"account-panel-recent-comment\">\r\n                <p class=\"account-panel-article-title\">{{articleTitle}}</p>\r\n                <span>\"</span><span class=\"account-panel-comment-body\">{{comment}}</span><span>\"</span>\r\n            </div>\r\n        </div>\r\n        <p>No comments added</p>\r\n        <button (click)=\"goToRecentNews()\" id=\"view-recent-news-btn\">View Recent News</button>\r\n    </div>-->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/sidebar/account/account-panel/account.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#account-panel {\n  width: 300px;\n  font-family: 'Raleway', sans-serif;\n}\n#account-panel-inner button {\n  font-weight: 600;\n  font-size: 13px;\n  display: block;\n  height: 35px;\n  line-height: 35px;\n  letter-spacing: 1px;\n  border: none;\n  border-radius: 1px;\n  color: white;\n  text-transform: uppercase;\n  text-decoration: none;\n  text-align: center;\n  cursor: pointer;\n  margin: auto;\n}\n#account-panel-inner {\n  overflow: hidden;\n}\n#account-panel-inner hr {\n  width: 90%;\n  border-color: #1B1717;\n  text-align: center;\n}\n#profile {\n  padding: 2em;\n  text-align: center;\n  position: relative;\n  padding-bottom: .5em;\n}\n#profile div {\n  left: 50%;\n  transform: translateX(-50%);\n  -webkit-transform: translateX(-50%);\n}\n#profile button {\n  margin-top: 2em;\n  background-color: #AC0202;\n  width: 55%;\n  font-weight: 700;\n  margin-bottom: 2em;\n}\n#profile a {\n  color: white;\n  text-decoration: underline;\n  cursor: pointer;\n}\n#profile p {\n  margin-top: .5em;\n  margin-bottom: 0;\n  color: white;\n  font-size: 14px;\n  font-weight: 700;\n}\n#profile h5 {\n  text-transform: uppercase;\n  font-weight: 200;\n  color: white;\n  font-size: 12px;\n  margin-bottom: 0;\n  margin-top: 1.5em;\n  letter-spacing: 1px;\n}\n#profile span {\n  color: white;\n}\n#profile ul {\n  margin-left: 0;\n  padding-left: 0;\n  list-style: none;\n}\n#recent-comments {\n  width: 100%;\n  margin: 2em;\n  margin-right: 0;\n  margin-left: 0;\n  padding-right: 2em;\n  padding-left: 2em;\n  padding-top: .5em;\n  text-align: center;\n  overflow: hidden;\n}\n#recent-comments p {\n  color: white;\n}\n#recent-comments h5 {\n  text-transform: uppercase;\n  text-align: left;\n  font-weight: 200;\n  color: white;\n  margin-bottom: 2em;\n}\n#recent-comments button {\n  background-color: #191515;\n  width: 80%;\n  margin-top: 1.5em;\n}\n#account-profile-icon {\n  font-size: 20px;\n  margin-top: 0 !important;\n  color: white;\n  height: 60px;\n  width: 60px;\n  background-color: #191515;\n  display: block;\n  line-height: 60px;\n}\n#account-panel-inner .account-panel-recent-comment {\n  text-align: left;\n  color: white;\n  margin-bottom: 2em;\n}\n#recent-comments .account-panel-article-title {\n  font-size: 12px;\n  color: #EE0000;\n  text-decoration: underline;\n  font-weight: 700;\n}\n#recent-comments .account-panel-comment-body {\n  font-size: 12px;\n}\n@media (min-width: 768px) {\n  #profile .col-sm-12 {\n    float: none;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/account/account-panel/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountComponent = (function () {
    function AccountComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.articleTitle = 'Article Title';
        this.comment = 'Comment';
        this.loading = false;
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.userService.getUserInformation().subscribe(function (userInfo) {
            _this.userInfo = userInfo;
            _this.loading = false;
        });
    };
    AccountComponent.prototype.logout = function () {
        this.userService.logout();
        this.router.navigate(['/news']);
    };
    AccountComponent.prototype.goToRecentNews = function () {
        this.router.navigateByUrl('/news');
    };
    AccountComponent.prototype.changePassword = function () {
        this.router.navigate([{ outlets: { modal: 'changePassword' } }]);
    };
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account',
            template: __webpack_require__("../../../../../src/app/sidebar/account/account-panel/account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidebar/account/account-panel/account.component.less")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sidebar/account/account-panel/recent-comments/recent-comments.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/sidebar/account/account-panel/recent-comments/recent-comments.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/account/account-panel/recent-comments/recent-comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentCommentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RecentCommentsComponent = (function () {
    function RecentCommentsComponent() {
    }
    RecentCommentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-recent-comments',
            template: __webpack_require__("../../../../../src/app/sidebar/account/account-panel/recent-comments/recent-comments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidebar/account/account-panel/recent-comments/recent-comments.component.less")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        })
    ], RecentCommentsComponent);
    return RecentCommentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sidebar/news/new-comment/new-comment.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"new-comment\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-8\">\r\n            <textarea class=\"comment-textarea\" placeholder=\"Enter your comment here.\" [(ngModel)]=\"comment\"></textarea>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"submit-comment-btn-container\" (click)=\"submitNewComment()\">\r\n                <div class=\"submit-comment-btn\">\r\n                    <div [inlineSVG]=\"'assets/icons/_SubmitCommentIcon.svg'\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/sidebar/news/new-comment/new-comment.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".new-comment-btn .comments-loader svg {\n  margin-left: 2em !important;\n  fill: white;\n}\n.new-comment-btn .comments-loader circle {\n  fill: white !important;\n}\n.new-comment-btn svg {\n  fill: white;\n}\n.new-comment-btn {\n  font-family: 'Oswald', sans-serif;\n  font-weight: 500;\n  display: inline-block;\n  height: 44px;\n  line-height: 3em;\n  border: none;\n  border-radius: 1px;\n  color: white;\n  float: left;\n  background-color: #AC0202;\n  width: 25%;\n  text-transform: uppercase;\n  margin-right: 0;\n  right: 0;\n  text-decoration: none;\n  text-align: center;\n  cursor: pointer;\n  margin-left: 0;\n}\n.new-comment-btn svg {\n  margin-top: 13px;\n  width: 30px;\n  height: 20px;\n  margin-left: .5em;\n}\n.new-comment .row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.new-comment .row > [class*='col-'] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.new-comment .comment-textarea {\n  width: 185px;\n  min-height: 75px;\n  padding: .5em;\n  margin-left: 1em;\n  margin-top: 1em;\n  background-color: #151515;\n  border: none;\n  resize: none;\n  color: white;\n  font-family: 'PT Sans', sans-serif;\n  font-size: 11px;\n  font-weight: 100;\n  overflow: hidden;\n}\n.new-comment .submit-comment-btn-container {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  display: block;\n  position: relative;\n  cursor: pointer;\n  background-color: #1A1A1A;\n  border-radius: 1px;\n  margin-left: 1em;\n}\n.new-comment .submit-comment-btn {\n  position: relative;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  min-width: 30px;\n  color: white;\n}\n.submit-comment-btn svg {\n  height: 40px;\n  width: 40px;\n  fill: white;\n  margin-right: 4em;\n}\n.new-comment .col-sm-8 {\n  margin-right: 0;\n  padding-right: 0;\n}\n.new-comment .col-sm-4 {\n  padding: 0;\n  margin: 0;\n  margin-top: 1em;\n}\n.new-comment {\n  background-color: #1A1A1A;\n  width: 300px;\n  overflow-x: hidden;\n  padding-bottom: .8em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/news/new-comment/new-comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCommentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_news_service__ = __webpack_require__("../../../../../src/app/services/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_news_news_article__ = __webpack_require__("../../../../../src/app/models/news/news-article.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewCommentComponent = (function () {
    function NewCommentComponent(newsService) {
        this.newsService = newsService;
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.newComment = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NewCommentComponent.prototype.submitNewComment = function () {
        var _this = this;
        this.newsService.newComment(this.article.id, this.comment).subscribe(function () {
            _this.commentCount = _this.article.comments.length + 1;
            _this.newComment.emit(_this.commentCount);
            _this.close.emit();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_news_news_article__["a" /* NewsArticle */])
    ], NewCommentComponent.prototype, "article", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], NewCommentComponent.prototype, "close", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], NewCommentComponent.prototype, "newComment", void 0);
    NewCommentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-comment',
            template: __webpack_require__("../../../../../src/app/sidebar/news/new-comment/new-comment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidebar/news/new-comment/new-comment.component.less")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_news_service__["a" /* NewsService */]])
    ], NewCommentComponent);
    return NewCommentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sidebar/news/news-article-comments/comments.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"comment\" class=\"comment\">\r\n    <input type=\"hidden\" name=\"CommentId\" value=\"{{comment.id}}\" />\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"row\">\r\n                <div *ngIf=\"!comment.userVoted; then default; else voted\"></div>\r\n                <ng-template #default>\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"comment-upvote\" (click)=\"upvoteClick(comment)\"><div [inlineSVG]=\"'assets/icons/_Upvote.svg'\"></div></div>\r\n                        <div class=\"comment-downvote\" (click)=\"downvoteClick(comment)\"><div [inlineSVG]=\"'assets/icons/_Downvote.svg'\"></div></div>\r\n                        <span class=\"username\">{{comment.user.userName}}</span><span class=\"comment-age\">{{comment.publishedOn | date}}</span>\r\n                    </div>\r\n                </ng-template>\r\n                <ng-template #voted>\r\n                    <div *ngIf=\"comment.userUpvoted; then upvote; else downvote\"></div>\r\n                    <ng-template #upvote>\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"comment-upvote active\" (click)=\"upvoteClick(comment)\"><div [inlineSVG]=\"'assets/icons/_Upvote.svg'\"></div></div>\r\n                            <div class=\"comment-downvote\" (click)=\"downvoteClick(comment)\"><div [inlineSVG]=\"'assets/icons/_Downvote.svg'\"></div></div>\r\n                            <span class=\"username\">{{comment.user.userName}}</span><span class=\"comment-age\">{{comment.publishedOn | date}}</span>\r\n                        </div>\r\n                    </ng-template>\r\n                    <ng-template #downvote>\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"comment-upvote\" (click)=\"upvoteClick(comment)\"><div [inlineSVG]=\"'assets/icons/_Upvote.svg'\"></div></div>\r\n                            <div class=\"comment-downvote active\" (click)=\"downvoteClick(comment)\"><div [inlineSVG]=\"'assets/icons/_Downvote.svg'\"></div></div>\r\n                            <span class=\"username\">{{comment.user.userName}}</span><span class=\"comment-age\">{{comment.publishedOn | date}}</span>\r\n                        </div>\r\n                    </ng-template>\r\n                </ng-template>\r\n            \r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"comment-body\">{{comment.comment}}</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n      "

/***/ }),

/***/ "../../../../../src/app/sidebar/news/news-article-comments/comments.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".all-comments:first-child {\n  padding-top: 1em;\n}\n.comment {\n  background-color: #1A1A1A;\n  padding: 1em;\n  padding-right: 1em;\n  padding-bottom: 0;\n  padding-top: 1em;\n  width: 300px;\n  font-family: 'PT Sans', sans-serif;\n}\n.comment i {\n  color: #727272;\n  cursor: pointer;\n}\n.username {\n  color: red;\n  margin-left: .5em;\n  font-size: 12px;\n}\n.comment-age {\n  margin-left: 1em;\n  font-size: 8px;\n  font-family: 'Raleway', sans-serif;\n  color: #818080;\n}\n.comment-body {\n  width: 250px;\n  color: white;\n  background-color: #1A1A1A;\n  font-size: 11px;\n  font-weight: 100;\n  border: none;\n  text-wrap: normal;\n  margin-top: 1em;\n  padding-bottom: 1em;\n}\n.comment-upvote {\n  height: 10px;\n  width: 10px;\n  cursor: pointer;\n  fill: #727272;\n  display: inline-block;\n}\n.comment-upvote.active {\n  fill: white;\n}\n.comment-downvote {\n  height: 10px;\n  width: 10px;\n  cursor: pointer;\n  fill: #727272;\n  display: inline-block;\n}\n.comment-downvote.active {\n  fill: red;\n}\n.comment .row {\n  max-width: 300px;\n}\n.comment .row .col-sm-12 {\n  max-width: 300px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/news/news-article-comments/comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_news_service__ = __webpack_require__("../../../../../src/app/services/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentsComponent = (function () {
    function CommentsComponent(newsService, authGuard, route) {
        this.newsService = newsService;
        this.authGuard = authGuard;
        this.route = route;
        this.upvoteBlocked = false;
        this.downvoteBlocked = false;
    }
    CommentsComponent.prototype.upvoteClick = function (comment) {
        var _this = this;
        if (this.authGuard.canActivate(this.route.snapshot)) {
            if (!this.upvoteBlocked) {
                this.upvoteBlocked = true;
                console.log(comment.id + ' upvote button clicked.');
                if (this.comment.userVoted) {
                    if (this.comment.userUpvoted !== undefined) {
                        if (this.comment.userUpvoted) {
                            this.comment.upvotes--;
                            this.comment.userUpvoted = false;
                            this.comment.userVoted = false;
                            this.newsService.commentUpvoteClicked(this.comment.id).subscribe(function () {
                                _this.upvoteBlocked = false;
                            });
                        }
                        else {
                            this.comment.downvotes--;
                            this.comment.upvotes++;
                            this.comment.userUpvoted = true;
                            this.newsService.commentUpvoteClicked(this.comment.id).subscribe(function () {
                                _this.upvoteBlocked = false;
                            });
                        }
                    }
                    else if (!this.comment.userVoted) {
                        this.comment.upvotes++;
                        this.comment.userUpvoted = true;
                        this.comment.userVoted = true;
                        this.newsService.commentUpvoteClicked(this.comment.id).subscribe(function () {
                            _this.upvoteBlocked = false;
                        });
                    }
                }
            }
        }
    };
    CommentsComponent.prototype.downvoteClick = function (comment) {
        var _this = this;
        if (this.authGuard.canActivate(this.route.snapshot)) {
            if (!this.downvoteBlocked) {
                this.downvoteBlocked = true;
                if (this.comment.userVoted) {
                    if (this.comment.userUpvoted !== undefined) {
                        if (this.comment.userUpvoted) {
                            this.comment.downvotes++;
                            this.comment.upvotes--;
                            this.comment.userUpvoted = false;
                            this.newsService.commentDownvoteClicked(comment.id).subscribe(function () {
                                _this.downvoteBlocked = false;
                            });
                        }
                        else {
                            this.comment.downvotes--;
                            this.comment.userUpvoted = false;
                            this.comment.userVoted = false;
                            this.newsService.commentDownvoteClicked(comment.id).subscribe(function () {
                                _this.downvoteBlocked = false;
                            });
                        }
                    }
                }
                else if (!this.comment.userVoted) {
                    this.comment.downvotes++;
                    this.comment.userUpvoted = false;
                    this.comment.userVoted = true;
                    this.newsService.commentDownvoteClicked(comment.id).subscribe(function () {
                        _this.downvoteBlocked = false;
                    });
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CommentsComponent.prototype, "comment", void 0);
    CommentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__("../../../../../src/app/sidebar/news/news-article-comments/comments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidebar/news/news-article-comments/comments.component.less")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_news_service__["a" /* NewsService */], __WEBPACK_IMPORTED_MODULE_2__auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sidebar/news/news-article/news-article.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"article\" class=\"article\">\r\n    <input type=\"hidden\" name=\"ArticleId\" value=\"{{article.id}}\" />\r\n    <div class=\"information-section\">\r\n        <a href=\"{{article.url}}\" target=\"_blank\">\r\n            <div class=\"article-title\">\r\n                <h3>{{article.title}}</h3>\r\n                <div class=\"news-article-arrow\" [inlineSVG]=\"'assets/icons/_ArrowRightNews.svg'\"></div>\r\n            </div>\r\n        </a>\r\n        <div class=\"date-line\">\r\n            <h4>{{article.publishedOn | date}}</h4>\r\n        </div>\r\n        <div class=\"summary\">\r\n            <p>{{article.description}}</p>\r\n            \r\n        </div>\r\n    </div>\r\n    <div class=\"buttons\">\r\n        <div *ngIf=\"!article.userVoted; then default; else upOrDown\"></div>\r\n        <ng-template #default>\r\n            <div class=\"outer up\" (click)=\"upvoteClick(article)\">\r\n                <div class=\"inner\" [inlineSVG]=\"'assets/icons/_Upvote.svg'\"></div><span class=\"count\">{{article.upvote}}</span>\r\n            </div>\r\n            <div class=\"outer down\" (click)=\"downvoteClick(article)\">\r\n                <div class=\"inner\" [inlineSVG]=\"'assets/icons/_Downvote.svg'\"></div><span class=\"count\">{{article.downvote}}</span>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template #upOrDown>\r\n            <div *ngIf=\"article.userUpvoted; then upvote; else downvote\"></div>\r\n            <ng-template #upvote>\r\n                <div class=\"upvote outer\" (click)=\"upvoteClick(article)\">\r\n                    <div class=\"inner\" [inlineSVG]=\"'assets/icons/_Upvote.svg'\"></div><span class=\"count\">{{article.upvote}}</span>\r\n                </div>\r\n                <div class=\"outer down\" (click)=\"downvoteClick(article)\">\r\n                    <div class=\"inner\" [inlineSVG]=\"'assets/icons/_Downvote.svg'\"></div><span class=\"count\">{{article.downvote}}</span>\r\n                </div>\r\n            </ng-template>\r\n            <ng-template #downvote>\r\n                <div class=\"outer up\" (click)=\"upvoteClick(article)\">\r\n                    <div class=\"inner\" [inlineSVG]=\"'assets/icons/_Upvote.svg'\"></div><span class=\"count\">{{article.upvote}}</span>\r\n                </div>\r\n                <div class=\"downvote outer\" (click)=\"downvoteClick(article)\">\r\n                    <div class=\"inner\" [inlineSVG]=\"'assets/icons/_Downvote.svg'\"></div><span class=\"count\">{{article.downvote}}</span>\r\n                </div>\r\n            </ng-template>\r\n        </ng-template>\r\n\r\n        \r\n        <div class=\"all-comments outer\" (click)=\"allCommentsClick(article)\">\r\n            <div *ngIf=\"!loading\">\r\n                <div class=\"standard inner\" [inlineSVG]=\"'assets/icons/_CommentsIconNews.svg'\"></div>\r\n                <span class=\"count\" >{{article.comments.length}}</span>\r\n            </div>\r\n            <div class=\"loader-container\" *ngIf=\"loading\"><ngx-loading [show]=\"loading\" [config]=\"{primaryColour: '#0D0808', secondaryColour: '#0D0808', tertiaryColour: '#0D0808'}\"></ngx-loading></div>\r\n        </div>\r\n        <div class=\"new-comment outer\" (click)=\"newCommentClick(article)\">\r\n            <div class=\"loader inner\" [inlineSVG]=\"'assets/icons/spinner.svg'\"></div>\r\n            <div class=\"standard inner\" [inlineSVG]=\"'assets/icons/_NewCommentNews.svg'\"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"newCommentClicked\">\r\n    <app-new-comment [article]=\"article\" (close)=\"closeNewComment()\" (newComment)=\"incrementComment($event)\"></app-new-comment>\r\n</div>\r\n<perfect-scrollbar>\r\n    <ul class=\"all-comments-list\">\r\n        <li *ngFor=\"let comment of comments\">\r\n            <app-comments [comment]=\"comment\"></app-comments>\r\n        </li>\r\n    </ul>\r\n</perfect-scrollbar>"

/***/ }),

/***/ "../../../../../src/app/sidebar/news/news-article/news-article.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".article {\n  font-family: 'PT Sans', sans-serif;\n  background-color: #0D0808;\n  border-bottom: solid 1.5px red;\n  display: inline-block;\n  width: 300px;\n}\n.summary {\n  float: left;\n  color: white;\n  font-size: 12px;\n  padding-bottom: 2em;\n}\n.article-title {\n  float: left;\n  display: inline;\n  padding-right: 0;\n  color: #FF0000;\n  position: relative;\n}\n.news-article-arrow {\n  position: absolute;\n  height: 60px;\n  width: 15px;\n  top: 35%;\n  margin-left: 4em;\n  color: red;\n  display: inline-block;\n  fill: white;\n}\n.information-section {\n  margin-left: 1em;\n}\nh3 {\n  font-weight: 600;\n  font-size: 18px;\n  padding-bottom: 0;\n  margin-bottom: 0;\n  color: red;\n  width: 63%;\n  display: inline-block;\n}\na:hover {\n  text-decoration: none;\n}\na:visited {\n  text-decoration: none;\n}\na:focus {\n  text-decoration: none;\n}\n.date-line {\n  font-family: 'Raleway', sans-serif;\n  letter-spacing: 2px;\n  width: 250px;\n  margin: 0;\n  color: #FF0000;\n}\nh4 {\n  margin: 0;\n  font-weight: 800;\n  padding: 1em;\n  padding-left: 0;\n  padding-bottom: 2em;\n  float: left;\n  font-size: 10px;\n}\n.date-line div {\n  margin: 0;\n  padding: 0;\n}\nh4:after {\n  background-color: #AC0202;\n  content: \"\";\n  display: inline-block;\n  height: 1px;\n  position: relative;\n  vertical-align: middle;\n  width: 150px;\n  left: 2.0em;\n  margin-right: -50%;\n}\n.buttons {\n  font-family: 'Oswald', sans-serif;\n  font-weight: 500;\n  display: inline-block;\n  margin-bottom: -0.35em;\n}\n.buttons .outer {\n  width: 75px;\n  height: 50px;\n  display: inline-block;\n  text-align: center;\n  display: block;\n  position: relative;\n  background-color: #0D0808;\n  border-radius: 1px;\n  float: left;\n  text-decoration: none;\n  cursor: pointer;\n  line-height: 50px;\n}\n.buttons .down {\n  fill: #840000;\n  color: #840000;\n}\n.buttons .down .inner {\n  margin-left: 1.3em;\n}\n.buttons .up {\n  fill: #6b6b6b;\n  color: #6b6b6b;\n}\n.buttons .inner {\n  margin-top: 1.2em;\n  height: 20px;\n  width: 20px;\n  float: left;\n  margin-left: 1.8em;\n}\n.buttons svg {\n  display: block;\n}\n.buttons .upvote,\n.buttons .downvote {\n  color: white;\n  background-color: #0D0808;\n  fill: white;\n}\n.buttons .downvote .inner {\n  margin-left: 1.3em;\n  fill: #AC0202;\n}\n.buttons .count {\n  margin-top: 0.12em;\n  font-size: 14px;\n  float: left;\n  margin-left: .2em;\n  font-family: 'Oswald', sans-serif;\n  font-weight: 500;\n}\n.buttons .downvote .count {\n  color: #C80000;\n}\n.buttons .all-comments {\n  color: black;\n  background-color: white;\n  text-transform: uppercase;\n}\n.buttons .new-comment {\n  fill: white;\n  background-color: #AC0202;\n}\n.buttons .new-comment .inner {\n  width: 30px;\n  height: 20px;\n}\n.buttons .loader {\n  fill: white;\n  display: none;\n}\nul {\n  list-style: none;\n  padding-left: 0;\n}\n.all-comments-list {\n  max-height: 500px;\n}\n.loader-container {\n  position: relative;\n  margin: 1em;\n  margin-left: 0;\n  margin-right: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/news/news-article/news-article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_news_service__ = __webpack_require__("../../../../../src/app/services/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_news_news_article__ = __webpack_require__("../../../../../src/app/models/news/news-article.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewsArticleComponent = (function () {
    function NewsArticleComponent(newsService, userService, authGuard, route) {
        this.newsService = newsService;
        this.userService = userService;
        this.authGuard = authGuard;
        this.route = route;
        this.onVoted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.upvoteBlocked = false;
        this.downvoteBlocked = false;
        this.loading = false;
    }
    NewsArticleComponent.prototype.upvoteClick = function (article) {
        var _this = this;
        if (this.authGuard.canActivate(this.route.snapshot)) {
            if (!this.upvoteBlocked) {
                this.upvoteBlocked = true;
                if (this.article.userVoted) {
                    if (this.article.userUpvoted !== undefined) {
                        if (this.article.userUpvoted) {
                            this.article.upvote--;
                            this.article.userUpvoted = false;
                            this.article.userVoted = false;
                            this.newsService.articleUpvoteClicked(article.id).subscribe(function () {
                                _this.upvoteBlocked = false;
                            });
                        }
                        else {
                            this.article.downvote--;
                            this.article.upvote++;
                            this.article.userUpvoted = true;
                            this.newsService.articleUpvoteClicked(article.id).subscribe(function () {
                                _this.upvoteBlocked = false;
                            });
                        }
                    }
                }
                else if (!this.article.userVoted) {
                    this.article.upvote++;
                    this.article.userUpvoted = true;
                    this.article.userVoted = true;
                    this.newsService.articleUpvoteClicked(article.id).subscribe(function () {
                        _this.upvoteBlocked = false;
                    });
                }
            }
        }
    };
    NewsArticleComponent.prototype.downvoteClick = function (article) {
        var _this = this;
        if (this.authGuard.canActivate(this.route.snapshot)) {
            if (!this.downvoteBlocked) {
                this.downvoteBlocked = true;
                if (this.article.userVoted) {
                    if (this.article.userUpvoted !== undefined) {
                        if (this.article.userUpvoted) {
                            this.article.downvote++;
                            this.article.upvote--;
                            this.article.userUpvoted = false;
                            this.newsService.articleDownvoteClicked(article.id).subscribe(function () {
                                _this.downvoteBlocked = false;
                            });
                        }
                        else {
                            this.article.downvote--;
                            this.article.userUpvoted = false;
                            this.article.userVoted = false;
                            this.newsService.articleDownvoteClicked(article.id).subscribe(function () {
                                _this.downvoteBlocked = false;
                            });
                        }
                    }
                }
                else if (!this.article.userVoted) {
                    this.article.downvote++;
                    this.article.userUpvoted = false;
                    this.article.userVoted = true;
                    this.newsService.articleDownvoteClicked(article.id).subscribe(function () {
                        _this.downvoteBlocked = false;
                    });
                }
            }
        }
    };
    NewsArticleComponent.prototype.allCommentsClick = function (article) {
        var _this = this;
        if (!this.allCommentsClicked) {
            this.allCommentsClicked = true;
            this.loading = true;
            this.newsService.getComments(article.id).subscribe(function (comments) {
                _this.comments = comments;
                for (var _i = 0, _a = _this.comments; _i < _a.length; _i++) {
                    var comment = _a[_i];
                    var index = _this.comments.indexOf(comment);
                    comment.userVoted = false;
                    _this.comments[index] = comment;
                    _this.loading = false;
                }
                if (_this.userService.isLoggedIn()) {
                    _this.addUserVoteHistory();
                }
            });
        }
        else {
            this.comments = new Array();
            this.allCommentsClicked = false;
        }
    };
    NewsArticleComponent.prototype.addUserVoteHistory = function () {
        var _this = this;
        this.newsService.getCommentUserVotes(this.comments.map(function (m) { return m.id; })).subscribe(function (votes) {
            _this.userVotes = votes;
            var _loop_1 = function (vote) {
                var commentFound = _this.comments.filter(function (m) { return m.id === vote.commentId; })[0];
                if (commentFound != null) {
                    var index = _this.comments.indexOf(commentFound);
                    commentFound.userVoted = true;
                    if (vote.isUpvote) {
                        commentFound.userUpvoted = true;
                    }
                    else {
                        commentFound.userUpvoted = false;
                    }
                    _this.comments[index] = commentFound;
                }
            };
            for (var _i = 0, _a = _this.userVotes; _i < _a.length; _i++) {
                var vote = _a[_i];
                _loop_1(vote);
            }
        });
    };
    NewsArticleComponent.prototype.newCommentClick = function (article) {
        if (this.authGuard.canActivate(this.route.snapshot)) {
            console.log(article.title + ' new comment button clicked');
            if (!this.newCommentClicked) {
                this.newCommentClicked = true;
            }
            else {
                this.newCommentClicked = false;
            }
        }
    };
    NewsArticleComponent.prototype.closeNewComment = function () {
        this.newCommentClicked = false;
    };
    NewsArticleComponent.prototype.incrementComment = function (event) {
        this.article.comments.length = event;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__models_news_news_article__["a" /* NewsArticle */])
    ], NewsArticleComponent.prototype, "article", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], NewsArticleComponent.prototype, "onVoted", void 0);
    NewsArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-news-article',
            template: __webpack_require__("../../../../../src/app/sidebar/news/news-article/news-article.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidebar/news/news-article/news-article.component.less")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_news_service__["a" /* NewsService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"]])
    ], NewsArticleComponent);
    return NewsArticleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sidebar/news/news-panel/news.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\r\n    <ngx-loading [show]=\"loading\"></ngx-loading>\r\n    <li *ngFor=\"let article of articles\">\r\n        <app-news-article [article]=\"article\"></app-news-article>\r\n    </li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/news/news-panel/news.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n  list-style: none;\n  padding-left: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/news/news-panel/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_news_service__ = __webpack_require__("../../../../../src/app/services/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsComponent = (function () {
    function NewsComponent(newsService, userService) {
        this.newsService = newsService;
        this.userService = userService;
        this.loading = false;
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.newsService.getArticles().subscribe(function (articles) {
            var size = 10;
            _this.articles = articles.slice(0, size);
            for (var _i = 0, _a = _this.articles; _i < _a.length; _i++) {
                var article = _a[_i];
                var index = _this.articles.indexOf(article);
                article.userVoted = false;
                _this.articles[index] = article;
                _this.loading = false;
            }
            if (_this.userService.isLoggedIn()) {
                _this.addUserVoteHistory();
            }
        });
    };
    NewsComponent.prototype.addUserVoteHistory = function () {
        var _this = this;
        this.newsService.getArticlesUserVotes(this.articles.map(function (m) { return m.id; })).subscribe(function (votes) {
            _this.userVotes = votes;
            var _loop_1 = function (vote) {
                var articleFound = _this.articles.filter(function (m) { return m.id === vote.articleId; })[0];
                if (articleFound != null) {
                    var indexOf = _this.articles.indexOf(articleFound);
                    articleFound.userVoted = true;
                    if (vote.isUpvote) {
                        articleFound.userUpvoted = true;
                    }
                    else {
                        articleFound.userUpvoted = false;
                    }
                    _this.articles[indexOf] = articleFound;
                }
            };
            for (var _i = 0, _a = _this.userVotes; _i < _a.length; _i++) {
                var vote = _a[_i];
                _loop_1(vote);
            }
        });
    };
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-news',
            template: __webpack_require__("../../../../../src/app/sidebar/news/news-panel/news.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidebar/news/news-panel/news.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_news_service__["a" /* NewsService */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\r\n    <perfect-scrollbar>\r\n        <router-outlet></router-outlet>\r\n    </perfect-scrollbar>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebar {\n  background-color: #0D0808 !important;\n  width: 300px;\n  position: absolute;\n  top: 60px;\n  right: 0;\n  bottom: 0;\n  max-height: 100vh;\n  overflow-y: auto;\n  overflow-x: auto;\n}\nperfect-scrollbar > .ps.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidebar/sidebar.component.less")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sidebar/spinner/spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!isDelayedRunning\" class=\"spinner\">\r\n    <div [inlineSVG]=\"'assets/icons/spinner.svg'\"></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/sidebar/spinner/spinner.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spinner {\n  width: 40px;\n  height: 40px;\n  position: relative;\n  margin: 30px auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/spinner/spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = (function () {
    function SpinnerComponent() {
        this.isDelayedRunning = false;
        this.delay = 150;
    }
    Object.defineProperty(SpinnerComponent.prototype, "isRunning", {
        set: function (value) {
            var _this = this;
            if (!value) {
                this.cancelTimeout();
                this.isDelayedRunning = false;
                return;
            }
            if (this.currentTimeout) {
                return;
            }
            // specify window to side-step conflict with node types: https://github.com/mgechev/angular2-seed/issues/901
            this.currentTimeout = window.setTimeout(function () {
                _this.isDelayedRunning = value;
                _this.cancelTimeout();
            }, this.delay);
        },
        enumerable: true,
        configurable: true
    });
    SpinnerComponent.prototype.cancelTimeout = function () {
        clearTimeout(this.currentTimeout);
        this.currentTimeout = 0;
    };
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.cancelTimeout();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SpinnerComponent.prototype, "delay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SpinnerComponent.prototype, "isRunning", null);
    SpinnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__("../../../../../src/app/sidebar/spinner/spinner.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidebar/spinner/spinner.component.less")]
        })
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sidebar/stats/stats-panel/stats.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"!statsLoaded\" [config]=\"{backdropBackgroundColour: 'rgba(14,8,8)'}\"></ngx-loading>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"ui-inputgroup\">\r\n                <span [ngClass]=\"nationalActive ? 'ui-inputgroup-addon active' : 'ui-inputgroup-addon'\"><span [inlineSVG]=\"'assets/icons/_NationalIcon.svg'\"></span></span>\r\n                <p-toggleButton (onChange)=\"onNationalChange()\" [(ngModel)]=\"nationalActive\" onLabel=\"NATIONAL\" offLabel=\"NATIONAL\"></p-toggleButton>\r\n            </div>\r\n            <div class=\"ui-inputgroup\">\r\n                <span [ngClass]=\"provincialActive ? 'ui-inputgroup-addon active' : 'ui-inputgroup-addon'\"><span [inlineSVG]=\"'assets/icons/_ProvinceIcon.svg'\"></span></span>\r\n                <p-dropdown [ngClass]=\"provincialActive ? 'active':''\" [options]=\"provinces\" [(ngModel)]=\"selectedProvince\" (onChange)=\"onProvinceChange()\" placeholder=\"PROVINCE\" optionField=\"name\"></p-dropdown>\r\n            </div>\r\n                <div *ngIf=\"provincialActive\" class=\"ui-inputgroup\">\r\n                    <span [ngClass]=\"localActive ? 'ui-inputgroup-addon active' : 'ui-inputgroup-addon'\"><span [inlineSVG]=\"'assets/icons/_CityIcon.svg'\"></span></span>\r\n                    <p-dropdown [ngClass]=\"localActive ? 'active':''\" (onChange)=\"onCityChange()\" [options]=\"cities\" [(ngModel)]=\"selectedCity\" placeholder=\"CITY\" optionField=\"name\"></p-dropdown>\r\n                </div>\r\n            <div *ngIf=\"nationalActive || provincialActive;\">\r\n                <hr />\r\n                <div class=\"ui-inputgroup\">\r\n                    <p-dropdown [ngClass]=\"statActive ? 'active stats-dropdown':'stats-dropdown'\" (onChange)=\"onPrimaryStatChange()\" [options]=\"statOptions\" [(ngModel)]=\"selectedStat\" placeholder=\"SELECT STATISTIC\" optionField=\"name\"></p-dropdown>\r\n                </div>\r\n                <hr />\r\n            </div>\r\n            <div *ngIf=\"showChildStat && statActive\">\r\n                <div class=\"ui-inputgroup\">\r\n                    <p-dropdown [ngClass]=\"childStatActive ? 'active stats-dropdown':'stats-dropdown'\" (onChange)=\"onChildStatChange()\" [options]=\"childStatOptions\" [(ngModel)]=\"selectedChildStat\" placeholder=\"SELECT STATISTIC\" optionField=\"name\"></p-dropdown>\r\n                </div>\r\n            </div>\r\n        </div>     \r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/sidebar/stats/stats-panel/stats.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid {\n  font-family: 'Raleway', sans-serif;\n  font-weight: 600;\n  letter-spacing: 2px;\n  overflow-x: hidden;\n  position: relative;\n  height: calc(50vh);\n  top: 0px;\n  padding-top: 1em;\n  width: 300px;\n}\n.ui-inputgroup {\n  float: left;\n  margin-top: 0;\n  width: 100% !important;\n  height: 40px !important;\n  line-height: 40px !important;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n  outline: 0;\n  padding: 0 !important;\n}\np-togglebutton {\n  height: 40px !important;\n  width: 100% !important;\n}\n.ui-button .ui-button-text {\n  line-height: 40px;\n  height: 40px;\n  width: 100%;\n  color: white;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  font-weight: 600 !important;\n  padding: 0 !important;\n}\n.ui-togglebutton.ui-button {\n  margin-top: 1px;\n  border: none !important;\n  padding: 0 !important;\n}\n.ui-togglebutton.ui-button.ui-state-default {\n  background: #393939;\n  height: 40px !important;\n  width: 100% !important;\n  box-shadow: none;\n}\n.ui-togglebutton.ui-button.ui-state-active {\n  background: #C80000;\n  height: 40px !important;\n  width: 100% !important;\n  box-shadow: none;\n}\n.ui-togglebutton:not(.ui-state-disabled):not(.ui-state-active):hover {\n  background: #393939;\n}\np-dropdown {\n  width: 100%;\n  height: 40px;\n}\np-dropdown.active label {\n  color: #C80000;\n}\n.ui-dropdown,\n.ui-inputtext {\n  height: 40px;\n  width: 100% !important;\n  border-radius: 3px !important;\n  line-height: 40px;\n  font-weight: 600 !important;\n  padding: 0 !important;\n  text-align: center;\n  color: #393939;\n  background-color: #030303;\n  border: none;\n  box-shadow: none !important;\n}\n.ui-inputgroup .ui-inputgroup-addon {\n  min-width: 40px;\n  padding: 0;\n  line-height: 40px;\n  height: 40px;\n  background-color: #393939 !important;\n  border: none;\n  border-right: 1px solid #030303;\n  margin-top: 1px;\n}\n.ui-inputgroup-addon.active {\n  background-color: #C80000 !important;\n}\n.ui-dropdown-panel {\n  border: none;\n}\n.ui-dropdown-panel .ui-dropdown-list {\n  background: #030303;\n  font-weight: 600;\n  border: none;\n  color: #C00507;\n  border-radius: 0;\n}\n.ui-state-highlight {\n  color: #C00507;\n  background-color: #030303;\n}\n.ui-dropdown-panel .ui-dropdown-item:not(.ui-state-highlight):hover {\n  background-color: #393939;\n}\n.ui-dropdown .ui-dropdown-trigger {\n  min-width: 30px;\n  background: #030303;\n  color: #393939;\n  border-left: none;\n}\np-dropdown.stats-dropdown .ui-dropdown .ui-dropdown-trigger {\n  border-left: 1px solid #393939;\n}\nhr {\n  width: 300px;\n  border: 0;\n  border-top: 1px solid #030303;\n  margin: 0;\n  position: relative;\n  margin-top: .5em;\n  margin-bottom: 1em;\n  margin-left: -1em;\n  padding: 0;\n  float: left;\n}\nspan svg {\n  margin-top: 10px;\n}\n::-webkit-scrollbar {\n  width: 12px;\n}\n::-webkit-scrollbar-track {\n  border-radius: 10px;\n  background-color: #C4BCBC;\n}\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);\n  background-color: #AC9B9B;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/stats/stats-panel/stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_geo_service__ = __webpack_require__("../../../../../src/app/services/geo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_stats_service__ = __webpack_require__("../../../../../src/app/services/stats.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_map_service__ = __webpack_require__("../../../../../src/app/services/map.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StatsComponent = (function () {
    function StatsComponent(geoService, statsService, router, activatedRoute, mapService) {
        var _this = this;
        this.geoService = geoService;
        this.statsService = statsService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.mapService = mapService;
        this.nationalActive = true;
        this.provincialActive = false;
        this.localActive = false;
        this.statActive = false;
        this.childStatActive = false;
        this.showChildStat = false;
        this.scope = 'national';
        this.statsLoaded = false;
        // Grab provinces and map them to select list arrays for dropdowns
        this.geoService.getProvinces()
            .map(function (response) { return response.map(function (province) { return ({ label: province.name, value: province.id }); }); })
            .subscribe(function (provinces) {
            _this.provinces = provinces;
            // Grab query params for initial selections
            _this.activatedRoute.queryParams.subscribe(function (queryParams) {
                var provinceId = queryParams['provinceId'];
                var cityId = queryParams['cityId'];
                if (provinceId !== undefined) {
                    _this.selectedProvince = provinceId;
                    _this.onProvinceChange();
                    if (cityId !== undefined) {
                        _this.selectedCity = cityId;
                        _this.geoService.getCitiesByProvinceId(provinceId)
                            .map(function (response) { return response.map(function (city) { return ({ label: city.name, value: city.id }); }); })
                            .subscribe(function (cities) {
                            _this.cities = cities;
                            _this.onCityChange();
                        });
                    }
                }
            });
        });
        this.getNationalStats();
        this.statsService.chartModalClosedObservable.subscribe(function () { return _this.onChartModalClose(); });
    }
    StatsComponent.prototype.onNationalChange = function () {
        this.scope = 'national';
        if (this.nationalActive) {
            this.mapService.flyToCanada();
            this.selectedProvince = '';
            this.selectedCity = '';
            this.provincialActive = false;
            this.localActive = false;
            this.selectedStat = '';
            this.statActive = false;
            this.selectedChildStat = '';
            this.childStatActive = false;
            this.statsLoaded = false;
            this.getNationalStats();
        }
        this.childStatActive = false;
        this.showChildStat = false;
        this.selectedChildStat = '';
    };
    StatsComponent.prototype.onProvinceChange = function () {
        var _this = this;
        this.scope = 'provincial';
        var provinceId = Number(this.selectedProvince);
        var province = this.provinces.find(function (m) { return m.value === provinceId; });
        if (province !== undefined) {
            this.mapService.flyToProvince(province.label);
        }
        this.provinceId = provinceId;
        this.geoService.getCitiesByProvinceId(provinceId)
            .map(function (response) { return response.map(function (city) { return ({ label: city.name, value: city.id }); }); })
            .subscribe(function (result) {
            _this.cities = result;
        });
        this.statsLoaded = false;
        this.getProvincialStats(provinceId);
        this.provincialActive = true;
        this.nationalActive = false;
        this.localActive = false;
        this.statActive = false;
        this.showChildStat = false;
        this.selectedStat = '';
    };
    StatsComponent.prototype.onCityChange = function () {
        this.scope = 'local';
        var cityId = Number(this.selectedCity);
        // Fly map to city
        var city = this.cities.find(function (m) { return m.value === cityId; });
        if (city !== undefined) {
            this.mapService.flyToCity(city.label);
        }
        this.cityId = cityId;
        this.statsLoaded = false;
        this.getLocalStats(cityId);
        this.statActive = false;
        this.localActive = true;
        this.showChildStat = false;
    };
    StatsComponent.prototype.onPrimaryStatChange = function () {
        var statId = Number(this.selectedStat);
        this.statActive = true;
        // if there are child stats, map them to substats dropdown
        if (this.scope === 'national') {
            this.getNationalSubStats(statId);
        }
        if (this.scope === 'provincial') {
            // move this line into your substat implementation like national when required
            this.router
                .navigate([{ outlets: { modal: 'chart' } }], { queryParams: {
                    scope: this.scope,
                    statId: Number(this.selectedStat),
                    provinceId: this.provinceId,
                    cityId: this.cityId
                } });
        }
        if (this.scope === 'local') {
            // move this line into your substat implementation like national when required
            this.router
                .navigate([{ outlets: { modal: 'chart' } }], { queryParams: {
                    scope: this.scope,
                    statId: Number(this.selectedStat),
                    provinceId: this.provinceId,
                    cityId: this.cityId
                } });
        }
    };
    StatsComponent.prototype.getNationalSubStats = function (parentId) {
        var _this = this;
        this.statsService.getNationalStats()
            .map(function (response) { return response.map(function (stat) { return ({ label: stat.name, value: stat.id, parentId: stat.parentId }); }); })
            .subscribe(function (result) {
            _this.childStatOptions = result.filter(function (m) { return m.parentId === parentId; });
            _this.statsLoaded = true;
            if (_this.childStatOptions === undefined || _this.childStatOptions.length === 0) {
                _this.showChildStat = false;
                _this.router
                    .navigate([{ outlets: { modal: 'chart' } }], { queryParams: {
                        scope: _this.scope,
                        statId: Number(_this.selectedStat),
                        provinceId: _this.provinceId,
                        cityId: _this.cityId
                    } });
            }
            else {
                _this.showChildStat = true;
            }
        });
    };
    // currently only need national child stats, implement provincial and local here as required
    StatsComponent.prototype.getProvincialSubStats = function (parentId, provinceId) {
        var _this = this;
        return this.statsService.getProvincialStats(provinceId)
            .map(function (response) { return response.map(function (stat) { return ({ label: stat.name, value: stat.id, parentId: stat.parentId }); }); })
            .subscribe(function (result) {
            _this.statOptions = result.filter(function (m) { return m.parentId === parentId; });
            _this.statsLoaded = true;
        });
    };
    StatsComponent.prototype.getLocalSubStats = function (ParentId) { };
    StatsComponent.prototype.onChildStatChange = function () {
        this.childStatActive = true;
        this.router
            .navigate([{ outlets: { modal: 'chart' } }], { queryParams: {
                scope: this.scope,
                statId: this.selectedChildStat,
                provinceId: this.provinceId,
                cityId: this.cityId
            } });
    };
    StatsComponent.prototype.getNationalStats = function () {
        var _this = this;
        this.statsService.getNationalStats()
            .map(function (response) { return response.map(function (stat) { return ({ label: stat.name, value: stat.id, parentId: stat.parentId }); }); })
            .subscribe(function (result) {
            _this.statOptions = result.filter(function (m) { return m.label != null && m.parentId == null; });
            _this.statsLoaded = true;
        });
    };
    StatsComponent.prototype.getProvincialStats = function (provinceId) {
        var _this = this;
        this.statsService.getProvincialStats(provinceId)
            .map(function (response) { return response.map(function (stat) { return ({ label: stat.name, value: stat.id }); }); })
            .subscribe(function (result) {
            _this.statOptions = result.filter(function (m) { return m.label != null; });
            _this.statsLoaded = true;
        });
    };
    StatsComponent.prototype.getLocalStats = function (cityId) {
        var _this = this;
        this.statsService.getLocalStats(cityId)
            .map(function (response) { return response.map(function (stat) { return ({ label: stat.name, value: stat.id }); }); })
            .subscribe(function (result) {
            _this.statOptions = result.filter(function (m) { return m.label != null; });
            _this.statsLoaded = true;
        });
    };
    StatsComponent.prototype.onChartModalClose = function () {
        if (this.showChildStat) {
            this.childStatActive = false;
            this.selectedChildStat = '';
        }
        else {
            this.selectedStat = '';
            this.statActive = false;
            this.childStatActive = false;
            this.selectedChildStat = '';
        }
    };
    StatsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-stats',
            template: __webpack_require__("../../../../../src/app/sidebar/stats/stats-panel/stats.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidebar/stats/stats-panel/stats.component.less")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_geo_service__["a" /* GeoService */],
            __WEBPACK_IMPORTED_MODULE_2__services_stats_service__["a" /* StatsService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_4__services_map_service__["a" /* MapService */]])
    ], StatsComponent);
    return StatsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/utils/config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var ConfigService = (function () {
    function ConfigService(baseUrl) {
        this.baseUrl = baseUrl;
        this._apiURI = this.baseUrl + '/api';
    }
    ConfigService.prototype.getApiURI = function () {
        return this._apiURI;
    };
    ConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [String])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "../../../../../src/assets/images/logos/badge.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "badge.99833aa4b2f0d8281151.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module_shared__ = __webpack_require__("../../../../../src/app/app.module.shared.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module_shared__["a" /* AppModuleShared */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map