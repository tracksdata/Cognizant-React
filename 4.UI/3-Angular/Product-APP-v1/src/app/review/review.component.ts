import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  @Input('value')
  review:any;

  showForm:boolean=false;
  showBtn:boolean=true

  stars:Array<Number>=[];
  togleForm(){
    this.showBtn=!this.showBtn;
    this.showForm=!this.showForm;
  }
  ngOnChanges(){
    for(let n=0;n<this.review.stars;n++){
      this.stars.push(n);
    }
  }

  constructor() { 
    console.log('constructor');
    
  }





  ngOnInit() {
    console.log('--- test');
  }

}
