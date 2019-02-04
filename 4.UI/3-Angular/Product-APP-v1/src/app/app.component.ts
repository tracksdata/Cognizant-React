import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  
}
