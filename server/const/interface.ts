import {getIndexInterface} from "./interface.index";
import {TLanguage, TPageId} from "../types/types";

export default async function getInterface(pageId: TPageId, lang: TLanguage) {
  if (pageId === 'index') {
    return getIndexInterface(lang)
  }

  throw new Error('ERROR_NO_SUCH_PAGE_ID');
}
