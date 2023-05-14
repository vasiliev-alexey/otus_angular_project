import { inject, Injectable } from '@angular/core';
import { EMPTY, Observable, of, switchMap } from 'rxjs';
import { Settings } from '../store/settings.model';
import { AuthService } from '../../@core/services/auth.service';
import { map, tap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable()
export class SettingService {
  private authService = inject(AuthService);
  private firestore: AngularFirestore = inject(AngularFirestore);

  saveSettings(settings: Settings): Observable<boolean> {
    return this.authService.userId().pipe(
      switchMap(userId => {
        console.log('setting saved by ', userId, settings);

        const currSettings = this.firestore
          .collection('settings', ref => ref.where('userId', '==', userId))
          .get()
          .subscribe(data => {
            console.log('empty', data.empty);

            if (data.empty) {
              this.firestore
                .collection('settings')
                .add({ userId, locationCode: settings.locationCode, currencyCode: settings.currencyCode });
            } else {
              this.firestore
                .collection('settings')
                .doc(data.docs.pop()?.id)
                .update({ locationCode: settings.locationCode || '', currencyCode: settings.currencyCode || '' });
            }

            data.forEach(el => console.log(el.data()));
          });
        console.log(currSettings);
        return of(true);
      })
    );
  }

  loadSettings(): Observable<Settings> {
    return this.authService.userId().pipe(
      switchMap(userId => {
        return this.firestore
          .collection('settings', ref => ref.where('userId', '==', userId))
          .valueChanges()
          .pipe(map(val => (val.length > 0 ? (val[0] as Settings) : ({} as Settings))));
      })
    );
  }
}
