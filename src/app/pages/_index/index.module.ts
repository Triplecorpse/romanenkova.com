import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from './components/index/index.component';
import {RouterModule} from '@angular/router';
import {MainComponent} from '../../components/main/main.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {HeaderComponent} from '../../components/header/header.component';
import {ContactsComponent} from '../../components/contacts/contacts.component';
import {NavigationComponent} from '../../components/header/navigation/navigation.component';
import {SocialComponent} from '../../components/header/social/social.component';
import {LanguageSelectorComponent} from '../../components/header/language-selector/language-selector.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalComponent} from '../../components/modal/modal.component';
import {ComponentsModule} from '../../components/components.module';
import {InterceptorService} from '../../services/interceptor.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {OverviewAboutComponent} from '../../components/overview-about/overview-about.component';
import {PipesModule} from '../../pipes/pipes.module';
import { OverviewReviewsComponent } from '../../components/overview-reviews/overview-reviews.component';
import {NgxCaptchaModule} from 'ngx-captcha';
import { OverviewDiplomasComponent } from '../../components/overview-diplomas/overview-diplomas.component';
import {PageDataGuardService} from '../../page-data-guard.service';
import {CookieService} from '../../services/cookie.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: 'about',
        loadChildren: './../about/about.module#AboutModule',
        data: {pageid: 'about', pageidv2: 'about'},
        canActivate: [PageDataGuardService]
      },
      {
        path: 'articles',
        loadChildren: './../articles/articles.module#ArticlesModule',
        data: {pageid: 'article', pageidv2: 'article'},
        canActivate: [PageDataGuardService]
      },
      {
        path: 'services',
        loadChildren: './../services/services.module#ServicesModule',
        data: {pageid: 'service', pageidv2: 'service'},
        canActivate: [PageDataGuardService]
      },
      {
        path: 'diplomas',
        loadChildren: './../diplomas/diplomas.module#DiplomasModule',
        data: {pageid: 'diploma', pageidv2: 'diploma'},
        canActivate: [PageDataGuardService]
      },
      {
        path: 'article/:id',
        loadChildren: './../article/article.module#ArticleModule',
        data: {pageid: 'article-item', pageidv2: 'article-item'},
        canActivate: [PageDataGuardService]
      },
      {
        path: '',
        component: MainComponent,
        data: {pageid: 'main', pageidv2: 'main'},
        canActivate: [PageDataGuardService]
      },
    ]),
    ReactiveFormsModule,
    ScrollToModule.forRoot(),
    PipesModule,
    NgxCaptchaModule
  ],
  declarations: [
    IndexComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent,
    ContactsComponent,
    NavigationComponent,
    SocialComponent,
    LanguageSelectorComponent,
    ModalComponent,
    OverviewAboutComponent,
    OverviewReviewsComponent,
    OverviewDiplomasComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
    CookieService
  ],
  exports: []
})
export class IndexModule {
}
