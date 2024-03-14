import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { BtaUser } from 'src/app/models/bta-user';

export const GatewayActions = createActionGroup({
  source: 'Gateway',
  events: {
    makeLoginCall: props<{ email:string,password:string }>(),
    loginCallDone: props<{ accessToken:string,user:BtaUser }>(),
    makeRegisterCall: props<{ email:string,password:string }>(),
    registerCallDone: props<{ accessToken:string,user:BtaUser }>(),
    callFailed: props<{ errMsg:string }>()
  }
});
