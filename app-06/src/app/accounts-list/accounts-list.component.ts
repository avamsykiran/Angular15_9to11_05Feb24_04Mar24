import { Component } from '@angular/core';
import { Account } from '../models/account';
import { AccountService } from '../services/account.service';
import { MessagingService } from '../services/messaging.service';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent {

  accounts:Account[];

  constructor(private acs:AccountService,private msgService:MessagingService){
    this.accounts=acs.getAll();
  }

  removeAccount(id:number){
    this.acs.deleteById(id);
    this.accounts=this.acs.getAll();
    this.msgService.sendMsg({type:"info",msg:`Account#${id} is deleted!`});
  }

}
