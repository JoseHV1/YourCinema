import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UiService } from '../services/ui.service';

@Injectable()
export class ErrorsHttpInterceptor implements HttpInterceptor {
  constructor(private _ui: UiService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(err => {
        const message: string = err.error.message ?? undefined;
        this._ui.showAlertError(message ?? 'unknown error');
        throw err;
      })
    );
  }
}
