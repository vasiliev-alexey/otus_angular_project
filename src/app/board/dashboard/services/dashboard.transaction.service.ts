import { inject, Injectable } from "@angular/core";
import { from, of, switchMap } from "rxjs";
import { Transactions, TransactionType } from "../store/dashboard.model";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { map } from "rxjs/operators";
import { Settings } from "../../settings/store/settings.model";
import { and, limit, orderBy, query, where } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class DashboardTransactionService {

  private firestore: AngularFirestore = inject(AngularFirestore);

  loadLastTransactions(userId?: string) {
    return this.firestore
      .collection("transactions", ref =>
        ref.where( "userId", "==", userId) .limit(5)
      )

      .valueChanges()
      .pipe(map(val => (val.length > 0 ? (val as Transactions[]) : ([] as Transactions[]))));


    //     const trans: Transactions[] = [];
    //     trans.push({ transactionAmount: 10, transactionDate:  new Date(), transactionType: TransactionType.BUY,
    //       coinCode: "BIT" });
    //     trans.push({ transactionAmount: 99, transactionDate:  new Date(), transactionType: TransactionType.SELL,
    //       coinCode: "DOG" });
    //     trans.push({ transactionAmount: 777, transactionDate:  new Date(), transactionType: TransactionType.SELL,
    //       coinCode: "BIT" });
    //
    // return of(trans)
  }
}
