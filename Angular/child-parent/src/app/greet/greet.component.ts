import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  constructor() { }

  @Input()
  inputMsg:string;
  greetMsg='Good Morming from Greet Component'
@Output()
outputMsg:EventEmitter<String>=new EventEmitter();

greetBack(){
  this.outputMsg.emit('Good Morning tooo');
}

  ngOnInit() {
  }

}
