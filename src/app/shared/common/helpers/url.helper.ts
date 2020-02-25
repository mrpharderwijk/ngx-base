import { environment } from '../../../../environments/environment';

export class UrlHelper {
  /**
   * Checks the given url is part of a call to the
   * backend api domain
   * @param url
   */
  static isBackendCall(url: string): boolean {
    return url.startsWith(environment.serviceUrls.base);
  }

  /**
   * Takes a given url string e.g. '/auth/log-in' and
   * converts it to ['auth', 'log-in']
   * @param url
   */
  static getRouteSegments(urlString: string): string[] {
    const segments = urlString.split('/').filter(Boolean);
    return segments.length ? segments : ['/'];
  }
}
