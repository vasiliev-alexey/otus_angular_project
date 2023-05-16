import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadLastTransactions } from '../../store/dashboard.actions';
import { map } from 'rxjs/operators';
import { selectLastTransactions } from '../../store/dashboard.selectors';
import { TransactionType } from '../../store/dashboard.model';

@Component({
  selector: 'wallet-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  private store = inject(Store);
  readonly transactionList = this.store.select(selectLastTransactions).pipe(map(trans => trans));
  private _coinIconUrl = 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png';

  ngOnInit(): void {
    this.store.dispatch(loadLastTransactions());
  }

  protected readonly TransactionType = TransactionType;

  getIconUrl(coinCode: string) {
    return `https://raw.githubusercontent.com/spothq/cryptocurrency-icons/1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/icon/${coinCode.toLowerCase()}.svg`;
  }
}
