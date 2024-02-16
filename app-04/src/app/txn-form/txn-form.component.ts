import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { TxnType } from '../models/txn-type';

@Component({
  selector: 'app-txn-form',
  templateUrl: './txn-form.component.html',
  styleUrls: ['./txn-form.component.css']
})
export class TxnFormComponent {

  id:FormControl;
  dot:FormControl;
  amount:FormControl;
  desp:FormControl;

  txnForm:FormGroup;

  txnType:TxnType;

  constructor(){
    this.id = new FormControl(null);
    this.dot= new FormControl(new Date().toISOString().substring(0,10),[Validators.required,this.noFutureDate]);
    this.amount = new FormControl(0,[Validators.required,Validators.min(0)]);
    this.desp = new FormControl("",[Validators.required]);

    this.txnForm = new FormGroup({
      id:this.id,dot:this.dot,desp:this.desp,amount:this.amount
    });

    this.txnType=TxnType.CREDIT;
  }

  resetForm(){
    this.txnForm.reset({id:null,dot:new Date().toISOString().substring(0,10),desp:"",amount:0});
    this.txnType=TxnType.CREDIT;
  }

  cancel(){
    this.resetForm();
  }

  changeType(txnType:string){
    this.txnType= txnType==="CREDIT"? TxnType.CREDIT : TxnType.DEBIT;
  }

  noFutureDate(control:AbstractControl) : ValidationErrors | null{

    let isValid = false;

    if(control.value){
      let enteredDate = new Date(control.value);
      let today = new Date();
      isValid = enteredDate.getTime() <= today.getTime();
    }

    return isValid ? null : {"noFutureDate":true};
  }
}
