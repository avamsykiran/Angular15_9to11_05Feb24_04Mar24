import { Injectable } from '@angular/core';
import { BtaUser } from '../models/bta-user';
import { BtaRole } from '../models/bta-role';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUser!:BtaUser;
  private loggedIn:boolean;
  private accessToken!:string;

  constructor() { 
    this.loggedIn=false;
  }

  get token(){
    return this.accessToken;
  }

  get isLoggedIn():boolean{
    return this.loggedIn;
  }

  get userId():number{
    return this.currentUser!.id;
  }

  get email():string {
    return this.currentUser?.email;
  }

  get role():BtaRole {
    return this.currentUser?.role;
  }

  login():void{

  }

  logout():void {

  }
}
