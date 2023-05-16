import { Price } from './prices.models';

export interface PricesState {
  prices?: Array<Price>;
}

export const initialState: PricesState = {};
