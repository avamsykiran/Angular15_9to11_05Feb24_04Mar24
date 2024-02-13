import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MsgBoxComponent } from './msg-box/msg-box.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { NosuchPathComponent } from './nosuch-path/nosuch-path.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MsgBoxComponent,
    AccountsListComponent,
    AccountFormComponent,
    NosuchPathComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
