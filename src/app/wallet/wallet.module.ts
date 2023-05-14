import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletRoutingModule } from './wallet-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TuiAlertModule,
  TuiButtonModule,
  TuiDataListModule,
  TuiDialogModule,
  TuiHostedDropdownModule,
  TuiRootModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import { TuiAvatarModule } from '@taiga-ui/kit';
import { WalletComponent } from './components/wallet.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainComponent } from './components/main/main.component';
import { DetailsComponent } from './components/main/detail/details.component';
import { StoreModule } from '@ngrx/store';
import { currencyReducer } from './store/currency.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsModule } from '../settings/settings.module';
import { PricesModule } from '../prices/prices.module';
import { APP_CONFIG, Configuration } from '../config/appConfig';

@NgModule({
  declarations: [WalletComponent, HeaderComponent, LogoComponent, NavigationComponent, MainComponent, DetailsComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SettingsModule,
    CommonModule,
    WalletRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiAvatarModule,
    TuiSvgModule,
    TuiHostedDropdownModule,
    TuiDataListModule,
    PricesModule,
    StoreModule.forFeature('currency', currencyReducer),
  ],
  providers: [{ provide: APP_CONFIG, useValue: Configuration }],
})
export class WalletModule {}
