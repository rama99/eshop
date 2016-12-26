"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var app_service_1 = require("./app.service");
var HomeComponent = (function () {
    function HomeComponent(appService, title, toaster) {
        this.appService = appService;
        this.title = title;
        this.toaster = toaster;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title.setTitle('Home');
        this.appService.GetCategories().subscribe({ next: function (data) {
                _this.appService.categories = data;
                _this.categories = _this.appService.categories;
            },
            error: function (err) {
                _this.toaster.error(err);
            }
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: '',
        templateUrl: './home.component.html'
    }),
    __metadata("design:paramtypes", [app_service_1.AppService, platform_browser_1.Title, ng2_toastr_1.ToastsManager])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map