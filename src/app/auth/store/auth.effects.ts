import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { fetchData, walletDataLoaded } from '../../board/wallet/store/wallet.reducer';

@Injectable()
export class AuthEffects {
  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchData),
      switchMap(() =>
        of([]).pipe(
          map(_ => walletDataLoaded({ code: 'Loaded' })),
          catchError(() => of({ type: '[ERRR] Loaded Error' }))
        )
      )
    );
  });

  constructor(private actions$: Actions) {}
}
