import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, EMPTY, exhaustMap, of } from 'rxjs';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { savedSettings, saveSettings } from './settings.actions';
import { State, Store } from '@ngrx/store';
import { selectIsAuth } from '../../auth/store/auth.reducer';
import { AuthService } from '../../@core/services/auth.service';
import { SettingService } from '../services/setting.service';
import { Router } from '@angular/router';

@Injectable()
export class SettingsEffects {
  private authService = inject(AuthService);

  private router = inject(Router);

  private settingsService = inject(SettingService);
  loadData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(saveSettings),
      switchMap(v =>
        this.authService.userId().pipe(
          tap(val => console.log('T', val, v.currencyCode)),
          exhaustMap(vr =>
            this.settingsService.saveSettings(vr).pipe(
              map(() => {
                return savedSettings();
              }),
              catchError(() => of({ type: '[ERRR] Loaded Error' }))
            )
          )
        )
      )
    );
  });

  returnToHome$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(savedSettings),
        tap(() => this.router.navigate(['/']))
      ),
    { dispatch: false }
    // FeatureActions.actionOne is not dispatched
  );

  constructor(private actions$: Actions) {}
}
