import { createReducer, on } from '@ngrx/store';
import { GatewayActions } from './gateway.actions';
import { BtaUser } from 'src/app/models/bta-user';

export const gatewayFeatureKey = 'gateway';

export interface GatewayState {
  accessToken:string|null,
  currentUser:BtaUser|null,
  isCallInProgress:boolean
}

export const initialState: GatewayState = {
  accessToken:null,
  currentUser:null,
  isCallInProgress:false
};

export const reducer = createReducer<GatewayState>(
  initialState,
  on(GatewayActions.makeLoginCall, state => ({...state,isCallInProgress:true})),
  on(GatewayActions.loginCallDone), (state, { accessToken,user }) => ({ accessToken,currentUser:user,isCallInProgress:false}),
  on(GatewayActions.makeRegisterCall, state => ({...state,isCallInProgress:true})),
  on(GatewayActions.registerCallDone), (state, { accessToken,user }) => ({ accessToken,currentUser:user,isCallInProgress:false})
);

