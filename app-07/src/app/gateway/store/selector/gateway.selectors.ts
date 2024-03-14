import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GatewayState, gatewayFeatureKey } from '../reducer/gateway.reducer';

export const selectGatwayState = createFeatureSelector<GatewayState>(gatewayFeatureKey);
export const selectUserId = createSelector(selectGatwayState,state => state.currentUser?.id);
export const selectEmail = createSelector(selectGatwayState,state => state.currentUser?.email);
export const selectRole = createSelector(selectGatwayState,state => state.currentUser?.role);
export const selectIsLoggedIn = createSelector(selectGatwayState,state => state.currentUser?true:false);
export const selectAccessToken = createSelector(selectGatwayState,state => state.accessToken);
export const selectIsCallInProgress = createSelector(selectGatwayState,state => state.isCallInProgress);
export const selectErrMsg = createSelector(selectGatwayState,state => state.errMsg);
