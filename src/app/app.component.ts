import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { UiService } from './shared/services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  destroy$ = new Subject<void>();
  isLoading: boolean = false;

  constructor(private _ui: UiService) {
    this._ui.loaderVisible$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: boolean) => (this.isLoading = res));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
