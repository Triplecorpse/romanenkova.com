import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  get href(): string {
    if (isPlatformBrowser(this.platformId)) {
      return location.href;
    }

    return '';
  }

  constructor(@Inject(PLATFORM_ID) private platformId) {
  }

}
