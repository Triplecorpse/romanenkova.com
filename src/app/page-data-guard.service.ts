import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Resolve, Router} from "@angular/router";
import {Page} from "../../_interface/IPage";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {isPlatformBrowser} from "@angular/common";
import {store} from "@angular/core/src/render3/instructions";
import {IIndexData} from "../../_interface/IIndexData";
import {ILanguageObject} from "../../_interface/ILanguageObject";
import {map, tap} from "rxjs/operators";

interface IPageData {
  index: IIndexData,
  main: Page.IMainPage,
  service: Page.IServicesPage,
  diploma: Page.IDiplomaPage,
  article: Page.IArticlesPage,
  about: Page.IAboutPage
}

interface IAppSettings {
  language: string;
  locale: ILanguageObject;
  locales: Array<ILanguageObject>;
}

@Injectable({
  providedIn: 'root'
})
export class PageDataGuardService implements CanActivate {
  private _pageData: IPageData = {
    index: null,
    main: null,
    service: null,
    diploma: null,
    article: null,
    about: null
  };

  private _appSettings: IAppSettings = {
    language: null,
    locale: null,
    locales: null
  };

  get pageData() {
    return this._pageData;
  }

  get appSettings() {
    return this._appSettings;
  }

  constructor(private httpClient: HttpClient,
              @Inject(PLATFORM_ID) private platformId,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const pageId = route.data.pageidv2;

    if (this._pageData[pageId]) {
      return of(true);
    }

    return this.httpClient.get<Page.IPage>(`${route.params.lang}/${pageId}`, {params: {v: '2'}})
      .pipe(
        tap((page: Page.IPage) => {
          this._pageData[pageId] = page;

          if (pageId === 'index') {
            const indexPage: IIndexData = <any>page;
            this._appSettings.language = indexPage.language.codeISO2;
            this._appSettings.locale = indexPage.language;
            this._appSettings.locales = indexPage.availableLanguages;

            if (!route.params.lang) {
              this.router.navigate([this._appSettings.language]);
            }
          }
        }),
        map((page: Page.IPage) => true)
      )
  }
}
