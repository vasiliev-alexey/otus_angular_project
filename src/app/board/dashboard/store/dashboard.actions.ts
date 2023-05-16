import { createAction, props } from '@ngrx/store';
import { MarketParams, PortfolioList, TransactionList } from './dashboard.model';

const actionType = '[DASHBOARD]';
const BUY_COINS = `${actionType} buyCoins`;
const BOUGHT_COINS = `${actionType} coinsBought`;

const SELL_COINS = `${actionType} sellCoins`;
const SOLD_COINS = `${actionType} soldCoins`;

const LOAD_LAST_TRANSACTIONS = `${actionType} load last transactions`;
const LOADED_LAST_TRANSACTIONS = `${actionType} loaded last transactions`;
const LOAD_PORTFOLIO = `${actionType} load portfolio`;
const LOADED_PORTFOLIO = `${actionType} loaded portfolio`;

export const buyCoins = createAction(BUY_COINS, props<MarketParams>());
export const coinsBought = createAction(BOUGHT_COINS);
export const loadLastTransactions = createAction(LOAD_LAST_TRANSACTIONS);
export const loadPortfolio = createAction(LOAD_PORTFOLIO);
export const loadedLastTransactions = createAction(LOADED_LAST_TRANSACTIONS, props<TransactionList>());
export const loadedPortfolio = createAction(LOADED_PORTFOLIO, props<PortfolioList>());

export const sellCoins = createAction(SELL_COINS, props<MarketParams>());
export const soldCoins = createAction(SOLD_COINS);
