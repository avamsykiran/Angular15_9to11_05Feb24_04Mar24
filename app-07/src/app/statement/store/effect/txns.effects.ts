import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TxnsActions } from '../action/txns.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { AccountsService } from 'src/app/bta-services/accounts.service';
import { TxnsService } from 'src/app/bta-services/txns.service';
import { Account } from 'src/app/models/account';
import { Txn } from 'src/app/models/txn';



@Injectable()
export class TxnsEffects {


  constructor(private actions$: Actions, private accountsService: AccountsService, private txnsService: TxnsService) { }

  getAccount$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TxnsActions.makeLoadAccountCall),
        switchMap(
          ({ userId }) => this.accountsService.getAccountByUserID(userId).pipe(
            map((account: Account) => TxnsActions.loadAccountCallDone({ account })),
            catchError(err => {
              console.log(err);
              return of(TxnsActions.callFailed({ errMsg: "Can not read account!" }))
            })
          )
        )
      )
  );

  getTxns$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TxnsActions.makeLoadTxnsCall),
        switchMap(
          ({ accountId }) => this.txnsService.getAllByAccountId(accountId).pipe(
            map((txns: Txn[]) => TxnsActions.loadTxnsCallDone({ txns })),
            catchError(err => {
              console.log(err);
              return of(TxnsActions.callFailed({ errMsg: "Can not read txns!" }))
            })
          )
        )
      )
  );

  addTxns$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TxnsActions.makeAddTxnCall),
        switchMap(
          ({ txn }) => this.txnsService.add(txn).pipe(
            map((txn: Txn) => TxnsActions.addTxnCallDone({ txn })),
            catchError(err => {
              console.log(err);
              return of(TxnsActions.callFailed({ errMsg: "Can not save txn!" }))
            })
          )
        )
      )
  );

  updateTxns$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TxnsActions.makeUpdateTxnCall),
        switchMap(
          ({ txn }) => this.txnsService.update(txn).pipe(
            map((txn: Txn) => TxnsActions.updateTxnCallDone({ txn })),
            catchError(err => {
              console.log(err);
              return of(TxnsActions.callFailed({ errMsg: "Can not save txn!" }))
            })
          )
        )
      )
  );

  delTxns$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TxnsActions.makeDeleteTxnCall),
        switchMap(
          ({ id }) => this.txnsService.deleteById(id).pipe(
            map(() => TxnsActions.deleteTxnCallDone({ id })),
            catchError(err => {
              console.log(err);
              return of(TxnsActions.callFailed({ errMsg: "Can not delete txn!" }))
            })
          )
        )
      )
  );
}
