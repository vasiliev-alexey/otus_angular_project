import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPrices } from '../../../store/prices.actions';
import { TuiTablePagination } from '@taiga-ui/addon-table';

import { selectIsLoadPrices, selectPrices, selectTotalPrices } from '../../../store/prices.selectors';
import { map, switchMap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'wallet-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss'],
})
export class PriceListComponent implements OnInit {
  private store = inject(Store);
  page = 0;
  size = 10;
  total = new BehaviorSubject(0);

  private selectedFilter$ = new BehaviorSubject<[number, number]>([this.page, this.size]);

  readonly isLoad = this.store.select(selectIsLoadPrices);

  readonly priceList = this.store.select(selectPrices(0, 500)).pipe(
    switchMap(prices => {
      return this.selectedFilter$.pipe(
        map(currFilter =>
          prices?.filter((v, i) => i >= currFilter[0] * currFilter[1] && i < (currFilter[0] + 1) * currFilter[1])
        )
      );
    })
  );

  searchText = '';

  ngOnInit(): void {
    this.store.dispatch(loadPrices({ page: this.page, size: this.size }));
    this.store
      .select(selectTotalPrices)
      .pipe(map(v => this.total.next(v)))
      .subscribe();
  }

  onChange(changer: TuiTablePagination): void {
    this.selectedFilter$.next([changer.page, changer.size]);
  }

  getUpDownIcon(price_change_percentage_24h: number) {
    if (price_change_percentage_24h > 0) {
      return 'tuiIconTrendingUp';
    } else if (price_change_percentage_24h < 0) {
      return 'tuiIconTrendingDown';
    }
    return 'tuiIconActivity';
  }
}
