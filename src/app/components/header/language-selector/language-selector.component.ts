import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';
import {filter} from 'rxjs/operators';
import {PageDataGuardService} from '../../../page-data-guard.service';
import {ILanguageObject} from '../../../../../_interface/ILanguageObject';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageSelectorComponent implements OnInit {
  public lang: ILanguageObject;
  public languages: Array<ILanguageObject>;

  @Input() public isLanguageListOpen: boolean;
  @Output() public isLanguageListOpenChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router,
              private pageDataGuardService: PageDataGuardService,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    const currentLang: string = this.pageDataGuardService.appSettings.language;
    this.languages = this.pageDataGuardService.appSettings.locales;

    this.setLanguageLinks();

    this.lang = this.languages.find((lang: ILanguageObject) => lang.codeISO2 === currentLang);

    this.router.events
      .pipe(filter((e: RouterEvent) => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd): void => {
        this.setLanguageLinks();
        this.changeDetectorRef.markForCheck();
      });
  }

  private setLanguageLinks() {
    this.languages.forEach((lang: ILanguageObject) => {
      lang.href = this.router.url.replace(/^\/(en|ru|uk|fr)?(\/|$)/gmi, `/${lang.codeISO2}/`);
    });
  }

  public open() {
    this.isLanguageListOpen = true;
    this.isLanguageListOpenChange.emit(true);
  }

  public close() {
    this.isLanguageListOpen = false;
    this.isLanguageListOpenChange.emit(false);
  }
}
