import { Component , OnInit , DoCheck } from '@angular/core';
import { FormBuilder , FormGroup , FormControl , Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router , ActivatedRoute  } from '@angular/router';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { AppService } from './app.service';
import { Cart } from './viewModels/Cart';
import { ShippingDetails } from './viewModels/ShippingDetails';

@Component({
moduleId:module.id,
selector:'',
templateUrl:'./cart.component.html'
})

export class CartComponent implements OnInit , DoCheck {

cart:Array<Cart>;
states:Array<string>;
formGroup:FormGroup;
error:string;

constructor( private title:Title , 
             private appService:AppService , 
             private formbuilder:FormBuilder , 
             private toaster:ToastsManager ,
             private router:Router) {}

ngOnInit() {

    this.title.setTitle('Cart');
    this.cart = this.appService.cart;
    this.states = this.appService.GetStates();
    this.states.unshift("");

    this.formGroup = this.formbuilder.group({
                                              "firstName":["" , Validators.compose([Validators.required]) ],
                                              "lastName":["" , Validators.compose([Validators.required]) ],
                                              "address1":["" , Validators.compose([Validators.required])],
                                              "address2":["", Validators.compose([Validators.required])],
                                              "state":["" , Validators.compose([Validators.required])],
                                              "zip":["" , Validators.compose([Validators.required])]
                                            });
}

ngDoCheck() {
    this.cart = this.appService.cart;
}

// Remove Product from Bag
remove(idx:number) {    
    this.cart.splice(idx,1);
}

placeOrder() {
  
    if(!this.formGroup.valid) 
    {       
        this.error = "Please enter shipping details";
    }
    else 
    {
        this.appService.placeOrder(this.formGroup.value).subscribe( { next: (data) =>  {
            this.appService.resetCart();
            this.formGroup.reset();
            this.toaster.success('Order Placed !!');
            this.router.navigate(['']);
            
        },
        
        error: (err) => this.toaster.error(err)
       });
       
    }
 
}

}