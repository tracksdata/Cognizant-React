import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private ps:ProductService){}
  products: Array<any> = [
    {
      id: 'P001',
      name: 'Mobile',
      price: '85000',
      description: 'Samsung Mobile',
      imagePath: '/assets/Mobile.png',
      canBuy: false
    },
    {
      id: 'P002',
      name: 'Mac Book Air',
      price: '180000',
      description: 'Laptop with airpod',
      imagePath: '/assets/Laptop.png',
      canBuy: false
    }
  ]

  prods:any[];
  listAll(){
    this.ps.listAll().subscribe(data=>this.prods=data);
  }
  saveProduct(product){
    this.saveProduct(product);
  }



  
}
