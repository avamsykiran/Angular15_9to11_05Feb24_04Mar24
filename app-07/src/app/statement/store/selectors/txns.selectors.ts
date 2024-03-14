import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StatementState,statementFeatureKey} from '../reducer/txns.reducer';

export const selectStatementState = createFeatureSelector<StatementState>(statementFeatureKey);

export const selectAccount = createSelector(selectStatementState,state => state.account);
export const selectTxns = createSelector(selectStatementState,state => state.txns);
export const selectIsCallInProgress = createSelector(selectStatementState,state => state.isCallInProgress);
export const selectErrMsg = createSelector(selectStatementState,state => state.errMsg);
