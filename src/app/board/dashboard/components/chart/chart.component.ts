import { Component } from '@angular/core';
import { TuiPoint } from '@taiga-ui/core';

@Component({
  selector: 'wallet-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent {
  readonly value: readonly TuiPoint[] = [
    [50, 50],
    [100, 75],
    [150, 50],
    [200, 150],
    [250, 155],
    [300, 190],
    [350, 90],
  ];
}
