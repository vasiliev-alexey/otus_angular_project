import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from '@ngrx/store';

const actionType = '[CURRENCY]';
const CURRENCY_SET = `${actionType} set`;
const CURRENCY_CLEAR = `${actionType} clear`;
export const setCurrency = createAction(CURRENCY_SET, props<{ code: string }>());
export const clearCurrency = createAction(CURRENCY_CLEAR);

export interface CurrencyState {
  code: string;
}

const initialState: CurrencyState = {
  code: 'USD',
};

export const currencyReducer = createReducer(
  initialState,
  on(
    setCurrency,
    (state, action): CurrencyState => ({
      ...state,
      code: action.code,
    })
  )
);

const selectFeatureCurrency = createFeatureSelector<CurrencyState>('currency');
export const selectCurrency = createSelector(selectFeatureCurrency, state => state.code);
