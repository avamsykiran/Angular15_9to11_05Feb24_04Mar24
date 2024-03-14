import { createReducer, on } from '@ngrx/store';
import { GatewayActions } from './gateway.actions';
import { BtaUser } from 'src/app/models/bta-user';

export const gatewayFeatureKey = 'gateway';

export interface GatewayState {
  accessToken: string | null,
  currentUser: BtaUser | null,
  errMsg: string | null,
  isCallInProgress: boolean
}

export const initialState: GatewayState = {
  accessToken: null,
  currentUser: null,
  errMsg: null,
  isCallInProgress: false
};

export const gatewayReducer = createReducer<GatewayState>(
  initialState,
  on(GatewayActions.makeLoginCall, state => ({ ...state, isCallInProgress: true, errMsg: null })),
  on(GatewayActions.loginCallDone, (state, { accessToken, user }) => ({ accessToken, currentUser: user, isCallInProgress: false, errMsg: null })),
  on(GatewayActions.makeRegisterCall, state => ({ ...state, isCallInProgress: true, errMsg: null })),
  on(GatewayActions.registerCallDone, (state, { accessToken, user }) => ({ accessToken, currentUser: user, isCallInProgress: false, errMsg: null })),
  on(GatewayActions.callFailed, (state, { errMsg: string }) => ({ ...state, isCallInProgress: false, errMsg }))
);

