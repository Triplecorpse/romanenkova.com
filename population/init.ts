require('dotenv').config();

import log from "../server/services/log-service";
import mongoose from "mongoose";
import {getSchedule} from "./init_schedule";
import {Schedule} from "../server/models/schedule";
import {getServiceItemData} from "./init_services_items";
import {Service} from "../server/models/service";
import {getInitUsers} from "./init_users";
import {User} from "../server/models/user";
import {getDiplomasItems} from "./init_diplomas_items";
import {Diploma} from "../server/models/diploma";
import {getNewContactsPageData} from "./init_new_contacts";
import {Contact} from "../server/models/contact";
import {AboutPage} from "../server/models/aboutPage";
import {getAboutPageDataV2} from "./init_about_page";

const documents = ['schedule', 'serviceItem', 'diplomaItem', 'users', 'newcontact', 'aboutpage'];
const documentsToCreate: Array<string> = process.argv.filter((argv: string): boolean => documents.indexOf(argv) > -1);
const mapper: any = {
    aboutpage: getAboutPageDataV2,
    newcontact: getNewContactsPageData,
    schedule: getSchedule,
    serviceItem: getServiceItemData,
    diplomaItem: getDiplomasItems,
    users: getInitUsers
};

mongoose.connect(process.env.MONGODB_URI as string)
    .then((): any => {
        log.warning('\x1b[0m', 'DBINIT :::: CONNECTED TO DATABASE :::: ' + process.env.MONGODB_URI);
        const pagesQ: Array<Promise<any>> = [];

        documentsToCreate.forEach((document: string) => {
            pagesQ.push(mapper[document]()
                .then((data: any) => {
                    switch (document) {
                        case 'schedule':
                            return Schedule.insertMany(data);
                        case 'users':
                            return User.insertMany(data);
                        case 'serviceItem':
                            return Service.insertMany(data);
                        case 'diplomaItem':
                            return Diploma.insertMany(data);
                        case 'newcontact':
                            return Contact.insertMany(data);
                        case 'aboutpage':
                            return AboutPage.insertMany(data);
                        default:
                            return []
                    }
                })
                .then((inserted: any) => {
                    log.warning('\x1b[32m', 'INSERTED:', document, inserted.length, 'documents');
                }));
        });

        return Promise.all(pagesQ);
    })
    .then((a: any) => {
        return mongoose.disconnect();
    })
    .then(() => {
        log.warning('\x1b[0m', 'DBINIT :::: DISCONNECTED FROM DATABASE');
    });
