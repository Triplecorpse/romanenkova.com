import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {IDiploma} from "../../interfaces/IDiploma";
import {ModalService} from "../../pages/_index/services/modal.service";

@Component({
  selector: 'app-diploma',
  templateUrl: './diploma.component.html',
  styleUrls: ['./diploma.component.scss']
})
export class DiplomaComponent implements OnInit {
  @Input() diploma: IDiploma;
  @Input() buttonText?: string;
  @Input() onPage: boolean;
  @ViewChild('pictureTpl') pictureTpl: TemplateRef<any>;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  showBigPicture() {
    this.modalService.openLightbox(this.diploma.picture);
  }
}
