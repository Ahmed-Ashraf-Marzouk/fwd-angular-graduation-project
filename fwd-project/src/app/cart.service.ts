import { Injectable } from '@angular/core';
import { ProductDataService } from './product-data.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  user_products: any = []
  amounts: any = Array(6).fill(0);
  cost:any = Array(6).fill(0);
  // total$:any = of(this.cost);
  amounts$: any = of(this.amounts)

  constructor(private producDataService:ProductDataService, private http:HttpClient) {
    this.producDataService.getProductData().subscribe(data =>{
      this.user_products = data
    })

    // Why it didn't load the value of this array 
    // for(let i = 0; this.user_products.length; i++){
    //   this.amounts.push(0);
    //   console.log("Here")
    //   console.log(this.amounts)
    // }

   }

  public addProduct(id:any, amount:number){
    console.log(amount)
    this.amounts[id-1] = amount
    this.cost[id-1] = this.user_products[id-1].price * amount
    console.log(this.cost)
  }


  public getCartProducts(): Observable<any> {
    return this.amounts$
  }
  
  public getTotal(): Observable<any> {
    const total$ = new Observable(observer =>{
      setTimeout(() => {
        observer.next(this.cost
          )
      }, 10);
    })
    return total$;
  }
}
