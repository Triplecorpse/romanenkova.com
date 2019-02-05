import { Component, OnInit } from '@angular/core';
import {PageDataGuardService} from "../../../../page-data-guard.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  constructor(private pageDataGuardService: PageDataGuardService) { }

  ngOnInit() {
  }

}
