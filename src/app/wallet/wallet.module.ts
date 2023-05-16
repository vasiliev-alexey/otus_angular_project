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
import { LandingComponent } from './components/landing/landing.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsModule } from '../board/settings/settings.module';
import { PricesModule } from '../board/prices/prices.module';
import { WalletModule as WM } from '../board/wallet/wallet.module';
import { APP_CONFIG, Configuration } from '../config/appConfig';
import { NavigationModule } from '../navigation/navigation.module';

import { HeaderModule } from '../header/header.module';
import { MainModule } from '../board/main/main.module';
import { DashboardModule } from '../board/dashboard/dashboard.module';
import { TuiTableModule } from '@taiga-ui/addon-table';

@NgModule({
  declarations: [LandingComponent],
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

    WM,
    DashboardModule,

    NavigationModule,
    HeaderModule,
    MainModule,
  ],
  providers: [{ provide: APP_CONFIG, useValue: Configuration }],
})
export class WalletModule {}
