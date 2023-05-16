import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiFormatDatePipeModule,
  TuiHintModule,
  TuiHostedDropdownModule,
  TuiLabelModule,
  TuiLinkModule,
  TuiSvgModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
  TuiCardModule,
  TuiCurrencyPipeModule,
  TuiInputCardGroupedModule,
  TuiMoneyModule,
} from '@taiga-ui/addon-commerce';
import { ChartComponent } from './components/chart/chart.component';
import { TuiAxesModule, TuiLineChartModule } from '@taiga-ui/addon-charts';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import {
  TextMaskModule,
  TuiAvatarModule,
  TuiBadgeModule,
  TuiCheckboxModule,
  TuiInputCountModule,
  TuiInputModule,
  TuiInputNumberModule,
  TuiTabsModule,
  TuiTilesModule,
} from '@taiga-ui/kit';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { ActionsComponent } from './components/actions/actions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuyComponent } from './components/buy/buy.component';
import { RouterOutlet } from '@angular/router';
import { SellComponent } from './components/sell/sell.component';
import { ConvertComponent } from './components/convert/convert.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DashboardEffects } from './store/dasboard.effects';
import { DASHBOARD_KEY, dashboardReducer } from './store/dashboard.reducer';
import { DashboardBuyService } from './services/dashboard.buy.service';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { DashboardUpDownPipe } from './pipes/dashboard.updown.pipe';


@NgModule({
  declarations: [
    DashboardComponent,
    ChartComponent,
    PortfolioComponent,
    TransactionsComponent,
    ActionsComponent,
    BuyComponent,
    SellComponent,
    ConvertComponent,
    DashboardUpDownPipe,
  ],
  imports: [
    CommonModule,
    TuiTableModule,
    TuiLabelModule,
    TuiMoneyModule,
    TuiAxesModule,
    TuiLineChartModule,
    TuiCheckboxModule,
    TuiAvatarModule,
    TuiButtonModule,
    TuiTabsModule,
    FormsModule,
    TuiInputCountModule,
    TuiSvgModule,
    TuiTilesModule,
    RouterOutlet,
    TuiLinkModule,
    TextMaskModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiInputNumberModule,
    TuiTextfieldControllerModule,
    TuiCurrencyPipeModule,
    TuiHostedDropdownModule,
    TuiDataListModule,
    TuiInputCardGroupedModule,
    TuiCardModule,
    TuiHintModule,
    EffectsModule.forFeature([DashboardEffects]),
    StoreModule.forFeature(DASHBOARD_KEY, dashboardReducer),
    TuiFormatDatePipeModule,
    TuiBadgeModule,
  ],
  providers: [DashboardBuyService],
})
export class DashboardModule {}
