import {inject, Injectable} from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of } from 'rxjs';
import {map, mergeMap, tap} from 'rxjs/operators';
import {savedSettings, saveSettings} from "./settings.actions";
import {State, Store} from "@ngrx/store";
import {selectIsAuth} from "../../auth/store/auth.reducer";

@Injectable()
export class SettingsEffects {


  private  state = inject(State);
  loadData$ = createEffect(() => {

    // this.store.select(selectIsAuth).pipe(
    //   tap( v => console.log("auth" , v))
    //
    // ).subscribe();

    return this.actions$.pipe(
      ofType(saveSettings),
      mergeMap(() =>
        of([]).pipe(
          tap( () =>  {
            console.log("state", this.state.value.auth.userId);

          }),
          map(_ => savedSettings()),
          catchError(() => of({ type: '[ERRR] Loaded Error' }))
        )
      )
    );
  });

  constructor(private actions$: Actions) {}
}
