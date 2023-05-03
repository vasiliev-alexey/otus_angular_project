import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TuiDataListWrapperModule, TuiInputModule, TuiSelectModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiErrorModule, TuiHintModule } from '@taiga-ui/core';
import { StoreModule } from '@ngrx/store';
import { currencyReducer } from '../wallet/store/currency.reducer';
import { settingsReducer } from './store/settings.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SettingsEffects } from './store/settings.effects';
import { SettingService } from './services/setting.service';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiErrorModule,
    TuiHintModule,
    TuiSelectModule,
    TuiDataListWrapperModule,
    TuiButtonModule,
    EffectsModule.forFeature([SettingsEffects]),
    StoreModule.forFeature('settings', settingsReducer),
  ],
  exports: [SettingsComponent],
  providers: [SettingService],
})
export class SettingsModule {}
