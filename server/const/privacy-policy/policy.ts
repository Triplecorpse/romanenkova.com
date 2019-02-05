import policyEn from "./policy.en";
import policyRu from "./policy.ru";
import policyUk from "./policy.uk";
import policyFr from "./policy.fr";
import {TLanguage} from "../../../_interface/types";
import {readFile} from "../../services/file-service";

export const configObj = {
  ru: policyRu,
  en: policyEn,
  uk: policyUk,
  fr: policyFr
};

export async function getPrivacyPolicy(lang: TLanguage) {
  const body = await readFile(`./server/const/privacy-policy/policy.${lang}.html`).catch((e: any) => {
    throw new Error(e.message);
  });

  return {...configObj[lang], body};
}
