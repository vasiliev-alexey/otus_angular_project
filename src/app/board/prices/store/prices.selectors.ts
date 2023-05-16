import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PRICES_KEY} from './prices.reducers';
import {PricesState} from "./prices.state";

const selectFeaturePrices = createFeatureSelector<PricesState>(PRICES_KEY);
export const selectPrices = createSelector(selectFeaturePrices, state => state.prices);
