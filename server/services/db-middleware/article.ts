import {TLanguage} from '../../../_interface/types';
import {Article} from '../../models/article';
import {Database} from '../../../_interface/IMongooseSchema';
import {IArticlePreview} from '../../../_interface/IArticlePreview';
import IArticle = Database.IArticle;

export function readArticlesPreviews(lang?: TLanguage, isAdmin?: boolean): Promise<Array<IArticlePreview>> {
  const opts: any = {
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

      return articles.map(({entityId, header, logo, updatedAt, createdAt, language, url}: IArticlePreview): IArticlePreview => ({
        entityId, header, logo, updatedAt, createdAt, language, url
      }));
    });
}

export function readArticle(url: string, isAdmin: boolean = false): Promise<Database.IArticle> {
  const opts: any = {
    isPublished: true,
    url
  };

  if (isAdmin) {
    delete opts.isPublished;
  }

  return Article.findOne(opts)
    .then((article: any) => ({
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
    }))
    .then((article: IArticle): IArticle => {
      if (isAdmin) {
        return article;
      }

      return{
        entityId: article.entityId,
        header: article.header,
        logo: article.logo,
        updatedAt: article.updatedAt,
        createdAt: article.createdAt,
        imageMd: article.imageMd,
        imageXl: article.imageXl,
        body: article.body,
        imageAuthor: article.imageAuthor,
        imageUrl: article.imageUrl
      };
    });
}
