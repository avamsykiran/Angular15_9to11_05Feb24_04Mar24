import { Component } from '@angular/core';
import { Message } from './models/Message';
import { Link } from './models/Link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msgs:Message[];
  links:Link[];

  constructor(){
    this.msgs = [];
    this.links=[
      {path:"/accounts",linkText:"Accounts List"},
      {path:"/addAccount",linkText:"New Account"}
    ];
  }

  remove(index:number){
    this.msgs.splice(index,1);
  }

  addMsg(msg:Message){
    this.msgs.push(msg);
  }
}
