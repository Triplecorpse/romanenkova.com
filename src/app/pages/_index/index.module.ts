import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from './components/index/index.component';
import {RouterModule} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {ResolvePageService} from './services/resolve-page.service';
import {NavigationComponent} from './components/header/navigation/navigation.component';
import {SocialComponent} from './components/header/social/social.component';
import {LanguageSelectorComponent} from './components/header/language-selector/language-selector.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalComponent} from './components/modal/modal.component';
import {ComponentsModule} from '../../components/components.module';
import {InterceptorService} from './services/interceptor.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {OverviewAboutComponent} from './components/overview-about/overview-about.component';
import {ResolveMainPageService} from './services/resolve-main-page.service';
import {ResolveServicesService} from './services/resolve-services.service';
import {InterceptResponseService} from './services/intercept-response.service';
import {PipesModule} from '../../pipes/pipes.module';
import { OverviewReviewsComponent } from './components/overview-reviews/overview-reviews.component';
import {NgxCaptchaModule} from 'ngx-captcha';
import { OverviewDiplomasComponent } from './components/overview-diplomas/overview-diplomas.component';
import { DiplomaComponent } from './components/diploma/diploma.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: 'about',
        loadChildren: './../about/about.module#AboutModule',
        data: {pageid: 'about'},
        resolve: {pageData: ResolvePageService}
      },
      {
        path: 'articles',
        loadChildren: './../articles/articles.module#ArticlesModule',
        data: {pageid: 'article'},
        resolve: {pageData: ResolvePageService}
      },
      {
        path: 'services',
        loadChildren: './../services/services.module#ServicesModule',
        data: {pageid: 'service'},
        resolve: {pageData: ResolvePageService}
      },
      {
        path: 'diplomas',
        loadChildren: './../diplomas/diplomas.module#DiplomasModule',
        data: {pageid: 'diploma'},
        resolve: {pageData: ResolvePageService}
      },
      {
        path: 'article/:id',
        loadChildren: './../article/article.module#ArticleModule',
        data: {pageid: 'article'},
        resolve: {pageData: ResolvePageService}
      },
      {
        path: '',
        component: MainComponent,
        data: {pageid: 'main'},
        resolve: {pageData: ResolvePageService, pageBlocks: ResolveMainPageService, services: ResolveServicesService}
      },
    ]),
    ReactiveFormsModule,
    ScrollToModule.forRoot(),
    PipesModule,
    NgxCaptchaModule.forRoot({
      reCaptcha2SiteKey: '6Lc2zmsUAAAAAA0vgv4qoXcREi9LkfWwn1i0Jyil'
    })
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
    OverviewDiplomasComponent,
    DiplomaComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: InterceptResponseService, multi: true}
  ]
})
export class IndexModule {
}
