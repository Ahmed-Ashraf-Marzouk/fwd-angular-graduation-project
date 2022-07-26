import { Component, Input, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CartService } from '../cart.service';
import { ProductDataService } from '../product-data.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  product_list:any = [];
  @Input() id:any = '';
  @Input() name:any = '';
  @Input() price:any = '';
  @Input() image:any = '';
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


}

 