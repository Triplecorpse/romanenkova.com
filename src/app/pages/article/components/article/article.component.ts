import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Database} from '../../../../../../_interface/IMongooseSchema';
import {TitleService} from '../../../../services/title.service';
import {HeaderService} from '../../../../services/header.service';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {PageDataGuardService} from '../../../../page-data-guard.service';
import {MetaService} from '../../../../services/meta.service';
import IArticle = Database.IArticle;

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: IArticle;
  paragraphs: SafeHtml[];
  backText: string;
  shareText: string;
  currentLang: string;
  showShareButton = false;

  constructor(private route: ActivatedRoute,
              private httpClient: HttpClient,
              private titleService: TitleService,
              private headerService: HeaderService,
              private sanitizer: DomSanitizer,
              private pageDataGuardService: PageDataGuardService,
              private metaService: MetaService) {
  }

  ngOnInit() {
    this.httpClient.get<IArticle>(`article/${this.route.snapshot.paramMap.get('id')}`, {params: {v: '2'}})
      .subscribe(articleResponse => {
        this.titleService.prefix = articleResponse.header;
        this.headerService.header = articleResponse.header;

        this.article = articleResponse;
        this.paragraphs = articleResponse.body.split('\n').map(pSection => this.sanitizer.bypassSecurityTrustHtml(pSection));
        this.metaService.setOgMeta('image', this.article.imageMd);
        this.metaService.setOgMeta('image:url', this.article.imageMd);
        this.metaService.setOgMeta('image:secure_url', this.article.imageMd);
      });

    this.currentLang = this.pageDataGuardService.appSettings.language;
    this.backText = this.pageDataGuardService.pageData['article-item'].backToArticles;
    this.shareText = this.pageDataGuardService.pageData['article-item'].share;
  }
}
