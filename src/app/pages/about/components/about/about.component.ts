import {ChangeDetectionStrategy, Component, Inject, OnInit, PLATFORM_ID, ViewChildren} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModalService} from "../../../../services/modal.service";
import {isPlatformServer} from "@angular/common";
import {PageDataGuardService} from "../../../../page-data-guard.service";
import {IPhotoPreview} from "../../../../../../_interface/IPhotoPreview";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {
  public mainText: Array<string> = [];
  public photos: Array<IPhotoPreview>;
  public name: Array<string>;

  @ViewChildren('photo') photo: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              private modalService: ModalService,
              private pageDataGuardService: PageDataGuardService) { }

  ngOnInit() {
    const aboutPage = this.pageDataGuardService.pageData.about;
    this.mainText = aboutPage.body.split('\n').filter((s: string) => Boolean(s));
    this.name = aboutPage.fullName.split(/\s/).filter((s: string) => Boolean(s));
    this.photos = aboutPage.items;
  }

  openLightBox(source) {
    this.modalService.openLightbox(source);
  }

  showParagraph(paragraph: string): boolean {
    if (isPlatformServer(this.platformId)) {
      return paragraph.indexOf('</a>') === -1;
    }

    return true;
  }
}
