import { Product } from './product';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products = new Array<any>();

  constructor() {
    console.log('constructor');
  }
  product: any = { id: '' };

  handleForm() {
    //  this.prod.id=this.product.id;
    this.products.push(this.product);
    this.product = {};
  }
  ngOnInit() {
    console.log('---- ngOnInit ')
  }

}
