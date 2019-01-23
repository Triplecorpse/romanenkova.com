import {TLanguage} from "../../types/types";
import {IService, Service} from "../../models/service";

export function readService(lang: TLanguage): Promise<Array<IService>> {
    return new Promise<Array<IService>>((resolve: any, reject: any) => {
        Service.find({language: lang})
            .then((serviceItems: any) => {
                resolve(serviceItems.map((serviceItem: IService): IService => ({
                    currency: serviceItem.currency,
                    title: serviceItem.title,
                    language: serviceItem.language,
                    header: serviceItem.header,
                    entityId: serviceItem.entityId,
                    description: serviceItem.description,
                    image: serviceItem.image,
                    price: serviceItem.price,
                    priceLabel: serviceItem.priceLabel,
                    period: serviceItem.period,
                    noPriceValue: serviceItem.noPriceValue
                })));
            })
            .catch((err: any) => {
                reject(err);
            })
    });
}
