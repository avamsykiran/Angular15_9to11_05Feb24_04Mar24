import { Component } from '@angular/core';
import { Txn } from '../models/txn';
import { Account } from '../models/account';
import { AccountService } from '../services/account.service';
import { TxnService } from '../services/txn.service';
import { ActivatedRoute } from '@angular/router';
import { MessagingService } from '../services/messaging.service';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent {

  txns!: Txn[];
  account!: Account | undefined;

  constructor(private as: AccountService, private ts: TxnService,
    private activatedRoute: ActivatedRoute, private msgService: MessagingService) {

  }

  ngOnInit() {
    let aid = this.activatedRoute.snapshot.params["id"];

    if (aid) {
      this.as.getById(Number(aid)).subscribe({
        next: account => this.account = account,
        error: err => { console.log(err); this.msgService.sendMsg({ type: "error", msg: "Unable to fetech account detals! Please try later!" }) }
      })

      this.refreshTxns(Number(aid));
    }
  }

  refreshTxns(aid: number) {
    this.ts.getAllByAccountId(aid).subscribe({
      next: txns => this.txns = txns,
      error: err => { console.log(err); this.msgService.sendMsg({ type: "error", msg: "Unable to fetech transactions list! Please try later!" }) }
    })
  }

  editTxn = (id: number): void => {
    let index = this.txns.findIndex(t => t.id === id);
    this.txns[index].editable = true;
  }

  cancelEditTxn = (id: number): void => {
    let index = this.txns.findIndex(t => t.id === id);
    this.txns[index].editable = undefined;
  }

  delTxn = (id: number): void => {
    this.ts.deleteById(id).subscribe({
      next: () => {
        this.msgService.sendMsg({ type: "info", msg: `Transaction${id} is deleted!` });
        this.refreshTxns(this.account!.id);
      },
      error: err => { 
        console.log(err); 
        this.msgService.sendMsg({ type: "error", msg: "Unable to delete transaction! Please try later!" }) 
      }
    });
  }

  addTxn = (txn: Txn): void => {
    txn.accountId = this.account!.id;
    this.ts.add(txn).subscribe({
      next: txn => {
        this.msgService.sendMsg({ type: "info", msg: `Transaction#${txn.id} is added!` });
        this.refreshTxns(this.account!.id);
      },
      error: err => { 
        console.log(err); 
        this.msgService.sendMsg({ type: "error", msg: "Unable to save transaction! Please try later!" }) 
      }
    })
  }

  updateTxn = (txn: Txn): void => {
    txn.accountId = this.account!.id;
    txn.editable = undefined;
    this.ts.update(txn).subscribe({
      next: txn => {
        this.msgService.sendMsg({ type: "info", msg: `Transaction#${txn.id} is updated!` });
        this.refreshTxns(this.account!.id);
      },
      error: err => { 
        console.log(err); 
        this.msgService.sendMsg({ type: "error", msg: "Unable to save transaction! Please try later!" }) 
      }
    })
  }

}
