import { inject, Injectable } from '@angular/core';
import { Transactions } from '../store/dashboard.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DashboardTransactionService {
  private firestore: AngularFirestore = inject(AngularFirestore);

  loadLastTransactions(userId?: string) {
    return this.firestore
      .collection('transactions', ref => ref.where('userId', '==', userId).limit(5))
      .valueChanges()
      .pipe(map(val => (val.length > 0 ? (val as Transactions[]) : ([] as Transactions[]))));
  }
}
