import { createReducer, on } from "@ngrx/store";
import { loadedLastTransactions, loadLastTransactions } from "./dashboard.actions";
import { Transactions, TransactionType } from "./dashboard.model";

export const DASHBOARD_KEY = "dashboard";

export interface DashBoardState {
  lastTransactions: Transactions[];

}

const initialState: DashBoardState = {
  lastTransactions: []
};

export const dashboardReducer = createReducer(
  initialState,
  on(
    loadedLastTransactions,
    (state, action): DashBoardState => {



      return {
        ...state,
        lastTransactions: action.transactions


      };
    }
  )
);
