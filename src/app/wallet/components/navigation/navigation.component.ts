import { Component, inject, OnInit } from '@angular/core';
import { tuiIconGridLarge, tuiIconSettingsLarge } from '@taiga-ui/icons';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUserName } from '../../../auth/store/auth.reducer';
import { map, switchMap, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'wallet-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  private router = inject(Router);

  private store = inject(Store);
  readonly isAuth = new BehaviorSubject(false);

  currentSelectedItem = '';

  protected readonly tuiIconSettingsLarge = tuiIconSettingsLarge;
  protected readonly tuiIconGridLarge = tuiIconGridLarge;

  navigate(wallet: string) {
    this.currentSelectedItem = wallet;
    this.router.navigateByUrl(wallet);
  }

  ngOnInit(): void {
    console.log('on init');
    this.store
      .select(selectUserName)
      .pipe(
        tap(() => console.log('rrrrrrr')),
        map(user => this.isAuth.next(user == 'alex'))
      )
      .subscribe();
  }
}
