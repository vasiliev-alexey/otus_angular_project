import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { TUI_SANITIZER, TUI_BUTTON_OPTIONS } from '@taiga-ui/core';
import { isDevMode, NgModule } from '@angular/core';

import { WalletComponent } from '../app/wallet/components/wallet.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
// import { effects } from '../app/wallet/store';
import { AuthModule } from '../app/auth/auth.module';
import { WalletModule } from '../app/wallet/wallet.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SettingsModule } from '../app/settings/settings.module';
import { CoreModule } from '../app/@core/core.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    EffectsModule.forRoot([]),
    WalletModule,
    StoreModule.forRoot(),
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
export class AppModule {}
