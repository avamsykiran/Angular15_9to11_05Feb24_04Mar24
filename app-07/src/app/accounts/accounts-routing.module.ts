import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts.component';
import { ListComponent } from './list/list.component';
import { AccountFormComponent } from './account-form/account-form.component';

const routes: Routes = [
  {
    path: '', component: AccountsComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'list' },
      { path: 'list', component: ListComponent },
      { path: 'add', component: AccountFormComponent },
      { path: 'edit/:id', component: AccountFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
