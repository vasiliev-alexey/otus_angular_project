import { createReducer, on } from '@ngrx/store';
import { Price } from './prices.models';
import { loadedPrices } from './prices.actions';

export const PRICES_KEY = 'prices';

export interface PricesState {
  prices?: Array<Price>;
}

const initialState: PricesState = {};

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
