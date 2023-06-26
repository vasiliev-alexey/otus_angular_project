import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiAvatarModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [NavigationComponent],
  imports: [CommonModule, TuiButtonModule, TuiAvatarModule],
  exports: [NavigationComponent],
})
export class NavigationModule {}
