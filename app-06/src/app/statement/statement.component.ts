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

  txns!:Txn[];
  account!:Account|undefined;

  constructor(private as:AccountService,private ts:TxnService,private activatedRoute:ActivatedRoute,private msgService:MessagingService){

    let aid = this.activatedRoute.snapshot.params["id"];

    if(aid){
      this.account = this.as.getById(Number(aid));
      this.txns = this.ts.getAllByAccountId(Number(aid));
    }

  }

  editTxn = (id:number):void => {
    let index = this.txns.findIndex(t => t.id===id);
    this.txns[index].editable=true;
  }

  cancelEditTxn = (id:number):void => {
    let index = this.txns.findIndex(t => t.id===id);
    this.txns[index].editable=undefined;
  }

  delTxn = (id:number):void => {
    this.ts.deleteById(id);
    this.txns=this.ts.getAllByAccountId(this.account!.id);
    this.msgService.sendMsg({type:"info",msg:`Transaction${id} is deleted!`});
  }

  addTxn = (txn:Txn):void => {
    txn.accountId=this.account!.id;
    this.ts.add(txn);
    this.txns=this.ts.getAllByAccountId(this.account!.id);
    this.msgService.sendMsg({type:"info",msg:`A Transaction is added!`});
  }
  
  updateTxn = (txn:Txn):void => {
    txn.accountId=this.account!.id;
    txn.editable=undefined;
    this.ts.update(txn);
    this.txns=this.ts.getAllByAccountId(this.account!.id);
    this.msgService.sendMsg({type:"info",msg:`Transaction${txn.id} is updated!`});
  }
  
}
