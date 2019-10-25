export interface IArticlePreview {
  logo: string;
  header: string;
  isPublished?: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  isDeleted?: boolean;
  url?: string;
  entityId: string;
}
