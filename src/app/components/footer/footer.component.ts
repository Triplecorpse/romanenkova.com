import {Component, OnInit} from '@angular/core';
import {IFooter} from "../../../../_interface/IFooter";
import {PageDataGuardService} from "../../page-data-guard.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public footer: IFooter;

  constructor(private pageDataGuardService: PageDataGuardService,
              private modalService: ModalService) { }

  ngOnInit() {
    this.footer = this.pageDataGuardService.pageData.index.footer;
  }

  openTC() {
    this.modalService.openPrivacyPolicy();
  }
}
