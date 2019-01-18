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
  public mainText: string;
  private isViewInit: boolean;
  public blockData: IPage<string>;

  @Input() public name: string;
  @Input() public position: string;
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
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const pageBlock = this.route.snapshot.data.pageBlocks[0];
    this.blockData = pageBlock.entityId === 'about' ? pageBlock : pageBlock.find((page: IPage<any>) => page.entityId === 'about');
    this.mainText = (this.blockData.pageData as string)
      .split('\n')
      .filter((s: string) => Boolean(s))[0];

    this.listener();
  }

  ngAfterViewInit() {
    this.isViewInit = true;
    this.listener();
  }
}
