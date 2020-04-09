import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {Database} from "../../../../_interface/IMongooseSchema";

@Component({
  selector: 'app-diploma',
  templateUrl: './diploma.component.html',
  styleUrls: ['./diploma.component.scss']
})
export class DiplomaComponent implements OnInit {
  @Input() diploma: Database.IDiploma;
  @Input() buttonText?: string;
  @Input() onPage: boolean;
  @ViewChild('pictureTpl', {static: true}) pictureTpl: TemplateRef<any>;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  showBigPicture() {
    this.modalService.openLightbox(this.diploma.image);
  }
}
