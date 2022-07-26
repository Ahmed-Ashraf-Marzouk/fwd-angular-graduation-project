import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http:HttpClient) {
   }
  
  public getProductData(): Observable<any> {
    return this.http.get("../../assets/data.json"); // Return observable to the JSON file
  }
}
