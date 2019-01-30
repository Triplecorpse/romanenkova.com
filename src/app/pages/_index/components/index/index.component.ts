import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID, TemplateRef,
  ViewChild
} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {ActivatedRoute, NavigationEnd, Router, RouterEvent} from '@angular/router';
import {filter} from 'rxjs/operators';
import {ModalService} from '../../services/modal.service';
import {environment} from "../../../../../environments/environment";
import {PageDataGuardService} from "../../../../page-data-guard.service";

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
  private allowTracking: boolean;
  public isBrowser: boolean = false;

  @ViewChild('cookieConfirmationModal') private cookieConfirmationModal: TemplateRef<any>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              @Inject(DOCUMENT) private document: Document,
              private route: ActivatedRoute,
              private router: Router,
              private modalService: ModalService,
              private changeDetectorRef: ChangeDetectorRef,
              private meta: Meta,
              private pageDataGuardService: PageDataGuardService,
              private titleService: Title) {

    const pageData = this.pageDataGuardService.pageData;

    // if (isPlatformBrowser(this.platformId) && this.cookieService.get('allow') === '1') {
    //   this.addTrackerCode();
    //   this.allowTracking = true;
    // }

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

  private setMetadata() {

  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const locale = this.pageDataGuardService.appSettings.locale;
      const html = document.getElementsByTagName('html')[0];
      html.setAttribute('lang', locale.codeISO2);
      this.meta.addTag({ name: 'og:locale', content: `${locale.codeISO2}_${locale.locale}`});
      this.meta.addTag({ name: 'og:description', content: this.pageDataGuardService.pageData.index.pageMetadata.description});
      this.isBrowser = true;
    }
  }

  ngAfterViewInit() {
    // if (!this.cookieService.get('dont') && isPlatformBrowser(PLATFORM_ID)) {
      // this.modalService.openModal('cookieConfirm', this.cookieConfirmationModal, {}, false);
    // }
  }
}
