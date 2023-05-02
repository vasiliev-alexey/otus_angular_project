import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authReducer } from './store/auth.reducer';
import { StoreModule } from '@ngrx/store';
import { AuthGuard } from './services/AuthGuard';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature('auth', authReducer)],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [AuthGuard],
    };
  }
}
