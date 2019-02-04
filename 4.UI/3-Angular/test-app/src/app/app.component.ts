import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  labelData='Hit-v1';

  totalHits=0;
  disp(c){
this.totalHits=this.totalHits+1;
  }

}
