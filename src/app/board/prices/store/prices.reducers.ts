import { createReducer, on } from '@ngrx/store';
import { Price } from './prices.models';
import { loadedPrices } from './prices.actions';
import { initialState, PricesState } from './prices.state';

export const PRICES_KEY = 'prices';

export const priceReducer = createReducer(
  initialState,

  on(
    loadedPrices,
    (state, action): PricesState => ({
      ...state,
      prices: action.prices,
    })
  )
);
