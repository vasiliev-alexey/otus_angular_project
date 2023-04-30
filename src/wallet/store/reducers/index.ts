import { currencyReducer, CurrencyState } from './currency';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { WALLET_KEY, walletReducer, WalletState } from './wallet';

export interface State {
  currency: CurrencyState;
  [WALLET_KEY]: WalletState;
}

export const reducers: ActionReducerMap<State> = {
  currency: currencyReducer,
  [WALLET_KEY]: walletReducer,
};
export const metaReducers: MetaReducer<State>[] = [];
