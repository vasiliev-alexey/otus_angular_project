import { Component, inject, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadLastTransactions } from "../../store/dashboard.actions";
import { selectPrices } from "../../../prices/store/prices.selectors";
import { map } from "rxjs/operators";
import { selectLastTransactions } from "../../store/dashboard.selectors";

@Component({
  selector: "wallet-transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.scss"]
})
export class TransactionsComponent implements OnInit {


  private store = inject(Store);
  readonly transactionList = this.store.select(selectLastTransactions).pipe(map(trans => trans));

  ngOnInit(): void {
    this.store.dispatch(loadLastTransactions());
  }
}
