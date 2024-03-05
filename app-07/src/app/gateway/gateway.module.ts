import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AppMatModule } from '../app-mat.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AccessDeniedComponent
  ],
  imports: [
    CommonModule,
    AppMatModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    AccessDeniedComponent
  ]
})
export class GatewayModule { }
