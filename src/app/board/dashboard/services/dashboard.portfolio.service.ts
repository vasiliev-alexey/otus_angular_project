import { inject, Injectable } from '@angular/core';
import { AuthService } from '../../../@core/services/auth.service';
import { exhaustMap, map } from 'rxjs/operators';
import { Portfolio, Transactions } from '../store/dashboard.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class DashboardPortfolioService {
  private authService = inject(AuthService);
  private firestore: AngularFirestore = inject(AngularFirestore);

  loadUserPortfolio(userId?: string) {
    return this.firestore
      .collection('portfolios', ref => ref.where('userId', '==', userId).limit(5))
      .valueChanges()
      .pipe(map(val => (val.length > 0 ? (val as Portfolio[]) : ([] as Portfolio[]))));
  }
}
