import { createAction, props } from '@ngrx/store';
import { BuyParams } from './dashboard.model';

const actionType = '[DASHBOARD]';
const BUY_COINS = `${actionType} buyCoins`;

export const buyCoins = createAction(BUY_COINS, props<BuyParams>());
