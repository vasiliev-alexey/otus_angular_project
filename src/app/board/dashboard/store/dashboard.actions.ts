import { createAction, props } from '@ngrx/store';
import { BuyParams } from './dashboard.model';

const actionType = '[DASHBOARD]';
const BUY_COINS = `${actionType} buyCoins`;
const BOUGHT_COINS = `${actionType} coinsBought`;
const LOAD_LAST_TRANSACTIONS = `${actionType} load last transactions`;

export const buyCoins = createAction(BUY_COINS, props<BuyParams>());
export const coinsBought = createAction(BOUGHT_COINS);
export const loadLastTransactions = createAction(LOAD_LAST_TRANSACTIONS);



