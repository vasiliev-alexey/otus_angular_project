import { WalletEffects } from './wallet.effects';
import { currencyReducer, CurrencyState } from './currency.reducer';
import { WALLET_KEY, walletReducer, WalletState } from './wallet.reducer';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { clearStateMetaReducer } from '../../auth/store/auth.reducer';

export const effects = [WalletEffects];
export interface State {
  currency: CurrencyState;
  [WALLET_KEY]: WalletState;
  // [AUTH_KEY]: AuthState;
}

export const reducers: ActionReducerMap<State> = {
  currency: currencyReducer,
  [WALLET_KEY]: walletReducer,
  // [AUTH_KEY]: authReducer,
};

export const metaReducers: MetaReducer<State>[] = [clearStateMetaReducer];
