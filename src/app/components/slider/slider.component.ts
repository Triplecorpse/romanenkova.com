import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {SwiperComponent, SwiperConfigInterface, SwiperDirective} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent<T> implements AfterViewInit {
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
    if (!this.swiper.isAtLast) {
      this.swiperDirective.nextSlide();
    }
  }

  public slidePrev() {
    if (!this.swiper.isAtFirst) {
      this.swiperDirective.prevSlide();
    }
  }

  ngAfterViewInit() {
    this.swiperDirective = this.swiper.directiveRef;
  }

  onIndexChange($event: number) {
    this.indexChange.emit($event);
  }

  transitionEnd() {
    this.swiperDirective.update();
  }
}
