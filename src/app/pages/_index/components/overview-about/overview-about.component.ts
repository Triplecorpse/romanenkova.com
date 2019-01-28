import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Inject,
  Input,
  OnInit,
  ViewChild,
  PLATFORM_ID
} from '@angular/core';
import IPage from '../../../../interfaces/iPage';
import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {fadeAndSlideToRight} from '../../shortcuts/animations';
import {ActivatedRoute} from '@angular/router';
import {Page} from "../../../../../../_interface/IPage";
import {PageDataGuardService} from "../../../../page-data-guard.service";
import {IOverview} from "../../../../../../_interface/IOverview";

@Component({
  selector: 'app-overview-about',
  templateUrl: './overview-about.component.html',
  styleUrls: ['./overview-about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeAndSlideToRight()
  ]
})
export class OverviewAboutComponent implements OnInit, AfterViewInit {
  public animationState: string;
  private isViewInit: boolean;
  public pageBlock: IOverview<Page.IAboutPage>;
  public position: string;
  public fullName: string;

  @ViewChild('el') private el: ElementRef;
  @HostListener('window:scroll')
  private listener() {
    if (isPlatformBrowser(this.platformId)) {
      const elPos = this.el.nativeElement.getBoundingClientRect();

      if ((elPos.y || elPos.top) + elPos.height <= window.innerHeight && this.isViewInit) {
        this.animationState = 'visible';
      }
    } else {
      this.animationState = 'visible';
    }
  }

  constructor(@Inject(DOCUMENT) private document: Document,
              @Inject(PLATFORM_ID) private platformId: Object,
              private route: ActivatedRoute,
              private pageDataGuardService: PageDataGuardService) {
  }

  ngOnInit() {
    this.pageBlock = this.pageDataGuardService.pageData.main.about;
    const headerArr = this.pageBlock.header.split('|');
    this.position = headerArr[0];
    this.fullName = headerArr[1];

    this.listener();
  }

  ngAfterViewInit() {
    this.isViewInit = true;
    this.listener();
  }
}
