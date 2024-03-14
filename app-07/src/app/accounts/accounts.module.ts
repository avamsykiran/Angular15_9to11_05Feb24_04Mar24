import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { ListComponent } from './list/list.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { EffectsModule } from '@ngrx/effects';
import { AccountsEffects } from './store/effect/accounts.effects';
import { StoreModule } from '@ngrx/store';
import { accountsFeatureKey, accountsReducer} from './store/reducer/accounts.reducer';

@NgModule({
  declarations: [
    AccountsComponent,
    ListComponent,
    AccountFormComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    StoreModule.forFeature(accountsFeatureKey,accountsReducer),
    EffectsModule.forFeature([AccountsEffects])
  ]
})
export class AccountsModule { }
