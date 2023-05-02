import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/main/detail/details.component';
import { WalletComponent } from './components/main/wallet/wallet.component';
import { PricesComponent } from './components/main/prices/prices.component';
import { SettingsComponent } from './components/main/settings/settings.component';

import { MainComponent } from './components/main/main.component';
import { AuthGuard } from '../auth/services/AuthGuard';

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
