import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatementRoutingModule } from './statement-routing.module';
import { StatementComponent } from './statement.component';
import { TxnHeaderComponent } from './txn-header/txn-header.component';
import { TxnFooterComponent } from './txn-footer/txn-footer.component';
import { TxnRowComponent } from './txn-row/txn-row.component';
import { TxnFormRowComponent } from './txn-form-row/txn-form-row.component';
import { EffectsModule } from '@ngrx/effects';
import { TxnsEffects } from '../txns/store/effect/txns.effects';


@NgModule({
  declarations: [
    StatementComponent,
    TxnHeaderComponent,
    TxnFooterComponent,
    TxnRowComponent,
    TxnFormRowComponent
  ],
  imports: [
    CommonModule,
    StatementRoutingModule,
    EffectsModule.forFeature([TxnsEffects])
  ]
})
export class StatementModule { }
