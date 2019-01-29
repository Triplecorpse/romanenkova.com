import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IService} from '../../../../interfaces/IService';
import {PageDataGuardService} from "../../../../page-data-guard.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  public services: Array<IService>;

  constructor(private route: ActivatedRoute,
              private pageDataGuardService: PageDataGuardService) { }

  ngOnInit() {
    this.services = this.route.snapshot.data.pageData.pageData;
  }
}
