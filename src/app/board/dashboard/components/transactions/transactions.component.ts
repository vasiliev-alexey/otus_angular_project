import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadLastTransactions } from '../../store/dashboard.actions';
import { map } from 'rxjs/operators';
import { selectLastTransactions } from '../../store/dashboard.selectors';

const IMG_URL_PATH =
  'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/icon/';

@Component({
  selector: 'wallet-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  private store = inject(Store);
  readonly transactionList = this.store.select(selectLastTransactions).pipe(map(trans => trans));
  ngOnInit(): void {
    this.store.dispatch(loadLastTransactions());
  }
  getIconUrl(coinCode: string) {
    return `${IMG_URL_PATH}${coinCode.toLowerCase()}.svg`;
  }
}
