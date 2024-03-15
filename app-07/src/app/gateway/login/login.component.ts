import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { GatewayState } from '../store/reducer/gateway.reducer';
import { GatewayActions } from '../store/action/gateway.actions';
import { selectErrMsg, selectIsCallInProgress, selectIsLoggedIn, selectRole } from '../store/selector/gateway.selectors';
import { BtaRole } from 'src/app/models/bta-role';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  logInForm:FormGroup;

  email:FormControl;
  password:FormControl;

  msg!:string;

  isLogged$ : Observable<boolean>;

  constructor(private store:Store<GatewayState>, private router:Router){
    this.email = new FormControl("",[Validators.required]);
    this.password = new FormControl("",[Validators.required]);

    this.logInForm = new FormGroup({
      email:this.email,password:this.password
    });

    this.isLogged$ = this.store.select(selectIsLoggedIn);
  }

  ngOnInit(){

    this.store.select(selectIsCallInProgress).subscribe(
      isCallInProgress => isCallInProgress ? this.msg="Please wait while we check..." : this.msg=""
    )

    this.store.select(selectErrMsg).subscribe(
      errMsg => this.msg = errMsg??""
    )

    this.store.select(selectRole).subscribe(
      role => {
        if(role){
          if(role===BtaRole.ADMIN){
            this.router.navigateByUrl("/accounts");
          }else if(role===BtaRole.ACCOUNT_HOLDER){
            this.router.navigateByUrl("/statement");
          }
        }
      }
    )
  }

  logInFormSubmitted(){
    this.store.dispatch(GatewayActions.makeLoginCall(this.logInForm.value));
  }
}
