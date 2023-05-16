import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TuiButtonModule, TuiLabelModule, TuiSvgModule } from "@taiga-ui/core";
import { TuiMoneyModule } from "@taiga-ui/addon-commerce";
import { ChartComponent } from './components/chart/chart.component';
import { TuiAxesModule, TuiLineChartModule } from "@taiga-ui/addon-charts";
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TuiAvatarModule, TuiCheckboxModule, TuiInputCountModule, TuiTabsModule, TuiTilesModule } from "@taiga-ui/kit";
import { TransactionsComponent } from './components/transactions/transactions.component';
import { ActionsComponent } from './components/actions/actions.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [DashboardComponent, ChartComponent, PortfolioComponent, TransactionsComponent, ActionsComponent],
  imports: [CommonModule, TuiLabelModule, TuiMoneyModule, TuiAxesModule, TuiLineChartModule, TuiCheckboxModule, TuiAvatarModule, TuiButtonModule, TuiTabsModule, FormsModule, TuiInputCountModule, TuiSvgModule, TuiTilesModule]
})
export class DashboardModule {}
