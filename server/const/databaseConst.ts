import {Page as Page} from "../models/page";

let email: string;
let lastUpdated: number;

export const databaseConstQ = {
    get email() {
        if (email) {
            return Promise.resolve(email);
        }

        return Page.find({entityId: 'main', language: 'en'})
            .then((page: any) => {
                email = page[0].pageData.notificationEmail;
                return email;
            });
    },

    updateValues() {
        Page.find({entityId: 'main', language: 'en'})
            .then((page: any) => {
                email = page[0].pageData.notificationEmail;
            });
    }
};
