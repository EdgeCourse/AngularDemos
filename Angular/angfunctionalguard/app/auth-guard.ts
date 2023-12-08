import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  createUrlTreeFromSnapshot,
} from '@angular/router';
import { map } from 'rxjs';
import { UserService } from './user.service';

export const authGuard:CanActivateFn = (next: ActivatedRouteSnapshot) => {
  const service = inject(UserService);
  return service
    .isLoggedIn()
    .pipe(
      map((isLoggedIn) =>
        isLoggedIn ? true : createUrlTreeFromSnapshot(next, ['/', 'login'])
      )
    );
};
/*
Use the inject function from @angular/core, which provides dependency injection within a functional context (since Angular v14)

Define a reusable route guard function that can be used directly in the canActivateand canActivateChild properties of an Angular route definition.
*/ 
