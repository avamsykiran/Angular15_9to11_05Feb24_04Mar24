import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GatewayActions } from '../action/gateway.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { UsersService } from 'src/app/bta-services/users.service';
import { BtaRole } from 'src/app/models/bta-role';

@Injectable()
export class GatewayEffects {


  constructor(private actions$: Actions, private usersService: UsersService) { }

  loginEffect$ = createEffect(() => this.actions$.pipe(
    ofType(GatewayActions.makeLoginCall),
    switchMap(
      ({ email, password }) => this.usersService.requestLogin(email, password).pipe(
        map(({ accessToken, user }) => GatewayActions.loginCallDone({ accessToken, user })),
        catchError(err => {
          console.log(err);
          return of(GatewayActions.callFailed({ errMsg: "Can not log you in now!" }))
        })
      )
    )
  ));

  registerEffect$ = createEffect(() => this.actions$.pipe(
    ofType(GatewayActions.makeRegisterCall),
    switchMap(
      ({ email, password }) => this.usersService.requestRegister({email,password,role:BtaRole.ACCOUNT_HOLDER}).pipe(
        map(({ accessToken, user }) => GatewayActions.registerCallDone({ accessToken, user })),
        catchError(err => {
          console.log(err);
          return of(GatewayActions.callFailed({ errMsg: "Can not register you now!" }))
        })
      )
    )
  ));
}
