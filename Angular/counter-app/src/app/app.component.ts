import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 total=0;
 getTotal(count){
   console.log(this.total);
    this.total=this.total+count;
  }

  
}
