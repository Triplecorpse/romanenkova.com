import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, ReplaySubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {TLanguage} from './interfaces/types';
import {ILanguageResponse} from './interfaces/iResponse';
import {ILangItem} from './interfaces/iLangItem';
import {ILocale} from "./interfaces/ILocale";

@Injectable({
  providedIn: 'root'
})
export class LanguageGuardService implements CanActivate {
  public langItems: Array<ILangItem>;
  public selectedLang: string = 'en';
  public locale: ILocale;

  constructor(private route: Router, private httpClient: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let storedLang;
    if (isPlatformBrowser(this.platformId)) {
      storedLang = localStorage.getItem('lang');
    }
    const resolver = new ReplaySubject<boolean>();
    let lang;
    let availableLangs: Array<TLanguage>;

    this.httpClient.get<ILanguageResponse>('language')
      .subscribe((data: ILanguageResponse) => {
        lang = data.lang;
        availableLangs = data.availableLangs.map((possibleLang: ILocale) => possibleLang.codeISO2);
        this.langItems = data.availableLangs.map((possibleLang: ILocale) => ({
          href: '',
          name: possibleLang.languageName,
          code: possibleLang.codeISO2,
          short: possibleLang.languageName.substr(0, 3)
        }));

        if (availableLangs.indexOf(route.params.lang) > -1) {
          if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('lang', route.params.lang);
          }
          this.selectedLang = route.params.lang;
          this.locale = data.availableLangs.find(lang => lang.codeISO2 === this.selectedLang);
          resolver.next(true);
          resolver.complete();
          return;
        }

        if (storedLang) {
          this.selectedLang = storedLang;
          this.locale = data.availableLangs.find(lang => lang.codeISO2 === this.selectedLang);
          this.route.navigate([storedLang]);
        }

        this.selectedLang = lang;
        this.locale = data.availableLangs.find(lang => lang.codeISO2 === this.selectedLang);
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('lang', lang);
        }
        resolver.next(false);
        resolver.complete();
      });

    return resolver.asObservable();
  }
}
