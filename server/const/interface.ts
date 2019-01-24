import {getIndexInterface} from "./index/interface.index";
import {TLanguage, TPageId} from "../types/types";
import {getMainInterface} from "./main/interface.main";
import {getServicesInterface} from "./services/interface.services";
import {getDiplomasInterface} from "./diplomas/interface.diplomas";
import {getArticlesInterface} from "./articles/interface.articles";
import {getAboutInterface} from "./about/interface.about";

export default async function getInterface(pageId: TPageId, lang: TLanguage) {
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
    case 'about':
      return getAboutInterface(lang);
    default:
      throw new Error('ERROR_NO_SUCH_PAGE_ID');
  }
}
