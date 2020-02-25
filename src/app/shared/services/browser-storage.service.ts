import { Injectable } from '@angular/core';

/**
 * Service to handle the browser storage
 * - Session storage
 * - Local storage
 *
 * Basically (inspired by): https://stackoverflow.com/questions/40589730/local-storage-in-angular-2/40590101
 */
@Injectable({
  providedIn: 'root',
})
export class BrowserStorageService {
  constructor() {}

  /**
   * @getSession
   * Retrieve a session storage item by key
   * @param key
   */
  getSession(key: string): any {
    const data = window.sessionStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  /**
   * @setSession
   * Set a session storage item by key and value pair
   * @param key
   * @param value
   */
  setSession(key: string, value: any): void {
    const data = value === undefined ? '' : JSON.stringify(value);
    window.sessionStorage.setItem(key, data);
  }

  /**
   * @removeSession
   * Removes a session storage item by key
   * @param key
   */
  removeSession(key: string): void {
    window.sessionStorage.removeItem(key);
  }

  /**
   * @removeAllSessions
   * Removes all stored items of the session storage
   */
  removeAllSessions(): void {
    for (const key in window.sessionStorage) {
      if (window.sessionStorage.hasOwnProperty(key)) {
        this.removeSession(key);
      }
    }
  }

  /**
   * @getLocal
   * Retrieve a local storage item
   * @param key
   */
  getLocal(key: string): any {
    const data = window.localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  }

  /**
   * @setLocal
   * Set a local storage item by key and value pair
   * @param key
   * @param value
   */
  setLocal(key: string, value: any): void {
    const data = value === undefined ? '' : JSON.stringify(value);
    window.localStorage.setItem(key, data);
  }

  /**
   * @removeLocal
   * Removes a local storage item by key
   * @param key
   */
  removeLocal(key: string): void {
    window.localStorage.removeItem(key);
  }

  /**
   * @removeAllLocals
   * Removes all stored items of the local storage
   */
  removeAllLocals(): void {
    for (const key in window.localStorage) {
      if (window.localStorage.hasOwnProperty(key)) {
        this.removeLocal(key);
      }
    }
  }
}
