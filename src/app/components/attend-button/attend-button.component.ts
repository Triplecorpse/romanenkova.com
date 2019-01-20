import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, TemplateRef,
  ViewChild
} from '@angular/core';
import {ModalService} from '../../pages/_index/services/modal.service';
import {IModalAppointment} from '../../interfaces/iModalAppointment';
import IPage from '../../interfaces/iPage';
import {FormBuilder, FormGroup, FormControl, Validators, FormGroupDirective} from '@angular/forms';
import {LanguageGuardService} from '../../language-guard.service';
import {HttpClient} from '@angular/common/http';
import {ReCaptcha2Component} from 'ngx-captcha';
import {ResolveScheduleService} from '../../resolve-schedule.service';
import {Moment} from 'moment';
import {ISchedule} from '../../interfaces/iSchedule';
import * as initMoment from 'moment-timezone';
import {extendMoment} from 'moment-range';
import {IService} from '../../interfaces/IService';
import {I18nService} from '../../services/i18n.service';

const moment = extendMoment(initMoment);

interface IMessenger {
  name: string;
  nickType: 'tel' | 'text';
  icon: string;
  nickPlaceholder: string;
}

@Component({
  selector: 'app-attend-button',
  templateUrl: './attend-button.component.html',
  styleUrls: ['./attend-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FormBuilder]
})
export class AttendButtonComponent implements OnInit {
  @Input() public service: IService;
  @ViewChild('modalAppointment') private modalAppointmentRef: TemplateRef<any>;
  @ViewChild('modalAppointmentMessage') private modalAppointmentMessageRef: TemplateRef<any>;

  public text: string;
  public formGroup: FormGroup;
  public modalAppointment: IPage<IModalAppointment>;
  public lang: string;
  public errorObj: any = {};
  private isCaptchaResolved: boolean;
  public isSubmitting: boolean;
  public schedule: any;
  public dateControl: FormControl;
  public contactNameControl: FormControl;
  public contactValueControl: FormControl;
  private timeControl: FormControl;
  private serviceControl: FormControl;
  public timeSlots: Array<string> = [];
  public contactNameLabel: string;
  public contactValueLabel: string;
  public contactValueType: string;
  public explanation: Array<string>;
  public messengerNames: Array<IMessenger> = [
    {name: '@phone', nickType: 'tel', icon: '', nickPlaceholder: '@phone'},
    {name: 'Viber', nickType: 'tel', icon: '', nickPlaceholder: '@phone'},
    {name: 'Messenger', nickType: 'text', icon: '', nickPlaceholder: '@nickname'},
    {name: 'Telegram', nickType: 'text', icon: '', nickPlaceholder: '@nickname'}
  ];
  public services: Array<IService>;

  constructor(private modalService: ModalService,
              private formBuilder: FormBuilder,
              private languageGuardService: LanguageGuardService,
              private httpClient: HttpClient,
              private changeDetectorRef: ChangeDetectorRef,
              private scheduleService: ResolveScheduleService,
              private i18nService: I18nService) {
  }

  ngOnInit() {
    this.modalAppointment = this.modalService.modalAppointment;
    this.messengerNames = this.messengerNames
      .map((messengerObj: IMessenger) => {
        messengerObj.name = messengerObj.name
          .replace('@phone', (this.modalAppointment.pageData as IModalAppointment).phone);
        messengerObj.nickPlaceholder = messengerObj.nickPlaceholder
          .replace('@nickname', (this.modalAppointment.pageData as IModalAppointment).nickname)
          .replace('@phone', (this.modalAppointment.pageData as IModalAppointment).phone);

        return messengerObj;
      });
    this.explanation =
      (this.modalAppointment.pageData  as IModalAppointment).explanation.split('\n');
    this.contactNameLabel = (this.modalAppointment.pageData as IModalAppointment).contact;
    this.contactValueLabel = (this.modalAppointment.pageData as IModalAppointment).contactOption;
    this.services = this.modalService.services;
    this.dateControl = new FormControl();
    this.contactNameControl = new FormControl();
    this.contactValueControl = new FormControl({value: '', disabled: !this.contactNameControl.value});
    this.timeControl = new FormControl({value: '', disabled: !this.dateControl.value});
    this.serviceControl = new FormControl({value: this.service, disabled: !!this.service});
    this.formGroup = this.formBuilder.group({
      name: new FormControl(),
      contactNameControl: this.contactNameControl,
      contactValueControl: this.contactValueControl,
      email: new FormControl('', Validators.email),
      date: this.dateControl,
      time: this.timeControl,
      message: new FormControl(),
      service: this.serviceControl,
      recaptcha: new FormControl('', Validators.required)
    });
    this.lang = this.languageGuardService.selectedLang;
    this.schedule = this.scheduleService.schedule;

    this.dateControl.valueChanges.subscribe((newValue: Moment) => {
      this.getTimeSlots(newValue);
      if (this.timeSlots.indexOf(this.timeControl.value) === -1) {
        this.timeControl.setValue(null);
      }
      if (newValue && this.timeSlots.length) {
        this.timeControl.enable();
      } else {
        this.timeControl.disable();
      }
      this.changeDetectorRef.markForCheck();
    });

    this.contactNameControl.valueChanges.subscribe((newValue: IMessenger) => {
      if (newValue) {
        this.contactValueLabel = newValue.nickPlaceholder;
        this.contactValueType = newValue.nickType;
        this.contactValueControl.enable();
      } else {
        this.contactValueLabel = (this.modalAppointment.pageData as IModalAppointment).contactOption;
        this.contactValueControl.setValue(null);
        this.contactValueControl.disable();
      }
      this.changeDetectorRef.markForCheck();
    });
    this.text = this.i18nService.attendButtonLabel;
  }

  openModal(tpl: TemplateRef<any>) {
    this.modalService.openModal('appointment', tpl, this.modalAppointment);
  }

  submit(e: FormGroupDirective, captchaElement: ReCaptcha2Component) {
    const guessed = initMoment.tz.guess();
    const offset = initMoment.tz(guessed).utcOffset();
    const duration = initMoment.duration(offset, 'minutes');
    const sign = duration.hours().toString()[0] === '-' ? '=' : '+';
    let hours = Math.abs(duration.hours()).toString();
    let minutes = duration.minutes().toString();
    if (hours.length === 1) {
      hours = '0' + hours;
    }
    if (minutes.length === 1) {
      minutes = '0' + minutes;
    }
    const timezone = `${sign}${hours}:${minutes}`;
    let service = e.value.service
      ? e.value.service.headerAndPrice
      : null;

    service = this.service
      ? this.service.headerAndPrice
      : service;

    this.errorObj = {};
    this.isSubmitting = true;
    this.httpClient.post('appointment',
      {
        ...e.value,
        date: e.value.date ? e.value.date.format('DD.MM.YYYY') : null,
        timezone: `${guessed} ${timezone}`,
        service
      }
    ).subscribe((data: any) => {
      this.isSubmitting = false;
      this.modalService.closeModal('appointment', 'success', e.value);
      this.modalService.openModal('appointment', this.modalAppointmentMessageRef, {header: data.h, text: data.m});
      captchaElement.resetCaptcha();
      captchaElement.reloadCaptcha();
      this.changeDetectorRef.markForCheck();
    }, (err: any) => {
      this.isSubmitting = false;
      captchaElement.resetCaptcha();
      captchaElement.reloadCaptcha();
      this.errorObj.name = err.error.name;
      this.errorObj.contact = err.error.contact;
      this.changeDetectorRef.markForCheck();
    });
  }

  handleExpire() {
    this.isCaptchaResolved = false;
  }

  handleSuccess($event) {
    this.isCaptchaResolved = true;
  }

  getTimeSlots(date: Moment): void {
    this.timeSlots.length = 0;
    if (!date) {
      return;
    }
    const weekdaysMapper = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'];
    const schedule = (this.schedule.find((scheduleItem: ISchedule): boolean => date.isSame(moment(scheduleItem.date, 'DD.MM.YYYY')))
      || this.schedule.find((scheduleItem: ISchedule): boolean => scheduleItem.weekday === weekdaysMapper[date.weekday()])).availableHours;

    schedule.forEach((hours: string, index: number): void => {
      const hoursArr = hours.split('-');
      const start = moment(hoursArr[0], 'HH:mm');
      const end = moment(hoursArr[1], 'HH:mm');
      const range = moment.range(start, end);
      const slots = Array
        .from(range.by('hours'))
        .map((startTime: Moment): string =>
          `${startTime.format('HH:mm')} - ${startTime.add(1, 'hour').format('HH:mm')}`);
      if (index < schedule.length - 1) {
        slots.push('_');
      }
      this.timeSlots.push(...slots);
    });
  }
}