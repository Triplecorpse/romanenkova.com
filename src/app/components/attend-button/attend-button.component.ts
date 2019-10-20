import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ModalService} from '../../pages/_index/services/modal.service';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ReCaptcha2Component} from 'ngx-captcha';
import {ResolveScheduleService} from '../../resolve-schedule.service';
import {PageDataGuardService} from '../../page-data-guard.service';
import {Database} from '../../../../_interface/IMongooseSchema';
import {IAppointmentModal} from '../../../../_interface/IAppointmenntModal';
import {environment} from '../../../environments/environment';
import {addHours, format, isEqual, parse} from 'date-fns';

interface IMessenger {
  name: string;
  nickType: 'tel' | 'text';
  icon: string;
  nickPlaceholder: string;
  isNextSeparator?: boolean;
}

function eachHourOfInterval(range: { start: Date; end: Date }): Array<Date> {
  const currentDate = new Date(range.start.getTime());
  const endTime = range.end.getTime();
  const dates = [];

  currentDate.setMinutes(0, 0, 0);


  while (currentDate.getTime() <= endTime) {
    dates.push(new Date(currentDate.getTime()));
    currentDate.setHours(currentDate.getHours() + 1);
  }

  return dates;
}

@Component({
  selector: 'app-attend-button',
  templateUrl: './attend-button.component.html',
  styleUrls: ['./attend-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FormBuilder]
})
export class AttendButtonComponent implements OnInit {
  @Input() public service: Database.IService;
  @ViewChild('modalAppointment', {static: true}) private modalAppointmentRef: TemplateRef<any>;

  public header: string;
  public formGroup: FormGroup;
  public modalAppointment: IAppointmentModal;
  public lang: string;
  public errorObj: any = {};
  private isCaptchaResolved: boolean;
  public isSubmitting: boolean;
  public schedule: any;

  public dateControl: FormControl;
  public contactNameControl: FormControl;
  public contactValueControl: FormControl;
  public agreePP: FormControl;
  private timeControl: FormControl;
  private serviceControl: FormControl;

  public timeSlots: Array<string> = [];
  public contactNameLabel: string;
  public contactValueLabel: string;
  public contactValueType: string;
  public explanation: Array<string>;
  public messengerNames: Array<IMessenger | string> = [
    {name: 'Viber', nickType: 'tel', icon: '', nickPlaceholder: '@phone'},
    {name: 'WhatsApp', nickType: 'tel', icon: '', nickPlaceholder: '@phone'},
    {name: 'Telegram', nickType: 'text', icon: '', nickPlaceholder: '@nickname'},
    '_',
    {name: '@phone', nickType: 'text', icon: '', nickPlaceholder: '@phone / @nickname'}
  ];
  public services: Array<Database.IService>;
  public captchaKey = environment.recaptcha;

  constructor(private modalService: ModalService,
              private formBuilder: FormBuilder,
              private httpClient: HttpClient,
              private changeDetectorRef: ChangeDetectorRef,
              private scheduleService: ResolveScheduleService,
              private pageDataGuardService: PageDataGuardService) {
  }

  ngOnInit() {
    this.modalAppointment = this.pageDataGuardService.pageData.index.appointment;
    this.modalAppointment.agreepp = this.pageDataGuardService.pageData.index.agreepp;
    this.header = this.modalAppointment.header;
    this.messengerNames = this.messengerNames
      .map((messengerObj: IMessenger | string) => {
        if (typeof messengerObj === 'string') {
          return messengerObj;
        }

        messengerObj.name = messengerObj.name
          .replace('@phone', this.modalAppointment.phoneOption);

        messengerObj.nickPlaceholder = messengerObj.nickPlaceholder
          .replace('@nickname', this.modalAppointment.nickname)
          .replace('@phone', this.modalAppointment.phone);

        return messengerObj;
      });
    this.explanation = this.modalAppointment.explanation.split('\n');
    this.contactNameLabel = this.modalAppointment.contact;
    this.contactValueLabel = this.modalAppointment.contactOption;
    this.services = this.pageDataGuardService.pageData.index.services;

    this.dateControl = new FormControl();
    this.contactNameControl = new FormControl();
    this.contactValueControl = new FormControl({value: '', disabled: !this.contactNameControl.value});
    this.timeControl = new FormControl({value: '', disabled: !this.dateControl.value});
    this.serviceControl = new FormControl({value: this.service, disabled: !!this.service});
    this.agreePP = new FormControl('', Validators.required);
    this.formGroup = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      contactNameControl: this.contactNameControl,
      contactValueControl: this.contactValueControl,
      email: new FormControl('', [Validators.email, Validators.required]),
      date: this.dateControl,
      time: this.timeControl,
      message: new FormControl(),
      service: this.serviceControl,
      agreepp: this.agreePP,
      recaptcha: new FormControl('', Validators.required)
    });

    this.lang = this.pageDataGuardService.appSettings.language;
    this.schedule = this.pageDataGuardService.pageData.index.schedule;

    this.dateControl.valueChanges.subscribe((newValue: Date) => {
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
        this.contactValueLabel = this.modalAppointment.contactOption;
        this.contactValueControl.setValue(null);
        this.contactValueControl.disable();
      }
      this.changeDetectorRef.markForCheck();
    });
  }

  openModal(tpl: TemplateRef<any>) {
    this.modalService.openModal('appointment', tpl, this.modalAppointment);
  }

  submit(e: FormGroupDirective, captchaElement: ReCaptcha2Component) {
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
        timezone: format(new Date(), 'xxx'),
        service,
        language: this.pageDataGuardService.appSettings.language
      }, {
        params: {
          v: '2'
        }
      }
    ).subscribe((data: any) => {
      this.isSubmitting = false;
      this.modalService.closeModal('appointment', 'success', e.value);
      this.modalService.alert(data);
      captchaElement.resetCaptcha();
      captchaElement.reloadCaptcha();
      this.formGroup.reset();
      this.changeDetectorRef.markForCheck();
    }, (err: any) => {
      this.isSubmitting = false;
      captchaElement.resetCaptcha();
      captchaElement.reloadCaptcha();
      this.errorObj.name = err.error.name;
      this.errorObj.email = err.error.email;
      this.changeDetectorRef.markForCheck();
    });
  }

  handleExpire() {
    this.isCaptchaResolved = false;
  }

  handleSuccess($event) {
    this.isCaptchaResolved = true;
  }

  getTimeSlots(date: Date) {
    this.timeSlots = [];
    if (!date) {
      return;
    }
    const weekdaysMapper = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'];
    const scheduleByDates = this.schedule.find(scheduleItemDate => isEqual(date, parse(scheduleItemDate.date, 'dd.MM.yyyy', 0)));
    const scheduleByWeekdays = this.schedule.find(scheduleItemWeekday => scheduleItemWeekday.weekday === weekdaysMapper[date.getDay()]);
    const schedule = scheduleByDates || scheduleByWeekdays;

    if (!schedule.availableHours) {
      return;
    }

    schedule.availableHours.forEach((hours: string, index: number): void => {
      const hoursArr = hours.split('-');
      const start = parse(hoursArr[0], 'HH:mm', 0);
      const end = parse(hoursArr[1], 'HH:mm', 0);
      const range = {start, end};
      const slots = eachHourOfInterval(range)
        .map((startTime: Date): string => `${format(startTime, 'HH:mm')} - ${format(addHours(startTime, 1), 'HH:mm')}`);

      if (index < schedule.availableHours.length - 1) {
        slots.push('_');
      }

      this.timeSlots.push(...slots);
    });
  }

  openPP(captchaElement) {
    captchaElement.resetCaptcha();
    captchaElement.reloadCaptcha();
    this.modalService.openPrivacyPolicy('appointment', this.modalAppointmentRef, this.modalAppointment);
  }
}
