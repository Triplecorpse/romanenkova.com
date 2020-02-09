import {Component, Input, OnInit} from '@angular/core';
import {IArticlePreview} from '../../../../../../_interface/IArticlePreview';
import {PageDataGuardService} from '../../../../page-data-guard.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: IArticlePreview;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('kk', this.route.snapshot.paramMap.get('url'));
  }
}
