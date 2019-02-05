import { Component, OnInit } from '@angular/core';
import { myData } from '../data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }
  products:any[]=myData;
  product:any;
  display(prod){
    this.product=prod;
  }

  ngOnInit() {
  }

}
