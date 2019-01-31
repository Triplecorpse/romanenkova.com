import policyEn from "./policy.en";
import policyRu from "./policy.ru";
import policyUk from "./policy.uk";
import policyFr from "./policy.fr";
import {TLanguage} from "../../../_interface/types";

export const configObj = {
  ru: policyRu,
  en: policyEn,
  uk: policyUk,
  fr: policyFr
};

export async function getPrivacyPolicy(lang: TLanguage) {
  return configObj[lang];
}
