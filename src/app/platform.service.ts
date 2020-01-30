import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser, isPlatformServer, isPlatformWorkerApp, isPlatformWorkerUi} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  get isPlatformBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  get isPlatformServer() {
    return isPlatformServer(this.platformId);
  }

  get isPlatformWorkerApp() {
    return isPlatformWorkerApp(this.platformId);
  }

  get isPlatformWorkerUi() {
    return isPlatformWorkerUi(this.platformId);
  }
}
