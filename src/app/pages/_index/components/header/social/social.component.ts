import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {IContact} from '../../../../../interfaces/IContact';
import {Database} from "../../../../../../../_interface/IMongooseSchema";
import {PageDataGuardService} from "../../../../../page-data-guard.service";

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialComponent implements OnInit {
  private contactData: Array<Database.IContact>;
  public instagramLink: string;
  public facebookLink: string;

  constructor(private pageDataGuardService: PageDataGuardService) { }

  ngOnInit() {
    this.contactData = this.pageDataGuardService.pageData.index.contact.items;
    this.contactData.forEach((contact: Database.IContact) => {
      switch (contact.key) {
        case 'facebook':
          this.facebookLink = `https://www.facebook.com/${contact.value}/`;
          break;
        case 'instagram':
          this.instagramLink = `https://www.instagram.com/${contact.value}/`;
          break;
        default:
          break;
      }
    });
  }

}
