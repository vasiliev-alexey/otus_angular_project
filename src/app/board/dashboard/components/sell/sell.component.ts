import { Component, inject, ViewChild } from '@angular/core';
import { TUI_ARROW } from '@taiga-ui/kit';
import { TuiInputCardGroupedComponent } from '@taiga-ui/addon-commerce';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { TuiHostedDropdownComponent } from '@taiga-ui/core';
import { Store } from '@ngrx/store';
import { sellCoins } from '../../store/dashboard.actions';
import { TuiCard } from '@taiga-ui/addon-commerce/interfaces/card';
import { TransactionType } from '../../store/dashboard.model';

interface SellFormModel {
  amount: AbstractControl<number | null>;
  coinCode: AbstractControl<string | null>;
  meta: AbstractControl<string | null>;
}

@Component({
  selector: 'wallet-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss'],
})
export class SellComponent {
  @ViewChild(TuiHostedDropdownComponent)
  component?: TuiHostedDropdownComponent;

  private store = inject(Store);

  selectedCurrency = '';

  readonly paymentCards = [
    { card: '4321***1234', expire: '12/21', name: 'Salary' },
    {
      card: '8765***5678',
      expire: '12/21',
      name: 'Tips',
    },
    { card: '4200***9000', name: 'Coins', type: 'master' },
  ];

  readonly currencies = [
    {
      label: `Available coins for buy`,
      items: [
        {
          label: 'BTC',
        },
        {
          label: 'ETH',
        },
        {
          label: 'DOGE',
        },
      ],
    },
  ];
  cardSelectOpen = false;

  private _coinIconUrl = 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png';

  readonly arrow = TUI_ARROW;
  readonly buyForm = new FormGroup<SellFormModel>({
    amount: new FormControl<number | null>(null, [Validators.required, Validators.min(0.0001)]),
    coinCode: new FormControl<string | null>(null),
    meta: new FormControl<string | null>(null),
  });
  private _amountDescription: string = 'You can sell 100' + this.selectedCurrency;

  onEsc(component: TuiInputCardGroupedComponent): void {
    component.nativeFocusableElement?.focus();
    component.open = false;
  }

  onCardSelectionOpen(label: string) {
    this.cardSelectOpen = false;
    this.selectedCurrency = label;
    this.component?.nativeFocusableElement?.focus();
  }

  get amountDescription(): string {
    return this.selectedCurrency ? `${this._amountDescription}  ${this.selectedCurrency}` : 'not selected currency';
  }

  get coinIconUrl(): string {
    return this.selectedCurrency
      ? `https://raw.githubusercontent.com/spothq/cryptocurrency-icons/1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/icon/${this.selectedCurrency.toLowerCase()}.svg`
      : this._coinIconUrl;
  }

  buyCurrency() {
    const controls = this.buyForm.controls;
    const card = controls.meta.value as unknown as TuiCard;
    this.store.dispatch(
      sellCoins({
        coinCode: this.selectedCurrency || '',
        amount: controls.amount.value || 0,
        cardNumber: card.card,
        transactionType: TransactionType.SELL,
      })
    );
  }
}
