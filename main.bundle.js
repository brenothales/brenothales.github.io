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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_token__ = __webpack_require__("../../../../angular2-token/angular2-token.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_tokenService) {
        this._tokenService = _tokenService;
        this._tokenService.init({
            apiPath: 'https://rdstationapi.herokuapp.com/api/v1',
            signInRedirect: '/login',
            globalOptions: {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_token__["a" /* Angular2TokenService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_materialize__ = __webpack_require__("../../../../ng2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_color_picker__ = __webpack_require__("../../../../ngx-color-picker/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_color_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_color_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__companies_companies_module__ = __webpack_require__("../../../../../src/app/companies/companies.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__users_users_module__ = __webpack_require__("../../../../../src/app/users/users.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_token__ = __webpack_require__("../../../../angular2-token/angular2-token.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_company_service__ = __webpack_require__("../../../../../src/app/shared/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_product_service__ = __webpack_require__("../../../../../src/app/shared/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__["a" /* NotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_materialize__["a" /* MaterializeModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ngx_color_picker__["ColorPickerModule"],
                __WEBPACK_IMPORTED_MODULE_5_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_7__companies_companies_module__["a" /* CompaniesModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_12__users_users_module__["a" /* UsersModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_routing__["a" /* routing */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13_angular2_token__["a" /* Angular2TokenService */], __WEBPACK_IMPORTED_MODULE_14__shared_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_15__shared_product_service__["a" /* ProductService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_token__ = __webpack_require__("../../../../angular2-token/angular2-token.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__companies_company_list_company_list_component__ = __webpack_require__("../../../../../src/app/companies/company-list/company-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__companies_company_edit_company_edit_component__ = __webpack_require__("../../../../../src/app/companies/company-edit/company-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_login_login_component__ = __webpack_require__("../../../../../src/app/users/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users_register_register_component__ = __webpack_require__("../../../../../src/app/users/register/register.component.ts");








var appRoutes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'not-found', component: __WEBPACK_IMPORTED_MODULE_2__not_found_not_found_component__["a" /* NotFoundComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__users_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_7__users_register_register_component__["a" /* RegisterComponent */] },
    { path: 'companies', component: __WEBPACK_IMPORTED_MODULE_4__companies_company_list_company_list_component__["a" /* CompanyListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3_angular2_token__["a" /* Angular2TokenService */]] },
    { path: 'companies/:id', component: __WEBPACK_IMPORTED_MODULE_5__companies_company_edit_company_edit_component__["a" /* CompanyEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3_angular2_token__["a" /* Angular2TokenService */]] },
    { path: 'companies/new', component: __WEBPACK_IMPORTED_MODULE_5__companies_company_edit_company_edit_component__["a" /* CompanyEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3_angular2_token__["a" /* Angular2TokenService */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__not_found_not_found_component__["a" /* NotFoundComponent */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/companies/companies.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompaniesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_list_company_list_component__ = __webpack_require__("../../../../../src/app/companies/company-list/company-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__company_edit_company_edit_component__ = __webpack_require__("../../../../../src/app/companies/company-edit/company-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_active_active_component__ = __webpack_require__("../../../../../src/app/companies/shared/active/active.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_materialize__ = __webpack_require__("../../../../ng2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_color_picker__ = __webpack_require__("../../../../ngx-color-picker/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_color_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ngx_color_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__company_form_company_form_component__ = __webpack_require__("../../../../../src/app/companies/company-form/company-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__product_list_product_list_component__ = __webpack_require__("../../../../../src/app/companies/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__product_form_product_form_component__ = __webpack_require__("../../../../../src/app/companies/product-form/product-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__subscriber_list_subscriber_list_component__ = __webpack_require__("../../../../../src/app/companies/subscriber-list/subscriber-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__subscriber_form_subscriber_form_component__ = __webpack_require__("../../../../../src/app/companies/subscriber-form/subscriber-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var CompaniesModule = /** @class */ (function () {
    function CompaniesModule() {
    }
    CompaniesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_materialize__["a" /* MaterializeModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_color_picker__["ColorPickerModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__company_list_company_list_component__["a" /* CompanyListComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__company_list_company_list_component__["a" /* CompanyListComponent */],
                __WEBPACK_IMPORTED_MODULE_3__company_edit_company_edit_component__["a" /* CompanyEditComponent */],
                __WEBPACK_IMPORTED_MODULE_4__shared_active_active_component__["a" /* ActiveComponent */],
                __WEBPACK_IMPORTED_MODULE_10__company_form_company_form_component__["a" /* CompanyFormComponent */],
                __WEBPACK_IMPORTED_MODULE_11__product_list_product_list_component__["a" /* ProductListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__product_form_product_form_component__["a" /* ProductFormComponent */],
                __WEBPACK_IMPORTED_MODULE_13__subscriber_list_subscriber_list_component__["a" /* SubscriberListComponent */],
                __WEBPACK_IMPORTED_MODULE_14__subscriber_form_subscriber_form_component__["a" /* SubscriberFormComponent */]
            ]
        })
    ], CompaniesModule);
    return CompaniesModule;
}());



/***/ }),

/***/ "../../../../../src/app/companies/company-edit/company-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n    margin-top: 4%;\n}\n\n.form{\n    margin-bottom: 0px;\n}\n\n.card-content{\n    padding-bottom: 6px;\n    padding-top: 20px;\n}\n\n.color-picker{\n    height: 22px;\n    margin-top: 4px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/companies/company-edit/company-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-company-form [company]=\"company\"></app-company-form>\n    <app-product-list [company_id]=\"company.id\" [products]=\"company.products\" *ngIf=\"company.id != undefined\"></app-product-list>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/companies/company-edit/company-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_company_service__ = __webpack_require__("../../../../../src/app/shared/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_company_model__ = __webpack_require__("../../../../../src/app/shared/company.model.ts");
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




var CompanyEditComponent = /** @class */ (function () {
    function CompanyEditComponent(companyService, route, router) {
        this.companyService = companyService;
        this.route = route;
        this.router = router;
        this.company = new __WEBPACK_IMPORTED_MODULE_2__shared_company_model__["a" /* Company */]({ primary_color: '#eee', enable: false });
    }
    CompanyEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['id'] !== undefined) {
                _this.companyService.getCompany(params['id']).subscribe(function (data) {
                    _this.company = new __WEBPACK_IMPORTED_MODULE_2__shared_company_model__["a" /* Company */](data);
                });
            }
        });
    };
    CompanyEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-company-edit',
            template: __webpack_require__("../../../../../src/app/companies/company-edit/company-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/companies/company-edit/company-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], CompanyEditComponent);
    return CompanyEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/companies/company-form/company-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".materialize-textarea{\n    padding: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/companies/company-form/company-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col m8 offset-m2\">\n    <div *ngIf=\"company.id == undefined\">\n      <h5 class=\"blue-text text-lighten-2\">New Company</h5>\n    </div>\n    <div *ngIf=\"company.id !== undefined\">\n      <div class=\"row\">\n        <div class=\"col m6\">\n          <h5 class=\"blue-text text-lighten-2\">Define Company</h5>\n        </div>\n        <div class=\"col m6\">\n          <p>\n            <a class=\"right\" href=\"\" routerLink=\"/companies/\">\n              <i mz-icon-mdi\n                [align]=\"'right'\"\n                [icon]=\"'eye'\"\n                [size]=\"'24px'\">\n              </i>\n            </a>\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-content\">\n        <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n          <div class=\"row\">\n            <div class=\"col m9 s12\">\n              <input type=\"text\" placeholder=\"Name Comapny\" name=\"name\" [(ngModel)]=\"company.name\" required #name=\"ngModel\">\n              <label for=\"name\" [hidden]=\"name.valid || name.pristine\" class=\"red-text text-lighten-2\">Required</label>\n            </div>\n            <div class=\"col m3 s12\">\n              <div class=\"col m6 s2\">\n              <input [(colorPicker)]=\"company.primary_color\" [style.background]=\"company.primary_color\" class=\"color-picker\" />\n              </div>\n              <div class=\"col m6 s2\">\n                <mz-switch-container>\n                  <input mz-switch id=\"switch-id\" type=\"checkbox\" [(ngModel)]=\"company.enable\" name=\"primary_color\">\n                </mz-switch-container>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col m9 s12\">\n              <input type=\"text\" placeholder=\"Ex: 01202527/0002-62\" name=\"cnpj\" [(ngModel)]=\"company.cnpj\" required #cnpj=\"ngModel\">\n              <label for=\"cnpj\" [hidden]=\"cnpj.valid || cnpj.pristine\" class=\"red-text text-lighten-2\">Required</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col m9 s12\">\n              <input type=\"text\" placeholder=\"Country\" name=\"country\" [(ngModel)]=\"company.country\" required #country=\"ngModel\">\n              <label for=\"country\" [hidden]=\"country.valid || country.pristine\" class=\"red-text text-lighten-2\">Required</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col s12\">\n              <textarea type=\"text\" placeholder=\"Description\" class=\"materialize-textarea\" name=\"description\" [(ngModel)]=\"company.description\" required #description=\"ngModel\"></textarea>\n              <label for=\"description\" [hidden]=\"description.valid || description.pristine\" class=\"red-text text-lighten-2\">Required</label>\n            </div>\n            <div class=\"row\">\n              <div class=\"col m3\">\n                <mz-select-container>\n                    <select mz-select\n                      [placeholder]=\"'Moeda'\"\n                      [(ngModel)]=\"company.currency\"\n                      #currency=\"ngModel\"\n                      name=\"currency\"\n                      required\n                      >\n                        <option value=\"usd\">USD</option>\n                        <option value=\"brl\">BRL</option>\n                        <option value=\"eur\">EUR</option>\n                    </select>\n                  </mz-select-container>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col m3 right\">\n              <button [disabled]=\"!f.valid\" class=\"btn\" type=\"submit\" *ngIf=\"company.id == undefined\">Create</button>\n              <button [disabled]=\"!f.valid\" class=\"btn\" type=\"submit\" *ngIf=\"company.id !== undefined\">Update</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/companies/company-form/company-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_company_service__ = __webpack_require__("../../../../../src/app/shared/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_company_model__ = __webpack_require__("../../../../../src/app/shared/company.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_materialize__ = __webpack_require__("../../../../ng2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompanyFormComponent = /** @class */ (function () {
    function CompanyFormComponent(companyService, toastService, router) {
        this.companyService = companyService;
        this.toastService = toastService;
        this.router = router;
    }
    CompanyFormComponent.prototype.ngOnInit = function () { };
    CompanyFormComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (this.company.id) {
            this.companyService.updateCompany(this.company.id, this.company).subscribe(function (data) {
                _this.toastService.show('Company updated', 8000, 'green');
            }, function (error) {
                _this.toastService.show('Problem in Company creation', 8000, 'red');
            });
        }
        else {
            this.companyService.createCompany(this.company).subscribe(function (data) {
                _this.router.navigate(['/companies/' + data.slug]);
            }, function (error) {
                _this.toastService.show('Problem in Company creation', 8000, 'red');
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared_company_model__["a" /* Company */])
    ], CompanyFormComponent.prototype, "company", void 0);
    CompanyFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-company-form',
            template: __webpack_require__("../../../../../src/app/companies/company-form/company-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/companies/company-form/company-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_materialize__["b" /* MzToastService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], CompanyFormComponent);
    return CompanyFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/companies/company-list/company-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n    margin-top: 4%;\n}\n\n.title-box{\n    margin-bottom: 0px;\n}\n\n.uppcase{\n    text-transform: uppercase;\n}\n\n.title{\n    margin-top: 0px;\n}\n\n.description{\n    text-align: justify;\n}\n\n.form{\n    margin-bottom: 0px;\n}\n\n.btn{\n    width: 120px;\n}\n\n.label{\n    color:#c3c1c1;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/companies/company-list/company-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col m8 offset-m2 s12\">\n      <h5 class=\"blue-text text-lighten-2\">Your Companies</h5>\n      <div *ngIf=\"companies?.length > 0\">\n        <div class=\"card\" *ngFor=\"let company of companies\">\n          <div class=\"card-content\">\n            <h5 class=\"title\">{{ company.name }}</h5>\n            <div class=\"row form\">\n              <div class=\"col m9 s12\">\n                <div class=\"row title-box\">\n                  <div class=\"col m8 s12\">\n                    <h6 class=\"title uppcase label\">CNPJ: {{ company.cnpj }} | {{ company.country }} | {{ company.currency }}</h6>\n                  </div>\n                  <div class=\"col m4 s12\">\n                    <div class=\"row\">\n                      <div class=\"col m6\">\n                        <app-active [company]=\"company\"></app-active>\n                      </div>\n                      <div class=\"col m6\">\n                        <a href=\"#\" class=\"grey-text\" (click)=\"deleteCompany(company)\">\n                          <i mz-icon-mdi [icon]=\"'delete'\" [size]=\"'24px'\">\n                          </i>\n                        </a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col m12\">\n                    <p class=\"description grey-text\">{{ company.description | slice:0:120 }}</p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col m3 s12 center\">\n                <div class=\"col m12 s6\">\n                  <div class=\"row\">\n                    <a class=\"btn light-green center-align\" routerLink=\"/companies/{{ company.slug }}\">Edit</a>\n                  </div>\n                </div>\n                <div class=\"col m12 s6\">\n                  <div class=\"row\">\n                    <a class=\"btn blue center-align\" routerLink=\"/subscribers/{{ company.id }}\">Payer</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"fixed-action-btn\">\n  <a class=\"btn-floating btn-large waves-effect waves-lightred blue lighten-2 pulse\" routerLink=\"/companies/new\">\n    <i mz-icon-mdi [icon]=\"'plus'\" [size]=\"'24px'\">\n    </i>\n  </a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/companies/company-list/company-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_company_service__ = __webpack_require__("../../../../../src/app/shared/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_materialize__ = __webpack_require__("../../../../ng2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_company_model__ = __webpack_require__("../../../../../src/app/shared/company.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyListComponent = /** @class */ (function () {
    function CompanyListComponent(companyService, toastService) {
        this.companyService = companyService;
        this.toastService = toastService;
        this.companies = [];
    }
    CompanyListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companyService.getCompanies().subscribe(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var company = data_1[_i];
                _this.companies.push(new __WEBPACK_IMPORTED_MODULE_3__shared_company_model__["a" /* Company */](company));
            }
        });
    };
    CompanyListComponent.prototype.deleteCompany = function (company) {
        var _this = this;
        if (confirm('Your want delete this company?')) {
            this.companyService.destroyCompany(company.id).subscribe(function (data) {
                var index = _this.companies.indexOf(company);
                _this.companies.splice(index, 1);
                _this.toastService.show('Company deleted', 8000, 'green');
            }, function (error) {
                _this.toastService.show('Error in delete Company ' + company.title, 8000, 'red');
            });
        }
        return false;
    };
    CompanyListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-company-list',
            template: __webpack_require__("../../../../../src/app/companies/company-list/company-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/companies/company-list/company-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_2_ng2_materialize__["b" /* MzToastService */]])
    ], CompanyListComponent);
    return CompanyListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/companies/product-form/product-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/companies/product-form/product-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-content\">\n    <form #q=\"ngForm\" (ngSubmit)=\"onSubmit(q)\">\n      <div class=\"product\">\n        <div class=\"row\">\n          <div class=\"col m9 s12\">\n              <input type=\"text\" placeholder=\"Name Product\" name=\"name\" [(ngModel)]=\"product.name\" required #name=\"ngModel\">\n              <label for=\"name\" [hidden]=\"name.valid || name.pristine\" class=\"red-text text-lighten-2\">Required</label>\n            </div>\n          <div class=\"row\">\n            <div class=\"col m9 s12\">\n              <input type=\"number\" placeholder=\"Price \" name=\"price\" [(ngModel)]=\"product.price\" #price=\"ngModel\">\n              <label for=\"price\" [hidden]=\"price.valid\" class=\"red-text text-lighten-2\">Required</label>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col m3\" *ngIf=\"product.id !== undefined\">\n            <a href=\"#\" class=\"grey-text\" (click)=\"deleteProduct(product)\">\n              <i mz-icon-mdi [icon]=\"'delete'\" [size]=\"'24px'\">\n              </i>\n            </a>\n          </div>\n          <div class=\"col m3 right\">\n            <button [disabled]=\"!q.valid\" class=\"btn\" type=\"submit\" *ngIf=\"product.id == undefined\">Create</button>\n            <button [disabled]=\"!q.valid\" class=\"btn\" type=\"submit\" *ngIf=\"product.id !== undefined\">Update</button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/companies/product-form/product-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_product_service__ = __webpack_require__("../../../../../src/app/shared/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_product_model__ = __webpack_require__("../../../../../src/app/shared/product.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_materialize__ = __webpack_require__("../../../../ng2-materialize/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductFormComponent = /** @class */ (function () {
    function ProductFormComponent(productService, toastService) {
        this.productService = productService;
        this.toastService = toastService;
    }
    ProductFormComponent.prototype.ngOnInit = function () {
    };
    ProductFormComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (this.product.id) {
            this.productService.updateProduct(this.product.id, this.product).subscribe(function (data) {
                _this.toastService.show('Product updated', 8000, 'green');
            }, function (error) {
                _this.toastService.show('Problem in Product update', 8000, 'red');
            });
        }
        else {
            this.productService.createProduct(this.company_id, this.product).subscribe(function (data) {
                _this.products.push(new __WEBPACK_IMPORTED_MODULE_2__shared_product_model__["a" /* Product */](data));
                _this.product = new __WEBPACK_IMPORTED_MODULE_2__shared_product_model__["a" /* Product */]({});
            }, function (error) {
                _this.toastService.show('Problem in Product creation', 8000, 'red');
            });
        }
    };
    ProductFormComponent.prototype.deleteProduct = function () {
        var _this = this;
        if (confirm('Your want delete this product?')) {
            this.productService.destroyProduct(this.product.id).subscribe(function (data) {
                var index = _this.products.indexOf(_this.product);
                _this.products.splice(index, 1);
                _this.toastService.show('product deleted', 8000, 'green');
            }, function (error) {
                _this.toastService.show('Error in delete product ' + _this.product.name, 8000, 'red');
            });
        }
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared_product_model__["a" /* Product */])
    ], ProductFormComponent.prototype, "product", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ProductFormComponent.prototype, "products", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ProductFormComponent.prototype, "company_id", void 0);
    ProductFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-form',
            template: __webpack_require__("../../../../../src/app/companies/product-form/product-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/companies/product-form/product-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_materialize__["b" /* MzToastService */]])
    ], ProductFormComponent);
    return ProductFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/companies/product-list/product-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/companies/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col m8 offset-m2 s12\">\n    <h5 class=\"blue-text text-lighten-2\">Create Product</h5>\n    <div *ngFor=\"let product of products\">\n      <app-product-form [company_id]=\"company_id\" [products]=\"products\" [product]=\"product\"></app-product-form>\n    </div>\n    <app-product-form [company_id]=\"company_id\" [products]=\"products\" [product]=\"product_new\"></app-product-form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/companies/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_product_model__ = __webpack_require__("../../../../../src/app/shared/product.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductListComponent = /** @class */ (function () {
    function ProductListComponent() {
        this.product_new = new __WEBPACK_IMPORTED_MODULE_1__shared_product_model__["a" /* Product */]({});
    }
    ProductListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ProductListComponent.prototype, "products", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ProductListComponent.prototype, "company_id", void 0);
    ProductListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__("../../../../../src/app/companies/product-list/product-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/companies/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/companies/shared/active/active.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/companies/shared/active/active.component.html":
/***/ (function(module, exports) {

module.exports = "<mz-switch-container>\n  <input mz-switch\n    id=\"switch-id\"\n    type=\"checkbox\" [(ngModel)]=\"company.enable\" (change)=\"toggleEnable()\">\n</mz-switch-container>\n"

/***/ }),

/***/ "../../../../../src/app/companies/shared/active/active.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_company_service__ = __webpack_require__("../../../../../src/app/shared/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_materialize__ = __webpack_require__("../../../../ng2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_company_model__ = __webpack_require__("../../../../../src/app/shared/company.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActiveComponent = /** @class */ (function () {
    function ActiveComponent(companyService, toastService) {
        this.companyService = companyService;
        this.toastService = toastService;
    }
    ActiveComponent.prototype.ngOnInit = function () {
    };
    ActiveComponent.prototype.toggleEnable = function () {
        var _this = this;
        this.companyService.updateCompany(this.company.id, this.company).subscribe(function (data) {
            if (_this.company.enable) {
                _this.toastService.show('Company enabled', 8000, 'green');
            }
            else {
                _this.toastService.show('Company disabled', 8000, 'green');
            }
        }, function (error) {
            if (_this.company.enable) {
                _this.toastService.show('Error in enable Company', 8000, 'red');
            }
            else {
                _this.toastService.show('Error in disable Company', 8000, 'red');
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__shared_company_model__["a" /* Company */])
    ], ActiveComponent.prototype, "company", void 0);
    ActiveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-active',
            template: __webpack_require__("../../../../../src/app/companies/shared/active/active.component.html"),
            styles: [__webpack_require__("../../../../../src/app/companies/shared/active/active.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_2_ng2_materialize__["b" /* MzToastService */]])
    ], ActiveComponent);
    return ActiveComponent;
}());



/***/ }),

/***/ "../../../../../src/app/companies/subscriber-form/subscriber-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/companies/subscriber-form/subscriber-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-content\">\n    <form #q=\"ngForm\" (ngSubmit)=\"onSubmit(q)\">\n      <div class=\"subscriber\">\n        <div class=\"row\">\n          <div class=\"col m9 s12\">\n              <input type=\"text\" placeholder=\"Name Subscriber\" name=\"id\" [(ngModel)]=\"subscriber.id\" required #id=\"ngModel\">\n              <label for=\"id\" [hidden]=\"id.valid || id.pristine\" class=\"red-text text-lighten-2\">Required</label>\n            </div>\n          <div class=\"row\">\n            <div class=\"col m9 s12\">\n              <input type=\"number\" placeholder=\"Price \" name=\"price\" [(ngModel)]=\"subscriber.price\" #price=\"ngModel\">\n              <label for=\"price\" [hidden]=\"price.valid\" class=\"red-text text-lighten-2\">Required</label>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col m3\" *ngIf=\"subscriber.id !== undefined\">\n            <a href=\"#\" class=\"grey-text\" (click)=\"deleteSubscriber(subscriber)\">\n              <i mz-icon-mdi [icon]=\"'delete'\" [size]=\"'24px'\">\n              </i>\n            </a>\n          </div>\n          <div class=\"col m3 right\">\n            <button [disabled]=\"!q.valid\" class=\"btn\" type=\"submit\" *ngIf=\"subscriber.id == undefined\">Create</button>\n            <button [disabled]=\"!q.valid\" class=\"btn\" type=\"submit\" *ngIf=\"subscriber.id !== undefined\">Update</button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/companies/subscriber-form/subscriber-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriberFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_subscriber_service__ = __webpack_require__("../../../../../src/app/shared/subscriber.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_subscriber_model__ = __webpack_require__("../../../../../src/app/shared/subscriber.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_materialize__ = __webpack_require__("../../../../ng2-materialize/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubscriberFormComponent = /** @class */ (function () {
    function SubscriberFormComponent(subscriberService, toastService) {
        this.subscriberService = subscriberService;
        this.toastService = toastService;
    }
    SubscriberFormComponent.prototype.ngOnInit = function () {
    };
    SubscriberFormComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (this.subscriber.id) {
            this.subscriberService.updateSubscriber(this.subscriber.id, this.subscriber).subscribe(function (data) {
                _this.toastService.show('Subscriber updated', 8000, 'green');
            }, function (error) {
                _this.toastService.show('Problem in Subscriber update', 8000, 'red');
            });
        }
        else {
            this.subscriberService.createSubscriber(this.product_id, this.subscriber).subscribe(function (data) {
                _this.subscribers.push(new __WEBPACK_IMPORTED_MODULE_2__shared_subscriber_model__["a" /* Subscriber */](data));
                _this.subscriber = new __WEBPACK_IMPORTED_MODULE_2__shared_subscriber_model__["a" /* Subscriber */]({});
            }, function (error) {
                _this.toastService.show('Problem in Subscriber creation', 8000, 'red');
            });
        }
    };
    SubscriberFormComponent.prototype.deleteSubscriber = function () {
        var _this = this;
        if (confirm('Your want delete this subscriber?')) {
            this.subscriberService.destroySubscriber(this.subscriber.id).subscribe(function (data) {
                var index = _this.subscribers.indexOf(_this.subscriber);
                _this.subscribers.splice(index, 1);
                _this.toastService.show('subscriber deleted', 8000, 'green');
            }, function (error) {
                _this.toastService.show('Error in delete subscriber ' + _this.subscriber.id, 8000, 'red');
            });
        }
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared_subscriber_model__["a" /* Subscriber */])
    ], SubscriberFormComponent.prototype, "subscriber", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], SubscriberFormComponent.prototype, "subscribers", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], SubscriberFormComponent.prototype, "product_id", void 0);
    SubscriberFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-subscriber-form',
            template: __webpack_require__("../../../../../src/app/companies/subscriber-form/subscriber-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/companies/subscriber-form/subscriber-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_subscriber_service__["a" /* SubscriberService */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_materialize__["b" /* MzToastService */]])
    ], SubscriberFormComponent);
    return SubscriberFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/companies/subscriber-list/subscriber-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/companies/subscriber-list/subscriber-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col m8 offset-m2 s12\">\n    <h5 class=\"blue-text text-lighten-2\">Create Subscriber</h5>\n    <div *ngFor=\"let subscriber of subscribers\">\n      <app-subscriber-form [product_id]=\"product_id\" [subscribers]=\"subscribers\" [subscriber]=\"subscriber\"></app-subscriber-form>\n    </div>\n    <app-subscriber-form [product_id]=\"product_id\" [subscribers]=\"subscribers\" [subscriber]=\"subscriber_new\"></app-subscriber-form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/companies/subscriber-list/subscriber-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriberListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_subscriber_model__ = __webpack_require__("../../../../../src/app/shared/subscriber.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubscriberListComponent = /** @class */ (function () {
    function SubscriberListComponent() {
        this.subscriber_new = new __WEBPACK_IMPORTED_MODULE_1__shared_subscriber_model__["a" /* Subscriber */]({});
    }
    SubscriberListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], SubscriberListComponent.prototype, "subscribers", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], SubscriberListComponent.prototype, "product_id", void 0);
    SubscriberListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-subscriber-list',
            template: __webpack_require__("../../../../../src/app/companies/subscriber-list/subscriber-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/companies/subscriber-list/subscriber-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SubscriberListComponent);
    return SubscriberListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".brand-logo img{\n    height: 40px;\n    margin-top: 10px;\n}\n\n@media screen and (max-width: 768px) {\n    .brand-logo img{\n        height: 32px;\n        margin-top: 12px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"blue lighten-2\">\n  <div class=\"nav-wrapper container\">\n    <a href=\"#\" class=\"brand-logo left\" routerLink=\"/companies\">\n      <img src=\"/assets/images/rd-station-cor.png\" alt=\"Resultado Digitais\">\n    </a>\n    <ul class=\"right\">\n      <div *ngIf=\"_tokenService.currentUserData == null\">\n        <li><a href=\"#\" routerLink=\"/login\">Login</a></li>\n        <li><a href=\"#\" routerLink=\"/register\">Register</a></li>\n      </div>\n      <div *ngIf=\"_tokenService.currentUserData != null\">\n        <li><a href (click)=\"signOut()\">Logout</a></li>\n      </div>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_token__ = __webpack_require__("../../../../angular2-token/angular2-token.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_materialize__ = __webpack_require__("../../../../ng2-materialize/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_tokenService, toastService) {
        this._tokenService = _tokenService;
        this.toastService = toastService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.signOut = function () {
        var _this = this;
        this._tokenService.signOut().subscribe(function (res) { }, function (error) { return _this.toastService.show('Error in Logout', 8000, 'red'); });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_token__["a" /* Angular2TokenService */], __WEBPACK_IMPORTED_MODULE_2_ng2_materialize__["b" /* MzToastService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".video{\n    display: inline-block;\n    vertical-align: baseline;\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: -1;\n}\n.home{\n    background: url(/assets/images/background.jpeg) no-repeat center center fixed;\n    background-size: cover;\n    min-height: 100%;\n    width: 100%;\n    position: fixed;\n}\n.container{\n    padding-top: 15%;\n}\n.title{\n    font-weight: 700;\n    text-shadow: 2px 0px 2px rgba(66, 66, 66, 0.95);\n}\n.subtitle{\n    text-shadow: 4px 4px 2px rgba(43, 43, 43, 0.35);\n}\n@media screen and (max-width: 1024px) { /* Specific to this particular image */\n    .home {\n        left: 50%;\n        margin-left: -50%;   /* 50% */\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n  <div class=\"container\">\n    <div class=\"center-align row\">\n      <div class=\"video\">\n        <video poster=\"https://resultadosdigitais.com.br/wp-content/themes/resultados_digitais_2017/img/video-frame.jpg\" playsinline=\"\" autoplay=\"\" muted=\"\" loop=\"\" class=\"vsc-initialized\" data-vscid=\"yizo49bdv\">\n                <source src=\"https://1h4hfe10xz8m3g3xkh2wb9lc-wpengine.netdna-ssl.com/wp-content/themes/resultados_digitais_2017/img/video.mp4\" type=\"video/mp4\">\n            </video>\n      </div>\n      <div class=\"col m10 s12 offset-s0 offset-m1\">\n        <h4 class=\"title blue-text text-lighten-2\">NÓS AJUDAMOS A SUA EMPRESA A CRESCER!</h4>\n      </div>\n      <div class=\"col m10 s12 offset-s0 offset-m1\">\n        <h5 class=\"subtitle white-text\">\n            A Resultados Digitais oferece todos os recursos para que você e sua empresa explorem ao máximo o potencial do Marketing Digital\n        </h5>\n        <a routerLink=\"/companies\" class=\"btn blue lighten-1 btn-forms\">\n            Conheça todas as funcionalidades\n        </a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,300,500);\n\n.body {\n  background-color: #007aff;\n  color: #fff;\n  font-size: 100%;\n  font-family: \"Roboto\", sans-serif;\n  width: 100%;\n  height:100vh;\n\n}\n\n.button {\n  font-weight: 300;\n  color: #fff;\n  font-size: 1.2em;\n  text-decoration: none;\n  border: 1px solid #efefef;\n  padding: .5em;\n  border-radius: 3px;\n  margin: auto;\n  display: block;\n  width: 340px;\n  z-index: 9;\n\n  -webkit-transition: all .3s linear;\n\n  transition: all .3s linear;\n}\n\n.button:hover {\n  background-color: #007aff;\n  color: #fff;\n}\n\np {\n  font-size: 2em;\n  text-align: center;\n  font-weight: 100;\n}\n\nh1 {\n  text-align: center;\n  font-size: 15em;\n  font-weight: 100;\n  margin: 0;\n  /*padding-top: 63px;*/\n  z-index: 1;\n  margin:auto;\n  text-shadow: #0062cc 1px 1px, #0062cc 2px 2px, #0062cc 3px 3px, #0062cd 4px 4px, #0062cd 5px 5px, #0062cd 6px 6px, #0062cd 7px 7px, #0062ce 8px 8px, #0063ce 9px 9px, #0063ce 10px 10px, #0063ce 11px 11px, #0063cf 12px 12px, #0063cf 13px 13px, #0063cf 14px 14px, #0063cf 15px 15px, #0063d0 16px 16px, #0064d0 17px 17px, #0064d0 18px 18px, #0064d0 19px 19px, #0064d1 20px 20px, #0064d1 21px 21px, #0064d1 22px 22px, #0064d1 23px 23px, #0064d2 24px 24px, #0065d2 25px 25px, #0065d2 26px 26px, #0065d2 27px 27px, #0065d3 28px 28px, #0065d3 29px 29px, #0065d3 30px 30px, #0065d3 31px 31px, #0065d4 32px 32px, #0065d4 33px 33px, #0066d4 34px 34px, #0066d4 35px 35px, #0066d5 36px 36px, #0066d5 37px 37px, #0066d5 38px 38px, #0066d5 39px 39px, #0066d6 40px 40px, #0066d6 41px 41px, #0067d6 42px 42px, #0067d6 43px 43px, #0067d7 44px 44px, #0067d7 45px 45px, #0067d7 46px 46px, #0067d7 47px 47px, #0067d8 48px 48px, #0067d8 49px 49px, #0068d8 50px 50px, #0068d9 51px 51px, #0068d9 52px 52px, #0068d9 53px 53px, #0068d9 54px 54px, #0068da 55px 55px, #0068da 56px 56px, #0068da 57px 57px, #0068da 58px 58px, #0069db 59px 59px, #0069db 60px 60px, #0069db 61px 61px, #0069db 62px 62px, #0069dc 63px 63px, #0069dc 64px 64px, #0069dc 65px 65px, #0069dc 66px 66px, #006add 67px 67px, #006add 68px 68px, #006add 69px 69px, #006add 70px 70px, #006ade 71px 71px, #006ade 72px 72px, #006ade 73px 73px, #006ade 74px 74px, #006bdf 75px 75px, #006bdf 76px 76px, #006bdf 77px 77px, #006bdf 78px 78px, #006be0 79px 79px, #006be0 80px 80px, #006be0 81px 81px, #006be0 82px 82px, #006be1 83px 83px, #006ce1 84px 84px, #006ce1 85px 85px, #006ce1 86px 86px, #006ce2 87px 87px, #006ce2 88px 88px, #006ce2 89px 89px, #006ce2 90px 90px, #006ce3 91px 91px, #006de3 92px 92px, #006de3 93px 93px, #006de3 94px 94px, #006de4 95px 95px, #006de4 96px 96px, #006de4 97px 97px, #006de4 98px 98px, #006de5 99px 99px, #006ee5 100px 100px, #006ee5 101px 101px, #006ee6 102px 102px, #006ee6 103px 103px, #006ee6 104px 104px, #006ee6 105px 105px, #006ee7 106px 106px, #006ee7 107px 107px, #006ee7 108px 108px, #006fe7 109px 109px, #006fe8 110px 110px, #006fe8 111px 111px, #006fe8 112px 112px, #006fe8 113px 113px, #006fe9 114px 114px, #006fe9 115px 115px, #006fe9 116px 116px, #0070e9 117px 117px, #0070ea 118px 118px, #0070ea 119px 119px, #0070ea 120px 120px, #0070ea 121px 121px, #0070eb 122px 122px, #0070eb 123px 123px, #0070eb 124px 124px, #0071eb 125px 125px, #0071ec 126px 126px, #0071ec 127px 127px, #0071ec 128px 128px, #0071ec 129px 129px, #0071ed 130px 130px, #0071ed 131px 131px, #0071ed 132px 132px, #0071ed 133px 133px, #0072ee 134px 134px, #0072ee 135px 135px, #0072ee 136px 136px, #0072ee 137px 137px, #0072ef 138px 138px, #0072ef 139px 139px, #0072ef 140px 140px, #0072ef 141px 141px, #0073f0 142px 142px, #0073f0 143px 143px, #0073f0 144px 144px, #0073f0 145px 145px, #0073f1 146px 146px, #0073f1 147px 147px, #0073f1 148px 148px, #0073f1 149px 149px, #0074f2 150px 150px, #0074f2 151px 151px, #0074f2 152px 152px, #0074f3 153px 153px, #0074f3 154px 154px, #0074f3 155px 155px, #0074f3 156px 156px, #0074f4 157px 157px, #0074f4 158px 158px, #0075f4 159px 159px, #0075f4 160px 160px, #0075f5 161px 161px, #0075f5 162px 162px, #0075f5 163px 163px, #0075f5 164px 164px, #0075f6 165px 165px, #0075f6 166px 166px, #0076f6 167px 167px, #0076f6 168px 168px, #0076f7 169px 169px, #0076f7 170px 170px, #0076f7 171px 171px, #0076f7 172px 172px, #0076f8 173px 173px, #0076f8 174px 174px, #0077f8 175px 175px, #0077f8 176px 176px, #0077f9 177px 177px, #0077f9 178px 178px, #0077f9 179px 179px, #0077f9 180px 180px, #0077fa 181px 181px, #0077fa 182px 182px, #0077fa 183px 183px, #0078fa 184px 184px, #0078fb 185px 185px, #0078fb 186px 186px, #0078fb 187px 187px, #0078fb 188px 188px, #0078fc 189px 189px, #0078fc 190px 190px, #0078fc 191px 191px, #0079fc 192px 192px, #0079fd 193px 193px, #0079fd 194px 194px, #0079fd 195px 195px, #0079fd 196px 196px, #0079fe 197px 197px, #0079fe 198px 198px, #0079fe 199px 199px, #007aff 200px 200px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n    <h1>404</h1>\n    <p>Oops! Something is wrong.</p>\n    <a class=\"button\" href=\"/\"><i class=\"icon-home\"></i> Go back in initial page, is better.</a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/company.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Company; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_model__ = __webpack_require__("../../../../../src/app/shared/product.model.ts");

var Company = /** @class */ (function () {
    function Company(CompanyInfo) {
        this.products = [];
        this.id = CompanyInfo.id;
        this.name = CompanyInfo.name;
        this.cnpj = CompanyInfo.cnpj;
        this.description = CompanyInfo.description;
        this.enable = CompanyInfo.enable;
        this.primary_color = CompanyInfo.primary_color;
        this.country = CompanyInfo.country;
        this.currency = CompanyInfo.currency;
        this.user_id = CompanyInfo.user_id;
        this.slug = CompanyInfo.slug;
        this.includeProducts(CompanyInfo.products);
    }
    Company.prototype.includeProducts = function (products) {
        for (var count in products) {
            this.products.push(new __WEBPACK_IMPORTED_MODULE_0__product_model__["a" /* Product */](products[count]));
        }
    };
    return Company;
}());



/***/ }),

/***/ "../../../../../src/app/shared/company.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_token__ = __webpack_require__("../../../../angular2-token/angular2-token.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyService = /** @class */ (function () {
    function CompanyService(http, _tokenService) {
        this.http = http;
        this._tokenService = _tokenService;
    }
    CompanyService.prototype.getCompanies = function () {
        return this._tokenService.get('companies').map(function (res) { return res.json(); });
    };
    CompanyService.prototype.getCompany = function (company_id) {
        return this._tokenService.get('companies/' + company_id).map(function (res) { return res.json(); });
    };
    CompanyService.prototype.createCompany = function (company_params) {
        return this._tokenService.post('companies', company_params).map(function (res) { return res.json(); });
    };
    CompanyService.prototype.updateCompany = function (company_id, company_params) {
        return this._tokenService.put('companies/' + company_id, company_params).map(function (res) { return res.json(); });
    };
    CompanyService.prototype.destroyCompany = function (company_id) {
        return this._tokenService.delete('companies/' + company_id).map(function (res) { return res.json(); });
    };
    CompanyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_angular2_token__["a" /* Angular2TokenService */]])
    ], CompanyService);
    return CompanyService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/product.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__subscriber_model__ = __webpack_require__("../../../../../src/app/shared/subscriber.model.ts");

var Product = /** @class */ (function () {
    function Product(productInfo) {
        this.subscribers = [];
        this.id = productInfo.id;
        this.name = productInfo.name;
        this.price = productInfo.price;
        this.company_id = productInfo.company_id;
        this.includeSubscribers(productInfo.subscriber);
    }
    Product.prototype.includeSubscribers = function (subscribers) {
        for (var count in subscribers) {
            this.subscribers.push(new __WEBPACK_IMPORTED_MODULE_0__subscriber_model__["a" /* Subscriber */](subscribers[count]));
        }
    };
    return Product;
}());



/***/ }),

/***/ "../../../../../src/app/shared/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_token__ = __webpack_require__("../../../../angular2-token/angular2-token.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = /** @class */ (function () {
    function ProductService(http, _tokenService) {
        this.http = http;
        this._tokenService = _tokenService;
    }
    ProductService.prototype.createProduct = function (company_id, product) {
        return this._tokenService.post('products', { company_id: company_id, product: product }).map(function (res) { return res.json(); });
    };
    ProductService.prototype.updateProduct = function (product_id, product_params) {
        return this._tokenService.put('products/' + product_id, product_params).map(function (res) { return res.json(); });
    };
    ProductService.prototype.destroyProduct = function (product_id) {
        return this._tokenService.delete('products/' + product_id).map(function (res) { return res.json(); });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_angular2_token__["a" /* Angular2TokenService */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/subscriber.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscriber; });
var Subscriber = /** @class */ (function () {
    function Subscriber(subscribertInfo) {
        this.id = subscribertInfo.id;
        this.manager_id = subscribertInfo.manager_id;
        this.payer_id = subscribertInfo.payer_id;
        this.product_id = subscribertInfo.product_id;
    }
    return Subscriber;
}());



/***/ }),

/***/ "../../../../../src/app/shared/subscriber.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriberService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_token__ = __webpack_require__("../../../../angular2-token/angular2-token.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubscriberService = /** @class */ (function () {
    function SubscriberService(http, _tokenService) {
        this.http = http;
        this._tokenService = _tokenService;
    }
    SubscriberService.prototype.createSubscriber = function (product_id, subscriber) {
        return this._tokenService.post('subscribers', { product_id: product_id, subscriber: subscriber }).map(function (res) { return res.json(); });
    };
    SubscriberService.prototype.updateSubscriber = function (subscriber_id, subscriber_params) {
        return this._tokenService.put('subscribers/' + subscriber_id, subscriber_params).map(function (res) { return res.json(); });
    };
    SubscriberService.prototype.destroySubscriber = function (subscriber_id) {
        return this._tokenService.delete('subscribers/' + subscriber_id).map(function (res) { return res.json(); });
    };
    SubscriberService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_angular2_token__["a" /* Angular2TokenService */]])
    ], SubscriberService);
    return SubscriberService;
}());



/***/ }),

/***/ "../../../../../src/app/users/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n    margin-top: 10%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col m6 offset-m3 s10 offset-s1\">\n      <div class=\"row\">\n        <h3 class=\"blue-text text-lighten-2\">Login</h3>\n      </div>\n      <div>\n        <form #signInForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"row\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Email\" required [(ngModel)]=\"_signInData.email\" name=\"email\">\n            <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required [(ngModel)]=\"_signInData.password\" name=\"password\">\n          </div>\n          <div class=\"row\">\n            <button class=\"btn waves-effect waves-light\" type=\"submit\" [disabled]=\"!signInForm.form.valid\">Sign In\n              <i mz-icon-mdi [align]=\"'right'\" [icon]=\"'send'\" [size]=\"'24px'\">\n              </i>\n            </button>\n          </div>\n          <div class=\"row\">\n            <span class=\"pull-right\">\n              <a href=\"/forgot_password\">Forgot Password?</a>\n            </span>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_token__ = __webpack_require__("../../../../angular2-token/angular2-token.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_materialize__ = __webpack_require__("../../../../ng2-materialize/dist/index.js");
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




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_tokenService, toastService, router) {
        this._tokenService = _tokenService;
        this.toastService = toastService;
        this.router = router;
        this._signInData = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this._tokenService.signIn(this._signInData).subscribe(function (res) {
            _this.router.navigate(['/companies']);
        }, function (error) {
            _this._signInData = {};
            if (error.status !== 0) {
                for (var _i = 0, _a = JSON.parse(error._body)['errors']; _i < _a.length; _i++) {
                    var message = _a[_i];
                    _this.toastService.show(message, 8000, 'red');
                }
            }
            else {
                _this.toastService.show('Connection Error', 8000, 'red');
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/users/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_token__["a" /* Angular2TokenService */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_materialize__["b" /* MzToastService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/users/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n    margin-top: 10%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col m6 offset-m3 s10 offset-s1\">\n\n\n      <div class=\"row\">\n        <h3 class=\"blue-text text-lighten-2\">Register</h3>\n      </div>\n\n      <div>\n        <form #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"row\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Email\" required [(ngModel)]=\"_registerData.email\" name=\"email\">\n            <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required [(ngModel)]=\"_registerData.password\" name=\"password\">\n            <input type=\"password\" class=\"form-control\" placeholder=\"Password Confirmation\" required [(ngModel)]=\"_registerData.passwordConfirmation\"\n              name=\"passwordConfirmation\">\n          </div>\n\n          <div class=\"row\">\n            <button class=\"btn waves-effect waves-light\" type=\"submit\" [disabled]=\"!registerForm.form.valid\">Sign Up\n              <i mz-icon-mdi [align]=\"'right'\" [icon]=\"'send'\" [size]=\"'24px'\">\n              </i>\n            </button>\n          </div>\n        </form>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/users/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_token__ = __webpack_require__("../../../../angular2-token/angular2-token.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_materialize__ = __webpack_require__("../../../../ng2-materialize/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_tokenService, toastService) {
        this._tokenService = _tokenService;
        this.toastService = toastService;
        this._registerData = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this._tokenService.registerAccount(this._registerData).subscribe(function (res) {
            _this._registerData = {};
            _this.toastService.show('Success, please confirm your Email', 8000, 'green');
        }, function (error) {
            _this._registerData = {};
            if (error.status !== 0) {
                for (var _i = 0, _a = JSON.parse(error._body)['errors']['full_messages']; _i < _a.length; _i++) {
                    var message = _a[_i];
                    _this.toastService.show(message, 8000, 'red');
                }
            }
            else {
                _this.toastService.show('Connection Error', 8000, 'red');
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/users/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_token__["a" /* Angular2TokenService */], __WEBPACK_IMPORTED_MODULE_2_ng2_materialize__["b" /* MzToastService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/users/users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/users/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__("../../../../../src/app/users/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_materialize__ = __webpack_require__("../../../../ng2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_materialize__["a" /* MaterializeModule */].forRoot()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */]]
        })
    ], UsersModule);
    return UsersModule;
}());



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map