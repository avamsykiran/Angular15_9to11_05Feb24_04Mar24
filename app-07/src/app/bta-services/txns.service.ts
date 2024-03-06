import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Txn } from '../models/txn';

@Injectable({
  providedIn: 'root'
})
export class TxnsService {

  api: string;

  constructor(private httpClient: HttpClient) {
    this.api = `${environment.apiRoot}/txns`;
  }

  getAllByAccountId(aid: number): Observable<Txn[]> {
    return this.httpClient.get<Txn[]>(`${this.api}?accountId=${aid}`).pipe(
      map((txns: Txn[]) => txns.map((t: Txn) => ({ ...t, dot: new Date(t.dot) })))
    )
  }

  getById(id: number): Observable<Txn> {
    return this.httpClient.get<Txn>(`${this.api}/${id}`).pipe(
      map((t: Txn) => ({ ...t, dot: new Date(t.dot) }))
    )
  }

  add(txn: Txn): Observable<Txn> {
    return this.httpClient.post<Txn>(this.api, txn);
  }

  update(txn: Txn): Observable<Txn> {
    return this.httpClient.put<Txn>(`${this.api}/${txn.id}`, txn);
  }

  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.api}/${id}`);
  }
}
