import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product_list: any = [];
  product:any = '';
  id: any = '';

  constructor(private productDataService:ProductDataService, private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params =>{
      this.id = params.get('id');
    })

    this.productDataService.getProductData().subscribe(data => {
      this.product_list = data;
      this.product = this.product_list.find( (p:any) => p.id == this.id)
    })
    
  }

}
