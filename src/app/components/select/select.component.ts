import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnInit, QueryList,
  ViewChild, ViewChildren,
  ViewContainerRef
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ModalService} from '../../pages/_index/services/modal.service';
import {IModalAppointment} from '../../interfaces/iModalAppointment';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import {PageDataGuardService} from "../../page-data-guard.service";

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
  @Input() label: string;
  @Input() subscr: string;
  @Input() type: string;
  @Input() options: any;
  @Input() icon?: string;
  @Input() list: Array<any>;
  @Input() listDisplayProperty: string;
  @Input() events$: Observable<Event>;
  @ViewChild('selectEl') selectEl: ElementRef;
  @ViewChild('emptyListEl') emptyListEl: ElementRef;
  @ViewChildren('listItemEl') listItemEl: QueryList<ElementRef>;

  public isDisabled: boolean;
  public value: string;
  public clearSelectionLabel: string;
  private selectedItem: any;
  public isListOpen: boolean;
  private onTouch: () => void;
  private onChange: (v: any) => void = () => {};

  constructor(private changeDetectorRef: ChangeDetectorRef,
              private modalService: ModalService,
              private pageDataGuardService: PageDataGuardService) { }

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

  public onInputKeyPress($event: KeyboardEvent): void {
    if (this.isDisabled) {
      return;
    }
    if ($event.code === 'Enter') {
      this.toggleList();
    }
    if ($event.code === 'ArrowDown') {
      this.toggleList(true);
      this.emptyListEl.nativeElement.focus();
    }
    if ($event.code === 'Escape') {
      this.toggleList(false);
      this.selectEl.nativeElement.focus();
    }
  }

  public onItemKeyPress($event: KeyboardEvent, listItem: any): void {
    const nextElement = $event.srcElement.nextElementSibling;
    const prevElement = $event.srcElement.previousElementSibling;

    if ($event.code === 'Enter') {
      this.setActiveItem(listItem);
      this.toggleList(false);
      this.selectEl.nativeElement.focus();

    }

    if ($event.code === 'Escape') {
      this.toggleList(false);
      this.selectEl.nativeElement.focus();
    }

    if ($event.code === 'ArrowUp') {
      if (prevElement) {
        (prevElement as any).focus();
      }

      if ($event.srcElement.getAttribute('data-is-first') === 'true') {
        this.emptyListEl.nativeElement.focus();
      }
    }

    if ($event.code === 'ArrowDown') {
      if (nextElement) {
        (nextElement as any).focus();
      }

      if ($event.srcElement.hasAttribute('data-is-empty')) {
        this.listItemEl.toArray()[0].nativeElement.focus();
      }
    }
  }
}
