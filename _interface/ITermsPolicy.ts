export interface ITermsPolicyItem {
  header?: string;
  subheader?: string;
  items?: Array<string>;
}

export interface ITermsPolicy {
  header: string;
  body: Array<ITermsPolicyItem>;
}
