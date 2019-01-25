import log from './../log-service';
import {IPage, Page as Page} from '../../models/page';
import {IPageImage, IPageLanguageContainer, IPageSubmit} from "../../interfaces/iPageSubmit";
import {TLanguage} from "../../types/types";
import {languages} from "../../const/const";
import {IMainDatabaseModel, IMainDataRequest} from "../../interfaces/IMainDataRequest";
import indexData from "../../const/indexData";
import {readService} from "./service";
import {getReviews} from "./review";
import {readDiploma} from "./diploma";

const cloudinary = require('cloudinary');

export function readInterface(entityId: string | Array<string>, language: string | Array<string>): Promise<Array<IPage>> {
  if (typeof entityId === 'string') {
    entityId = [entityId];
  }

  const hasServicePage = entityId.indexOf('service') > -1;
  const hasReviewPage = entityId.indexOf('review') > -1;
  const hasDiplomaPage = entityId.indexOf('diploma') > -1;

  return Page.find({entityId, language})
    .then((pages: any) => {
      const services = hasServicePage && readService(language as TLanguage);
      const reviews = hasReviewPage && getReviews(5, {random: true, language: language as TLanguage});
      const diplomas = hasDiplomaPage && readDiploma();

      return Promise.all([pages, services, reviews, diplomas]);
    })
    .then((results: any) => {
        return results[0].map((page: IPage): IPage => {
          let pageBody = page.pageData || {};
          let pageLanguage: TLanguage = page.language as TLanguage;

          if ((page.entityId === 'service') && results[1]) {
            pageBody = getPageBody(pageBody, 1);
          }

          if ((page.entityId === 'review') && results[2]) {
            pageBody = getPageBody(pageBody, 2);
          }

          if (page.entityId === 'diploma' && results[3]) {
            pageBody = getPageBody(pageBody, 3);
          }

          return {
            header: page.header,
            entityId: page.entityId,
            pageData: pageBody,
            language: pageLanguage,
            images: page.images
          };

          function getPageBody(pageBody: any, index: number) {
            if (Object.keys(pageBody).length) {
              return {...pageBody, ...results[index]}
            }

            return results[1];
          }
        })
      });
}

export function updatePageSubmitObj(pageObj: IPageSubmit): Promise<Array<IPage>> {
  const pagesQ: Array<Promise<IPage>> = [];
  const availableLanguages: Array<TLanguage> = languages;
  const pages: IPageLanguageContainer = pageObj.page;
  const pageMedia: Array<IPageImage> = pageObj.media || [];
  const mediaToAdd: Array<string> = pageMedia
    .filter((mediaObject: IPageImage): boolean => mediaObject.status === 'add')
    .map(m => m.src);
  const mediaToRemove: Array<string> = pageMedia
    .filter((mediaObject: IPageImage): boolean => mediaObject.status === 'remove')
    .map((m: IPageImage): string => m.src);

  mediaToRemove.forEach((media: string) => {
    const lastIndexOfDot: number = media.lastIndexOf('.');
    const lastIndexOfSlash: number = media.lastIndexOf('/') + 1;
    const publicId: string = media.substring(lastIndexOfSlash, lastIndexOfDot);
    cloudinary.v2.uploader.destroy(publicId, function (error: any, result: any) {
      if (error) {
        log.error('error', error);
      } else {
        log.info('success', result, publicId, media);
      }
    });
  });

  if (pageMedia.length) {
    availableLanguages.forEach((lang: TLanguage): void => {
      pages[lang] = pages[lang] as any || {
        language: lang,
        entityId: pageObj.id
      }
    })
  }

  for (let i in pages) {
    if (pages.hasOwnProperty(i) && (availableLanguages.indexOf(i as TLanguage) > -1 || pageMedia.length)) {
      let page: IPage = pages[i as TLanguage] || {entityId: pageObj.id, language: i} as IPage;

      if (pageObj.id === 'main') {
        page = {
          entityId: pageObj.id,
          language: i,
          pageData: mainAdapter(page.pageData as IMainDataRequest, i as TLanguage)
        } as IPage;
      }

      if (mediaToAdd.length) {
        pagesQ.push(updateSinglePage(pageObj.id, i, {...page, $push: {images: {$each: mediaToAdd}}}));
      }

      if (mediaToRemove.length) {
        pagesQ.push(updateSinglePage(pageObj.id, i, {...page, $pullAll: {images: mediaToRemove}}));
      }

      if (!pageMedia.length) {
        pagesQ.push(updateSinglePage(pageObj.id, i, {...page}));
      }
    }
  }

  return Promise.all(pagesQ);
}

export function updateSinglePage(entityId: string, language: string, page: any): Promise<IPage> {
  return Page.updateOne({entityId, language}, page)
    .then(() => {
      return readInterface(entityId, language);
    })
    .then((result: Array<IPage>) => result[0]);
}

function mainAdapter(rawData: IMainDataRequest, language: TLanguage): IMainDatabaseModel {
  return {
    ...indexData[language],
    name: [rawData.firstName, rawData.lastName],
    position: rawData.position,
    notificationEmail: rawData.email
  }
}
