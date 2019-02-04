import { ProductService } from './../product.service';
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
  {stars:5,author:'abc@abc.com',body:'Good Product'},
  {stars:2,author:'xyz@abc.com',body:'Bad Product'},
  ];
  constructor(private ps:ProductService) { }
  addReview(newReview){
    //console.log('parent');
    //console.log(newReview);
    this.reviews.push(newReview);
    
  }

  currentTab:number=1;
  isTagSelected:boolean=false;

  changeTab(tabIndex){
    this.currentTab=tabIndex;
  }

  isTabSelected(index){
    return this.currentTab===index;
  }



 



  ngOnInit() {
  }

}
