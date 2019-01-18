import {ChangeDetectionStrategy, Component, HostListener, Inject, Input, OnInit, PLATFORM_ID} from '@angular/core';
import {INavigationItem} from '../../../../interfaces/iNavigation';
import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {IContact} from '../../../../interfaces/iContact';

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

  @Input() isRoot: boolean;
  @Input() header: string;
  @Input() title: Array<string>;
  @Input() nav: Array<INavigationItem>;
  @Input() contactData: Array<IContact>;

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

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: Object) {
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth < 1024;
    }
  }

  public toggleNavOpen(state: boolean): void {
    this.isNavOpen = state;
  }
}
