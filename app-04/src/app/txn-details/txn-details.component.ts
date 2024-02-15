import { Component, Input } from '@angular/core';
import { Txn } from '../models/txn';

@Component({
  selector: 'app-txn-details',
  templateUrl: './txn-details.component.html',
  styleUrls: ['./txn-details.component.css']
})
export class TxnDetailsComponent {

  @Input()
  txn!:Txn;

}
