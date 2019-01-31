import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  public set(name: string, value: string, expiresInDays?: number): void {
    const now = new Date().getTime();
    const expires = new Date(now + expiresInDays * 24 * 60 * 60 * 1000);
    const expiresLocal = expires ? `; expires=${expires}` : '';
    this.document.cookie = `${name}=${value}${expiresLocal}`;
  }

  public getAll(): {[key: string]: string} {
    const cookiesStr = this.document.cookie;
    const cookiesArr = cookiesStr.split(';').map(c => c.trim());
    const result = {};

    cookiesArr.forEach(c => {
      const keyValuePair = c.split('=');
      result[keyValuePair[0]] = keyValuePair[1];
    });

    return result;
  }

  public get(name: string): string {
    return this.getAll()[name];
  }

  public delete(name: string): void {
    this.document.cookie = `username=${name}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  public deleteAll(): void {
    const cookies = this.getAll();
    for (let i in cookies) {
      if (cookies.hasOwnProperty(i)) {
        this.delete(i);
      }
    }
  }

  public check(name: string): boolean {
    return Boolean(this.getAll()[name]);
  }
}
