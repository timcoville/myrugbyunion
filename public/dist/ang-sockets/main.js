(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n    margin: 30px;\n}\n"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\n      <a class=\"navbar-brand\" href=\"#\">MyRugbyUnion</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>   \n  \n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/home']\">Home<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/chat']\">Chat<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/roster']\">Roster<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/schedule']\">Schedule<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/dues']\">Dues<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/admin']\">Admin</a>\n            </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  \n  <div id=\"wrapper\">\n        <h3>Add Event to Schedule</h3>\n        <hr>\n        <form (submit)=\"addEvent()\">\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-8\">\n                  <label for=\"eventName\">Title</label>\n                  <input type=\"text\" class=\"form-control\" id=\"eventName\" aria-describedby=\"emailHelp\" placeholder=\"Event Title\" name=\"event.title\" [(ngModel)]=\"event.title\">\n              </div>\n              <div class=\"form-group col-md-4\">\n                  <label for=\"eventType\">Type</label>\n                  <select class=\"form-control\" id=\"eventType\" name=\"event.type\" [(ngModel)]=\"event.type\">\n                    <option selected>Practice</option>\n                    <option>Preseason</option>\n                    <option>League</option>\n                    <option>Playoffs</option>\n                  </select>\n              </div>\n            </div>\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-8\">\n                    <label for=\"eventLocation\">Location</label>\n                    <input type=\"text\" class=\"form-control\" id=\"eventLocation\" aria-describedby=\"emailHelp\" placeholder=\"Location Name\" name=\"event.location\" [(ngModel)]=\"event.location\">\n                </div>\n                <div class=\"form-group col-md-4\">\n                    <label for=\"startTime\">Date &amp; Start Time </label>\n                    <input type=\"datetime-local\" class=\"form-control\" id=\"startTime\" name=\"event.startTime\" [(ngModel)]=\"event.startTime\">\n                </div>\n              </div>\n            \n            <div class=\"form-group\">\n              <label for=\"inputAddress\">Address</label>\n              <input type=\"text\" class=\"form-control\" id=\"inputAddress\" placeholder=\"1234 Main St\" name=\"event.address.street\" [(ngModel)]=\"event.address.street\">\n            </div>\n\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label for=\"inputCity\">City</label>\n                <input type=\"text\" class=\"form-control\" id=\"inputCity\" name=\"event.address.city\" [(ngModel)]=\"event.address.city\">\n              </div>\n              <div class=\"form-group col-md-4\">\n                <label for=\"inputState\">State</label>\n                <select id=\"inputState\" class=\"form-control\" name=\"event.address.state\" [(ngModel)]=\"event.address.state\">\n                  <option selected>CA</option>\n                  <option>NV</option>\n                  <option>AZ</option>\n                </select>\n              </div>\n              <div class=\"form-group col-md-2\">\n                <label for=\"inputZip\">Zip</label>\n                <input type=\"text\" class=\"form-control\" id=\"inputZip\" name=\"event.address.zip\" [(ngModel)]=\"event.address.zip\">\n              </div>\n            </div>\n\n            <button type=\"submit\" class=\"btn btn-primary\">Add Event</button>\n          </form>\n      \n      </div>\n\n    </div>\n\n    "

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent(_http) {
        this._http = _http;
        this._http.verifySession();
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.event = {
            title: '',
            type: '',
            startTime: '',
            address: {
                street: '',
                city: '',
                state: '',
                zip: ''
            },
            location: ''
        };
    };
    AdminComponent.prototype.addEvent = function () {
        var _this = this;
        this._http.addEventService(this.event)
            .subscribe(function (data) {
            console.log(data);
            _this.event = {
                title: '',
                type: '',
                startTime: '',
                address: {
                    street: '',
                    city: '',
                    state: '',
                    zip: ''
                },
                location: ''
            };
        });
    };
    AdminComponent.prototype.logout = function () {
        this._http.delSessionService();
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], AdminComponent);
    return AdminComponent;
}());



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
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _dash_dash_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dash/dash.component */ "./src/app/dash/dash.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _roster_roster_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./roster/roster.component */ "./src/app/roster/roster.component.ts");
/* harmony import */ var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./schedule/schedule.component */ "./src/app/schedule/schedule.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _stripe_form_stripe_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stripe-form/stripe-form.component */ "./src/app/stripe-form/stripe-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











/* const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'chat', component: ChatComponent}
];
 */
/* const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent, children:[
    {path: '', component: DashComponent},
    {path: 'chat', component: ChatComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'roster', component: RosterComponent}
  ]}
  
]; */
var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'home', component: _dash_dash_component__WEBPACK_IMPORTED_MODULE_5__["DashComponent"] },
    { path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
    { path: 'roster', component: _roster_roster_component__WEBPACK_IMPORTED_MODULE_7__["RosterComponent"] },
    { path: 'schedule', component: _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_8__["ScheduleComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"] },
    { path: 'dues', component: _stripe_form_stripe_form_component__WEBPACK_IMPORTED_MODULE_10__["StripeFormComponent"] },
    { path: '**', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* #wrapper {\n    text-align: center;\n    margin: 30px 0;\n} */\n\n/* @media (min-width: 576px) { \n    .hide-chat{\n        display:hidden;\n    }\n } */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
        this.data = [];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-cookie/services/cookies.service */ "./node_modules/angular2-cookie/services/cookies.service.js");
/* harmony import */ var angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _dash_dash_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dash/dash.component */ "./src/app/dash/dash.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _roster_roster_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./roster/roster.component */ "./src/app/roster/roster.component.ts");
/* harmony import */ var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./schedule/schedule.component */ "./src/app/schedule/schedule.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _dues_dues_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dues/dues.component */ "./src/app/dues/dues.component.ts");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/modules/ngx-stripe.es5.js");
/* harmony import */ var _stripe_form_stripe_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./stripe-form/stripe-form.component */ "./src/app/stripe-form/stripe-form.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _dash_dash_component__WEBPACK_IMPORTED_MODULE_13__["DashComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
                _roster_roster_component__WEBPACK_IMPORTED_MODULE_15__["RosterComponent"],
                _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_16__["ScheduleComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_17__["AdminComponent"],
                _dues_dues_component__WEBPACK_IMPORTED_MODULE_18__["DuesComponent"],
                _stripe_form_stripe_form_component__WEBPACK_IMPORTED_MODULE_20__["StripeFormComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                angular_webstorage_service__WEBPACK_IMPORTED_MODULE_11__["StorageServiceModule"],
                ngx_stripe__WEBPACK_IMPORTED_MODULE_19__["NgxStripeModule"].forRoot('pk_test_SikI4i4ruABOuhiuMasln93X'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"], angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_12__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatBox {\n    min-height:400px;\n    vertical-align: bottom;\n    padding: 10px;\n    font-size: .8em;\n  }\n.chat {\n\n}\nform input:first-child {\n    width: 90%;\n    display: inline-block;\n    border-radius: 0px;\n    border-left: 0px;\n    \n}\n.user {\n    padding: 15px;\n    font-size: .9em;\n    line-height: .7em;\n}\nform input:last-child{\n    display: inline-block;\n    width: 10%;\n    font-size: 1rem;\n    margin-top: -3px;\n    border-radius: 0;\n}\n@media (max-width: 992px) { \n    form input:last-child{\n        font-size:.7em;\n        padding: .6rem 0;\n    }\n }\n@media (max-width: 576px) { \n    .hideUser{\n        display: hidden;\n    }\n    form input:last-child{\n        width: 70px;\n        border-radius: 0px;\n        margin-top: 3px;\n    }\n    form input:first-child {\n        width: 100%;\n        border-radius: 0px;\n        border-left: 1px solid #ced4da;\n        \n    }\n    .chatBox{\n        border-left: 1px solid #ced4da;\n    }\n}"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\n      <a class=\"navbar-brand\" href=\"#\">MyRugbyUnion</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>   \n  \n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/home']\">Home<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/chat']\">Chat<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/roster']\">Roster<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/schedule']\">Schedule<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/dues']\">Dues<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\n          </li>\n          <li *ngIf=\"authority == 1\" class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/admin']\">Admin</a>\n            </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n\n\n<div class=\"container\">\n<div class=\"row no-gutters\">\n\n    <div class=\"col-3 d-none d-sm-block border\">\n        <div class=\"user\">\n          <h6>Users:</h6>\n          <span *ngIf=\"users\">\n            <p *ngFor=\"let user of users\">{{user}}</p>\n          </span>\n        </div>\n    </div>\n\n  <div class=\"col\">\n    <div class=\"pre-scrollable chatBox border-right \">\n    <span *ngIf=\"messages.length > 0\">\n\n        <div *ngFor=\"let msg of messages\" class=\"font-weight-light align-text-bottom \">{{msg}}</div>\n\n    </span>\n\n  </div>\n  <form (submit)=\"sendMessage()\">\n      <input type=\"text\" class=\"form-control\" name=\"message\" [(ngModel)]=\"message\">\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Send\">\n  </form>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatComponent = /** @class */ (function () {
    function ChatComponent(_http) {
        this._http = _http;
        this._http.verifySession();
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__();
        this.messages = [];
        this.message = "";
        this.user = {
            firstName: '',
            lastName: '',
        };
        this.connection = {
            socketID: this.socket.id,
        };
        console.log(this.connection);
        this.users = [];
        this.getUser();
        //Recieve new messages from group
        this.socket.on('updateall', function (data) {
            console.log(data);
            _this.messages.unshift(data);
        });
        //Listening for new users to update users array
        this.socket.on('addUser', function (data) {
            _this.getUsers();
            console.log(data);
        });
        this.socket.on('removedUser', function () {
            _this.getUsers();
        });
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        if (this.socket) {
            this.socket.emit('destroyed');
        }
    };
    // Send Message on Submit
    ChatComponent.prototype.sendMessage = function () {
        this.messages.unshift(this.user.firstName + ' ' + this.user.lastName + ": " + this.message);
        this.socket.emit('message', { msg: this.message, id: this.user.firstName + ' ' + this.user.lastName });
        this.message = "";
    };
    // Get User
    ChatComponent.prototype.getUser = function () {
        var _this = this;
        this._http.getUserService()
            .subscribe(function (data) {
            _this.user.firstName = data['firstName'];
            _this.user.lastName = data['lastName'];
            _this.authority = data['authority'];
            // After we get User name back, we emit new user to server with data
            _this.socket.emit('newUser', { 'newUser': _this.user.firstName + ' ' + _this.user.lastName });
        });
    };
    // Get Users in Chat
    ChatComponent.prototype.getUsers = function () {
        var _this = this;
        this._http.chatUsersService()
            .subscribe(function (data) {
            _this.users = data['users'];
            console.log("Users in Chat:", _this.users);
        });
    };
    ChatComponent.prototype.logout = function () {
        this._http.delSessionService();
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/dash/dash.component.css":
/*!*****************************************!*\
  !*** ./src/app/dash/dash.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#wrapper {\n    padding: 20px 0 ;\n}\n\n#wrapper h4 {\n    padding: 20px 0;\n}\n\n.dark{\n    background-color: #ffffff;\n    min-height: 425px;\n    padding-top: 25px;\n}\n\n.height {\n    min-height: 425px;\n}\n\n.jumbotron {\n    margin-bottom: 0;\n}\n\n.reduce {\n    font-size: .8em;\n    margin-left: 3px;\n}\n\n.white {\n    color: #474747;\n}\n\n/* @include media-breakpoint-up(xs) { ... }\n@include media-breakpoint-up(sm) { ... }\n@include media-breakpoint-up(md) { ... }\n@include media-breakpoint-up(lg) { ... }\n@include media-breakpoint-up(xl) { ... }\n\n// Example usage: */\n\n/* @include media-breakpoint-up(sm) {\n    .hide-chat{\n        display:hidden;\n    }\n} */\n\n/* @media (min-width: 576px) { \n    .hide-chat{\n        display:hidden;\n    }\n } */\n"

/***/ }),

/***/ "./src/app/dash/dash.component.html":
/*!******************************************!*\
  !*** ./src/app/dash/dash.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\n      <a class=\"navbar-brand\" href=\"#\">MyRugbyUnion</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>   \n  \n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/home']\">Home<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/chat']\">Chat<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/roster']\">Roster<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/schedule']\">Schedule<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/dues']\">Dues<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\n          </li>\n          <li *ngIf=\"authority == 1\" class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/admin']\">Admin</a>\n            </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n\n\n\n<div class=\"container\">\n  <div class=\"row no-gutters\">\n    <div class=\"col-4  \">\n      <div class=\"jumbotron dark border-left border-bottom\">\n        <h2 class=\"display-6\">Users in Chat</h2>\n        <hr class=\"my-4\">\n        <span *ngIf=\"users.length == 0\">\n          <p class=\"text-monospace reduce\" >No Users in chat</p>\n        </span>\n        <span *ngIf=\"users.length > 0\">\n          <span *ngFor=\"let user of users\">\n            <p class=\"text-monospace reduce\">{{user}}</p>\n          </span>\n        </span>\n      \n        \n  \n        <p class=\"lead\">\n          <a class=\"btn btn-primary btn-sm\" [routerLink]=\"['/chat']\" role=\"button\">Join Chat</a>\n        </p>\n      </div>\n   </div>\n   <div class=\"col-8\">\n      <div class=\"jumbotron height\">\n        <h1 class=\"display-5\">Next Event</h1>\n        <h3>{{event.type+\": \" +event.title}}</h3>\n        <h6>{{event.startTime | date:'medium'}}</h6>\n        <h5>{{event.location}}</h5>\n        <p class=\"lead\">{{event.address.street+', '+event.address.city+', '+event.address.state+', '+event.address.zip}}</p>\n        <a class=\"btn  btn-md btn-light\" (click)='addUser()' role=\"button\">RSVP</a>\n        <hr class=\"my-4\">\n        \n       \n\n      </div>\n   </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/dash/dash.component.ts":
/*!****************************************!*\
  !*** ./src/app/dash/dash.component.ts ***!
  \****************************************/
/*! exports provided: DashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashComponent", function() { return DashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashComponent = /** @class */ (function () {
    function DashComponent(_http) {
        this._http = _http;
        this._http.verifySession();
    }
    DashComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = {
            firstName: '',
            lastName: '',
        };
        this.event = {
            id: '',
            title: '',
            type: '',
            startTime: '',
            location: '',
            address: {
                street: '',
                city: '',
                state: '',
                zip: ''
            }
        };
        this.users = [];
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__();
        this.getUser();
        this.getEvent();
        this.getChat();
        this.socket.on('addUser', function (data) {
            _this.getChat();
            console.log(data);
        });
        this.socket.on('removeUser', function (data) {
            _this.getChat();
        });
    };
    DashComponent.prototype.getChat = function () {
        var _this = this;
        this._http.chatUsersService()
            .subscribe(function (data) {
            _this.users = data['users'];
            console.log(_this.users);
        });
    };
    DashComponent.prototype.getUser = function () {
        var _this = this;
        this._http.getUserService()
            .subscribe(function (data) {
            _this.user.firstName = data['firstName'];
            _this.user.lastName = data['lastName'];
            _this.authority = data['authority'];
        });
    };
    DashComponent.prototype.removeUser = function () {
        this._http.removeUserService(this.user)
            .subscribe(function (data) {
        });
    };
    DashComponent.prototype.logout = function () {
        this._http.delSessionService();
    };
    DashComponent.prototype.getEvent = function () {
        var _this = this;
        this._http.getLatestEventService()
            .subscribe(function (data) {
            _this.event = data[0];
            console.log(_this.event);
            var weather = {
                city: _this.event.address.city,
                date: _this.event.startTime
            };
            /* this.getWeather(weather) */
        });
    };
    DashComponent.prototype.getWeather = function (zipcode) {
        this._http.getWeatherService(zipcode)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    DashComponent.prototype.addUser = function () {
        var name = { 'name': this.user.firstName + ' ' + this.user.lastName };
        this._http.addUserToEventService(this.event._id, name)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    DashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dash',
            template: __webpack_require__(/*! ./dash.component.html */ "./src/app/dash/dash.component.html"),
            styles: [__webpack_require__(/*! ./dash.component.css */ "./src/app/dash/dash.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], DashComponent);
    return DashComponent;
}());



/***/ }),

/***/ "./src/app/dues/dues.component.css":
/*!*****************************************!*\
  !*** ./src/app/dues/dues.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dues/dues.component.html":
/*!******************************************!*\
  !*** ./src/app/dues/dues.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\n          <a class=\"navbar-brand\" href=\"#\">MyRugbyUnion</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n          </button>   \n      \n          <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav mr-auto\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/home']\">Home<span class=\"sr-only\">(current)</span></a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/chat']\">Chat<span class=\"sr-only\">(current)</span></a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/roster']\">Roster<span class=\"sr-only\">(current)</span></a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/schedule']\">Schedule<span class=\"sr-only\">(current)</span></a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/dues']\">Dues<span class=\"sr-only\">(current)</span></a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\n              </li>\n              <li *ngIf=\"authority == 1\" class=\"nav-item\">\n                  <a class=\"nav-link\" [routerLink]=\"['/admin']\">Admin</a>\n                </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n              </li>\n            </ul>\n          </div>\n        </nav>\n      </div>\n    \n<div class='container'>\n  \n  <div class=\"row\">\n    <div class=\"col\"></div>\n    <div class=\"col-4\">\n      <br>\n        <h2>Pay Dues</h2>\n        <hr>\n   <!--  <form novalidate (ngSubmit)=\"buy($event)\" [formGroup]=\"stripeTest\">\n      <input type=\"text\" formControlName=\"name\" placeholder=\"Jane Doe\">\n      <div id=\"card-element\" class=\"field\"></div>\n      <button class=\"btn btn-primary btn-lg\" type=\"submit\">\n        BUY\n      </button>\n    </form> -->\n  </div>\n  <div class=\"col\"></div>\n</div>\n\n\n</div>\n\n\n\n\n\n<!-- let creditCardParams = {\n  customerId,\n  number: '4111111111111111',\n  expirationDate: '06/2022',\n  cvv: '100'\n};\n -->"

/***/ }),

/***/ "./src/app/dues/dues.component.ts":
/*!****************************************!*\
  !*** ./src/app/dues/dues.component.ts ***!
  \****************************************/
/*! exports provided: DuesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuesComponent", function() { return DuesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/modules/ngx-stripe.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DuesComponent = /** @class */ (function () {
    function DuesComponent(fb, stripeService) {
        this.fb = fb;
        this.stripeService = stripeService;
        // optional parameters
        this.elementsOptions = {
            locale: 'en'
        };
    }
    DuesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stripeTest = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        this.stripeService.elements(this.elementsOptions)
            .subscribe(function (elements) {
            _this.elements = elements;
            // Only mount the element the first time
            if (!_this.card) {
                _this.card = _this.elements.create('card', {
                    style: {
                        base: {
                            iconColor: '#666EE8',
                            color: '#31325F',
                            lineHeight: '40px',
                            fontWeight: 300,
                            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                            fontSize: '18px',
                            '::placeholder': {
                                color: '#CFD7E0'
                            }
                        }
                    }
                });
                _this.card.mount('#card-element');
            }
        });
    };
    DuesComponent.prototype.buy = function () {
        var name = this.stripeTest.get('name').value;
        this.stripeService
            .createToken(this.card, { name: name })
            .subscribe(function (result) {
            if (result.token) {
                // Use the token to create a charge or a customer
                // https://stripe.com/docs/charges
                console.log(result.token);
            }
            else if (result.error) {
                // Error creating the token
                console.log(result.error.message);
            }
        });
    };
    DuesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dues',
            template: __webpack_require__(/*! ./dues.component.html */ "./src/app/dues/dues.component.html"),
            styles: [__webpack_require__(/*! ./dues.component.css */ "./src/app/dues/dues.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_stripe__WEBPACK_IMPORTED_MODULE_2__["StripeService"]])
    ], DuesComponent);
    return DuesComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:active {\n\n    color: #ffffff;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\n    <a class=\"navbar-brand\" href=\"#\">MyRugbyUnion</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>   \n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/home']\">Home<span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/home/chat']\">Chat<span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/home/roster']\">Roster<span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/chat']\">Schedule<span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/chat']\">Dues<span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/home/profile']\">Profile</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n        </li>\n      </ul>\n      \n    </div>\n  </nav>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-cookie/core */ "./node_modules/angular2-cookie/core.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie_core__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(_http, _router, _cookie) {
        this._http = _http;
        this._router = _router;
        this._cookie = _cookie;
        this._http.verifySession();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.logout = function () {
        this._http.delSessionService();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_cookie_core__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-cookie/core */ "./node_modules/angular2-cookie/core.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService = /** @class */ (function () {
    function HttpService(_http, _cookie, _router) {
        this._http = _http;
        this._cookie = _cookie;
        this._router = _router;
    }
    HttpService.prototype.loginService = function (data) {
        return this._http.post('api/login', data);
    };
    HttpService.prototype.registerService = function (data) {
        return this._http.post('api/register', data);
    };
    HttpService.prototype.setSessionService = function (id) {
        this.id = id;
        this._cookie.put('ID', this.id);
        console.log("Session ID", this.id);
    };
    HttpService.prototype.delSessionService = function () {
        this._cookie.remove('ID');
        this._router.navigate(['']);
    };
    HttpService.prototype.verifySession = function () {
        var verSess = this._cookie.get('ID');
        if (!verSess) {
            return this._router.navigate(['']);
        }
        else {
            console.log("Session ID", verSess);
        }
    };
    HttpService.prototype.chatUsersService = function () {
        return this._http.get('/api/userschat');
    };
    HttpService.prototype.getUserService = function () {
        var search = this._cookie.get('ID');
        return this._http.get('/api/players/' + search);
    };
    HttpService.prototype.removeUserService = function (user) {
        return this._http.post('/api/userschat', user);
    };
    HttpService.prototype.updatePlayerService = function (data) {
        var search = this._cookie.get('ID');
        console.log(data);
        return this._http.put('/api/updateplayer/' + search, data);
    };
    HttpService.prototype.getPlayers = function () {
        return this._http.get('/api/players');
    };
    HttpService.prototype.addEventService = function (event) {
        return this._http.post('/api/events', event);
    };
    HttpService.prototype.getScheduleService = function () {
        return this._http.get('/api/schedule');
    };
    HttpService.prototype.getLatestEventService = function () {
        return this._http.get('/api/latestevent');
    };
    HttpService.prototype.getWeatherService = function (weather) {
        var date = Date.parse(weather.date);
        return this._http.get('http://history.openweathermap.org/data/2.5/history/city?q=' + weather.city + ',us&type=hour&start=' + date + '&cnt=1&appid=184f4974e12a5cb0bc1ead3e9857f362');
    };
    HttpService.prototype.addUserToEventService = function (id, user) {
        return this._http.post('/api/eventlist/' + id, user);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            angular2_cookie_core__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n    padding: 20px 0;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col\"></div>\n    <div class=\"col-6\">\n        <h1>MyRugbyUnion</h1>\n        <hr>\n      <h3>Login</h3> \n      <form (submit)=\"login()\">\n          <div class=\"form-group\">\n            <label for=\"loginEmail\">Email address</label>\n            <input type=\"email\" class=\"form-control\" id=\"loginEmail\" placeholder=\"Enter email\" name=\"user.email\" [(ngModel)]=\"user.email\">\n           \n          </div>\n          <div class=\"form-group\">\n            <label for=\"loginPassword\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"loginPassword\" placeholder=\"Password\" name=\"user.password\" [(ngModel)]=\"user.password\">\n          </div>\n         \n          <button type=\"submit\" class=\"btn btn-primary\"> Submit </button>\n        </form>\n        <hr>\n        <h4>New Player?</h4>\n        <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</button>\n      \n    </div>\n    <div class=\"col\"></div>\n  </div>\n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(_http, _router) {
        this._http = _http;
        this._router = _router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = {
            email: '',
            password: ''
        };
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._http.loginService(this.user)
            .subscribe(function (data) {
            console.log(data);
            _this._http.setSessionService(data['_id']);
            return _this._router.navigate(['home']);
        });
        this.user = {
            email: '',
            password: ''
        };
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n    margin: 30px;\n}\n\n#heightFeet {\n    width: 60%;\ndisplay:inline-block;\n}\n\n.labelHeight {\n   margin: 8px 0 0 10px;\n   font-size: .8em;\n   display: inline-block;\n\n}\n\n.spacing {\n    margin-bottom: 10px;\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\n      <a class=\"navbar-brand\" href=\"#\">MyRugbyUnion</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>   \n  \n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/home']\">Home<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/chat']\">Chat<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/roster']\">Roster<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/schedule']\">Schedule<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/dues']\">Dues<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"authority == 1\">\n              <a class=\"nav-link\" [routerLink]=\"['/admin']\">Admin</a>\n            </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n\n<div id=\"wrapper\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\"></div>\n      <div class=\"col-6\">\n        <h3>Your Profile</h3>\n        <form (submit)=\"updateUser()\">\n          <div class=\"form-group\">\n            <label for=\"regFirstName\">First Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"regFirstName\" aria-describedby=\"emailHelp\" placeholder=\"Enter First Name\" name=\"user.firstName\" [(ngModel)]=\"user.firstName\">\n\n          </div>\n          <div class=\"form-group\">\n            <label for=\"regLastName\">Last Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"regLastName\" aria-describedby=\"emailHelp\" placeholder=\"Enter Last Name\" name=\"user.lastName\" [(ngModel)]=\"user.lastName\">\n\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleFormControlSelect1\">Position</label>\n            <select class=\"form-control\" id=\"exampleFormControlSelect1\" name=\"user.position\" [(ngModel)]=\"user.position\">\n              <option>Prop</option>\n              <option>Hooker</option>\n              <option>Lock</option>\n              <option>Flanker</option>\n              <option>8 Man</option>\n              <option>Scrum Half</option>\n              <option>Fly Half </option>\n              <option>Left Wing </option>\n              <option>Inside Center </option>\n              <option>Outside Center </option>\n              <option>Right Wing</option>\n              <option>Full Back</option>\n            </select>\n          </div>\n          <label>Height</label>\n          <div class=\"row no-gutters spacing\">\n            \n            <div class=\"col\">\n             <input id=\"heightFeet\" type=\"number\" class=\"form-control\" placeholder=\"Feet\" name='user.height.feet' [(ngModel)]='user.height.feet'>\n             <span class=\"labelHeight\">FEET</span>\n            </div>\n            <div class=\"col\">\n              <input id=\"heightFeet\" type=\"number\" class=\"form-control\" placeholder=\"Inches\" name='user.height.inches' [(ngModel)]='user.height.inches'>\n              <span class=\"labelHeight\">INCHES</span> </div>\n          </div>\n          \n          <div class=\"form-group\">\n              <label for=\"weight\">Weight</label>\n              <input type=\"number\" class=\"form-control\" id=\"weight\" placeholder=\"Pounds\" name=\"user.weight\" [(ngModel)]=\"user.weight\">\n    \n          </div>\n          <div class=\"form-group\">\n              <label for=\"date\">Date of Birth</label>\n              <input type=\"date\" class=\"form-control\" id=\"date\" name=\"user.dob\" [(ngModel)]=\"user.dob\">\n    \n            </div>\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        </form>\n      </div>\n      <div class=\"col\"></div>\n    </div>\n  \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(_http, _router) {
        this._http = _http;
        this._router = _router;
        this._http.verifySession();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.authority = 0;
        this.user = {
            firstName: '',
            lastName: '',
            position: '',
            height: {
                feet: '',
                inches: ''
            },
            weight: '',
            dob: Date
        };
        this.getUser();
    };
    ProfileComponent.prototype.getUser = function () {
        var _this = this;
        this._http.getUserService()
            .subscribe(function (data) {
            _this.user.firstName = data['firstName'];
            _this.user.lastName = data['lastName'];
            _this.user.position = data['position'];
            _this.user.height.feet = data['height']['feet'];
            _this.user.height.inches = data['height']['inches'];
            _this.user.weight = data['weight'];
            _this.authority = data['authority'];
            console.log("AUTHORITY", _this.authority);
            var d = new Date(data['dob']), month = '' + (d.getMonth() + 1), day = '' + (d.getDate() + 1), year = d.getFullYear();
            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;
            _this.user.dob = [year, month, day].join('-');
            /*     var date = new Date(data['dob'])
                date.toLocaleDateString(year, month, day)
                console.log(date)
                console.log(date) */
        });
    };
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        console.log(this.user);
        this._http.updatePlayerService(this.user)
            .subscribe(function (data) {
            console.log(data);
            return _this._router.navigate(['roster']);
        });
    };
    ProfileComponent.prototype.logout = function () {
        this._http.delSessionService();
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n    padding: 20px 0;\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\"></div>\n      <div class=\"col-6\">\n          <h1>MyRugbyUnion</h1>\n          <hr>\n        <h3>Registration</h3>\n        <form (submit)=\"register()\">\n          <div class=\"form-group\">\n            <label for=\"regFirstName\">First Name</label>\n            <input type=\"email\" class=\"form-control\" id=\"regFirstName\" aria-describedby=\"emailHelp\" placeholder=\"Enter First Name\" name=\"newUser.firstName\" [(ngModel)]=\"newUser.firstName\">\n\n          </div>\n          <div class=\"form-group\">\n            <label for=\"regLastName\">Last Name</label>\n            <input type=\"email\" class=\"form-control\" id=\"regLastName\" aria-describedby=\"emailHelp\" placeholder=\"Enter Last Name\" name=\"newUser.lastName\" [(ngModel)]=\"newUser.lastName\">\n\n          </div>\n          <div class=\"form-group\">\n            <label for=\"regEmail\">Email address</label>\n            <input type=\"email\" class=\"form-control\" id=\"regEmail\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" name=\"newUser.email\" [(ngModel)]=\"newUser.email\">\n\n          </div>\n          <div class=\"form-group\">\n            <label for=\"regPassword\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"regPassword\" placeholder=\"Enter Password\" name=\"newUser.password\" [(ngModel)]=\"newUser.password\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"regConfPassword\">Confirm Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"regConfPassword\" placeholder=\"Confirm Password\" name=\"newUser.cPassword\" [(ngModel)]=\"newUser.cPassword\">\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        </form>\n      </div>\n      <div class=\"col\"></div>\n    </div>\n  </div>\n\n</div>  "

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_http, _router) {
        this._http = _http;
        this._router = _router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.newUser = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            cPassword: ''
        };
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this._http.registerService(this.newUser)
            .subscribe(function (data) {
            if (data['error']) {
                console.log(data['error']);
            }
            else {
                console.log(data);
                _this._http.setSessionService(data['_id']);
                return _this._router.navigate(['profile']);
            }
        });
        this.newUser = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            cPassword: ''
        };
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/roster/roster.component.css":
/*!*********************************************!*\
  !*** ./src/app/roster/roster.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/roster/roster.component.html":
/*!**********************************************!*\
  !*** ./src/app/roster/roster.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\n      <a class=\"navbar-brand\" href=\"#\">MyRugbyUnion</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>   \n  \n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/home']\">Home<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/chat']\">Chat<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/roster']\">Roster<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/schedule']\">Schedule<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/dues']\">Dues<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\n          </li>\n          <li *ngIf=\"authority == 1\" class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/admin']\">Admin</a>\n            </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n\n<div class=\"container\">\n  <div class=\"table-responsive\">\n \n    <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th scope=\"col\">Position</th>\n            <th scope=\"col\">Name</th>\n\n            <th scope=\"col\">Height</th>\n            <th scope=\"col\">Weight</th>\n            <th scope=\"col\">DOB</th>\n            <th scope=\"col\">Email</th>\n          </tr>\n        </thead>\n        <tbody  class=\"table-striped\">\n          <tr *ngFor=\"let player of players\">\n            <th *ngIf=\"player.completed\" scope=\"row\">{{player.position}}</th>\n            <td *ngIf=\"player.completed\" >{{player.firstName + ' ' + player.lastName}}</td>\n            <td *ngIf=\"player.completed\"><span *ngIf=\"player.height\">{{player.height.feet+\"' \"+player.height.inches+\"''\"}}</span></td>\n            <td *ngIf=\"player.completed\"><span *ngIf=\"player.weight\">{{player.weight + 'lbs'}}</span></td>\n            <td *ngIf=\"player.completed\"><span *ngIf=\"player.dob\">{{player.dob | date: 'mediumDate'}}</span></td>\n            <td *ngIf=\"player.completed\">{{player.email}}</td>\n \n          </tr>\n            \n        </tbody>\n      </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/roster/roster.component.ts":
/*!********************************************!*\
  !*** ./src/app/roster/roster.component.ts ***!
  \********************************************/
/*! exports provided: RosterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RosterComponent", function() { return RosterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RosterComponent = /** @class */ (function () {
    function RosterComponent(_http) {
        this._http = _http;
        this._http.verifySession();
    }
    RosterComponent.prototype.ngOnInit = function () {
        this.players = [];
        this.getPlayers();
        this.getUser();
    };
    RosterComponent.prototype.getPlayers = function () {
        var _this = this;
        this._http.getPlayers()
            .subscribe(function (data) {
            _this.players = data;
            console.log(data);
        });
    };
    RosterComponent.prototype.getUser = function () {
        var _this = this;
        this._http.getUserService()
            .subscribe(function (data) {
            _this.authority = data['authority'];
        });
    };
    RosterComponent.prototype.logout = function () {
        this._http.delSessionService();
    };
    RosterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-roster',
            template: __webpack_require__(/*! ./roster.component.html */ "./src/app/roster/roster.component.html"),
            styles: [__webpack_require__(/*! ./roster.component.css */ "./src/app/roster/roster.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], RosterComponent);
    return RosterComponent;
}());



/***/ }),

/***/ "./src/app/schedule/schedule.component.css":
/*!*************************************************!*\
  !*** ./src/app/schedule/schedule.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper{\n    margin: 20px 0;\n}\n.reduce {\n    font-size: .8em;\n}"

/***/ }),

/***/ "./src/app/schedule/schedule.component.html":
/*!**************************************************!*\
  !*** ./src/app/schedule/schedule.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\n      <a class=\"navbar-brand\" href=\"#\">MyRugbyUnion</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>   \n  \n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/home']\">Home<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/chat']\">Chat<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/roster']\">Roster<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/schedule']\">Schedule<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/dues']\">Dues<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\n          </li>\n          <li *ngIf=\"authority == 1\" class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/admin']\">Admin</a>\n            </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h1>Schedule</h1>\n    </div>\n  </div>\n\n  <div class=\"table-responsive reduce\">\n \n      <table class=\"table table-hover\">\n          <thead>\n            <tr>\n              <th scope=\"col\">Date/Time</th>\n              <th scope=\"col\">Title</th>\n              <th scope=\"col\">Type</th>\n              <th scope=\"col\">Location</th>\n              <th scope=\"col\">Address</th>\n\n            </tr>\n          </thead>\n          <tbody  class=\"table-striped\">\n            <tr *ngFor=\"let event of events\">\n              <th scope=\"row\">{{event.startTime | date: 'short'}}</th>\n              <td>{{event.title}}</td>\n              <td>{{event.type}}</td>          \n              <td>{{event.location}}</td>\n              <td>{{event.address.street+', '+event.address.city+', '+event.address.state+', '+event.address.zip}}</td>\n            </tr>\n              \n          </tbody>\n        </table>\n      </div>\n\n</div>"

/***/ }),

/***/ "./src/app/schedule/schedule.component.ts":
/*!************************************************!*\
  !*** ./src/app/schedule/schedule.component.ts ***!
  \************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(_http) {
        this._http = _http;
        this._http.verifySession();
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        this.events = [];
        this.getSchedule();
        this.getUser();
    };
    ScheduleComponent.prototype.getSchedule = function () {
        var _this = this;
        this._http.getScheduleService()
            .subscribe(function (data) {
            _this.events = data;
        });
    };
    ScheduleComponent.prototype.getUser = function () {
        var _this = this;
        this._http.getUserService()
            .subscribe(function (data) {
            _this.authority = data['authority'];
        });
    };
    ScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__(/*! ./schedule.component.html */ "./src/app/schedule/schedule.component.html"),
            styles: [__webpack_require__(/*! ./schedule.component.css */ "./src/app/schedule/schedule.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], ScheduleComponent);
    return ScheduleComponent;
}());



/***/ }),

/***/ "./src/app/stripe-form/stripe-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/stripe-form/stripe-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stripe-form/stripe-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/stripe-form/stripe-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\n      <a class=\"navbar-brand\" href=\"#\">MyRugbyUnion</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>   \n  \n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/home']\">Home<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/chat']\">Chat<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/roster']\">Roster<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/schedule']\">Schedule<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/dues']\">Dues<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\n          </li>\n          <li *ngIf=\"authority == 1\" class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/admin']\">Admin</a>\n            </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n\n  <div class='container'>\n  \n      <div class=\"row\">\n          <div class=\"col-4\">\n              <br>\n              <h1>3 Months</h1>\n              <hr>\n              <p class='lead'>$45</p>\n              <button class=\"btn btn-primary btn-sm\" (click)=\"openCheckout()\">Purchase</button>\n            </div>\n        <div class=\"col-4\">\n          <br>\n          <h1>6 Months</h1>\n          <hr>\n          <p class='lead'>$80</p>\n          <button class=\"btn btn-primary btn-sm\" (click)=\"openCheckout()\">Purchase</button>\n        </div>\n        <div class=\"col-4\">\n            <br>\n            <h1>12 Months</h1>\n            <hr>\n            <p class='lead'>$150`</p>\n            <button class=\"btn btn-primary btn-sm\" (click)=\"openCheckout()\">Purchase</button>\n          </div>\n    </div>\n    \n    \n    </div>\n    \n    \n\n\n"

/***/ }),

/***/ "./src/app/stripe-form/stripe-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/stripe-form/stripe-form.component.ts ***!
  \******************************************************/
/*! exports provided: StripeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeFormComponent", function() { return StripeFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StripeFormComponent = /** @class */ (function () {
    function StripeFormComponent(_http) {
        this._http = _http;
        this._http.verifySession();
        this.getUser();
    }
    StripeFormComponent.prototype.openCheckout = function () {
        var handler = window.StripeCheckout.configure({
            key: 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa',
            locale: 'auto',
            token: function (token) {
                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use.
            }
        });
        handler.open({
            name: 'Rugby Club Dues',
            description: 'For Year',
            amount: 15000
        });
    };
    StripeFormComponent.prototype.getUser = function () {
        var _this = this;
        this._http.getUserService()
            .subscribe(function (data) {
            _this.authority = data['authority'];
        });
    };
    StripeFormComponent.prototype.logout = function () {
        this._http.delSessionService();
    };
    StripeFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sd-stripe-form',
            template: __webpack_require__(/*! ./stripe-form.component.html */ "./src/app/stripe-form/stripe-form.component.html"),
            styles: [__webpack_require__(/*! ./stripe-form.component.css */ "./src/app/stripe-form/stripe-form.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], StripeFormComponent);
    return StripeFormComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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

module.exports = __webpack_require__(/*! /Users/timcoville/Desktop/project2/public/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map