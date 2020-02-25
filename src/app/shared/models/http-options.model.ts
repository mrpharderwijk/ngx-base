import { HttpHeaders, HttpParams } from '@angular/common/http';

/**
 * Taken from @angular/common/http - this is Angular's interface
 */
export interface HttpOptions {
  /**
   * Optional: the HTTPHeaders to pass along with the request.
   */
  headers?: HttpHeaders;

  /**
   * Default 'body'. This already parses the `Response` JSON to an object.
   * If you need the full response with headers, change this to `'response'` instead.
   */
  observe?: any;

  /**
   * Further HttpParams to pass.
   */
  params?: HttpParams;

  /**
   * Set to true if you want progress events. Defaults to false.
   */
  reportProgress?: boolean;

  /**
   * The response type. Can be 'json', 'xml', etc. Default 'json'.
   */
  responseType?: 'json';

  /**
   * The default XHRRequest withCredentials variable (passes secure cookies if enabled). Default false.
   */
  withCredentials?: boolean;
}
