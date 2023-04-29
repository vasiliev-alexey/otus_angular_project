import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { TUI_ARROW } from '@taiga-ui/kit';
import { TuiHostedDropdownComponent } from '@taiga-ui/core';

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
          label: 'Roubles',
          routerLink: '/components/data-list',
        },
      ],
    },
  ];

  onCurrencyOpen() {
    console.log('onCurrencyOpen');
    this.currencyOpen = false;
    this.component?.nativeFocusableElement?.focus();
  }

  onClick(): void {
    console.log('ss');
    this.open = false;
    this.component?.nativeFocusableElement?.focus();
  }
}
