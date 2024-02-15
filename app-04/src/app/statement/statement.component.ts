import { Component } from '@angular/core';
import { Txn } from '../models/txn';
import { Account } from '../models/account';
import { AccountService } from '../services/account.service';
import { TxnService } from '../services/txn.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent {

  txns!:Txn[];
  account!:Account|undefined;

  constructor(private as:AccountService,private ts:TxnService,private activatedRoute:ActivatedRoute){

    let aid = this.activatedRoute.snapshot.params["id"];

    if(aid){
      this.account = this.as.getById(Number(aid));
      this.txns = this.ts.getAllByAccountId(Number(aid));
    }

  }

}
