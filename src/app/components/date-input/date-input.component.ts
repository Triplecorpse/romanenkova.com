import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, Input, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import {PageDataGuardService} from '../../page-data-guard.service';
import {Database} from '../../../../_interface/IMongooseSchema';
import {TWeekday} from '../../../../_interface/types';
import addDays from 'date-fns/addDays';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import format from 'date-fns/format';
import isEqual from 'date-fns/isEqual';
import isSameMonth from 'date-fns/isSameMonth';
import isSameYear from 'date-fns/isSameYear';
import isValid from 'date-fns/isValid';
import isWithinInterval from 'date-fns/isWithinInterval';
import {Locale} from 'date-fns';
import parse from 'date-fns/parse';
import set from 'date-fns/set';
import enUS from 'date-fns/locale/en-US';
import fr from 'date-fns/locale/fr';
import ru from 'date-fns/locale/ru';
import uk from 'date-fns/locale/uk';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateInputComponent),
  multi: true
};

const locales = {
  uk: uk,
  en: enUS,
  fr: fr,
  ru: ru
};

function parseDate(dateStr: string): Date {
  const formats = [
    'dd.MM.yyyy',
    'dd,MM,yyyy',
    'dd-MM-yyyy',
    'MM/dd/yyyy',
    'yyyy-MM-dd',
    'dd.MM',
    'dd,MM',
    'dd-MM',
    'MM/dd',
    'MM-dd'
  ];

  for (const formatStr of formats) {
    const date = parse(dateStr, formatStr, new Date());

    if (isValid(date) || formats[formats.length - 1] === formatStr) {
      return date;
    }
  }
}

function eachMonthOfInterval(range: { start: Date, end: Date }): Array<Date> {
  const currentDate = new Date(range.start.getTime());
  const endTime = range.end.getTime();
  const dates = [];

  currentDate.setDate(1);
  currentDate.setHours(0, 0, 0);

  while (currentDate.getTime() <= endTime) {
    dates.push(new Date(currentDate));
    currentDate.setMonth(currentDate.getMonth() + 1);
    currentDate.setDate(1);
  }

  return dates;
}

function getWeekdayDates(start: 0 | 1): Array<Date> {
  const startOfAWeek = new Date();
  const currentDay = startOfAWeek.getDay();
  const subtraction = currentDay - start;

  startOfAWeek.setDate(startOfAWeek.getDate() - subtraction);

  return eachDayOfInterval({
    start: startOfAWeek,
    end: addDays(startOfAWeek, 6)
  });
}

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateInputComponent implements ControlValueAccessor, OnInit {
  @Input() subscr: string;
  @Input() label: string;
  @Input() type: string;
  @Input() icon?: string;
  @Input() events$: Observable<Event>;
  @Input() control: FormControl;
  @Input() schedule: Array<Database.ISchedule>;
  @ViewChild('dateInput', {static: true}) dateInput: ElementRef;
  @ViewChild('calendarIconEl', {static: true}) calendarIconEl: ElementRef;

  format = format;
  locale: Locale;
  public weekdays: Array<string>;
  public monthYears: Array<string>;
  public isCalendarOpen: boolean;
  public selectedDate: Date;
  public minDate: Date;
  public monthYearRange: Array<Date>;
  public monthYearRangeIndex: number = 0;
  public value: string;
  public textValue: string;
  public parsedDate: string;
  private isDisabled: boolean;
  private range: { start: Date; end: Date };
  private unavailableDates: Array<Date>;
  private availableDates: Array<Date>;
  private unavailableWeekdays: Array<TWeekday>;
  private startOfToday = set(new Date(), {hours: 0, minutes: 0, seconds: 0, milliseconds: 0}).getTime();
  private onTouch: () => void;
  private onChange: (v: Date) => void = (v: Date) => {
  };

  constructor(private changeDetectorRef: ChangeDetectorRef,
              private pageDataGuardService: PageDataGuardService) {
  }

  public writeValueFromTemplate(value: string) {
    const parsedDate = parseDate(value);

    this.value = value;

    if (!value) {
      this.onChange(null);
    }

    if (isValid(parsedDate) && isWithinInterval(parsedDate, this.range) && this.getAvailability(parsedDate)) {
      this.writeValue(parsedDate);
      this.selectedDate = parsedDate;
    } else {
      this.control.setErrors({
        invalid: !isValid(parsedDate),
        notInRange: isValid(parsedDate) ? !isWithinInterval(parsedDate, this.range) : true,
        notAvailable: isValid(parsedDate) ? this.getAvailability(parsedDate) : true
      });

      this.selectedDate = new Date(this.startOfToday);
      this.parsedDate = '';
      this.onChange(null);
    }
  }

  public writeValue(value: Date): void {
    if (value instanceof Date) {
      this.value = format(value, 'dd.MM.yyyy');
      this.selectedDate = value;
    }

    this.parsedDate = value ? `(${format(value, 'dd MMMM yyyy')})` : '';
    this.control.setErrors(null);
    this.onChange(value);
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  public setDisabledState(state: boolean): void {
    this.isDisabled = state;
  }

  public async ngOnInit() {
    this.weekdays = getWeekdayDates(1)
      .map(date => format(date, 'EEEEEE', {locale: locales[this.pageDataGuardService.appSettings.language]}));
    this.schedule = this.pageDataGuardService.pageData.index.schedule;
    this.selectedDate = new Date(this.startOfToday);
    this.minDate = new Date(this.startOfToday);
    this.range = {
      start: new Date(this.startOfToday),
      end: addDays(new Date(this.startOfToday), 28),
    };
    this.monthYearRange = eachMonthOfInterval(this.range);

    this.events$.pipe(
      filter((e: Event): boolean => e.type === 'click')
    )
      .subscribe((e: Event) => {
        this.toggleCalendar(false);
        this.changeDetectorRef.markForCheck();
      });

    this.unavailableDates = this.schedule
      .filter((scheduleItem: Database.ISchedule): boolean => scheduleItem.date && scheduleItem.availableHours.length === 0)
      .map((scheduleItem: Database.ISchedule): Date => parse(scheduleItem.date, 'dd.MM.yyyy', 0));

    this.availableDates = this.schedule
      .filter((scheduleItem: Database.ISchedule): boolean => scheduleItem.date && scheduleItem.availableHours.length > 0)
      .map((scheduleItem: Database.ISchedule): Date => parse(scheduleItem.date, 'dd.MM.yyyy', 0));

    this.unavailableWeekdays = this.schedule
      .filter((scheduleItem: Database.ISchedule): boolean => !scheduleItem.date && scheduleItem.availableHours.length === 0)
      .map((scheduleItem: Database.ISchedule): TWeekday => scheduleItem.weekday);
  }

  public input($event): void {
    this.textValue = $event.data;
  }

  public toggleCalendar(state?: boolean): void {
    state !== undefined ? this.isCalendarOpen = state : this.isCalendarOpen = !this.isCalendarOpen;
    this.changeDetectorRef.markForCheck();
  }

  public stopPropagation($event: Event): void {
    $event.stopPropagation();
  }

  public setMonth(direction: string): void {
    if ((this.monthYearRangeIndex === 0 && direction === 'prev') ||
      this.monthYearRangeIndex === (this.monthYearRange.length - 1) && direction === 'next') {
      return;
    }

    this.monthYearRangeIndex += direction === 'next' ? 1 : -1;
  }

  public getDatesOfSelectedMonth(): Array<Date> {
    return eachDayOfInterval(this.range)
      .filter(date => isSameMonth(date, this.monthYearRange[this.monthYearRangeIndex]) &&
        isSameYear(date, this.monthYearRange[this.monthYearRangeIndex]));
  }

  public setActiveDate(day: Date): void {
    this.value = format(day, 'dd.MM.yyyy');
    this.control.enable();
    this.selectedDate = day;
    this.writeValue(day);
    this.toggleCalendar(false);
    this.changeDetectorRef.markForCheck();
  }

  public getMonthString(): string {
    const rawString =
      format(this.monthYearRange[this.monthYearRangeIndex], 'MMMM yyyy', {locale: locales[this.pageDataGuardService.appSettings.language]});
    return rawString.charAt(0).toUpperCase() + rawString.slice(1);
  }

  public focusInput(): void {
    this.dateInput.nativeElement.focus();
  }

  public onBlurInput() {
    this.value = this.parsedDate ? format(this.selectedDate, 'dd.MM.yyyy') : this.value;
  }

  public getAvailability(date: Date): boolean {
    const weekdaysMapper: Array<TWeekday> = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'];
    const weekday: TWeekday = weekdaysMapper[+format(date, 'i')];
    const isAvailableByWeekday = this.unavailableWeekdays.indexOf(weekday) === -1;
    const isUnavailableByDate = this.unavailableDates.findIndex(unavailableDate => isEqual(unavailableDate, date)) > -1;
    const isAvailableByDate = this.availableDates.findIndex(availableDate => isEqual(availableDate, date)) > -1;

    if (isUnavailableByDate) {
      return false;
    }

    if (isAvailableByDate) {
      return true;
    }

    return isAvailableByWeekday;
  }

  public onCalendarIconKeyPress($event: KeyboardEvent): void {
    if ($event.code === 'Enter') {
      this.toggleCalendar(true);
    }
    if ($event.code === 'Escape') {
      this.toggleCalendar(false);
    }
  }

  public onDateKeyPress($event: KeyboardEvent, date: Date): void {
    if ($event.code === 'Enter') {
      this.setActiveDate(date);
      this.toggleCalendar(false);
      this.dateInput.nativeElement.focus();
    }

    if ($event.code === 'Escape') {
      this.toggleCalendar(false);
    }
  }

  public onMonthKeyPress($event, direction: string): void {
    if ($event.code === 'Enter') {
      this.setMonth(direction);
    }
    if ($event.code === 'Escape') {
      this.toggleCalendar(false);
    }
  }
}
