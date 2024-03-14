import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AccountsState,accountsFeatureKey } from '../reducer/accounts.reducer'

export const selectAccountsState = createFeatureSelector<AccountsState>(accountsFeatureKey);

export const selectAccounts = createSelector(selectAccountsState,state => state.accounts);
export const selectIsCallInProgress = createSelector(selectAccountsState,state => state.isCallInProgress);
export const selectErrMsg = createSelector(selectAccountsState,state => state.errMsg);
