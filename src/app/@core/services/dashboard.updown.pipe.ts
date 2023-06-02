import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashboardUpDown',
})
export class DashboardUpDownPipe implements PipeTransform {
  transform(value: number): string {
    if (value > 0) {
      return value.toString() + '  ⬆️';
    } else if (value < 0) {
      return value.toString() + '  ⬇️';
    }

    return value.toString();
  }
}
