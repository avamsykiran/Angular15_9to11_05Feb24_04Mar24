import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-msg-box',
  templateUrl: './msg-box.component.html',
  styleUrls: ['./msg-box.component.css']
})
export class MsgBoxComponent {

  @Input()
  type:string;

  @Input()
  key!:number;

  @Output()
  close:EventEmitter<number>;

  constructor(){
    this.type="info";
    this.close=new EventEmitter<number>();
  }

  raiseClose(){
    this.close.emit(this.key);
  }
}
