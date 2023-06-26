import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceListComponent } from './components/price-list/price-list/price-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TuiAvatarModule, TuiBadgeModule, TuiInputModule } from '@taiga-ui/kit';
import { TuiTableModule, TuiTablePaginationModule } from '@taiga-ui/addon-table';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { TuiLoaderModule, TuiPrimitiveTextfieldModule, TuiScrollbarModule, TuiSvgModule } from '@taiga-ui/core';
import { EffectsModule } from '@ngrx/effects';

import { StoreModule } from '@ngrx/store';

import { priceReducer } from './store/prices.reducers';
import { PricesEffects } from './store/prices.effects';
import { TuiOverscrollModule } from '@taiga-ui/cdk';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkFixedSizeVirtualScroll } from '@angular/cdk/scrolling';
import { CoreModule } from '../../@core/core.module';

@NgModule({
  declarations: [PriceListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TuiAvatarModule,
    TuiTablePaginationModule,
    TuiMoneyModule,
    TuiInputModule,
    TuiLoaderModule,
    TuiPrimitiveTextfieldModule,

    EffectsModule.forFeature([PricesEffects]),
    StoreModule.forFeature('prices', priceReducer),
    TuiOverscrollModule,
    FormsModule,
    ReactiveFormsModule,
    CdkFixedSizeVirtualScroll,
    TuiTableModule,
    TuiScrollbarModule,
    CoreModule,
    TuiBadgeModule,
    TuiSvgModule,
  ],
})
export class PricesModule {}
//https://www.coingecko.com/en/api/documentation
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false&locale=ru
