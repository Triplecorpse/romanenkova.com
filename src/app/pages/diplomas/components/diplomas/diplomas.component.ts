import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IDiploma} from "../../../../interfaces/IDiploma";

@Component({
  selector: 'app-diplomas',
  templateUrl: './diplomas.component.html',
  styleUrls: ['./diplomas.component.scss']
})
export class DiplomasComponent implements OnInit {
  public diplomas: Array<IDiploma> = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const pageData = this.route.snapshot.data.pageData.pageData;
    delete pageData.overview;
    for (let i in pageData) {
      if (pageData.hasOwnProperty(i)) {
        this.diplomas.push(pageData[i]);
      }
    }
  }
}
