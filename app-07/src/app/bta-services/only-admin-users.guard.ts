import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { BtaRole } from '../models/bta-role';
import { Store } from '@ngrx/store';
import { GatewayState } from '../gateway/store/reducer/gateway.reducer';
import { selectRole } from '../gateway/store/selector/gateway.selectors';
import { map } from 'rxjs';

export const onlyAdminUsersGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  return inject(Store<GatewayState>).select(selectRole).pipe(
    map(role => role && role===BtaRole.ADMIN ? true : router.parseUrl("/noEntry") )
  )
};
