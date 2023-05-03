import {Component, inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Settings} from "../../store/settings.model";
import {Store} from "@ngrx/store";
import {saveSettings} from "../../store/settings.actions";
import {locations} from "./dictionary";


interface SettingsFormModel {
  currencyCode: AbstractControl<string | null>;
  locationCode: AbstractControl<string | null>;
}


@Component({
  selector: 'wallet-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})




export class SettingsComponent implements  OnInit{


   readonly store = inject(Store);

   readonly  loc = locations;

  readonly settingsForm = new FormGroup<SettingsFormModel>({
    currencyCode: new FormControl<string | null>(null, [Validators.required, Validators.minLength(3)]),
    locationCode: new FormControl<string | null>(null),
  });


  settings = new Settings()
   currenciesList = [
    'USD',
    'EURO',
    'RUB',
  ];

  saveSettings($event: Event) {
    console.log("save settings")
  }

  ngOnInit(): void {
    this.settingsForm.controls.currencyCode.setValue( "USD");
    this.settingsForm.controls.locationCode.setValue( "Africa/Abidjan");
  }

  submitForm($event: MouseEvent) {
    console.log("submit")
    this.store.dispatch(saveSettings())
  }
}

