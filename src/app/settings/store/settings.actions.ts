import { createAction, props } from '@ngrx/store';
import { Settings } from './settings.model';

const actionType = '[SETTINGS]';
const SETTINGS_SAVE = `${actionType} save`;
const SETTINGS_SAVED = `${actionType} saved`;
const SETTINGS_LOAD = `${actionType} load`;
const SETTINGS_LOADED = `${actionType} loaded`;
export const saveSettings = createAction(SETTINGS_SAVE, props<Settings>());
export const savedSettings = createAction(SETTINGS_SAVED);
export const loadSettings = createAction(SETTINGS_LOAD);
export const loadedSettings = createAction(SETTINGS_LOADED, props<Settings>());
