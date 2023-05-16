import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AuthService } from '../../../@core/services/auth.service';
import { DashboardBuyService } from '../services/dashboard.buy.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { catchError, exhaustMap, of } from 'rxjs';
import {
  buyCoins,
  coinsBought,
  loadedLastTransactions,
  loadedPortfolio,
  loadLastTransactions,
  loadPortfolio,
} from './dashboard.actions';
import { DashboardTransactionService } from '../services/dashboard.transaction.service';
import { DashboardPortfolioService } from '../services/dashboard.portfolio.service';

@Injectable()
export class DashboardEffects {
  private authService = inject(AuthService);
  private dashboardBuyService = inject(DashboardBuyService);
  private dashboardTransactionService = inject(DashboardTransactionService);
  private dashboardPortfolioService = inject(DashboardPortfolioService);

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

  loadLastTransactions = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadLastTransactions),
      switchMap(v =>
        this.authService.userId().pipe(
          exhaustMap(vr =>
            this.dashboardTransactionService.loadLastTransactions(vr).pipe(
              map(p => {
                return loadedLastTransactions({ transactions: p });
              }),
              catchError(() => of({ type: '[ERRR] Loaded Error' }))
            )
          )
        )
      )
    );
  });

  loadUserPortfolio = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPortfolio),
      switchMap(_ =>
        this.authService.userId().pipe(
          exhaustMap(vr =>
            this.dashboardPortfolioService.loadUserPortfolio(vr).pipe(
              map(p => {
                return loadedPortfolio({ portFolio: p });
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
