import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectIsAuth, selectUserName } from '../store/reducers/auth.reducer';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivateChild {
  constructor(private store: Store, private router: Router) {
    console.log('init gua');
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(selectIsAuth);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(selectIsAuth);
  }
}
