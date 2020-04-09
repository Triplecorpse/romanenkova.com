import {getIndexInterface} from './index/interface.index';
import {TLanguage, TPageId} from '../../_interface/types';
import {getMainInterface} from './main/interface.main';
import {getServicesInterface} from './services/interface.services';
import {getDiplomasInterface} from './diplomas/interface.diplomas';
import {getArticlesInterface} from './articles/interface.articles';
import {getAboutInterface} from './about/interface.about';
import {getArticleInterface} from './article/interface.article';

export default async function getInterface(pageId: TPageId, lang: TLanguage, articleUrl?: string) {
  switch (pageId) {
    case 'index':
      return getIndexInterface(lang);
    case 'main':
      return getMainInterface(lang);
    case 'service':
      return getServicesInterface(lang);
    case 'diploma':
      return getDiplomasInterface(lang);
    case 'article':
      return getArticlesInterface(lang);
    case 'article-item':
      return getArticleInterface(lang);
    case 'about':
      return getAboutInterface(lang);
    default:
      throw new Error('ERROR_NO_SUCH_PAGE_ID');
  }
}
