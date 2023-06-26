import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { currencyReducer } from './store/currency.reducer';
import { HeaderComponent } from './header/header.component';
import { TuiButtonModule, TuiDataListModule, TuiHostedDropdownModule, TuiSvgModule } from '@taiga-ui/core';
import { LogoComponent } from './header/logo/logo.component';
import { TuiAvatarModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [HeaderComponent, LogoComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('currency', currencyReducer),
    TuiHostedDropdownModule,
    TuiDataListModule,
    TuiSvgModule,
    TuiAvatarModule,
    TuiButtonModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
