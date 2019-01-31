export interface ICookiesConsentOption {
  header: string;
  subscr?: string;
  items?: Array<string>;
}

export interface ICookiesConsentModal {
  header: string;
  options: Array<ICookiesConsentOption>,
  link?: string;
}
