import {createAction, createReducer, on} from "@ngrx/store";


export const SETTINGS_KEY = 'auth';
const actionType = '[SETTINGS]';
const SETTINGS_SAVE = `${actionType} save`;
export const saveSettings = createAction(SETTINGS_SAVE);



export interface SettingsState {
  currencyCode?: string;
  locationCode?: string;

}

const initialState: SettingsState = {
};

export const settingsReducer = createReducer(
  initialState
  // on(
  //   logout,
  //   (state, action): AuthState => ({
  //     isAuth: false,
  //     userName: undefined,
  //   })
  // )
);
