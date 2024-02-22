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

  accounts!: Account[]|null;
  pleaseWait:string;

  constructor(private acs: AccountService, private msgService: MessagingService) {
    this.pleaseWait="assets/imgs/please-wait.gif";
  }

  ngOnInit(){
    this.loadData();
  }

  loadData() {
    this.accounts=null;
    this.acs.getAll().subscribe({
      next: data => this.accounts = data,
      error: err => { console.log(err); this.msgService.sendMsg({ type: "error", msg: "Unable to fetech data! Please try later!" }) }
    });
  }

  removeAccount(id: number) {
    this.acs.deleteById(id).subscribe({
      next: () => { this.msgService.sendMsg({ type: "info", msg: `Account#${id} is deleted!` }); this.loadData(); },
      error: err => { console.log(err); this.msgService.sendMsg({ type: "error", msg: "Unable to delete data! Please try later!" }) }
    })
  }

}
