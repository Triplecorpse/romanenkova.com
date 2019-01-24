import {getIndexInterface} from "./interface.index";
import {TLanguage, TPageId} from "../types/types";
import {getMainInterface} from "./interface.main";

export default async function getInterface(pageId: TPageId, lang: TLanguage) {
  if (pageId === 'index') {
    return getIndexInterface(lang);
  } else if (pageId === 'main') {
    return getMainInterface(lang);
  }

  throw new Error('ERROR_NO_SUCH_PAGE_ID');
}
