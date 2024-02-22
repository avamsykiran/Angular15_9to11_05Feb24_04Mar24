import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MsgBoxComponent } from './msg-box/msg-box.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { NosuchPathComponent } from './nosuch-path/nosuch-path.component';
import { StatementComponent } from './statement/statement.component';
import { TxnDetailsComponent } from './txn-details/txn-details.component';
import { TxnFormComponent } from './txn-form/txn-form.component';
import { TxnDetailsHeaderComponent } from './txn-details-header/txn-details-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MsgBoxComponent,
    AccountsListComponent,
    AccountFormComponent,
    NosuchPathComponent,
    StatementComponent,
    TxnDetailsComponent,
    TxnFormComponent,
    TxnDetailsHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
