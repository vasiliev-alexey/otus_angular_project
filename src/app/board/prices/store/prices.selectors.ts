import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PRICES_KEY, PricesState } from './prices.reducers';

const selectFeaturePrices = createFeatureSelector<PricesState>(PRICES_KEY);
export const selectPrices = createSelector(selectFeaturePrices, state => state.prices);
