import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { BtaRole } from '../models/bta-role';

export const onlyAdminUsersGuard: CanActivateFn = (route, state) => {
  let as:AuthenticationService = inject(AuthenticationService);
  console.log("for only admins: "+as.isLoggedIn && as.role===BtaRole.ADMIN);
  return as.isLoggedIn && as.role===BtaRole.ADMIN ? true : inject(Router).parseUrl("/noEntry");
};
