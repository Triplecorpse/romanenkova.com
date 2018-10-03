import {IPage, Page as Page} from "../server/models/page";
import log from "../server/services/log-service";
import {ISchedule, Schedule} from "../server/models/schedule";

export function getSchedule(): Promise<Array<ISchedule>> {
    const data: Array<ISchedule> = [
        {
            weekday: 'su',
            availableHours: [],
        }, {
            weekday: 'mo',
            availableHours: ['16:00-19:59'],
        }, {
            weekday: 'tu',
            availableHours: ['16:00-19:59'],
        }, {
            weekday: 'we',
            availableHours: ['16:00-19:59'],
        }, {
            weekday: 'th',
            availableHours: ['16:00-19:59'],
        }, {
            weekday: 'fr',
            availableHours: ['16:00-19:59'],
        }, {
            weekday: 'sa',
            availableHours: ['10:00-12:59', '14:00-19:59'],
        }, {
            date: '28.10.2018',
            availableHours: ['02:00-10:00']
        }, {
            date: '30.10.2018',
            availableHours: []
        }
    ];

    return new Promise((resolve: any, reject: any) => {
        return Schedule.deleteMany({})
            .then((result: any) => {
                log.warning('\x1b[31m', 'DELETED: schedule', result.n, 'pages');
                resolve(data);
            })
            .catch((err: any) => {
                reject(err);
            });
    })
}
