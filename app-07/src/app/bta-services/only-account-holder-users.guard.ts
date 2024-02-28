import { CanActivateFn } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { inject } from '@angular/core';
import { BtaRole } from '../models/bta-role';

export const onlyAccountHolderUsersGuard: CanActivateFn = (route, state) => {
  let as:AuthenticationService = inject(AuthenticationService);
  console.log("for only AHs: "+as.isLoggedIn && as.role===BtaRole.ACCOUNT_HOLDER);
  return as.isLoggedIn && as.role===BtaRole.ACCOUNT_HOLDER;
};
