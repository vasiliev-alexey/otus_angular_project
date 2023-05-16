import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './components/wallet/wallet.component';

@NgModule({
  declarations: [WalletComponent],
  imports: [CommonModule],
  exports: [WalletComponent],
})
export class WalletModule {}
