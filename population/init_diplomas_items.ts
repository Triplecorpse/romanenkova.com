import log from "../server/services/log-service";
import {IService, Service} from "../server/models/service";
import {uploadImage} from "../server/services/file-storage/file-storage-service";
import {Diploma, IDiploma} from "../server/models/diploma";
import {ICloudinaryResponse} from "../server/interfaces/iCloudinaryResponse";

export function getDiplomasItems(): Promise<Array<IDiploma>> {
    const data: Array<IDiploma> = [
      {
        order: 1,
        description: '',
        graduateYear: 2017,
        header: 'Institut Français de Gestalt-thérapie',
        isPublished: true,
        picture: 'b5y4tavtkjpntbi2jaxd.jpg'
      }, {
        order: 2,
        description: '',
        graduateYear: 2014,
        header: 'Московский институт гештальт-терапии и консультирования',
        isPublished: true,
        picture: 'ngqtoz87dqotziytypjy.jpg'
      }, {
        order: 3,
        description: '',
        graduateYear: 2017,
        header: 'European Association for Transactional Analysis - Українська асоціація транзакційного аналізу',
        isPublished: true,
        picture: 'v423mum9ulmzaukezdrm.jpg'
      }, {
        order: 4,
        description: '',
        graduateYear: 2018,
        header: 'European Association for Transactional Analysis - Українська асоціація транзакційного аналізу',
        isPublished: true,
        picture: 'eupxoexyhmtzxl74lgvy.jpg'
      }
    ];

    return new Promise((resolve: any, reject: any) => {
        Diploma.find()
            .then(() => {
              const imgs$ = data.map(i => i.picture).map(img => uploadImage(`./population/assets/${img}`));
              return Promise.all(imgs$);
            })
            .then((cloudinaries: Array<ICloudinaryResponse>) => {
                data.forEach((item, index) => {
                  item.picture = cloudinaries[index].url;
                });
                return Diploma.deleteMany({})
            })
            .then((result: any) => {
                log.warning('\x1b[31m', 'DELETED: diploma item', result.n, 'pages');
                resolve(data);
            })
            .catch((err: any) => {
                reject(err);
            });
    })
}
