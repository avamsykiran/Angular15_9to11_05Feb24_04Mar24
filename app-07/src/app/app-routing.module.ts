import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'AccountsHome', loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule) }, { path: 'statement', loadChildren: () => import('./statement/statement.module').then(m => m.StatementModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
