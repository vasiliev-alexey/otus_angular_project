import { createReducer, on } from '@ngrx/store';
import { loadedLastTransactions, loadLastTransactions, loadPortfolio } from './dashboard.actions';
import { Portfolio, Transactions, TransactionType } from './dashboard.model';

export const DASHBOARD_KEY = 'dashboard';

export interface DashBoardState {
  lastTransactions: Transactions[];
  portfolioList: Portfolio[];
}

const initialState: DashBoardState = {
  lastTransactions: [],
  portfolioList: [],
};

export const dashboardReducer = createReducer(
  initialState,
  on(loadedLastTransactions, (state, action): DashBoardState => {
    return {
      ...state,
      lastTransactions: action.transactions,
    };
  }),

  on(loadPortfolio, (state, action): DashBoardState => {
    const portList: Portfolio[] = [
      { coinCode: 'BTC', amount: 100, changePercent: -2 },
      { coinCode: 'DOGI', amount: 20, changePercent: 2 },
      { coinCode: 'USD', amount: 1000, changePercent: 0 },
    ];

    return {
      ...state,
      portfolioList: portList,
    };
  })
);
