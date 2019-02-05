import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PageDataGuardService} from "../../../../page-data-guard.service";
import {Database} from "../../../../../../_interface/IMongooseSchema";

@Component({
  selector: 'app-overview-diplomas',
  templateUrl: './overview-diplomas.component.html',
  styleUrls: ['./overview-diplomas.component.scss']
})
export class OverviewDiplomasComponent implements OnInit {
  public diplomas: Array<Database.IDiploma> = [];
  public header: string;
  public button: string;

  constructor(private route: ActivatedRoute,
              private pageDataGuardService: PageDataGuardService) { }

  ngOnInit() {
    const pageData = this.pageDataGuardService.pageData.main.diploma;
    this.diplomas = pageData.items;
    this.header = pageData.header;
    this.button = pageData.button;
  }
}
