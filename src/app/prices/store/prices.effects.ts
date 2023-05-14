import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadedPrices, loadPrices } from './prices.actions';
import { exhaustMap, map, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { PricesService } from '../services/prices.service';
import { loadedSettings } from '../../settings/store/settings.actions';

@Injectable()
export class PricesEffects {
  private priceService = inject(PricesService);
  constructor(private actions$: Actions) {}

  loadMarkets = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPrices),
      switchMap(v =>
        this.priceService.getAll(v).pipe(
          map(data => {
            return loadedPrices({ prices: data });
          })
        )
      )
    );
  });
}
