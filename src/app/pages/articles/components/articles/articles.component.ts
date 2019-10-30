import {Component, OnInit} from '@angular/core';
import {PageDataGuardService} from '../../../../page-data-guard.service';
import {IArticlePreview} from '../../../../../../_interface/IArticlePreview';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: Array<IArticlePreview>;

  constructor(private pageDataGuardService: PageDataGuardService) { }

  ngOnInit() {
    this.articles = this.pageDataGuardService.pageData.article.items;
  }

}
