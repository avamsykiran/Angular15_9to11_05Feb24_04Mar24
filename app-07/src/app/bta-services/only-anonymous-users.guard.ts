import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { GatewayState } from '../gateway/store/reducer/gateway.reducer';
import { selectRole } from '../gateway/store/selector/gateway.selectors';
import { map } from 'rxjs';

export const onlyAnonymousUsersGuard: CanActivateFn = (route, state) => {
  return inject(Store<GatewayState>).select(selectRole).pipe(
    map(role => role?false:true)
  )
};
