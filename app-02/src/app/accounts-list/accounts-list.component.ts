import { Component, EventEmitter, Output } from '@angular/core';
import { Account } from '../models/account';
import { AccountService } from '../services/account.service';
import { Message } from '../models/Message';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent {

  accounts:Account[];

  @Output()
  msg:EventEmitter<Message>;

  constructor(private acs:AccountService){
    this.accounts=acs.getAll();
    this.msg=new EventEmitter<Message>();
  }

  removeAccount(id:number){
    this.acs.deleteById(id);
    this.accounts=this.acs.getAll();
    this.msg.emit({type:"info",msg:`Account#${id} is deleted!`});
  }

}
