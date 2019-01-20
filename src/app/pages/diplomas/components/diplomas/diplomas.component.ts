import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IDiploma} from "../../../../interfaces/IDiploma";

@Component({
  selector: 'app-diplomas',
  templateUrl: './diplomas.component.html',
  styleUrls: ['./diplomas.component.scss']
})
export class DiplomasComponent implements OnInit {
  diplomas: Array<IDiploma>;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.diplomas = this.route.snapshot.data.pageData.pageData;
    console.log(this.diplomas);
  }
}
