import { Component, inject, OnInit } from '@angular/core';
import { fetchData } from '../../store/wallet.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'wallet-landing',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
})
export class WalletComponent implements OnInit {
  private store = inject(Store);
  ngOnInit(): void {
    this.store.dispatch(fetchData({ code: '1111111111' }));
  }
}
