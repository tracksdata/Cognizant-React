import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  @Input('value')
  product:any;

  reviews:any=[
    {
      stars:5,
      author:'abc@abc.com',
      body:'Good Product'
    },
    {
      stars:4,
      author:'xyz@abc.com',
      body:'Bad Product'
    }
  ];

  currentTab:number=1;
  isTagSelected:boolean=false;

  changeTab(tabIndex){
    this.currentTab=tabIndex;
  }

  isTabSelected(index){
    return this.currentTab===index;
  }



  constructor() { }



  ngOnInit() {
  }

}
