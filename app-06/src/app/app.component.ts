import { Component } from '@angular/core';
import { Message } from './models/Message';
import { Link } from './models/Link';
import { MessagingService } from './services/messaging.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msgs:Message[];
  links:Link[];
  msgSubscription!:Subscription;

  constructor(private msgService:MessagingService){
    this.msgs = [];
    this.links=[
      {path:"/accounts",linkText:"Accounts List"},
      {path:"/addAccount",linkText:"New Account"}
    ];
  }

  ngOnInit(){
    this.msgSubscription =  this.msgService.getMessenger().subscribe({
      next: msg => this.msgs.push(msg)
    })
  }

  ngOnDestroy(){
    this.msgSubscription.unsubscribe();
  }

  remove(index:number){
    this.msgs.splice(index,1);
  }

}
