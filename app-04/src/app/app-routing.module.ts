import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { NosuchPathComponent } from './nosuch-path/nosuch-path.component';
import { StatementComponent } from './statement/statement.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:"/accounts"},
  {path:"accounts",component:AccountsListComponent},
  {path:"addAccount",component:AccountFormComponent},
  {path:"editAccount/:id",component:AccountFormComponent},
  {path:"statement/:id",component:StatementComponent},
  {path:"**",component:NosuchPathComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
