import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }
 count=0;
  hitCount(){
this.count=this.count+1;
this.totalCount.emit(this.count);
  }

  @Input()
  btnLabel:string;

  @Output()
  totalCount:EventEmitter<number>=new EventEmitter();



  ngOnInit() {
  }

}
