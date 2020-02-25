import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpOptions } from '../models/http-options.model';

/**
 * A service to perform HTTP calls.
 *
 * A simple wrapper for Angular's built-in HTTP library, in case some generic
 * behaviour needs to be altered that can't be done with interceptors.
 * Having a wrapper will prevent having a lot of rework in that case.
 *
 */
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  backend: string;

  constructor(private _httpClient: HttpClient) {}

  /**
   * GET request
   * @param url The URL to GET
   * @param options A `HttpOptions` object
   */
  get<T>(url: string, options: HttpOptions = {}): Observable<T> {
    return this._httpClient.get<T>(url, options);
  }

  /**
   * POST request
   * @param url The URL to POST to
   * @param body The body payload
   * @param options A `HttpOptions` object
   */
  post<T>(url: string, body: any, options: HttpOptions = {}): Observable<T> {
    return this._httpClient.post<T>(url, body, options);
  }

  /**
   * PUT request
   * @param url The URL to PUT
   * @param body The body payload
   * @param options A `HttpOptions` object
   */
  put<T>(url: string, body: any, options: HttpOptions = {}): Observable<T> {
    return this._httpClient.put<T>(url, body, options);
  }

  /**
   * DELETE request
   * @param url The URL to DELETE
   * @param options A `HttpOptions` object
   */
  delete<T>(url: string, options: HttpOptions = {}): Observable<T> {
    return this._httpClient.delete<T>(url, options);
  }
}
