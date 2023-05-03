import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsAuth, selectUserId } from '../../auth/store/auth.reducer';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private store = inject(Store);

  isAuthenticated = () => this.store.select(selectIsAuth);
  userId = () => this.store.select(selectUserId);
}
