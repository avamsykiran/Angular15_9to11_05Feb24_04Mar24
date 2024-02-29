import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AccessDeniedComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    AccessDeniedComponent
  ]
})
export class GatewayModule { }
