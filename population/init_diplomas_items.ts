import log from '../server/services/log-service';
import {uploadImage} from '../server/services/file-storage/file-storage-service';
import {Diploma} from '../server/models/diploma';
import {Database} from '../_interface/IMongooseSchema';
import {IPhotoPreview} from '../_interface/IPhotoPreview';

export function getDiplomasItems(): Promise<Array<Database.IDiploma>> {
    const data: Array<Database.IDiploma> = [
      {
        order: 1,
        graduateYear: 2017,
        institute: 'Institut Français de Gestalt-thérapie',
        isPublished: true,
        image: 'diplomas/b5y4tavtkjpntbi2jaxd.jpg',
        preview: ''
      }, {
        order: 2,
        graduateYear: 2014,
        institute: 'Московский институт гештальт-терапии и консультирования',
        isPublished: true,
        image: 'diplomas/ngqtoz87dqotziytypjy.jpg',
        preview: ''
      }, {
        order: 3,
        graduateYear: 2017,
        institute: 'European Association for Transactional Analysis',
        isPublished: true,
        image: 'diplomas/v423mum9ulmzaukezdrm.jpg',
        preview: ''
      }, {
        order: 4,
        graduateYear: 2018,
        institute: 'European Association for Transactional Analysis',
        isPublished: true,
        image: 'diplomas/eupxoexyhmtzxl74lgvy.jpg',
        preview: ''
      }
    ];

    return new Promise((resolve: any, reject: any) => {
        Diploma.find()
            .then(() => {
              const imgs$ = data
                .map(i => i.image)
                .map(img => uploadImage(`./population/assets/${img}`, 'diplomas'));
              return Promise.all(imgs$);
            })
            .then((images: Array<IPhotoPreview>) => {
                data.forEach((item, index) => {
                  item.image = images[index].image;
                  item.preview = images[index].preview;
                });
                return Diploma.deleteMany({});
            })
            .then((result: any) => {
                log.warning('\x1b[31m', 'DELETED: diploma item', result.n, 'pages');
                resolve(data);
            })
            .catch((err: any) => {
                reject(err);
            });
    });
}
