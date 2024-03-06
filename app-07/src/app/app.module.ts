import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtaSharedModule } from './bta-shared/bta-shared.module';
import { BtaServicesModule } from './bta-services/bta-services.module';
import { GatewayModule } from './gateway/gateway.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMatModule } from './app-mat.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BtaSharedModule,
    BtaServicesModule,
    GatewayModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    BrowserAnimationsModule,
    AppMatModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
