import { createAction, props } from '@ngrx/store';
import { Settings } from '../../settings/store/settings.model';
import { Price, PriceList, PriceRequestParams } from './prices.models';

const actionType = '[PRICES]';
const PRICES_LOAD = `${actionType} load`;
const PRICES_LOADED = `${actionType} loaded`;

export const loadPrices = createAction(PRICES_LOAD, props<PriceRequestParams>());
export const loadedPrices = createAction(PRICES_LOADED, props<PriceList>());
