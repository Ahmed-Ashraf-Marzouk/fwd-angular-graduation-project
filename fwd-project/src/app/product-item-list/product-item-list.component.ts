import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-product-item-list',
  templateUrl: './product-item-list.component.html',
  styleUrls: ['./product-item-list.component.css']
})
export class ProductItemListComponent implements OnInit {

  product_list: any = []
  constructor(private prodcutDataService:ProductDataService) { }

  ngOnInit(): void {
    this.prodcutDataService.getProductData().subscribe( data =>{
      this.product_list = data
    }
    )
  }

}
