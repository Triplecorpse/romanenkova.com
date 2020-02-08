import {TLanguage} from '../../../_interface/types';
import {Article} from '../../models/article';
import {Database} from '../../../_interface/IMongooseSchema';
import {IArticlePreview} from '../../../_interface/IArticlePreview';
import IArticle = Database.IArticle;

export function readArticlesPreviews(lang?: TLanguage, isAdmin?: boolean): Promise<Array<IArticlePreview>> {
  const opts = {
    isPublished: true,
    lang
  };

  if (isAdmin) {
    delete opts.isPublished;
  }

  return Article.find(opts)
    .then((articles: any) => articles.map((article: IArticlePreview): IArticlePreview => ({
      logo: article.logo,
      header: article.header,
      language: article.language,
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
      deletedAt: article.deletedAt,
      isDeleted: article.isDeleted,
      url: article.url,
      entityId: article.entityId
    })))
    .then((articles: Array<IArticlePreview>): Array<IArticlePreview> => {
      if (isAdmin) {
        return articles;
      }

      return articles.map(({entityId, header, logo, updatedAt, createdAt, language}: IArticlePreview): IArticlePreview => ({
        entityId, header, logo, updatedAt, createdAt, language
      }));
    });
}

export function readArticle(language: TLanguage, entityId: string, isAdmin: boolean = false): Promise<Array<Database.IArticle>> {
  const opts = {
    isPublished: true,
    language,
    entityId
  };

  if (isAdmin) {
    delete opts.isPublished;
  }

  return Article.find(opts)
    .then((articles: any) => articles.map((article: IArticle): IArticle => ({
      logo: article.logo,
      header: article.header,
      isPublished: article.isPublished,
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
      deletedAt: article.deletedAt,
      isDeleted: article.isDeleted,
      url: article.url,
      imageXl: article.imageXl,
      imageMd: article.imageMd,
      body: article.body,
      entityId: article.entityId,
      imageUrl: article.imageUrl,
      imageAuthor: article.imageAuthor
    })))
    .then((articles: Array<IArticle>): Array<IArticle> => {
      if (isAdmin) {
        return articles;
      }

      return articles.map(({entityId: id, header, logo, updatedAt, createdAt, body, imageXl, imageMd, imageUrl, imageAuthor}: IArticle): IArticle => ({
        entityId: id, header, logo, updatedAt, createdAt, imageMd, imageXl, body, imageAuthor, imageUrl
      }));
    });
}
