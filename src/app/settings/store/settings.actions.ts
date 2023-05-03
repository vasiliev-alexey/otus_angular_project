import {createAction} from "@ngrx/store";

export const SETTINGS_KEY = 'auth';
const actionType = '[SETTINGS]';
const SETTINGS_SAVE = `${actionType} save`;
const SETTINGS_SAVED = `${actionType} saved`;
export const saveSettings = createAction(SETTINGS_SAVE);
export const savedSettings = createAction(SETTINGS_SAVED);
