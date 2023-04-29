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
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WalletRoutingModule } from './wallet-routing.module';
import { WalletComponent } from './wallet.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './main/main.component';
import { TuiAvatarModule } from '@taiga-ui/kit';
import { DetailsComponent } from './main/detail/details.component';

@NgModule({
  declarations: [WalletComponent, HeaderComponent, LogoComponent, NavigationComponent, MainComponent, DetailsComponent],
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
