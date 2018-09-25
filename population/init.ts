import {getAboutPageData} from "./init_about";

require('dotenv').config();

import {IPage, model as Page} from "../server/models/page";
import log from "../server/services/log-service";
import mongoose from "mongoose";
import {getContactsPageData} from "./init_contacts";
import {getMainPageData} from "./init_main";
import {getAppointmentModalPageData} from "./init_appointment_modal";
import {getNavPageData} from "./init_nav";

const pages = ['nav', 'about', 'article', 'contacts', 'diploma', 'main', 'modal', 'nav', 'review', 'service', 'modalappointment'];
const pagesToCreate: Array<string> = process.argv.filter((argv: string): boolean => pages.indexOf(argv) > -1);
const mapper: any = {
    about: getAboutPageData,
    contacts: getContactsPageData,
    main: getMainPageData,
    nav: getNavPageData,
    modalappointment: getAppointmentModalPageData
};

mongoose.connect(process.env.MONGODB_URI as string)
    .then((): any => {
        log.warning('CONNECTED TO DATABASE');

        pagesToCreate.forEach((pageId: string): void => {
            mapper[pageId]()
                .then((data: Array<IPage>) => {
                    Page.insertMany(data);
                    log.warning('\x1b[32m', 'INSERTED:', pageId, data.length, 'pages');
                })
        });
    });
