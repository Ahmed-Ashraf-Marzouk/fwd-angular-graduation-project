import { Component, Input, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CartService } from '../cart.service';
import { ProductDataService } from '../product-data.service';
import { HttpClient } from '@angular/common/http';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-product-item',
  templateUrl: './cart-product-item.component.html',
  styleUrls: ['./cart-product-item.component.css']
})
export class CartProductItemComponent implements OnInit {

  product_list:any = [];
  @Input() id:any = '';
  @Input() name:any = '';
  @Input() price:any = '';
  @Input() image:any = '';
  @Output() current_amount:any = new EventEmitter<any>();
  amount:any = '';
  amounts:any = '';
  path: any = '';
  constructor(private http: HttpClient, private router:Router, private productDataService:ProductDataService, private cartService:CartService) { }

  ngOnInit(): void {
    this.productDataService.getProductData().subscribe(data => {
      this.product_list = data
    })
    this.cartService.getCartProducts().subscribe( data =>{
      this.amounts = data
      this.amount = this.amounts[this.id - 1]

    })
    this.path = this.router.url
  }

  public addToCart(){
    console.log("hi")
    this.cartService.addProduct(this.id, parseInt(this.amount))
  }

  public changeAmount(value:any){
    this.current_amount.emit(value)
    this.cartService.addProduct(this.id, parseInt(value))
  }


}

 