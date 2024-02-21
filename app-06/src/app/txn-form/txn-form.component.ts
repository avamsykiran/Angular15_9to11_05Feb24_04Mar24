import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { TxnType } from '../models/txn-type';
import { Txn } from '../models/txn';

@Component({
  selector: 'app-txn-form',
  templateUrl: './txn-form.component.html',
  styleUrls: ['./txn-form.component.css']
})
export class TxnFormComponent {

  id: FormControl;
  dot: FormControl;
  amount: FormControl;
  desp: FormControl;

  txnForm: FormGroup;

  txnType: TxnType;

  @Input()
  txn!: Txn;

  @Input()
  cancelEdit!: (id: number) => void;

  @Input()
  save!: (txn: Txn) => void;

  constructor() {
    this.id = new FormControl(null);
    this.dot = new FormControl(new Date().toISOString().substring(0, 10), [Validators.required, this.noFutureDate]);
    this.amount = new FormControl(0, [Validators.required, Validators.min(0)]);
    this.desp = new FormControl("", [Validators.required]);

    this.txnForm = new FormGroup({
      id: this.id, dot: this.dot, desp: this.desp, amount: this.amount
    });

    this.txnType = TxnType.CREDIT;
  }

  ngOnChanges() {
    if (this.txn) {
      this.txnForm.reset({ 
        id: this.txn.id, dot: this.txn.dot.toISOString().substring(0, 10), desp: this.txn.descp, amount: this.txn.amount 
      });
      this.txnType = this.txn.type;
    }
  }

  resetForm() {
    this.txnForm.reset({ id: null, dot: new Date().toISOString().substring(0, 10), desp: "", amount: 0 });
    this.txnType = TxnType.CREDIT;
  }

  cancel() {
    this.txn ? this.cancelEdit(this.txn.id) : this.resetForm();
  }

  changeType(txnType: string) {
    this.txnType = txnType === "CREDIT" ? TxnType.CREDIT : TxnType.DEBIT;
  }

  noFutureDate(control: AbstractControl): ValidationErrors | null {

    let isValid = false;

    if (control.value) {
      let enteredDate = new Date(control.value);
      let today = new Date();
      isValid = enteredDate.getTime() <= today.getTime();
    }

    return isValid ? null : { "noFutureDate": true };
  }

  formSubmitted() {
    let txn: Txn = {
      id: this.txnForm.value.id,
      type: this.txnType,
      amount: this.txnForm.value.amount,
      descp: this.txnForm.value.desp,
      dot: new Date(this.txnForm.value.dot),
      accountId:0
    };

    this.save(txn);

    if(!this.txn ){
      this.resetForm();
    }
  }
}
