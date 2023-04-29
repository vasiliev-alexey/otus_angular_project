import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from "./main/detail/details.component";
import { WalletComponent } from "./main/wallet/wallet.component";
import { PricesComponent } from "./main/prices/prices.component";
import { SettingsComponent } from "./main/settings/settings.component";




const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },

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
  },  {
    path: 'settings',
    component: SettingsComponent,
  },

  { path: '**', redirectTo: '/' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class WalletRoutingModule {}
