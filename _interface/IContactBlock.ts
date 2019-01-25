import {Database} from "./IMongooseSchema";

export interface IContactBlock {
  header: string;
  phoneLabel: string;
  items: Array<Database.IContact>
}
