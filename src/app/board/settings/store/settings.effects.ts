import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { loadedSettings, loadSettings, savedSettings, saveSettings } from './settings.actions';
import { AuthService } from '../../../@core/services/auth.service';
import { SettingService } from '../services/setting.service';
import { Router } from '@angular/router';

@Injectable()
export class SettingsEffects {
  private authService = inject(AuthService);

  private router = inject(Router);

  private settingsService = inject(SettingService);

  saveSettings = createEffect(() => {
    return this.actions$.pipe(
      ofType(saveSettings),
      switchMap(v =>
        this.settingsService.saveSettings(v).pipe(
          map(() => {
            return savedSettings();
          }),
          catchError(() => of({ type: '[ERRR] Loaded Error' }))
        )
      )
    );
  });

  loadSettings = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadSettings),
      switchMap(() =>
        this.authService.userId().pipe(
          exhaustMap(() =>
            this.settingsService.loadSettings().pipe(
              map(data => {
                console.log('loaded data', data);
                return loadedSettings(data);
              }),
              catchError(() => of({ type: '[ERR] Loaded Error' }))
            )
          )
        )
      )
    );
  });

  returnToHome$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(savedSettings),
        tap(() => this.router.navigate(['/']))
      );
    },
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
