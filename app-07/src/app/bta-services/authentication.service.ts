import { Injectable } from '@angular/core';
import { BtaUser } from '../models/bta-user';
import { BtaRole } from '../models/bta-role';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUser!:BtaUser;
  private loggedIn:boolean;

  constructor() { 
    this.loggedIn=false;
  }

  get isLoggedIn():boolean{
    return this.loggedIn;
  }

  get userName():string {
    return this.currentUser?.userName;
  }

  get role():BtaRole {
    return this.currentUser?.role;
  }

  login():void{

  }

  logout():void {

  }
}
