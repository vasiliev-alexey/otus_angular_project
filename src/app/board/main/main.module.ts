import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, RouterOutlet],
  exports: [MainComponent],
})
export class MainModule {}
