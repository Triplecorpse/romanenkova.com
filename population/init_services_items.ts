import log from "../server/services/log-service";
import {IService, Service} from "../server/models/service";
import {uploadImage} from "../server/services/file-storage/file-storage-service";

export function getServiceItemData(): Promise<Array<IService>> {
    const data: Array<IService> = [
        {
            currency: 'EUR',
            header: 'Individual counseling',
            language: 'en',
            description: 'For those who need my full personal one-on-one support and guidance. In this format, I will dedicate myself purely and solely for you.',
            image: '0',
            price: 30,
            priceLabel: 'Cost',
            entityId: '[counseling] individual',
            title: 'Individual counselling',
            period: 'hr'
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
            period: 'ч'
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
            header: 'Group counseling',
            language: 'en',
            description: 'For those who would like to be apart of a supportive group. If you are interested in this service, you can leave a request and I will contact you as soon as a group is put together. In this format, I work in co-therapy.',
            image: '1',
            priceLabel: 'Cost',
            entityId: '[counseling] group',
            title: 'Group counselling',
            noPriceValue: 'calculated',
            period: 'per group'
        }, {
            header: 'Груповые консультации',
            language: 'ru',
            description: 'Проводится по мере набора группы.  Если вам интересна данная услуга, вы можете оставить заявку и я с вами свяжусь, когда группа будет набрана. В этом формате я работаю в ко-терапии (вместе с коллегой).',
            image: '1',
            priceLabel: 'Стоимость',
            entityId: '[counseling] group',
            title: 'Group counselling',
            noPriceValue: 'рассчитывается для каждой группы'
        }, {
            header: 'Групові консультації',
            language: 'uk',
            description: 'Проводиться по мірі набору групи. Якщо вам цікава дана послуга, ви можете залишити заявку і я з вами зв\'яжуся, коли група буде набрана. У цьому форматі я працюю в ко-терапії (разом з колегою).',
            image: '1',
            priceLabel: 'Вартість',
            entityId: '[counseling] group',
            title: 'Group counselling',
            noPriceValue: 'розраховується для кожної групи'
        }, {
            header: 'Conseil de groupe',
            language: 'fr',
            description: 'Réalisé comme un ensemble de groupes. Si vous êtes intéressé par ce service, vous pouvez laisser une demande et je vous contacterai lorsque le groupe sera recruté. Dans ce format, je travaille en co-thérapie (avec un collègue).',
            image: '1',
            priceLabel: 'Coût de',
            entityId: '[counseling] group',
            title: 'Group counselling',
            noPriceValue: 'calculé pour chaque groupe'
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
                        item.image = result[+item.image].url;
                    });
                } else {
                    data.forEach((item: IService): void => {
                        item.image = images[+item.image];
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
