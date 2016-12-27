import { Injectable } from '@angular/core';
import { Http , Headers , RequestOptions , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/of';

import { Category } from './viewModels/category';
import { Product } from './viewModels/product';
import { Cart } from './viewModels/Cart';
import { ShippingDetails } from './viewModels/ShippingDetails';

@Injectable()
export class AppService {

    categories:Array<Category>;
    cart:Array<Cart> = [];
    states:Array<string> = [];
    total:number = 0;

    constructor(private http: Http) { }

    // Get all categories
    GetCategories():Observable<Array<Category>> {       
       
          return this.http.get('./categories')
                     .map(data => data.json())
                     .catch(this.handleError);;                                        

    }

    // Get all Products
    GetProducts(categoryID:string):Observable<Array<Product>> {

        return this.http.get('./categories/' + categoryID + '/products')
                        .map(data => data.json())
                        .catch(this.handleError);
    }

    // Get Product
    GetProduct(id:string, pid:string):Observable<Product> {
        
        return this.http.get('./categories/' + id + '/products/' + pid)
                        .map(data => data.json())
                        .catch(this.handleError);;
    }

    // Add to cart
    AddTocart(product:Product) 
    {
        let item = { pid:product._id , name:product.name , price:product.price , qty:1 , total:product.price  };     
        this.cart.push(item);
    }

    // Return all states
    GetStates():Array<string> {

        return ["Andaman and Nicobar Islands",
                "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chandigarh",
                "Chhattisgarh",
                "Dadra and Nagar Haveli",
                "Daman and Diu",
                "Delhi",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Lakshadweep",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Orissa",
                "Pondicherry",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttaranchal",
                "Uttar Pradesh",
                "West Bengal"];
    }

    // place Order
    placeOrder(ShippingDetails:ShippingDetails):Observable<any> {

        
        let headers:Headers = new Headers({'Content-Type':'application/json'});
        let options:RequestOptions = new RequestOptions({ headers: headers });
       
        return   this.http.post('./orderplaced',ShippingDetails , options)
                 .map(data => data.json())
                 .catch(this.handleError);
    }

    // reset the cart
    resetCart() {
        this.cart = [];
    }

    // Error Handler
    private handleError (error: Response | any) {
            // In a real world app, we might use a remote logging infrastructure
            let errMsg: string;
            if (error instanceof Response) {
                    const body = error.json() || '';
                    const err = body.error || JSON.stringify(body);
                    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
            } 
            else {
                    errMsg = error.message ? error.message : error.toString();
            }
            console.error(errMsg);
            return Observable.throw(errMsg);
    }

}


