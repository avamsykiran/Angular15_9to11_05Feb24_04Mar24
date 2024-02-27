import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtaSharedModule } from './bta-shared/bta-shared.module';
import { BtaServicesModule } from './bta-services/bta-services.module';
import { GatewayModule } from './gateway/gateway.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BtaSharedModule,
    BtaServicesModule,
    GatewayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
