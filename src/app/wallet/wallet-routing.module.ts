import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WalletComponent } from '../board/wallet/components/wallet/wallet.component';
import { SettingsComponent } from '../board/settings/components/settings/settings.component';

import { AuthGuard } from '../auth/services/auth.guard';
import { PriceListComponent } from '../board/prices/components/price-list/price-list/price-list.component';
import { DashboardComponent } from '../board/dashboard/components/dashboard/dashboard.component';
import { MainComponent } from '../board/main/components/main/main.component';
import { BuyComponent } from '../board/dashboard/components/buy/buy.component';
import { SellComponent } from '../board/dashboard/components/sell/sell.component';
import { ConvertComponent } from '../board/dashboard/components/convert/convert.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },

  // { path: '', component: NavigationComponent },
  {
    path: '',
    component: MainComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          { path: '', component: BuyComponent },
          { path: 'buy', component: BuyComponent },
          { path: 'sell', component: SellComponent },
          { path: 'convert', component: ConvertComponent },
        ],
      },
      {
        path: 'main',
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
