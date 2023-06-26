import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadedPrices, loadPrices } from './prices.actions';
import { map, switchMap } from 'rxjs/operators';
import { PricesService } from '../services/prices.service';

@Injectable()
export class PricesEffects {
  private priceService = inject(PricesService);
  constructor(private actions$: Actions) {}

  loadMarkets = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPrices),
      switchMap(() =>
        this.priceService.getAll().pipe(
          map(data => {
            return loadedPrices({ prices: data });
          })
        )
      )
    );
  });
}
