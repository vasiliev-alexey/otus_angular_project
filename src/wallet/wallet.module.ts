import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WalletRoutingModule } from './wallet-routing.module';
import { WalletComponent } from './wallet.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './main/main.component';
import { AsideComponent } from './aside/aside.component';

@NgModule({
  declarations: [
    WalletComponent,
    HeaderComponent,
    LogoComponent,
    NavigationComponent,
    MainComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule,
    WalletRoutingModule
  ],
  providers: [],
  bootstrap: [WalletComponent]
})
export class WalletModule { }
