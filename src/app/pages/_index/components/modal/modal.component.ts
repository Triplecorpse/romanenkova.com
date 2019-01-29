import {
  ChangeDetectorRef, Component, HostListener, OnInit, Renderer2, TemplateRef, ViewChild, PLATFORM_ID, Inject
} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";
import {ModalService} from '../../services/modal.service';
import {IModalEvent} from '../../../../interfaces/iModalEvent';
import {filter} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {fade} from '../../shortcuts/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    fade()
  ]
})
export class ModalComponent implements OnInit {
  isModalOpen: boolean;
  isFullScreen: boolean;
  openModalName: string;
  template: TemplateRef<any>;
  context: any;
  events$: Subject<any> = new Subject();
  @ViewChild('lightboxTpl') public lightbox: TemplateRef<string>;
  @ViewChild('alertTpl') public alert: TemplateRef<{header: string; body: string}>;
  @HostListener('window:scroll', ['$event'])
  private scrollListener($event) {
    if (this.isModalOpen) {
      $event.preventDefault();
    }
  }

  constructor(private modalService: ModalService,
              private renderer: Renderer2,
              private changeDetectorRef: ChangeDetectorRef,
              @Inject(PLATFORM_ID) private platformId: Object) {
  }

  public closeModal(status: 'dismiss' | 'success', resolve: any): void {
    if (this.modalService.closeWithBackdrop) {
      this.modalService.closeModal('appointment', status, resolve);
    }
  }

  public stopPropagation($event: Event): void {
    $event.stopPropagation();
    this.events$.next($event);
  }

  public ngOnInit(): void {
    this.modalService.modalEvent.pipe(
      filter((modalEvent: IModalEvent): boolean => modalEvent.type === 'open')
    ).subscribe((data: IModalEvent): void => {
      let template: TemplateRef<any>;

      if (data.name === 'lightbox') {
        template = this.lightbox;
      } else if (data.name === 'alert') {
        template = this.alert;
      } else {
        template = data.template;
      }

      this.isModalOpen = true;
      this.openModalName = data.name;
      this.template = template;
      this.context = data.context;
      this.renderer.addClass(document.body, 'modal-overlay');
      this.isFullScreen = this.modalService.isFullScreen;
      this.changeDetectorRef.detectChanges();
    });

    this.modalService.modalEvent.pipe(
      filter((modalEvent: IModalEvent): boolean => modalEvent.type === 'dismiss' || modalEvent.type === 'success')
    ).subscribe((data: IModalEvent): void => {
      this.isModalOpen = false;
      this.openModalName = void 0;
      this.renderer.removeClass(document.body, 'modal-overlay');
    });
  }

  public openPicture(src: string) {
    if (isPlatformBrowser(this.platformId)) {
      window.open(src);
    }
  }
}
