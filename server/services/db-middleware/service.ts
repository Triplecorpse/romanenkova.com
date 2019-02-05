import {Service} from "../../models/service";
import {Database} from "../../../_interface/IMongooseSchema";
import {TLanguage} from "../../../_interface/types"

export function createService(service: Database.IService): Promise<any> {
  return Service.create(service);
}

export function readService(language: TLanguage, isAdmin: boolean = false): Promise<Array<Database.IService>> {
  const opts = {
    isPublished: true,
    language
  };

  if (isAdmin) {
    delete opts.isPublished;
  }

  return Service.find(opts).then((s: Array<any>) => s.map((service: Database.IService): Database.IService => {
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

export function updateService(_id: string, service: Database.IService): Promise<any> {
  return Service.findByIdAndUpdate(_id, service).then();
}

export function deleteService(_id: string): Promise<any> {
  return Service.findByIdAndDelete(_id).then();
}
