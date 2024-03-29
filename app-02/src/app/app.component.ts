import { Component } from '@angular/core';
import { Message } from './models/Message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msgs:Message[];

  constructor(){
    this.msgs = [];
  }

  remove(index:number){
    this.msgs.splice(index,1);
  }

  addMsg(msg:Message){
    this.msgs.push(msg);
  }
}
