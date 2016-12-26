import { Component , OnInit , OnChanges , DoCheck } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppService } from './app.service';
import { Category } from './viewModels/category';

@Component({
    moduleId:module.id,
    selector:'my-app',
    templateUrl: './app.component.html'

})

export class AppComponent implements OnInit , OnChanges , DoCheck {

    categories:Array<Category>;
    cartCount = 0;

    constructor(private appService:AppService) {}

    ngOnInit() 
    {
       this.appService.GetCategories().subscribe( (data) => {
           this.appService.categories = data;
           this.categories = this.appService.categories;
           this.cartCount = this.appService.cart.length;
       });       
    }

    ngOnChanges() {
       
    }

    ngDoCheck() {       
        this.cartCount = this.appService.cart.length;
    }

}