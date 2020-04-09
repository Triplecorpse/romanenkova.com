import {Component, Input, OnInit} from '@angular/core';
import {IArticlePreview} from '../../../../../../_interface/IArticlePreview';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: IArticlePreview;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(`article/${this.route.snapshot.paramMap.get('id')}`, {params: {v: '2'}}).subscribe();
  }
}
