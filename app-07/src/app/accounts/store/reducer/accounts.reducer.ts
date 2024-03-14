import { createReducer, on } from '@ngrx/store';
import { AccountsActions } from '../action/accounts.actions';
import { Account } from 'src/app/models/account';

export const accountsFeatureKey = 'accounts';

export interface AccountsState {
  accounts: Account[] | null,
  errMsg: string | null,
  isCallInProgress: boolean
}

export const initialState: AccountsState = {
  accounts: null,
  errMsg: null,
  isCallInProgress: false
};

export const accountsReducer = createReducer(
  initialState,
  on(AccountsActions.callFailed, (state, { errMsg }) => ({ ...state, isCallInProgress: false, errMsg })),
  on(AccountsActions.makeLoadAccountsCall, state => ({ ...state, isCallInProgress: true, errMsg: null })),
  on(AccountsActions.loadAccountsCallDone, (state, { accounts }) => ({ ...state, isCallInProgress: false, accounts })),
  on(AccountsActions.makeAddAccountCall, (state, { account }) => ({ ...state, isCallInProgress: true, errMsg: null })),
  on(AccountsActions.addAccountCallDone, (state, { account }) => ({ accounts: [...state.accounts ?? [], account], isCallInProgress: false, errMsg: null })),
  on(AccountsActions.makeUpdateAccountCall, (state, { account }) => ({ ...state, isCallInProgress: true, errMsg: null })),
  on(AccountsActions.updateAccountCallDone, (state, { account }) => (
    { accounts: state.accounts!.map(a => a.id===account.id?account:a), isCallInProgress: false, errMsg: null })
  ),
  on(AccountsActions.makeDeleteAccountCall, (state, { id }) => ({ ...state, isCallInProgress: true, errMsg: null })),
  on(AccountsActions.deleteAccountCallDone, (state, { id }) => (
    { accounts: state.accounts!.filter(a => a.id!==id), isCallInProgress: false, errMsg: null })
  )
);

