import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Account } from 'src/app/models/account';

export const AccountsActions = createActionGroup({
  source: 'Accounts',
  events: {
    makeLoadAccountsCall: emptyProps(),
    loadAccountsCallDone: props<{ accounts: Account[] }>(),

    makeAddAccountCall: props<{ account: Account }>(),
    addAccountCallDone: props<{ account: Account }>(),

    makeUpdateAccountCall: props<{ account: Account }>(),
    updateAccountCallDone: props<{ account: Account }>(),

    makeDeleteAccountCall: props<{ id: number }>(),
    deleteAccountCallDone: props<{ id: number }>(),

    callFailed: props<{ errMsg: string }>(),
  }
});