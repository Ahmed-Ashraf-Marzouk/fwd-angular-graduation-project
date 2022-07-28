import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { CartService } from '../cart.service';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: any = [];
  amounts: any = [];
  total: any = 0;
  constructor(private cartService:CartService, private productDataService:ProductDataService) { }

  ngOnInit(): void {
    this.productDataService.getProductData().subscribe(data =>{
      this.products = data;
      console.log(this.products)
    })
    this.cartService.getTotal().subscribe(data =>{
      for (let i = 0; i < data.length; i++)
      {
        this.total = this.total + data[i];
      }
      console.log("Inside cart component")
      console.log(this.total)
    })
    this.cartService.getCartProducts().subscribe(data =>{
      this.amounts = data
      console.log("Inside amounts cart component")
      console.log(this.amounts)
    }) 
  }

  public currentAmout(id:any, value:any){
    this.amounts[id-1] = value
    console.log("cart value")
    console.log(value)
    this.total = 0
    for (let i = 0; i < this.products.length; i++)
      {
        this.total = this.total + this.products[i].price * this.amounts[i]; 
      }
    console.log("New total")
  }

 
}
