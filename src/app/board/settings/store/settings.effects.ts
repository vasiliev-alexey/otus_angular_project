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
      switchMap(v =>
        this.authService.userId().pipe(
          //   tap(val => console.log('T', val, v.currencyCode)),
          exhaustMap(_vr =>
            this.settingsService.loadSettings().pipe(
              map(data => {
                console.log('loaded data', data);
                return loadedSettings(data);
              }),
              catchError(() => of({ type: '[ERRR] Loaded Error' }))
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
    // FeatureActions.actionOne is not dispatched
  );

  constructor(private actions$: Actions) {}
}
