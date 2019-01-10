import {Article, IArticle} from "../../models/article";

export function getArticles(conditions: any = {}): Promise<Array<IArticle>> {
    return new Promise((resolve: any, reject: any) => {
        Article.find(conditions)
            .then((articles: Array<any>) => {
                resolve(articles.map((article: any): IArticle => ({
                    createdAt: article.createdAt,
                    deletedAt: article.deletedAt,
                    entityId: article.entityId,
                    header: article.header,
                    isDeleted: article.isDeleted,
                    isPublished: article.isPublished,
                    language: article.language,
                    logo: article.logo,
                    updatedAt: article.updatedAt,
                    url: article.url
                })))
            })
            .catch((err: any) => {
                reject(new Error(err.message))
            });
    });
}