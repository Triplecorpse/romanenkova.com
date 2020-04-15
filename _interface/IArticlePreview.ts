import {TLanguage} from './types';

export interface IArticlePreview {
  logo: string;
  header: string;
  language: TLanguage;
  isPublished?: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  isDeleted?: boolean;
  url?: string;
  entityId: string;
}
