import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private loaderVisible: Subject<boolean> = new Subject<boolean>();

  public readonly loaderVisible$: Observable<boolean> =
    this.loaderVisible.asObservable();

  showLoader(): void {
    this.loaderVisible.next(true);
  }

  hideLoader(): void {
    this.loaderVisible.next(false);
  }
}
