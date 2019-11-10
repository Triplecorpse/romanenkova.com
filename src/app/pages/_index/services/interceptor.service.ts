import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {isPlatformServer} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor(@Inject(PLATFORM_ID) private platformId) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let url = req.url;
    let host = '/';
    const api = 'api/';
    const apiv2 = 'api/v2/';

    if (isPlatformServer(this.platformId)) {
      host = 'http://localhost:4000/';
    }

    if (!url.toLowerCase().startsWith('http')) {
      if (req.params.get('v') === '2') {
        url = host + apiv2 + url;
      } else {
        url = host + api + url;
      }
    }

    const newReq = req.clone({url});

    return next.handle(newReq);
  }
}
