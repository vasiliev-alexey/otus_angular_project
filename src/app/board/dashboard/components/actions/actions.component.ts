import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'wallet-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsComponent {
  activeItemIndex = 0;

  private router = inject(Router);
  private route = inject(ActivatedRoute);

  async onClick(item: string): Promise<void> {
    await this.router.navigate([item], { relativeTo: this.route });
  }
}
