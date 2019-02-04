import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input()
  btnLabel:number;

  btnHitCount=0;

  @Output()
  totalCount:EventEmitter<number>=new EventEmitter();
  buttonCount(){
    this.btnHitCount=this.btnHitCount+1;
    this.totalCount.emit(this.btnLabel);
  }

  constructor() { }

  ngOnInit() {
  }

}
