import {Injectable} from '@angular/core';
import {LanguageGuardService} from '../../../language-guard.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {combineLatest, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import IPage from '../../../interfaces/iPage';
import {IDiploma} from "../../../interfaces/IDiploma";

@Injectable({
  providedIn: 'root'
})
export class ResolveMainPageService implements Resolve<Array<any>> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<any>> {
    const lang = this.languageGuard.selectedLang;
    const aboutPage$ = this.httpClient.get<IPage<string>>('interface', {
      params: {
        lang,
        id: ['about', 'review', '[modal] review', 'diploma']
      }
    });

    return combineLatest([aboutPage$]);
  }

  constructor(private languageGuard: LanguageGuardService,
              private httpClient: HttpClient) {
  }
}
