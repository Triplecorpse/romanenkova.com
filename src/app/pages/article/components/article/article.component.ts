import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Database} from '../../../../../../_interface/IMongooseSchema';
import {TitleService} from '../../../../services/title.service';
import {HeaderService} from '../../../../services/header.service';
import IArticle = Database.IArticle;

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: IArticle;

  constructor(private route: ActivatedRoute,
              private httpClient: HttpClient,
              private titleService: TitleService,
              private headerService: HeaderService) {
  }

  ngOnInit() {
    this.httpClient.get<IArticle>(`article/${this.route.snapshot.paramMap.get('id')}`, {params: {v: '2'}})
      .subscribe(articleResponse => {
        this.titleService.prefix = articleResponse.header;
        this.headerService.header = articleResponse.header;
      });
  }
}
