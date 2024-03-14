import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AccountsService } from 'src/app/bta-services/accounts.service';
import { AccountsActions } from '../action/accounts.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { Account } from 'src/app/models/account';



@Injectable()
export class AccountsEffects {


  constructor(private actions$: Actions, private accountsService: AccountsService) { }

  loadAccounts$ = createEffect(
    () => 
      this.actions$.pipe(
        ofType(AccountsActions.makeLoadAccountsCall),
        switchMap(
          () => this.accountsService.getAll().pipe(
            map((accounts:Account[]) => AccountsActions.loadAccountsCallDone({accounts})),
            catchError(err => {
              console.log(err);
              return of(AccountsActions.callFailed({ errMsg: "Can not fetech accounts list!" }))
            })
          )
        )
      )
  );

  addAccount$ = createEffect(
    () => 
      this.actions$.pipe(
        ofType(AccountsActions.makeAddAccountCall),
        switchMap(
          ({account}) => this.accountsService.add(account).pipe(
            map((account:Account) => AccountsActions.addAccountCallDone({account})),
            catchError(err => {
              console.log(err);
              return of(AccountsActions.callFailed({ errMsg: "Can not add account!" }))
            })
          )
        )
      )
  );

  updateAccount$ = createEffect(
    () => 
      this.actions$.pipe(
        ofType(AccountsActions.makeUpdateAccountCall),
        switchMap(
          ({account}) => this.accountsService.update(account).pipe(
            map((account:Account) => AccountsActions.updateAccountCallDone({account})),
            catchError(err => {
              console.log(err);
              return of(AccountsActions.callFailed({ errMsg: "Can not save account!" }))
            })
          )
        )
      )
  );

  delAccount$ = createEffect(
    () => 
      this.actions$.pipe(
        ofType(AccountsActions.makeDeleteAccountCall),
        switchMap(
          ({id}) => this.accountsService.deleteById(id).pipe(
            map(() => AccountsActions.deleteAccountCallDone({id})),
            catchError(err => {
              console.log(err);
              return of(AccountsActions.callFailed({ errMsg: "Can not delete account!" }))
            })
          )
        )
      )
  );
}
