import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  api:string;

  constructor(private http:HttpClient) {
    this.api=`${environment.apiRoot}/accounts`;
  }

  getAll():Observable<Account[]>{
    return this.http.get<Account[]>(this.api);
  }

  getAccountByUserID(userId:number):Observable<Account>{
    return this.http.get<Account[]>(`${this.api}?userId=${userId}`).pipe( map( (accs:Account[]) => accs[0] ));
  }

  getById(id:number):Observable<Account>{
    return this.http.get<Account>(`${this.api}/${id}`);
  }

  add(account:Account):Observable<Account>{
    return this.http.post<Account>(this.api,account);
  }

  update(account:Account):Observable<Account>{
    return this.http.put<Account>(`${this.api}/${account.id}`,account);
  }

  deleteById(id:number):Observable<void>{
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
