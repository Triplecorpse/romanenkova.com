import {IPage, Page as Page} from "../server/models/page";
import log from "../server/services/log-service";
import {ISchedule, Schedule} from "../server/models/schedule";
import {IUser} from "../server/models/user";

export function getInitUsers(): Promise<Array<ISchedule>> {
    const data: Array<IUser> = [
        {
            nickName: 'admin',
            password: 'admin',
            lastName: '',
            firstName: '',
            email: 'benzin.a95@list.ru',
            canEditUsers: true,
            canEditServices: true,
            canEditContacts: true,
            canEditArticles: true,
            canCreateUsers: true,
            canApproveReviews: true,
            canAddServices: true,
            canAddArticles: true
        }
    ];

    return new Promise((resolve: any, reject: any) => {
        return Schedule.deleteOne({nickName: 'admin'})
            .then(() => {
                log.warning('\x1b[31m', 'DELETED: user admin');
                resolve(data);
            })
            .catch((err: any) => {
                reject(err);
            });
    })
}
