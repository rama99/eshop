import { Component , OnInit , OnChanges , DoCheck } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import 'rxjs/add/observable/zip';

import { AppService } from './app.service';
import { Category } from './viewModels/category';

import "jquery";
//import  "block-ui";


@Component({
    moduleId:module.id,
    selector:'my-app',
    templateUrl: './app.component.html'

})

export class AppComponent implements OnInit , OnChanges , DoCheck {

    categories:Array<Category>;
    cartCount = 0;

    constructor(private appService:AppService , private toaster:ToastsManager) {}

    ngOnInit() 
    {
       this.appService.GetCategories().subscribe( (data) => {
           this.appService.categories = data;
           this.categories = this.appService.categories;
           this.cartCount = this.appService.cart.length;

           $("document").ready( function() {
              // $.blockUI();
           })

       });  

       this.appService.GetCartItems().subscribe( {
                                                        next: (data) => { this.appService.cart = data},
                                                        error: (err) => { this.toaster.error('cart==>' + err)}

                                                    })   
      
    }

    ngOnChanges() {
       
    }

    ngDoCheck() {       
        this.cartCount = this.appService.cart.length;
    }

}