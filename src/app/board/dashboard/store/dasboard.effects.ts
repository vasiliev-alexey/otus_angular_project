import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AuthService } from '../../../@core/services/auth.service';
import { DashboardBuyService } from '../services/dashboard.buy.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { catchError, EMPTY, exhaustMap, of } from 'rxjs';
import { buyCoins, coinsBought } from './dashboard.actions';

@Injectable()
export class DashboardEffects {
  private authService = inject(AuthService);
  private dashboardBuyService = inject(DashboardBuyService);

  buyCoins = createEffect(() => {
    return this.actions$.pipe(
      ofType(buyCoins),
      switchMap(v =>
        this.authService.userId().pipe(
          tap(val => console.log('T', val, v.coinCode)),
          exhaustMap(vr =>
            this.dashboardBuyService.buyCoin(v).pipe(
              map(p => {
                return coinsBought();
              }),
              catchError(() => of({ type: '[ERRR] Loaded Error' }))
            )
          )
        )
      )
    );
  });

  constructor(private actions$: Actions) {}
}
