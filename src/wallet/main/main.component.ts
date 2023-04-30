import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchData } from '../store/reducers/wallet';

@Component({
  selector: 'wallet-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  //private  const actions = inject()

  private store = inject(Store);
}
