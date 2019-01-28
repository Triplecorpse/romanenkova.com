import {AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit, ViewChild} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {fade} from '../../shortcuts/animations';
import {PageDataGuardService} from "../../../../page-data-guard.service";
import {Database} from "../../../../../../_interface/IMongooseSchema";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  animations: [
    fade('1s ease', 'invisible => visible')
  ]
})
export class ContactsComponent implements OnInit, AfterViewInit {
  public animationState: string = 'invisible';
  public header: string;
  public contactItems: Array<Database.IContact>;
  private isViewInit: boolean;

  @ViewChild('contacts') private contactsEl: ElementRef;

  @HostListener('window:scroll')
  private scrollListener() {
    const contactsPos = this.contactsEl.nativeElement.getBoundingClientRect();

    if ((contactsPos.y || contactsPos.top) + contactsPos.height <= window.innerHeight && this.isViewInit) {
      this.animationState = 'visible';
    }
  }

  constructor(@Inject(DOCUMENT) private document: Document,
              private pageDataGuardService: PageDataGuardService) {
  }

  ngOnInit() {
    this.contactItems = this.pageDataGuardService.pageData.index.contact.items;
    this.header = this.pageDataGuardService.pageData.index.contact.header;
    const viberCnt: Database.IContact = this.contactItems.find((contact: Database.IContact) => contact.key === 'viber');
    const telegramCnt: Database.IContact = this.contactItems.find((contact: Database.IContact) => contact.key === 'telegram');

    this.contactItems.forEach((contact: Database.IContact) => {
      switch (contact.key) {
        case 'phone':
          contact.viberDesktop = `viber://chat?number=${viberCnt.value}`;
          contact.viberMobile = `viber://add?number=${viberCnt.value}`;
          contact.telegram = `tg://resolve?domain=${telegramCnt.value}`;
          contact.linkto = `tel:${contact.value}`;
          contact.name = this.pageDataGuardService.pageData.index.contact.phoneLabel;
          break;
        case 'skype':
          contact.linkto = `skype:${contact.value}?chat`;
          break;
        case 'email':
          contact.linkto = `mailto:${contact.value}`;
          break;
        default:
          break;
      }
    });
    this.scrollListener();
  }

  ngAfterViewInit() {
    this.isViewInit = true;
    this.scrollListener();
  }
}
