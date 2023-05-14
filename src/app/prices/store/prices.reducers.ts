import { createAction, createReducer, on } from '@ngrx/store';
import { Price, PriceList } from './prices.models';
import { loadedSettings } from '../../settings/store/settings.actions';
import { SettingsState } from '../../settings/store/settings.reducer';
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
