import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IDiploma} from "../../../../interfaces/IDiploma";

@Component({
  selector: 'app-overview-diplomas',
  templateUrl: './overview-diplomas.component.html',
  styleUrls: ['./overview-diplomas.component.scss']
})
export class OverviewDiplomasComponent implements OnInit {
  public diplomas: Array<IDiploma>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.diplomas = this.route.snapshot.data.pageBlocks[1];
  }
}
