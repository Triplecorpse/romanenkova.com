import {TLanguage} from "../../types/types";
import {AboutPage} from "../../models/aboutPage";
import {Page} from "../../../_interface/IPage";

export function readAbout(language: TLanguage, isAdmin: boolean = false): Promise<Page.IAboutPage> {
  const query = isAdmin
    ? AboutPage.find().then()
    : AboutPage.findOne({language}).then();

  return query.then() as Promise<Page.IAboutPage>;
}

export function updateAbout(aboutPages: Array<Page.IAboutPage>): Promise<any> {
  return AboutPage.updateMany({}, aboutPages).then();
}
