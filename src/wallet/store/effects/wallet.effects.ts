import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { fetchData, walletDataLoaded } from '../reducers/wallet';

@Injectable()
export class WalletEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchData),
      mergeMap(() =>
        of([]).pipe(
          map(movies => walletDataLoaded({ code: 'Loaded' })),
          catchError(() => of({ type: '[ERRR] Loaded Error' }))
        )
      )
    )
  );

  constructor(private actions$: Actions) {}
}
