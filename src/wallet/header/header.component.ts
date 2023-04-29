import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TUI_ARROW } from '@taiga-ui/kit';
import { tuiIconBellLarge } from '@taiga-ui/icons';

@Component({
  selector: 'wallet-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly arrow = TUI_ARROW;

  readonly groups = [
    {
      label: `Components`,
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
  protected readonly tuiIconBellLarge = tuiIconBellLarge;
}
