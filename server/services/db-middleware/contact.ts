import {Database} from "../../../_interface/IMongooseSchema";
import {Contact} from "../../models/contact";

export function createContact(contact: Database.IContact): Promise<any> {
  return Contact.create(contact);
}

export function readContact(isAdmin: boolean = false): Promise<Array<Database.IContact>> {
  return Contact.find().then((c: Array<any>) => c.map((contact: Database.IContact) => {
    if (!isAdmin) {
      return {
        key: contact.key,
        value: contact.value,
        name: contact.name
      };
    }

    return contact;
  }));
}

export function updateContact(_id: string, contact: Database.IContact): Promise<any> {
  return Contact.findByIdAndUpdate(_id, contact).then((c: any) => c);
}

export function deleteContact(_id: string): Promise<any> {
  return Contact.findByIdAndDelete(_id).then(c => c);
}
