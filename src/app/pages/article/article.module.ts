import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleComponent} from './components/article/article.component';
import {RouterModule} from '@angular/router';
import {ComponentsModule} from '../../components/components.module';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '**', component: ArticleComponent}
    ]),
    ComponentsModule,
    ScrollToModule
  ],
  declarations: [ArticleComponent]
})
export class ArticleModule { }
