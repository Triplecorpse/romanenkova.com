import {
  ChangeDetectorRef, Component, HostListener, OnInit, Renderer2, TemplateRef, ViewChild, PLATFORM_ID, Inject
} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {ModalService} from '../../services/modal.service';
import {IModalEvent} from '../../interfaces/iModalEvent';
import {filter} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {fade} from '../../shortcuts/animations';
import {ITermsPolicy} from '../../../../_interface/ITermsPolicy';
import {HttpClient} from '@angular/common/http';
import {PageDataGuardService} from '../../page-data-guard.service';

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
  canClose: boolean;
  isFullScreen: boolean;
  openModalName: string;
  template: TemplateRef<any>;
  context: any;
  events$: Subject<any> = new Subject();
  tc: ITermsPolicy = {header: '', body: ''};
  isPrivacyPolicy: boolean;
  isAlert: boolean;
  public isLoadingText: string;

  @ViewChild('lightboxTpl', {static: true}) public lightbox: TemplateRef<string>;
  @ViewChild('alertTpl', {static: true}) public alert: TemplateRef<{header: string; body: string}>;
  @ViewChild('tcModalLoadingTpl', {static: true}) public tcModalLoadingTpl: TemplateRef<string>;
  @ViewChild('tcModalTpl', {static: true}) public tcModalTpl: TemplateRef<ITermsPolicy>;
  @HostListener('window:scroll', ['$event'])
  private scrollListener($event) {
    if (this.isModalOpen) {
      $event.preventDefault();
    }
  }

  constructor(private modalService: ModalService,
              private renderer: Renderer2,
              private changeDetectorRef: ChangeDetectorRef,
              private httpClient: HttpClient,
              private pageDataGuardService: PageDataGuardService,
              @Inject(PLATFORM_ID) private platformId: Object) { }

  public closeModal(status: 'dismiss' | 'success', resolve: any): void {
    if (this.modalService.closeWithBackdrop) {
      this.modalService.closeModal(this.openModalName, status, resolve);
    }
  }

  public stopPropagation($event: Event): void {
    $event.stopPropagation();
    this.events$.next($event);
  }

  public ngOnInit(): void {
    this.isLoadingText = this.pageDataGuardService.pageData.index.tcIsLoading;
    this.modalService.modalEvent.pipe(
      filter((modalEvent: IModalEvent): boolean => modalEvent.type === 'open')
    ).subscribe((data: IModalEvent): void => {
      let template: TemplateRef<any>;
      this.isAlert = false;
      this.isPrivacyPolicy = false;

      if (data.name === 'lightbox') {
        template = this.lightbox;
      } else if (data.name === 'alert') {
        template = this.alert;
        this.isAlert = true;
      } else if (data.name === 'privacy-policy') {
        return this.loadPrivacyPolicy();
      } else {
        template = data.template;
      }

      this.isModalOpen = true;
      this.openModalName = data.name;
      this.template = template;
      this.context = data.context;
      this.renderer.addClass(document.body, 'modal-overlay');
      this.canClose = this.modalService.closeWithBackdrop;
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

  public loadPrivacyPolicy() {
    if (this.tc.header) {
      this.modalService.openModal('tc', this.tcModalTpl, this.tc);
      this.isPrivacyPolicy = true;
      this.changeDetectorRef.markForCheck();
    } else {
      this.modalService.openModal('tcl', this.tcModalLoadingTpl, this.isLoadingText);
      this.httpClient.get<ITermsPolicy>('privacy-policy', {params: {v: '2'}})
        .subscribe((pp: ITermsPolicy) => {
          this.tc = pp;
          this.modalService.closeModal('tcl');
          this.modalService.openModal('tc', this.tcModalTpl, this.tc);
          this.isPrivacyPolicy = true;
          this.changeDetectorRef.markForCheck();
        });
    }
  }
}
