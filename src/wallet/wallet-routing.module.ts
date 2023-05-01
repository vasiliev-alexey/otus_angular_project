import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './main/detail/details.component';
import { WalletComponent } from './main/wallet/wallet.component';
import { PricesComponent } from './main/prices/prices.component';
import { SettingsComponent } from './main/settings/settings.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthGuard } from './services/AuthGuard';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },

  // { path: '', component: NavigationComponent },
  {
    path: '',
    component: MainComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'details',
        component: DetailsComponent,
      },
      {
        path: 'wallet',
        component: WalletComponent,
      },

      {
        path: 'prices',
        component: PricesComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
    ],
  },

  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class WalletRoutingModule {}
