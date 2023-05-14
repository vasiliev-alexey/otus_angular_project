import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Settings } from '../../store/settings.model';
import { Store } from '@ngrx/store';
import { loadSettings, saveSettings } from '../../store/settings.actions';
import { locations } from './dictionary';
import { selectorSettings } from '../../store/settings.selectors';

interface SettingsFormModel {
  currencyCode: AbstractControl<string | null>;
  locationCode: AbstractControl<string | null>;
}

@Component({
  selector: 'wallet-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  readonly store = inject(Store);

  readonly loc = locations;

  readonly settingsForm = new FormGroup<SettingsFormModel>({
    currencyCode: new FormControl<string | null>(null, [Validators.required, Validators.minLength(3)]),
    locationCode: new FormControl<string | null>(null),
  });

  settings = new Settings();
  currenciesList = ['USD', 'EURO', 'RUB'];

  saveSettings($event: Event) {
    console.log('save settings dispatch:');

    this.store.dispatch(saveSettings({ currencyCode: this.settingsForm.controls.currencyCode.value! }));
  }

  ngOnInit(): void {
    this.store.dispatch(loadSettings());

    this.store.select(selectorSettings).subscribe(formValue => {
      console.log('formValue', formValue);
      this.settingsForm.controls.currencyCode.patchValue(formValue.currencyCode || '');
      this.settingsForm.controls.locationCode.patchValue(formValue.locationCode || '');
    });

    // this.settingsForm.controls.currencyCode.setValue('USD');
    // this.settingsForm.controls.locationCode.setValue('Africa/Abidjan');
  }

  submitForm($event: MouseEvent) {
    console.log('submit');
    this.store.dispatch(
      saveSettings({
        currencyCode: this.settingsForm.controls.currencyCode.value!,
        locationCode: this.settingsForm.controls.locationCode.value || '',
      })
    );
  }
}
