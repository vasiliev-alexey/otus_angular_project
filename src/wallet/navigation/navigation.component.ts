import { Component } from '@angular/core';
import { tuiIconGridLarge, tuiIconSettingsLarge } from '@taiga-ui/icons';

@Component({
  selector: 'wallet-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  readonly avatarUrl = `https://taiga-ui.dev/assets/images/avatar.jpg`;

  protected readonly tuiIconSettingsLarge = tuiIconSettingsLarge;
  protected readonly tuiIconGridLarge = tuiIconGridLarge;
}
