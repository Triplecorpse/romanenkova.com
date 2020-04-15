import {Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {MetaService} from './meta.service';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private _suffix: string;
  private _prefix: string;

  set suffix(suffix: string) {
    this._suffix = suffix;
    this.setTitle();
  }

  set prefix(prefix: string) {
    this._prefix = prefix;
    this.setTitle();
  }

  constructor(private title: Title, private meta: MetaService) {

  }

  private setTitle() {
    const delimiter = this._prefix && this._suffix ? ' - ' : '';

    this.title.setTitle(this._prefix + delimiter + this._suffix);
    this.meta.setOgMeta('title', this._prefix + delimiter + this._suffix);
  }
}
