import { Injectable } from '@angular/core';
import { Txn } from '../models/txn';
import { TxnType } from '../models/txn-type';

@Injectable({
  providedIn: 'root'
})
export class TxnService {

  txns:Txn[];
  nextId:number;

  constructor() {
    this.txns=[
      {id:1,descp:"Salary",type:TxnType.CREDIT,amount:90000,dot:new Date("2024-01-01"),accountId:101},
      {id:2,descp:"Fuel",type:TxnType.DEBIT,amount:9000,dot:new Date("2024-01-10"),accountId:101},
      {id:3,descp:"Mobile Bill",type:TxnType.DEBIT,amount:900,dot:new Date("2024-01-13"),accountId:101}
    ];

    this.nextId=4;
  }

  getAllByAccountId(aid:number):Txn[]{
    return this.txns.filter(t => t.accountId===aid);
  }

  getById(id:number):Txn|undefined{
    return this.txns.find(t => t.id===id);
  }

  add(txn:Txn):Txn{
    txn.id=this.nextId++;
    this.txns.push(txn);
    return txn;
  }

  update(txn:Txn):Txn|undefined{
    let index = this.txns.findIndex(t => t.id===txn.id);
    if(index>-1){
      this.txns[index]=txn;
    }else{
      return undefined;
    }
    return txn;
  }

  deleteById(id:number):void{
    let index = this.txns.findIndex(t => t.id===id);
    if(index>-1){
      this.txns.splice(index,1);
    }
  }
}
