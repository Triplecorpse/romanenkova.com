import {Injectable, TemplateRef} from '@angular/core';
import IPage from '../../../interfaces/iPage';
import {IModalAppointment} from '../../../interfaces/iModalAppointment';
import {Subject} from 'rxjs';
import {IModalEvent} from '../../../interfaces/iModalEvent';
import {IService} from '../../../interfaces/IService';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private _modalAppointment: IPage<IModalAppointment>;
  private _modalEvent: Subject<IModalEvent> = new Subject<IModalEvent>();
  public services: Array<IService>;
  public closeWithBackdrop: boolean;
  public isFullScreen: boolean;

  public set modalAppointment(value: IPage<IModalAppointment>) {
    if (this._modalAppointment) {
      throw new Error('Modal appointment is already set');
    }

    this._modalAppointment = value;
  }

  public get modalAppointment(): IPage<IModalAppointment> {
    return this._modalAppointment;
  }

  public get modalEvent() {
    return this._modalEvent.asObservable();
  }

  public openModal(name: string, tpl: TemplateRef<any>, ctx: any, options: IModalOptions = {}) {
    this.closeWithBackdrop = options.closeWithBackdrop !== false;
    this.isFullScreen = options.fullScreen;
    this._modalEvent.next({name, type: 'open', success: true, template: tpl, context: ctx});
  }

  public openLightbox(src) {
    this.isFullScreen = true;
    this.closeWithBackdrop = true;
    this._modalEvent.next({name: 'lightbox', type: 'open', success: true, context: src});
  };

  public alert(options: {header: string; body: string;}) {
    this._modalEvent.next({name: 'alert', type: 'open', success: true, context: options});
  };

  public closeModal(name: string, type: 'dismiss' | 'success', data: any) {
    this._modalEvent.next({name, type, success: type === 'success', resolve: data});
  }
}
