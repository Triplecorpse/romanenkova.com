import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticlesComponent} from './components/articles/articles.component';
import {RouterModule} from '@angular/router';
import {ArticleComponent} from './components/article/article.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '**', component: ArticlesComponent}
    ])
  ],
  declarations: [ArticlesComponent, ArticleComponent]
})
export class ArticlesModule {
}
