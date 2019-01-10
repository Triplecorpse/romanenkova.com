# Irina Romanenkova's site

## init
`set PORT={number}`

## API doc
1. Page

    `GET`

    Returns:

        {
            header: string;
            body?: string | Array<contacts> | Array<nav>;
            langugae: 'en' | 'ru' | 'uk';
            entityId: 'nav' | 'contacts' | 'about' | 'diploma' | 'service' | 'article' | 'main';
        }

    | Parameter | Default | Required  | Type               | Description         |
    |:--------- |:------: |:--------- |:------------------ |:------------------- |
    | id        | -       | true     | string \|\| string[ ] | id of page: `nav, contacts, about, diploma, service, article`       |
    | lang      | -       | true      | string \|\| string[ ] | language of page: `en, ru, uk` |
2. Article

    `GET`

    | Parameter | Default | Required  | Type               | Description         |
    |:--------- |:------- |:--------- |:------------------ |:------------------- |
    | id        | null    | false     | string \|\| string[ ] | id of article       |
    | lang      | -       | true      | string \|\| string[ ] | language of article |

    Gets all articles which are not deleted and are published.
    If `id` is specified, gets 1 article with correspondent id.
    If admin is logged in, all articles are loaded irrespective
    of isDeleted and isPublished flags.

    `POST`

    | Parameter | Default | Required  | Type   | Description         |
    |:--------- |:------- |:--------- |:------ |:------------------- |
    | id        | null    | false     | string | id of article       |
    | lang      | null    | true      | string | language of article |

    Gets all articles which are not deleted and are published.
    If `id` is specified, gets 1 article with correspondent id.
    If admin is logged in, all articles are loaded irrespective
    of isDeleted and isPublished flags.