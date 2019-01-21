import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {IService} from '../../../interfaces/IService';
import {IModalAppointment} from "../../../interfaces/iModalAppointment";
import * as moment from 'moment-timezone';
import IPage from "../../../interfaces/iPage";
import {ISchedule} from "../../../interfaces/iSchedule";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class InterceptResponseService implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((data) => {
        data = this.modifyServices(data);
        data = this.modifyAppointmentModal(data);
        data = this.modifySchedule(data);
        return data;
      })
    );
  }

  private modifySchedule(data: HttpEvent<any>): HttpEvent<any> {
    if (data instanceof HttpResponse && data.url.indexOf('/schedule') > -1) {
      return data.clone({
        body: data.body.map(map)
      });
    }

    function map(item: ISchedule) {
      const guessed = moment.tz.guess();

      item.availableHours = item.availableHours.map((hour: string) => {
        const hourArr = hour.split('-');
        const periodStart = moment.tz(moment(hourArr[0], 'HH:mm'), 'Europe/Kiev').tz(guessed);
        const periodEnd = moment.tz(moment(hourArr[1], 'HH:mm'), 'Europe/Kiev').tz(guessed);
        return `${periodStart.format('HH:mm')}-${periodEnd.format('HH:mm')}`;
      });

      return item;
    }

    return data;
  }

  private modifyAppointmentModal(data: HttpEvent<any>): HttpEvent<any> {
    if (data instanceof HttpResponse && data.url.indexOf('id=%5Bmodal%5D%20appointment') > -1) {
      return data.clone({
        body: data.body.map(appointmentModalMapFunction)
      });
    }

    return data;

    function appointmentModalMapFunction(item: IPage<any>) {
      if (item.entityId !== '[modal] appointment') {
        return item;
      }
      const modal = item.pageData as IModalAppointment;
      const positiveOffset = -new Date().getTimezoneOffset();
      const duration = moment.duration(positiveOffset, 'minutes');
      let hours = doublizeString(Math.abs(duration.hours()).toString());
      hours = duration.hours().toString() > 0
        ? '+' + hours
        : '-' + hours;
      const offsetStr = hours + ':' + doublizeString(duration.minutes().toString());
      const tzString = moment.tz.guess();
      modal.timezone = `${tzString} GMT ${offsetStr}`;

      return item;
    }

    function doublizeString(str: string): string {
      if (str.length === 1) {
        str = '0' + str;
      }

      return str;
    }
  }

  private modifyServices(data: HttpEvent<any>): HttpEvent<any> {
    if (data instanceof HttpResponse && data.url.indexOf('/service') > -1) {
      return data.clone({
        body: data.body.map(serviceMapFunction)
      });
    } else if (data instanceof HttpResponse && data.url.indexOf('id=service') > -1) {
      return data.clone({
        body: {
          ...data.body,
          pageData: data.body.pageData.map(serviceMapFunction)
        }
      });
    }

    function serviceMapFunction(serviceItem: IService) {
      serviceItem.headerAndPrice = serviceItem.header;
      serviceItem.price
        ? serviceItem.headerAndPrice += ` - ${serviceItem.currency} ${serviceItem.price}/${serviceItem.period}`
        : serviceItem.headerAndPrice += ` - ${serviceItem.noPriceValue}`;

      return serviceItem;
    }

    return data;
  }
}
