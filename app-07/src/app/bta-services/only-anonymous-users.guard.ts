import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthenticationService } from './authentication.service';

export const onlyAnonymousUsersGuard: CanActivateFn = (route, state) => {
  return !inject(AuthenticationService).isLoggedIn;
};
