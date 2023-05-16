import { Component } from '@angular/core';

@Component({
  selector: 'wallet-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  readonly avatarUrl = `https://taiga-ui.dev/assets/images/avatar.jpg`;

  onClick($event: MouseEvent) {}
}
