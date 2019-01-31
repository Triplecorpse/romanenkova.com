import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {IFooter} from "../../../../../../_interface/IFooter";
import {PageDataGuardService} from "../../../../page-data-guard.service";
import {ModalService} from "../../services/modal.service";
import {ITermsPolicy} from "../../../../../../_interface/ITermsPolicy";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public footer: IFooter;
  public tc: ITermsPolicy;
  public tcIsLoading: boolean;
  public isLoadingText: string;
  @ViewChild('tcModalTpl') private tcModalTpl: TemplateRef<ITermsPolicy>;
  @ViewChild('tcModalLoadingTpl') private tcModalLoadingTpl: TemplateRef<string>;

  constructor(private pageDataGuardService: PageDataGuardService,
              private modalService: ModalService) { }

  ngOnInit() {
    this.footer = this.pageDataGuardService.pageData.index.footer;
    this.isLoadingText = this.pageDataGuardService.pageData.index.tcIsLoading;
    this.tc = {
      body: '',
      header: ''
    }
  }

  openTC() {
    this.tcIsLoading = true;
    this.modalService.openModal('tcl', this.tcModalLoadingTpl, this.isLoadingText);

    setTimeout(() => {
      this.modalService.closeModal('tcl');
      this.tc = {
        body: 'Hello TC',
        header: 'TC works!'
      };
      this.modalService.openModal('tc', this.tcModalTpl, this.tc);
      this.tcIsLoading = false;
    },1000)
  }
}
