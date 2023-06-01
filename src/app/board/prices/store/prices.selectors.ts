import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PRICES_KEY } from './prices.reducers';
import { PricesState } from './prices.state';

const selectFeaturePrices = createFeatureSelector<PricesState>(PRICES_KEY);
export const selectPrices = (page: number , size: number)  => createSelector(selectFeaturePrices, state =>
  state.prices?.filter(  (v, i) =>  i>= page * size && i < (page+1) * size));

export const selectTotalPrices =  createSelector(selectFeaturePrices, state =>
  state.prices?.length || 0);
