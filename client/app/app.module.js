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
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
// third party module
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
// components
var app_component_1 = require("./app.component");
var home_component_1 = require("./home.component");
var products_component_1 = require("./products.component");
var product_component_1 = require("./product.component");
var cart_component_1 = require("./cart.component");
var about_component_1 = require("./about.component");
var page_not_found_component_1 = require("./page-not-found.component");
var order_details_component_1 = require("./order-details.component");
var product_search_component_1 = require("./product-search.component");
// services
var app_service_1 = require("./app.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.ReactiveFormsModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: '', component: home_component_1.HomeComponent },
                { path: 'acategories/:id/products/:pid', component: product_component_1.ProductComponent },
                //{path:'acategories/productsx/:pid' , component:ProductComponent},
                { path: 'acategories/:id/products', component: products_component_1.ProductsComponent },
                { path: 'acart', component: cart_component_1.CartComponent },
                { path: 'about', component: about_component_1.AboutComponent },
                { path: 'aorders', component: order_details_component_1.OrderDetailsComponent },
                { path: 'asearch', component: product_search_component_1.ProductSearchComponent },
                { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
            ]),
            ng2_toastr_1.ToastModule],
        exports: [],
        providers: [app_service_1.AppService, platform_browser_1.Title],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, products_component_1.ProductsComponent, product_component_1.ProductComponent, cart_component_1.CartComponent,
            about_component_1.AboutComponent,
            page_not_found_component_1.PageNotFoundComponent,
            order_details_component_1.OrderDetailsComponent,
            product_search_component_1.ProductSearchComponent],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map