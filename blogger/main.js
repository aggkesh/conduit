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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'blogger';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/banner/banner.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-out/sign-out.component */ "./src/app/sign-out/sign-out.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blogger_blogger_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blogger/blogger.component */ "./src/app/blogger/blogger.component.ts");
/* harmony import */ var _newarticle_newarticle_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./newarticle/newarticle.component */ "./src/app/newarticle/newarticle.component.ts");
/* harmony import */ var _shared_authetication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/authetication.service */ "./src/app/shared/authetication.service.ts");
/* harmony import */ var _shared_communicationservice_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/communicationservice.service */ "./src/app/shared/communicationservice.service.ts");
/* harmony import */ var _shared_articles_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/articles.service */ "./src/app/shared/articles.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _articledetail_articledetail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./articledetail/articledetail.component */ "./src/app/articledetail/articledetail.component.ts");
/* harmony import */ var _yourfeed_yourfeed_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./yourfeed/yourfeed.component */ "./src/app/yourfeed/yourfeed.component.ts");
/* harmony import */ var _editarticle_editarticle_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./editarticle/editarticle.component */ "./src/app/editarticle/editarticle.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    { path: '', redirectTo: 'blogger', pathMatch: 'full' },
    { path: 'blogger', component: _blogger_blogger_component__WEBPACK_IMPORTED_MODULE_9__["BloggerComponent"], children: [
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
            { path: 'signIn', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__["SignInComponent"] },
            { path: 'signUp', component: _sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_7__["SignOutComponent"] },
            { path: 'newArticle', component: _newarticle_newarticle_component__WEBPACK_IMPORTED_MODULE_10__["NewarticleComponent"] },
            { path: 'yourfeed/:username', component: _yourfeed_yourfeed_component__WEBPACK_IMPORTED_MODULE_17__["YourfeedComponent"] },
            { path: 'article/:slug', component: _articledetail_articledetail_component__WEBPACK_IMPORTED_MODULE_16__["ArticledetailComponent"] },
            { path: 'editarticle/:slug', component: _editarticle_editarticle_component__WEBPACK_IMPORTED_MODULE_18__["EditarticleComponent"] }
        ]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _blogger_blogger_component__WEBPACK_IMPORTED_MODULE_9__["BloggerComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                _banner_banner_component__WEBPACK_IMPORTED_MODULE_4__["BannerComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__["SignInComponent"],
                _sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_7__["SignOutComponent"],
                _newarticle_newarticle_component__WEBPACK_IMPORTED_MODULE_10__["NewarticleComponent"],
                _articledetail_articledetail_component__WEBPACK_IMPORTED_MODULE_16__["ArticledetailComponent"],
                _yourfeed_yourfeed_component__WEBPACK_IMPORTED_MODULE_17__["YourfeedComponent"],
                _editarticle_editarticle_component__WEBPACK_IMPORTED_MODULE_18__["EditarticleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]
            ],
            providers: [_shared_authetication_service__WEBPACK_IMPORTED_MODULE_11__["AutheticationService"], _shared_communicationservice_service__WEBPACK_IMPORTED_MODULE_12__["CommunicationserviceService"], _shared_articles_service__WEBPACK_IMPORTED_MODULE_13__["ArticlesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/articledetail/articledetail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/articledetail/articledetail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/articledetail/articledetail.component.html":
/*!************************************************************!*\
  !*** ./src/app/articledetail/articledetail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:black;padding: 40px;\">\n  <div *ngIf=article>\n    <p style=\"color: white;font-size:40px;\">{{ article.title }}</p>\n    <p style=\"color: white;font-size:20px;\">{{ article.description }}</p>\n  </div>\n  <button *ngIf=userarticle style=\"float:right\" (click)=\"_deleteArticle()\">Delete Article</button>\n  <button *ngIf=userarticle style=\"float:right\" (click)=\"_editArticle()\">Edit Article</button>\n</div>\n<div style=\"padding:10px\">\n  <p *ngIf=article>{{ article.body }}</p>\n</div>\n<p style=\"color:red\">{{error}}<p>\n<div align=\"center\">\n<form [formGroup]=\"commentdata\" (ngSubmit)=\"_addComment(commentdata.value)\">\n  <div class=\"form-group\">\n    <textarea type=\"text\" class=\"form-control\" formControlName=\"comment\" placeholder=\"Write a Comment\" name=\"comment\" style=\"width: 600px;height:170px;\"></textarea>\n  </div>\n  <div style=\"width: 600px;height:40px;background-color:lightgrey\">\n    <button type=\"submit\" class=\"btn btn-default\" value=\"Comment\" style=\"background-color:green;float:right;margin-top:3px;margin-right:5px;color:white;\">Comment</button>\n  </div>\n</form>\n</div>\n<div *ngFor=\"let comment of usercomments\" align=\"center\" style=\"margin-top:15px;\">\n  <div style=\"border-style: ridge; width:600px;height:70px;\">\n    <p align=\"left\">{{comment.body}}</p>\n  </div>\n  <div style=\"width: 600px;height:35px;background-color:lightgrey;margin-top:5px;padding-bottom:30px;\">\n    <p style=\"float:left;color:black;margin-left:10px;margin-top:3px;\">{{comment.author.username}} {{comment.createdAt}}<p>\n    <button class=\"btn btn-default\" style=\"background-color:Red;float:right;margin-top:1px;margin-right:5px;color:white;\" (click)=\"_deleteComment(comment.id)\">Delete</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/articledetail/articledetail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/articledetail/articledetail.component.ts ***!
  \**********************************************************/
/*! exports provided: ArticledetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticledetailComponent", function() { return ArticledetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_articles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/articles.service */ "./src/app/shared/articles.service.ts");
/* harmony import */ var _shared_authetication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/authetication.service */ "./src/app/shared/authetication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_communicationservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/communicationservice.service */ "./src/app/shared/communicationservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArticledetailComponent = /** @class */ (function () {
    function ArticledetailComponent(articleservice, activatedroute, authetication, communicationserviceService) {
        this.articleservice = articleservice;
        this.activatedroute = activatedroute;
        this.authetication = authetication;
        this.communicationserviceService = communicationserviceService;
    }
    ArticledetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slug = this.activatedroute.snapshot.params.slug;
        this.commentdata = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
        });
        this.articleservice.getArticle(this.slug).subscribe(function (article) {
            _this.article = article;
            console.log("keshav");
            console.log(article);
            _this.authetication._getCurrentUser().subscribe(function (data) {
                if (article.author.username === data.username) {
                    _this.userarticle = true;
                }
                else {
                    _this.userarticle = false;
                }
            });
        });
        this._getComment();
    };
    ArticledetailComponent.prototype._deleteArticle = function () {
        var _this = this;
        this.articleservice.deleteArticle(this.slug).subscribe(function (success) {
            _this.communicationserviceService.updatenavigate('home');
        });
    };
    ArticledetailComponent.prototype._editArticle = function () {
        this.communicationserviceService.updatenavigate('editarticle/' + this.slug);
    };
    ArticledetailComponent.prototype._getComment = function () {
        var _this = this;
        this.articleservice.getComment(this.slug).subscribe(function (comments) {
            _this.usercomments = comments;
        });
    };
    ArticledetailComponent.prototype._addComment = function (data) {
        var _this = this;
        this.articleservice.addComment(data, this.slug).subscribe(function (data) {
            _this._getComment();
            _this.commentdata.setValue({ comment: "" });
        }, function (errors) {
            _this.error = "Comment Field " + errors.error.errors.body;
        });
    };
    ArticledetailComponent.prototype._deleteComment = function (id) {
        var _this = this;
        this.articleservice.deleteComment(id, this.slug).subscribe(function (data) {
            _this._getComment();
        }, function (errors) {
            _this.error = "Comment " + errors.error.errors.comment;
        });
    };
    ArticledetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-articledetail',
            template: __webpack_require__(/*! ./articledetail.component.html */ "./src/app/articledetail/articledetail.component.html"),
            styles: [__webpack_require__(/*! ./articledetail.component.css */ "./src/app/articledetail/articledetail.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_authetication_service__WEBPACK_IMPORTED_MODULE_2__["AutheticationService"], _shared_communicationservice_service__WEBPACK_IMPORTED_MODULE_5__["CommunicationserviceService"]])
    ], ArticledetailComponent);
    return ArticledetailComponent;
}());



/***/ }),

/***/ "./src/app/banner/banner.component.css":
/*!*********************************************!*\
  !*** ./src/app/banner/banner.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/banner/banner.component.html":
/*!**********************************************!*\
  !*** ./src/app/banner/banner.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"banner\" show-authed=\"false\" style=\"display: inherit;\">\r\n    <div style=\"background:green;height:150px;\">\r\n      <h1 align=\"center\" style=\"font-size: 60px;color:white;padding-top:20px;\">conduit</h1>\r\n      <p align=\"center\" verticle-align=\"middle\" style=\"font-size: 15px;color:white;\">A place to share your knowledge.</p>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/banner/banner.component.ts":
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
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

var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.css */ "./src/app/banner/banner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/blogger/blogger.component.css":
/*!***********************************************!*\
  !*** ./src/app/blogger/blogger.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blogger/blogger.component.html":
/*!************************************************!*\
  !*** ./src/app/blogger/blogger.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar (loadPage)=\"pageLoad($event)\" [authorize]=authorize [username]=username></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/blogger/blogger.component.ts":
/*!**********************************************!*\
  !*** ./src/app/blogger/blogger.component.ts ***!
  \**********************************************/
/*! exports provided: BloggerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloggerComponent", function() { return BloggerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_authetication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/authetication.service */ "./src/app/shared/authetication.service.ts");
/* harmony import */ var _shared_communicationservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/communicationservice.service */ "./src/app/shared/communicationservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BloggerComponent = /** @class */ (function () {
    function BloggerComponent(router, route, authetication, communicationserviceService) {
        this.router = router;
        this.route = route;
        this.authetication = authetication;
        this.communicationserviceService = communicationserviceService;
    }
    BloggerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authorize = false;
        this.route.navigate(['home'], { relativeTo: this.router });
        this.communicationserviceService.getSignInData().subscribe(function (data) {
            _this.authetication._login(data).
                subscribe(function (userdata) {
                localStorage.setItem('jwtToken', userdata.token);
                _this.authorize = true;
                _this.username = userdata.username;
                _this.route.navigate(['home'], { relativeTo: _this.router });
            }, function (error) {
                _this.communicationserviceService.updateErrorSignIn(error.error.errors);
            });
        });
        this.communicationserviceService.getSignUpData().subscribe(function (data) {
            _this.authetication._register(data).subscribe(function (data) {
                _this.route.navigate(['signIn'], { relativeTo: _this.router });
            }, function (error) {
                _this.communicationserviceService.updateErrorSignUp(error.error.errors);
            });
        });
        this.communicationserviceService.getArticleDetail().subscribe(function (data) {
            _this.route.navigate(['article/' + data], { relativeTo: _this.router });
        });
        this.communicationserviceService.getnavigate().subscribe(function (data) {
            _this.route.navigate([data], { relativeTo: _this.router });
        });
    };
    BloggerComponent.prototype.pageLoad = function (data) {
        if (data === 'logOut') {
            localStorage.removeItem('jwtToken');
            this.authorize = false;
            this.route.navigate(['home'], { relativeTo: this.router });
        }
        else if (data == 'yourfeed') {
            this.route.navigate([data + "/" + this.username], { relativeTo: this.router });
        }
        else {
            this.route.navigate([data], { relativeTo: this.router });
        }
    };
    BloggerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blogger',
            template: __webpack_require__(/*! ./blogger.component.html */ "./src/app/blogger/blogger.component.html"),
            styles: [__webpack_require__(/*! ./blogger.component.css */ "./src/app/blogger/blogger.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_authetication_service__WEBPACK_IMPORTED_MODULE_2__["AutheticationService"],
            _shared_communicationservice_service__WEBPACK_IMPORTED_MODULE_3__["CommunicationserviceService"]])
    ], BloggerComponent);
    return BloggerComponent;
}());



/***/ }),

/***/ "./src/app/editarticle/editarticle.component.css":
/*!*******************************************************!*\
  !*** ./src/app/editarticle/editarticle.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/editarticle/editarticle.component.html":
/*!********************************************************!*\
  !*** ./src/app/editarticle/editarticle.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p *ngFor=\"let error of errors\" style=\"color:red;\">* {{ error }}</p>\n  <form [formGroup]=\"editarticledata\" (ngSubmit)=\"_editArticle(editarticledata.value)\">\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" formControlName=\"articletitle\" placeholder=\"Article Title\" name=\"articletitle\" style=\"height:60px;\">\n    </div>\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" formControlName=\"aboutarticle\" placeholder=\"What's this article about?\" name=\"aboutarticle\" style=\"height:40px;\">\n    </div>\n    <div class=\"form-group\">\n      <textarea type=\"text\" class=\"form-control\" formControlName=\"articledetail\" placeholder=\"Write your article (in markdown)\" name=\"articledetail\" style=\"height:170px;\"></textarea>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" formControlName=\"articletag\" placeholder=\"Enter tags\" name=\"articletag\" style=\"height:40px;\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-default\" value=\"Log In\" style=\"float:right;background-color:green;color:white;width:200px;height:70px;font-size:20px;\">Edit Article</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/editarticle/editarticle.component.ts":
/*!******************************************************!*\
  !*** ./src/app/editarticle/editarticle.component.ts ***!
  \******************************************************/
/*! exports provided: EditarticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarticleComponent", function() { return EditarticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_articles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/articles.service */ "./src/app/shared/articles.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_authetication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/authetication.service */ "./src/app/shared/authetication.service.ts");
/* harmony import */ var _shared_communicationservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/communicationservice.service */ "./src/app/shared/communicationservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditarticleComponent = /** @class */ (function () {
    function EditarticleComponent(articleservice, communicationserviceService, authetication, activatedroute) {
        this.articleservice = articleservice;
        this.communicationserviceService = communicationserviceService;
        this.authetication = authetication;
        this.activatedroute = activatedroute;
    }
    EditarticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slug = this.activatedroute.snapshot.params.slug;
        this.errors = [];
        this.editarticledata = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            articletitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            aboutarticle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            articledetail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            articletag: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        this.authetication._getCurrentUser().subscribe(function (data) {
            _this.articleservice.getArticle(_this.slug).subscribe(function (article) {
                if (article.author.username === data.username) {
                    _this.editarticledata.setValue({
                        articletitle: article.title,
                        aboutarticle: article.description,
                        articledetail: article.body,
                        articletag: ""
                    });
                }
                else {
                    _this.communicationserviceService.updatenavigate('home');
                }
            });
        });
    };
    EditarticleComponent.prototype._editArticle = function (data) {
        var _this = this;
        this.articleservice.editArticle(data, this.slug).subscribe(function (article) {
            _this.communicationserviceService.updateArticleDetail(article.slug);
        }, function (errors) {
            if (errors.status == 404) {
                _this.pagenotfound = errors.error;
            }
            else {
                var err = errors.error.errors;
                if (err != null && err.title != null) {
                    for (var index = 0; index < err.title.length; index++) {
                        _this.errors.push("title field " + err.title[index]);
                    }
                }
                if (err != null && err.description != null) {
                    for (var index = 0; index < err.description.length; index++) {
                        _this.errors.push("description field " + err.description[index]);
                    }
                }
                if (err != null && err.body != null) {
                    for (var index = 0; index < err.body.length; index++) {
                        _this.errors.push("body field " + err.body[index]);
                    }
                }
            }
        });
    };
    EditarticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editarticle',
            template: __webpack_require__(/*! ./editarticle.component.html */ "./src/app/editarticle/editarticle.component.html"),
            styles: [__webpack_require__(/*! ./editarticle.component.css */ "./src/app/editarticle/editarticle.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"], _shared_communicationservice_service__WEBPACK_IMPORTED_MODULE_5__["CommunicationserviceService"],
            _shared_authetication_service__WEBPACK_IMPORTED_MODULE_4__["AutheticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditarticleComponent);
    return EditarticleComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul#navlist {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n}\r\n\r\nli.navelement {\r\n    float: left;\r\n}\r\n\r\nli.navelement a {\r\n    display: block;\r\n    color: green;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    padding: 16px;\r\n    text-decoration: none;\r\n}\r\n\r\nli.navelement a:hover {\r\n    background-color: grey;\r\n    color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-banner></app-banner>\n  <div class=\"row\">\n    <div class=\"col-lg-10\">\n        <ul id=\"navlist\">\n          <li class=\"navelement\"><a (click)=\"global()\">Global Feed</a></li>\n        </ul>\n        <hr style=\"margin:0;width:80%; float: left;\">\n        <div *ngFor=\"let article of articles | async\" class=\"container\" style=\"margin-top:5px;\">\n          <p style=\"color:green;font-size:13px\">{{article.author.username}}</p>\n          <p style=\"font-size:25px\">{{article.title}}</p>\n          <div (click)=\"_loadArticle(article.slug)\">\n            <p style=\"color: grey\">{{article.description}}</p>\n            <p style=\"font-size:12px;\">Read more...</p>\n          </div>\n          <hr style=\"margin: 3px;width:80%; float: left;\">\n        </div>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _shared_articles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/articles.service */ "./src/app/shared/articles.service.ts");
/* harmony import */ var _shared_communicationservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/communicationservice.service */ "./src/app/shared/communicationservice.service.ts");
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
    function HomeComponent(articlesservice, communicationserviceService) {
        this.articlesservice = articlesservice;
        this.communicationserviceService = communicationserviceService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('jwtToken') != null) {
            this.authorize = true;
        }
        else {
            this.authorize = false;
        }
        this.global();
    };
    HomeComponent.prototype.local = function () {
    };
    HomeComponent.prototype.global = function () {
        this.articles = this.articlesservice.getArticels();
        this.articles.subscribe(function (data) { return console.log(data); });
    };
    HomeComponent.prototype._loadArticle = function (data) {
        this.communicationserviceService.updateArticleDetail(data);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"], _shared_communicationservice_service__WEBPACK_IMPORTED_MODULE_2__["CommunicationserviceService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" (click)=\"_loadPage('home')\">Conduit</a>\n    </div>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a (click)=\"_loadPage('home')\"><span class=\"glyphicon\"></span> Home</a></li>\n      <li *ngIf=!authorize><a (click)=\"_loadPage('signIn')\"><span class=\"glyphicon glyphicon-log-in\"></span> Sign In</a></li>\n      <li *ngIf=!authorize><a (click)=\"_loadPage('signUp')\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n      <li *ngIf=authorize><a (click)=\"_loadPage('newArticle')\"><span class=\"glyphicon glyphicon-user\"></span> New Article</a></li>\n      <li *ngIf=authorize><a (click)=\"_loadPage('yourfeed')\"><span class=\"glyphicon glyphicon-user\"></span> {{ username }}</a></li>\n      <li *ngIf=authorize><a (click)=\"_loadPage('logOut')\"><span class=\"glyphicon glyphicon-user\"></span> LogOut</a></li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.loadPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype._loadPage = function (data) {
        this.loadPage.emit(data);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "loadPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "authorize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "username", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/newarticle/newarticle.component.css":
/*!*****************************************************!*\
  !*** ./src/app/newarticle/newarticle.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/newarticle/newarticle.component.html":
/*!******************************************************!*\
  !*** ./src/app/newarticle/newarticle.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <p *ngFor=\"let error of errors\" style=\"color:red;\">* {{ error }}</p>\n  <form [formGroup]=\"articledata\" (ngSubmit)=\"_addArticle(articledata.value)\">\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" formControlName=\"articletitle\" placeholder=\"Article Title\" name=\"articletitle\" style=\"height:60px;\">\n    </div>\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" formControlName=\"aboutarticle\" placeholder=\"What's this article about?\" name=\"aboutarticle\" style=\"height:40px;\">\n    </div>\n    <div class=\"form-group\">\n      <textarea type=\"text\" class=\"form-control\" formControlName=\"articledetail\" placeholder=\"Write your article (in markdown)\" name=\"articledetail\" style=\"height:170px;\"></textarea>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" formControlName=\"articletag\" placeholder=\"Enter tags\" name=\"articletag\" style=\"height:40px;\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-default\" value=\"Log In\" style=\"float:right;background-color:green;color:white;width:200px;height:70px;font-size:20px;\">Publish Article</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/newarticle/newarticle.component.ts":
/*!****************************************************!*\
  !*** ./src/app/newarticle/newarticle.component.ts ***!
  \****************************************************/
/*! exports provided: NewarticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewarticleComponent", function() { return NewarticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_articles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/articles.service */ "./src/app/shared/articles.service.ts");
/* harmony import */ var _shared_communicationservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/communicationservice.service */ "./src/app/shared/communicationservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewarticleComponent = /** @class */ (function () {
    function NewarticleComponent(articleservice, communicationserviceService) {
        this.articleservice = articleservice;
        this.communicationserviceService = communicationserviceService;
    }
    NewarticleComponent.prototype.ngOnInit = function () {
        this.articledata = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            articletitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            aboutarticle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            articledetail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            articletag: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("")
        });
        this.errors = [];
    };
    NewarticleComponent.prototype._addArticle = function (data) {
        var _this = this;
        this.articleservice.addArticle(data).subscribe(function (article) {
            _this.communicationserviceService.updateArticleDetail(article.slug);
        }, function (errors) {
            if (errors.status == 404) {
                _this.errors.push("Page Not Found");
            }
            else {
                var err = errors.error.errors;
                if (err != null && err.title != null) {
                    for (var index = 0; index < err.title.length; index++) {
                        _this.errors.push("title field " + err.title[index]);
                    }
                }
                if (err != null && err.description != null) {
                    for (var index = 0; index < err.description.length; index++) {
                        _this.errors.push("description field " + err.description[index]);
                    }
                }
                if (err != null && err.body != null) {
                    for (var index = 0; index < err.body.length; index++) {
                        _this.errors.push("body field " + err.body[index]);
                    }
                }
            }
        });
    };
    NewarticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newarticle',
            template: __webpack_require__(/*! ./newarticle.component.html */ "./src/app/newarticle/newarticle.component.html"),
            styles: [__webpack_require__(/*! ./newarticle.component.css */ "./src/app/newarticle/newarticle.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"], _shared_communicationservice_service__WEBPACK_IMPORTED_MODULE_3__["CommunicationserviceService"]])
    ], NewarticleComponent);
    return NewarticleComponent;
}());



/***/ }),

/***/ "./src/app/shared/articles.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/articles.service.ts ***!
  \********************************************/
/*! exports provided: ArticlesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesService", function() { return ArticlesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticlesService = /** @class */ (function () {
    function ArticlesService(http) {
        this.http = http;
    }
    ArticlesService.prototype.getArticels = function () {
        return this.http.get("http://localhost:3000/api/articles").map(function (response) { return response.articles; });
    };
    ArticlesService.prototype.addArticle = function (data) {
        var article = {
            "article": {
                "title": data.articletitle,
                "description": data.aboutarticle,
                "body": data.articledetail,
                "tagList": data.articletag.split(" ")
            }
        };
        var token;
        if (localStorage.getItem('jwtToken') != null) {
            token = 'Token ' + localStorage.getItem('jwtToken');
        }
        return this.http.post("http://localhost:3000/api/articles", article, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        }).map(function (response) { return response.article; });
    };
    ArticlesService.prototype.getArticle = function (articleslug) {
        return this.http.get("http://localhost:3000/api/articles/" + articleslug).map(function (response) { return response.article; });
    };
    ArticlesService.prototype.deleteArticle = function (articleslug) {
        var token;
        if (localStorage.getItem('jwtToken') != null) {
            token = 'Token ' + localStorage.getItem('jwtToken');
        }
        return this.http.delete("http://localhost:3000/api/articles/" + articleslug, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': token
            })
        });
    };
    ArticlesService.prototype.editArticle = function (data, slug) {
        var article = {
            "article": {
                "title": data.articletitle,
                "description": data.aboutarticle,
                "body": data.articledetail,
                "tagList": data.articletag.split(" ")
            }
        };
        var token;
        if (localStorage.getItem('jwtToken') != null) {
            token = 'Token ' + localStorage.getItem('jwtToken');
        }
        return this.http.put("http://localhost:3000/api/articles/" + slug, article, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        }).map(function (response) { return response.article; });
    };
    ArticlesService.prototype.getuserArticle = function (username) {
        return this.http.get("http://localhost:3000/api/articles/?author=" + username).map(function (response) { return response.articles; });
    };
    ArticlesService.prototype.getComment = function (slug) {
        return this.http.get("http://localhost:3000/api/articles/" + slug + "/comments").map(function (response) { return response.comments; });
    };
    ArticlesService.prototype.addComment = function (data, slug) {
        var comment = {
            "comment": {
                "body": data.comment
            }
        };
        var token;
        if (localStorage.getItem('jwtToken') != null) {
            token = 'Token ' + localStorage.getItem('jwtToken');
        }
        return this.http.post("http://localhost:3000/api/articles/" + slug + "/comments", comment, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        }).map(function (response) { return response.comment; });
    };
    ArticlesService.prototype.deleteComment = function (id, slug) {
        var token;
        if (localStorage.getItem('jwtToken') != null) {
            token = 'Token ' + localStorage.getItem('jwtToken');
        }
        return this.http.delete("http://localhost:3000/api/articles/" + slug + "/comments/" + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': token
            })
        });
    };
    ArticlesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ArticlesService);
    return ArticlesService;
}());



/***/ }),

/***/ "./src/app/shared/authetication.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/authetication.service.ts ***!
  \*************************************************/
/*! exports provided: AutheticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutheticationService", function() { return AutheticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AutheticationService = /** @class */ (function () {
    function AutheticationService(http) {
        this.http = http;
    }
    AutheticationService.prototype._login = function (data) {
        this.user = {
            "user": {
                "email": data.email,
                "password": data.password
            }
        };
        return this.http.post("http://localhost:3000/api/users/login", this.user, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set('Content-Type', 'application/json')
        }).map(function (res) { return res.user; });
    };
    AutheticationService.prototype._register = function (data) {
        this.user = {
            "user": {
                "username": data.username,
                "email": data.email,
                "password": data.password
            }
        };
        return this.http.post("http://localhost:3000/api/users", this.user, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set('Content-Type', 'application/json')
        }).map(function (res) { return res.user; });
    };
    AutheticationService.prototype._getCurrentUser = function () {
        var token;
        if (localStorage.getItem('jwtToken') != null) {
            token = 'Token ' + localStorage.getItem('jwtToken');
        }
        return this.http.get("http://localhost:3000/api/users", {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': token
            })
        }).map(function (response) { return response.user; });
    };
    AutheticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AutheticationService);
    return AutheticationService;
}());



/***/ }),

/***/ "./src/app/shared/communicationservice.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/communicationservice.service.ts ***!
  \********************************************************/
/*! exports provided: CommunicationserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationserviceService", function() { return CommunicationserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CommunicationserviceService = /** @class */ (function () {
    function CommunicationserviceService() {
        this.dataLogOutObs$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.dataSignInObs$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.dataSignUpObs$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.dataArticleDetail$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.datanavigate$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.dataArticle$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.errorSignInObs$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.errorSignUpObs$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    CommunicationserviceService.prototype.getSignInData = function () {
        return this.dataSignInObs$;
    };
    CommunicationserviceService.prototype.getSignUpData = function () {
        return this.dataSignUpObs$;
    };
    CommunicationserviceService.prototype.getLogOut = function () {
        return this.dataLogOutObs$;
    };
    CommunicationserviceService.prototype.getErrorSignIn = function () {
        return this.errorSignInObs$;
    };
    CommunicationserviceService.prototype.getErrorSignUp = function () {
        return this.errorSignUpObs$;
    };
    CommunicationserviceService.prototype.getArticleDetail = function () {
        return this.dataArticleDetail$;
    };
    CommunicationserviceService.prototype.getnavigate = function () {
        return this.datanavigate$;
    };
    CommunicationserviceService.prototype.getArticle = function () {
        return this.dataArticle$;
    };
    CommunicationserviceService.prototype.updateSignInData = function (data) {
        this.dataSignInObs$.next(data);
    };
    CommunicationserviceService.prototype.updateSignUpData = function (data) {
        this.dataSignUpObs$.next(data);
    };
    CommunicationserviceService.prototype.updateLogOut = function (data) {
        this.dataLogOutObs$.next(data);
    };
    CommunicationserviceService.prototype.updateArticleDetail = function (data) {
        this.dataArticleDetail$.next(data);
    };
    CommunicationserviceService.prototype.updatenavigate = function (data) {
        this.datanavigate$.next(data);
    };
    CommunicationserviceService.prototype.updateErrorSignIn = function (data) {
        this.errorSignInObs$.next(data);
    };
    CommunicationserviceService.prototype.updateErrorSignUp = function (data) {
        this.errorSignUpObs$.next(data);
    };
    CommunicationserviceService.prototype.updateArticle = function (data) {
        this.dataArticle$.next(data);
    };
    CommunicationserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], CommunicationserviceService);
    return CommunicationserviceService;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-in/sign-in.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>Sign In</h2>\r\n  <a>Need an account?</a>\r\n  <p style=\"color:red\">{{errors}}</p>\r\n  <form [formGroup]=\"logindata\" (ngSubmit)=\"_loginIn(logindata.value)\">\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Email:</label>\r\n      <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Enter email\" name=\"email\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"pwd\">Password:</label>\r\n      <input type=\"password\" class=\"form-control\" formControlName=\"pwd\" placeholder=\"Enter password\" name=\"pwd\">\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-default\" value=\"Log In\">Submit</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_communicationservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/communicationservice.service */ "./src/app/shared/communicationservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignInComponent = /** @class */ (function () {
    function SignInComponent(communicationserviceService) {
        this.communicationserviceService = communicationserviceService;
    }
    SignInComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logindata = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            pwd: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("")
        });
        this.communicationserviceService.getErrorSignIn().subscribe(function (errors) {
            _this.errors = '* email or password ' + errors["email or password"];
        });
    };
    SignInComponent.prototype._loginIn = function (data) {
        this.value = {
            email: data.email,
            password: data.pwd
        };
        this.communicationserviceService.updateSignInData(this.value);
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_communicationservice_service__WEBPACK_IMPORTED_MODULE_2__["CommunicationserviceService"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/sign-out/sign-out.component.css":
/*!*************************************************!*\
  !*** ./src/app/sign-out/sign-out.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sign-out/sign-out.component.html":
/*!**************************************************!*\
  !*** ./src/app/sign-out/sign-out.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>Sign Up</h2>\r\n  <a>Have an account?</a>\r\n  <p *ngFor=\"let error of errors\" style=\"color:red;\">* {{ error }}</p>\r\n  <form [formGroup]=\"registerdata\" (ngSubmit)=\"_register(registerdata.value)\">\r\n    <div class=\"form-group\">\r\n      <label for=\"username\">UserName:</label>\r\n      <input type=\"text\" class=\"form-control\" formControlName=\"username\" placeholder=\"Enter username\" name=\"username\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Email:</label>\r\n      <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Enter email\" name=\"email\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"pwd\">Password:</label>\r\n      <input type=\"password\" class=\"form-control\" formControlName=\"pwd\" placeholder=\"Enter password\" name=\"pwd\">\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-default\" value=\"Log In\">Submit</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sign-out/sign-out.component.ts":
/*!************************************************!*\
  !*** ./src/app/sign-out/sign-out.component.ts ***!
  \************************************************/
/*! exports provided: SignOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignOutComponent", function() { return SignOutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_communicationservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/communicationservice.service */ "./src/app/shared/communicationservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignOutComponent = /** @class */ (function () {
    function SignOutComponent(communicationserviceService) {
        this.communicationserviceService = communicationserviceService;
    }
    SignOutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errors = [];
        this.registerdata = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            pwd: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("")
        });
        this.communicationserviceService.getErrorSignUp().subscribe(function (errors) {
            console.log(errors);
            for (var index = 0; index < errors.username.length; index++) {
                _this.errors.push("username field " + errors.username[index]);
            }
            for (var index = 0; index < errors.email.length; index++) {
                _this.errors.push("email field " + errors.username[index]);
            }
            for (var index = 0; index < errors.password.length; index++) {
                _this.errors.push("password field " + errors.username[index]);
            }
        });
    };
    SignOutComponent.prototype._register = function (data) {
        this.value = {
            username: data.username,
            email: data.email,
            password: data.pwd
        };
        this.communicationserviceService.updateSignUpData(this.value);
    };
    SignOutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-out',
            template: __webpack_require__(/*! ./sign-out.component.html */ "./src/app/sign-out/sign-out.component.html"),
            styles: [__webpack_require__(/*! ./sign-out.component.css */ "./src/app/sign-out/sign-out.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_communicationservice_service__WEBPACK_IMPORTED_MODULE_1__["CommunicationserviceService"]])
    ], SignOutComponent);
    return SignOutComponent;
}());



/***/ }),

/***/ "./src/app/yourfeed/yourfeed.component.css":
/*!*************************************************!*\
  !*** ./src/app/yourfeed/yourfeed.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul#navlist {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n}\r\n\r\nli.navelement {\r\n    float: left;\r\n}\r\n\r\nli.navelement a {\r\n    display: block;\r\n    color: green;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    padding: 16px;\r\n    text-decoration: none;\r\n}\r\n\r\nli.navelement a:hover {\r\n    background-color: grey;\r\n    color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/yourfeed/yourfeed.component.html":
/*!**************************************************!*\
  !*** ./src/app/yourfeed/yourfeed.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-10\">\n      <ul id=\"navlist\">\n        <li class=\"navelement\"><a (click)=\"_myArticles()\">My Articles</a></li>\n      </ul>\n      <hr style=\"margin:0;width:80%; float: left;\">\n      <div *ngFor=\"let article of articles | async\" class=\"container\" style=\"margin-top:5px;\">\n        <p style=\"color:green;font-size:13px\">{{article.author.username}}</p>\n        <p style=\"font-size:25px\">{{article.title}}</p>\n        <div (click)=\"_loadArticle(article.slug)\">\n          <p style=\"color: grey\">{{article.description}}</p>\n          <p style=\"font-size:12px;\">Read more...</p>\n        </div>\n        <hr style=\"margin: 3px;width:80%; float: left;\">\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/yourfeed/yourfeed.component.ts":
/*!************************************************!*\
  !*** ./src/app/yourfeed/yourfeed.component.ts ***!
  \************************************************/
/*! exports provided: YourfeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourfeedComponent", function() { return YourfeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_articles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/articles.service */ "./src/app/shared/articles.service.ts");
/* harmony import */ var _shared_communicationservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/communicationservice.service */ "./src/app/shared/communicationservice.service.ts");
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




var YourfeedComponent = /** @class */ (function () {
    function YourfeedComponent(articleservice, communicationserviceService, activatedroute) {
        this.articleservice = articleservice;
        this.communicationserviceService = communicationserviceService;
        this.activatedroute = activatedroute;
    }
    YourfeedComponent.prototype.ngOnInit = function () {
        this.username = this.activatedroute.snapshot.params.username;
        this._myArticles();
    };
    YourfeedComponent.prototype._myArticles = function () {
        this.articles = this.articleservice.getuserArticle(this.username);
    };
    YourfeedComponent.prototype._loadArticle = function (data) {
        this.communicationserviceService.updateArticleDetail(data);
    };
    YourfeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-yourfeed',
            template: __webpack_require__(/*! ./yourfeed.component.html */ "./src/app/yourfeed/yourfeed.component.html"),
            styles: [__webpack_require__(/*! ./yourfeed.component.css */ "./src/app/yourfeed/yourfeed.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"], _shared_communicationservice_service__WEBPACK_IMPORTED_MODULE_2__["CommunicationserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], YourfeedComponent);
    return YourfeedComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\keshavaggarwal\Desktop\Assignment\blogger\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map