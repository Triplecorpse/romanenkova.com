import {ChangeDetectionStrategy, Component, HostListener, Inject, Input, OnInit, PLATFORM_ID} from '@angular/core';
import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {PageDataGuardService} from '../../page-data-guard.service';
import {Database} from '../../../../_interface/IMongooseSchema';
import {fade} from '../../shortcuts/animations';

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
  private previousScrollTop: number;

  @Input() isRoot: boolean;
  @Input() header: string;
  @Input() contactData: Array<Database.IContact>;
  @Input() isArticlePage: boolean;

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
      this.isMobile = window.innerWidth < 1024;
    }
  }

  constructor(@Inject(DOCUMENT) private document: Document,
              @Inject(PLATFORM_ID) private platformId: Object,
              private pageDataGuardService: PageDataGuardService) {
  }

  ngOnInit() {
    this.title = this.pageDataGuardService.pageData.index.rootLink;
    this.routerLink = '/' + this.pageDataGuardService.appSettings.language;
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth < 1024;
    }
  }

  public toggleNavOpen(state: boolean): void {
    this.isNavOpen = state;
  }
}
