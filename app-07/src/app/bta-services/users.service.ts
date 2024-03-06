import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BtaUser } from '../models/bta-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  loginApi:string;
  regApi:string;

  constructor(private http:HttpClient) { 
    this.loginApi=`${environment.apiRoot}/signin`;
    this.regApi=`${environment.apiRoot}/register`;
  }

  requestLogin(email:string,password:string) : Observable<{accessToken:string,user:BtaUser}>{
    return this.http.post<{accessToken:string,user:BtaUser}>(this.loginApi,{email,password});
  }

  requestRegister(user:BtaUser): Observable<{accessToken:string,user:BtaUser}>{
    return this.http.post<{accessToken:string,user:BtaUser}>(this.regApi,user);
  }
}
