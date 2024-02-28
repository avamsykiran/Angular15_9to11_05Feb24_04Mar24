import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoSuchComponent } from './bta-shared/no-such/no-such.component';
import { LoginComponent } from './gateway/login/login.component';
import { RegisterComponent } from './gateway/register/register.component';
import { onlyAnonymousUsersGuard } from './bta-services/only-anonymous-users.guard';
import { onlyAdminUsersGuard } from './bta-services/only-admin-users.guard';
import { onlyAccountHolderUsersGuard } from './bta-services/only-account-holder-users.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent,canActivate:[onlyAnonymousUsersGuard] },
  { path: 'register', component: RegisterComponent,canActivate:[onlyAnonymousUsersGuard] },
  { path: 'accounts', loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule),canActivate:[onlyAdminUsersGuard] },
  { path: 'statement', loadChildren: () => import('./statement/statement.module').then(m => m.StatementModule),canActivate:[onlyAccountHolderUsersGuard] },
  { path: '**', component: NoSuchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
