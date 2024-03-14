import { createReducer, on } from '@ngrx/store';
import { TxnsActions } from '../action/txns.action';
import { Account } from 'src/app/models/account';
import { Txn } from 'src/app/models/txn';

export const statementFeatureKey = 'statement';

export interface StatementState {
  account: Account | null,
  txns: Txn[] | null,
  errMsg: string | null,
  isCallInProgress: boolean
}

export const initialState: StatementState = {
  account: null,
  txns: null,
  errMsg: null,
  isCallInProgress: false
};

export const statementReducer = createReducer(
  initialState,
  on(TxnsActions.callFailed, (state, { errMsg }) => ({ ...state, isCallInProgress: false, errMsg })),

  on(TxnsActions.makeLoadAccountCall, (state, { userId }) => ({ ...state, isCallInProgress: true, errMsg: null })),
  on(TxnsActions.loadAccountCall, (state, { account }) => ({ ...state, isCallInProgress: false, errMsg: null, account })),

  on(TxnsActions.makeLoadTxnsCall, (state, { accountId }) => ({ ...state, isCallInProgress: true, errMsg: null })),
  on(TxnsActions.loadTxnsCallDone, (state, { txns }) => ({ ...state, isCallInProgress: false, errMsg: null, txns })),

  on(TxnsActions.makeAddTxnCall, (state, { txn }) => ({ ...state, isCallInProgress: true, errMsg: null })),
  on(TxnsActions.addTxnCallDone, (state, { txn }) => (
    {
      ...state,
      txns: [...state.txns ?? [], txn],
      isCallInProgress: false,
      errMsg: null
    })
  ),

  on(TxnsActions.makeUpdateTxnCall, (state, { txn }) => ({ ...state, isCallInProgress: true, errMsg: null })),
  on(TxnsActions.updateTxnCallDone, (state, { txn }) => (
    {
      ...state,
      txns: state.txns!.map(t => t.id === txn.id ? txn : t),
      isCallInProgress: false,
      errMsg: null
    })
  ),

  on(TxnsActions.makeDeleteTxnCall, (state, { id }) => ({ ...state, isCallInProgress: true, errMsg: null })),
  on(TxnsActions.deleteTxnCallDone, (state, { id }) => (
    {
      ...state,
      txns: state.txns!.filter(t => t.id !== id),
      isCallInProgress: false,
      errMsg: null
    })
  )
  
);

