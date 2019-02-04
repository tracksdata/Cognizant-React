import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { myCustomValidations } from '../validators';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

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

  reviewForm:FormGroup;

  constructor(private fb:FormBuilder) {  }

  errors:any=[];


@Output()  
submitedReview=new EventEmitter();  
    
handleSubmit(e){
 this.review=this.reviewForm.value;
 console.log(this.review);
 this.submitedReview.emit(this.review);
 this.reviewForm.reset();
 
}
    ngOnInit() {
    
      this.reviewForm=this.fb.group(
        {
          stars:[],
          author:['',[Validators.required,Validators.email]],
          body:['',[Validators.required,myCustomValidations]]
        }
      ); // form group end

      let authorControl=this.reviewForm.get('author');
      let bodyControl=this.reviewForm.get('body');
  
      authorControl
      .statusChanges // stream
      .subscribe(state=>{
        if(state==="INVALID"){
          if(authorControl.errors.required){
            this.errors['author']='Author Required';
          }
        }else{
          this.errors['author']='';
        }
      })// required
  
      authorControl
      .statusChanges // stream
      .subscribe(state=>{
        if(state==="INVALID"){
          if(authorControl.errors.email){
            this.errors['author']='Invalid email';
          }
        }else{
          this.errors['author']='';
        }
      }) // email 
    
      bodyControl
      .statusChanges // stream
      .subscribe(state=>{
        if(state==="INVALID"){
          if(bodyControl.errors.bad){
            this.errors['body']='No Badwords';
          }
        }else{
          this.errors['body']='';
        }
      })// custom bad validattor
  
      bodyControl
      .statusChanges // stream
      .subscribe(state=>{
        if(state==="INVALID"){
          if(bodyControl.errors.required){
            this.errors['body']='Message cant be blank';
          }
        }else{
          this.errors['body']='';
        }
      })// body required
      
  
  
    } // ngOnInit end
  
  
  
    
  
  

}
