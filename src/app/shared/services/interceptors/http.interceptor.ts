import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, EMPTY, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UrlHelper } from '../../common/helpers/url.helper';
import { ROUTE_MAIN } from '../../constants';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptor implements HttpInterceptor {
  constructor(private _router: Router) {}

  // TODO: return object
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any> | any> {
    const additionalInfo: { setHeaders: { [key: string]: string } } = { setHeaders: {} };
    const isBackendCall = UrlHelper.isBackendCall(request.url);
    const token = 'aRandomJWTtoken';

    /**
     * Set additional headers when a backend call is made
     */
    if (isBackendCall && token) {
      additionalInfo.setHeaders['Authorization'] = `Bearer ${token}`;
    }

    // add the (new) headers to the request
    request = request.clone(additionalInfo);

    return next.handle(request).pipe(
      /**
       * Catch errors when they occur
       */
      catchError((error: any) => {
        /**
         * When a HttpErrorResponse occurs
         */
        if (error instanceof HttpErrorResponse) {
          /**
           * Handle with different error codes
           */
          switch (error.status) {
            case 401:
            case 403:
            case 404:
              this._router.navigateByUrl(ROUTE_MAIN);
              break;

            case 0:
              return throwError('Unknown error');

            case 400:
              return throwError(this.getErrorMessage(error.error));
              break;
          }

          /**
           * Check to see if there is an active internet connection
           */
          if (!window.navigator.onLine) {
            /**
             * if there is no internet, throw a HttpErrorResponse error
             * since an error is thrown, the function will terminate here
             */
            console.warn('Internet connection required');
            return EMPTY;
          }
        }

        /**
         * Any other case throw an error
         */
        throw new Error(error);
      }),
      map(response => {
        if (response instanceof HttpResponse) {
          console.log(response);
        }

        return response;
      }),
    );
  }

  /**
   * Retrieves the human readable message by
   * its server counterpart
   */
  getErrorMessage(error: any): string {
    if (!error.message) {
      return;
    }

    switch (error.message) {
      case 'USER_EXISTS_ERROR':
        return 'This user already exists. Choose a different email address.';

      default:
        return error;
    }
  }
}
