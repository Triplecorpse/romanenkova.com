import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {PageDataGuardService} from '../../../page-data-guard.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let url = req.url;

    const api = environment.api || '/api';
    const apiv2 = environment.apiv2 || '/api/v2';

    if (!url.toLowerCase().startsWith('http')) {
      if (req.params.get('v') === '2') {
        url = apiv2 + url;
      } else {
        url = api + url;
      }
    }

    const newReq = req.clone({url});

    return next.handle(newReq);
  }

  constructor(private pageDataGuardService: PageDataGuardService) {
  }
}
