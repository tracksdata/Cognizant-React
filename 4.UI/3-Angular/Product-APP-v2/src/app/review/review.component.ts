import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { myCustomValidations } from '../validators';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  ngOnInit() {
  
  } 

  @Input('value')
  review:any;

  showButton:boolean=true;
  stars:Array<Number>=[];

  ngOnChanges(){
    //this.stars=[];
    for(let n=0;n<this.review.stars;n++){
      this.stars.push(n);

    }
  }
  
}
