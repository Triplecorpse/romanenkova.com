import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, Inject, Input, OnInit, PLATFORM_ID} from '@angular/core';
import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {PageDataGuardService} from '../../page-data-guard.service';
import {Database} from '../../../../_interface/IMongooseSchema';
import {fade} from '../../shortcuts/animations';
import {HeaderService} from '../../services/header.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

export interface ILanguageState {
  open: boolean;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fade()
  ]
})
export class HeaderComponent implements OnInit {
  public isFixed: boolean;
  public isOpen: boolean;
  public isNavOpen: boolean;
  public isMobile: boolean;
  public title: [string, string];
  public routerLink: string;
  public showHeaderLine1: boolean = true;
  public showButton = true;
  private previousScrollTop: number;
  private navOpenTime: number;

  @Input() isRoot: boolean;
  @Input() header: string;
  @Input() contactData: Array<Database.IContact>;
  @Input() isArticlePage: boolean;
  @Input() isArticlesPage: boolean;

  @HostListener('window:scroll')
  private listener(): void {
    if (isPlatformBrowser(this.platformId)) {
      const scrollTop = Math.max(window.pageYOffset, this.document.documentElement.scrollTop, this.document.body.scrollTop);
      this.isFixed = !this.isMobile && scrollTop > 0;
      this.showHeaderLine1 = this.previousScrollTop >= scrollTop || scrollTop < 100;
      this.previousScrollTop = scrollTop;
      this.isOpen = false;
    }
  }

  @HostListener('window:resize')
  private onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth < 1025;
    }
  }

  constructor(@Inject(DOCUMENT) private document: Document,
              @Inject(PLATFORM_ID) private platformId: Object,
              private pageDataGuardService: PageDataGuardService,
              private headerService: HeaderService,
              private changeDetectionRef: ChangeDetectorRef,
              private router: Router,
              private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.title = this.pageDataGuardService.pageData.index.rootLink;
    this.routerLink = '/' + this.pageDataGuardService.appSettings.language;
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 1024;
    }
    this.headerService.header$.subscribe((header) => {
      this.header = header;
      this.changeDetectionRef.markForCheck();
    });
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.showButton = !event.urlAfterRedirects.includes('/article/');
      });

    this.showButton = !this.router.url.includes('/article/');
  }

  public toggleNavOpen(state: boolean): void {
    this.isNavOpen = state;

    this.navOpenTime = state ? Date.now() : 0;
  }

  checkIfCloseMenu() {
    if (Date.now() - this.navOpenTime >= 100) {
      this.toggleNavOpen(false);
      this.navOpenTime = 0;
    }
  }
}
