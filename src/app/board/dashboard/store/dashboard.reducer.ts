import { createReducer, on } from "@ngrx/store";
import { loadLastTransactions } from "./dashboard.actions";
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
    loadLastTransactions,
    (state, action): DashBoardState => {

      const trans: Transactions[] = [];
      trans.push({ transactionAmount: 10, transactionDate:  new Date(), transactionType: TransactionType.BUY,
        coinCode: "BIT" });
      trans.push({ transactionAmount: 99, transactionDate:  new Date(), transactionType: TransactionType.SELL,
        coinCode: "DOG" });

      return {
        ...state,
        lastTransactions: trans


      };
    }
  )
);
