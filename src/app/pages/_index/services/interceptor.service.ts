import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LanguageGuardService} from '../../../language-guard.service';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  private languagedUrls: Array<string> = ['appointment'];

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let shouldAddLanguage = false;
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

    this.languagedUrls.forEach((langUrl: string) => {
      if (req.url.includes(langUrl)) {
        shouldAddLanguage = true;
      }
    });

    if (!shouldAddLanguage) {
      return next.handle(req.clone({url}));
    }

    let params: HttpParams = new HttpParams();

    req.params.keys().forEach((key: string) => {
      params = params.set(key, req.params.get(key));
    });
    if (!params.get('language')) {
      params = params.set('language', this.languageGuardService.selectedLang);
    }

    const newReq = req.clone({params, url});

    return next.handle(newReq);
  }

  constructor(private languageGuardService: LanguageGuardService) {
  }
}
