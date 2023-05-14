import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SettingsState } from '../../settings/store/settings.reducer';
import { PRICES_KEY, PricesState } from './prices.reducers';

const selectorFeaturePrices = createFeatureSelector<PricesState>(PRICES_KEY);
export const selectorPrices = createSelector(selectorFeaturePrices, state => state.prices);
