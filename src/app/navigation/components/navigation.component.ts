import { Component, inject, OnInit } from '@angular/core';
import { tuiIconGridLarge, tuiIconSettingsLarge } from '@taiga-ui/icons';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../../@core/services/auth.service';

@Component({
  selector: 'wallet-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  private router = inject(Router);
  private authService = inject(AuthService);
  readonly isAuth = new BehaviorSubject(false);

  currentSelectedItem = '';

  protected readonly tuiIconSettingsLarge = tuiIconSettingsLarge;
  protected readonly tuiIconGridLarge = tuiIconGridLarge;

  navigate(wallet: string) {
    this.currentSelectedItem = wallet;
    this.router.navigateByUrl(wallet);
  }

  ngOnInit(): void {
    this.authService
      .isAuthenticated()
      .pipe(map(val => this.isAuth.next(val)))
      .subscribe();
  }
}
