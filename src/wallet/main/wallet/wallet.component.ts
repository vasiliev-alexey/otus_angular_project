import { Component, inject, OnInit } from '@angular/core';
import { fetchData } from '../../store/reducers/wallet';
import { Store } from '@ngrx/store';

@Component({
  selector: 'wallet-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
})
export class WalletComponent implements OnInit {
  private store = inject(Store);
  ngOnInit(): void {
    this.store.dispatch(fetchData({ code: '1111111111' }));
  }
}
