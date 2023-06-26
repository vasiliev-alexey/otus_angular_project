import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { selectIsAuth } from '../store/auth.reducer';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  constructor(private store: Store) {}

  canActivateChild(): Observable<boolean> {
    return this.store.select(selectIsAuth);
  }
}
