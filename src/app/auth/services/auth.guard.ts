import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Store } from '@ngrx/store';
import { selectIsAuth } from '../store/auth.reducer';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  constructor(private store: Store) {}

  // canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
  //   return this.store.select(selectIsAuth);
  // }

  canActivateChild(): Observable<boolean> {
    return this.store.select(selectIsAuth);
  }
}
