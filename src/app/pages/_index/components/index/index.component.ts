import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID, TemplateRef,
  ViewChild
} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {ActivatedRoute, NavigationEnd, Router, RouterEvent} from '@angular/router';
import {filter, take} from 'rxjs/operators';
import {ModalService} from '../../services/modal.service';
import {environment} from "../../../../../environments/environment";
import {PageDataGuardService} from "../../../../page-data-guard.service";
import {CookieService} from "../../services/cookie.service";
import {ICookiesConsentModal, ICookiesConsentOption} from "../../../../../../_interface/ICookiesConsentModal";
import {FooterComponent} from "../footer/footer.component";
import {IModalEvent} from "../../../../interfaces/iModalEvent";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent implements OnInit, AfterViewInit {
  public isRoot: boolean;
  public header: string;
  public attend: string;
  public dontShowAgain: boolean = true;
  public gaTrack: boolean = true;
  private allowTracking: boolean;
  public isBrowser: boolean = false;
  public modalConsent: ICookiesConsentModal;

  @ViewChild('cookieConfirmationModal') private cookieConfirmationModal: TemplateRef<any>;
  @ViewChild('footerComponent') private footerComponent: FooterComponent;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              @Inject(DOCUMENT) private document: Document,
              private route: ActivatedRoute,
              private router: Router,
              private modalService: ModalService,
              private changeDetectorRef: ChangeDetectorRef,
              private meta: Meta,
              private pageDataGuardService: PageDataGuardService,
              private titleService: Title,
              private cookieService: CookieService) {

    const pageData = this.pageDataGuardService.pageData;

    if (isPlatformBrowser(this.platformId) && this.cookieService.get('allow') === '1' && this.cookieService.get('dont') === '1') {
      this.addTrackerCode();
      this.allowTracking = true;
    }

    router.events
      .pipe(filter((e: RouterEvent) => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd): void => {
        this.header = this.pageDataGuardService.pageData[route.snapshot.firstChild.data.pageidv2].header;
        this.isRoot = e.urlAfterRedirects.length === 3;
        const title = this.isRoot
          ? pageData.index.pageMetadata.rootPageTitle
          : this.header;
        const position = pageData.index.pageMetadata.position;
        const fullName = `${pageData.index.pageMetadata.firstName} ${pageData.index.pageMetadata.lastName}`;
        this.titleService.setTitle(`${title} - ${position} ${fullName}`);

        if (environment.production && this.allowTracking && isPlatformBrowser(this.platformId)) {
          (<any>window).ga('create', 'UA-132675881-1', 'auto');
          (<any>window).ga('set', 'page', e.urlAfterRedirects);
          (<any>window).ga('send', 'pageview');
        }

        this.changeDetectorRef.markForCheck();
      });
  }

  addTrackerCode() {
    //todo: add code to insert and run scripts here
    const gtagman = this.document.createElement('script');
    const gtagglob = this.document.createElement('script');
    const gtagglobaction = this.document.createElement('script');
    const ga = this.document.createElement('script');
    gtagman.text = '(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\':\n' +
      '      new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0],\n' +
      '    j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src=\n' +
      '    \'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);\n' +
      '  })(window,document,\'script\',\'dataLayer\',\'GTM-M89ZHF5\');';
    gtagglob.src = 'https://www.googletagmanager.com/gtag/js?id=UA-132675881-1';
    gtagglobaction.text = 'window.dataLayer = window.dataLayer || [];\n' +
      '    function gtag(){dataLayer.push(arguments);}\n' +
      '    gtag(\'js\', new Date());\n' +
      '    gtag(\'config\', \'UA-132675881-1\');';
    ga.text = '(function(i, s, o, g, r, a, m) {\n' +
      '      i[\'GoogleAnalyticsObject\'] = r;\n' +
      '      i[r] = i[r] || function() {\n' +
      '        (i[r].q = i[r].q || []).push(arguments)\n' +
      '      }, i[r].l = 1 * new Date();\n' +
      '      a = s.createElement(o),\n' +
      '        m = s.getElementsByTagName(o)[0];\n' +
      '      a.async = 1;\n' +
      '      a.src = g;\n' +
      '      m.parentNode.insertBefore(a, m)\n' +
      '    })(window, document, \'script\', \'https://www.google-analytics.com/analytics.js\', \'ga\');\n' +
      '    ga(\'create\', \'UA-132675881-1\', \'auto\');\n' +
      '    ga(\'send\', \'pageview\');';

    this.document.head.appendChild(gtagman);
    this.document.head.appendChild(gtagglob);
    this.document.head.appendChild(gtagglobaction);
    this.document.head.appendChild(ga);
  }

  agreeToCookies(options: Array<ICookiesConsentOption>) {
    if (isPlatformBrowser(this.platformId)) {
      options.filter(o => o.model).forEach((o: ICookiesConsentOption) => {
        if (o.entityId === 'ga') {
          this.allowTracking = true;
          this.cookieService.set('allow', '1', 7);
          this.addTrackerCode();
        }

        if (o.entityId === 'save') {
          this.cookieService.set('dont', '1', 7);
        }

        if (o.entityId === 'site') {
          this.cookieService.set('lang', this.pageDataGuardService.appSettings.language, 7);
        }
      });

      options.filter(o => !o.model).forEach((o: ICookiesConsentOption) => {
        if (o.entityId === 'save') {
          this.cookieService.delete('dont');
        }

        if (o.entityId === 'site') {
          this.cookieService.delete('lang');
        }
      });
    }

    this.closeModal();
  }

  closeModal() {
    this.modalService.closeModal('cookieConfirm', 'dismiss', null);
  }

  ngOnInit() {
    this.modalConsent = this.pageDataGuardService.pageData.index.cookies;
    if (isPlatformBrowser(this.platformId)) {
      const locale = this.pageDataGuardService.appSettings.locale;
      const html = document.getElementsByTagName('html')[0];
      html.setAttribute('lang', locale.codeISO2);
      this.meta.addTag({ name: 'og:locale', content: `${locale.codeISO2}_${locale.locale}`});
      this.meta.addTag({ name: 'og:description', content: this.pageDataGuardService.pageData.index.pageMetadata.description});
      this.isBrowser = true;

      if (this.cookieService.get('lang')) {
        this.cookieService.set('lang', this.pageDataGuardService.appSettings.language, 7)
      }
    }
  }

  ngAfterViewInit() {
    if (!this.cookieService.get('dont') && isPlatformBrowser(this.platformId)) {
      this.modalService.openModal('cookieConfirm', this.cookieConfirmationModal, {}, {closeWithBackdrop: false});
    }
  }

  showPP() {
    this.modalService.openPrivacyPolicy('cookieConfirm', this.cookieConfirmationModal, {}, {closeWithBackdrop: false});
  }
}
