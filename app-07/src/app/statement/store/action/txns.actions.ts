import { createActionGroup, props } from '@ngrx/store';
import { Account } from 'src/app/models/account';
import { Txn } from 'src/app/models/txn';

export const TxnsActions = createActionGroup({
  source: 'Statement',
  events: {
    makeLoadAccountCall: props<{ userId:number }>(),
    loadAccountCallDone: props<{ account: Account }>(),

    makeLoadTxnsCall: props<{ accountId:number }>(),
    loadTxnsCallDone: props<{ txns:Txn[] }>(),

    makeAddTxnCall: props<{ txn:Txn }>(),
    addTxnCallDone: props<{ txn:Txn }>(),

    makeUpdateTxnCall: props<{ txn:Txn }>(),
    updateTxnCallDone: props<{ txn:Txn }>(),

    makeDeleteTxnCall: props<{ id: number }>(),
    deleteTxnCallDone: props<{ id: number }>(),

    callFailed: props<{ errMsg: string }>(),
  }
});
