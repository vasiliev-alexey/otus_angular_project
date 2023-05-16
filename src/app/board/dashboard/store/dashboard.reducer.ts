import { createAction, createReducer, on } from '@ngrx/store';
import { buyCoins } from './dashboard.actions';

export const DASHBOARD_KEY = 'dashboard';

export interface DashBoardState {}

const initialState: DashBoardState = {};

export const dashboardReducer = createReducer(
  initialState,
  on(
    buyCoins,
    (state, action): DashBoardState => ({
      ...state,
    })
  )
);
