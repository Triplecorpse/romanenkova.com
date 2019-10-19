import {
  ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, TemplateRef, ViewChild,
  ViewChildren
} from '@angular/core';
import {SwiperConfigInterface, SwiperComponent, SwiperDirective} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent<T> implements OnInit {
  @Input() public template: TemplateRef<T>;
  @Input() public slides: Array<T>;
  @Input() public sideButtons: boolean;
  @Input() public sideButtonsMobile: boolean = true;
  @Input() public index: number = 0;
  @Output() public indexChange: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild('swiper', {static: true}) public swiper: SwiperComponent;
  @ViewChildren('slideTpl') public slideTpls: QueryList<ElementRef>;

  private slideHeights: Array<number> = [];
  public swiperDirective: SwiperDirective;
  public currentIndex: number = this.index;
  public config: SwiperConfigInterface = {
    slidesPerView: 'auto',
    direction: 'horizontal',
    spaceBetween: 1
  };

  constructor() {
  }

  public slideNext() {
    this.swiperDirective.nextSlide();
  }

  public slidePrev() {
    this.swiperDirective.prevSlide();
  }

  ngOnInit() {
    this.swiperDirective = this.swiper.directiveRef;
  }

  onIndexChange($event: number) {
    this.indexChange.emit($event);
  }

  transitionEnd() {
    this.swiperDirective.update();
  }
}
