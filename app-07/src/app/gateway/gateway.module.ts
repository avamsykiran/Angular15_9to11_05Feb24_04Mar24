import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AppMatModule } from '../app-mat.module';
import { EffectsModule } from '@ngrx/effects';
import { GatewayEffects } from './store/effect/gateway.effects';
import { StoreModule } from '@ngrx/store';
import { gatewayFeatureKey,gatewayReducer } from './store/reducer/gateway.reducer';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AccessDeniedComponent
  ],
  imports: [
    CommonModule,
    AppMatModule,
    StoreModule.forFeature(gatewayFeatureKey, gatewayReducer),
    EffectsModule.forFeature([GatewayEffects])
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    AccessDeniedComponent
  ]
})
export class GatewayModule { }
