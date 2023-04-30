import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiButtonModule,
  TUI_BUTTON_OPTIONS,
  TuiSvgModule,
  TuiHostedDropdownModule,
  TuiDataListModule,
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { metaReducers, reducers } from './store/reducers';
import { WalletRoutingModule } from './wallet-routing.module';
import { WalletComponent } from './wallet.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './main/main.component';
import { TuiAvatarModule } from '@taiga-ui/kit';
import { DetailsComponent } from './main/detail/details.component';
import { PricesComponent } from './main/prices/prices.component';
import { SettingsComponent } from './main/settings/settings.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { WalletEffects } from './store/effects/wallet.effects';
import { effects } from './store/effects';

@NgModule({
  declarations: [
    WalletComponent,
    HeaderComponent,
    LogoComponent,
    NavigationComponent,
    MainComponent,
    DetailsComponent,
    PricesComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    WalletRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiAvatarModule,
    TuiSvgModule,
    TuiHostedDropdownModule,
    TuiDataListModule,
    EffectsModule.forRoot(effects),
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
    {
      provide: TUI_BUTTON_OPTIONS,
      useValue: {
        appearance: 'flat',
        size: 'm',
        shape: 'rounded',
      },
    },
  ],
  bootstrap: [WalletComponent],
})
export class WalletModule {}
