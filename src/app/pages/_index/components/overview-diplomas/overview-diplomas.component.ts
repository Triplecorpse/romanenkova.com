import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IDiploma} from "../../../../interfaces/IDiploma";

@Component({
  selector: 'app-overview-diplomas',
  templateUrl: './overview-diplomas.component.html',
  styleUrls: ['./overview-diplomas.component.scss']
})
export class OverviewDiplomasComponent implements OnInit {
  public diplomas: Array<IDiploma> = [];
  public overviewInterface: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const pageData = this.route.snapshot.data.pageBlocks[0].find((pageBlock) => pageBlock.entityId === 'diploma').pageData;
    this.overviewInterface = pageData.overview;
    delete pageData.overview;
    for (let i in pageData) {
      if (pageData.hasOwnProperty(i)) {
        this.diplomas.push(pageData[i]);
      }
    }
  }
}
