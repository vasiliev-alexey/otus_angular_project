import { Component, inject, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Price, PriceRequestParams } from '../../../store/prices.models';
import { PricesService } from '../../../services/prices.service';
import { Store } from '@ngrx/store';
import { loadPrices } from '../../../store/prices.actions';
import { TuiTablePagination } from '@taiga-ui/addon-table';
import { selectorSettings } from '../../../../settings/store/settings.selectors';
import { selectorPrices } from '../../../store/prices.selectors';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'wallet-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss'],
})
export class PriceListComponent implements OnInit {
  // priceList = new BehaviorSubject<Price[]>([]);

  private store = inject(Store);

  readonly priceList = this.store.select(selectorPrices).pipe(map(prices => prices));

  page = 0;
  size = 10;
  total = 200;

  ngOnInit(): void {
    const priceSimple: Price = { id: '', image: '', market_cap: 0, symbol: '', current_price: 1, name: 'bit' };

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
