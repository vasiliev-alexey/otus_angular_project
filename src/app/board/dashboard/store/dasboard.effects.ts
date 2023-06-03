import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AuthService } from '../../../@core/services/auth.service';
import { DashboardBuyService } from '../services/dashboard.buy.service';
import { map, switchMap } from 'rxjs/operators';
import { catchError, exhaustMap, of } from 'rxjs';
import {
  buyCoins,
  coinsBought,
  loadedLastTransactions,
  loadedPortfolio,
  loadLastTransactions,
  loadPortfolio,
  sellCoins,
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
      ofType(buyCoins, sellCoins),
      switchMap(marketParams =>
        this.authService.userId().pipe(
          exhaustMap(() =>
            this.dashboardBuyService.buyCoin(marketParams).pipe(
              map(() => {
                return coinsBought();
              }),
              catchError(() => of({ type: '[ERROR] Loaded Error' }))
            )
          )
        )
      )
    );
  });

  loadLastTransactions = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadLastTransactions),
      switchMap(() =>
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
      switchMap(() =>
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
