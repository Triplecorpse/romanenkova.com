import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {isPlatformServer} from '@angular/common';
import {environment} from '../../environments/environment';
import {filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor(@Inject(PLATFORM_ID) private platformId) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let url = req.url;
    let host = environment.apiLink;
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

    return next.handle(newReq)
      .pipe(
        filter(response => response instanceof HttpResponse),
        map((response: HttpResponse<any>) => response.clone({body: this.setImagesApiUrls(response.body)}))
      );
  }

  private setImagesApiUrls<T>(anyParsedJson: T): T {
    const result = Array.isArray(anyParsedJson) ? [] : {};

    Object.keys(anyParsedJson).forEach(key => {
      if (typeof anyParsedJson[key] === 'object') {
        result[key] = this.setImagesApiUrls(anyParsedJson[key]);
      } else if (typeof anyParsedJson[key] === 'string' &&
        this.pathIsImage(anyParsedJson[key]) &&
        !anyParsedJson[key].includes('://')) {
        result[key] = environment.apiLink + anyParsedJson[key];
      } else {
        result[key] = anyParsedJson[key];
      }
    });

    return result as T;
  }

  private pathIsImage(path: string): boolean {
    const images: string[] = ['.png', '.jpeg', '.jpg', '.svg'];

    return images.some(image => path.endsWith(image));
  }
}
