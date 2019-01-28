export interface IOverview<T> {
  header: string;
  button: string;
  body?: string;
  items?: Array<T>;
}
