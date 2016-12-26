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
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var app_service_1 = require("./app.service");
var CartComponent = (function () {
    function CartComponent(title, appService, formbuilder, toaster, router) {
        this.title = title;
        this.appService = appService;
        this.formbuilder = formbuilder;
        this.toaster = toaster;
        this.router = router;
    }
    CartComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Cart');
        this.cart = this.appService.cart;
        this.states = this.appService.GetStates();
        this.states.unshift("");
        this.formGroup = this.formbuilder.group({
            "firstName": ["", forms_1.Validators.compose([forms_1.Validators.required])],
            "lastName": ["", forms_1.Validators.compose([forms_1.Validators.required])],
            "address1": ["", forms_1.Validators.compose([forms_1.Validators.required])],
            "address2": ["", forms_1.Validators.compose([forms_1.Validators.required])],
            "state": ["", forms_1.Validators.compose([forms_1.Validators.required])],
            "zip": ["", forms_1.Validators.compose([forms_1.Validators.required])]
        });
    };
    CartComponent.prototype.ngDoCheck = function () {
        this.cart = this.appService.cart;
    };
    // Remove Product from Bag
    CartComponent.prototype.remove = function (idx) {
        this.cart.splice(idx, 1);
    };
    CartComponent.prototype.placeOrder = function () {
        var _this = this;
        if (!this.formGroup.valid) {
            this.error = "Please enter shipping details";
        }
        else {
            this.appService.placeOrder(this.formGroup.value).subscribe({ next: function (data) {
                    _this.appService.resetCart();
                    _this.formGroup.reset();
                    _this.toaster.success('Order Placed !!');
                    _this.router.navigate(['']);
                },
                error: function (err) { return _this.toaster.error(err); }
            });
        }
    };
    return CartComponent;
}());
CartComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: '',
        templateUrl: './cart.component.html'
    }),
    __metadata("design:paramtypes", [platform_browser_1.Title,
        app_service_1.AppService,
        forms_1.FormBuilder,
        ng2_toastr_1.ToastsManager,
        router_1.Router])
], CartComponent);
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map