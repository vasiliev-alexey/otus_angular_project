import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/main/detail/details.component';
import { WalletComponent } from './components/main/wallet/wallet.component';
import { SettingsComponent } from '../settings/components/settings/settings.component';

import { MainComponent } from './components/main/main.component';
import { AuthGuard } from '../auth/services/auth.guard';
import { PriceListComponent } from '../prices/components/price-list/price-list/price-list.component';

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
        component: PriceListComponent,
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
