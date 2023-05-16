import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from '@ngrx/store';
import { initialState } from './wallet.state';

import {WalletState} from "./wallet.state";
export const WALLET_KEY = 'main';
const actionType = '[WALLET]';
const CURRENCY_SET = `${actionType} set`;
const CURRENCY_LOADED = `${actionType} loaded`;
const CURRENCY_FETCH = `${actionType} fetch`;

export const setData = createAction(CURRENCY_SET, props<{ code: string }>());
export const fetchData = createAction(CURRENCY_FETCH, props<{ code: string }>());
export const walletDataLoaded = createAction(CURRENCY_LOADED, props<{ code: string }>());



export const walletReducer = createReducer(
  initialState,
  on(
    setData,
    (state, action): WalletState => ({
      ...state

    })
  )
);


