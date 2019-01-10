export interface IMainDataRequest {
    position: string;
    firstName: string;
    lastName: string;
    email: string;
}

export interface IMainDatabaseModel {
    index: string[],
    attend: string,
    name: string[],
    position: string,
    notificationEmail: string
}