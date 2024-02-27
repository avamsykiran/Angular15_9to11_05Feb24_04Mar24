import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { ListComponent } from './list/list.component';
import { AccountFormComponent } from './account-form/account-form.component';


@NgModule({
  declarations: [
    AccountsComponent,
    ListComponent,
    AccountFormComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
