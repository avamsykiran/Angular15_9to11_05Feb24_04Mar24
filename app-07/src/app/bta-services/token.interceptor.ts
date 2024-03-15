import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { Store } from '@ngrx/store';
import { GatewayState } from '../gateway/store/reducer/gateway.reducer';
import { selectAccessToken } from '../gateway/store/selector/gateway.selectors';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private store:Store<GatewayState>) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.store.select(selectAccessToken).pipe(
      switchMap(
        token => next.handle(
          token ?
            request.clone({
              setHeaders: {
                'Authorization': `Bearer ${token}`
              }
            }) :
            request
        )
      )
    );
  }
}
