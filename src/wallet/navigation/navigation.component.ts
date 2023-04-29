import { Component, inject } from "@angular/core";
import { tuiIconGridLarge, tuiIconSettingsLarge } from '@taiga-ui/icons';
import { Router } from "@angular/router";

@Component({
  selector: 'wallet-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {

   private router = inject(Router);


  protected readonly tuiIconSettingsLarge = tuiIconSettingsLarge;
  protected readonly tuiIconGridLarge = tuiIconGridLarge;


  navigate(wallet: string) {
    this.router.navigateByUrl(wallet)
  }
}
