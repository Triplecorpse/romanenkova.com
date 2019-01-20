import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {IDiploma} from "../../../../interfaces/IDiploma";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-diploma',
  templateUrl: './diploma.component.html',
  styleUrls: ['./diploma.component.scss']
})
export class DiplomaComponent implements OnInit {
  @Input() diploma: IDiploma;
  @ViewChild('pictureTpl') pictureTpl: TemplateRef<any>;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  showBigPicture() {
    this.modalService.openModal('lightbox', this.pictureTpl, this.diploma.picture, {fullScreen: true});
  }
}
