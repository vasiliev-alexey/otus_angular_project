import { InjectionToken } from '@angular/core';

export interface AppConfig {
  readonly URL: string;
}

export const Configuration: AppConfig = {
  URL: 'https://api.coingecko.com/api/v3',
};
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
