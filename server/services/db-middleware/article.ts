import {TLanguage} from '../../../_interface/types';
import {Database} from '../../../_interface/IMongooseSchema';
import {Article} from '../../models/article';

export function readArticle(language: TLanguage, isAdmin: boolean = false): Promise<Array<Database.IArticle>> {
  const opts = {
    isPublished: true,
    language
  };

  if (isAdmin) {
    delete opts.isPublished;
  }

  return Article.find(opts).then((articles: any) => articles.map((article: Database.IArticle) => ({
    logo: article.logo,
    header: article.header,
    isPublished: article.isPublished,
    createdAt: article.createdAt,
    updatedAt: article.updatedAt,
    deletedAt: article.deletedAt,
    isDeleted: article.isDeleted,
    url: article.url
  })));
}
