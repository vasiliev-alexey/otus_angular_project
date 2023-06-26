import { inject, Injectable } from '@angular/core';
import { MarketParams } from '../store/dashboard.model';
import { from, Observable, switchMap } from 'rxjs';
import { AuthService } from '../../../@core/services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class DashboardBuyService {
  private authService = inject(AuthService);
  private firestore: AngularFirestore = inject(AngularFirestore);

  buyCoin(v: MarketParams): Observable<MarketParams | undefined> {
    return this.authService.userId().pipe(
      switchMap(userId => {
        const colRef = this.firestore.collection('transactions');
        return from(
          colRef.add({
            userId,
            coinCode: v.coinCode,
            amount: v.amount,
            cardNumber: v.cardNumber,
            created: Date.now(),
            transactionType: v.transactionType,
          })
        ).pipe(switchMap(docRef => colRef.doc<MarketParams>(docRef.id).valueChanges()));
      })
    );
  }
}
