import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { AuthModule } from '../auth/auth.module';
import { AuthGuard } from '../auth/services/auth.guard';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthModule],
  providers: [AuthGuard, AuthService],
})
export class CoreModule {}
