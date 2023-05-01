import { currencyReducer, CurrencyState } from './currency';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { WALLET_KEY, walletReducer, WalletState } from './wallet';
import { AUTH_KEY, authReducer, AuthState, clearStateMetaReducer, logout } from './auth.reducer';

export interface State {
  currency: CurrencyState;
  [WALLET_KEY]: WalletState;
  [AUTH_KEY]: AuthState;
}

export const reducers: ActionReducerMap<State> = {
  currency: currencyReducer,
  [WALLET_KEY]: walletReducer,
  [AUTH_KEY]: authReducer,
};

export const metaReducers: MetaReducer<State>[] = [clearStateMetaReducer];
