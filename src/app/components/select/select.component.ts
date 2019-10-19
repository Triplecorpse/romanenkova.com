import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ModalService} from '../../pages/_index/services/modal.service';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import {PageDataGuardService} from '../../page-data-guard.service';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectComponent),
  multi: true
};

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class SelectComponent implements ControlValueAccessor, OnInit {
  preparedList: Array<any>;
  @Input() label: string;
  @Input() subscr: string;
  @Input() type: string;
  @Input() options: any;
  @Input() icon?: string;
  @Input() listDisplayProperty: string;
  @Input() events$: Observable<Event>;
  @Input() set list(value: Array<any>) {
    this.preparedList = value
      .map((listItem: any, index: number) => {
        if (index > 0 && listItem === '_') {
          value[index - 1].isNextSeparator = true;
        }

        return listItem;
      })
      .filter((el: any) => el !== '_');
  }
  @ViewChild('selectEl', {static: true}) selectEl: ElementRef;
  @ViewChild('clearSelectionEl', {static: false}) clearSelectionEl: ElementRef;
  @ViewChildren('listItemEl', {read: ElementRef}) listItemEl: QueryList<ElementRef>;

  public isDisabled: boolean;
  public value: string;
  public clearSelectionLabel: string;
  private selectedItem: any;
  public isListOpen: boolean;
  private onTouch: () => void;
  private onChange: (v: any) => void = () => {};

  constructor(private changeDetectorRef: ChangeDetectorRef,
              private modalService: ModalService,
              private pageDataGuardService: PageDataGuardService) {
  }

  public writeValue(value: any): void {
    this.onChange(value);
    if (this.listDisplayProperty && value) {
      this.value = value[this.listDisplayProperty];
    } else {
      this.value = value;
    }
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  public setDisabledState(state: boolean): void {
    this.isDisabled = state;
    this.changeDetectorRef.markForCheck();
  }

  public setActiveItem(listItem: any): void {
    this.selectedItem = listItem;
    this.writeValue(listItem);
    this.toggleList(false);
  }

  public ngOnInit(): void {
    this.clearSelectionLabel = this.pageDataGuardService.pageData.index.appointment.selectClear;
    this.events$.pipe(
      filter((e: Event): boolean => e.type === 'click')
    )
      .subscribe((e: Event) => {
        this.toggleList(false);
        this.changeDetectorRef.markForCheck();
      });
  }

  public toggleList(state?: boolean): void {
    state !== undefined ? this.isListOpen = state : this.isListOpen = !this.isListOpen;
  }

  public stopPropagation($event: Event): void {
    $event.stopPropagation();
  }

  openListAndSelectClearList(): void {
    if (this.isDisabled) {
      return;
    }

    this.toggleList(true);
    this.clearSelectionEl.nativeElement.focus();
  }

  selectFirstItem() {
    this.listItemEl.first.nativeElement.focus();
  }

  selectLastItem() {
    this.listItemEl.last.nativeElement.focus();
  }

  selectPreviousItem(currentIndex: number) {
    if (currentIndex === 0) {
      this.clearSelectionEl.nativeElement.focus();

      return;
    }

    this.listItemEl.find((el: ElementRef, i: number) => i === currentIndex - 1).nativeElement.focus();
  }

  selectNextItem(currentIndex: number) {
    if (currentIndex === this.listItemEl.length - 1) {
      this.clearSelectionEl.nativeElement.focus();

      return;
    }

    this.listItemEl.find((el: ElementRef, i: number) => i === currentIndex + 1).nativeElement.focus();
  }

  closeListAndResetFocus() {
    this.selectEl.nativeElement.focus();
    this.toggleList(false);
  }
}
