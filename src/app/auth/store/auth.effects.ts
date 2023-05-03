import {inject, Injectable} from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of } from 'rxjs';
import {map, mergeMap, switchMap, tap} from 'rxjs/operators';
import { fetchData, walletDataLoaded } from '../../wallet/store/wallet.reducer';
import {Store} from "@ngrx/store";
import {selectIsAuth} from "./auth.reducer";

@Injectable()
export class AuthEffects {



  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchData),
      switchMap(() =>
        of([]).pipe(

          map(movies => walletDataLoaded({ code: 'Loaded' })),
          catchError(() => of({ type: '[ERRR] Loaded Error' }))
        )
      )
    );
  });

  constructor(private actions$: Actions) {}
}
