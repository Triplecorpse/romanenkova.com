import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {IFooter} from "../../../../../../_interface/IFooter";
import {PageDataGuardService} from "../../../../page-data-guard.service";
import {ModalService} from "../../services/modal.service";
import {ITermsPolicy} from "../../../../../../_interface/ITermsPolicy";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public footer: IFooter;
  public tc: ITermsPolicy;
  public isLoadingText: string;
  @ViewChild('tcModalTpl') private tcModalTpl: TemplateRef<ITermsPolicy>;
  @ViewChild('tcModalLoadingTpl') private tcModalLoadingTpl: TemplateRef<string>;

  constructor(private pageDataGuardService: PageDataGuardService,
              private modalService: ModalService,
              private httpClient: HttpClient) { }

  ngOnInit() {
    this.footer = this.pageDataGuardService.pageData.index.footer;
    this.isLoadingText = this.pageDataGuardService.pageData.index.tcIsLoading;
    this.tc = {header: '', body: []}
  }

  openTC() {
    if (this.tc.header) {
      this.modalService.openModal('tc', this.tcModalTpl, this.tc);
    } else {
      this.modalService.openModal('tcl', this.tcModalLoadingTpl, this.isLoadingText);
      this.httpClient.get<ITermsPolicy>('privacy-policy', {params: {v: '2'}})
        .subscribe((pp: ITermsPolicy) => {
          this.tc = pp;
          this.modalService.closeModal('tcl');
          this.modalService.openModal('tc', this.tcModalTpl, this.tc);
        });
    }
  }
}
