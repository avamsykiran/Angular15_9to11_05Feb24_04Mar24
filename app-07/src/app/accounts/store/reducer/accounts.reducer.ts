import { createReducer, on } from '@ngrx/store';
import { AccountsActions } from './accounts.actions';
import { Account } from 'src/app/models/account';

export const accountsFeatureKey = 'accounts';

export interface AccountsState {
  accounts:Account[]|null,
  errMsg: string | null,
  isCallInProgress: boolean
}

export const initialState: AccountsState = {
  accounts:null,
  errMsg: null,
  isCallInProgress: false
};

export const accountsReducer = createReducer(
  initialState,
);

