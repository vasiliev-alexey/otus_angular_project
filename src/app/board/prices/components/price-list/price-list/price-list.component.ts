import { Component, inject, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadPrices } from "../../../store/prices.actions";
import { TuiTablePagination } from "@taiga-ui/addon-table";

import { selectPrices, selectTotalPrices } from "../../../store/prices.selectors";
import { map, switchMap, tap } from "rxjs/operators";
import { async, BehaviorSubject } from "rxjs";
import { Price } from "../../../store/prices.models";

@Component({
  selector: "wallet-price-list",
  templateUrl: "./price-list.component.html",
  styleUrls: ["./price-list.component.scss"]
})
export class PriceListComponent implements OnInit {

  private store = inject(Store);
  page = 0;
  size = 10;
  total = new BehaviorSubject(0);
 // total = 0;


  //readonly priceList : BehaviorSubject<Price[]> =  new BehaviorSubject([] as Price[]);
  private selectedFilter$ = new BehaviorSubject<[number, number]>([this.page, this.size]);


  readonly priceList = this.store.select(selectPrices(0, 500)).pipe(
    switchMap(prices => {
      // tap(v => console.log("fill")),
      return this.selectedFilter$.pipe(
        map(currFilter => prices?.filter((v, i) => i >= currFilter[0] * currFilter[1]
          && i < (currFilter[0] + 1) * currFilter[1]
        ))
      );

      //this.priceList.next(prices|| [])

    }));


// readonly priceStore = this.store.select(selectPrices).pipe(
  //   map(prices => {
  //     tap(v => console.log("fill")),
  //     this.priceList.next(prices|| [])
  //
  //   }));


  // page = 0;
  // size = 10;
  // total = 200;
  searchText = "";

  ngOnInit(): void {
    this.store.dispatch(loadPrices({ page: this.page, size: this.size }));
    this.store.select(selectTotalPrices).pipe(
      map(v =>  this.total.next(v))
    ).subscribe()
    // this.priceService.getAll({} as PriceRequestParams).subscribe(d => {
    //   console.log(d);
    //
    //   this.priceList.next(d);
    // });

    // this.priceList.next([priceSimple]);
  }

  onChange(changer: TuiTablePagination): void {
    this.selectedFilter$.next([changer.page, changer.size]);
  }

  protected readonly async = async;
}
