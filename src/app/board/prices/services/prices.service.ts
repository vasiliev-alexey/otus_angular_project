import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Price } from '../store/prices.models';
import { Observable } from 'rxjs';
import { APP_CONFIG } from '../../../config/appConfig';

@Injectable({ providedIn: 'root' })
export class PricesService {
  private httpClient = inject(HttpClient);
  private appConfig = inject(APP_CONFIG);

  getAll(): Observable<Price[]> {
    return this.httpClient.get<Array<Price>>(
      `${this.appConfig.URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&price_change_percentage=24h&locale=en`
    );
  }
}
