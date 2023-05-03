import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class SettingService {
  constructor() {}

  saveSettings(vr: string | undefined): Observable<boolean> {
    console.log('setting saved by ', vr);
    return of(true);
  }
}
