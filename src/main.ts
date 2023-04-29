import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { WalletModule } from './wallet/wallet.module';

platformBrowserDynamic()
  .bootstrapModule(WalletModule)
  .catch(err => console.error(err));
