import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SETTINGS_KEY, SettingsState } from './settings.reducer';

const selectFeatureSettings = createFeatureSelector<SettingsState>(SETTINGS_KEY);
export const selectorSettings = createSelector(selectFeatureSettings, state => state);
