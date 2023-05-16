import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SETTINGS_KEY, SettingsState } from './settings.reducer';

const selectFeatureSettings = createFeatureSelector<SettingsState>(SETTINGS_KEY);
export const selectSettings = createSelector(selectFeatureSettings, state => state);
