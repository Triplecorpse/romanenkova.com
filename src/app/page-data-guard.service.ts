import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Resolve, Router} from "@angular/router";
import {Page} from "../../_interface/IPage";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {IIndexData} from "../../_interface/IIndexData";
import {ILanguageObject} from "../../_interface/ILanguageObject";
import {map, tap} from "rxjs/operators";
import {Database} from "../../_interface/IMongooseSchema";
import * as moment from 'moment-timezone';

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

            indexPage.schedule = indexPage.schedule.map((item: Database.ISchedule): Database.ISchedule => {
              const guessed = moment.tz.guess();

              item.availableHours = item.availableHours.map((hour: string) => {
                const hourArr = hour.split('-');
                const periodStart = moment.tz(moment(hourArr[0], 'HH:mm'), 'Europe/Kiev').tz(guessed);
                const periodEnd = moment.tz(moment(hourArr[1], 'HH:mm'), 'Europe/Kiev').tz(guessed);
                return `${periodStart.format('HH:mm')}-${periodEnd.format('HH:mm')}`;
              });

              return item;
            });

            indexPage.appointment.timezone = (() => {
              const positiveOffset = -new Date().getTimezoneOffset();
              const duration = moment.duration(positiveOffset, 'minutes');
              let hours = PageDataGuardService.doublizeString(Math.abs(duration.hours()).toString());
              hours = duration.hours().toString() > 0
                ? '+' + hours
                : '-' + hours;
              const offsetStr = hours + ':' + PageDataGuardService.doublizeString(duration.minutes().toString());
              const tzString = moment.tz.guess();

              return `${tzString} GMT ${offsetStr}`;
            })();

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

  private static doublizeString(str: string): string {
    if (str.length === 1) {
      str = '0' + str;
    }

    return str;
  }
}
