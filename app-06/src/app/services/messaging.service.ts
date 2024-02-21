import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '../models/Message';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  private messenger:Subject<Message>;

  constructor() { 
    this.messenger = new Subject<Message>();
  }

  getMessenger(){
    return this.messenger;
  }

  sendMsg(msg:Message){
    this.messenger.next(msg);
  }
}
