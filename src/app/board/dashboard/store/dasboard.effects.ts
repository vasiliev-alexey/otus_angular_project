import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AuthService } from '../../../@core/services/auth.service';
import { DashboardBuyService } from '../services/dashboard.buy.service';
import { Router } from '@angular/router';

@Injectable()
export class DashboardEffects {
  private authService = inject(AuthService);

  private router = inject(Router);

  private dashboardBuyService = inject(DashboardBuyService);

  constructor(private actions$: Actions) {}
}
