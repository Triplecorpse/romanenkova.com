import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModalService} from '../../services/modal.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public header: string;
  public name: string;
  public position: string;

  constructor(private route: ActivatedRoute, private modalService: ModalService) {
  }

  ngOnInit() {
    this.header = this.route.snapshot.data.header;
    this.position = this.route.snapshot.data.headerData.position;
    this.name = this.route.snapshot.data.headerData.name;
    this.modalService.services = this.route.snapshot.data.services;
  }
}
