import log from "../server/services/log-service";
import {User} from "../server/models/user";
import {Database} from "../_interface/IMongooseSchema";

export function getInitUsers(): Promise<Array<Database.IUser>> {
    const data: Array<Database.IUser> = [
        {
            login: 'admin',
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
            canAddArticles: true,
            isFirstLogin: true
        }
    ];

    return new Promise((resolve: any, reject: any) => {
        return User.deleteOne({nickName: 'admin'})
            .then(() => {
                log.warning('\x1b[31m', 'DELETED: user admin');
                resolve(data);
            })
            .catch((err: any) => {
                reject(err);
            });
    })
}
