import {Component, Input, OnInit} from '@angular/core';
import {IArticlePreview} from '../../../../_interface/IArticlePreview';
import {PageDataGuardService} from '../../page-data-guard.service';
import {TLanguage} from '../../../../_interface/types';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: IArticlePreview;

  buttonText: string;
  languageLabel: string;
  language: TLanguage;

  constructor(private pageDataGuardService: PageDataGuardService) {
  }

  ngOnInit() {
    this.buttonText = this.pageDataGuardService.pageData.article.buttonText;
    this.languageLabel = this.pageDataGuardService.pageData.article.languageLabel;
    this.language = this.article.language;
  }
}
