import {
  Action,
  ActionReducer,
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';

export const AUTH_KEY = 'auth';
const actionType = '[AUTH]';
const AUTH_LOGIN = `${actionType} login`;
const AUTH_LOGOUT = `${actionType} logout`;
export const login = createAction(AUTH_LOGIN, props<{ userName: string }>());
export const logout = createAction(AUTH_LOGOUT);

export interface AuthState {
  userName?: string;
  isAuth: boolean;
}

const initialState: AuthState = {
  isAuth: false,
};

export const authReducer = createReducer(
  initialState,
  on(
    login,
    (state, action): AuthState => ({
      ...state,
      isAuth: true,
      userName: action.userName,
    })
  )
  // on(
  //   logout,
  //   (state, action): AuthState => ({
  //     isAuth: false,
  //     userName: undefined,
  //   })
  // )
);

const selectAuth = createFeatureSelector<AuthState>(AUTH_KEY);
export const selectUserName = createSelector(selectAuth, state => state.userName);
export const selectIsAuth = createSelector(selectAuth, state => state.isAuth);

export function clearStateMetaReducer<State extends Record<string, any>>(
  reducer: ActionReducer<State>
): ActionReducer<State> {
  return function clearStateFn(state?: State, action?: Action) {
    if (action?.type === AUTH_LOGOUT) {
      state = {} as State;
    }
    return reducer(state, <Action>action);
  };
}
