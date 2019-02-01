import { Product } from './product';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
//product=new Product();
products=new Array();

constructor(){
  console.log('constructor');
}
product:any={};
  handleForm(){
  //  this.prod.id=this.product.id;
    this.products.push(this.product);
    console.log(this.product)
  }
  ngOnInit(){
    console.log('---- ngOnInit ')
  }
  
}
