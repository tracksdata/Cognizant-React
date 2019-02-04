import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

 apiUrl='http://localhost:3000/api/products/'

  saveProduct(product){
    this.http.post(product,this.apiUrl);
  }
  saveReview(){

  }

  listAll():any{
    return this.http.get(this.apiUrl);
  }
  findProduct(){

  }
  findProductByName(){

  }
  updateProduct(){

  }
  removeProduct(){

  }


  constructor(private http:HttpClient) { }
}
