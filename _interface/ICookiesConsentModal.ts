export interface ICookiesConsentOption {
  header: string;
  subscr?: string;
  items?: Array<string>;
  model: boolean;
  entityId: string;
}

export interface ICookiesConsentModal {
  header: string;
  options: Array<ICookiesConsentOption>,
  privacyPolicy: string;
}
