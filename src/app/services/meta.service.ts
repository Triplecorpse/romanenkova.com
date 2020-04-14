import {Injectable} from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private meta: Meta) {
  }

  setOgMeta(property: string, content: string) {
    this.meta.updateTag({property: 'og:' + property, content});
  }
}
