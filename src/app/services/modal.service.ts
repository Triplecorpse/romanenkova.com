import {Injectable, TemplateRef} from '@angular/core';
import {Subject} from 'rxjs';
import {IModalEvent} from '../interfaces/iModalEvent';
import {filter, take} from 'rxjs/operators';
import {IModalOptions} from '../interfaces/IModalOptions';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private _modalEvent: Subject<IModalEvent> = new Subject<IModalEvent>();
  public closeWithBackdrop: boolean;
  public isFullScreen: boolean;

  public get modalEvent() {
    return this._modalEvent.asObservable();
  }

  public openModal<T = any>(name: string, tpl: TemplateRef<T>, ctx: T, options: IModalOptions = {}) {
    this.closeWithBackdrop = options.closeWithBackdrop !== false;
    this.isFullScreen = options.fullScreen;
    this._modalEvent.next({name, type: 'open', success: true, template: tpl, context: ctx});
  }

  public openLightbox(src) {
    this.isFullScreen = true;
    this.closeWithBackdrop = true;
    this._modalEvent.next({name: 'lightbox', type: 'open', success: true, context: src});
  }

  public openPrivacyPolicy<T = any>(afterCloseName?: string,
                                    afterCloseTpl?: TemplateRef<T>,
                                    afterCloseCtx?: T,
                                    afterCloseOptions: IModalOptions = {}) {
    this.isFullScreen = false;
    this.closeWithBackdrop = true;
    this._modalEvent.next({name: 'privacy-policy', type: 'open', success: true});

    this.modalEvent.pipe(
      filter(() => Boolean(afterCloseName)),
      filter((modalEvent: IModalEvent): boolean => modalEvent.type === 'dismiss' || modalEvent.type === 'success'),
      filter((modalEvent: IModalEvent): boolean => modalEvent.name === 'tc'),
      take(1),
    ).subscribe(this.openModal.bind(this, afterCloseName, afterCloseTpl, afterCloseCtx, afterCloseOptions));
  }

  public alert(options: {header: string; body: string; }) {
    this._modalEvent.next({name: 'alert', type: 'open', success: true, context: options});
  }

  public closeModal(name: string, type?: 'dismiss' | 'success', data?: any) {
    this._modalEvent.next({name, type, success: type === 'success', resolve: data});
  }
}
