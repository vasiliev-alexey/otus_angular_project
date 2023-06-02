import { ChangeDetectionStrategy, Component, inject, ViewChild } from '@angular/core';
import { TUI_ARROW } from '@taiga-ui/kit';
import { TuiHostedDropdownComponent } from '@taiga-ui/core';
import { Store } from '@ngrx/store';
import { selectCurrency, setCurrency } from '../store/currency.reducer';

import { tuiIconDollarSignLarge } from '@taiga-ui/icons';
import { login, logout } from '../../auth/store/auth.reducer';
import { Router } from '@angular/router';

const COMPONENTS_PATH = 'components';

@Component({
  selector: 'wallet-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly arrow = TUI_ARROW;

  @ViewChild(TuiHostedDropdownComponent)
  component?: TuiHostedDropdownComponent;

  private store = inject(Store);
  private router = inject(Router);

  readonly items = ['Login', 'Logout'];

  open = false;

  currencyOpen = false;

  readonly currencies = [
    {
      label: `Currencies`,
      items: [
        {
          label: 'USD',
          routerLink: `/${COMPONENTS_PATH}/input`,
        },
        {
          label: 'EUR',
          routerLink: `/${COMPONENTS_PATH}/select`,
        },
        {
          label: 'RUB',
          routerLink: `/${COMPONENTS_PATH}/data-list`,
        },
      ],
    },
  ];

  code$ = this.store.select(selectCurrency);

  onCurrencyOpen(code: string) {
    this.currencyOpen = false;
    this.store.dispatch(setCurrency({ code }));
    this.component?.nativeFocusableElement?.focus();
  }

  onClick(item: string): void {
    console.log(item);

    if (item == 'Login') {
      this.store.dispatch(login({ userName: 'alex' }));
    } else {
      this.router.navigateByUrl('/');
      this.store.dispatch(logout());
    }

    this.open = false;
    this.component?.nativeFocusableElement?.focus();
  }

  protected readonly tuiIconDollarSignLarge = tuiIconDollarSignLarge;
}
