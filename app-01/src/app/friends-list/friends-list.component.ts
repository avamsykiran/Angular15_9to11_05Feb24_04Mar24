import { Component } from '@angular/core';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent {

  friends:string[];
  fnm!:string;

  constructor(){
    this.friends=[
      "Vamsy","Sagar","Suresh","Yogi","Dileep","Girish"
    ];
  }

  removeFriend(friend:string){
    let index = this.friends.findIndex( f => f===friend);
    if(index>-1){
      this.friends.splice(index,1);
    }
  }

  addFriend(){
    if(this.fnm){
      this.friends.push(this.fnm);
      this.fnm="";
    }
  }
}
