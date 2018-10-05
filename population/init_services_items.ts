import log from "../server/services/log-service";
import {IService, Service} from "../server/models/service";
import {uploadImage} from "../server/services/file-storage/file-storage-service";

export function getServiceItemData(): Promise<Array<IService>> {
    const data: Array<IService> = [
        {
            currency: 'EUR',
            header: 'Individual counseling',
            language: 'en',
            description: 'I work mostly with adults, but I also have experience working with children and teenagers. I am often approached by parents who face difficulties in raising children.',
            image: '0',
            price: 30,
            priceLabel: 'Cost',
            entityId: '[counseling] individual',
            title: 'Individual counselling',
            period: 'hour'
        }, {
            currency: 'EUR',
            header: 'Индивидуальные консультации',
            language: 'ru',
            description: 'Я работаю преимущественно со взрослыми людьми, но есть и опыт работы с детьми и подростками. Ко мне часто обращаются родители, которые сталкиваются с трудностями в воспитании детей.',
            image: '0',
            price: 30,
            priceLabel: 'Стоимость',
            entityId: '[counseling] individual',
            title: 'Individual counselling',
            period: 'час'
        }, {
            currency: 'EUR',
            header: 'Індивідуальні консультації',
            language: 'uk',
            description: 'Я працюю переважно з дорослими людьми, але є і досвід роботи з дітьми і підлітками. До мене часто звертаються батьки, які стикаються з труднощами у вихованні дітей.',
            image: '0',
            price: 30,
            priceLabel: 'Вартість',
            entityId: '[counseling] individual',
            title: 'Individual counselling',
            period: 'год'
        }, {
            currency: 'EUR',
            header: 'Personnalisé conseil',
            language: 'fr',
            description: 'Je travaille principalement avec des adultes, mais j\'ai aussi de l\'expérience avec des enfants et des adolescents. Je suis souvent approché par des parents qui ont des difficultés à élever leurs enfants.',
            image: '0',
            price: 30,
            priceLabel: 'Coût de',
            entityId: '[counseling] individual',
            title: 'Individual counselling',
            period: 'heure'
        },
        {
            currency: 'EUR',
            header: 'Group counseling',
            language: 'en',
            description: 'I work as a group psychotherapist and provide a group psychotherapy service. In this format, I work in co-therapy (with a colleague).',
            image: '1',
            price: 30,
            priceLabel: 'Cost',
            entityId: '[counseling] group',
            title: 'Group counselling',
            period: 'hour'
        }, {
            currency: 'EUR',
            header: 'Груповые консультации',
            language: 'ru',
            description: 'Я работаю как групповой психотерапевт и предоставляю услугу групповой психотерапии. В этом формате я работаю в ко-терапии ( вместе с коллегой).',
            image: '1',
            price: 30,
            priceLabel: 'Стоимость',
            entityId: '[counseling] group',
            title: 'Group counselling',
            period: 'час'
        }, {
            currency: 'EUR',
            header: 'Групові консультації',
            language: 'uk',
            description: 'Я працюю як груповий психотерапевт і надаю послугу групової психотерапії. У цьому форматі я працюю в ко-терапії (разом з колегою).',
            image: '1',
            price: 30,
            priceLabel: 'Вартість',
            entityId: '[counseling] group',
            title: 'Group counselling',
            period: 'год'
        }, {
            currency: 'EUR',
            header: 'Conseil de groupe',
            language: 'fr',
            description: 'Je travaille comme psychothérapeute de groupe et offre un service de psychothérapie de groupe. Dans ce format, je travaille en co-thérapie (avec un collègue).',
            image: '1',
            price: 30,
            priceLabel: 'Coût de',
            entityId: '[counseling] group',
            title: 'Group counselling',
            period: 'heure'
        }
    ];

    return new Promise((resolve: any, reject: any) => {
        const images: Array<string> = [];

        Service.find()
            .then((services: Array<any>) => {
                const differentServices = services.filter((service: IService): boolean => service.language === 'en');
                if (!differentServices.length) {
                    return Promise.all([uploadImage('./population/assets/individualServices.png'), uploadImage('./population/assets/groupServices.png')]);
                }
                differentServices.forEach((service: IService): void => {
                    images.push(service.image);
                });
            })
            .then((result: any) => {
                if (Array.isArray(result)) {
                    data.forEach((item: IService): void => {
                        item.image = result[1 - +item.image].url;
                    });
                } else {
                    data.forEach((item: IService): void => {
                        item.image = images[1 - +item.image];
                    });
                }

                return Service.deleteMany({});
            })
            .then((result: any) => {
                log.warning('\x1b[31m', 'DELETED: service', result.n, 'pages');
                resolve(data);
            })
            .catch((err: any) => {
                reject(err);
            });
    })
}
