import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuiAvatarModule, TuiCheckboxModule, TuiInputModule } from '@taiga-ui/kit';

import { ReactiveFormsModule } from '@angular/forms';
import { WalletComponent } from './components/wallet/wallet.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { TuiOverscrollModule } from '@taiga-ui/cdk';
import { TuiTablePaginationModule } from '@taiga-ui/addon-table';

@NgModule({
  declarations: [WalletComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiButtonModule,
    TuiAvatarModule,
    TuiMoneyModule,
    TuiOverscrollModule,
    TuiCheckboxModule,
    TuiTablePaginationModule,
  ],
  exports: [WalletComponent],
})
export class WalletModule {}
