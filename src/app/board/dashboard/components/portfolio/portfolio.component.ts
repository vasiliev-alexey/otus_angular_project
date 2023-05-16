import { Component, inject, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadPortfolio } from "../../store/dashboard.actions";
import { selectPortfolio } from "../../store/dashboard.selectors";
import { map } from "rxjs/operators";

@Component({
  selector: "wallet-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"]
})
export class PortfolioComponent implements OnInit {
  private store = inject(Store);

  readonly portfolio = this.store.select(selectPortfolio).pipe(map(trans => trans));

  onClick() {
  }

  ngOnInit(): void {
    this.store.dispatch(loadPortfolio());
  }
}
