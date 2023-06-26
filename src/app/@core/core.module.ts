import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { AuthModule } from '../auth/auth.module';
import { AuthGuard } from '../auth/services/auth.guard';
import { DashboardUpDownPipe } from './services/dashboard.updown.pipe';

@NgModule({
  declarations: [DashboardUpDownPipe],
  imports: [CommonModule, AuthModule],
  providers: [AuthGuard, AuthService],
  exports: [DashboardUpDownPipe],
})
export class CoreModule {}
