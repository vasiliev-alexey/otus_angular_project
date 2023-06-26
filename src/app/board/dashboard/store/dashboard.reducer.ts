import { createReducer, on } from '@ngrx/store';
import { loadedLastTransactions, loadedPortfolio } from './dashboard.actions';
import { Portfolio, Transactions } from './dashboard.model';

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
  on(loadedPortfolio, (state, action): DashBoardState => {
    return {
      ...state,
      portfolioList: action.portFolio,
    };
  })
);
