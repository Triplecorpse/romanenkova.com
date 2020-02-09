import {IOverview} from './IOverview';
import {Database} from './IMongooseSchema';
import {IReviewModal} from './IReviewModal';
import {IReviewOverview} from './IReviewOverview';
import {IPhotoPreview} from './IPhotoPreview';
import {IArticlePreview} from './IArticlePreview';

export namespace Page {
  export interface IPage<T = any> {
    header?: string;
    items?: Array<T>;
  }

  export interface IMainPage extends IPage {
    diploma: IOverview<Database.IDiploma>;
    about: IOverview<IAboutPage>;
    review: IReviewOverview;
    reviewModal: IReviewModal;
  }

  export interface IAboutPage extends IPage<IPhotoPreview> {
    body: string;
    fullName?: string;
    position?: string;
  }

  export interface IArticlesPage extends IPage<IArticlePreview> {
    buttonText: string;
    languageLabel: string;
  }

  export interface IArticlePage extends IPage<Database.IArticle> {
    backToArticles: string;
    share: string;
  }

  export interface IDiplomaPage extends IPage<Database.IDiploma> {

  }

  export interface IServicesPage extends IPage<Database.IService> {

  }
}
