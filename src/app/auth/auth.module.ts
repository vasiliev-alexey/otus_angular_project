import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authReducer, clearStateMetaReducer } from './store/auth.reducer';
import { StoreModule } from '@ngrx/store';
import { AuthGuard } from './services/auth.guard';
import { authMetaReducers } from '../wallet/store';
import { AuthService } from '../@core/services/auth.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature('auth', authReducer, { metaReducers: [clearStateMetaReducer] })],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [AuthGuard, AuthService],
    };
  }
}
