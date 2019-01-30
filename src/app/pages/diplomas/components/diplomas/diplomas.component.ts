import { Component, OnInit } from '@angular/core';
import {PageDataGuardService} from "../../../../page-data-guard.service";
import {Database} from "../../../../../../_interface/IMongooseSchema";

@Component({
  selector: 'app-diplomas',
  templateUrl: './diplomas.component.html',
  styleUrls: ['./diplomas.component.scss']
})
export class DiplomasComponent implements OnInit {
  public diplomas: Array<Database.IDiploma> = [];

  constructor(private pageDataGuardService: PageDataGuardService) { }

  ngOnInit() {
    this.diplomas = this.pageDataGuardService.pageData.diploma.items;
  }
}
