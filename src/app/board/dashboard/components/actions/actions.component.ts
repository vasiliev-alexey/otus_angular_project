import { ChangeDetectionStrategy, Component, Inject } from "@angular/core";

@Component({
  selector: 'wallet-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsComponent {
  activeItemIndex = 0;


  onClick(item: string): void {

  }
}
