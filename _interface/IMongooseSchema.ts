import {TLanguage, TWeekday} from "./types";

export namespace Database {
  interface IMongooseSchema {
    _id?: string;
    __v?: string;
    language?: TLanguage;
    isPublished?: boolean;
  }

  export interface IContact extends IMongooseSchema {
    key: string;
    value: string;
    name: string;
    viberMobile?: string;
    viberDesktop?: string;
    telegram?: string;
    linkto?: string;
  }

  export interface IDiploma extends IMongooseSchema {
    image: string;
    institute: string;
    graduateYear: number;
    isPublished?: boolean;
    order: number;
  }

  export interface IService extends IMongooseSchema {
    header: string;
    description: string;
    image: string;
    price?: number;
    currency?: string;
    priceLabel: string;
    entityId?: string;
    title?: string;
    period: string;
    noPriceValue?: string;
    headerAndPrice?: string;
  }

  export interface IReview extends IMongooseSchema {
    name: string;
    body: string;
    email?: string;
    isPublished?: boolean;
  }

  export interface IUser extends IMongooseSchema {
    firstName?: string;
    lastName?: string;
    login: string;
    email?: string;
    password?: string;
    isFirstLogin: boolean;
    canEditUsers: boolean;
    canCreateUsers: boolean;
    canEditArticles: boolean;
    canAddArticles: boolean;
    canApproveReviews: boolean;
    canEditContacts: boolean;
    canEditServices: boolean;
    canAddServices: boolean;
    currentPassword?: string;
    repeatPassword?: string;
  }

  export interface IArticle extends IMongooseSchema {
    logo: string;
    header: string;
    isPublished: boolean;
    createdAt: Date;
    updatedAt: Date,
    deletedAt?: Date,
    isDeleted: boolean,
    url: string,
    entityId: string
  }

  export interface ISchedule {
    weekday?: TWeekday;
    date?: string;
    availableHours: Array<string>;
  }
}
