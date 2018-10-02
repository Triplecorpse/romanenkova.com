import {getAboutPageData} from "./init_about";

require('dotenv').config();

import {IPage, Page as Page} from "../server/models/page";
import log from "../server/services/log-service";
import mongoose from "mongoose";
import {getContactsPageData} from "./init_contacts";
import {getMainPageData} from "./init_main";
import {getAppointmentModalPageData} from "./init_appointment_modal";
import {getNavPageData} from "./init_nav";
import {getArticlePageData} from "./init_articles";
import {getSchedule} from "./init_schedule";
import {Schedule} from "../server/models/schedule";

const pages = ['nav', 'about', 'article', 'contacts', 'diploma', 'main', 'modal', 'nav', 'review', 'service', 'modalappointment'];
const documents = ['schedule'];
const pagesToCreate: Array<string> = process.argv.filter((argv: string): boolean => pages.indexOf(argv) > -1);
const documentsToCreate: Array<string> = process.argv.filter((argv: string): boolean => documents.indexOf(argv) > -1);
const mapper: any = {
    about: getAboutPageData,
    contacts: getContactsPageData,
    main: getMainPageData,
    nav: getNavPageData,
    modalappointment: getAppointmentModalPageData,
    article: getArticlePageData,
    schedule: getSchedule
};

mongoose.connect(process.env.MONGODB_URI as string)
    .then((): any => {
        log.warning('\x1b[0m', 'DBINIT :::: CONNECTED TO DATABASE');
        const pagesQ: Array<Promise<any>> = [];

        pagesToCreate.forEach((pageId: string): void => {
            pagesQ.push(mapper[pageId]()
                .then((data: Array<IPage>) => Page.insertMany(data))
                .then((inserted: any) => {
                    log.warning('\x1b[32m', 'INSERTED:', pageId, inserted.length, 'pages');
                }));
        });

        documentsToCreate.forEach((document: string) => {
            pagesQ.push(mapper[document]()
                .then((data: any) => {
                    if (document === 'schedule') {
                        return Schedule.insertMany(data);
                    }
                    return [];
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
