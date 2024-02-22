import { Injectable } from '@angular/core';
import { Account } from '../models/account';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  api:string;

  constructor(private httpClient:HttpClient) {
    this.api = environment.accountsApiUrl;
  }

  getAll() : Observable<Account[]> {
    return this.httpClient.get<Account[]>(this.api);
  }

  getById(id: number): Observable<Account> {
    return this.httpClient.get<Account>(`${this.api}/${id}`);
  }

  add(account: Account): Observable<Account> {
    return this.httpClient.post<Account>(this.api,account);
  }

  update(account: Account): Observable<Account> {
    return this.httpClient.put<Account>(`${this.api}/${account.id}`,account);
  }

  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.api}/${id}`);
  }
}
