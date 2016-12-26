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
var app_service_1 = require("./app.service");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var ProductsComponent = (function () {
    function ProductsComponent(title, appService, router, route, toaster) {
        this.title = title;
        this.appService = appService;
        this.router = router;
        this.route = route;
        this.toaster = toaster;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        //let categoryID;
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.categoryID = params['id'];
            _this.title.setTitle(_this.categoryID);
            _this.products$ = _this.appService.GetProducts(_this.categoryID);
        });
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: '',
        templateUrl: './products.component.html'
    }),
    __metadata("design:paramtypes", [platform_browser_1.Title, app_service_1.AppService, router_1.Router,
        router_1.ActivatedRoute, ng2_toastr_1.ToastsManager])
], ProductsComponent);
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map