import { ChangeDetectionStrategy, Component, inject, ViewChild } from '@angular/core';
import { TUI_ARROW } from '@taiga-ui/kit';
import { TuiHostedDropdownComponent } from '@taiga-ui/core';
import { Store } from '@ngrx/store';
import { selectCurrency, setCurrency } from '../store/reducers/currency';

import { tuiIconDollarSignLarge } from '@taiga-ui/icons';

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

  readonly items = ['Login', 'Logout'];

  open = false;

  currencyOpen = false;

  readonly currencies = [
    {
      label: `Currencies`,
      items: [
        {
          label: 'Dollar',
          routerLink: '/components/input',
        },
        {
          label: 'Euro',
          routerLink: '/components/select',
        },
        {
          label: 'Ruble',
          routerLink: '/components/data-list',
        },
      ],
    },
  ];

  code$ = this.store.select(selectCurrency);

  onCurrencyOpen(code: string) {
    console.log('onCurrencyOpen');
    this.currencyOpen = false;

    this.store.dispatch(setCurrency({ code }));

    this.component?.nativeFocusableElement?.focus();
  }

  onClick(): void {
    console.log('ss');
    this.open = false;
    this.component?.nativeFocusableElement?.focus();
  }

  protected readonly tuiIconDollarSignLarge = tuiIconDollarSignLarge;
}
