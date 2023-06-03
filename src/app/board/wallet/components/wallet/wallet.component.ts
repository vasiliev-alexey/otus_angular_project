import { Component, inject, OnInit } from '@angular/core';
import { fetchData } from '../../store/wallet.reducer';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import { TuiTablePagination } from '@taiga-ui/addon-table';

@Component({
  selector: 'wallet-landing',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
})
export class WalletComponent implements OnInit {
  private store = inject(Store);
  testValue = new FormControl(true);
  total = 100;
  page = 10;
  size = 10;

  ngOnInit(): void {
    this.store.dispatch(fetchData({ code: '1111111111' }));
  }

  onChange($event: TuiTablePagination) {
    console.log($event);
  }
}
