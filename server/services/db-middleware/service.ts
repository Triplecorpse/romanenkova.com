import {Service} from "../../models/service";
import {Database} from "../../../_interface/IMongooseSchema";
import {TLanguage} from "../../types/types";

export function createService() {

}

export function readService(language: TLanguage, isAdmin: boolean = false): Promise<Array<Database.IService>> {
  const opts = {
    isPublished: true,
    language
  };
  if (isAdmin) {
    delete opts.isPublished;
  }
  console.log('read serive', opts);
  return Service.find(opts).then((s: Array<any>) => s.map((service: Database.IService): Database.IService => {
    console.log('service', s, service, opts);
    if (!isAdmin) {
      return {
        currency: service.currency,
        description: service.description,
        header: service.header,
        image: service.image,
        noPriceValue: service.noPriceValue,
        period: service.period,
        price: service.price,
        priceLabel: service.priceLabel
      }
    }

    return service;
  }))
}

export function updateService() {

}

export function deleteService() {

}
