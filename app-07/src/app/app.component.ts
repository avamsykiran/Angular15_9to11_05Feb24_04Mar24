import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GatewayState } from './gateway/store/reducer/gateway.reducer';
import { Observable } from 'rxjs';
import { selectRole } from './gateway/store/selector/gateway.selectors';
import { BtaRole } from './models/bta-role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Budget Tracker 2.0';
  
  menus:string[][];

  constructor(private store:Store<GatewayState>){
    this.menus=[
      ["/login","Sign In"],
      ["/register","Sign Up"]
    ];
  }

  ngOnInit(){
    this.store.select(selectRole).subscribe(
      role => {
        if(role){
          if(role===BtaRole.ADMIN){
            this.menus=[
              ["/accounts/list","Accounts List"],
              ["/accounts/add","New Account"]
            ];
          }else if(role===BtaRole.ACCOUNT_HOLDER){
            this.menus=[
              ["/statement","Statement"]
            ];
          }
        }else{
          this.menus=[
            ["/login","Sign In"],
            ["/register","Sign Up"]
          ];    
        }
      }
    );
  }
}
