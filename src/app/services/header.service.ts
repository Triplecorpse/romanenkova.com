import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private _header$ = new ReplaySubject<string>();

  set header(header: string) {
    this._header$.next(header);
  }

  get header$() {
    return this._header$.asObservable();
  }
}
