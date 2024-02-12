import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msgs:string[][];

  constructor(){
    this.msgs = [
      ["This is a info message1","info"],
      ["This is a info message2","info"],
      ["This is a error message3","error"],
      ["This is a info message4","info"],
      ["This is a error message5","error"],
      ["This is a error message6","error"]
    ];
  }

  remove(index:number){
    this.msgs.splice(index,1);
  }
}
