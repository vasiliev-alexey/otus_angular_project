import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DASHBOARD_KEY, DashBoardState } from "./dashboard.reducer";

const selectFeatureDashboard = createFeatureSelector<DashBoardState>(DASHBOARD_KEY);
export const selectLastTransactions = createSelector(selectFeatureDashboard, state => state.lastTransactions);
