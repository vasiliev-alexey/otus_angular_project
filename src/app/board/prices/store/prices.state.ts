import { Price } from './prices.models';

export interface PricesState {
  prices?: Array<Price>;
  isLoad: boolean;
}

export const initialState: PricesState = {
  isLoad: true,
};
