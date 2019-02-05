import {TLanguage} from "../../../_interface/types";
import {AboutPage} from "../../models/aboutPage";
import {Page} from "../../../_interface/IPage";
import IAboutPage = Page.IAboutPage;

export function readAbout(language: TLanguage, isAdmin: boolean = false): Promise<Page.IAboutPage> {
  const query = isAdmin
    ? AboutPage.find().then()
    : AboutPage.findOne({language})
      .then((about: any): Page.IAboutPage => ({
        items: about.items,
        body: about.body,
        header: ''
      }));

  return query.then() as Promise<Page.IAboutPage>;
}

export function updateAbout(aboutPages: Array<Page.IAboutPage>): Promise<any> {
  return AboutPage.updateMany({}, aboutPages).then();
}
