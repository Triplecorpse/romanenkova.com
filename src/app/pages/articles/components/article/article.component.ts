import {Component, Input, OnInit} from '@angular/core';
import {IArticlePreview} from '../../../../../../_interface/IArticlePreview';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: IArticlePreview;

  constructor() {
  }

  ngOnInit() {

  }
}
