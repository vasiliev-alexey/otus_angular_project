import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TuiButtonModule, TuiLabelModule, TuiLinkModule, TuiSvgModule } from "@taiga-ui/core";
import { TuiMoneyModule } from "@taiga-ui/addon-commerce";
import { ChartComponent } from './components/chart/chart.component';
import { TuiAxesModule, TuiLineChartModule } from "@taiga-ui/addon-charts";
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import {
  TextMaskModule,
  TuiAvatarModule,
  TuiCheckboxModule,
  TuiInputCountModule, TuiInputModule,
  TuiTabsModule,
  TuiTilesModule
} from "@taiga-ui/kit";
import { TransactionsComponent } from './components/transactions/transactions.component';
import { ActionsComponent } from './components/actions/actions.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BuyComponent } from './components/buy/buy.component';
import { RouterOutlet } from "@angular/router";
import { SellComponent } from './components/sell/sell.component';
import { ConvertComponent } from './components/convert/convert.component';

@NgModule({
  declarations: [DashboardComponent, ChartComponent, PortfolioComponent, TransactionsComponent, ActionsComponent, BuyComponent, SellComponent, ConvertComponent],
  imports: [CommonModule, TuiLabelModule, TuiMoneyModule, TuiAxesModule, TuiLineChartModule, TuiCheckboxModule, TuiAvatarModule, TuiButtonModule, TuiTabsModule, FormsModule, TuiInputCountModule, TuiSvgModule, TuiTilesModule, RouterOutlet, TuiLinkModule, TextMaskModule, TuiInputModule, ReactiveFormsModule]
})
export class DashboardModule {}
