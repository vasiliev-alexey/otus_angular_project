import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPrices } from '../../../store/prices.actions';
import { TuiTablePagination } from '@taiga-ui/addon-table';

import { selectPrices } from '../../../store/prices.selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'wallet-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss'],
})
export class PriceListComponent implements OnInit {
  // priceList = new BehaviorSubject<Price[]>([]);

  private store = inject(Store);

  readonly priceList = this.store.select(selectPrices).pipe(map(prices => prices));

  page = 0;
  size = 10;
  total = 200;
  searchText = '';

  ngOnInit(): void {
    this.store.dispatch(loadPrices({ page: this.page, size: this.size }));

    // this.priceService.getAll({} as PriceRequestParams).subscribe(d => {
    //   console.log(d);
    //
    //   this.priceList.next(d);
    // });

    // this.priceList.next([priceSimple]);
  }

  onChange(changer: TuiTablePagination): void {
    console.log('changer', changer);
    this.page = changer.page;
    this.size = changer.size;

    this.store.dispatch(
      loadPrices({
        ...changer,
      })
    );
  }
}
