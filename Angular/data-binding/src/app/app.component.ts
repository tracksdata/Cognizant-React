import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city='Chennai';
  cities=['Chennai','Hyderabad','Pune','Bangalore'];
   emp={
     name:'Praveen',
     age:35,
     location:'Hyderabad'
   }

   emps=[
    {name:'Praveen',age:35,location:'Hyderabad'},
    {name:'Ozvitha',age:22,location:'Goa'},
    {name:'James',age:32,location:'DC'},
    {name:'Bucky',age:54,location:'SCA'},
   ];

  constructor(){
    console.dir(this.emps);
  }

  pname='';

  status=false;
  imageUrl='https://vignette.wikia.nocookie.net/cartooncharacters/images/2/2b/Jerrythemouse.jpg';

  product={
    pid:'',
    pname:'',
    price:0
  }
  handleForm(){

    console.log(this.product);
    
  }
  showData(e){
   // console.dir(event)
    console.log(e.target.checked);
    this.status=e.target.checked;
  }
  process(){

    console.log('--- procsss function');
  }



  
}
