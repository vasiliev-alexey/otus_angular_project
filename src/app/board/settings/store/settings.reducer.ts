import { createAction, createReducer, on } from '@ngrx/store';
import { loadedSettings } from './settings.actions';

export const SETTINGS_KEY = 'settings';

const actionType = '[SETTINGS]';
const SETTINGS_SAVE = `${actionType} save`;
export const saveSettings = createAction(SETTINGS_SAVE);

export interface SettingsState {
  currencyCode?: string;
  locationCode?: string;
}

const initialState: SettingsState = {};

export const settingsReducer = createReducer(
  initialState,
  on(
    loadedSettings,
    (state, action): SettingsState => ({
      ...state,
      currencyCode: action.currencyCode,
      locationCode: action.locationCode,
    })
  )
);
