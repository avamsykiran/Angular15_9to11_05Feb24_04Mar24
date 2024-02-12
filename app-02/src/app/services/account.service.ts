import { Injectable } from '@angular/core';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  accounts:Account[];
  nextId:number;

  constructor() {
    this.accounts=[
      {id:101,fullName:"Vamsy Kiran",mobileNumber:"9052224753",mailId:"vamsy@gmail.com"},
      {id:102,fullName:"Sagar",mobileNumber:"9052224751",mailId:"sagar@gmail.com"},
      {id:103,fullName:"Suresh",mobileNumber:"9052224752",mailId:"suresh@gmail.com"}
    ];
    this.nextId=104;
   }

   getAll():Account[]{
    return [...this.accounts];
   }

   getById(id:number):Account|undefined{
    return this.accounts.find(a => a.id===id);
   }

   add(account:Account):Account{
    account.id=this.nextId++;
    this.accounts.push(account);
    return account;
   }

   update(account:Account):Account|undefined{
    let index = this.accounts.findIndex(a => a.id===account.id);
    if(index>-1){
      this.accounts[index]=account;
    }else{
      return undefined;
    }
    return account;
   }

   deleteById(id:number):void{
    let index = this.accounts.findIndex(a => a.id===id);
    if(index>-1){
      this.accounts.splice(index,1);
    }
   }
}
