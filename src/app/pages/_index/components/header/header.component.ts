import {ChangeDetectionStrategy, Component, HostListener, Inject, Input, OnInit, PLATFORM_ID} from '@angular/core';
import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {PageDataGuardService} from "../../../../page-data-guard.service";
import {Database} from "../../../../../../_interface/IMongooseSchema";

export interface ILanguageState {
  open: boolean;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  public isFixed: boolean;
  public isOpen: boolean;
  public isNavOpen: boolean;
  public isMobile: boolean;
  public title: [string, string];
  public routerLink: string;

  @Input() isRoot: boolean;
  @Input() header: string;
  @Input() contactData: Array<Database.IContact>;

  @HostListener('window:scroll')
  private listener(): void {
    const scrollTop = this.document.documentElement.scrollTop;
    this.isFixed = !this.isMobile && scrollTop > 35;
    this.isOpen = false;
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
