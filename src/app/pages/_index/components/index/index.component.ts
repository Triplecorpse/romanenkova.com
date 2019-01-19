import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID, TemplateRef,
  ViewChild
} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {ActivatedRoute, NavigationEnd, Router, RouterEvent} from '@angular/router';
import {INavigationItem} from '../../../../interfaces/iNavigation';
import {filter} from 'rxjs/operators';
import IPage from '../../../../interfaces/iPage';
import {IContact} from '../../../../interfaces/iContact';
import {IModalAppointment} from '../../../../interfaces/iModalAppointment';
import {ModalService} from '../../services/modal.service';
import {I18nService} from '../../../../services/i18n.service';
import {LanguageGuardService} from "../../../../language-guard.service";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent implements OnInit, AfterViewInit {
  public title: Array<string>;
  public nav: Array<INavigationItem>;
  public isRoot: boolean;
  public header: string;
  public attend: string;
  public footer: IPage<IContact>;
  public name: [string, string];
  public modalAppointment: IPage<IModalAppointment>;
  public isBrowser: boolean;
  public dontShowAgain: boolean = true;
  private allowTracking: boolean;

  @ViewChild('cookieConfirmationModal') private cookieConfirmationModal: TemplateRef<any>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              @Inject(DOCUMENT) private document: Document,
              private route: ActivatedRoute,
              private router: Router,
              private modalService: ModalService,
              private i18nService: I18nService,
              private changeDetectorRef: ChangeDetectorRef,
              private meta: Meta,
              private languageGuardService: LanguageGuardService,
              private titleService: Title) {

    const locale = languageGuardService.locale;

    // if (isPlatformBrowser(this.platformId) && this.cookieService.get('allow') === '1') {
    //   this.addTrackerCode();
    //   this.allowTracking = true;
    // }

    router.events
      .pipe(filter((e: RouterEvent) => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd): void => {
        this.header = route.snapshot.firstChild.data.pageData.header;
        this.isRoot = Boolean(this.route.snapshot.firstChild.data.headerData);
        const title = this.isRoot ? locale.pageMetadata.rootPageTitle : this.header;
        const position = locale.pageMetadata.position;
        const fullName = `${locale.pageMetadata.firstName} ${locale.pageMetadata.lastName}`;
        this.titleService.setTitle(`${title} - ${position} ${fullName}`);

        if (environment.production && this.allowTracking && isPlatformBrowser(PLATFORM_ID)) {
          (<any>window).ga('create', 'UA-132675881-1', 'auto');
          (<any>window).ga('set', 'page', e.urlAfterRedirects);
          (<any>window).ga('send', 'pageview');
        }

        this.changeDetectorRef.markForCheck();
      });
  }

  addTrackerCode() {
    //todo: add code to insert and run scripts here
  }

  agreeToCookies() {
    // if (isPlatformBrowser(PLATFORM_ID)) {
    //   if (this.dontShowAgain) {
    //     this.cookieService.set('dont', '1', 30);
    //     this.cookieService.set('agree', '1', 30);
    //   }
    // }

    this.closeModal();
  }

  disagreeToCookies() {
    // if (isPlatformBrowser(PLATFORM_ID)) {
    //   if (this.dontShowAgain) {
    //     this.cookieService.set('dont', '1', 30);
    //     this.cookieService.set('agree', '0', 30);
    //   }
    // }

    // this.cookieService.deleteAll();
    // this.closeModal();
  }

  closeModal() {
    this.modalService.closeModal('cookieConfirm', 'dismiss', null);
  }

  ngOnInit() {
    // todo: perform more clear way to receive data
    this.title = this.route.snapshot['_resolvedData'].headerData.title;
    this.nav = this.route.snapshot['_resolvedData'].headerData.navigation;
    this.footer = this.route.snapshot['_resolvedData'].headerData.contacts;
    this.i18nService.attendButtonLabel = this.route.snapshot['_resolvedData'].headerData.buttonText;
    this.name = this.route.snapshot.data.headerData.name;
    this.modalService.modalAppointment = this.route.snapshot.data.headerData.modalAppointment;
    this.modalService.services = this.route.snapshot.data.services;

    if (isPlatformBrowser(this.platformId)) {
      const locale = this.languageGuardService.locale;
      const html = document.getElementsByTagName('html')[0];
      this.isBrowser = true;
      html.setAttribute('lang', locale.codeISO2);
      this.meta.addTag({ name: 'og:locale', content: `${locale.codeISO2}_${locale.locale}`});
      this.meta.addTag({ name: 'og:description', content: locale.pageMetadata.description});
    }
  }

  ngAfterViewInit() {
    // if (!this.cookieService.get('dont') && isPlatformBrowser(PLATFORM_ID)) {
      // this.modalService.openModal('cookieConfirm', this.cookieConfirmationModal, {}, false);
    // }
  }
}
